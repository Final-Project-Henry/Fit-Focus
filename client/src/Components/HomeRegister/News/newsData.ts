import News1 from "./newsComponents/News1"

export interface tags {
    text: string
    color: string
    colorHover: string
}

export interface news {
    id: number
    title: string
    description: string
    author: string
    image: string
    info?: any
    date: string
    tags?: Array<tags>
}

const news: Array<news> = [
    {
        id: 0,
        title: "¿Qué es más importante para bajar de peso, la dieta o el ejercicio?",
        description: "Ejercitarse de manera regular es más importante que seguir una dieta saludable? Eso depende de tu objetivo. Te contamos las ventajas y desventajas de enfocarte en el ejercicio o en la dieta.",
        author: "Adrian Acurero",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/fc12f163-87ce-40bb-9db2-f279e1a4fb5f/dieta-o-ejercicio-%C2%BFcu%C3%A1l-es-m%C3%A1s-importante-para-perder-peso.jpg",
        info: "",
        date: 'abril 26, 2022',
        tags: []
    },
    {
        id: 1,
        title: 'Doce tips para hacer ejercicio en la casa',
        description: 'Si quieres ponerte en forma, considera estos tips esenciales que debes seguir en tu esfuerzo para hacer ejercicio en casa y podrías ver resultados muy exitosos.',
        author: 'Marcel Franco',
        image: 'https://www.mapfre.cl/media/12-tips-para-hacer-ejercicio-en-la-casa.jpg',
        info: '',
        date: 'abril 21, 2004',
        tags: []
    },
    {
        id: 2,
        title: '¿Deberías ejercitar si te aqueja una enfermedad?',
        description: 'Hacer ejercicio físico mientras te aqueja una enfermedad puede ser un riesgo. Esto es lo que los expertos quieren que sepas.',
        author: 'Lauren Bedosky',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/0de5c0d4-5a7a-47f5-b9de-4cac8137f5f7/%C2%BFdeber%C3%ADas-ejercitar-si-te-aqueja-una-enfermedad.jpg',
        info: '',
        date: 'abril 26, 2022',
        tags: []
    },
    {
        id: 3,
        title: 'Cinco motivos por los que no ves resultados a pesar de entrenar',
        description: 'Si estás entrenando, pero no ves resultados físicos, te contamos cuáles son algunas barreras que podrían estar afectando.',
        author: 'Rafael Betancourt',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/439ff68f-bf8c-4424-8b8a-3236d4f73c45/%C2%BFest%C3%A1s-entrenando-pero-no-pierdes-peso-esta-es-la-raz%C3%B3n.jpg',
        info: '',
        date: 'julio 25, 2022',
        tags: [/* "Salud y bienestar" */]
    },
    {
        id: 4,
        title: '¿Deberías entrenar si sientes dolor?',
        description: 'El dolor después de hacer ejercicio no siempre es causa de preocupación, si sabes cómo notar la diferencia entre el dolor común después de entrenar y un dolor más serio.',
        author: 'Martin Angulo',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/23199536-99ce-4fa8-9239-360ce9e14616/%C2%BFdeber%C3%ADas-ejercitar-si-sientes-dolor.jpg',
        info: '',
        date: 'septiembre 23, 2022',
        tags: []
    },
    {
        id: 5,
        title: 'Cómo saber si te has deshidratado y qué hacer al respecto',
        description: 'Los expertos abordan los signos clave de la deshidratación y brindan consejos prácticos sobre cómo puedes evitar que suceda.',
        author: 'Rodrigo Sansebastian',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/403bca34-11fd-440c-9ee2-be43996ac30c/c%C3%B3mo-saber-si-te-has-deshidratado-y-qu%C3%A9-hacer-al-respecto.jpg',
        info: '',
        date: 'febrero 30, 2022',
        tags: []
    },
    {
        id: 6,
        title: '¿Cuánto tiempo tiene que durar tu entrenamiento? Los expertos lo explican',
        description: 'No importan las limitaciones de tiempo, los entrenamientos cortos o prolongados pueden tener efectos profundos en tu salud general.',
        author: 'Caterina Arancil',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1042,c_limit/0ef3e81b-cdec-462b-82ab-3f0e14b935ee/%C2%BFcu%C3%A1nto-tiempo-tiene-que-durar-tu-entrenamiento.jpg',
        info: '',
        date: 'julio 27, 2022',
        tags: []
    },
    {
        id: 7,
        title: 'Los 13 mejores ejercicios de cuerpo completo que puedes hacer sin equipo según los expertos',
        description: 'Estos son los mejores ejercicios con peso corporal que puedes hacer en casa.',
        author: 'David Cicconi',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/a3aee9d8-42ad-4a36-a86a-75cf6ac3f3fc/los-13-mejores-ejercicios-de-cuerpo-completo-que-puedes-hacer-sin-equipo-seg%C3%BAn-los-expertos.jpg',
        info: '',
        date: 'junio 29, 2022',
        tags: []
    },
    {
        id: 8,
        title: 'Cómo tratar los músculos adoloridos después de un entrenamiento intenso según los expertos',
        description: 'Cuatro profesionales de la salud ofrecen remedios (y consejos de prevención) que pueden aliviar el dolor y, al mismo tiempo, acelerar tu recuperación.',
        author: 'Julian Soto',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/892b73b3-19b4-4fcc-b98d-6c05cd624b48/c%C3%B3mo-tratar-los-m%C3%BAsculos-adoloridos-despu%C3%A9s-de-un-entrenamiento-intenso-seg%C3%BAn-los-expertos.jpg',
        info: '',
        date: 'Julio 26, 2022',
        tags: []
    },
    {
        id: 9,
        title: 'Cómo saber si sufres agotamiento por calor y qué hacer, según los médicos',
        description: 'Descubre los síntomas del agotamiento por calor y cómo tratar el problema de inmediato.',
        author: 'Ivan Garcia',
        image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/7e26265b-63f0-4520-9ab7-d9055bbfac94/c%C3%B3mo-saber-si-sufres-un-golpe-de-calor-y-qu%C3%A9-hacer-seg%C3%BAn-los-m%C3%A9dicos.jpg',
        info: '',
        date: 'Junio 17, 2022',
        tags: []
    }
]

export default news