import React, { Component } from 'react';
import {Label} from '@kintone/kintone-ui-component';

class LabelRender extends React.Component {
    render() {
        return (
            <div class="label-render">
                <Label
                    text='Label'
                    isRequired={true}
                    isDisabled={false}
                    isVisible={true} />
            </div>
        );
    }
}

class LabelNoOption extends React.Component {
    render() {
        return (
            <div class="label-no-option">
                <Label/>
            </div>
        );
    }
}

class LabelOnlyText extends React.Component {
    render() {
        return (
            <div class="label-only-text">
                <Label text='Label with only option.Text'/>
            </div>
        );
    }
}

class LabelOnlyRequired extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    render() {
        return (
            <div class="label-only-isRequired">
                <Label isRequired={this.state.value} />
                <button class="change-only-isRequired" onClick={this.handleButtonClick} >Change Only isRequired To False</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    }
}

class LabelOnlyDisabled extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    render() {
        return (
            <div class="label-only-isDisabled">
                <Label isDisabled={this.state.value} />
                <button class="change-only-isDisabled" onClick={this.handleButtonClick} >Change Only isDisabled To False</button>
                <button class="get-state" onClick={this.handleButtonClickShowValue}>Get Value of isDisabled</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    }
    handleButtonClickShowValue = (event) => {
        alert(this.state.value);
    }
}

class LabelOnlyVisible extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    render() {
        return (
            <div class="label-only-isVisible">
                <Label isVisible={this.state.value}/>
                <button class="change-only-isVisible" onClick={this.handleButtonClick} >Change Only option.Visible To False</button>
                <button class="get-state" onClick={this.handleButtonClickShowValue}>Get Value of isVisible</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
           value: false
        }))
    }
    handleButtonClickShowValue = (event) => {
        alert(this.state.value);
    }
}

class LabelSetTextMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }
    render() {
        return (
            <div class="label-setText">
                <Label
                    text={this.state.text}/>
                <button class="set-text" onClick={this.handleButtonClick} >Set Text Label that not contain existing text</button>
                <button class="set-text-2" onClick={this.handleButtonClick1} >Set Text Label that contain existing text</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: "Label changed text"
        }))
    }
    handleButtonClick1 = (event) => {
        this.setState(prevState => ({
            text: "Label changed text second time"
        }))
    }
}

class LabelSetTextXSSMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Label before set XSS" }
    }
    render() {
        return (
            <div class="label-setText-xss">
                <Label text={this.state.text} />
                <button class="set-text-xss" onClick={this.handleButtonClick} >Set Text XSS Value for Label</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: "alert('Label after set XSS');"
        }))
    }
}

class LabelInvisibleSetTextMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Label before change" ,value:false}
    }
    render() {
        return (
            <div class="label-invisible-setText">
                <Label text={this.state.text} isVisible={this.state.value} />
                <button class="set-text-invisible" onClick={this.handleButtonClick} >Set Text for Invisible Label</button>
                <button class="show-invisible-label" onClick={this.handleButtonClickShow} >Show Invisible Label</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: "Label after change"
        }))
    }
    handleButtonClickShow = (event) => {
        this.setState(prevState => ({
           value: true
        }))
    }
}

class LabelSetTextBlankMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Label before set text to blank"}
    }
    render() {
        return (
            <div class="label-setText-blank">
                <Label text={this.state.text} />
                <button class="set-text-blank" onClick={this.handleButtonClick} >Set Text to Blank for Label</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            text: ""
        }))
    }
}

class LabelSetRequireMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Set require for label", value:true}
    }
    render() {
        return (
            <div class="label-set-isRequired">
                <Label text={this.state.text} isRequired={this.state.value} />
                <button class="set-required-true" onClick={this.handleButtonClick} >Set Require to True</button>
                <button class="set-required-false" onClick={this.handleButtonClick1} >Set Require to False</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            value: true
        }))
    }
    handleButtonClick1 = (event) => {
        this.setState(prevState => ({
            value: false
        }))
    }
}

class LabelInvisibleSetRequireMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Label before set require", isVisible:false, isRequired: false}
    }
    render() {
        return (
            <div class="label-invisible-set-isRequired">
                <Label text={this.state.text} isVisible={this.state.isVisible} isRequired={this.state.isRequired} />
                <button class="set-require-invisible" onClick={this.handleButtonClick} >Set Require for Invisible Label</button>
                <button class="show-require-label" onClick={this.handleButtonClickShow} >Show Invisible Label</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            isRequired: true
        }))
    }
    handleButtonClickShow = (event) => {
        this.setState(prevState => ({
           isVisible: true
        }))
    }
}

class LabelShowMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true, invisible: false }
    }
    render() {
        return (
            <div class="label-show">
                <div class='label-invisible'><Label text='Invisible Label' isVisible={this.state.invisible} /></div>
                <div class='label-visible'><Label text='Visible Label' isVisible={this.state.visible} /></div>
             <button class="show-label" onClick={this.handleButtonClick} >Show Label</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            visible: true,
            invisible: true
        }))
    }
}

class LabelHideMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true, invisible: false }
    }
    render() {
        return (
            <div class="label-hide">
                <div class='label-visible'><Label text='Visible Label' isVisible={this.state.visible} /> </div>
                <div class='label-invisible'><Label text='Invisible Label' isVisible={this.state.invisible} /> </div>
             <button class="hide-label" onClick={this.handleButtonClick} >Hide Label</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            visible: false,
            invisible: false
        }))
    }
}


class LabelDisableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enabled: false, disabled: true }
    }
    render() {
        return (
            <div class="label-set-disable">
                <div class='disable-enabled'><Label isDisabled={this.state.false} text='Current Enabled' /></div>
                <div class='disable-disabled'><Label isDisabled={this.state.true} text='Current Disabled' /></div>
                <button class="set-disable" onClick={this.handleButtonClick} >Disable Label</button>
                <button class="get-state" onClick={this.handleButtonClickShowValue} >Get Value isDisabled</button>
            </div>
           
        );
    }
    handleButtonClick = () =>{
        this.setState({
            enabled: true,
            disabled: true
        })
    }
    handleButtonClickShowValue = () =>{
      alert(this.state.enabled +" "+ this.state.disabled);
    }
}

class LabelEnableMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enabled: false, disabled: true }
    }
    render() {
        return (
            <div class="label-set-enable">
                <div class='enable-disabled'><Label isDisabled={this.state.true} text='Current Disabled' /></div>
                <div class='enable-enabled'><Label isDisabled={this.state.false} text='Current Enabled' /></div>
                <button class="set-enable" onClick={this.handleButtonClick} >Enable Label</button>
                <button class="get-state" onClick={this.handleButtonClickShowValue} >Get Value isDisabled</button>
            </div>
           
        );
    }
    handleButtonClick = () =>{
        this.setState({
            enabled: true,
            disabled: true
        })
    }
    handleButtonClickShowValue = () =>{
      alert(this.state.disabled +" "+ this.state.enabled);
    }
}

class LabelOnCallMethod extends React.Component {
    render() {
        return (
            <div class="label-onCall">
                <Label
                    text='Label'
                    isRequired={true}
                    onClick={this.handleButtonClick} />
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert("Label has been clicked")
    }
}

// class LabelSetValueMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: 'Label default' }
//     }
//     render() {
//         return (
//             <div class="label-setText">
//                 <Label
//                     text={this.state.value} />
//                 <button class="set-value" onClick={this.handleButtonClick} >Set Value</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: "Label change"
//         }))
//     }
// }
// class LabelSetRequireMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: false }
//     }
//     render() {
//         return (
//             <div class="label-setRequire">
//                 <Label
//                     text='Label'
//                     isRequired={this.state.value} />
//                 <button class="set-require" onClick={this.handleButtonClick} >Set Require</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: true
//         }))
//     }
// }
// class LabelSetNonRequireMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: true }
//     }
//     render() {
//         return (
//             <div class="label-setNonRequire">
//                 <Label
//                     text='Label'
//                     isRequired={this.state.value} />
//                 <button class="set-nonRequire" onClick={this.handleButtonClick} >Set NonRequire</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: false
//         }))
//     }
// }
// class LabelSetRequireExistedMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: true }
//     }
//     render() {
//         return (
//             <div class="label-setRequireExisted">
//                 <Label
//                     text='Label'
//                     isRequired={this.state.value} />
//                 <button class="set-require" onClick={this.handleButtonClick} >Set Require</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: true
//         }))
//     }
// }

// class LabelHideMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: true }
//     }
//     render() {
//         return (
//             <div class="label-hide">
//                 <Label
//                     text='Label'
//                     isRequired={true}
//                     isVisible={this.state.value} />
//                 <button class="hide-label" onClick={this.handleButtonClick} >Hide Label</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: false
//         }))
//     }
// }
// class LabelDisableMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: false }
//     }
//     render() {
//         return (
//             <div class="label-disable">
//                 <Label text='Label' isRequired={true} isDisabled={this.state.value} />
//                 <button class="disable-label" onClick={this.handleButtonClick} >Disable Label</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: true
//         }))
//     }
// }
// class LabelEnableMethod extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: true }
//     }
//     render() {
//         return (
//             <div class="label-enable">
//                 <Label text='Label' isRequired={true} isDisabled={this.state.value} />
//                 <button class="enable-label" onClick={this.handleButtonClick} >Enable Label</button>
//             </div>
//         );
//     }
//     handleButtonClick = (event) => {
//         this.setState(prevState => ({
//             value: false
//         }))
//     }
// }


export default {
    LabelRender,
    LabelNoOption,
    LabelOnlyText,
    LabelOnlyRequired,
    LabelOnlyDisabled,
    LabelOnlyVisible,
    LabelSetTextMethod,
    LabelSetTextXSSMethod,
    LabelInvisibleSetTextMethod,
    LabelSetTextBlankMethod,
    // LabelSetValueMethod,
    LabelSetRequireMethod,
    LabelInvisibleSetRequireMethod,
    // LabelSetNonRequireMethod,
    // LabelSetRequireExistedMethod,
    LabelShowMethod,
    LabelHideMethod,
    LabelDisableMethod,
    LabelEnableMethod,
    LabelOnCallMethod,
}