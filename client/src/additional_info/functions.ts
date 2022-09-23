
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
}
