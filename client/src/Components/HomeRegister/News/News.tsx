import React from 'react'
import CardNews from './CardNews'
import news from "./newsData"
import mina from "../../assets/homeRegister-media/mina.jpeg"
import { v4 as uuidv4 } from "uuid"


const News = () => {
  return (
    <div>
      <div className="flex justify-center w-full overflow-hidden h-[500px]">
        <div className="absolute text-center flex justify-center  h-[500px] bg-[#11182852] w-full">
          <p className="p-5 w-[30%] m-auto bg-[#1118288f] font-normal text-white text-5xl">Noticias</p>
        </div>
        <img className="w-full object-cover" src={mina} />
      </div>
      <div className='grid grid-cols-2'>
        {news && news.map(({ author, title, description, date, tags, image, id }) =>
          <CardNews key={uuidv4()} author={author} title={title} description={description} date={date} tags={tags} image={image} id={id} />)}
      </div>
    </div>
  )
}

export default News
