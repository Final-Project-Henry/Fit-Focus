import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray};
`
export const SocialMediaIcons = styled.div`
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 0;
`
export const InformDataLinks = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
  padding: 15px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`
export const LogoContainer = styled.div`
  width: 150px;
  padding: 20px 0;
  height: fit-content;
  img {
    width: 100%;
  }
`
export const TextInfo = styled.span`
  font-size: 0.8rem;
`
