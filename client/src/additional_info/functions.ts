
export default {
    random: (data:any)=>{
        const comments = Object.keys(data);

        const result:any=[];
        let index:number;

        while(result.length<3){
            index = Math.floor(Math.random()*comments.length);
            if(!result.includes(comments[index])){
                result.push(comments[index])
            }
        }
        return result;
    },
    get_exercises: (data:Array<any>) => {
        const result = [];
        let random;
        for (let i = 1; i < 5; i++) {
          random  = Math.round(Math.random()*(data.length - 1));
          result.push(data[random]);
        }
        return result;
      },

}
