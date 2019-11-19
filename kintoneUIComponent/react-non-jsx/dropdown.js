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
            React.createElement("div", {className: "dropdown-render"}),
                React.createElement(kintoneUIComponent.Dropdown, {
                    items: this.state.items,
                    value: this.state.value,
                    isDisabled: false,
                    isVisible:true,
                    onChange: (value) => this.setState({value})
                })
        );
    }
}