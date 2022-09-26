
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
    get_message_IMC: (IMC:number)=>{
        
        if(IMC<18.5){
            return {
                message: "Al igual que el sobre peso u obesidad, el estar por debajo del peso adecuado tiene consecuencias. A nivel de rendimiento en el dia a dia, genera mucha fatiga, cansancio excesivo, desmayos, entre otros problemas de salud que a la larga, van a reducir su calidad de vida y su espectativa de vida.Aunque no es tan grave como la obesidad o el sobre peso, el bajo peso tiene la misma solucion: llevar una mejor dieta, con mas nutrientes, menos grasas saturadas, y hacer ejercicio regularmente, estas son las claves para un estilo de vida saludable y por ende, una vida mejor.",
                nivel: "Bajo Peso"
            };
        }
        else if(IMC<25){
            return {
                message: 'Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad.',
                nivel: "Normal"
            }
        }
        else if(IMC<30){
            return {
                message: "Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Hable con su proveedor de atención médica para establecer maneras adecuadas de perder peso.",
                nivel: "Sobre peso"
            }
        }
        else {
            return {
                message: "Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Hable con su proveedor de atención médica para establecer maneras adecuadas de perder peso.",
                nivel: "Obeso"
            }
        }
    },

}
