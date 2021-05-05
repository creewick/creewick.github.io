import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';

ReactDOM.render(
    <React.StrictMode>
        <Page>
            <BrowserRouter>
            {/* <Route exact path="/" component={Home} /> */}
            </BrowserRouter>
        </Page>
    </React.StrictMode>,
    document.getElementById('root'),
);
