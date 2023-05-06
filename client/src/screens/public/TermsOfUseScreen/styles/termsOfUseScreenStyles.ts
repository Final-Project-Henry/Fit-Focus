import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    height: fit-content;
  }
`
export const MessageBody = styled.div`
  width: 80%;
  max-width: calc(1280px * 0.8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  h4 {
    font-size: 1rem;
  }
  @media (max-width: 1280px) {
    margin: 50px 0;
  }
`
export const Title = styled.h2`
  font-size: 2rem;
`
export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  li {
    list-style-type: square;
    margin-left: 20px;
  }
`
