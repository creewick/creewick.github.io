import React from 'react';
import styled from 'styled-components';
import center from '../../../styles/center';
import blur from '../../../styles/blur';
import fullscreen from '../../../styles/fullscreen';
import Tilt from 'react-parallax-tilt';
import Text from './Text';
import Card from './Card';
import Circle from './Circle';

const MyTilt = styled(Tilt)`
    border-radius: 5vmin;
    width: 100%;
    ${blur};
    
    & .glare-wrapper { 
        pointer-events: none; 
    }
`;

const ScreenCenter = styled.div`
    ${fullscreen};
    ${center};
`;

const Svg = styled.svg`display: block;`;

export default function Logo() {
    return (
        <ScreenCenter>
            <MyTilt
                tiltReverse={true}
                glareEnable={true}
                glareBorderRadius="5vmin"
                perspective={500}
            >
                <Card>
                    <Svg viewBox="0 0 63 38">
                        <Circle cx={28.2} cy={18.2} r={7} i={4} />
                        <Circle cx={52.7} cy={18.7} r={7} i={12} />
                        <Circle cx={10.2} cy={18.5} r={6} i={1} />
                        <Circle cx={32} cy={20.7} r={6} i={5} />
                        <Circle cx={20.7} cy={18.2} r={6} i={6} />
                        <Circle cx={47.7} cy={20} r={5.7} i={10} />
                        <Circle cx={19} cy={20.7} r={5.5} i={3} />
                        <Circle cx={51.5} cy={14} r={4.7} i={11} />
                        <Circle cx={40.5} cy={20.5} r={4.7} i={8} />
                        <Circle cx={42.7} cy={13} r={4.5} i={9} />
                        <Circle cx={37} cy={16} r={3.7} i={7} />
                        <Circle cx={15.5} cy={13} r={3.2} i={2} />
                        <Circle cx={6} cy={15} r={2.5} i={0} />
                        <Text x={5.5} y={22.5} textLength="52.5">
                            creewick
                        </Text>
                    </Svg>
                </Card>
            </MyTilt>
        </ScreenCenter>
    );
}