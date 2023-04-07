import styled from 'styled-components'

//Aqui se cambia los colores base de la navbar
const divBase = styled.div`
  display: flex;
  height: 62px;
  align-items: center;
  background: skyblue;
`

export const Container = styled(divBase)`
  justify-content: center;
  font-family: 'Oswald';
`
export const Navbar = styled(divBase)`
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
export const RoutesArea = styled(divBase)`
  justify-content: space-between;
`

export const RoutesList = styled(divBase)`
  width: 300px;
  justify-content: space-evenly;
`

export const LoginArea = styled(divBase)`
  justify-content: space-between;
  width: 200px;
  padding: 0 20px;
  gap: 10px;
`

export const Image = styled.div`
  width: 100px;
  padding: 0 15px;
  :hover {
    cursor: pointer;
  }
`
export const MenuButton = styled(divBase)`
  padding: 0 15px;
  :hover {
    cursor: pointer;
  }
`
export const MenuOpen = styled.div`
  position: absolute;
  left: 0;
  top: 62px;
  z-index: 100;
`
export const AvatarContainer = styled.div`
  cursor: pointer;
`

export const ExmailText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const MenuTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const MenuName = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
`
export const MenuEmail = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
`
