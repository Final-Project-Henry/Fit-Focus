import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  background-color: red;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
`
export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 500px;
  z-index: 0;
  object-fit: cover;
  object-position: center;
  transform: scale(1.1);
  :hover {
    transform: scale(1.5);
    transition: ease-in-out 2;
  }
`
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 50%;
  background: linear-gradient(0deg, rgba(10, 19, 28, 1) 0%, rgba(10, 19, 28, 0.5) 80%, rgba(255, 255, 255, 0) 100%);
`
export const DateAndAuthor = styled.div`
  display: flex;
  align-items: center;
`
export const DateText = styled.span`
  font-size: ${({ theme }) => theme.dims.fonts.small};
  color: ${({ theme }) => theme.colors.white};
`
export const AuthorText = styled.span`
  margin-left: 5px;
  font-size: ${({ theme }) => theme.dims.fonts.small};
  color: ${({ theme }) => theme.colors.orange};
`
export const NewsTitle = styled.h1`
  font-size: ${({ theme }) => theme.dims.fonts.extraSmall};
  color: ${({ theme }) => theme.colors.white};
`
export const SourceText = styled.span`
  font-size: ${({ theme }) => theme.dims.fonts.small};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
`
