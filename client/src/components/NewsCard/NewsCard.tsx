import { format } from 'date-fns'
import { NewsCardProps } from './helper/interfaces'
import {
  AuthorText,
  BackgroundImage,
  CardContainer,
  DateAndAuthor,
  DateText,
  NewsContent,
  NewsTitle,
  SourceText,
} from './styles/newsCardStyles'

const NewsCard = ({ key, data }: NewsCardProps) => {
  return (
    <CardContainer key={key} onClick={() => window.open(data.url || '')}>
      <BackgroundImage src={data.urlToImage || ''} placeholder='news image' />
      <NewsContent>
        <DateAndAuthor>
          <DateText>{format(new Date(data.publishedAt), 'dd/MM/yyyy')} por </DateText>
          <AuthorText> {data.author}</AuthorText>
        </DateAndAuthor>
        <NewsTitle>{data.title}</NewsTitle>
        <SourceText>{data.source.name}</SourceText>
      </NewsContent>
    </CardContainer>
  )
}

export default NewsCard
