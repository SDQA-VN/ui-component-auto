class ConstructorTextArea extends React.Component {
    render() {
        return (
            React.createElement("div", {id: "constructor-textarea"},
                React.createElement(kintoneUIComponent.TextArea, {value: "Constructor TextArea", isVisible: true, isDisabled: false})
            )
        );
    }
}
