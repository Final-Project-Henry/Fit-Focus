import styled from 'styled-components'

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  font-weight: 500;
  width: 100%;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 1;
  div {
    min-width: 30px;
    overflow: hidden;
  }
`
export const CancelButton = styled.button`
  background: ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  font-weight: 500;
  width: 100%;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 1;
  div {
    min-width: 30px;
    overflow: hidden;
  }
`
