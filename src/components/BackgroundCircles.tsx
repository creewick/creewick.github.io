import styled from 'styled-components';
import glass from '../styles/glass';


export default function BackgroundCircles() {
    const renderCircle = () => {
        const random = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
        const size = random(50, 200);
        const top = random(100, 2000);
        const left = random(-600, 600);
        const color = ['#ffffff20', '#33336680', '#cc66ff80'][random(0, 2)];
    
        const Circle = styled.div`
            ${glass}
            width: ${size}px;
            height: ${size}px;
            border-radius: ${size}px;
            position: absolute;
            top: ${top}px;
            left: calc(50vw + ${left}px);
            background: ${color};
        `;

        return <Circle/>
    }
    
    return (
        <div>
            {Array.from({length: 20}).map(renderCircle)}
        </div>
    );
}
