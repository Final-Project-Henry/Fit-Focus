import styled from 'styled-components'
import { Link } from 'react-router-dom'
import getNoVisitBackgroundImage from '../helpers/getNoVisitBackgroundImage'

export const NoVisitBody = styled.div`
  width: 100%;
  max-width: 1280px;
  height: fit-content;
  display: flex;
  justify-content: center;
`
export const NoVisitBgImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${getNoVisitBackgroundImage()});
  background-size: cover;
  background-position: center;
`
export const NoVisitContent = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 0;
  }
`
export const Message = styled.p`
  font-size: 1.5rem;
  z-index: 1;
`
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  z-index: 1;
`
export const CustomLink = styled(Link)`
  z-index: 1;
  text-decoration: underline;
`
