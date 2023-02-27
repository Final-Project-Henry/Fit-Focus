import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useAppSelector, useToken } from '../../../app/hooks'
import { selectUser } from '../../../features/counter/counterSlice'

interface ejerciciosData {
  _id: string
  name: string
  difficulty: string
  muscles: string
  genre: string
  video: string
  description: string
}

export default function CardEjetcicio(descripcionEjersicio: ejerciciosData) {
  let token = useToken()
  const [addFav, SetAddfav] = useState<boolean | string>('default')
  const { user, status } = useAppSelector(selectUser)

  function AddFavorite() {
    const favExisited = user?.fav.find((x: any) => x.id === descripcionEjersicio?._id)
    if (favExisited || addFav === 'Exercise added to fav') {
      Swal.fire({
        title: `Tu Ejercicio ya esta en tus Favoritos!❤️`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#6c63ff',
        confirmButtonText: 'Aceptar',
      }).then(async () => {
        SetAddfav('default')
      })
      return
    }
    Swal.fire({
      title: `¿Desea agreguar ${descripcionEjersicio?.name} a tus favoritos ?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#6c63ff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put('http://localhost:3001/auth/addfav', descripcionEjersicio, {
            headers: { Authorization: 'Bearer ' + token },
          })
          if (res.data) {
            SetAddfav(res.data)
          }
        } catch (error) {
          SetAddfav('error')
        }
      }
    })
  }

  useEffect(() => {
    if (addFav == 'Exercise added to fav') {
      Swal.fire({
        title: `${descripcionEjersicio?.name} fue agregado a tus favoritos `,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#6c63ff',
        confirmButtonText: 'Aceptar',
      })
    } else if (addFav == 'error') {
      Swal.fire({
        title: `Ups algo salio mal 😢`,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#6c63ff',
        confirmButtonText: 'Aceptar',
      })
    }
  }, [addFav])

  return (
    <>
      <div className={`max-w-full flex flex-col bg-white  shadow-md   `}>
        <div className={`min-h-[150px] w-full flex md:flex-nowrap flex-wrap overflow-hidden }`}>
          <img className='w-full md:w-[50%] ' src={descripcionEjersicio?.video} />
          <div className='p-5'>
            <h5 className=' text-2xl font-bold tracking-tight text-gray-900'>{descripcionEjersicio?.name}</h5>
            <p className='font-normal'>{descripcionEjersicio?.description}</p>

            <div className='py-5'>
              <span
                className={`inline-block ${
                  descripcionEjersicio?.difficulty == 'easy'
                    ? 'bg-green-200'
                    : descripcionEjersicio?.difficulty == 'medium'
                    ? 'bg-yellow-200'
                    : 'bg-red-200'
                } px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              >
                {descripcionEjersicio?.difficulty}
              </span>
              <span className={`inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
                {descripcionEjersicio?.muscles}
              </span>
              <span
                className={`inline-block ${
                  descripcionEjersicio?.genre === 'man' ? 'bg-blue-400' : 'bg-pink-300'
                }  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              >
                {descripcionEjersicio?.genre}
              </span>
              <div className='py-5'>
                {
                  <button
                    onClick={() => AddFavorite()}
                    className='inline-flex items-center py-2 px-3 outline-none text-sm font-medium text-center text-white bg-[#6c63ff] duration-150  hover:bg-blue-800'
                  >
                    Agregar a favoritos❤️
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
