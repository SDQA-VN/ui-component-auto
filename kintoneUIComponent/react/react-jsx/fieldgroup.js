import React, { Component } from 'react';
import { Alert, Attachment, Button, CheckBox, RadioButton, Label, Dropdown, MultipleChoice, ColorPicker, DateTime, Text, TextArea, IconButton, Table, FieldGroup } from '@kintone/kintone-ui-component';

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
                    return <RadioButton
                        name={radioName}
                        items={fruits}
                        value={tableData[rowIndex].fruit}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'fruit')}
                    />
                }
            },
            {
                header: 'Dropdown',
                cell: ({ rowIndex, onCellChange }) => {
                    return <Dropdown
                        items={colors}
                        value={tableData[rowIndex].color}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'color')}
                    />
                }
            },
            {
                header: 'Button',
                cell: ({ rowIndex, onCellChange }) => {
                    return <Button
                        text="button"
                        isVisible={true}
                        isDisabled={false}
                    />
                }
            },
            {
                header: 'Icon',
                cell: ({ rowIndex, onCellChange }) => {
                    return <IconButton />
                }
            },
            {
                header: 'Text',
                cell: ({ rowIndex, onCellChange }) => {
                    return (
                        <Text
                            value={tableData[rowIndex].text}
                            onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
                        />
                    )
                }
            },
            {
                header: 'CheckBox',
                cell: ({ rowIndex, onCellChange }) => {
                    return <CheckBox
                        value={tableData[rowIndex].selectedItems}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItems')}
                        items={multifruits}
                    />
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return <MultipleChoice
                        value={tableData[rowIndex].selectedItemsFruits}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItemsFruits')}
                        items={manyfruits}
                    />
                }
            },
            {
                header: 'Label',
                cell: ({ rowIndex, onCellChange }) => {
                    return <Label text='label' />
                }
            },
            {
                header: 'Alert',
                cell: ({ rowIndex, onCellChange }) => {
                    return <Alert text='Alert' type='error' />
                }
            },

        ];
        return (
                <Table
                    columns={columns}
                    data={this.state.tableData}
                    isVisible={true}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                />
        );
    }
}

class ConstructorComponent extends React.Component {
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
        this.state = { files: [], value: ['Orange'], dropdown_value: 'Orange', text_value:'', items: items, color:'', date: new Date(), toggle: 'expand', name: 'Group',}
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
            <div id='component-container-fieldgroup'>
                <Alert text='successAlert' type='success'/>
                <Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />
                <Button text='Submit' type='submit'/>
                <Button text='Normal' type='normal'/>
                <ColorPicker color={this.state.color} />
                <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({value})}} />
                <DateTime value={this.state.date} type='datetime' locale='en'/>
                <Dropdown items={this.state.items} value={this.state.dropdown_value} onChange={(dropdown_value) => {this.setState({dropdown_value})}} />
                <FieldGroup name={this.state.name} toggle={this.state.toggle} onToggle={this.handleToggleClick}/>
                <IconButton type='insert'/>
                <Label text='label'/>
                <MultipleChoice items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({value})}} />
                <RadioButton name='radio' items={this.state.items} value={this.state.dropdown_value} onChange={(dropdown_value) => {this.setState({dropdown_value})}} />
                <Text value={this.state.text_value} onChange={(text_value) => {this.setState({text_value})}} />
                <TextArea value={this.state.text_value} onChange={(text_value) => {this.setState({text_value})}} />
                <ConstructorTable/>
            </div>
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
            <div id="constructor-fieldgroup">
                <FieldGroup
                  name = {this.state.name}
                  toggle = {this.state.toggle}
                  onToggle = {this.handleToggleClick}>
                  <ConstructorComponent/>
                </FieldGroup>
            </div>
        );
    }
}

class SetContentFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content:  <Label text='Name' isRequired={true}/>,
            toggle: 'expand',
        };
    }
    render() {
        return (
            <div id='set-content-fieldgroup'>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this.handleToggleClick}
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Set Content FieldGroup</button>
            </div>
        );
    }

    handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
      this.setState({
        content: <Text value='12345' isRequired={true} />
      });
    }
}

class GetContentFieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content:  <Label text='Name'/>,
            toggle: 'expand',
            flag: false

        };
    }
    render() {
        return (
            <div id='get-content-fieldgroup'>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this.handleToggleClick}
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Get Content FieldGroup</button>
                {this.state.flag ? <div id='get-content-check-fieldgroup'> {this.state.content} </div>: null
                }
            </div>
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
            content:  <Label text='Name' isRequired={true}/>,
            toggle: 'expand',
        };
    }
    render() {
        return (
            <div id='set-name-fieldgroup'>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this.handleToggleClick}
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Set Name FieldGroup</button>
            </div>
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
            content:  <Label text='Name' isRequired={true}/>,
            toggle: 'expand',
        };
    }
    render() {
        return (
            <div id='get-name-fieldgroup'>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this.handleToggleClick}
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Get Name FieldGroup</button>
            </div>
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
            content:  <Label text='Name' isRequired={true}/>,
            toggle: 'expand',
        };
    }
    render() {
        return (
            <div id='set-toggle-fieldgroup'>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this.handleToggleClick}
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Set Toggle FieldGroup</button>
            </div>
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
            content:  <Label text='Name' isRequired={true}/>,
            toggle: 'expand',
        };
    }
    render() {
        return (
            <div id='get-toggle-fieldgroup'>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this.handleToggleClick}
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Get Toggle FieldGroup</button>
            </div>
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

export default {
    ConstructorFieldGroup,
    SetContentFieldGroup,
    GetContentFieldGroup,
    SetNameFieldGroup,
    GetNameFieldGroup,
    SetToggleFieldGroup,
    GetToggleFieldGroup
}