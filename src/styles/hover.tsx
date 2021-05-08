import { css } from "styled-components";

export default css`
    will-change: transform;
    transform: translateZ(0);
    transition: transform cubic-bezier(0.2, 0.9, 0.4, 2) .5s;

    &:hover {
        transform: scale(1.25);
        transition-duration: .15s;
    }
`;
