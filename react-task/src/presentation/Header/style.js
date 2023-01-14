import styled from "styled-components";
export const Header=styled.div`
display:flex;
flex-direction:column;
width:100vw;
.header-topbar{
    width:100vw;
    height: 50px;
    background: #940D1B;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .header-container{
        width:80%;
        height: 50px;
       display:flex;
       align-items:center;
       justify-content:space-between;
        h1{
            top: 16px;
            left: 139px;
            height: 19px;
            font: normal normal normal 14px/19px Segoe UI;
            text-align: left;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity:.8;
            margin:0;
            padding:0;
        }
        ul{
            list-style: none;
           display: flex;
           gap:20px;
           font: normal normal normal 14px/19px Segoe UI;
           color: #FFFFFF;
           opacity: .8;
        }
       
    }

}
.header-bottombar{
    width: 100vw;
    height: 80px;
    background-color: #FFFFF;
    display:flex;
    justify-content:center;
   .header-containers{
    width:80%;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h1{
        font: normal normal medium 36px/329px Poppins;
        letter-spacing: 0px;
        color: #940D1B;
        @media(max-width:760px){
            font-size:26px;
        }
        @media(max-width:600px){
            font-size:20px;
        }
    }
    ul{
        list-style: none;
        display: flex;
        gap:20px;
        font-size:20px;font: normal normal normal 14px/19px Segoe UI;
        color: #000000;
        opacity:0.6;
        @media(max-width:750px){
            gap:10px;
        }
        li{
            display:flex;
            align-items:center;
            gap:5px;
            font-size:20px;
            @media(max-width:980px){
                font-size:18px;
               
            }
            @media(max-width:670px){
                font-size:16px;
            }
            @media(max-width:513px){
                font-size:14px;
            }
        }
       
    }
    @media(max-width:560px){
          width:90%;  
    }
   }
}

`