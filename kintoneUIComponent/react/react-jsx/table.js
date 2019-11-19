import React, { Component } from 'react';
import { Table, RadioButton, Dropdown, Button, IconButton, Text, CheckBox, MultipleChoice, Label, Alert } from '@kintone/kintone-ui-component';


// Table
class TableRenderMethod extends React.Component {
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
        const { tableData, fruits, colors, multifruits, manyfruits, defaultRowData } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-render';
                    return <RadioButton
                        name={radioName + '-' + rowIndex}
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
            <div class="table-render">
                <Table
                    defaultRowData={defaultRowData}
                    columns={columns}
                    data={this.state.tableData}
                    isVisible={true}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                />
            </div>
        );
    }
}
class TableWorkingMethod extends React.Component {
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
            tableData: [{ eventCell: () => { alert('Component clicked') } }],
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
    }
    render() {
        const { tableData, fruits, colors, multifruits, manyfruits } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-working';
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
                        onClick={() => {
                            if (tableData[rowIndex].eventCell) {
                                tableData[rowIndex].eventCell();
                            }
                        }}
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
            <div class="table-working">
                <Table
                    columns={columns}
                    data={this.state.tableData}
                    isVisible={true}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                />
            </div>
        );
    }
}
class TableGetValueMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitsRadio: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' }
            ],
            colors: [
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' }
            ],
            fruitsCheckbox: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            fruitsMultiplechoice: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            tableData: [
                { fruit: 'banana', color: 'green', text: 'text', selectedCheckbox: ['orange'], selectedMultiple: ['orange'] }
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
    }
    render() {
        const { tableData, fruitsRadio, colors, fruitsCheckbox, fruitsMultiplechoice } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-getValue';
                    return <RadioButton
                        name={radioName}
                        items={fruitsRadio}
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
                        value={tableData[rowIndex].selectedCheckbox}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedCheckbox')}
                        items={fruitsCheckbox}
                    />
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return <MultipleChoice
                        value={tableData[rowIndex].selectedMultiple}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedMultiple')}
                        items={fruitsMultiplechoice}
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
            <div class="table-getValue">
                <Table
                    columns={columns}
                    data={this.state.tableData}
                    isVisible={true}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                />
                <button class="get-value"
                    onClick={() => {
                        alert(JSON.stringify(Object.values(this.state.tableData[0])))
                    }}>get value</button>
                <button class="get-value-text"
                    onClick={() => {
                        alert(JSON.stringify(this.state.tableData[0].text))
                    }}>get value text</button>
                <button class="get-value-radio"
                    onClick={() => {
                        alert(JSON.stringify(this.state.tableData[0].fruit))
                    }}>get value radio</button>
                <button class="get-value-checkbox"
                    onClick={() => {
                        alert(JSON.stringify(this.state.tableData[0].selectedCheckbox))
                    }}>get value checkbox</button>
                <button class="get-value-dropdown"
                    onClick={() => {
                        alert(JSON.stringify(this.state.tableData[0].color))
                    }}>get value dropdown</button>
                <button class="get-value-multipleChoice"
                    onClick={() => {
                        alert(JSON.stringify(this.state.tableData[0].selectedMultiple))
                    }}>get value multipleChoice</button>
            </div>
        );
    }
}
class TableSetValueMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitsRadio: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' }
            ],
            colors: [
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' }
            ],
            fruitsCheckbox: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            fruitsMultiplechoice: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            tableData: [{}],
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
    handleCellChange = ({ data }) => {
        this.setState({ tableData: data })
    }
    buttonSetClick = () => {
        const { tableData } = this.state;
        tableData[0] = { fruit: 'banana', color: 'green', text: 'text', selectedCheckbox: ['banana'], selectedMultiple: ['banana'] }
        tableData[1] = { fruit: 'banana', color: 'green', text: 'text', selectedCheckbox: ['banana'], selectedMultiple: ['banana'] }
        this.setState({ tableData });;
    }
    buttonGetClick = () => {
        alert(JSON.stringify(Object.values(this.state.tableData[0])) + JSON.stringify(Object.values(this.state.tableData[1])))
    }
    render() {
        const { tableData, fruitsRadio, colors, fruitsCheckbox, fruitsMultiplechoice } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-getValue' + rowIndex;
                    return <RadioButton
                        name={radioName}
                        items={fruitsRadio}
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
                        value={tableData[rowIndex].selectedCheckbox}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedCheckbox')}
                        items={fruitsCheckbox}
                    />
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return <MultipleChoice
                        value={tableData[rowIndex].selectedMultiple}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedMultiple')}
                        items={fruitsMultiplechoice}
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
            <div class="table-setValue">
                <Table
                    columns={columns}
                    data={this.state.tableData}
                    isVisible={true}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                />
                <button class="set-value" onClick={this.buttonSetClick}>set value</button>
                <button class="get-value" onClick={this.buttonGetClick}>get value</button>
            </div>
        );
    }
}
class TableHideMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitsRadio: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' }
            ],
            colors: [
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' }
            ],
            fruitsCheckbox: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            fruitsMultiplechoice: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            tableData: [
                { fruit: 'banana', color: 'green', text: 'text', selectedCheckbox: ['orange'], selectedMultiple: ['orange'] }
            ],
            defaultRowData: {},
            isVisible: true
        }
    }
    handleRowAdd = (data) => {
        const table = this.state.table;
        table.value = data.tableValue;
        this.setState({ table: table });
    }
    handleRowRemove = (data) => {
        const table = this.state.table;
        table.value = data.tableValue;
        this.setState({ table: table });
    }
    buttonClick = (isVisible) => {
        this.setState({ isVisible: false })
    }
    render() {
        const { tableData, fruitsRadio, colors, fruitsCheckbox, fruitsMultiplechoice } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-getValue';
                    return <RadioButton
                        name={radioName}
                        items={fruitsRadio}
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
                        value={tableData[rowIndex].selectedCheckbox}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedCheckbox')}
                        items={fruitsCheckbox}
                    />
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return <MultipleChoice
                        value={tableData[rowIndex].selectedMultiple}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedMultiple')}
                        items={fruitsMultiplechoice}
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
            <div class="table-hide">
                <Table
                    columns={columns}
                    data={this.state.tableData}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                    isVisible={this.state.isVisible}
                />
                <button class="hide-table" onClick={this.buttonClick}>hide table</button>
            </div>
        );
    }
}
class TableShowMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitsRadio: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' }
            ],
            colors: [
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' }
            ],
            fruitsCheckbox: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            fruitsMultiplechoice: [
                { label: 'Orange', value: 'orange' },
                { label: 'Banana', value: 'banana' },
                { label: 'Lemon', value: 'lemon' },
            ],
            tableData: [
                { fruit: 'banana', color: 'green', text: 'text', selectedCheckbox: ['orange'], selectedMultiple: ['orange'] }
            ],
            defaultRowData: {},
            isVisible: false
        }
    }
    handleRowAdd = (data) => {
        const table = this.state.table;
        table.value = data.tableValue;
        this.setState({ table: table });
    }
    handleRowRemove = (data) => {
        const table = this.state.table;
        table.value = data.tableValue;
        this.setState({ table: table });
    }
    buttonClick = (isVisible) => {
        this.setState({ isVisible: true })
    }
    render() {
        const { tableData, fruitsRadio, colors, fruitsCheckbox, fruitsMultiplechoice } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-getValue';
                    return <RadioButton
                        name={radioName}
                        items={fruitsRadio}
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
                        value={tableData[rowIndex].selectedCheckbox}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedCheckbox')}
                        items={fruitsCheckbox}
                    />
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return <MultipleChoice
                        value={tableData[rowIndex].selectedMultiple}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedMultiple')}
                        items={fruitsMultiplechoice}
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
            <div class="table-show">
                <Table
                    columns={columns}
                    data={this.state.tableData}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                    isVisible={this.state.isVisible}
                />
                <button class="show-table" onClick={this.buttonClick}>show table</button>
            </div>
        );
    }
}
class TableOnCallCellChangeMethod extends React.Component {
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
        const { tableData, fruits, colors, multifruits, manyfruits, defaultRowData } = this.state;
        const columns = [
            {
                header: 'Radio',
                cell: ({ rowIndex, onCellChange }) => {
                    const radioName = 'radio-table-getValue' + '-' +  rowIndex;
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
                        value={tableData[rowIndex].selectedCheckbox}
                        onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItems')}
                        items={multifruits}
                    />
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return <MultipleChoice
                        value={tableData[rowIndex].selectedMultiple}
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
            <div class="table-cellChange">
                <Table
                    defaultRowData = {defaultRowData}
                    columns={columns}
                    data={this.state.tableData}
                    isVisible={true}
                    onRowAdd={this.handleRowAdd}
                    onRowRemove={this.handleRowRemove}
                    onCellChange={this.handleCellChange}
                    onCellClick={this.handleCellClick}
                />
            </div>
        );
    }
}

export default {
    TableRenderMethod,
    TableWorkingMethod,
    TableGetValueMethod,
    TableSetValueMethod,
    TableHideMethod,
    TableShowMethod,
    TableOnCallCellChangeMethod,
}