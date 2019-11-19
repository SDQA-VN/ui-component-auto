class IconButtonRenderMethod extends React.Component {
    render() {
        return (
            React.createElement("div", {className: "icon-button"},
                React.createElement(kintoneUIComponent.IconButton, {type: 'insert', size: 'small', color: 'blue', shape: 'circle', isVisible: true, isDisable: false})
            )
        );
    }
}