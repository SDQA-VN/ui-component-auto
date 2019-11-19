import React, { Component } from 'react';
import {MultipleChoice } from '@kintone/kintone-ui-component';

// Multiple Choice
class MultipleRenderMethod extends React.Component {
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
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = { items: items, value: ['Orange']};
    }
    render() {
        return (
            <div class="multiple-render">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={true}
                    isDisabled={false}
                    onChange={(value) => { this.setState({ value }) }}
                />
            </div>
        );
    }
}
class MultipleWithoutOptionMethod extends React.Component {
    constructor(props) {
        super(props);
        var items = [];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="multiple-withoutOption">
                <MultipleChoice
                    items={this.state.items}
                />
            </div>
        );
    }
}
class MultipleOnlyValueMethod extends React.Component {
    constructor(props) {
        super(props);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            }
        ];
        this.state = { items: items, value: ['Orange'] };
    }
    render() {
        return (
            <div class="multiple-onlyValue">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }}
                />
            </div>
        );
    }
}
class MultipleAddMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div class="multiple-addItems">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items" onClick={this.handleClick}>Add Items</button>
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
class MultipleAddWithoutValueMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div class="multiple-addItems-withoutValue">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items" onClick={this.handleClick}>Add Items</button>
            </div>
        );
    }

    handleClick = () => {
        const item = {
            label: 'Lemon',
            isDisabled: false
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    }
}
class InvisibleMultipleAddMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            items: [],
            isVisible: false
        }
    }

    render() {
        return (
            <div class="invisibleMultiple-addItems">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="add-items" onClick={this.handleClick}>Add Items</button>
            </div>
        );
    }

    handleClick = () => {
        const item = {
            value: 'Lemon',
        };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item],
            isVisible: true
        }))
    }
}
class MultipleRemoveMethod extends React.Component {
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
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items
        }
    }

    render() {
        return (
            <div class="multiple-remove">
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
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
class InvisibleMultipleRemoveMethod extends React.Component {
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
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {
            items: items,
            isVisible: false
        }
    }

    render() {
        return (
            <div class="invisibleMultiple-remove">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="remove-item" onClick={this.handleClick}>Remove Item</button>
            </div>
        );
    }

    handleClick = () => {
        this.setState(prevState => {
            if (prevState.items) {
                return prevState.items.splice(2, 1);
            }
            return prevState;
        });
        this.setState({ isVisible: true })
    }
}
class MutipleGetItemsMethod extends React.Component {
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
            <div class="multiple-getItems">
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }

    handleClick = () => {
        alert(JSON.stringify(this.state.items))
    }
}
class MutipleGetIndexMethod extends React.Component {
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
            }
        ];
        this.state = { items: items };
    }

    render() {
        return (
            <div class="multiple-getItemsIndex">
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }

    handleClick = () => {
        const items = [...this.state.items];
        alert(JSON.stringify(items[1]))
    }
}
class MutipleGetInvisibleIndexMethod extends React.Component {
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
            }
        ];
        this.state = { items: items };
    }

    render() {
        return (
            <div class="multiple-getInvisibleIndex">
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="get-items-invisibleIndex" onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }

    handleClick = () => {
        const items = [...this.state.items];
        alert(JSON.stringify(items[0]))
    }
}
class MutipleSetValueMethod extends React.Component {
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
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="multiple-setValue">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="set-value" onClick={this.handleClick}>Set Value</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState(prevState => ({
            value: ['Orange','Orange']
        })
        )
        console.log(this.state.value);
    }
}
class MutipleGetValueMethod extends React.Component {
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
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = { items: items };
    }
    render() {
        return (
            <div class="multiple-getValue">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="get-value" onClick={this.handleClick}>Get Value</button>
            </div>
        );
    }
    handleClick = () => {
        alert(this.state.value)
    }
}
class MutipleDisableItemsMethod extends React.Component {
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
        this.state = { items: items };
    }

    render() {
        return (
            <div class="multiple-disableItems">
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-items" onClick={this.handleClick}>Disabled Item</button>
            </div>
        );
    }

    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;
        this.setState({ items: items });
    }
}
class MutipleEnableItemsMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = { items: items };
    }

    render() {
        return (
            <div class="multiple-enableItems">
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-items" onClick={this.handleClick}>Enabled Item</button>
            </div>
        );
    }

    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        this.setState({ items: items });
    }
}
class InsvisibleMutipleEnableItemsMethod extends React.Component {
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
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = { items: items, isVisible: false };
    }

    render() {
        return (
            <div class="invisibleMultiple-enableItems">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-items" onClick={this.handleClick}>Enabled Item</button>
            </div>
        );
    }

    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        this.setState({ items: items, isVisible: true });
    }
}
class MutipleShowMethod extends React.Component {
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
        this.state = { items: items, isVisible: false };
    }

    render() {
        return (
            <div class="multiple-show">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="show-multiple" onClick={this.handleClick}>Show Multiple</button>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ isVisible: true });
    }
}
class MutipleHideMethod extends React.Component {
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
        this.state = { items: items, isVisible: true };
    }

    render() {
        return (
            <div class="multiple-hide">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isVisible={this.state.isVisible}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="hide-multiple" onClick={this.handleClick}>Hide Multiple</button>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ isVisible: false });
    }
}
class MutipleEnableMethod extends React.Component {
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
        this.state = { items: items, isDisabled: true };
    }

    render() {
        return (
            <div class="multiple-enable">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="enable-multiple" onClick={this.handleClick}>Enable Multiple</button>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ isDisabled: false });
    }
}
class MutipleDisableMethod extends React.Component {
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
        this.state = { items: items, isDisabled: false };
    }

    render() {
        return (
            <div class="multiple-disable">
                <MultipleChoice
                    items={this.state.items}
                    value={this.state.value}
                    isDisabled={this.state.isDisabled}
                    onChange={(value) => { this.setState({ value }) }} />
                <button class="disable-multiple" onClick={this.handleClick}>Disable Multiple</button>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ isDisabled: true });
    }
}
class MutipleOnCallMethod extends React.Component {
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
        this.state = { items: items };
    }
    render() {
        return (
            <div class="multiple-onCall">
                <MultipleChoice
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
    MultipleRenderMethod,
    MultipleWithoutOptionMethod,
    MultipleOnlyValueMethod,
    MultipleAddMethod,
    MultipleAddWithoutValueMethod,
    InvisibleMultipleAddMethod,
    MultipleRemoveMethod,
    InvisibleMultipleRemoveMethod,
    MutipleGetItemsMethod,
    MutipleGetIndexMethod,
    MutipleSetValueMethod,
    MutipleGetValueMethod,
    MutipleDisableItemsMethod,
    MutipleEnableItemsMethod,
    InsvisibleMutipleEnableItemsMethod,
    MutipleShowMethod,
    MutipleHideMethod,
    MutipleEnableMethod,
    MutipleDisableMethod,
    MutipleOnCallMethod,
    MutipleGetInvisibleIndexMethod
}