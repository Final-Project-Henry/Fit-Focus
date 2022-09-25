import React from 'react'
import CardNews from './CardNews'
import news from "./newsData"

const News = () => {
  return (
    <div>
      {news && news.map(({ author, title, description, date, tags, image, id }) =>
        <CardNews author={author} title={title} description={description} date={date} tags={tags} image={image} id={id} />)}
    </div>
  )
}

export default News