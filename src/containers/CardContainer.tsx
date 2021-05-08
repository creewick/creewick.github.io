import { Children } from "react";
import styled from "styled-components";
import glass from '../styles/glass';

interface Props {
    width?: number;
    children: React.ReactNode | React.ReactNode[];
}

export default function CardContainder(props: Props) {
    const Card = styled.div`
        ${glass};
        width: 100%;
    `;

    return (
        <Card>
            {props.children}
        </Card>
    );
}