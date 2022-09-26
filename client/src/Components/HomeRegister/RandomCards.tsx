import React from 'react'

interface Props {
  title?: string
  image?: string
  description?: string
}

const RandomCards = (props:Props) => {
  return (


    <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
      <a href="#">
        <img
          className=""
          src={props.image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default RandomCards