class NormalButton extends React.Component {
    render() {
        return (
            React.createElement("div", {className: "normalButton"},
                React.createElement(kintoneUIComponent.Button, {text: 'normalButton', type: 'Normal', isDisabled: false, isVisible: true})
            )
        );
    }
}

class SubmitButton extends React.Component {
    render() {
        return (
            React.createElement("div", {className: "submitButton"},
                React.createElement(kintoneUIComponent.Button, {text: "submitButton", type: "submit", isDisabled: false, isVisible: true})
            )
        );
    }
}

// ReactDOM.render(
//     React.createElement(NormalButton), testgrid.getCell(posConfig.Normal_Button.x, 1)
// );

// ReactDOM.render(
//     React.createElement(SubmitButton), testgrid.getCell(posConfig.Submit_Button.x, 1)
// );