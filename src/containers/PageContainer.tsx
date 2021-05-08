import React from 'react';
import BackgroundCircles from '../components/BackgroundCircles';
import Background from '../components/Background';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Page(props: Props) {
    return (
        <div>
            <Background/>
            <BackgroundCircles />
            {props.children}
        </div>
    );
}