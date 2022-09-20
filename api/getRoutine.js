
const get_Routine = (info, exercises) => {
    const routine = [];
    const av1 = info.genre === 'man' ? 3 : 2;
    const av2 = info.age > 50 ? 1 : info.age > 35 ? 2 : 3;
    const av3 = info.experience === 'beginner' ? 1 : info.experience === 'medium' ? 2 : 3;

    const average = Math.round((av1 + av2 + av3) / (Object.keys(info).length - 2));
    const filter = exercises.filter(e => e.difficulty <= average);

    const cant = info.goal === 'gain muscles' ? 7 : 5;

    for (let i = 0; i < cant; i++) {
        const random = Math.floor(Math.random() * filter.length);
        routine.push(filter[random]);
    }

    return {
        exercises: routine,
        difficulty: average == 3 ? "hard" : average == 2 ? "medium" : "easy",
        reps: cant == 7 ? "long" : 'short',
        type: 'home',
    }
}


module.exports = get_Routine




