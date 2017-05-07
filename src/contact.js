console.log("Hellow from contact !!!");

const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Link from './components/Link';
import Contacts from './components/Contacts';
import Head from './components/Head';

ReactDOM.render(
    <div>
        <Head/>
        <h1>Главная <Link link="/index.html" lable="страница" /></h1>
        <Contacts/>
    </div>,
    document.getElementById('contact_root')
);