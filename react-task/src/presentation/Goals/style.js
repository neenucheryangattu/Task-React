import styled from "styled-components";
import vision from "../../Images/vision.png"
import visionsecond from '../../Images/visionsecond.png'
import Mision from '../../Images/mision.png'
export const Goal=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding-top:40px;
.goalsection{
    width:60%;
    display:flex;
    padding-top:20px;
    gap:20px;
   flex-wrap:wrap;
    .vision{
        display:flex;
        flex-direction:column;
        gap:20px;
        .vision-box{
            width:480px;
            height: 230px;

            border:1px solid  grey;
            background-image:url(${vision});
            background-position:center;
           
            border-radius:0px 90px 0px 0px ;
            padding:10px;
            @media(max-width:650px){
                width:350px;
            }
            h1{
                color:#FFFFFF;
                font-size:"18px"
            }
            p{
                color:#FFFFFF;
                font-size:16px;
            }
         
        }
       .goal-image{
          max-width:500px;
           height:150px;
           background-image:url(${visionsecond});
           background-position:center center;
           background-size: cover;
           @media(max-width:650px){
            font-size:340px;
        }
       }
    }
    .mission{
        display:flex;
        .mision-box{
            width:330px;
            height:400px;
            background-color:#000000;
            border:1px solid  grey;
            background-image:url(${Mision});
            background-position:center;
            padding:10px;
            h1{
                color:#FFFFFF;
                font-size:18px;
            }
            p{
                color:#FFFFFF;
                font-size:16px;
            }
ul{
    color:#FFFFFF;
    text-align:left;
    gap:10px;
}
        }
    }
}
}
`