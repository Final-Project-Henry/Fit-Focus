import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    height: 100vh;
  }
`
export const BgVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: ease-in-out 5s;
  z-index: 0;
  filter: brightness(0.5);
`
export const Title = styled.h4`
  font-family: 'Tiro';
  font-size: 3.5rem;
`
export const SubTitle = styled.h4`
  font-size: 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
`
export const Body = styled.span`
  color: white;
  width: 60%;
  z-index: 0;
  @media (max-width: 500px) {
    width: 80%;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Tiro';
  width: 90%;
  align-items: center;
  color: ${({ theme }) => theme.colors.orange};
  z-index: 0;
`
export const ActionArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`
export const ButtonLanding = styled.button`
  width: 50px;
  height: 50px;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: white;
  background-color: #ffa000;
  border: none;
  border-radius: 40px;
  transition: all 0.4s;
  :hover {
    background-color: rgb(36, 36, 57);
    border-radius: 0;
    color: #ffa000;
    width: 20vw;
    box-shadow: 0 0 50px 5px white;
  }
`
