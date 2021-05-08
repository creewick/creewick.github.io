import { useState } from 'react';
import styled from 'styled-components';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


interface Props {
    size: string;
    top: string;
    left: string;
    color1: string;
    color2: string;
}

const Provider = styled.div`
    position: absolute;
`;

function Circle(x: Props) {
    const Div = styled.div`
        position: relative;
        top: ${x.top};
        left: calc(50vw + ${x.left});

        width: ${x.size};
        height: ${x.size};

        border-radius: ${x.size};

        background: ${x.color1};
        background: linear-gradient(${x.color1}, ${x.color2});
    `;

    return <Div />;
} 

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
