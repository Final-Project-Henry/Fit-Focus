const exercises = [
    {
     "name": "PUSHUPS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/c.tenor.com\/gI-8qCUEko8AAAAC\/pushup.gif"
    },
    {
     "name": "KNEE PUSH UPS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/W_cGMvJdlWQAAAAC\/widegrip-pushups.gif"
    },
    {
     "name": "DIAMOND PUSH UPS",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/thumbs.gfycat.com\/AffectionateImmenseIrishdraughthorse-size_restricted.gif"
    },
    {
     "name": "CLAP PUSH UPS",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/c.tenor.com\/EbRmSXrs5JQAAAAd\/clap-pushups-stephen-farrelly.gif"
    },
    {
     "name": "SQUATS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/g6XQ1z_Op0QAAAAC\/squats-body-weight-training.gif"
    },
    {
     "name": "SUMO SQUATS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/i.pinimg.com\/originals\/19\/5b\/a7\/195ba798f4246ae9930a97ea2e084aae.gif"
    },
    {
     "name": "SIDE TAP SQUAT",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/workout-gifs.s3.amazonaws.com\/routines\/ecfc6c6f-8889-485b-85a2-b87b5a6c905a.gif"
    },
    {
     "name": "BULGARIAN SQUAT",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/ajSFCn6kW9YAAAAC\/fitness-girlfitness.gif"
    },
    {
     "name": "JUMP SQUAT",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/KTAavalOAWQAAAAC\/squat-jumps.gif"
    },
    {
     "name": "JUMPING JACK",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/jPmY-vQLpeMAAAAd\/jumping-jacks-home-workouts.gif"
    },
    {
     "name": "MOUNTAIN CLIMBERS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/NYyx3iSx_gwAAAAd\/home-workouts-exercise.gif"
    },
    {
     "name": "JUMP LUNGES",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/meIUZZ_2oZMAAAAC\/lunge-jump.gif"
    },
    {
     "name": "LUNGES",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/thumbs.gfycat.com\/AbleFondChick-size_restricted.gif"
    },
    {
     "name": "WALL SIT",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/cdn2.actitudfem.com\/media\/files\/media\/files\/wall-sit.gif"
    },
    {
     "name": "SIT UPS",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/vFqz6XYPKPIAAAAC\/abdominal-supra-abdominal.gif"
    },
    {
     "name": "KNEE LIFT",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/8rrpHAyXEdMAAAAd\/home-workouts-exercise.gif"
    },
    {
     "name": "BURPEE",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/e-BbzN3OQZIAAAAd\/burpees-with-pushups-home-workouts.gif"
    },
    {
     "name": "UP\/DOWN PLANKS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/U1FRIHCpWP0AAAAd\/up-and-down-planks-home-workouts.gif"
    },
    {
     "name": "PLANK",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/Ww5Ytjlx4QwAAAAC\/prancha-treino-mestre.gif"
    },
    {
     "name": "PLANK JACKS",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/media3.giphy.com\/media\/2UqZvQq4p9DjTBDVRc\/giphy.gif"
    },
    {
     "name": "REVERSE LUNGE",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/ahYtJQbVUP0AAAAd\/reverse-lunges-home-workouts.gif"
    },
    {
     "name": "GLUTE BRIDGE",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "woman",
     "video": "https:\/\/c.tenor.com\/DKzLlyBdRC0AAAAd\/abs-work-out-female-abs.gif"
    },
    {
     "name": "SINGLE LEG GLUTE BRIDGE",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "woman",
     "video": "https:\/\/c.tenor.com\/6e9R6ktpmjQAAAAC\/single-leg-butt-bridge.gif"
    },
    {
     "name": "LEG RAISES",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/ou75vnhll2oAAAAd\/abs-and-legs-day-abs-work-out.gif"
    },
    {
     "name": "CRUNCHES",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "lower_body",
     "genre": "woman",
     "video": "https:\/\/c.tenor.com\/aYQhqKS_fCQAAAAd\/crunches-legs-day.gif"
    },
    {
     "name": "BICYCLE CRUNCH",
     "difficulty": "hard",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/_IMon7l-gkAAAAAd\/bicycle-crunch-female-abs.gif"
    },
    {
     "name": "TWISTING PISTON",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/qf1ZBvUhAYoAAAAd\/twisting-piston-legs-day.gif"
    },
    {
     "name": "SCISSOR DROP",
     "difficulty": "medium",
     "equipment": false,
     "muscles": "abs",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/7IIaeYzNZL4AAAAd\/scissor-drop-legs-work-out.gif"
    },
    {
     "name": "GROINER",
     "difficulty": "easy",
     "equipment": false,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/gS5cBcUsM4kAAAAC\/groiner-leg-work-out.gif"
    },
    {
     "name": "DEADLIFT",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/APh12ekUwcIAAAAC\/dumbbell-deadlift.gif"
    },
    {
     "name": "JUMPING ROPE",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "functional",
     "genre": "both",
     "video": "https:\/\/cdn2.actitudfem.com\/media\/files\/media\/files\/saltar-la-cuerda.gif"
    },
    {
     "name": "DUMBBELL HIP THRUST",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/media.self.com\/photos\/6227cbe0a252d9c49d777962\/master\/w_1600%2Cc_limit\/Jowan-hip-thrust-bench.gif"
    },
    {
     "name": "WEIGHT SQUATS ",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/static.wixstatic.com\/media\/c94d75_5da40ebd254249df861fb7cd7070fbcb~mv2.gif"
    },
    {
     "name": "DUMBBELL PRESS",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/JAzAnN89QNsAAAAd\/station19-andy-herrera.gif"
    },
    {
     "name": "PARALLEL DIPS",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/Aq6euho3C5wAAAAC\/dip-workout.gif"
    },
    {
     "name": "DUMBBELL ROW",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/hips.hearstapps.com\/hmg-prod.s3.amazonaws.com\/images\/dumbbell-single-arm-row-1547729333.gif"
    },
    {
     "name": "MILITAR PRESS",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/i.gifer.com\/NRC9.gif"
    },
    {
     "name": "ARNOLD PRESS",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/c.tenor.com\/ZR-_3Mxq0gYAAAAd\/arnold-press.gif"
    },
    {
     "name": "FRONT SQUATS",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/zDqpubY7520AAAAC\/dumbbell-front.gif"
    },
    {
     "name": "DUMBBELL ROMANIAN",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/kyOyzUcfIpMAAAAC\/dumbbell-romanian.gif"
    },
    {
     "name": "CURL BICEP",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/c.tenor.com\/atXCbqe9KAYAAAAd\/bicep-curls-sheamus.gif"
    },
    {
     "name": "BULGARIAN SPLIT SQUAT",
     "difficulty": "hard",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/8dUU3fffAp8AAAAd\/db-bulgarian-split-squat.gif"
    },
    {
     "name": "DROP SQUAT",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "lower_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/rVh_mO28wpMAAAAd\/db-drop-squat.gif"
    },
    {
     "name": "TRICEP KICK BACK",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "man",
     "video": "https:\/\/c.tenor.com\/jqwaOmRs-7gAAAAC\/tricep-kick-back-tricep.gif"
    },
    {
     "name": "BAND ROW",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/o3DZFudV2gkAAAAd\/bentoverrow-row.gif"
    },
    {
     "name": "BACK EXTENSION",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "functional",
     "genre": "woman",
     "video": "https:\/\/c.tenor.com\/FdSmFsLOItMAAAAC\/back-extension-exercise.gif"
    },
    {
     "name": "BANDED TRICEP EXTENSION",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/BiD98h7-kf0AAAAC\/banded-tricep.gif"
    },
    {
     "name": "BAND PULLS",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/appGngmuNHAAAAAC\/face-pulls.gif"
    },
    {
     "name": "SUPERMAN",
     "difficulty": "easy",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/BpWq8HxUxeAAAAAC\/lumbaresms.gif"
    },
    {
     "name": "STATIC SUPERMAN",
     "difficulty": "medium",
     "equipment": true,
     "muscles": "upper_body",
     "genre": "both",
     "video": "https:\/\/c.tenor.com\/PRLfXaemvfwAAAAd\/superman-est%C3%A1tico-treino-mestre.gif"
    }
   ];

   module.exports = exercises;
   