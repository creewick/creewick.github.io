import React from 'react';
import styled from 'styled-components';

const Background = styled('div')`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #211b40;
    background: linear-gradient(45deg, #211b40 0%, #6050ad 35%, #a693ff 100%);
`;

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Page(props: Props) {
    return (
        <Background>
            {props.children}
        </Background>
    );
}