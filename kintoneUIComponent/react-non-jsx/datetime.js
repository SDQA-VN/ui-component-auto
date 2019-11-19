class DateTimeFullOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date("October 13, 2014 11:13:00"),
            type: 'datetime'
        }
    }
    render() {
        return (
            React.createElement("div", {className: "dateTime_full_optionEl"},
                React.createElement(kintoneUIComponent.DateTime, {value: this.state.value,onChange: (value)=>{this.setState({value})}, type: this.state.type, dateFormat: 'dd/MMM/YYYY', isVisible: true, isDisabled: false}))
        );
    }
}