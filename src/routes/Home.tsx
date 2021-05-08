import React from 'react';
import ScreenContainer from '../containers/ScreenContainer';
import CenterContainer from '../containers/CenterContainer';
import CardContainer from '../containers/CardContainer';

export default function Home() {
    return (
        <div>
            <ScreenContainer>
                <CenterContainer>
                    <CardContainer>
                        123
                    </CardContainer>
                </CenterContainer>
            </ScreenContainer>
        </div>
    );
}