import styled from "styled-components";
import homeimg from "../../assess/homepage.jpg";

export const Continer =styled.div`
width: 1136px;
display: flex;
flex-direction:column;
padding:30px

`;
export const Homeimg= styled.div`
background-image: url(${homeimg});
background-repeat: no-repeat;
    height: 500px;
    width: 100%;
    background-size: cover;
    
`;


export const Maincon =styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

`;
export const Smalldiv = styled.div`
width: 340px;
height: 782px;
top: 1399px;
left: 406.77px;
border-radius: 12px;
background: #FFFFFF;
box-shadow: 0px 2px 12px 0px #B7BDC480;




`;
export const Homediv =styled.div`
width: 729px;
height: 782px;
top: 1400px;
left: 786.77px;
border-radius: 12px;
background: #FFFFFF;
box-shadow: 0px 2px 12px 0px #B7BDC480;


`;
export const Pic = styled.div`
width: 230px;
height: 320px;
top: 1480px;
left: 804.74px;
box-shadow: 0px 2px 12px 0px #B7BDC480;


`;
export const Grid = styled.div`
 display:grid;
 grid-template-areas:"a a a";
 gap: 20px;
 align-items: center;
 text-transform: GoogleFonts.ptSans(),

`;
export const Btn =styled.div`
width: 320px;
height: 300px;
top: 1479.53px;
left: 407px;
box-shadow: 0px 2px 12px 0px #B7BDC480;
 text-align: center;
padding:10px;

`;
export const Boxs =styled.div`
width: 301px;
height: 149px;
top: 1917.95px;
left: 427.77px;
text-align: center;
padding:30px
`;
export const Button =styled.div`
width: 292px;
height: 52px;
border-radius: 24px;
background: #7EB23D;
padding-top:20px

`;
export const Homeshop = styled.div`
width: 1104px;
height: 559px;
top: 2652px;
left: 408px;
 


`;
export const Smallbox = styled.div`
width: 350px;
height: 109px;
top: 2721px;
left: 408px;
gap: 30px;
 display:flex;
 align-items: center;
 box-shadow: 0px 2px 12px 0px #B7BDC480;

 .div{
    flex:1;
  gap:10px
 }
 .button{
   background-color:green ;
   color: white;
   height:20px;
   width:90px;
   border-radius: 20px;
   
   }
 
`;


export const Maindv =styled.div`

  display:grid;
  grid-template-areas:" a a a";
  gap:20px;
`
;
export const Mainbutton =styled.button`
width: 292px;
height: 52px;
border-radius: 24px;
background: #7EB23D;
color: white;
`;
