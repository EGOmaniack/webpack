console.log("Hellow from contact !!!");

const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Link from './components/Link';
import Content from './components/Content';

ReactDOM.render(
    <div>
    <h1>Главная <Link link="/index.html" lable="страница" /></h1>
    <Content/>
    </div>,
    document.getElementById('contact_root')
);