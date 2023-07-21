import styled from 'styled-components'

export const ImageBanner = styled.img`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  object-fit: cover;
  object-position: center;
  z-index: 11;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`
export const ImageBannerBg = styled.img`
  width: 100%;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.1);
  filter: blur(10px);
  z-index: 0;
`
export const TitleBanner = styled.h1`
  position: absolute;
  padding: 10px;
  top: 40%;
  left: center;
  font-size: ${({ theme }) => theme.dims.fonts.title};
  z-index: 20;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(${({ theme }) => theme.backgrounds.dark});
  text-align: center;
  max-width: 90%;
`
