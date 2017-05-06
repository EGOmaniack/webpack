import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';
import List from './List';

const Cont = styled.div`
    background:red;
    width: fit-content;
    li{
        list-style-type: none;
        color: white;
        font-weight:bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    ul {
    margin-left: 0; /* Отступ слева в браузере IE и Opera */
    padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
    >
   }
`

const phones = [
    '333-333-33',
    '4444-4444',
    '5555-555-5',
    '1111-111-1'
];
const adresses = [
    'Москва',
    'Хабаровск',
    'Иннополис',
    'Казань'
];
export default class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Cont>
        <button>phones</button><button>adresses</button>
        <List items={phones}/>
        </Cont> ;
    }
}