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
                    return React.createElement(
                        kintoneUIComponent.RadioButton,
                        {
                            name: radioName + '-' + rowIndex,
                            items: fruits,
                            value: tableData[rowIndex].fruit,
                            onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'fruit')
                        }
                    ) 
                }
            },
            {
                header: 'Dropdown',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(
                        kintoneUIComponent.Dropdown,
                        {
                            items: colors,
                            value: tableData[rowIndex].color,
                            onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'color')
                        }
                    ) 
                }
            },
            {
                header: 'Button',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Button, {text: 'button', isVisible: true, isDisabled: false}) 
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
                        React.createElement(
                            kintoneUIComponent.Text,
                            {
                                value: tableData[rowIndex].text,
                                onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'text')
                            }
                        )
                    )
                }
            },
            {
                header: 'CheckBox',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(
                        kintoneUIComponent.CheckBox,
                        {
                            value: tableData[rowIndex].selectedItems,
                            onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItems'),
                            items: multifruits
                        }
                    ) 
                }
            },
            {
                header: 'MultipleChoice',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(
                        kintoneUIComponent.MultipleChoice,
                        {
                            value: tableData[rowIndex].selectedItemsFruits,
                            onChange: newValue => onCellChange(newValue, tableData, rowIndex, 'selectedItemsFruits'),
                            items: manyfruits
                        }
                    )
                }
            },
            {
                header: 'Label',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Label, {text: 'label'})                    
                }
            },
            {
                header: 'Alert',
                cell: ({ rowIndex, onCellChange }) => {
                    return React.createElement(kintoneUIComponent.Alert, {text: 'Alert', type: 'error'})
                }
            },

        ];
        return (
            React.createElement('div', {className: 'table-render'},
                React.createElement(
                    kintoneUIComponent.Table, {
                        defaultRowData: defaultRowData,
                        columns: columns,
                        data: this.state.tableData,
                        isVisible: true,
                        onRowAdd: this.handleRowAdd,
                        onRowRemove: this.handleRowRemove,
                        onCellChange: this.handleCellChange
                    }
                )
            )
        );
    }
}