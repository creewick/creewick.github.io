import styled from "styled-components";
import hover from "../../../styles/hover";
import optimize from "../../../styles/optimize";

interface Props {
    cx: number;
    cy: number;
    i: number;
    r: number;
}

export default function Circle(props: Props) {
    const MyCircle = styled('circle')`
        fill: #fff;
        opacity: .9;
        ${optimize}
        ${hover}
        transform-origin: ${props.cx}px ${props.cy}px;
        animation: logo_start 300ms ease-in-out backwards;
        animation-delay: ${props.i * 40}ms;

        @keyframes logo_start {
            0% { transform: scale(0); }
            50% { transform: scale(1.25); }
            100% { transform: scale(1); }
        }
    `;

    return <MyCircle {...props} />
}