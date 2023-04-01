import { useEffect, useMemo, useState } from 'react'
import { Exercises_Get, selectUser } from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector, useToken } from '../../app/hooks'
import { Link, useParams } from 'react-router-dom'

import CardNews from './News/CardNews'

import RandomCards from './RandomCards'
import baner from '../assets/homeRegister-media/ejerc.jpg'
import LoadingCards from '../loading/LoadingCards'
import Footer2 from '../footer/Footer2'

import { v4 as uuidv4 } from 'uuid'

interface card {
  _id: string
  name: string
  difficulty: string
  equipment: true
  muscles: string
  genre: string
  video: string
  description: string
  premium: string
}

const HomeRegister = () => {
  const dispatch = useAppDispatch()
  const State = useAppSelector(selectUser)

  useEffect(() => {
    dispatch(Exercises_Get())
  }, [])

  return (
    <>
      <div className='bg-slate-100'>
        <div className=' w-full '>
          {State.user?.plan !== 'premium' ? (
            <Link to='/mercadopago'>
              <img
                src={baner}
                alt=''
                className='object-cover md:h-[450px] h-[350px] xl:h-[68vh] w-full'
              />
              <h1 className=' md:h-[50px] sm:min-h w-full bg-[#111827] flex items-center text-white font-medium justify-center md:text-2xl sm:text-xl'>
                Hazte premium para obtener rutinas personalizadas
              </h1>
            </Link>
          ) : (
            <div>
              <img
                src={baner}
                alt=''
                className='object-cover md:h-[450px] h-[350px] xl:h-[68vh] w-full'
              />
            </div>
          )}
        </div>

        {/* cartas de ejercicios */}
        <div className='flex md:mt-[5%] sm:mt-[2%] flex-col bg-gray-200 '>
          <div className='flex items-end w-full h-24'>
            <h1 className='ml-2 md:ml-9 sm:ml-2 text-xl md:text-5xl sm:text-xl  font-dark w-[80%] md:mx-[20px] sm:mx-[10px]'>
              Ejercicios de la semana:
            </h1>

            <Link
              to='/ejercicios'
              className='p-0 text-red-700 underline hover:text-gray-900'
            >
              Ver todos{'>>'}
            </Link>
          </div>

          <div className='block  md:grid grid-cols-4 grid-row-1 sm:flex overflow-x-auto  content-center my-[60px] bg-gray-200 mt-[30px]'>
            {/* {exercises.length > 0 ? (
              exercises.map(({ _id, video, name, difficulty, muscles, genre, premium }) => (
                <RandomCards
                  key={uuidv4()}
                  _id={_id}
                  video={video}
                  name={name}
                  difficulty={difficulty}
                  genre={genre}
                  muscles={muscles}
                  premium={premium}
                  equipment={true}
                />
              ))
            ) : (
              <LoadingCards num={'1234'} />
            )} */}
          </div>

          <div className='bg-[#59656F]'>
            <div className='flex items-end w-full h-24'>
              <h1 className='m-2 sm:m-2  md:ml-9 text-xl sm:text-xl md:text-5xl text-white font-dark w-[80%] mx-[20px] '>
                Ejercicios con mejor calificación:
              </h1>
              <Link
                to='/ejercicios'
                className='px-3 py-1 underline text-red-600 hover:text-gray-900'
              >
                Ver todos{'>>'}
              </Link>
            </div>

            <div className='block  md:grid grid-cols-4 grid-row-1 sm:flex my-[60px] bg-[#59656F] mt-[30px]'>
              {/* {Bastexercises.length > 0 ? (
                Bastexercises?.map(({ _id, video, name, difficulty, muscles, genre, premium, rating }) => (
                  <RandomCards
                    key={uuidv4()}
                    _id={_id}
                    video={video}
                    name={name}
                    difficulty={difficulty}
                    genre={genre}
                    rating={rating}
                    muscles={muscles}
                    premium={premium}
                    equipment={true}
                  />
                ))
              ) : (
                <LoadingCards num={'1234'} />
              )} */}
            </div>
          </div>
        </div>

        <div className='flex items-end w-full h-24'>
          <h1 className='ml-2 md:ml-9 sm:ml-2 text-xl md:text-5xl sm:text-xl  font-dark w-[80%] md:mx-[20px] sm:mx-[10px]'>
            Noticias de interés:
          </h1>
          <Link
            to='/noticias'
            className='px-3 py-1 underline text-red-600 hover:text-red-200'
          >
            Ver todos{'>>'}
          </Link>
        </div>
        <div className=' flex justify-center mt-[20px] mb-[10px]'>
          <div>
            <CardNews
              key={uuidv4()}
              id={2}
              title={'Ejercitarse enfermo?'}
              description={'Tips'}
              author={'Lauren Bedosky'}
              image={
                'https://www.revistamoi.com/wp-content/uploads/2016/11/es-bueno-entrenar-enfermo.jpg'
              }
              date={'abril 26, 2022'}
            />
          </div>
          <div>
            <CardNews
              key={uuidv4()}
              id={0}
              title={'Dieta o ejercicio?'}
              description={'Tips'}
              author={'Adrian Acurero'}
              image={
                'https://workwithdrtiff.com/wp-content/uploads/diet-vs-food-article.jpg'
              }
              date={'abril 26, 2022'}
            />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}

export default HomeRegister
