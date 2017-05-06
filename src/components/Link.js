import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';

export default class Link extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <a href={this.props.link}>{ this.props.lable }</a>;
    }
}