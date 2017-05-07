const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Link from './components/Link'
import Head from './components/Head';


ReactDOM.render(
    <div>
        <Head/>
        <h1>Наши <Link link="/contact.html" lable="контакты" /></h1>
    </div>,
    document.getElementById('root')
);