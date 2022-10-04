const exercises = require('./Exercises/exercises');

const get_Routine = (info, exercises) => {
    const routine = [];
    const av1 = info.genre === 'man' ? 3 : 2;
    const av2 = info.age > 50 ? 1 : info.age > 35 ? 2 : 3;
    const av3 = info.experience === 'beginner' ? 1 : info.experience === 'medium' ? 2 : 3;

    const average = Math.round((av1 + av2 + av3) / (Object.keys(info).length - 2));
    const totalAv = Math.round((average + (info.goal === 'gain muscles' ? 3 : 1)) / 2);

    const random = (number) => Math.round(Math.random() * number);

    const abs=[];
    const funct=[];
    const low=[];
    const upper=[];
    const stretch=[];

    if (totalAv > 1) {
        let add;
        stretch.push(exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "easy")[random(4)]);
        stretch.push(exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)]);
        add = exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)]
        while(stretch.includes(add)){
            add= exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)];
        }
        stretch.push(add);
    }
    else {

    }





    return {
        exercises: routine,
        difficulty: totalAv == 3 ? "hard" : totalAv == 2 ? "medium" : "easy",
        reps: 'long',
        type: 'mix',
    }
}

module.exports = get_Routine




