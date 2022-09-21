module.exports = {
    register: ({name, email})=>{
        let pass = true;

        if(!/^[a-zA-Z ]{3,15}$/.test(name))pass=false;
        if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email))pass=false;
        return pass;
    },
    login:({email})=>{
        let pass = true;
        if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email))pass=false;
        return pass;
    },
    userinfo: ({genre, age, weight, height, goal, experience })=>{
        let pass = true;

        if(!/^([2-6][0-9])$/.test(age))pass=false;
        if(!['man', 'woman', 'other'].includes(genre))pass=false;
        if(!/^([5-9][0-9])$/.test(weight))pass=false;
        if(height<150||height>200)pass=false;
        if(!['gain muscles', 'lower fat percentage'].includes(goal))pass=false;
        if(!['beginner', 'medium', 'advanced'].includes(experience))pass=false;

        return pass;
    }
}