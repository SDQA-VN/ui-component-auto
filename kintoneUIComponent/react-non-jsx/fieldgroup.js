class ConstructorTable extends React.Component {
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
                { fruit: 'orange', color: 'red', selectedItemsFruits: ['lemon'] }
            ],
            defaultRowData: {fruit: 'orange', color: 'red', selectedItemsFruits: ['lemon']},
        }
    }
    handleRowAdd = ({ data, rowIndex }) => {
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
        const { tableData, fruits, colors, multifruits, manyfruits, defaultRowData} = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-render';
                    return React.createElement(kintoneUIComponent.RadioButton,{ 
                        name: radioName + '-' + rowIndex,
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

class ConstructorComponentFieldGroup extends React.Component {
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
        this.state = { files: [], value: ['Orange'], dropdown_value: 'Orange', text_value: '', items: items, color: '', date: new Date(), toggle: 'expand', name: 'FieldsGroup', }
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
            React.createElement("div", { id: "component-container-fieldgroup" },
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
                // React.createElement(ConstructorTable)
              )  
        );
    }
}

class ConstructorFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Group',toggle: 'collapse'}
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    render() {
        return (
            React.createElement("div", {id: "constructor-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: React.createElement(ConstructorComponentFieldGroup) , toggle: this.state.toggle, onToggle: this.handleToggleClick}))
        )
    }
}

class SetContentFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: React.createElement(kintoneUIComponent.Label,{text:'Name'}),
            toggle: 'expand',
        };
    }
    render() {
        return (
            React.createElement("div", {id: "set-content-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: this.state.content , toggle: this.state.toggle, onToggle: this.handleToggleClick}),
            React.createElement("button",{onClick: this.handleClick},'Set Content FieldGroup')
            )
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
      this.setState({
        content: React.createElement(kintoneUIComponent.Text,{value: '12345'})
      });
    }
}

class GetContentFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: React.createElement(kintoneUIComponent.Label,{text:'Name'}),
            toggle: 'expand',
            flag: false

        };
    }
    render() {
        return (
            React.createElement("div", {id: "get-content-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: React.createElement(ConstructorComponentFieldGroup) , toggle: this.state.toggle, onToggle: this.handleToggleClick}),
            React.createElement("button",{onClick: this.handleClick},'Get Content FieldGroup'),
            this.state.flag ? React.createElement("div",{id:'get-content-check-fieldgroup'},this.state.content) : null    
            )
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
        this.setState({flag: true})
    }
}

class SetNameFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Group',
            content: React.createElement(kintoneUIComponent.Label,{text:'Name'}),
            toggle: 'expand',
        };
    }
    render() {
        return (
            React.createElement("div", {id: "set-name-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: React.createElement(ConstructorComponentFieldGroup) , toggle: this.state.toggle, onToggle: this.handleToggleClick}),
            React.createElement("button",{onClick: this.handleClick},'Set Name FieldGroup')
        )
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
      this.setState({
        name: 'Set Name Success'    
    });
    }
}

class GetNameFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Group',
            content: React.createElement(kintoneUIComponent.Label,{text:'Name'}),
            toggle: 'expand',
        };
    }
    render() {
        return (
            React.createElement("div", {id: "get-name-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: React.createElement(ConstructorComponentFieldGroup) , toggle: this.state.toggle, onToggle: this.handleToggleClick}),
            React.createElement("button",{onClick: this.handleClick},'Get Name FieldGroup')
            )
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
        alert(this.state.name)
    }
}

class SetToggleFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Group',
            content: React.createElement(kintoneUIComponent.Label,{text:'Name'}),
            toggle: 'expand',
        };
    }
    render() {
        return (
            React.createElement("div", {id: "set-toggle-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: React.createElement(ConstructorComponentFieldGroup) , toggle: this.state.toggle, onToggle: this.handleToggleClick}),
            React.createElement("button",{onClick: this.handleClick},'Set Toggle FieldGroup')
            )
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
        this.setState({
            toggle: 'collapse'
        })
    }
}

class GetToggleFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Group',
            content:  React.createElement(kintoneUIComponent.Label,{text:'Name'}),
            toggle: 'expand',
        };
    }
    render() {
        return (
            React.createElement("div", {id: "get-toggle-fieldgroup"},
            React.createElement(kintoneUIComponent.FieldGroup,{ name: this.state.name, content: React.createElement(ConstructorComponentFieldGroup) , toggle: this.state.toggle, onToggle: this.handleToggleClick}),
            React.createElement("button",{onClick: this.handleClick},'Get Toggle FieldGroup')
            )
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
        alert(this.state.toggle);
    }
}