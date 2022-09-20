const exercises = [
    {
     "name": "PUSHUPS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif",
     "premium": false,
        "description": "La flexión de codos es un ejercicio que involucra los codos, también conocida como lagartijas, plancha, pechada o simplemente flexión, es un ejercicio físico realizado estando en posición inclinada, recostado hacia abajo, levantando el cuerpo únicamente con los brazos y bajando de nuevo al suelo."
    },
    {
     "name": "KNEE PUSH UPS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/W_cGMvJdlWQAAAAC/widegrip-pushups.gif",
     "premium": false,
         "description": 
    },
    {
     "name": "DIAMOND PUSH UPS",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://thumbs.gfycat.com/AffectionateImmenseIrishdraughthorse-size_restricted.gif",
      "premium": false,
        "description":"“Este tipo de ejercicio es popularmente conocido en el mundo de gimnasio por ser la rutina idónea con la que conseguir una activación de los tríceps y obtener un mayor volumen de este músculo de forma rápida”"
    },
    {
     "name": "CLAP PUSH UPS",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://c.tenor.com/EbRmSXrs5JQAAAAd/clap-pushups-stephen-farrelly.gif",
     "premium": false,
          "description":
    },
    {
     "name": "SQUATS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/g6XQ1z_Op0QAAAAC/squats-body-weight-training.gif",
     "premium": false,
          "description":
    },
    {
     "name": "SUMO SQUATS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://i.pinimg.com/originals/19/5b/a7/195ba798f4246ae9930a97ea2e084aae.gif",
     "premium": false,
          "description":
    },
    {
     "name": "SIDE TAP SQUAT",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://workout-gifs.s3.amazonaws.com/routines/ecfc6c6f-8889-485b-85a2-b87b5a6c905a.gif",
     "premium": false,
          "description":
    },
    {
     "name": "BULGARIAN SQUAT",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://www.historia.waszczyk.com/60865fa9e6169b29ad8e78a66069cc1f/bulgarian-split-squat.gif",
     "premium": false,
          "description":
    },
    {
     "name": "JUMP SQUAT",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/KTAavalOAWQAAAAC/squat-jumps.gif",
     "premium": false,
          "description":
    },
    {
     "name": "JUMPING JACK",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/jPmY-vQLpeMAAAAd/jumping-jacks-home-workouts.gif",
     "premium": false,
          "description":
    },
    {
     "name": "MOUNTAIN CLIMBERS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/NYyx3iSx_gwAAAAd/home-workouts-exercise.gif",
     "premium": false,
          "description":
    },
    {
     "name": "JUMP LUNGES",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/meIUZZ_2oZMAAAAC/lunge-jump.gif",
     "premium": false,
          "description":
        
    },
    {
     "name": "LUNGES",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://thumbs.gfycat.com/AbleFondChick-size_restricted.gif",
     "premium": true,
          "description":
    },
    {
     "name": "WALL SIT",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://cdn2.actitudfem.com/media/files/media/files/wall-sit.gif",
     "premium": false,
          "description":
    },
    {
     "name": "SIT UPS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https://c.tenor.com/vFqz6XYPKPIAAAAC/abdominal-supra-abdominal.gif",
     "premium": false,
          "description":
    },
    {
     "name": "KNEE LIFT",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/8rrpHAyXEdMAAAAd/home-workouts-exercise.gif",
     "premium": true,
          "description":
    },
    {
     "name": "BURPEE",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/e-BbzN3OQZIAAAAd/burpees-with-pushups-home-workouts.gif",
     "premium": true,
          "description":
    },
    {
     "name": "UP/DOWN PLANKS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/U1FRIHCpWP0AAAAd/up-and-down-planks-home-workouts.gif",
     "premium": true,
          "description":
    },
    {
     "name": "PLANK",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/Ww5Ytjlx4QwAAAAC/prancha-treino-mestre.gif",
     "premium": false,
          "description":
    },
    {
     "name": "PLANK JACKS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://media3.giphy.com/media/2UqZvQq4p9DjTBDVRc/giphy.gif",
     "premium": true,
          "description":
    },
    {
     "name": "REVERSE LUNGE",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/ahYtJQbVUP0AAAAd/reverse-lunges-home-workouts.gif",
     "premium": true,
          "description":
    },
    {
     "name": "GLUTE BRIDGE",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "woman",
     "video": "https://c.tenor.com/DKzLlyBdRC0AAAAd/abs-work-out-female-abs.gif",
     "premium": true,
          "description":
    },
    {
     "name": "SINGLE LEG GLUTE BRIDGE",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "woman",
     "video": "https://c.tenor.com/6e9R6ktpmjQAAAAC/single-leg-butt-bridge.gif",
     "premium": true,
         "description":
        
    },
    {
     "name": "LEG RAISES",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https://c.tenor.com/ou75vnhll2oAAAAd/abs-and-legs-day-abs-work-out.gif",
     "premium": true,
         "description":
    },
    {
     "name": "CRUNCHES",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "woman",
     "video": "https://c.tenor.com/aYQhqKS_fCQAAAAd/crunches-legs-day.gif",
     "premium": false,
         "description":
    },
    {
     "name": "BICYCLE CRUNCH",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https://c.tenor.com/_IMon7l-gkAAAAAd/bicycle-crunch-female-abs.gif",
     "premium": false,
         "description":
    },
    {
     "name": "TWISTING PISTON",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/qf1ZBvUhAYoAAAAd/twisting-piston-legs-day.gif",
     "premium": false,
         "description":
    },
    {
     "name": "SCISSOR DROP",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https://c.tenor.com/7IIaeYzNZL4AAAAd/scissor-drop-legs-work-out.gif",
     "premium": true,
         "description":
    },
    {
     "name": "GROINER",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https://c.tenor.com/gS5cBcUsM4kAAAAC/groiner-leg-work-out.gif",
     "premium": true,
         "description":
    },
    {
     "name": "DEADLIFT",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/APh12ekUwcIAAAAC/dumbbell-deadlift.gif",
     "premium": false,
         "description":
    },
    {
     "name": "JUMPING ROPE",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "functional",
     "genre": "both",
     "video": "https://cdn2.actitudfem.com/media/files/media/files/saltar-la-cuerda.gif",
     "premium": true,
         "description":
    },
    {
     "name": "DUMBBELL HIP THRUST",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://media.self.com/photos/6227cbe0a252d9c49d777962/master/w_1600%2Cc_limit/Jowan-hip-thrust-bench.gif",
     "premium": false,
         "description":
    },
    {
     "name": "WEIGHT SQUATS ",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://static.wixstatic.com/media/c94d75_5da40ebd254249df861fb7cd7070fbcb~mv2.gif",
     "premium": false,
         "description":
    },
    {
     "name": "DUMBBELL PRESS",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/JAzAnN89QNsAAAAd/station19-andy-herrera.gif",
     "premium": true,
         "description":
    },
    {
     "name": "PARALLEL DIPS",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/Aq6euho3C5wAAAAC/dip-workout.gif",
     "premium": false,
         "description":
    },
    {
     "name": "DUMBBELL ROW",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dumbbell-single-arm-row-1547729333.gif",
     "premium": false,
         "description":
    },
    {
     "name": "MILITAR PRESS",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://i.gifer.com/NRC9.gif",
     "premium": true,
         "description":
    },
    {
     "name": "ARNOLD PRESS",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://c.tenor.com/ZR-_3Mxq0gYAAAAd/arnold-press.gif",
     "premium": false,
         "description":
        
    },
    {
     "name": "FRONT SQUATS",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/zDqpubY7520AAAAC/dumbbell-front.gif",
     "premium": true,
         "description":
    },
    {
     "name": "DUMBBELL ROMANIAN",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/kyOyzUcfIpMAAAAC/dumbbell-romanian.gif",
     "premium": false,
         "description":
    },
    {
     "name": "CURL BICEP",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://c.tenor.com/atXCbqe9KAYAAAAd/bicep-curls-sheamus.gif",
     "premium": false,
         "description":
    },
    {
     "name": "BULGARIAN SPLIT SQUAT",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/8dUU3fffAp8AAAAd/db-bulgarian-split-squat.gif",
     "premium": true,
         "description":
    },
    {
     "name": "DROP SQUAT",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https://c.tenor.com/rVh_mO28wpMAAAAd/db-drop-squat.gif",
     "premium": false,
         "description":
    },
    {
     "name": "TRICEP KICK BACK",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https://c.tenor.com/jqwaOmRs-7gAAAAC/tricep-kick-back-tricep.gif",
     "premium": false,
         "description":
    },
    {
     "name": "BAND ROW",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/o3DZFudV2gkAAAAd/bentoverrow-row.gif",
     "premium": true,
         "description":
    },
    {
     "name": "BACK EXTENSION",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "functional",
     "genre": "woman",
     "video": "https://c.tenor.com/FdSmFsLOItMAAAAC/back-extension-exercise.gif",
     "premium": false,
         "description":
    },
    {
     "name": "BANDED TRICEP EXTENSION",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/BiD98h7-kf0AAAAC/banded-tricep.gif",
     "premium": true,
         "description":
    },
    {
     "name": "BAND PULLS",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/appGngmuNHAAAAAC/face-pulls.gif",
     "premium": true,
         "description":
    },
    {
     "name": "SUPERMAN",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
     "premium": true,
         "description":
    },
    {
     "name": "STATIC SUPERMAN",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
     "premium": false,
         "description":
    }
   ];

   module.exports = exercises;
   
