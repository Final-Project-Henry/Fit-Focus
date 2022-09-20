import styled from "styled-components";

const Div_cards = styled.div`
  display: flex;
  background-color: #f8fafc;
  background-image: linear-gradient(0deg, #f8fafc 0%, #6c63ff 100%);
  #text-container{
    padding: 10px;
    h1{
      font-size:8rem;
    } 
    p{
      width:60%;
      padding: 10px;
      font-size: 1.5rem;
    }
    button{
      background-color: #6c63ff;
      box-shadow: 2px 10px 20px 0px #6c63ff75;
      padding: 10px 50px;
      margin: 50px 10px;
      color: #fff;
      border-radius: 10px;
    }
  }

  #img-container{
    #card-opiniones{
      display: flex;
      width:100%;
      position:relative;
      top: 5px;
      left: -300px;
      border-radius: 10px;
      #card-text-opiniones{
        background-color:#fff;
        min-width:100%;
        border-radius: 10px;
        padding: 0px 20px;
        box-shadow: 2px 10px 20px 0px #6c63ff75;
        margin:0 5px;
        font-size: 1.5rem;
      }
    }

    #img{
        position:relative;
        top: 20px;
        min-width:70px;
        height:70px;
        border-radius: 100%;
        img{
          border-radius: 100%;
        }
     }
  }
`;
const Div_screem2 = styled.div`
  display: flex;
  width: 98%;
  box-shadow: 0px 5px 15px 0px #6c63ff75;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  #text-screen2{
    font-size: 5rem;
    width: 70%;
  }
  h3{
    position: relative;
    left: 70px;
  }
  p {
    width: 70%;
    margin: 5px 100px;
    font-size: 1.5rem;
  }
  #img-2{
    position: absolute;
    margin:-10% -20%;
  }
`;
const Div_benefitsVisitor = styled.div`
  text-align: center;
  font-size: 2rem;
  margin: 80px 0;
`;

const Div_benefitsVisitor2 = styled.div`
  text-align: justify;
  font-size: 20px;
  margin-right: 20px;
  margin-left: 20px;
`;
const Div_about = styled.div`
  flex-direction: row-reverse;
  #text-about {
    padding: 30px 0;

    flex: 1;
    #titel-about {
      justify-content: flex-end;
      p {
        background-color: rgb(180, 83, 9);
        padding: 10px 50px;
        border-radius: 3rem 0rem 0rem 3rem;
        width: 97%;
        color: #111827;
        font-weight: bold;
        font-size: 2.5em;
        box-shadow: 0 5px 5px #ccc;
      }
    }
    #text-description-about {
      width: 100%;
      padding: 10px 50px;
    }
  }
  #avatars-about {
    flex: 1;
    #card {
      padding: 10px 0;
      display: flex;
      width: 46%;
      flex-direction: column;
      margin: 0 10px 20px;
    }
    #img_card {
      display: flex;
      width: 100%;
      height: 6rem;
      font-size: 1.2rem;
      img {
        width: 30%;
        position: relative;
        z-index: 50;
      }
      p {
      }
    }
    #item-card {
      display: flex;
      flex-direction: column;
      #item-a {
        display: flex;
        justify-content: flex-end;
        background-color: rgb(180, 83, 9);
        position: relative;
        border-radius: 0 4rem 4rem 0;
        left: -30px;
        a {
          width: 20%;
          margin: 0 5px;
        }
        img {
          width: 100%;
        }
      }
      width: 60%;
    }
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }
`;

export {
  Div_about,
  Div_cards,
  Div_screem2,
  Div_benefitsVisitor,
  Div_benefitsVisitor2,
};
