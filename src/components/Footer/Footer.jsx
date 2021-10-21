import React from 'react';
import styled from 'styled-components';
import fbIcon from '../../assets/fb.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import twitterIcon from '../../assets/twitter.svg';
import paintrestIcon from '../../assets/paintrest.svg';
import Ghost from '../Faces/Ghost';
import Yello from '../Faces/Yello';
import Red from '../Faces/Red';


const FooterStyles = styled.footer`

    max-width: 1440px;
    min-width: 320px;
    height: 200px;
    margin: 0 auto;
    background: #FAFAFA;
    border: 1px solid #D8D8D8;
    position: relative;
    z-index: 0;

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
.ghostface {
    position: absolute;
    max-width: 97px;
    max-height: 79px;
    z-index: 1;
    left: 90%;
}
.yellow1 {
    position: absolute;
    width: 88px;
    height: 85px;
    z-index: 1;
    left: 95%;
    top: 28%;
}
.redFace {
    position: absolute;
    width: 214px;
    height: 208px;
    top: 0,15px;
    left: 157,79px;
}
`

export default function Footer() {
    return (
        
        <FooterStyles>
            <Red/>
           <Ghost/> 
           <Yello/>
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
