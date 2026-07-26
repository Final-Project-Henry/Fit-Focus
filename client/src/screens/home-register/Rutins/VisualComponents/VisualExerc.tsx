interface exercise {
  name: string,
  difficulty: string,
  muscles: string,
  description: string,
}

interface RutinObj {
  order: number,
  exerc: exercise,
  time: number
}


export default function VisualExerc(props: { datos: RutinObj }) {

  const difficulty = props.datos.exerc?.difficulty

  return (
    <div style={{ width: "30vw" }} className=" bg-zinc-100 shadow-lg overflow-auto">

      <div className="relative" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-start", height: "50vh" }}>

        <h1 className='relative text-4xl font-semibold mt-5 shadow-sm px-3 rounded-md'>
          {props.datos.exerc?.name}
        </h1>

        <label className="mt-5">
          <b className='font-semibold text-xl text-gray-600 border-b-[1px]'>•Dificultad:</b>
          <span className={`text-xl font-semibold ml-2 ${difficulty === "easy" ? "text-green-500" : difficulty === "medium" ? "text-yellow-500" : "text-red-500"}`}>
            {props.datos.exerc?.difficulty}
          </span>
        </label>

        <label className="mt-5">
          <b className='font-semibold text-xl text-gray-600 border-b-[1px]'>
            •Musculos:
          </b>  
          <span className="text-xl font-semibold ml-2 ">
            {props.datos.exerc?.muscles}
          </span>
        </label>

        <label className="mt-5">
          <b className='text-xl text-gray-600 border-b-[1px]'>Descripcion:</b>
        </label>

        <p className='text-xl font-medium w-[75%] font-sans text-gray-900 hover:text-gray-800 mt-1'>{props.datos.exerc?.description}</p>

      </div>
    </div>
  )
}
