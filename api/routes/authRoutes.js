const { Router } = require("express");
const user = require("../models/User.js");
const exercise = require("../models/Exercise.js");
const bcrypt = require("bcrypt");
const router = Router();
const get_Routine = require("../getRoutine.js");
const validation = require("../validations/validations");
const mercadopago = require("../service/mercadoPago.js");
const { get_preference } = require("../additional/preference.js");
const mailSettings = require("../additional/nodemailer");

const isEmpty = require("../additional/isEmpty.js");

router.put("/userinfo", async (req, res) => {
  // Ruta para actualizar la informacion del usuario para crear una rutina(PREMIUM)
  if (!validation.userinfo(req.body))
    return res.status(500).send("Invalid info");

  try {
    const { email } = req.user;
    const { genre, age, weight, height, goal, equipment, experience } =
      req.body;

    await user.updateOne(
      { email: email },
      {
        userinfo: { genre, age, weight, height, goal, equipment, experience },
      }
    );
    return res.status(200).send("User updated");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/userfeedback", async (req, res) => {
  try {
    const { comment, email } = req.body;
   
    if(!/^.{10,50}$/.test(comment)){
      return res.status(403).send('Comment must contain at least 10 characters')
  }

    await user.updateOne(
      { email: email },
      {
        feedback: comment,
      }
    );
    res.status(200).send("Feedback sent");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/getroutine", async (req, res) => {
  const { email } = req.user;

  try {
    const exercises = await exercise.find();
    const check = await user.findOne({ email: email }).select("userinfo");
    const routine = get_Routine(check.userinfo[0], exercises);

    await user.updateOne(
      { email: email },
      {
        routines: routine.exercises,
      }
    );
    res.status(200).json(routine);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/exercise", async (req, res) => {
  const { id } = req.query;

  const exerciseFind = await exercise.findById(id);
  if (exerciseFind) {
    res.status(200).send(exerciseFind);
  } else {
    res.status(400).send("Token invalido");
  }
});

router.put("/changeinfo", async (req, res) => {
  const { id } = req.user;

  try {
    let modification = {};
    for (const key in req.body) {
      if (req.body[key] !== undefined) {
        if (key === "password") {
          const hashPassword = await bcrypt.hash(req.body[key], 10);
          modification = { ...modification, [key]:hashPassword };
        }else{
          modification = { ...modification, [key]: req.body[key] };
        }
      }
    }
      

    await user.updateMany({ _id: id }, modification);

    res.status(200).send("Info changed succesfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id, email } = req.user;
    await user.updateOne(
      { _id: id },
      {
        status: "desactivated",
      }
    );
    const transporter = mailSettings.transporter;
    const mailDetails = mailSettings.mailDelete(email);
    transporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado");
      }
    });
    res.status(200).send("Deleted succesfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/addfav", async (req, res) => {
  const { id } = req.user;
  const { _id } = req.body;

 const User = await user.findById(id) 
 if(!User) return res.status(400).send('User not found')

  await user.updateOne(
    { _id: id },
    {
      $push: {
        fav: { id: _id },
      },
    }
  );
  res.status(200).send("Exercise added to fav");
});

router.get("/profile", async (req, res) => {
  const { id } = req.user;

  const User = await user.findOne({ _id: id });
  if (User) {
    res.status(200).send(User);
  } else {
    res.status(400).send("Token invalido");
  }
});

router.get("/ValidToken", async (req, res) => {
  const { id } = req.user;
  const User = await user.findOne({ _id: id });
  if (User) {
    res.status(200).send("perfecto");
  } else {
    res.status(400).send("Token invalido");
  }
});

router.get("/payment", async (req, res) => {
  try {
    const { email, name, id } = req.user;
    const preferences = get_preference(name, email, id);
    const response = await mercadopago.preferences.create(preferences);
    res
      .status(200)
      .json({
        id: response.body.id,
        collector_id: response.body.collector_id,
        response,
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/confirmation", async (req, res) => {
  try {
    const { payment_id } = req.query;
    const { id } = req.user;
    const response = await mercadopago.payment.findById(payment_id);
    if (
      response.response.additional_info.payer.last_name === id &&
      response.body.status === "approved"
    ) {
      await user.updateOne(
        { _id: id },
        {
          plan: "premium",
        }
      );
      res.status(200).send("Ya eres premium!!");
    } else res.status(403).send("Pago rechazado");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/feedbackExercise", async (req, res) => {
  try {
    const { email } = req.user;
    const { comment, rating, id, avatar } = req.body;

    if(!/^.{10,50}$/.test(comment)){
      return res.status(403).send('Comment must contain at least 10 characters')
  }
 
  if(!/[1-5]/.test(rating)) return res.status(403).send('Rating has to be between 1 and 5')
  
    const feedbackAntiguo = await exercise.findById(id)
      .select("feedback")
      .where("email")
      .equals(email);

    let feedback = [
      {
        email,
        comment,
        rating,
        avatar,
      },
    ];

    if (feedbackAntiguo) {
      const filter = feedbackAntiguo.feedback.filter((e) => e.email !== email);
      feedback = [...filter, ...feedback];
    }

    await exercise.updateOne({ _id: id }, { feedback: feedback });

    res.status(200).send("Feedback added");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/report", async (req, res) => {
  const { email : emailUsuario } = req.user;
  const { email, id } = req.body;
  if(emailUsuario === email) return res.status(403).send('You cannot report your own feedback')


  const ComentarioDenunciado = await exercise.findById(id).select('feedback').where('email').equals(email)

  if(isEmpty(ComentarioDenunciado.feedback)) return res.status(404).send('Feedback not found')

  const reportAntiguo = ComentarioDenunciado.feedback[0].report.find(report => report === emailUsuario)

  if(reportAntiguo) return res.status(403).send('Report already added')

  ComentarioDenunciado.feedback[0].report.push(emailUsuario)
 
  await ComentarioDenunciado.save()
  res.status(200).send('Report added')
});



module.exports = router;
