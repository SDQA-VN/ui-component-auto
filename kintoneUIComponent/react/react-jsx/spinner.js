import React, { Component } from 'react';
import { Spinner } from '@kintone/kintone-ui-component';


class ConstructorSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false }
    }
    render() {
        return (
            <div id="constructor-spinner">
                <Spinner isVisible={this.state.isVisible} />
                <button onClick={this.buttonClick}>Show Spinner</button>
                <button style={{ zIndex: 10000, position: "relative" }} onClick={this.handleClick}>Hide Spinner</button>
            </div>
        );
    };
    buttonClick = (event) => {
        this.setState(prevState => ({
            isVisible: true
        }))
    }
    handleClick = (event) => {
        this.setState(prevState => ({
            isVisible: false
        }))
    }
}

export default {
   ConstructorSpinner
}