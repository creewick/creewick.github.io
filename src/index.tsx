import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from './components/Page';
import Home from './components/Home';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Page>
                <Route exact path="/" component={Home} />
            </Page>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
