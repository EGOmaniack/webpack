const css = require('./scss/head.scss');
import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';


const Wrap = styled.div`

background: #9B268B;
height: 80px;

    .minWrap{
        width: fit-content;
        margin: 0 auto;
    }
    .head-elem{
        color: #FFC0FF;
        height:60px;
        font-family:"Lora", "Playfair Display", Georgia, sans-serif;
        font-weight: bold;
        font-size: 30px;
        padding-top:20px;
        width: 200px;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        &:hover{
            background:#8E197E;
        }
    }
`

export default class Head extends React.Component{
    constructor(props){
        super(props);
    }
    ToContacts(){
        window.location.href = "./contact.html";
    }
    ToMain(){
        window.location.href = "./index.html";
    }
    render(){
        return (
        <Wrap>
            <div className="minWrap">
                <div onClick={this.ToMain.bind(this)} className="head-elem">ДОМОЙ</div>
                <div onClick={this.ToContacts.bind(this)} className="head-elem">КОНТАКТЫ</div>
            </div>
        </Wrap>
        );
    }
}