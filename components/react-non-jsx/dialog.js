class DialogFUllOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    onClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            React.createElement("div", {className: "dialog_full_optionEl"},
                React.createElement(
                    kintoneUIComponent.Dialog, 
                    {
                        header: "Dialog header",
                        content: "This is content",
                        footer: "Footer",
                        isVisible: this.state.show,
                        showCloseButton: true,
                        onClose: this.onClose
                    }
                ),
                React.createElement("button", {className: "dialog_full_option_button", onClick: this.handleButtonClick}, "Show dialog full option")
            )  
        );
    }
    handleButtonClick = (event => {
        this.setState(prevState => ({
            show: true
        }))
    })
}