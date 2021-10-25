import React from 'react';
import styled from 'styled-components';

const Register = styled.div`
max-width: 550px;
display: flex;
flex-direction: column;
`;

const Button = styled.button`
max-width: 218px;
height: 73px;
background: #FAD34F;
border-radius: 500px;
    p{
    margin: auto;
    white-space: none;
    text-align: center;
    color: white;
    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
}
`;

const Input = styled.input`
border: 1px solid #DCDCDC;
box-sizing: border-box;
border-radius: 10px;
width: 500px;
min-width: 100%;
height: 90px;
margin-bottom: 8px;
font-size: 18px;
font-family: 'Apercu Arabic Pro';
padding-left: 16px;
text-align: left;
font-weight: normal;
    ::placeholder {
        font-family: 'Apercu Arabic Pro';
        font-size: 18px;
        padding-left: 46px;
        font-weight: normal;
  }
  @media (max-width: 1176px) {
    max-width: 300px;
    width: 100%;
  }
`;

const InputText = styled.textarea`
height: 189px;
width: 500px;
border-radius: 10px;
margin-bottom: 23px;
font-family: 'Apercu Arabic Pro';
font-size: 18px;
padding-left: 25px;
text-align: left;
font-weight: 400;
  ::placeholder {
    font-family: 'Apercu Arabic Pro';
    font-size: 18px;
    padding: 25px;
    text-align: left;
    font-weight: normal;
  }
  @media (max-width: 1176px) {
    max-width: 300px;
    min-width: 100%;
  }
`;


export default function RegisterForm() {

    return (
        <form action="http://localhost:3012/users/" method="post">
        <Register>
           
            <Input type="name" placeholder="Your name*"  name="userName"/>
            <Input type="email" placeholder="Your e-mail*"  name="email"/>
            <InputText type="text" placeholder="Your message*" name="text"/>
            <Button >
               <p>Send message</p>
            </Button>
            
        </Register>
        </form>
        
    )
}


 
