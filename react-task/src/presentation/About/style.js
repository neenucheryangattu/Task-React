import styled from "styled-components";
export const About = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding-top:20px;
margin-bottom:30px;
.about-section{
    width:80%;
.about-heading{
    display:flex;
    align-items:center;
    gap:6px;
    h1{
        margin:0;
        padding:0;
        font-size:14px;
        color: rgba(148, 13, 27, 1);
    }
}
.about-details{
  
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin:0;
    padding:0;
    h1{
        font-size:26px;
        color: rgba(148, 13, 27, 1);
        text-transform: capitalize;
        font: normal normal medium 36px/87px Roboto;
      
    }
    p{
        width:80%;
        text-align:justify;
        font: normal normal normal 14px/28px Roboto;
        letter-spacing: 0px;
        color: rgba(81, 81, 81, 1);
        font-size:14px;
    }
}
.about-image{
   max- width:580px;
height: 280px;
padding-top:20px;
img{
    width:100%;
    height:100%;
}
}
}

`