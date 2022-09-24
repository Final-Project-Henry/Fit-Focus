import React from 'react'
import CardNews from './CardNews'
import news from "./newsData"

const News = () => {
  return (
    <div>
        <CardNews author={news[0].author} title={news[0].title} description={news[0].description} date={news[0].date} tags={news[0].tags} image={news[0].image} id={news[0].id}/>
    </div>
  )
}

export default News