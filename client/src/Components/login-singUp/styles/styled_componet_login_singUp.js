import styled from "styled-components";

const Div_conteiner = styled.div`
height: 40rem;
margin: 50px;
box-shadow: 0 4px 10px #000e3e55;

`

const Div_img = styled.div`
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
 
`

const Div_form = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  form{
    min-height: 10%;
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
    position: relative;
    top: -50px;
    left:-20px;
    img{
      width: 80%;
      cursor: pointer;
    }
  }
  
`


export {Div_conteiner,Div_img , Div_form}
