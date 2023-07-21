import { useEffect, useMemo, useState } from 'react'
import { Alert } from '@mui/material'
import Loader from 'components/LoaderData/LoaderData'
import NewsCard from 'components/NewsCard/NewsCard'
import InfiniteScroll from 'components/InfiniteScroll/InifiniteScroll'
import NewsSearchBar from './NewsSearchBar'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import { newsBanner } from 'shared/shareData'
import { ArticleData } from 'shared/interfaces/redux'
import { searchNews } from 'redux/actions/newsActions'
import { SEARCH_NEWS_RESET } from 'redux/constants/newsConstants'
import { LoaderContainer, NewsBodyContainer, NewsBodyDiv, NewsResults, TotalResults } from '../styles/newsScreenStyles'
import BannerScreeen from 'components/BannerScreen/BannerScreeen'

const NewsBody = () => {
  const dispatch = useAppDispatch()

  const [data, setData] = useState<ArticleData[]>([])
  const [searchText, setSearchText] = useState('nutrición')
  const [language, setLanguage] = useState('es')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [hasNextpage, setHasNextPage] = useState<boolean>(false)

  const { loadingSearchNewsList, successSearchNewsList, errorSearchNewsList, totalResults, searchNewsList } =
    useAppSelector(state => state.searchNewsList)

  const totalPages = useMemo(() => Math.ceil((totalResults || 0) / 6), [totalResults])
  useEffect(() => {
    dispatch(searchNews())
    return () => {
      dispatch({ type: SEARCH_NEWS_RESET })
    }
  }, [])
  useEffect(() => {
    if (successSearchNewsList && data.length < 1) {
      const newData = searchNewsList || []
      setData(newData)
    } else if (successSearchNewsList && data.length > 0) {
      setCurrentPage(currentPage + 1)
      const newData = searchNewsList || []
      setData(prev => [...prev, ...newData])
    }
    setHasNextPage(totalPages > currentPage)
  }, [successSearchNewsList])

  const handleNextPage = () => {
    if (hasNextpage) {
      dispatch(searchNews(searchText, language, currentPage + 1))
    }
  }
  const handleSearch = () => {
    setData([])
    setCurrentPage(1)
    dispatch(searchNews(searchText, language))
  }

  return (
    <NewsBodyDiv id='news-body-div'>
      <BannerScreeen imgBg={newsBanner} title='Noticias 📰' />
      <NewsBodyContainer>
        <NewsSearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          language={language}
          setLanguage={setLanguage}
          handleSearch={handleSearch}
        />
        <TotalResults>{totalResults ? `${totalResults} resultados encontrados` : '0 resultados'}</TotalResults>
        <NewsResults>
          {loadingSearchNewsList && data.length < 1 && (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          )}
          {(successSearchNewsList || data.length > 0) && (
            <InfiniteScroll
              onLoadMore={handleNextPage}
              loading={!!loadingSearchNewsList}
              totalPages={totalPages}
              currentPage={currentPage}
            >
              {data?.map((news, i) => (
                <NewsCard key={i} data={news} />
              ))}
            </InfiniteScroll>
          )}
          {errorSearchNewsList && (
            <Alert severity='error' sx={{ width: '100%' }}>
              {errorSearchNewsList}
            </Alert>
          )}
        </NewsResults>
      </NewsBodyContainer>
    </NewsBodyDiv>
  )
}

export default NewsBody
