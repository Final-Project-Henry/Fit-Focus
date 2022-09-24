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
    info?: string
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
        tags: [
            {
                text: "Deport",
                color: "bg-blue-600",
                colorHover: "hover:bg-blue-700"
            },
            {
                text: "health",
                color: "bg-green-600",
                colorHover: "hover:bg-green-700",
            }
        ]
    },
    {
        id: 1,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 2,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 3,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 4,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 5,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 6,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 7,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 8,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    },
    {
        id: 9,
        title: '',
        description: '',
        author: '',
        image: '',
        info: '',
        date: '',
        tags: []
    }
]

export default news