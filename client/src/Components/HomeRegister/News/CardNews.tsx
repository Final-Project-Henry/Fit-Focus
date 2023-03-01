import '../styles/CardNews.css'
import { useNavigate } from 'react-router-dom'
import { news as newsInterface } from './newsData'

const CardNews = ({ title, description, author, date, image, tags, id }: newsInterface) => {
  const navigate = useNavigate()

  return (
    <div className='my-10 mx-3'>
      <section className='flex flex-col justify-center antialiased bg-gray-200 text-gray-900 min-h-full '>
        <div className='max-w-6xl mx-auto p-4 sm:px-6 h-full'>
          {/* Blog post */}
          <article className='max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center'>
            <a className='relative block group' href='#0'>
              <div
                className='absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none'
                aria-hidden='true'
              ></div>
              <figure className='relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out'>
                <img
                  className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                  onClick={() => navigate(`/newsBlog/${id}`)}
                  src={image}
                  width='540'
                  height='303'
                  alt='Blog post'
                />
              </figure>
            </a>
            <div>
              <header>
                <div className='mb-3'>
                  <ul className='flex flex-wrap text-xs font-medium -m-1'>
                    {tags &&
                      tags.map(({ text, color, colorHover }, i) => {
                        return (
                          <li className={`${color + ' ' + colorHover} m-1 rounded-full`} key={i}>
                            <a
                              className={`inline-flex text-center text-gray-100 py-1 px-3 rounded-full transition duration-150 ease-in-out`}
                              href='#0'
                            >
                              {text}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
                <h3 className='text-2xl lg:text-xl font-bold leading-tight mb-2'>
                  <a
                    onClick={() => navigate(`/newsBlog/${id}`)}
                    className='hover:text-slate-600 cursor-pointer transition duration-150 ease-in-out'
                  >
                    {title}
                  </a>
                </h3>
              </header>
              <p className='text-lg text-neutral-700 flex-grow'>{description}</p>
              <footer className='flex items-center mt-4'>
                <a onClick={() => navigate(`/newsBlog/${id}`)}>
                  <img
                    className='rounded-full flex-shrink-0 mr-4 object-cover'
                    src={`https://api.lorem.space/image/face?w=60&h=60&hash=bart89f${id}`}
                    width='40'
                    height='40'
                    alt='Author 04'
                  />
                </a>
                <div>
                  <a
                    className='font-medium text-gray-800 hover:text-gray-700 transition duration-150 ease-in-out'
                    href='#0'
                  >
                    {author}
                  </a>
                  <span className='text-gray-700'> - </span>
                  <span className='text-gray-500'>{date}</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default CardNews
