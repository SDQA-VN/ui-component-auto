import React, { Component } from 'react';
import { Button, Text, Label, Dropdown, RadioButton, Alert, IconButton, MultipleChoice } from '@kintone/kintone-ui-component';

// Radio Button
class RadioRender extends React.Component {
    constructor(props) {
        super(props);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = { items: items, value: 'Lemon' };
    }
    render() {
        return (
            <div class="radio-render">
                <RadioButton
                    name='radio-render'
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={true}
                    isDisabled={false}
                    onChange={(value) => { this.setState({ value }) }} />
            </div>
        );
    }
}
class RadioAddMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [
                {
                    label: 'Orange',
                    value: 'Orange',
                    isDisabled: false
                }
            ],
            value: undefined
        }
    }
    render() {
        return (
            <div class="radio-add">
                <RadioButton name='radio-add' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="add-item" onClick={this.handleClick}>Add Item</button>
            </div>
        );
    }
    handleClick = () => {
        const item = {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    }
}
class RadioRemoveMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [{
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            }]
        }
    }
    render() {
        return (
            <div class="radio-remove">
                <RadioButton name='radio-remove' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="remove-item" onClick={this.handleClick}>Remove Item</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState(prevState => {
            if (prevState.items) {
                return prevState.items.splice(0, 1);
            }
            return prevState;
        });
    }
}
class RadioGetMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            }
        ];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="radio-getItems">
                <RadioButton
                    name='radio-getItems'
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }
    handleClick = () => {
        let source = []
        for (let i = 0; i < this.state.items.length; i++) {
            source.push(this.state.items[i].label)
        }
        alert(JSON.stringify(this.state.items));
    }
}
class RadioGetValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            }
        ];
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
    render() {
        return (
            <div class="radio-getValue">
                <RadioButton name='radio-getValue' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-value" onClick={this.handleClick}>Get Value</button>
            </div>
        );
    }
    handleClick = () => {
        alert(this.state.value);
    }
}
class InvisibleRadioGetValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            }
        ];
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
    render() {
        return (
            <div class="invisibleRadio-getValue">
                <RadioButton
                    name='invisibleRadio-getValue'
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={false}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="get-value" onClick={this.handleClick}>Get Value</button>
            </div>
        );
    }
    handleClick = () => {
        alert(this.state.value);
    }
}
class RadioSetValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            }
        ];
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
    render() {
        return (
            <div class="radio-setValue">
                <RadioButton name='radio-setValue' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="set-value" onClick={this.handleButtonClick}>Set Value</button>
            </div>
        );
    }
    handleButtonClick = (value) => {
        this.setState({ value: 'Orange' });
    }
}
class RadioDisableItemsEnableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined
        };
    }
    render() {
        return (
            <div class="radio-disableItemsEnable">
                <RadioButton name='radio-disableItemsEnable' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-item" onClick={this.handleClick}>Disable Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;

        this.setState({ items: items });
    }
}
class RadioDisableItemsDisableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            }
        ];
        this.state = {
            items: items,
            value: undefined
        };
    }
    render() {
        return (
            <div class="radio-disableItemsDisbale">
                <RadioButton name='radio-disableItemsDisbale' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-item" onClick={this.handleButtonClick}>Disable Item</button>
            </div>
        );
    }
    handleButtonClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;

        this.setState({ items: items });
    }
}
class InvisibleRadioDisableItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined,
            isVisible: false
        };
    }
    render() {
        return (
            <div class="invisibleRadio-disableItems">
                <RadioButton
                    name='invisibleRadio-disableItems'
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value, isVisible) => { this.setState({ value, isVisible }) }} />
                <button class="disable-item" onClick={this.handleClick}>Disable Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;

        this.setState({ items: items, isVisible: true });
    }
}
class RadioEnableItemsDisableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            }
        ];
        this.state = {
            items: items,
            value: undefined
        };
    }
    render() {
        return (
            <div class="radio-enableItemsDisable">
                <RadioButton name='radio-enableItemsDisable' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-item" onClick={this.handleClick}>Enable Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;

        this.setState({ items: items });
    }
}
class RadioEnableItemsEnableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined
        };
    }
    render() {
        return (
            <div class="radio-enableItemsEnable">
                <RadioButton name='radio-enableItemsEnable' items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-item" onClick={this.handleClick}>Enable Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;

        this.setState({ items: items });
    }
}
class RadioShowMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined,
            isVisible: false
        };
    }
    render() {
        return (
            <div class="radio-show">
                <RadioButton
                    name='radio-show'
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(isVisible) => { this.setState({ isVisible }) }} />
                <button class="show-radio" onClick={this.handleClick}>Show Radio</button>
            </div>
        );
    }
    handleClick = (isVisible) => {
        this.setState({ isVisible: true });
    }
}
class RadioHideMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined,
            isVisible: true
        };
    }
    render() {
        return (
            <div class="radio-hide">
                <RadioButton
                    name='radio-hide'
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(isVisible) => { this.setState({ isVisible }) }} />
                <button class="hide-radio" onClick={this.handleClick}>Hide Radio</button>
            </div>
        );
    }
    handleClick = (isVisible) => {
        this.setState({ isVisible: false });
    }
}
class RadioDisableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined,
            isDisabled: false
        };
    }
    render() {
        return (
            <div class="radio-disable">
                <RadioButton
                    name='radio-disable'
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(isDisabled) => { this.setState({ isDisabled }) }} />
                <button class="disable-radio" onClick={this.handleClick}>Disable Radio</button>
            </div>
        );
    }
    handleClick = (isDisabled) => {
        this.setState({ isDisabled: true });
    }
}
class RadioEnableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = {
            items: items,
            value: undefined,
            isDisabled: true
        };
    }
    render() {
        return (
            <div class="radio-enable">
                <RadioButton
                    name='radio-enable'
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(isDisabled) => { this.setState({ isDisabled }) }} />
                <button class="enable-radio" onClick={this.handleClick}>Enable Radio</button>
            </div>
        );
    }
    handleClick = (isDisabled) => {
        this.setState({ isDisabled: false });
    }
}
class RadioOnCallMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Tiger',
                value: 'Tiger',
                isDisabled: false
            },
            {
                label: 'Panther',
                value: 'Panther',
                isDisabled: false
            },
            {
                label: 'Snake',
                value: 'Snake',
                isDisabled: false
            },
        ];
        this.state = {
            items: items,
            value1: 'Panther'
        };
    }

    render() {
        return (
            <div class="radio-onCall">
                <RadioButton
                    name='radio-onCall'
                    items={this.state.items}
                    value={this.state.value1}
                    onChange={this.handleSelectedChange} />
            </div>
        );
    }
    handleSelectedChange = (value1) => {
        this.setState({ value1 });
        alert('value: ' + value1);
    }
}

export default {
    RadioRender,
    RadioAddMethod,
    RadioRemoveMethod,
    RadioGetMethod,
    RadioGetValueMethod,
    InvisibleRadioGetValueMethod,
    RadioSetValueMethod,
    RadioDisableItemsEnableMethod,
    RadioDisableItemsDisableMethod,
    InvisibleRadioDisableItemsMethod,
    RadioEnableItemsDisableMethod,
    RadioEnableItemsEnableMethod,
    RadioShowMethod,
    RadioHideMethod,
    RadioDisableMethod,
    RadioEnableMethod,
    RadioOnCallMethod,
}