const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Link from './components/Link'

ReactDOM.render(
    <h1>Hellow <Link link="#" lable="world" /></h1>,
    document.getElementById('root')
);