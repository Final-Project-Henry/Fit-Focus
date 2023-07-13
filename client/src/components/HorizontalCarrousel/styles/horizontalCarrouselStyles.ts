import styled from 'styled-components'

export const CarrouselContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`
export const ArrowButtonBase = styled.button`
  width: 50px;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0.1;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  :hover {
    opacity: 0.7;
  }
`
export const RightArrowButton = styled(ArrowButtonBase)`
  right: 0;
`
export const LeftArrowButton = styled(ArrowButtonBase)`
  left: 0;
`
export const ContainerCard = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  width: 450px;
  @media (max-width: 500px) {
    width: 100vw;
  }
`
