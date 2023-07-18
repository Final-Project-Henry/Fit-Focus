import { ReactNode, createRef, useEffect } from 'react'
import { Alert } from '@mui/material'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Loader from 'components/LoaderData/LoaderData'
import useNearScreen from 'shared/customHooks/useNearScreen'
import { ContainerBottom, InfiniteContainer, LoaderContainer } from './styles/infiniteScrollStyles'

interface InfiniteScrollProps {
  children: ReactNode[]
  onLoadMore: () => void
  loading: boolean
  totalPages: number
  currentPage: number
  endMessage?: string
}

const InfiniteScroll = ({
  children,
  onLoadMore,
  loading,
  totalPages,
  currentPage,
  endMessage = '',
}: InfiniteScrollProps) => {
  const containerRef = createRef<HTMLDivElement>()
  const bottomRef = createRef<HTMLDivElement>()
  const { isNearScreen } = useNearScreen({
    distance: '400px',
    externalRef: bottomRef,
    once: false,
  })

  useEffect(() => {
    if (isNearScreen && onLoadMore && currentPage < totalPages && !loading) {
      onLoadMore()
    }
  }, [isNearScreen])

  return (
    <>
      <InfiniteContainer ref={containerRef}>
        {children}
        <GridContainer>
          {loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            (children?.length <= 0 || !children) && (
              <GridItem xs={12}>
                <Alert severity='error' sx={{ width: '100%' }}>
                  No se encontraron resultados
                </Alert>
              </GridItem>
            )
          )}
        </GridContainer>
      </InfiniteContainer>
      <ContainerBottom ref={bottomRef}>{isNearScreen && currentPage >= totalPages && endMessage}</ContainerBottom>
    </>
  )
}

export default InfiniteScroll
