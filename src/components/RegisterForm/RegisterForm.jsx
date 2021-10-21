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
`;

export default function RegisterForm() {
    const [nameValue, setNameValue] = useState('Your name*');
    // setNameValue = e.target.value;
    console.log(nameValue);


    return (
        <Register>
            <Input type="name" placeholder={nameValue} onChange={ (e) => setNameValue(e.target.value)  }/>
            <Input type="email" placeholder="Your e-mail*"  />
            <Input type="text" placeholder="Your message*"/>
            <Button onClick={() => alert('1')}>
               <p>Send message</p>
            </Button>
        </Register>
        
    )
}


 
