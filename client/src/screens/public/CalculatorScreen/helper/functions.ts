export type levels = 'low_weight' | 'normal' | 'overweight' | 'obese'
export type FunctionByLevel = (level: levels) => string
export type FunctionByImc = (imc: number) => levels

export const resultsByLevel = {
  low_weight:
    'Al igual que el sobre peso u obesidad, el estar por debajo del peso adecuado tiene consecuencias. A nivel de rendimiento en el dia a dia, genera mucha fatiga, cansancio excesivo, desmayos, entre otros problemas de salud que a la larga, van a reducir su calidad de vida y su espectativa de vida.Aunque no es tan grave como la obesidad o el sobre peso, el bajo peso tiene la misma solucion: llevar una mejor dieta, con mas nutrientes, menos grasas saturadas, y hacer ejercicio regularmente, estas son las claves para un estilo de vida saludable y por ende, una vida mejor.',
  normal:
    'Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad. Por favor siga mantiendo su peso entre los estandares para que su estilo de vida siga siendo bueno. A esto puede añadirle una rutina de ejercicios para asi complementar la alimentacion y mejorar su fuerza fisica y mental. El ejercicio tambien le ayudara a regular el estres que pueda presentar en el dia y asi mejorar su estado de animo.',
  overweight:
    'Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Para lograr reducir los niveles de grasa en su cuerpo es sumamente necesario empezar con una rutina de ejercicios para principiantes que puede realizar en la comodidad de su casa y sin tener que pasar horas en el gym.',
  obese:
    'Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Para lograr reducir los niveles de grasa en su cuerpo es sumamente necesario empezar con una rutina de ejercicios para principiantes que puede realizar en la comodidad de su casa y sin tener que pasar horas en el gym.',
}

export const levelsTitle = {
  low_weight: 'Bajo de peso',
  normal: 'Normal',
  overweight: 'Sobrepeso',
  obese: 'Obeso',
}

export const getLevelTitle: FunctionByLevel = level => {
  return levelsTitle[level]
}

export const getResult: FunctionByLevel = level => {
  return resultsByLevel[level]
}

export const getLevelByImc: FunctionByImc = imc => {
  if (imc < 18.5) return 'low_weight'
  else if (imc < 25) return 'normal'
  else if (imc < 30) return 'overweight'
  else return 'obese'
}

export const getPointerPosition = (imc: number) => {
  const percentage = Math.round(8.3 * (imc - 18))
  return percentage > 100 ? 'calc(100% - 15px)' : `calc(${percentage}% - 15px)`
}
