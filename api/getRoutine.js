

const get_Routine = async(info, exercises) => {
    let routine;
    const av1 = info.genre === 'man' ? 3 : 2;
    const av2 = info.age > 50 ? 1 : info.age > 35 ? 2 : 3;
    const av3 = info.experience === 'beginner' ? 1 : info.experience === 'medium' ? 2 : 3;

    const average = Math.round((av1 + av2 + av3) / (Object.keys(info).length - 2));
    const totalAv = Math.round((average + (info.goal === 'gain muscles' ? 3 : 1)) / 2);

    const random = (number) => Math.round(Math.random() * number);

    const abs = [];
    const funct = [];
    const low = [];
    const upper = [];
    const stretch = [];

    if (totalAv > 1) {
        let add;
        //stretching
        stretch.push(exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "easy")[random(4)]);
        stretch.push(exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)]);
        add = exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)]
        while (stretch.includes(add)) {
            add = exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)];
        }
        stretch.push(add);

        //abs
        abs.push(exercises.filter(e => e.muscles === 'abs' && e.difficulty === "hard")[random(1)]);

        //upper_body
        upper.push(exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "medium")[random(2)]);
        upper.push(exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "hard")[random(5)]);
        add = exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "hard")[random(5)];
        while (upper.includes(add)) {
            add = exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "hard")[random(5)];
        }
        upper.push(add);
        add = exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "hard")[random(5)];
        while (upper.includes(add)) {
            add = exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "hard")[random(5)];
        }
        upper.push(add);

        //lower_body
        low.push(exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)]);
        add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)];
        while (low.includes(add)) {
            add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)];
        }
        low.push(add);
        low.push(exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "hard")[random(5)]);
        add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "hard")[random(5)];
        while (low.includes(add)) {
            add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "hard")[random(5)];
        }
        low.push(add);

        //functional
        funct.push(exercises.filter(e => e.muscles === 'functional' && e.difficulty === "easy")[random(7)]);
        funct.push(exercises.filter(e => e.muscles === 'functional' && e.difficulty === "medium")[random(3)]);
        funct.push(exercises.filter(e => e.muscles === 'functional' && e.difficulty === "hard")[random(4)]);

        routine = [
            { order: 1, exerc: stretch[0], time: 30 },
            { exer: "rest", time: 15 },
            { order: 2, exerc: stretch[1], time: 30 },
            { exer: "rest", time: 15 },
            { order: 3, exerc: stretch[2], time: 30 },
            { exer: "rest", time: 15 },
            { order: 4, exerc: upper[0], time: 30 },
            { exer: "rest", time: 15 },
            { order: 5, exerc: low[0], time: 120 },
            { exer: "rest", time: 30 },
            { order: 6, exerc: abs[0], time: 120 },
            { exer: "rest", time: 30 },
            { order: 7, exerc: low[1], time: 120 },
            { exer: "rest", time: 30 },
            { order: 8, exerc: upper[1], time: 120 },
            { exer: "rest", time: 30 },
            { order: 9, exerc: low[2], time: 120 },
            { exer: "rest", time: 30 },
            { order: 10, exerc: upper[2], time: 120 },
            { exer: "rest", time: 30 },
            { order: 11, exerc: low[3], time: 120 },
            { exer: "rest", time: 30 },
            { order: 12, exerc: upper[3], time: 120 },
            { exer: "rest", time: 30 },
            { order: 13, exerc: funct[0], time: 30 },
            { exer: "rest", time: 15 },
            { order: 14, exerc: funct[1], time: 30 },
            { exer: "rest", time: 15 },
            { order: 15, exerc: funct[2], time: 30 },
        ]
    }
    else {
        let add;
        //stretching
        stretch.push(exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "easy")[random(4)]);
        add = exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "easy")[random(4)]
        while (stretch.includes(add)) {
            add = exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "easy")[random(4)];
        }
        stretch.push(add);
        stretch.push(exercises.filter(e => e.muscles === 'stretching' && e.difficulty === "medium")[random(3)]);

        //abs
        abs.push(exercises.filter(e => e.muscles === 'abs' && e.difficulty === "easy")[random(1)]);
        abs.push(exercises.filter(e => e.muscles === 'abs' && e.difficulty === "medium")[0]);

        //upper_body
        upper.push(exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "easy")[random(6)]);
        upper.push(exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "medium")[0]);
        upper.push(exercises.filter(e => e.muscles === 'upper_body' && e.difficulty === "medium")[1]);

        //lower_body
        low.push(exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "easy")[random(2)]);
        add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)];
        while (low.includes(add)) {
            add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)];
        }
        low.push(add);
        add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)];
        while (low.includes(add)) {
            add = exercises.filter(e => e.muscles === 'lower_body' && e.difficulty === "medium")[random(9)];
        }
        low.push(add);

        //functional
        funct.push(exercises.filter(e => e.muscles === 'functional' && e.difficulty === "easy")[random(7)]);
        add = exercises.filter(e => e.muscles === 'functional' && e.difficulty === "easy")[random(7)];
        while (low.includes(add)) {
            add = exercises.filter(e => e.muscles === 'functional' && e.difficulty === "easy")[random(7)];
        }
        funct.push(add);
        funct.push(exercises.filter(e => e.muscles === 'functional' && e.difficulty === "medium")[random(3)]);

        routine=[
            { order: 1, exerc: stretch[0], time: 30 },
            { exer: "rest", time: 15 },
            { order: 2, exerc: stretch[1], time: 30 },
            { exer: "rest", time: 15 },
            { order: 3, exerc: stretch[2], time: 30 },
            { exer: "rest", time: 15 },
            { order: 4, exerc: abs[0], time: 30 },
            { exer: "rest", time: 15 },
            { order: 5, exerc: upper[0], time: 90 },
            { exer: "rest", time: 30 },
            { order: 6, exerc: low[0], time: 90 },
            { exer: "rest", time: 30 },
            { order: 7, exerc: abs[1], time: 90 },
            { exer: "rest", time: 30 },
            { order: 8, exerc: low[1], time: 90 },
            { exer: "rest", time: 30 },
            { order: 9, exerc: upper[1], time: 90 },
            { exer: "rest", time: 30 },
            { order: 10, exerc: low[2], time: 90 },
            { exer: "rest", time: 30 },
            { order: 11, exerc: upper[2], time: 90 },
            { exer: "rest", time: 30 },
            { order: 12, exerc: low[3], time: 90 },
            { exer: "rest", time: 30 },
            { order: 13, exerc: funct[0], time: 30 },
            { exer: "rest", time: 15 },
            { order: 14, exerc: funct[1], time: 30 },
            { exer: "rest", time: 15 },
            { order: 15, exerc: funct[2], time: 30 },
        ]
    }

    return {
        exercises: routine,
        difficulty: totalAv == 3 ? "hard" : totalAv == 2 ? "medium" : "easy",
        reps: 'long',
        type: 'mix',
    }
}

module.exports = get_Routine




