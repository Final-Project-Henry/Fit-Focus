import jwtDecode from "jwt-decode";

export default {
  random: (data: any) => {
    const comments = Object.keys(data);
    const result: any = [];
    const result2 = [];
    let index: number;

    while (result.length < 3) {
      index = Math.floor(Math.random() * comments.length);
      if (!result.includes(comments[index])) {
        result.push(comments[index]);
      }
    }

    for (let i = 0; i < result.length; i++) {
      result2.push(data[result[i]]);
    }

    return result2;
  },
  get_exercises: (data: Array<any>) => {
    const result = [];
    let random;
    for (let i = 1; i < 5; i++) {
      random = Math.round(Math.random() * (data.length - 1));
      result.push(data[random]);
    }
    return result;
  },
  get_message_IMC: (IMC: number) => {
    if (IMC < 18.5) {
      return {
        message:
          "Al igual que el sobre peso u obesidad, el estar por debajo del peso adecuado tiene consecuencias. A nivel de rendimiento en el dia a dia, genera mucha fatiga, cansancio excesivo, desmayos, entre otros problemas de salud que a la larga, van a reducir su calidad de vida y su espectativa de vida.Aunque no es tan grave como la obesidad o el sobre peso, el bajo peso tiene la misma solucion: llevar una mejor dieta, con mas nutrientes, menos grasas saturadas, y hacer ejercicio regularmente, estas son las claves para un estilo de vida saludable y por ende, una vida mejor.",
        nivel: "Bajo Peso",
      };
    } else if (IMC < 25) {
      return {
        message:
          "Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad. Por favor siga mantiendo su peso entre los estandares para que su estilo de vida siga siendo bueno. A esto puede añadirle una rutina de ejercicios para asi complementar la alimentacion y mejorar su fuerza fisica y mental. El ejercicio tambien le ayudara a regular el estres que pueda presentar en el dia y asi mejorar su estado de animo",
        nivel: "Normal",
      };
    } else if (IMC < 30) {
      return {
        message:
          "Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Para lograr reducir los niveles de grasa en su cuerpo es sumamente necesario empezar con una rutina de ejercicios para principiantes que puede realizar en la comodidad de su casa y sin tener que pasar horas en el gym",
        nivel: "Sobre peso",
      };
    } else {
      return {
        message:
          "Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Para lograr reducir los niveles de grasa en su cuerpo es sumamente necesario empezar con una rutina de ejercicios para principiantes que puede realizar en la comodidad de su casa y sin tener que pasar horas en el gym",
        nivel: "Obeso",
      };
    }
  },
  caducaToken: (time: string) => {
    let actual = new Date();
    let vence = new Date(time);

    var MlSeconds = vence.getTime();
    var addMlSeconds = 720 * 60000;
    vence = new Date(MlSeconds + addMlSeconds);

    if (actual > vence) {
      return true;
    } else return false;
  },
  MejorRewind: (ejercicios: Array<any>) => {
    let rewind = ejercicios.map((e) => {
      if (e.feedback.length > 0) {
        let sum = 0;
        e.feedback.map((x: any) => {
          sum = sum + parseInt(x.rating);
        });
        let rating = { rating: sum, id: e._id };

        return rating;
      }
    });
    rewind = rewind.filter((e) => e !== undefined);

    rewind.sort((a, b) => {
      //@ts-ignore // error: posible undefined, si lo sabes joya
      return b?.rating - a?.rating;
    });
    rewind = rewind.map((e) => {
      let ejerBast = ejercicios.find((x) => x._id === e?.id);
      return { ...ejerBast, rating: e?.rating };
    });
    return rewind.slice(0, 4);
  },
};
