class SpinnerRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false }
    }
    render() {
        return (
            React.createElement("div", {className: "spinner-render"},
                React.createElement(kintoneUIComponent.Spinner, {isVisible: this.state.isVisible}),
                React.createElement("button", {className: "show-spinner", onClick: this.buttonClick}, "Show spinner"),
                React.createElement("button", {style: {zIndex: 10000, position: "relative"}, className: "hide-spinner", onClick: this.handleClick}, "Hide spinner")
            )
        );
    };
    buttonClick = (event) => {
        this.setState(prevState => ({
            isVisible: true
        }))
    }
    handleClick = (event) => {
        this.setState(prevState => ({
            isVisible: false
        }))
    }
}