import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';
import List from './List';

const Cont = styled.div`
    background:#7A7A7A;
    width: fit-content;
    min-width: 800px;
    margin: 0 auto;
    min-height: 400px;
    li{
        padding-top: 10px;
        list-style-type: none;
        color: white;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    ul {
    margin-left: 0;
    padding-left: 0;
   }
`
const Middle = styled.div`
    width: fit-content;
    margin: auto;
`

const phones = [
    '+7 333-333-33',
    '+7 4444-4444',
    '+7 5555-555-5',
    '+7 1111-111-1'
];
const adresses = [
    'Москва',
    'Хабаровск',
    'Иннополис',
    'Казань'
];
export default class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = { choosed: phones }
    }
    setPhones(){
        this.setState({ choosed : phones });
    }
    setAdresses(){
        this.setState({ choosed : adresses });
    }
    render(){
        return (
        <Cont>
            <Middle>
                <button onClick={this.setPhones.bind(this)}>phones</button>
                <button onClick={this.setAdresses.bind(this)}>adresses</button>
                <List items={this.state.choosed}/>
            </Middle>
        </Cont>
        );
    }
}