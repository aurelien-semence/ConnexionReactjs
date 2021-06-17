import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import Bienvenue from "./Bienvenue";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('connexion')
);
ReactDOM.render(
    <React.StrictMode>
        <Bienvenue/>
    </React.StrictMode>,
    document.getElementById('bienvenue')
);
