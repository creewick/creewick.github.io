import React from 'react';
import BackgroundCircles from './BackgroundCircles/BackgroundCircles';
import Background from './Background';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Page(props: Props) {
    const Content = styled.div`
        padding: 0 8px;
    `;

    return (
        <>
            <Background/>
            <BackgroundCircles />
            <Content>
                {props.children}
            </Content>
        </>
    );
}