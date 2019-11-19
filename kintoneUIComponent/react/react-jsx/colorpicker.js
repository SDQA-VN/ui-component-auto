import React, { Component } from 'react';
import { ColorPicker } from '@kintone/kintone-ui-component';

//Constructor & render
class ConstructorColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Text default' }
    }
    
    render() {
        return (
            <div id="constructor-colorpicker">
                <input id='hex-value' value='' type='text' ></input>
                <ColorPicker
                    color='#ecd110'
                    isDisabled={false}
                    isVisible={true} 
                    onChange={(color)=>{this.setState({color})}}/>
            </div>
        );
    }

}

class GetColorColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: '#ecd110' }
    }
    render() {
        return (
            <div id="get-color-colorpicker">
                <ColorPicker
                    color={this.state.color}
                    onChange={(color) => { this.setState({ color }) }} />
                <button class="get-color" onClick={this.handleButtonClick} >Get Color of Colorpicker</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.color);
    }
}

class SetColorColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color:'#ecd110' }
    }
    render() {
        return (
            <div id="set-color-colorpicker">
                <ColorPicker
                    color= {this.state.color}
                    onChange={(color)=>{this.setState({color})}}/>
                <button class="set-color" onClick={this.handleButtonClick} >Set Color of Colorpicker</button>
            </div>
        );
    }
    handleButtonClick = () =>{
        this.setState({
            color: '#e74c3c'
        })
    }
}

class OnCallbackColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color:'#ecd110' }
    }
    render() {
        return (
            <div id="on-callback-colorpicker">
                <ColorPicker
                    color= {this.state.color}
                    onChange={this.handleChange}/>
            </div>
        );
    }
    handleChange = () =>{
        alert('onCallbackFunctionColorPicker has been clicked');
    }
}

class ShowColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false}
    } 
    render() {
        return (
            <div id="show-colorpicker">
               <ColorPicker  isVisible={this.state.isVisible} />
             <button  onClick={this.handleButtonClick} >Show Colorpicker</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            isVisible: true
        }))
    }
}

class HideColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true }
    } 
    render() {
        return (
            <div id="hide-colorpicker">
                <ColorPicker isVisible={this.state.isVisible} />
             <button onClick={this.handleButtonClick} >Hide Colorpicker</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            isVisible: false
        }))
    }
}

class DisableColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDisabled: false }
    } 
    render() {
        return (
            <div id="disable-colorpicker">
                <ColorPicker onChange={(value)=>this.setState({value})} isDisabled={this.state.isDisabled} />
             <button onClick={this.handleButtonClick} >Disable Colorpicker</button>
            </div>
        );
    }
    handleButtonClick = () => {
        this.setState({isDisabled: true})
    }
}

class EnableColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDisabled: true }
    } 
    render() {
        return (
            <div id="enable-colorpicker">
                <ColorPicker onChange={(value)=>this.setState({value})} isDisabled={this.state.isDisabled} />
             <button onClick={this.handleButtonClick} >Enable Colorpicker</button>
            </div>
        );
    }
    handleButtonClick = () => {
        this.setState({isDisabled: false})
    }
}

export default {
    ConstructorColorPicker,
    GetColorColorPicker,
    SetColorColorPicker,
    OnCallbackColorPicker,
    ShowColorPicker,
    HideColorPicker,
    DisableColorPicker,
    EnableColorPicker

}