class ConstructorTextArea extends React.Component {
    state = { value: 'Text' }
    render() {
        return (
            React.createElement("div", {id: "constructor-textarea"},
                React.createElement(kintoneUIComponent.TextArea, {value: this.state.value, isVisible: true, isDisabled: false, onChange: (value) => this.setState({value})})
            )
        );
    }
}
