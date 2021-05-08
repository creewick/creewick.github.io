import React from 'react';
import styled from 'styled-components';
import center from '../styles/center';
import glass from '../styles/glass';
import fullscreen from '../styles/fullscreen';
import Tilt from 'react-parallax-tilt';

const MyTilt = styled(Tilt)`
    width: 100%;
`;

export default function Logo() {
    const Card = styled.div`
        ${glass};
        border-radius: 5vmin;
        width: 100%;
        height: 0;
        padding-bottom: 60%;

        color: white;
        text-align: center;
        line-height: 500px;
        font-size: 120px;
    `;
    const ScreenCenter = styled.div`
        ${fullscreen};
        ${center};
    `;


    return (
        <ScreenCenter>
            <MyTilt
                tiltReverse={true}
                glareEnable={true}
                glareBorderRadius="5vmin"
            >
                <Card>
                    Creewick
                </Card>
            </MyTilt>
        </ScreenCenter>
    );
}