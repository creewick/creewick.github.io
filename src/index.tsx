import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PageContainer from './containers/PageContainer';
import Home from './routes/Home';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <PageContainer>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </PageContainer>
    </React.StrictMode>,
    document.getElementById('root'),
);
