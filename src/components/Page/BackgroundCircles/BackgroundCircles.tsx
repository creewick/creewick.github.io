import React from 'react';
import Circle from './Circle'
import styled from 'styled-components';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Provider = styled.div`
    position: absolute;
`;

export default function BackgroundCircles() {

    return (
        <Provider>
            <ParallaxProvider>
                <Parallax y={[0, 200]}>
                    <Circle
                        left="30vmin"
                        top="-60vmin"
                        size="500px"
                        color1="purple"
                        color2="purple"
                    />
                </Parallax>
                <Parallax y={[0, 80]}>
                    <Circle
                        left="-80vmin"
                        top="0"
                        size="800px"
                        color1="orange"
                        color2="orange"
                    />
                </Parallax>
            </ParallaxProvider>
        </Provider>
    );
}
