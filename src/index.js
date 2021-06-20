import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('app')
);