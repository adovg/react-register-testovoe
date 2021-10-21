import React from 'react';
import styled from 'styled-components';


const MapFrame = styled.div`
//margin-top: 170px;
//margin-left: 100px;
// min-width: 500px;
// //height: 500px;
// max-height: 100%;
// overflow: hidden;

//position:relative;
    iframe {
        margin-left: 200px;
        width: 80vh;
        height: 80vh;
        border-radius: 50%;
         position: absolute;
        // top: 0;
         left: 54%;
    }
`;

export default function Map() {
    return (
        <MapFrame>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15550.450751451224!2d30.74192007772623!3d46.449543208104565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1632770037076!5m2!1sru!2sua">
               your location
           </iframe>
        </MapFrame>
    )
}
