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
            React.createElement("div", {className: "radio-render"},
                React.createElement(
                    kintoneUIComponent.RadioButton,
                    {
                        name: "radio-render",
                        items: this.state.items,
                        value: this.state.value,
                        isVisible: true,
                        isDisabled: false,
                        onChange: (value) => this.setState({value})
                    }
                )
            )
        );
    }
}