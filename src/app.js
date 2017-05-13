const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Link from './components/Link'
import Head from './components/Head';


ReactDOM.render(
    <div>
        <Head home/>
        {<h1><Link link="./prezent/index.html" lable="Уроки" /></h1>}
    </div>,
    document.getElementById('root')
);