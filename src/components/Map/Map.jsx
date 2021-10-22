import React from 'react';
import styled from 'styled-components';
import Yellow2 from '../Faces/Yellow2';
import Red from '../Faces/Red';


const MapFrame = styled.div`

    iframe {
        margin-left: 200px;
        width: 90vh;
        height: 90vh;
        border-radius: 50%;
        position: absolute;
        z-index: 0;
         left: 42%;
    }
    .yellow2 {
        position: absolute;
        z-index: 3;
        left: 48%;
        top: 60%;
    }
    .redFace {
        position: absolute;
        top: 0,15px;
        left: 50%;
        z-index: 1;
        top: 60%;
    }
    @media (max-width: 1176px) {
        display: none;
        .yellow2 {
        left: 62%;
         img {
            width: 80px;
            height: 80px:    
        }
    }        
        .redFace {
            left: 64%;
         img {
            width: 214px;
            height: 208px;
            }
    }
}
`;

export default function Map() {
    return (
        <MapFrame>
            <Yellow2 />
            <Red />
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15550.450751451224!2d30.74192007772623!3d46.449543208104565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1632770037076!5m2!1sru!2sua">
               your location
           </iframe>
        </MapFrame>
    )
}
