import styled from "styled-components";
export const Footer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding-top:40px;
.footersection{
    width:80%;
    background: rgba(36, 36, 36, 1) 0% 0% no-repeat padding-box;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:30px;
    .footer-part{
        width:80%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-top:20px;
        gap:20px;
        flex-wrap:wrap;
        border-bottom:1px solid grey;
    .firstsection{
        display:flex;
        flex-direction:column;
        align-items:center;
         top:50%;
         .frstsection-image{
        width:80px;
        height:60px;
          img{
              width:100%;
               height:100%;
           }
  
         }
         p{
            color:grey;
            text-align:left;
         }
    }
    .second-section{
      
        h1{
            color:#FFFFFF;
           font-size:20px;
           opacity:0.6;
        
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
                input{
                    width:250px;
                    height:4vh;

                }
                button{
                    height:4.8vh;
                }
            }
            .icons{
                width:320px;
                display:flex;
                gap:10px;
             align-items:center;
              flex-direction:row-reverse;
            }
        }
    }
  }
}

`