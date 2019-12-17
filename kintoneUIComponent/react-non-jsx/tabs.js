class ConstructorTableTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' }
            ],
            colors: [
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' }
            ],
            multifruits: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            manyfruits: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            tableData: [
                { fruit: 'orange' }
            ],
            defaultRowData: {},
        }
    }
    handleRowAdd = ({ data, rowIndex }) => {
        data[rowIndex] = { ...this.state.defaultRowData }
        this.setState({ tableData: data })
        console.log('data: ', data);
    }
    handleRowRemove = ({ data }) => {
        this.setState({ tableData: data })
        console.log('data: ', data);
    }

    handleCellChange = ({ data, rowIndex, fieldName }) => {
        this.setState({ tableData: data })
        alert('data select: ' + JSON.stringify(data[rowIndex][fieldName]));
    }
    render() {
        const { tableData, fruits, colors, multifruits, manyfruits } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-render';
                    return React.createElement(kintoneUIComponent.RadioButton,{ 
                        name: radioName,
                        items: fruits,
                        value: tableData[rowIndex].fruit,
                        onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'fruit')})
                }
            },
            {
                header: 'Dropdown',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Dropdown,{
                        items: colors,
                        value: tableData[rowIndex].color,
                        onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'color')
                    }) 
                }
            },
            {
                header: 'Button',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Button,{  text:"button",isVisible:true, isDisabled:false})
                }
            },
            {
                header: 'Icon',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.IconButton)
                }
            },
            {
                header: 'Text',
                cell: ({ rowIndex, onCellChange }) => {
                    return (
                        React.createElement(kintoneUIComponent.Text,{  
                            value:tableData[rowIndex].text,
                            onChange:newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
                        )
                    )
                }
            },
            {
                header: 'CheckBox',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.CheckBox,{
                        value: tableData[rowIndex].selectedItems,
                        onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItems'),
                        items: multifruits
                    })
                    }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.MultipleChoice,{
                        value: tableData[rowIndex].selectedItemsFruits,
                        onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItemsFruits'),
                        items: manyfruits
                    })
                }
            },
            {
                header: 'Label',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Label,{text:'label'})
                }
            },
            {
                header: 'Alert',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Alert,{text: 'Alert',type: 'error'})
                }
            },

        ];
        return (
                React.createElement(kintoneUIComponent.Table,{   
                    columns:columns,
                    data: this.state.tableData,
                    isVisible:true,
                    onRowAdd: this.handleRowAdd,
                    onRowRemove: this.handleRowRemove,
                    onCellChange: this.handleCellChange,
                    onCellClick: this.handleCellClick})      
        );
    }
}

class ConstructorComponentTabs extends React.Component {
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
        this.state = { files: [], value: ['Orange'], dropdown_value: 'Orange', text_value: '', items: items, color: '', date: new Date(), toggle: 'expand', name: 'Group', }
    }

    handleFilesAdd = (files) => {
        this.setState({ files });
    };

    handleFileRemove = (files) => {
        this.setState({ files });
    };

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }

    render() {
        return (
            React.createElement("div", { id: "component-container" },
                React.createElement(kintoneUIComponent.Alert, { text: 'successAlert', type: 'success' }),
                React.createElement(kintoneUIComponent.Attachment, { files:this.state.files, onFilesAdd: this.handleFilesAdd, onFileRemove:this.handleFileRemove}),
                React.createElement(kintoneUIComponent.Button, { text: 'Submit', type: 'submit' }),
                React.createElement(kintoneUIComponent.Button, { text: 'Normal', type: 'normal' }),
                React.createElement(kintoneUIComponent.ColorPicker, { color: this.state.color }),
                React.createElement(kintoneUIComponent.DateTime, { value:this.state.date, type:'datetime', locale:'en' }),
                React.createElement(kintoneUIComponent.Dropdown, {items:this.state.items, value:this.state.dropdown_value, onChange:(dropdown_value) => {this.setState({dropdown_value})}}),
                React.createElement(kintoneUIComponent.FieldGroup, { name:this.state.name, toggle:this.state.toggle, onToggle:this.handleToggleClick}),
                React.createElement(kintoneUIComponent.IconButton, { type: 'insert' }),
                React.createElement(kintoneUIComponent.Label, { text: 'label' }),
                React.createElement(kintoneUIComponent.MultipleChoice, {items:this.state.items, value:this.state.value, onChange:(value) => { this.setState({value})}}),
                React.createElement(kintoneUIComponent.RadioButton, {name:'radio', items:this.state.items, value:this.state.dropdown_value, onChange:(dropdown_value) => {this.setState({dropdown_value})}}),
                React.createElement(kintoneUIComponent.Text, {value:this.state.text_value, onChange:(text_value) => {this.setState({text_value})}}),
                React.createElement(kintoneUIComponent.TextArea, {value:this.state.text_value, onChange:(text_value) => {this.setState({text_value})}}),
                React.createElement(ConstructorTableTabs)
              )  
        );
    }
}

class ConstructorTabs extends React.Component {
    constructor(props) {
        super(props);
        var items = [
            {
                tabName: "Tab1",
                tabContent: React.createElement(ConstructorComponentTabs)
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2"
            },
            {
                tabName: "Tab3",
                tabContent: "<script>alert('123');</script>"
            },
            {
                tabName: "Tab4",
                isDisabled: true
            }
        ]
        this.state = { items: items, value: 0 }
    }

    render() {
        return (
            React.createElement("div", {id: "constructor-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }})
            )
        );
    }
}

class AddItemTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1'
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2"
            }
        ];
        this.state = { items: items, value: 0};
    }

    handleClick = () => {
        const item = { tabName: "Tab3", tabContent: "This is Tab3"};
        const item1 = { tabName: "Tab4", tabContent:  React.createElement(kintoneUIComponent.Alert,{text:'successAlert' ,type:'success'}) };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item,item1]) : [item]
        }))
    }

    render() {
        return (
            React.createElement("div", {id: "add-item-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }}),
            React.createElement("button",{onClick: this.handleClick},'Add Item Tabs')
            )
        );
    }
}

class RemoveItemTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1'
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2"
            },
            {
                tabName: "Tab3",
                tabContent: "This is Tab3"
            }
        ];
        this.state = { items: items, value: 0};
    }

    handleClick = () => {
        this.setState(prevState => {
            if (prevState.items) {
                return prevState.items.splice(0, 1);
            }
            return prevState;
        });
    }

    render() {
        return (
            React.createElement("div", {id: "remove-item-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }}),
            React.createElement("button",{onClick: this.handleClick},'Remove Item Tabs')
            )
        );
    }
}

class GetItemTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1',
                isDisabled: false
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2",
                isDisabled: false
            }
        ];
        this.state = { items: items, value: 0 };
    }

    handleClick = () => {
        alert(JSON.stringify(this.state.items));
    }

    render() {
        return (
            React.createElement("div", { id: "get-item-tabs" },
                React.createElement(kintoneUIComponent.Tabs, { items: this.state.items, value: this.state.value, onClickTabItem: (value) => { this.setState({ value }) } }),
                React.createElement("button", { onClick: this.handleClick }, 'Get Item Tabs')
            )
        );
    }
}

class GetValueTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1'
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2"
            },
            {
                tabName: "Tab3",
                tabContent: "This is Tab3"
            }
        ];
        this.state = { items: items, value: 0};
    }

    handleClick = () => {
        alert(this.state.value)
    }

    render() {
        return (
            React.createElement("div", {id: "get-value-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }}),
            React.createElement("button",{onClick: this.handleClick},'Get Value Tabs')
            )
        );
    }
}

class SetValueTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1'
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2"
            },
            {
                tabName: "Tab3",
                tabContent: "This is Tab3"
            }
        ];
        this.state = { items: items, value: 0};
    }

    handleClick = () => {
        this.setState({ value:1});
    }

    render() {
        return (
            React.createElement("div", {id: "set-value-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }}),
            React.createElement("button",{onClick: this.handleClick},'Set Value Tabs')
            )
        );
    }
}

class DisableItemTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: "This is Tab1",
                isDisabled: false
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2",
                isDisabled: false
            }
        ];
        this.state = { items: items, value: 0,value1:''};
    }

    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        items[1].isDisabled = true;
        this.setState({ items: items });
    }

    render() {
        return (
            React.createElement("div", {id: "disable-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }}),
            React.createElement("button",{onClick: this.handleClick},'Disable Tabs')
            )
        );
    }
}

class EnableItemTabs extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1',
                isDisabled: false
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2",
                isDisabled: true
            }
        ];
        this.state = { items: items, value: 0};
    }

    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        items[1].isDisabled = false;
        this.setState({ items: items });
    }

    render() {
        return (
            React.createElement("div", {id: "enable-tabs"},
            React.createElement(kintoneUIComponent.Tabs,{ items:this.state.items, value:this.state.value, onClickTabItem:(value) => { this.setState({ value }) }}),
            React.createElement("button",{onClick: this.handleClick},'Enable Tabs')
            )
        );
    }
}