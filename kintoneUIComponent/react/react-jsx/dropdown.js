import React, { Component } from 'react';
import {Dropdown} from '@kintone/kintone-ui-component';

class DropdownRender extends React.Component {
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
                isVisible: false
            },
        ];
        this.state = { value: 'Orange' }
        this.state = { items: items };
    }
    render() {
        return (
            <div class="dropdown-render">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={false}
                    isVisible={true}
                    onChange={(value) => { this.setState({ value }) }} />
            </div>
        );
    }
}
class DropdownHoverItem extends React.Component {
    constructor(props) {
        super(props);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="dropdown-hover-item">
                <Dropdown
                    items={this.state.items}
                    isDisabled={false}
                    isVisible={true}
                    onChange={(value) => { this.setState({ value }) }} />
            </div>
        );
    }
}
class DropdownEmptyRender extends React.Component {
    constructor(props) {
        super(props);
        var items = [];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="dropdown-empty">
                <Dropdown
                    items={this.state.items} />
            </div>
        );
    }
}
class DropdownWithoutOptionMethod extends React.Component {
    render() {
        return (
            <div class="dropdown-withoutOption">
                <Dropdown />
            </div>
        );
    }
}
class DropdownDefaultSelectedRender extends React.Component {
    render() {
        var items = [
            {
                label: 'Tiger',
                value: 'tiger',
                isDisabled: false
            },
            {
                label: 'Panther',
                value: 'panther',
                isDisabled: true
            },
            {
                label: 'Snake',
                value: 'snake',
                isDisabled: true
            },
        ];
        this.state = { items: items, value: 'snake' };

        return (
            <div class="dropdown-defaultValue">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
            </div>
        );
    }
}
class DropdownAddValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [],
            value: undefined
        }
    }

    render() {
        return (
            <div class="dropdown-addItems">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items" onClick={this.handleButton} >Add Items</button>
            </div>
        );
    }

    handleButton = () => {
        const item = {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    };
}
class InvisibleDropdownAddValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [],
            value: undefined,
            isVisible: false
        }
    }

    render() {
        return (
            <div class="invisibleDropdown-addItems">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items" onClick={this.handleButton} >Add Items</button>
                <button class="show-dropdown" onClick={this.handleButtonClick} >Show Dropdown</button>
            </div>
        );
    }

    handleButton = () => {
        const item = {
            label: 'Lemon',
            value: 'Lemon',
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    };
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            isVisible: true
        }))
    }
}
class DropdownAddValueInExistListMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [
                {
                    label: 'Tiger',
                    value: 'tiger',
                    isDisabled: true
                },
            ],
            value: undefined
        }
    }

    render() {
        return (
            <div class="dropdown-addItems-existList">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items" onClick={this.handleButton} >Add Items</button>
            </div>
        );
    }

    handleButton = () => {
        const item = {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    };
}
class RemoveItemMethod extends React.Component {
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
                    isVisible: false
                },
            ]
        }
    }

    render() {
        return (
            <div class="dropdown-removeItems">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="remove-items" onClick={this.handleButton} >Remove Items</button>
            </div>
        );
    }

    handleButton = () => {
        this.setState(prevState => {
            if (prevState.items) {
                return prevState.items.splice(0, 1);
            }
            return prevState;
        });
    };
}
class RemoveEmptyItemMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div class="dropdown-removeEmpty">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="remove-items" onClick={this.handleButton} >Remove Items</button>
            </div>
        );
    }

    handleButton = () => {
        this.setState(prevState => {
            if (prevState.items) {
                return prevState.items.splice(0, 1);
            }
            return prevState;
        });
    };
}
class GetItemMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isVisible: false
            },
        ];
        this.state = { value: 'Orange' }
        this.state = { items: items };
    }

    render() {
        return (
            <div class="dropdown-getItems">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }

    handleClick = () => {
        let source = []
        for (let i = 0; i < this.state.items.length; i++) {
            source.push(this.state.items[i].label)
        }
        alert(source);
    }
}
class GetItemInvisibleDropdownMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isVisible: false
            },
        ];
        this.state = { value: 'Orange' }
        this.state = { items: items };
    }

    render() {
        return (
            <div class="invisibleDropdown-getItems">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={false}
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
        alert(source);
    }
}
class GetValueMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana'
        };
    }

    render() {
        return (
            <div class="dropdown-getValue">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-value" onClick={this.handleClick}>Get Value</button>
            </div>
        );
    }
    handleClick = () => {
        alert(this.state.value);
    }
}
class GetValueInvisibleDropdownMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana'
        };
    }

    render() {
        return (
            <div class="invisibleDropdown-getValue">
                <Dropdown
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
class SetValueMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Orange'
        };
    }
    render() {
        return (
            <div class="dropdown-setValue">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="set-value" onClick={this.handleClick}>Set Value</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ value: 'Banana' });
    }
}
class SetValueEmptyListMethod extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [];
        this.state = {
            items: items
        };
    }
    render() {
        return (
            <div class="dropdownEmpty-setValue">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="set-value" onClick={this.handleClick}>Set Value</button>
            </div>
        );
    }
    handleClick = () => {
        var item = {
            label: 'Blank',
            value: 'blank',
            isDisabled: false
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item],
            value: 'blank'
        }))
    }
}
class DisableItemEnableMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: undefined,
        };
    }
    render() {
        return (
            <div class="dropdown-disableItemsEnable">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-item" onClick={this.handleClick}>Disabled Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;
        this.setState({ items: items });
    }
}
class DisableItemDisableMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: undefined,
        };
    }
    render() {
        return (
            <div class="dropdown-disableItemsDisable">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-item" onClick={this.handleClick}>Disabled Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[1].isDisabled = true;
        this.setState({ items: items });
    }
}
class EnableItemDisableMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: undefined,
        };
    }
    render() {
        return (
            <div class="dropdown-enableItemsDisable">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-item" onClick={this.handleClick}>Enabled Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[1].isDisabled = false;
        this.setState({ items: items });
    }
}
class EnableItemEnableMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: undefined,
        };
    }
    render() {
        return (
            <div class="dropdown-enableItemsEnable">
                <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-item" onClick={this.handleClick}>Enabled Item</button>
            </div>
        );
    }
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        this.setState({ items: items });
    }
}
class ShowItemMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana',
            isVisible: false
        };
    }

    render() {
        return (
            <div class="dropdown-show">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(isVisible) => { this.setState({ isVisible }) }} />
                <button class="show-dropdown" onClick={this.handleClick}>Show Dropdown</button>
            </div>
        );
    }
    handleClick = (isVisible) => {
        this.setState({ isVisible: true });
    }
}
class HideItemMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana',
            isVisible: true
        };
    }

    render() {
        return (
            <div class="dropdown-hide">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(isVisible) => { this.setState({ isVisible }) }} />
                <button class="hide-dropdown" onClick={this.handleClick}>Hide Dropdown</button>
            </div>
        );
    }
    handleClick = (isVisible) => {
        this.setState({ isVisible: false });
    }
}
class DisableItemMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana',
            isDisabled: false
        };
    }

    render() {
        return (
            <div class="dropdown-disable">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(isDisabled) => { this.setState({ isDisabled }) }} />
                <button class="disable-dropdown" onClick={this.handleClick}>Disable Dropdown</button>
            </div>
        );
    }
    handleClick = (isDisabled) => {
        this.setState({ isDisabled: true });
    }
}
class EnableItemMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana',
            isDisabled: true
        };
    }

    render() {
        return (
            <div class="dropdown-enable">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(isDisabled) => { this.setState({ isDisabled }) }} />
                <button class="enable-dropdown" onClick={this.handleClick}>Enable Dropdown</button>
            </div>
        );
    }
    handleClick = (isDisabled) => {
        this.setState({ isDisabled: false });
    }
}
class DropdownOnCallMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            value: 'Banana',
            isDisabled: false
        };
    }

    render() {
        return (
            <div class="dropdown-onCall">
                <Dropdown
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={this.handleChange} />
            </div>
        );
    }
    handleChange = (value) => {
        this.setState({ value });
        alert('value: ' + value);
    }
}


export default {
    DropdownRender,
    DropdownHoverItem,
    DropdownEmptyRender,
    DropdownWithoutOptionMethod,
    DropdownDefaultSelectedRender,
    DropdownAddValueMethod,
    InvisibleDropdownAddValueMethod,
    DropdownAddValueInExistListMethod,
    RemoveItemMethod,
    RemoveEmptyItemMethod,
    GetItemMethod,
    GetItemInvisibleDropdownMethod,
    GetValueMethod,
    GetValueInvisibleDropdownMethod,
    SetValueMethod,
    SetValueEmptyListMethod,
    DisableItemEnableMethod,
    DisableItemDisableMethod,
    EnableItemDisableMethod,
    EnableItemEnableMethod,
    ShowItemMethod,
    HideItemMethod,
    DisableItemMethod,
    EnableItemMethod,
    DropdownOnCallMethod,
}