import React from "react";
import App from 'components/App';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
    return(
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    )
}

export default Root;