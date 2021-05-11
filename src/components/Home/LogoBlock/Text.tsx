import styled from 'styled-components';

export default styled('text')`
    font-family: "Title", serif;
    font-weight: bold;
    font-size: 15px;
    fill: orange;
    
    pointer-events: none;
    
    will-change: transform;
    transform: translateZ(0);
    transform-origin: 50% 50%;
    animation: title_start 100ms ease-in-out backwards;
    animation-delay: 600ms;
    
    @keyframes title_start {
        0% { opacity: 0; transform: scale(1.5); }
        100% { transform: scale(1); }
    }
`;