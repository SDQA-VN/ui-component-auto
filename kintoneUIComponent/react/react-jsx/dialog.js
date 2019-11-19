import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Dialog, Table, Text, Alert, Button, Label, Dropdown, RadioButton, MultipleChoice, CheckBox, IconButton} from '@kintone/kintone-ui-component';

//Render a table
class TableRender extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tableData: [
          {text: 'this is a text field'}
        ],
        // default row data on row add
        defaultRowData: {text: 'default text field value'}
      }
    }
  
    handleRowAdd = ({data}) => {
      this.setState({ tableData: data })
      console.log('data: ', data);
    }
  
    handleRowRemove = ({data}) => {
      this.setState({ tableData: data })
      console.log('data: ', data);
    }
  
    handleCellChange = ({data}) => {
      this.setState({ tableData: data })
      console.log('data: ', data);
    }
  
    render() {
      const {tableData, defaultRowData} = this.state;
      const columns = [
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
      ];
      return (
        <Table
          columns={columns}
          data={this.state.tableData}
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
        />
      );
    }
}

//Normal button
class NormalButton extends React.Component {
    render() {
        return (
            <Button
                text='normalButton'
                type='Normal'
                isDisabled={false}
                isVisible={true} />
        );
    }
}

//Submit button
class SubmitButton extends React.Component {
    render() {
        return (
            <Button
                text='submitButton'
                type='submit'
                isDisabled={false}
                isVisible={true} />
        );
    }
}

// Textbox
class TextRender extends React.Component {
    state = { value: 'Text' }
    render() {
        return (
            <Text
                value={this.state.value}
                isVisible={true}
                isDisabled={false}
                onChange={(value) => {this.setState({value})}}
            />
        );
    }
}

//render a Alert
class AlertMethod extends React.Component {
    render() {
        return (
            <Alert
                text='Network error'
                type='error'
                isDisabled={false}
                isVisible={true}
            />
        );
    }
}

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
            <Dropdown
                items={this.state.items}
                value={this.state.value}
                isDisabled={false}
                isVisible={true}
                onChange={(value) => { this.setState({ value }) }} />
        );
    }
}

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
            <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
        );
    }
}

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
            <RadioButton
                name='radio-render'
                items={this.state.items}
                value={this.state.value}
                isVisible={true}
                isDisabled={false}
                onChange={(value) => { this.setState({ value }) }} />
        );
    }
}

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
            <MultipleChoice
                items={this.state.items}
                value={this.state.value}
                isVisible={true}
                isDisabled={false}
                onChange={(value) => { this.setState({ value }) }}
            />
        );
    }
}

// Icon Button
class IconButtonRenderMethod extends React.Component {
    render() {
        return (
            <IconButton
                type='insert'
                size='small'
                color='blue'
                shape='circle'
                isVisible={true}
                isDisabled={false}
            />
        );
    }
}

class LabelRender extends React.Component {
    render() {
        return (
            <Label
                text='Label'
                isRequired={true}
                isDisabled={false}
                isVisible={true} />
        );
    }
}

//Dialog
class DialogFUllOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_full_optionEl">
                <Dialog
                    header="Dialog header"
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_full_option_button" onClick={this.handleButtonClick}>Show dialog full option</button>
            </div>
        );
    }
    handleButtonClick = (event => {
        this.setState(prevState => ({
            show: true
        }))
    })
}
class DialogSetHeaderExistingHeaderMethod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: "Dialog exisitng header",
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_setHeader_existing_headerEl">
                <Dialog
                    header={this.state.header}
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_setHeader_existing_header_button"
                    onClick={this.handleButtonClick}>Set header for dialog which contains existing header</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            header: "Set header for dialog with existing header",
            show: true
        }))
    }
}
class DialogSetHeaderWithComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: "Dialog set Header with components",
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_setHeader_with_componentsEl">
                <Dialog
                    header={this.state.header}
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_setHeader_with_components_button"
                    onClick={this.handleButtonClick}>Set header for dialog with components</button>
            </div>
        );
    }
    renderComponents = () => {
        return (
            <div class="dialog_set_header_with_components">
                <NormalButton/>
                <SubmitButton/>
                <TextRender/>
                <LabelRender/>
                <AlertMethod/>
                <DropdownRender/>
                <RadioRender/>
                <MultipleRenderMethod/>
                <CheckboxRenderMethod/>
                <IconButtonRenderMethod/>
                <TableRender/>
            </div>
        ) 
    }
    handleButtonClick = (event) => {
        let components = this.renderComponents()
        this.setState(prevState => ({
            header: components,
            show: true
        }))
    }
}
class DialogGetHeaderString extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: "Value of header dialog with string",
            show: false
        }
    }
    render() {
        return (
            <div class="dialog_get_header_stringEl">
                <Dialog
                    header={this.state.header}
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                />
                <button class="dialog_get_header_string_button"
                    onClick={this.handleButtonClick}>Get dialog Header with string</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.header)
    }
}
class DialogGetHeaderReactElements extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: this.renderComponents(),
            show: false,
            showComponent: false
        }
    }
    renderComponents = () => {
        return (
            <div class="dialog_get_header_with_components">
                <NormalButton/>
                <SubmitButton/>
                <TextRender/>
                <LabelRender/>
                <AlertMethod/>
                <DropdownRender/>
                <RadioRender/>
                <MultipleRenderMethod/>
                <CheckboxRenderMethod/>
                <IconButtonRenderMethod/>
                <TableRender/>
            </div>
        ) 
    }
    render() {
        return (
            <div class="dialog_get_header_react_elementsEl">
                <Dialog
                    header={this.state.header}
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                />
                <button class="dialog_get_header_react_elements_button"
                    onClick={this.handleButtonClick}>Get dialog Header with react elements</button>
                {this.state.showComponent? this.state.header : null}    
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            showComponent: true
        }))
    }
}
class DialogSetContentExistingContentMethod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "Dialog exisitng content",
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_setContent_existing_contentEl">
                <Dialog
                    header="Dialog header"
                    content={this.state.content}
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_setContent_existing_content_button"
                    onClick={this.handleButtonClick}>Set Content for dialog which contains existing content</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            content: "Set content for dialog with existing content",
            show: true
        }))
    }
}
class DialogSetContentWithComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "Dialog set Content with components",
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_setContent_with_componentsEl">
                <Dialog
                    header="Dialog header"
                    content={this.state.content}
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_setContent_with_components_button"
                    onClick={this.handleButtonClick}>Set Content for dialog with components</button>
            </div>
        );
    }
    renderComponents = () => {
        return (
            <div class="dialog_set_content_with_components">
                <NormalButton/>
                <SubmitButton/>
                <TextRender/>
                <LabelRender/>
                <AlertMethod/>
                <DropdownRender/>
                <RadioRender/>
                <MultipleRenderMethod/>
                <CheckboxRenderMethod/>
                <IconButtonRenderMethod/>
                <TableRender/>
            </div>
        ) 
    }
    handleButtonClick = (event) => {
        let components = this.renderComponents()
        this.setState(prevState => ({
            content: components,
            show: true
        }))
    }
}
class DialogGetContentString extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "Dialog content with string",
            show: false
        }
    }
    render() {
        return (
            <div class="dialog_get_content_stringEl">
                <Dialog
                    header="Dialog header"
                    content={this.state.content}
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                />
                <button class="dialog_get_content_string_button"
                    onClick={this.handleButtonClick}>Get dialog Content with string</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.content)
    }
}
class DialogGetContentReactElements extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.renderComponents(),
            show: false,
            showComponent: false
        }
    }
    renderComponents = () => {
        return (
            <div class="dialog_get_content_with_components">
                <NormalButton/>
                <SubmitButton/>
                <TextRender/>
                <LabelRender/>
                <AlertMethod/>
                <DropdownRender/>
                <RadioRender/>
                <MultipleRenderMethod/>
                <CheckboxRenderMethod/>
                <IconButtonRenderMethod/>
                <TableRender/>
            </div>
        ) 
    }
    render() {
        return (
            <div class="dialog_get_content_react_elementsEl">
                <Dialog
                    header="Dialog header"
                    content={this.state.content}
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                />
                <button class="dialog_get_content_react_elements_button"
                    onClick={this.handleButtonClick}>Get dialog Content with react elements</button>
                {this.state.showComponent? this.state.content : null}    
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            showComponent: true
        }))
    }
}
class DialogSetFooterExistingFooterMethod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footer: "Dialog exisitng footer",
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_setFooter_existing_footerEl">
                <Dialog
                    header="Dialog header"
                    content="this is content"
                    footer={this.state.footer}
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_setFooter_existing_footer_button"
                    onClick={this.handleButtonClick}>Set Footer for dialog which contains existing footer</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            footer: "Set footer for dialog with existing footer",
            show: true
        }))
    }
}
class DialogSetFooterWithComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footer: "Dialog set Footer with components",
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_setFooter_with_componentsEl">
                <Dialog
                    header="Dialog header"
                    content="This is content"
                    footer={this.state.footer}
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="dialog_setFooter_with_components_button"
                    onClick={this.handleButtonClick}>Set Footer for dialog with components</button>
            </div>
        );
    }
    renderComponents = () => {
        return (
            <div class="dialog_set_footer_with_components">
                <NormalButton/>
                <SubmitButton/>
                <TextRender/>
                <LabelRender/>
                <AlertMethod/>
                <DropdownRender/>
                <RadioRender/>
                <MultipleRenderMethod/>
                <CheckboxRenderMethod/>
                <IconButtonRenderMethod/>
                <TableRender/>
            </div>
        ) 
    }
    handleButtonClick = (event) => {
        let components = this.renderComponents()
        this.setState(prevState => ({
            footer: components,
            show: true
        }))
    }
}
class DialogGetFooterString extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footer: "Dialog footer with string",
            show: false
        }
    }
    render() {
        return (
            <div class="dialog_get_footer_stringEl">
                <Dialog
                    header="Dialog header"
                    content="This is content"
                    footer={this.state.footer}
                    isVisible={this.state.show}
                    showCloseButton={true}
                />
                <button class="dialog_get_footer_string_button"
                    onClick={this.handleButtonClick}>Get dialog Footer with string</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.footer)
    }
}
class DialogGetFooterReactElements extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footer: this.renderComponents(),
            show: false,
            showComponent: false
        }
    }
    renderComponents = () => {
        return (
            <div class="dialog_get_footer_with_components">
                <NormalButton/>
                <SubmitButton/>
                <TextRender/>
                <LabelRender/>
                <AlertMethod/>
                <DropdownRender/>
                <RadioRender/>
                <MultipleRenderMethod/>
                <CheckboxRenderMethod/>
                <IconButtonRenderMethod/>
                <TableRender/>
            </div>
        ) 
    }
    render() {
        return (
            <div class="dialog_get_footer_react_elementsEl">
                <Dialog
                    header="Dialog header"
                    content="This is content"
                    footer={this.state.footer}
                    isVisible={this.state.show}
                    showCloseButton={true}
                />
                <button class="dialog_get_footer_react_elements_button"
                    onClick={this.handleButtonClick}>Get dialog Footer with react elements</button>
                {this.state.showComponent? this.state.footer : null}    
            </div>
        );
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            showComponent: true
        }))
    }
}
class DialogShowInvisibleDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_invisibleEl">
                <Dialog
                    header="Dialog header"
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={true}
                    onClose={this.onClose}
                />
                <button class="show_dialog_invisible_button" onClick={this.handleButtonClick}>Show invisible dialog</button>
            </div>
        );
    }
    handleButtonClick = (event => {
        this.setState(prevState => ({
            show: true
        }))
    })
}
class DialogHidevisibleDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            render: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    renderDialog() {
        return (
            <Dialog
                header="Dialog header"
                content="This is content"
                footer="Footer"
                isVisible={this.state.show}
                showCloseButton={true}
                onClose={this.onClose}
            />
        )
    }
    render() {
        return (
            <div class="dialog_visibleEl">
                {this.state.render? this.renderDialog(): null}
                <button class="render_dialog_visible_button" onClick={this.handleRenderDialogButtonClick}>Render visible dialog</button>
                <button class="hide_dialog_visible_button" style={{ zIndex: 10000, position: "relative" }} onClick={this.handleHideDialogButtonClick}>hide_dialog_visible_button</button>
            </div>
        );
    }
    handleRenderDialogButtonClick = (event => {
        this.setState(prevState => ({
            render: true
        }))
    })
    handleHideDialogButtonClick = (event => {
        this.setState(prevState => ({
            show: false
        }))
    })
}
class DialogShowCloseButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            closeButton: true
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="dialog_show_closeButtonEl">
                <Dialog
                    header="Dialog which contain close button"
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={this.state.closeButton}
                    onClose={this.onClose}
                />
                <button class="dialog_show_closeButton_button" onClick={this.handleButtonClick}>Show dialog which contains Close button</button>
            </div>
        );
    }
    handleButtonClick = (event => {
        this.setState(prevState => ({
            show: true
        }))
    })
}
class DialogHideCloseButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            closeButton: false
        }
    }
    render() {
        return (
            <div class="dialog_hide_closeButtonEl">
                <Dialog
                    header="Dialog header"
                    content="This is content"
                    footer="Footer"
                    isVisible={this.state.show}
                    showCloseButton={this.state.closeButton}
                />
                <button class="dialog_hide_closeButton_button" onClick={this.handleButtonClick}>Show dialog which hides Close button</button>
                <button class="close_dialog_without_closeButton_button" style={{ zIndex: 10000, position: "relative" }} onClick={this.handleCloseDialogButtonClick}>Close dialog</button>
            </div>
        );
    }
    handleButtonClick = (event => {
        this.setState(prevState => ({
            show: true
        }))
    })
    handleCloseDialogButtonClick = (event => {
        this.setState(prevState => ({
            show: false
        }))
    })
}

export default {
    DialogFUllOption,
    DialogSetHeaderExistingHeaderMethod,
    DialogSetHeaderWithComponents,
    DialogGetHeaderString,
    DialogGetHeaderReactElements,
    DialogSetContentExistingContentMethod,
    DialogSetContentWithComponents,
    DialogGetContentString,
    DialogGetContentReactElements,
    DialogSetFooterExistingFooterMethod,
    DialogSetFooterWithComponents,
    DialogGetFooterString,
    DialogGetFooterReactElements,
    DialogShowInvisibleDialog,
    DialogHidevisibleDialog,
    DialogShowCloseButton,
    DialogHideCloseButton
}