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
            React.createElement("div", {className: "checkbox-render"},
                React.createElement(kintoneUIComponent.CheckBox, {items: this.state.items, value: this.state.value, onChange: (value) => this.setState({value})})
            )
        );
    }
}