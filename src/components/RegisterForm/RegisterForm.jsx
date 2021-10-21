import React, { useState } from 'react';
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
height: 90px;
margin-bottom: 8px;
font-size: 18px;
font-family: 'Apercu Arabic Pro';
font-size: 18px;
padding-left: 46px;
text-align: left;
font-weight: normal;
    ::placeholder {
        font-family: 'Apercu Arabic Pro';
        font-size: 18px;
        padding-left: 46px;
        font-weight: normal;
  }
`;

const InputText = styled.input`
height: 189px;
border-radius: 10px;
margin-bottom: 23px;
font-family: 'Apercu Arabic Pro';
font-size: 18px;
padding-left: 46px;
text-align: left;
font-weight: normal;
  ::placeholder {
    font-family: 'Apercu Arabic Pro';
    font-size: 18px;
    padding-left: 46px;
    text-align: left;
    font-weight: normal;
  }

`;


export default function RegisterForm() {
    const [nameValue, setNameValue] = useState('Your name*');
    // setNameValue = e.target.value;
    console.log(nameValue);


    return (
        <Register>
            <Input type="name" placeholder="Your name*" onChange={ (e) => setNameValue(e.target.value)  }/>
            <Input type="email" placeholder="Your e-mail*"  />
            <InputText type="text" placeholder="Your message*"/>
            <Button onClick={() => alert('1')}>
               <p>Send message</p>
            </Button>
        </Register>
        
    )
}


 
