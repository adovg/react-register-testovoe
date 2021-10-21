import React from 'react';
import styled from 'styled-components';
import fbIcon from '../../assets/fb.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import twitterIcon from '../../assets/twitter.svg';
import paintrestIcon from '../../assets/paintrest.svg';


const FooterStyles = styled.footer`
div {
    background: yellow; 
    max-width: 1440px;
    min-width: 320px;
    height: 200px;
    margin: 0 auto;
    background: #FAFAFA;
    border: 1px solid #D8D8D8;
}
ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    margin-top: 80px;
    margin-left: 300px;
        li {
            padding-left: 25px;
        }
}
`

export default function Footer() {
    return (
        <FooterStyles>
        <div>
            <ul>
                <li><img src={linkedinIcon} alt="fbicon" /></li>
                <li><img src={twitterIcon} alt="fbicon" /></li>
                <li><img src={fbIcon} alt="fbicon" /></li>
                <li><img src={paintrestIcon} alt="fbicon" /></li>
            </ul>
        </div>
        </FooterStyles>
    )
}
