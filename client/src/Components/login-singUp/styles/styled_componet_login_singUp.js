import styled from "styled-components";

const Div_conteiner = styled.div`
  margin: 10px;
  height: 90vh;
  box-shadow: 0 4px 10px #000e3e55;
  display: flex;
  justify-content:center;
`

const Div_img = styled.div`
  
`

const Div_form = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:20px 0;
  form{
    display: flex;
    flex-direction: column;
    height: 80vh;
    position: relative;
    z-index: 20;
    box-shadow: 0 4px 10px #000e3e55;
  }

  input{
    border: none;
    border-bottom:solid 1px #ccc;
  }
  #menu{
      width: 75%;
      height: 90px;
      box-shadow: 0 4px 10px #000e3e55;
      position: relative;
      top: 20px;
      z-index: 10;
      display: flex;
      flex-direction: row;
      border-radius: 1rem 1rem 0 0px;
      font-size:1.2rem;
      #singup{
       color:#ccc;
       cursor: not-allowed;
      }
      p{
        padding:0.3rem 2rem ;
        padding-left:0rem ;
        cursor:pointer;
        margin-left: 50px;
        position: relative;
        left: -7px;
      }
      

      /* p:after{
        content:"";
        width: 20%;
        position: absolute;
        border-bottom: solid 4px rgb(29, 78, 216) ;
        margin:0 -100px;
        top: 0;
        height:45px;
      } */
  }
  #auth{
      position:relative;
    img{
      width: 80%;
      cursor: pointer;
    }
  }
  
`


export {Div_conteiner,Div_img , Div_form}
