import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  background-color: white;
`
export const VideoContainer = styled.video`
  width: 500px;
  height: 500px;
  @media (max-width: 500px) {
    width: 350px;
    height: 350px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.dims.fonts.medium};
  font-family: 'Oswald';
`
