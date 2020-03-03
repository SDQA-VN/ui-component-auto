class AlertErrorMethod extends React.Component {
    render() {
        return (
            React.createElement("div", {className: "alert-error"},
                React.createElement(kintoneUIComponent.Alert, {text: 'Network error', type: 'success', isDisabled: false, isVisible: true})
            )
        );
    }
}
