import React, { Component } from 'react';
import {TextArea} from '@kintone/kintone-ui-component';

//Constructor TextArea
class ConstructorTextArea extends React.Component {
    render() {
        return (
            <div id="constructor-textarea">
                <TextArea value = 'Constructor TextArea' isVisible = {true} isDisabled = {false} onChange= {(value)=>this.setState({value})}/>
            </div>
        );
    }
}

//getValue() TextArea
class GetValueTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Get Value of TextArea' }
    }
    render() {
        return (
            <div id="get-value-textarea">
                <TextArea value={this.state.value} onChange= {(value)=>this.setState({value})}/>
                <button class='get-value' onClick={this.handleButtonClick}>Get Value of TextArea</button>
            </div>
        );
    }
    handleButtonClick =()=>{
        alert(this.state.value);
    }
}

//setValue() TextArea
class SetValueTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }
    render() {
        return (
            <div id="set-value-textarea">
                <TextArea value={this.state.value}/>
                <button class='set-value' onChange= {(value)=>this.setState({value})} onClick={this.handleButtonClickSetValueWithString}>Set Value of TextArea with string</button>
                <button class='set-value1' onChange= {(value)=>this.setState({value})} onClick={this.handleButtonClickSetValueWithoutString}>Set Value of TextArea without string</button>
            </div>
        );
    }
    handleButtonClickSetValueWithString =()=>{
       this.setState({
           value: 'Set Value with String'
       })
    }

    handleButtonClickSetValueWithoutString =()=>{
        this.setState({
            value: 123123
        })
     }
}

class OnCallBackFunctionTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'onCallbackFunctionTextArea' }
    }
    render() {
        return (
            <div id="on-callback-function-textarea">
                <TextArea value={this.state.value} onChange= {(value)=>this.setState({value})} onClick={this.handleButtonClick} onChange={this.handleButtonClick1}/>
                
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert("onCallbackFunctionTextArea has been clicked");
    }
    handleButtonClick1 = (event) => {
        alert("onCallbackFunctionTextArea has been changed");
    }
}

class OnCallBackTriggerTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'onCallbackTriggerTextArea' }
    }
    render() {
        return (
            <div class="on-callback-trigger-textarea">
                  <TextArea value={this.state.value} onChange= {(value)=>this.setState({value})} onClick={this.handleButtonClick}/>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert("onCallbackTriggerTextArea has been clicked");
    }
}

class ShowTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, visible1: true }
    }
    render() {
        return (
            <div>
            <div id='show-invisible-textarea'>
                <TextArea  value='Show Invisible TextArea' onChange= {(value)=>this.setState({value})} isVisible={this.state.visible}/>
            </div>
            <div id='show-visible-textarea'>
                <TextArea value='Show Visible TextArea' onChange= {(value)=>this.setState({value})} isVisible={this.state.visible1}/>
            </div>
                <button class='show-textarea' onChange= {(value)=>this.setState({value})} onClick={this.handleButtonClick}>Show TextArea</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
       this.setState({
           visible: true,
           visible1: true
       })
    }
}

class HideTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true, visible1: false }
    }
    render() {
        return (
            <div>
                <div id='hide-visible-textarea'>
                <TextArea  value='Hide Visible TextArea' isVisible={this.state.visible}/>
                </div>
                <div id='hide-invisible-textarea'>
                <TextArea  value='Hide Invisible TextArea' isVisible={this.state.visible1}/>
                </div>
                <button class='hide-textarea' onClick={this.handleButtonClick}>Hide TextArea</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
       this.setState({
           visible: false, visible1: false
       })
    }
}

class DisableTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disable: false, disable1: true }
    }
    render() {
        return (
            <div>
            <div id='disable-enabled-textarea'>
                <TextArea  value='disable the current enabled TextArea' isDisabled={this.state.disable}/>
            </div>
              <div id='disable-disabled-textarea'>
                <TextArea  value='disable the current disabled TextArea' isDisabled={this.state.disable1}/>
            </div>
            <button class='disable-textarea' onClick={this.handleButtonClick}>Disable TextArea</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
       this.setState({
           disable: true, disable1: true
       })
    }
}

class EnableTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enable: true, enable1: false }
    }
    render() {
        return (
            <div>
            <div id='enable-disabled-textarea'>
                <TextArea  value='enable the current disabled TextArea' isDisabled={this.state.enable}/>
                </div>
             <div id='enable-enabled-textarea'>
                <TextArea id='enable-enabled-textarea' value='enable the current enabled TextArea' isDisabled={this.state.enable1}/>
            </div>
                <button class='disable-textarea' onClick={this.handleButtonClick}>Enable TextArea</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
       this.setState({
            enable: false, enable1: false
       })
    }
}
export default {
    ConstructorTextArea,
    GetValueTextArea,
    SetValueTextArea,
    OnCallBackFunctionTextArea,
    OnCallBackTriggerTextArea,
    ShowTextArea,
    HideTextArea,
    DisableTextArea,
    EnableTextArea
}