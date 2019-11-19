import React, { Component } from 'react';
import { NotifyPopup } from '@kintone/kintone-ui-component';

// Notify Popup
class NotifySuccessRenderMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = { isVisible: false };

    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notifySuccess-render">
                <NotifyPopup
                    text='Submit successfully'
                    type='success'
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
}
class NotifyErrorRenderMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = { isVisible: false };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notifyError-render">
                <NotifyPopup
                    text='Error'
                    type='error'
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
}
class NotifyWithoutOptionMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = { isVisible: false };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-withoutOption">
                <NotifyPopup
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
}
class NotifySetTextMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            text: undefined,
            isVisible: false
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-setText">
                <NotifyPopup
                    text={this.state.text}
                    type='error'
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="set-text" onClick={this.handleButtonClick}>Set Text</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ text: 'Error change text' });
    }
}
class NotifySetTextBlankMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            text: 'Error text',
            isVisible: false
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-setTextBlank">
                <NotifyPopup
                    text={this.state.text}
                    type='error'
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="set-text" onClick={this.handleButtonClick}>Set Text</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ text: undefined });
    }
}
class NotifySetTypeMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            type: 'success',
            isVisible: false
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-setType">
                <NotifyPopup
                    text='Success Popup'
                    type={this.state.type}
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="set-type" onClick={this.handleButtonClick}>Set Type</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ type: 'error' });
    }
}
class NotifyHideMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            type: 'success',
            isVisible: false
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-hide">
                <NotifyPopup
                    text='Success Popup'
                    type={this.state.type}
                    isVisible={this.state.isVisible}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="notify-hide" onClick={this.handleButtonClick}>Notify hide</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ isVisible: false });
    }
}
class NotifyDisableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            type: 'success',
            isVisible: false,
            isDisabled: false
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-disable">
                <NotifyPopup
                    text='Success Popup'
                    type='success'
                    isVisible={this.state.isVisible}
                    isDisabled={this.state.isDisabled}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="notify-disable" onClick={this.handleButtonClick}>Disable hide</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ isDisabled: true });
    }
}
class NotifyEnableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            type: 'success',
            isVisible: false,
            isDisabled: true
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-enable">
                <NotifyPopup
                    text='Success Popup'
                    type='success'
                    isVisible={this.state.isVisible}
                    isDisabled={this.state.isDisabled}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="notify-enable" onClick={this.handleButtonClick}>Notify enable</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ isDisabled: false });
    }
}
class EnableNotifyEnableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            type: 'success',
            isVisible: false,
            isDisabled: false
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="enableNotify-enable">
                <NotifyPopup
                    text='Success Popup'
                    type='success'
                    isVisible={this.state.isVisible}
                    isDisabled={this.state.isDisabled}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
                <button class="notify-enable" onClick={this.handleButtonClick}>Notify enable</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        this.setState({ isDisabled: false });
    }
}
class NotifyOnCallMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            type: 'success',
            isVisible: false,
        };
    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div class="notify-onCall">
                <NotifyPopup
                    text='Success Popup'
                    type='success'
                    isVisible={this.state.isVisible}
                    onClick={this.handleButtonClick}
                    onClose={this.onClose} />
                <button class="notify-show" onClick={this.handleClick}>Notify show</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
    handleButtonClick = () => {
        alert('Notify popup has been clicked')
    }
}


export default {
    NotifySuccessRenderMethod,
    NotifyErrorRenderMethod,
    NotifyWithoutOptionMethod,
    NotifySetTextMethod,
    NotifySetTextBlankMethod,
    NotifySetTypeMethod,
    NotifyHideMethod,
    NotifyDisableMethod,
    NotifyEnableMethod,
    EnableNotifyEnableMethod,
    NotifyOnCallMethod,
}