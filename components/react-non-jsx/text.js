class TextRender extends React.Component {
    state = { value: 'Text' }
    render() {
        return (
            React.createElement("div", {className: "textRender"},
                React.createElement(kintoneUIComponent.Text, {value: this.state.value, isVisible: true, isDisabled: false, onChange: (value) => this.setState({value})})
            )
        );
    }
}