import React from "react";
import styled from "styled-components";

interface Props {
    size: string;
    top: string;
    left: string;
    color1: string;
    color2: string;
}

export default function Circle(x: Props) {
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