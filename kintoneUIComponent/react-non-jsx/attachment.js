class ConstructorAttachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: []};
    };

    handleFilesAdd = (files) => {
        this.setState({ files });
    };

    handleFileRemove = (files) => {
        this.setState({ files });
    };

    render() {
        return (
            React.createElement("div", {id: "constructor-attachment"},
            React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, errorMessage: "Error message", onFilesAdd : this.handleFilesAdd, onFileRemove: this.handleFileRemove}))
        );
    }
}

class SetFilesAttachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [] };
    };

    handleFilesAdd = (files) => {
        this.setState({ files });
    };

    handleFileRemove = (files) => {
        this.setState({ files });
    };

    handleClick = () => {
        this.setState({ files: [{ name: 'test_1', size: 12345 }] });
    };

    render() {
        return (
            React.createElement("div", {id: "set-files-attachment"},
            React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
            React.createElement("button",{onClick: this.handleClick},'Set Files of Attachment')
            )
        );
    }
}

class GetFilesAttachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [{ name: 'test_1', size: 12345 }] };
    };

    handleFilesAdd = (files) => {
        this.setState({ files });
    };

    handleFileRemove = (files) => {
        this.setState({ files });
    };

    handleClick = () => {
        alert(JSON.stringify(this.state.files));
    };

    render() {
        return (
            React.createElement("div", {id: "get-files-attachment"},
            React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
            React.createElement("button",{onClick: this.handleClick},'Get Files of Attachment')
            )
        );
    }
}

// class SetDropZoneTextAttachment extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { files: [], dropZoneText: "Drop files here" };
//     }

//     handleFilesAdd = files => {
//         this.setState({ files });
//     };

//     handleFileRemove = files => {
//         this.setState({ files });
//     };
//     setDropZoneText = dropZoneText => {
//         this.setState({ dropZoneText });
//     };
//     render() {
//         return (
//             <div id='set-dropzone-text-attachment'>
//                 <Attachment
//                     files={this.state.files}
//                     dropZoneText={this.state.dropZoneText}
//                     onFilesAdd={this.handleFilesAdd}
//                     onFileRemove={this.handleFileRemove}
//                 />
//                 <button onClick={() => this.setDropZoneText("Drop files here")}>Set Dropzone Text of Attachment</button>
//             </div>
//         );
//     }
// }

class SetBrowseButtonTextAttachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [], browseButtonText: "Browse" };
    }

    handleFilesAdd = files => {
        this.setState({ files });
    };

    handleFileRemove = files => {
        this.setState({ files });
    };
    browseButtonText = browseButtonText => {
        this.setState({ browseButtonText });
    };
    render() {
        return (
            React.createElement("div", {id: "set-browse-button-text-attachment"},
            React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, browseButtonText: this.state.browseButtonText, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
            React.createElement("button",{onClick: () => this.browseButtonText("Drop files here")},'Set Browse Button Text of Attachment')
            )
        );
    }
}

class SetFileLimitTextAttachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [], fileLimitText: "" };
    }

    handleFilesAdd = files => {
        this.setState({ files });
    };

    handleFileRemove = files => {
        this.setState({ files });
    };
    setFileLimitText = fileLimitText => {
        this.setState({ fileLimitText });
    };
    render() {
        return (
            React.createElement("div", {id: "set-file-limit-text-attachment"},
            React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, fileLimitText: this.state.fileLimitText, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
            React.createElement("button",{onClick: ()=> this.setFileLimitText("Maximum: 1 GB")},'Set File Limit Text of Attachment')
            )
        );
    }
}

class SetErrorMessageAttachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [], errorMessage: "error message", isErrorVisible: false };
    }

    handleFilesAdd = files => {
        this.setState({ files });
    };

    handleFileRemove = files => {
        this.setState({ files });
    };
    setErrorMessage = errorMessage => {
        this.setState({ errorMessage });
    };

    showError = () => {
        this.setState({ isErrorVisible: true });
    };
    hideError = () => {
        this.setState({ isErrorVisible: false });
    };
    render() {
        return (
            React.createElement("div", {id: "set-error-message-attachment"},
            React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, errorMessage: this.state.errorMessage, isErrorVisible: this.state.isErrorVisible, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
            React.createElement("button",{onClick: ()=> this.setErrorMessage("Error message")},'Set Error Message of Attachment'),
            React.createElement("button",{onClick: this.showError},'Show Error Message of Attachment'),
            React.createElement("button",{onClick: this.hideError},'Hide Error Message of Attachment')
            )
        );
    }
}

class OnCallbackAttachment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {files: []};
    };
  
    handleFilesAdd = (files) => {
      this.setState({files});
      alert(files[0].name)
    };
  
    handleFileRemove = (files) => {
      this.setState({files});
      alert(files)
    };
  
    render() {
      return (
        React.createElement("div", {id: "on-callback-attachment"},
        React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
        )
    );

    }
  }

class ShowHideAttachment extends React.Component {
    constructor(props) {
      super(props);
      this.state = { files: [], errorMessage: "error message",isVisible: true };
    }
  
    handleFilesAdd = files => {
      this.setState({ files });
    };
  
    handleFileRemove = files => {
      this.setState({ files });
    };
    show = () => {
      this.setState({ isVisible: true });
    };
    hide = () => {
        this.setState({ isVisible: false });
      };
    render() {
      return (
        React.createElement("div", {id: "show-hide-attachment"},
        React.createElement(kintoneUIComponent.Attachment,{ files: this.state.files, isVisible: this.state.isVisible, onFilesAdd: this.handleFilesAdd, onFileRemove: this.handleFileRemove}),
        React.createElement("button",{onClick: this.show},'Show Attachment'),
        React.createElement("button",{onClick: this.hide},'Hide Attachment')
        )
      );
    }
  }
