class DateTimeFullOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date(),
            type: 'datetime'
        }
    }
    render() {
        return (
            React.createElement("div", {className: "dateTime_full_optionEl"},
                React.createElement(kintoneUIComponent.DateTime, {value: this.state.value,onChange: (value)=>{this.setState({value})}, type: this.state.type, dateFormat: 'MM/dd/YYYY', isVisible: true, isDisabled: false}))
        );
    }
}