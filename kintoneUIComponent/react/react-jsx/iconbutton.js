import React, { Component } from 'react';
import {IconButton} from '@kintone/kintone-ui-component';

// Icon Button
class IconButtonRenderMethod extends React.Component {
    render() {
        return (
            <div class="icon-button">
                <IconButton
                    type='insert'
                    size='small'
                    color='blue'
                    shape='circle'
                    isVisible={true}
                    isDisabled={false}
                />
            </div>
        );
    }
}
class IconButtonOnlyTypeMethod extends React.Component {
    render() {
        return (
            <div class="icon-onlyType">
                <IconButton
                    type='insert'
                />
            </div>
        );
    }
}
class IconButtonOnlyColorMethod extends React.Component {
    render() {
        return (
            <div class="icon-onlyColor">
                <IconButton
                    color='green'
                />
            </div>
        );
    }
}
class IconButtonOnlyDisableMethod extends React.Component {
    render() {
        return (
            <div class="icon-onlyDisable">
                <IconButton
                    isDisabled={true}
                />
            </div>
        );
    }
}
class IconButtonSetTypeMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'insert' }
    }
    render() {
        return (
            <div class="icon-setType">
                <IconButton
                    type={this.state.value}
                />
                <button class="type-insert" onClick={this.handleInsertType} >Type Insert</button>
                <button class="type-remove" onClick={this.handleRemoveType} >Type Remove</button>
                <button class="type-close" onClick={this.handleCloseType} >Type Close</button>
            </div>
        );
    }
    handleInsertType = (event) => {
        this.setState(prevState => ({
            value: 'insert'
        }))
    };
    handleRemoveType = (event) => {
        this.setState(prevState => ({
            value: 'remove'
        }))
    };
    handleCloseType = (event) => {
        this.setState(prevState => ({
            value: 'close'
        }))
    }
}
class InvisibleIconSetTypeMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'insert',
            isVisible: false
        }
    }
    render() {
        return (
            <div class="invisibleIcon-setType">
                <IconButton
                    type={this.state.value}
                    isVisible={this.state.isVisible}
                />
                <button class="set-type" onClick={this.handleInsertType} >Set Type</button>
            </div>
        );
    }
    handleInsertType = (event) => {
        this.setState(prevState => ({
            value: 'remove',
            isVisible: true
        }))
    };
}
class IconButtonSetSizeMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'small' }
    }
    render() {
        return (
            <div class="icon-setSize">
                <IconButton
                    size={this.state.value}
                />
                <button class="size-small" onClick={this.handleSizeSmall} >Size Small</button>
                <button class="size-large" onClick={this.handleSizeLarge} >Size Large</button>
            </div>
        );
    }
    handleSizeSmall = (event) => {
        this.setState(prevState => ({
            value: 'small'
        }))
    };
    handleSizeLarge = (event) => {
        this.setState(prevState => ({
            value: 'large'
        }))
    };
}
class IconButtonSetShapeMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'normal' }
    }
    render() {
        return (
            <div class="icon-setShape">
                <IconButton
                    shape={this.state.value}
                />
                <button class="size-small" onClick={this.handleSizeSmall} >Set Shape Circle</button>
                <button class="size-large" onClick={this.handleSizeLarge} >Set Shape Normal</button>
            </div>
        );
    }
    handleSizeSmall = (event) => {
        this.setState(prevState => ({
            value: 'circle'
        }))
    };
    handleSizeLarge = (event) => {
        this.setState(prevState => ({
            value: 'normal'
        }))
    };
}
class IconButtonSetColorMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'green' }
    }
    render() {
        return (
            <div class="icon-setColor">
                <IconButton
                    color={this.state.value}
                />
                <button class="size-small" onClick={this.handleColorGray} >Set Color Gray</button>
            </div>
        );
    }
    handleColorGray = (event) => {
        this.setState(prevState => ({
            value: 'gray'
        }))
    };
}
class IconButtonShowMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: false }
    }
    render() {
        return (
            <div class="icon-show">
                <IconButton
                    isVisible={this.state.value}
                />
                <button class="show-icon" onClick={this.handleButton} >Show Icon</button>
            </div>
        );
    }
    handleButton = (event) => {
        this.setState(prevState => ({
            value: true
        }))
    };
}
class IconButtonHideMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    render() {
        return (
            <div class="icon-hide">
                <IconButton
                    isVisible={this.state.value}
                />
                <button class="hide-icon" onClick={this.handleButton} >Hide Icon</button>
            </div>
        );
    }
    handleButton = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    };
}
class IconButtonDisableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: false }
    }
    render() {
        return (
            <div class="icon-disable">
                <IconButton
                    isDisabled={this.state.value}
                />
                <button class="disable-icon" onClick={this.handleButton} >Disable Icon</button>
            </div>
        );
    }
    handleButton = (event) => {
        this.setState(prevState => ({
            value: true
        }))
    };
}
class IconButtonEnableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    render() {
        return (
            <div class="icon-enable">
                <IconButton
                    isDisabled={this.state.value}
                />
                <button class="enable-icon" onClick={this.handleButton} >Enable Icon</button>
            </div>
        );
    }
    handleButton = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    };
}
class IconButtonOnCallMethod extends React.Component {
    render() {
        return (
            <div class="icon-onCall">
                <IconButton
                    onClick={this.handleButton}
                />
            </div>
        );
    }
    handleButton = (event) => {
        alert("Icon button has been clicked")
    };
}

export default {
    IconButtonRenderMethod,
    IconButtonOnlyTypeMethod,
    IconButtonOnlyColorMethod,
    IconButtonOnlyDisableMethod,
    IconButtonSetTypeMethod,
    IconButtonSetShapeMethod,
    IconButtonSetColorMethod,
    InvisibleIconSetTypeMethod,
    IconButtonSetSizeMethod,
    IconButtonShowMethod,
    IconButtonHideMethod,
    IconButtonDisableMethod,
    IconButtonEnableMethod,
    IconButtonOnCallMethod,
}