import React, { Component } from 'react';
import {CheckBox } from '@kintone/kintone-ui-component';

//Checkbox
class CheckboxRenderMethod extends React.Component {
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
        this.state = { items: items, value: ['Orange'] };
    }
    render() {
        return (
            <div class="checkbox-render">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
            </div>
        );
    }
}
class CheckboxWithoutOptionMethod extends React.Component {
    constructor(props) {
        super(props);
        var items = [];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-withoutOption">
                <CheckBox items={this.state.items} />
            </div>
        );
    }
}
class CheckboxOnlyOptionValueMethod extends React.Component {
    constructor(props) {
        super(props);
        var items = [
            {
                value: 'Orange',
            },
            {
                value: 'Banana',
            },
            {
                value: 'Lemon',
            },
        ];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-onlyValue">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
            </div>
        );
    }
}
class CheckboxAddItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: []
        }
    }
    render() {
        return (
            <div class="checkbox-addItems">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items-disable" onClick={this.handleClick}>Add Item Disable</button>
                <button class="add-items-enable" onClick={this.handleButtonClick}>Add Item Enable</button>
            </div>
        );
    }
    handleClick = () => {
        const item = {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true,
            isSelected: true
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    };
    handleButtonClick = () => {
        const item = {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    }
}
class CheckboxRemoveItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [
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
            ]
        }
    }
    render() {
        return (
            <div class="checkbox-remove">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="remove-items" onClick={this.handleClick}>Remove Items</button>
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
class CheckboxGetItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [
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
            ]
        }
    }
    render() {
        return (
            <div class="checkbox-getItems">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }
    handleClick = () => {
        alert(JSON.stringify(this.state.items))
    }
}
class CheckboxGetItemsIndexMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [
                {
                    label: 'Orange',
                    value: 'Orange',
                    isDisabled: true
                },
                {
                    label: 'Banana',
                    value: 'Banana',
                    isDisabled: true
                },
            ]
        }
    }
    render() {
        return (
            <div class="checkbox-getItemsIndex">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        alert(JSON.stringify(items[0]))
    }
}
class CheckboxGetValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            },
        ]
        this.state = { items: items, value: ['Orange'] };
    }
    render() {
        return (
            <div class="checkbox-getValue">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-value" onClick={this.handleClick}>Get Value</button>
            </div>
        );
    }
    handleClick = () => {
        alert(this.state.value)
    }
}
class CheckboxSetVisibleValueMethod extends React.Component {
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
            },
        ]
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-setVisibleValue">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="set-value" onClick={this.handleClick}>Set Value</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({
            value: ['Orange']
        });
    }
}
class CheckboxSetInVisibleValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            },
        ]
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-setInvisibleValue">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="set-value" onClick={this.handleClick}>Set Value</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({
            value: ['Orange']
        });
    }
}
class CheckboxDisableItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ]
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-disableItems">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-items" onClick={this.handleClick}>Disable Items</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;
        this.setState({ items: items });
    }
}
class InvisibleCheckboxDisableItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ]
        this.state = { items: items, isVisible: false };
    }
    render() {
        return (
            <div class="invisibleCheckbox-disableItems">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-items" onClick={this.handleClick}>Disable Items</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;
        this.setState({ items: items, isVisible: true });
    }
}
class CheckboxEnableItemsMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            }
        ]
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-enableItems">
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-items" onClick={this.handleClick}>Enable Items</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        this.setState({ items: items });
    }
}
class CheckboxShowMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            }
        ]
        this.state = { items: items, isVisible: false };
    }
    render() {
        return (
            <div class="checkbox-show">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="show-checkbox" onClick={this.handleClick}>Show Checkbox</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
}
class CheckboxHideMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            }
        ]
        this.state = { items: items, isVisible: true };
    }
    render() {
        return (
            <div class="checkbox-hide">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="hide-checkbox" onClick={this.handleClick}>Hide Checkbox</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: false });
    }
}
class InvisibleCheckboxHideMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            }
        ]
        this.state = { items: items, isVisible: false };
    }
    render() {
        return (
            <div class="invisibleCheckbox-hide">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="hide-checkbox" onClick={this.handleClick}>Hide Checkbox</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isVisible: false });
    }
}
class CheckboxDisableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            }
        ]
        this.state = { items: items, isDisabled: false };
    }
    render() {
        return (
            <div class="checkbox-disable">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-checkbox" onClick={this.handleClick}>Disable Checkbox</button>
                <button class="enable-checkbox" onClick={this.handleClickEnable}>Enable Checkbox</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isDisabled: true });
    }
    handleClickEnable = () => {
        this.setState({ isDisabled: false });
    }
}
class CheckboxEnableMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            }
        ]
        this.state = { items: items, isDisabled: true };
    }
    render() {
        return (
            <div class="checkbox-enable">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-checkbox" onClick={this.handleClick}>Enable Checkbox</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ isDisabled: false });
    }
}
class CheckboxOncallMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            }
        ]
        this.state = { items: items };
    }
    render() {
        return (
            <div class="checkbox-onCall">
                <CheckBox
                    items={this.state.items}
                    value={this.state.value}
                    onChange={this.handleClick} />
            </div>
        );
    }
    handleClick = (value) => {
        this.setState({ value });
        alert('value: ' + value);
    }
}

export default {
    CheckboxRenderMethod,
    CheckboxWithoutOptionMethod,
    CheckboxOnlyOptionValueMethod,
    CheckboxAddItemsMethod,
    CheckboxRemoveItemsMethod,
    CheckboxGetItemsMethod,
    CheckboxGetItemsIndexMethod,
    CheckboxGetValueMethod,
    CheckboxSetVisibleValueMethod,
    CheckboxSetInVisibleValueMethod,
    CheckboxDisableItemsMethod,
    InvisibleCheckboxDisableItemsMethod,
    CheckboxEnableItemsMethod,
    CheckboxShowMethod,
    CheckboxHideMethod,
    InvisibleCheckboxHideMethod,
    CheckboxDisableMethod,
    CheckboxEnableMethod,
    CheckboxOncallMethod
}