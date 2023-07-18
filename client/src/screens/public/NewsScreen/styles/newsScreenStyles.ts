import styled from 'styled-components'

const BasicDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  max-width: 1280px;
`
export const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const NewsBodyDiv = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NewsBodyContainer = styled(BasicDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding-bottom: 20px;
`
export const SearchbarContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 20px;
`
export const TotalResults = styled.span`
  font-size: ${({ theme }) => theme.dims.fonts.small};
  width: 90%;
`
export const NewsResults = styled.div`
  width: 90%;
  margin-top: 50px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
