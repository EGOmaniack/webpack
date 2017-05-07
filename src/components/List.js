import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';

export default class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const items = [];
        const enteredItems = this.props.items;
        for (var i = 0; i < enteredItems.length; i++) {
            items.push(<li key={i}>{enteredItems[i]}</li>);
        }

        return (
        <list>
            {items}
        </list> 
        );
    }
}