import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../RegisterForm/RegisterForm';
//import MapWrap from '../Map/Map';
import Map from '../Map/Map';


const ContactStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
min-width: 320px;
max-width: 1440px;
max-height: 100%;
position: relative;
width: 100%;
    h1 {
        margin-bottom: 30px;
    }
    @media (max-width: 1176px) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
`;

const RegisterSection = styled.div`
margin-top: 170px;
margin-left: 150px;
margin-bottom: 170px;
    @media (max-width: 1176px) {
        margin-top: 100px;
        margin-left: 70px;
        margin-right: 70px;
        margin-bottom: 70px;
  }
`;


export default function Contact() {


    return (
        <ContactStyle>
            <RegisterSection>
            <h1>
                Reach out to us!
            </h1>
            <RegisterForm />
            </RegisterSection>
            <Map />
        </ContactStyle>
    )
}


