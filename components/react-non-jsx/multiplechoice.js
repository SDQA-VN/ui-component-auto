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
            React.createElement("div", {className: "multiple-render"},
                React.createElement(
                    kintoneUIComponent.MultipleChoice, 
                    {
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