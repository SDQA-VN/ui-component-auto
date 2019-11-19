import React, { Component } from 'react';
import { Alert } from '@kintone/kintone-ui-component';

//Alert
class ErrorAlert extends React.Component {
    render() {
        return (
            <div id="error-alert">
                <Alert
                    text='errorAlert'
                    type='error'
                    isVisible={true}
                />
            </div>
        );
    }
}

class SuccessAlert extends React.Component {
    render() {
        return (
            <div id="success-alert">
                <Alert text='successAlert' type='success' />
            </div>
        );
    }
}

class NoOptionAlert extends React.Component {
    render() {
        return (
            <div id="no-option-alert">
                <Alert />
            </div>
        );
    }
}

class FullOptionAlert extends React.Component {
    render() {
        return (
            <div id="full-option-alert">
                <Alert isVisible= {true} type='error' text='full option Alert' />
            </div>
        );
    }
}

class OnlyTextAlert extends React.Component {
    render() {
        return (
            <div id="only-text-alert">
                <Alert text='Alert with only text' />
            </div>
        );
    }
}

class OnlyTypeAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'error' }
    }
    render() {
        return (
            <div id="only-type-alert">
                <Alert type={this.state.value} />
                <button onClick={this.handleButtonClick} >Change Only Type To Success</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: 'success'
        }))
    }
}

// class AlertOnlyDisable extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: true }
//     }
//     render() {
//         return (
//             <div class="alert-only-isDisable">
//                 <Alert isDisabled={this.state.value} onClick={this.handleButtonClickAlert} />
//                 <button class="change-only-isDisable-true" onClick={this.handleButtonClick} >Disable Alert</button>
//                 <button class="change-only-isDisable-false" onClick={this.handleButtonClick1} >Enable Alert</button>
//                 <button class="get-state" onClick={this.handleButtonClickAlert} >Get State</button>
//             </div>

//         );
//     }
//     handleButtonClick = () => {
//         this.setState({
//             value: true
//         })
//     }

//     handleButtonClick1 = () => {
//         this.setState({
//             value: false
//         })
//     }

//     handleButtonClickAlert = () => {
//         alert(this.state.value)
//     }
// }

class OnlyVisibleAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    render() {
        return (
            <div id="only-visible-alert">
                <Alert isVisible={this.state.value} />
                <button class="change-only-isVisible" onClick={this.handleButtonClick} >Only option.Visible</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    }
}


class SetTextAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }
    render() {
        return (
            <div id="set-text-alert">
                <Alert
                    text={this.state.text}
                    type='success' />
                <button onClick={this.handleButtonClick} >Set Text Alert that not contain existing text</button>
                <button onClick={this.handleButtonClick1}>Set Text Alert that contain existing text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: "Set text for alert not contain existing text"
        }))
    }
    handleButtonClick1 = (event) => {
        this.setState(prevState => ({
            text: "Set text for alert contain existing text"
        }))
    }
}

class SetTextXSSAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Set XSS Value for Alert" }
    }
    render() {
        return (
            <div id="set-text-xss-alert">
                <Alert text={this.state.text} />
                <button onClick={this.handleButtonClick} >Set text XSS value for Alert</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: "alert('123');"
        }))
    }
}

class SetTextInvisibleAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Alert before set text", value: false }
    }
    render() {
        return (
            <div id="set-text-invisible-alert">
                <Alert text={this.state.text} isVisible={this.state.value} />
                <button onClick={this.handleButtonClick} >Set Text for Invisible Alert</button>
                <button onClick={this.handleButtonClickShow} >Show Invisible Set Text Alert</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: "Alert after set text"
        }))
    }
    handleButtonClickShow = (event) => {
        this.setState(prevState => ({
            value: true
        }))
    }
}

class SetTypeAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'error' }
    }
    render() {
        return (
            <div id="set-type-alert">
                <Alert
                    text='Set Type for Alert'
                    type={this.state.value} />
                <button onClick={this.handleButtonClickSetSuccess} >Set Success Type Alert</button>
                <button onClick={this.handleButtonClickSetError} >Set Error Type Alert</button>
            </div>
        );
    }
    handleButtonClickSetError = (event) => {
        this.setState(prevState => ({
            value: 'error'
        }))
    }
    handleButtonClickSetSuccess = (event) => {
        this.setState(prevState => ({
            value: 'success'
        }))
    }
}

class SetTypeInvisibleAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'error', visible: false }
    }
    render() {
        return (
            <div id="set-type-invisible-alert">
                <Alert
                    isVisible={this.state.visible}
                    type={this.state.value} />
                <button onClick={this.handleButtonClick} >Set Type for Invisible Alert</button>
                <button onClick={this.handleButtonClickShow} >Show Invisible Set Type Alert</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: 'success'
        }))
    }
    handleButtonClickShow = (event) => {
        this.setState(prevState => ({
            visible: true
        }))
    }
}

class ShowAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: false, value1: true }
    }
    render() {
        return (
            <div>
                <div id="show-invisible-alert">
                    <Alert
                        text='Show Invisible Alert'
                        isVisible={this.state.value} />
                </div>
                <div id="show-visible-alert">
                    <Alert
                        text='Show Visible Alert'
                        isVisible={this.state.value1} />
                </div>
                <button onClick={this.handleButtonClick} >Show Alert</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: true
        }))
    }
}

class HideAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true, value1: false }
    }
    render() {
        return (
            <div>
                <div id="hide-visible-alert">
                    <Alert
                        text='Hide Visible Alert'
                        isVisible={this.state.value} />
                </div>
                <div id="hide-invisible-alert">
                    <Alert
                        text='Hide Invisible Alert'
                        isVisible={this.state.value1} />
                </div>
                <button onClick={this.handleButtonClick}>Hide Alert</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    }
}

// class AlertEnableMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: true, value1: false}
//     }
//     render() {
//         return (
//             <div>
//                 <div id="enable-disabled-alert">
//                     <Alert
//                         text='Enable Disabled Alert'
//                         isDisabled={this.state.value} />
//                 </div>
//                 <div id="enable-enabled-alert">
//                     <Alert
//                         text='Enable Enabled Alert'
//                         isDisabled={this.state.value1} />
//                 </div>
//                 <button onClick={this.handleButtonClick} >Enable Alert</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         alert(this.state.value)
//     }
// }

// class AlertDisableMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: false, value1: true }
//     }
//     render() {
//         return (
//             <div>
//                 <div id="disable-enabled-alert">
//                     <Alert
//                         text='Disable Enabled Alert'
//                         isDisabled={this.state.value} />
//                 </div>
//                 <div id="disable-disabled-alert">
//                     <Alert
//                         text='Disable Disabled Alert'
//                         isDisabled={this.state.value} />
//                 </div>
//                 <button onClick={this.handleButtonClick} >Disable Alert</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         alert(this.state.value)
//     }
// }

class OnCallBackFunctionAlert extends React.Component {
    render() {
        return (
            <div id="on-callback-function-alert">
                <Alert
                    text='onCallbackFunctionAlert()'
                    onClick={this.handleButtonClick} />
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert("onCallBackFunctionAlert has been clicked");
    }
}

class OnCallBackTriggerAlert extends React.Component {
    render() {
        return (
            <div id="on-callback-trigger-alert">
                <Alert
                    text="onCallbackTriggerAlert()"
                    onClick={this.triggerClick} />
            </div>
        );
    }
    triggerClick = (event) => {
        alert("onCallBackTriggerAlert has been clicked");
    }
}

export default {
    ErrorAlert,
    SuccessAlert,
    NoOptionAlert,
    FullOptionAlert,
    OnlyTextAlert,
    OnlyTypeAlert,
    // AlertOnlyDisable,
    OnlyVisibleAlert,
    SetTextAlert,
    SetTextXSSAlert,
    SetTextInvisibleAlert,
    SetTypeAlert,
    SetTypeInvisibleAlert,
    HideAlert,
    ShowAlert,
    // AlertEnableMethod,
    // AlertDisableMethod,
    OnCallBackFunctionAlert,
    OnCallBackTriggerAlert
}