import styled from "styled-components";


export const Mainlogin =styled.div`
 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1f293a;
    height: 40em;
    gap: 30px;
    border: 1px solid greenyellow;
    .input{
    width:250px;
    height:40px;
    font-size: 20px;
    border-radius: 30px;   top:1px;
    font-size: .8em;
    background-color: #1f293a;
    padding: 0 6px;
    color: #0ef;
    font-size: 20px;


}
h1{
    color: #0ef;  
}
.button{
    width:250px;
    height:40px;
    top:1px;
    font-size: .8em;
    background-color:#0ef;

    color: white;

}
.label{
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50);
    font-size: #fff;
    pointer-events: none;
    transition: .5s ease;
}
input:focus~label,
input:valid~label{
    top:1px;
    font-size: .8em;
    background-color: #1f293a;
    padding: 0 6px;
    color: #0ef;
}

`;
export const Logindv =styled.div`
      background-color:#0ef;
      height: 55px;
      width: 100%;
      display: flex;
      align-items:center;
      justify-content:space-around;
      .buutton{
        display: flex;
        align-items:center;
        gap: 20px;
      }
   button{
    background-color: white;
    color: red;
    border-radius: 20px;
   }
`;