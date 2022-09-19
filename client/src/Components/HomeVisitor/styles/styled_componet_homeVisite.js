import styled from "styled-components";

const Div_cards = styled.div`
  display: flex;

  #card{
    box-shadow: 0 4px 10px #000e3e55;
    width:100%;
    margin:40px;
    font-size:1.2rem;
      p{
          padding: 20px;
      }
  }
  #img_card{
    width:100%;
    height: 250px;
    overflow: hidden;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;

    }   
  }
  
`
const Div_video = styled.div`
  height: 650px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  p{  
      position: absolute;
      font-size: 2rem;
      z-index:1;
  }
  
  #btm_video{
    margin:50px
  }
  #video{
    opacity: 50%;
  }  
`
const Div_benefitsVisitor = styled.div`
  text-align: center;
  font-size: 50px;
  font-width: bold;
  margin:80px 0;
`

const Div_benefitsVisitor2 = styled.div`
  text-align: justify;
  font-size: 20px;
  margin-right: 20px;
  margin-left: 20px;
  
`

export { Div_cards, Div_video,Div_benefitsVisitor, Div_benefitsVisitor2 }