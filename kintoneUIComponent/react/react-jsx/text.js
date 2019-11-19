import React, { Component } from 'react';
import { Text } from '@kintone/kintone-ui-component';


// Textbox
class ConstructorText extends React.Component {
    state = { value: 'Constructor Text' }
    render() {
        return (
            <div id="constructor-text">
                <Text
                    value={this.state.value}
                    isVisible={true}
                    isDisabled={false}
                    onChange={(value) => { this.setState({ value }) }}
                />
            </div>
        );
    }
}
class SetValueText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }
    render() {
        return (
            <div id="set-value-text">
                <Text
                    value={this.state.value} />
                <button onClick={this.handleButtonClick} >Set Value of Text with string</button>
                <button onClick={this.handleButtonClick1} >Set Value of Text without string</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: "Set Value Text with String"
        }))
    }
    handleButtonClick1 = (event) => {
        this.setState(prevState => ({
            value: "123123"
        }))
    }
}
class GetValueText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Get Value of Text' }
    }
    render() {
        return (
            <div id="get-value-text">
                <Text
                value={this.state.value} />
                <button onClick={this.handleButtonClick} >Get Value of Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.value);
    }
}

class ShowText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: false, value1: true }
    }
    render() {
        return (
            <div>
                <div id="show-invisible-text">
                    <Text
                        value='Show Invisible Text'
                        isVisible={this.state.value} />
                </div>
                <div id="show-visible-text">
                    <Text
                        value='Show Visible Text'
                        isVisible={this.state.value1} />
                </div>
                <button onClick={this.handleButtonClick} >Show Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: true, value1: true
        }))
    }
}
class HideText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true, value1: false }
    }
    render() {
        return (
            <div>
                <div id='hide-visible-text'>
                    <Text
                        value='Hide Visible Text'
                        isVisible={this.state.value} />
                </div>
                <div class="hide-invisible-text">
                    <Text
                        value='Hide Invisible Text'
                        isVisible={this.state.value1} />
                </div>
                <button onClick={this.handleButtonClick}>Hide Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: false, value1: false
        }))
    }
}
class DisableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: false, value1: true }
    }
    render() {
        return (
            <div>
                <div id="disable-enabled-text">
                    <Text
                        value='disable the current enabled Text'
                        isDisabled={this.state.value} />
                </div>
                <div id="disable-disabled-text">
                    <Text
                        value='disable the current disabled Text'
                        isDisabled={this.state.value1} />
                </div>
                <button onClick={this.handleButtonClick} >Disable Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: true, value1: true
        }))
    }
}
class EnableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true, value1: false }
    }
    render() {
        return (
            <div>
                <div id="enable-disabled-text">
                    <Text
                        value='enable the current disabled Text'
                        isDisabled={this.state.value} />
                </div>
                <div id="enable-enabled-text">
                    <Text
                        value='enable the current enabled Text'
                        isDisabled={this.state.value1} />
                </div>
                <button onClick={this.handleButtonClick} >Enable Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: false, value1: false
        }))
    }
}
class OnCallBackFunctionText extends React.Component {
    state = { value: 'onCallBackFunctionText' }
    render() {
        return (
            <div id="on-callback-function-text">
                <Text value={this.state.value} onClick={this.handleButtonClick} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
    handleChange(value) {
        this.setState({ value });
        alert('onChangeCallBackFunctionText has been changed');
    }
    handleButtonClick = (event) => {
        alert('onClickCallBackFunctionText has been clicked');
    }
}
class OnCallBackTriggerText extends React.Component {
    state = { value: 'onCallBackTriggerText' }
    render() {
        return (
            <div id="on-callback-trigger-text">
                <Text
                    value={this.state.value}
                    onClick={this.handleButtonClick}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert('onClickCallBackTriggerText has been clicked');
    }
    handleChange(value) {
        this.setState({ value});
        alert('onChangeCallBackTriggerText has been changed');
    }
}

export default {
    ConstructorText,
    SetValueText,
    GetValueText,
    DisableText,
    EnableText,
    ShowText,
    HideText,
    OnCallBackFunctionText,
    OnCallBackTriggerText
}