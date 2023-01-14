import styled from "styled-components";
export const Traits = styled.div`
width:100vw;
display:flex;
justify-content:center;
align-items:center;
padding-top:40px;
margin-bottom:30px;
.traits-section{
    width:60%;
    display:flex;
    gap:20px;
    flex-wrap:wrap;
  padding-top:40px;
    .traits-image{
        width: 365px;;
        height: auto;
        img{
          width:100%;
          height:100%;
        }
    }
    .caring-traits{
        width: 536px;
    //    height: 445px;
       
        font: normal normal medium 24px/38px Roboto;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
        text-transform: capitalize;
        opacity: 1;
        h1{
            font-size:20px;
            font: normal normal medium 24px/38px Roboto;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
            text-transform: capitalize;
            opacity: 1;
        }
        ul{
            list-style: none;
            display:flex;
           flex-direction:column;
            gap:10px;
            text-align:left;
            font: normal normal normal 14px/19px Segoe UI;
            color: #FFFFFF;
            opacity: .8;
          li{
            display:flex;
            align-items:center;
            gap:10px;
            img{
                width:20px;
                height:20px;
               
            }
            p{
                color:#000000;
            }
          }
        }
    }
}

`