class LabelRender extends React.Component {
    render() {
        return (
            React.createElement("div", {className: "label-render"},
                React.createElement(kintoneUIComponent.Label, {text: 'Label', isRequired: true, isDisabled: false, isVisible: true})
            )
        );
    }
}