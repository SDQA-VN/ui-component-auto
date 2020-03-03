import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Text, Label, Dropdown, RadioButton, Alert, IconButton, MultipleChoice } from '@kintone/kintone-ui-component';

//Normal button
class NormalButton extends React.Component {
    render() {
        return (
            <div class="normalButton">
                <Button
                    text='normalButton'
                    type='Normal'
                    isDisabled={false}
                    isVisible={true} />
            </div>
        );
    }
}
class NormalButtonSetTypeMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "normal" }
    }

    render() {
        return (
            <div class="normalButton_setNormalType">
                <Button
                    text="normalButton_setNormalType"
                    type={this.state.type}
                    isDisabled={false}
                    isVisible={true} />
                <button class="change-type" onClick={this.handleButtonClick} >Change Type</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            type: "normal"
        }))
    }
}
class SubmitButtonSetTypeMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "normal" }
    }

    render() {
        return (
            <div class="normalButton_setSubmitType">
                <Button
                    text="normalButton_setSubmitType"
                    type={this.state.type}
                    isDisabled={false}
                    isVisible={true} />
                <button class="change-type" onClick={this.handleButtonClick} >Change Type</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            type: "submit"
        }))
    }
}
class NormalButtonSetTextMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: "normalButton_setText" }
    }

    render() {
        return (
            <div class="normalButton_setText">
                <Button
                    text={this.state.test}
                    type='normal'
                    isDisabled={false}
                    isVisible={true} />
                <button class="change-text" onClick={this.handleButtonClick} >Change Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            test: "Button changed text"
        }))
    }
}
class NormalButtonShowMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    render() {
        return (
            <div class="normalButton_showInvisible">
                <Button
                    text="normalButton_showInvisible"
                    type='normal'
                    isDisabled={false}
                    isVisible={this.state.show} />
                <button class="show-button" onClick={this.handleButtonClick} >Show Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            show: true
        }))
    }
}
class NormalButtonHideMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    render() {
        return (
            <div class="normalButton_hideVisible">
                <Button
                    text="normalButton_hideVisible"
                    type='normal'
                    isDisabled={false}
                    isVisible={this.state.show} />
                <button class="hide-button" onClick={this.handleButtonClick} >Hide Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            show: false
        }))
    }
}
class NormalButtonDisableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disable: false }
    }

    render() {
        return (
            <div class="normalButton_disable">
                <Button
                    text="normalButton_disable"
                    type='normal'
                    isDisabled={this.state.disable}
                    isVisible={true} />
                <button class="disable-button" onClick={this.handleButtonClick} >Disable Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            disable: true
        }))
    }
}
class NormalButtonEnableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disable: true }
    }

    render() {
        return (
            <div class="normalButton_enable">
                <Button
                    text="normalButton_enable"
                    type='normal'
                    isDisabled={this.state.disable}
                    isVisible={true} />
                <button class="enable-button" onClick={this.handleButtonClick} >Enable Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            disable: false
        }))
    }
}
class NormalButtonOnCallMethod extends React.Component {
    render() {
        return (
            <div class="normalButton_onCall">
                <Button
                    text="normalButton_onCall"
                    type='normal'
                    isDisabled={false}
                    isVisible={true}
                    onClick={this.handleButtonClick} />
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert("normalButton_onCall has been clicked")
    }
}
class NormalButtonOnTriggerMethod extends React.Component {
    render() {
        return (
            <div class="normalButton_onTrigger">
                <Button
                    text="normalButton_onTrigger"
                    type='normal'
                    isDisabled={false}
                    isVisible={true}
                    onClick={this.triggerClick} />
            </div>
        );
    }
    triggerClick = (event) => {
        alert("normalButton_onTrigger has been clicked")
    }
}
//Submit button
class SubmitButton extends React.Component {
    render() {
        return (
            <div class="submitButton">
                <Button
                    text='submitButton'
                    type='submit'
                    isDisabled={false}
                    isVisible={true} />
            </div>
        );
    }
}
class SubmitButtonSetTypeSubmitMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "submit" }
    }

    render() {
        return (
            <div class="submitButton_setSubmitType">
                <Button
                    text="submitButton_setSubmitType"
                    type={this.state.type}
                    isDisabled={false}
                    isVisible={true} />
                <button class="change-type" onClick={this.handleButtonClick} >Change Type</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            type: "submit"
        }))
    }
}
class SubmitButtonSetTypeNormalMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "submit" }
    }

    render() {
        return (
            <div class="submitButton_setNormalType">
                <Button
                    text="submitButton_setSubmitType"
                    type={this.state.type}
                    isDisabled={false}
                    isVisible={true} />
                <button class="change-type" onClick={this.handleButtonClick} >Change Type</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            type: "normal"
        }))
    }
}
class SubmitButtonSetTextMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: "submitButton_setText" }
    }

    render() {
        return (
            <div class="submitButton_setText">
                <Button
                    text={this.state.test}
                    type='submit'
                    isDisabled={false}
                    isVisible={true} />
                <button class="change-text" onClick={this.handleButtonClick} >Change Text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            test: "Button changed text"
        }))
    }
}
class SubmitButtonShowMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    render() {
        return (
            <div class="submitButton_showInvisible">
                <Button
                    text="submitButton_showInvisible"
                    type='submit'
                    isDisabled={false}
                    isVisible={this.state.show} />
                <button class="show-button" onClick={this.handleButtonClick} >Show Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            show: true
        }))
    }
}
class SubmitButtonHideMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    render() {
        return (
            <div class="submitButton_hideVisible">
                <Button
                    text="submitButton_hideVisible"
                    type='submit'
                    isDisabled={false}
                    isVisible={this.state.show} />
                <button class="hide-button" onClick={this.handleButtonClick} >Hide Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            show: false
        }))
    }
}
class SubmitButtonDisableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disable: false }
    }

    render() {
        return (
            <div class="submitButton_disable">
                <Button
                    text="submitButton_disable"
                    type='submit'
                    isDisabled={this.state.disable}
                    isVisible={true} />
                <button class="disable-button" onClick={this.handleButtonClick} >Disable Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            disable: true
        }))
    }
}
class SubmitButtonEnableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disable: true }
    }

    render() {
        return (
            <div class="submitButton_enable">
                <Button
                    text="submitButton_enable"
                    type='submit'
                    isDisabled={this.state.disable}
                    isVisible={true} />
                <button class="enable-button" onClick={this.handleButtonClick} >Enable Button</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            disable: false
        }))
    }
}
class SubmitButtonOnCallMethod extends React.Component {
    render() {
        return (
            <div class="submitButton_onCall">
                <Button
                    text="submitButton_onCall"
                    type='submit'
                    isDisabled={false}
                    isVisible={true}
                    onClick={this.handleButtonClick} />
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert("submitButton_onCall has been clicked")
    }
}
class SubmitButtonOnTriggerMethod extends React.Component {
    render() {
        return (
            <div class="submitButton_onTrigger">
                <Button
                    text="submitButton_onTrigger"
                    type='submit'
                    isDisabled={false}
                    isVisible={true}
                    onClick={this.triggerClick} />
            </div>
        );
    }
    triggerClick = (event) => {
        alert("submitButton_onTrigger has been clicked")
    }
}


export default {
    NormalButton,
    NormalButtonSetTypeMethod,
    SubmitButtonSetTypeMethod,
    NormalButtonSetTextMethod,
    NormalButtonShowMethod,
    NormalButtonHideMethod,
    NormalButtonDisableMethod,
    NormalButtonEnableMethod,
    NormalButtonOnCallMethod,
    NormalButtonOnTriggerMethod,
    SubmitButton,
    SubmitButtonSetTypeSubmitMethod,
    SubmitButtonSetTypeNormalMethod,
    SubmitButtonSetTextMethod,
    SubmitButtonShowMethod,
    SubmitButtonHideMethod,
    SubmitButtonDisableMethod,
    SubmitButtonEnableMethod,
    SubmitButtonOnCallMethod,
    SubmitButtonOnTriggerMethod,
}