import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../RegisterForm/RegisterForm';
//import MapWrap from '../Map/Map';
import Map from '../Map/Map';


const ContactStyle = styled.div`
// margin: 0 auto;
//margin-top: 170px;
margin-bottom: 170px;
display: flex;
flex-direction: row;
justify-content: space-between;
//justify-content: flex-end;
//align-items: center;
min-width: 320px;
max-width: 1440px;
max-height: 100%;
position: relative;
width: 100%;
    h1 {
        margin-bottom: 30px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const RegisterSection = styled.div`
margin-top: 170px;
margin-left: 150px;
//margin-rigth: 100px;
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


