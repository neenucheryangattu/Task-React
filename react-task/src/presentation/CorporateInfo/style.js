import styled from "styled-components";
export const Info = styled.div`

width:100%;
padding-top:40px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:30px;
.corporate-info{
    width:60%;
    
    h1{
        font: normal normal medium 36px/87px Roboto;
        letter-spacing: 0px;
         color: rgba(0, 0, 0, 1);
          text-transform: capitalize;
         opacity: 1;
    }

    p{
       
        text-align: justify;
      
        font: normal normal normal 16px/30px Roboto;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
        opacity: 1;
    }
}
.info-image{
    // width: 80%;
  max-width: 1000px;
  height: auto;
  
    img{
        width:100%;
        height:100%;
     
    }
}
`

