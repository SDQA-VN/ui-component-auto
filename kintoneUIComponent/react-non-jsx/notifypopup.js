class NotifySuccessRenderMethod extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = { isVisible: false };

    }
    onClose = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            React.createElement("div", {className: "notifySuccess-render"},
                React.createElement(kintoneUIComponent.NotifyPopup, {text: "Submit successfully", type: "success", isVisible: this.state.isVisible, onClose: this.onClose}),
                React.createElement("button", {className: "notify-show", onClick: this.handleClick}, "Notify show")
            )
        );
    }
    handleClick = () => {
        this.setState({ isVisible: true });
    }
}