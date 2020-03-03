import { Attachment } from '@kintone/kintone-ui-component';
import React from 'react';

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
            <div id='constructor-attachment'>
            <Attachment
                files={this.state.files}
                errorMessage="Error message"
                onFilesAdd={this.handleFilesAdd}
                onFileRemove={this.handleFileRemove}

            />
            </div>
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
            <div id='set-files-attachment'>
                <Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />
                <button onClick={this.handleClick}>Set Files of Attachment</button>
            </div>
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
            <div>
                <Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />
                <button onClick={this.handleClick}>Get Files of Attachment</button>
            </div>
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
            <div id='set-browse-button-text-attachment'>
                <Attachment
                    files={this.state.files}
                    browseButtonText={this.state.browseButtonText}
                    onFilesAdd={this.handleFilesAdd}
                    onFileRemove={this.handleFileRemove}
                />
                <button onClick={() => this.browseButtonText("Drop files here")}>Set Browse Button Text of Attachment</button>
            </div>
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
            <div id='set-file-limit-text-attachment'>
                <Attachment
                    files={this.state.files}
                    fileLimitText={this.state.fileLimitText}
                    onFilesAdd={this.handleFilesAdd}
                    onFileRemove={this.handleFileRemove}
                />
                <button onClick={() => this.setFileLimitText("Maximum: 1 GB")}>Set File Limit Text of Attachment</button>
            </div>
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
            <div id='set-error-message-attachment'>
                <Attachment
                    files={this.state.files}
                    errorMessage={this.state.errorMessage}
                    onFilesAdd={this.handleFilesAdd}
                    onFileRemove={this.handleFileRemove}
                    isErrorVisible={this.state.isErrorVisible}
                />
                <button onClick={()=>this.setErrorMessage("Error message")}>Set Error Message of Attachment</button>
                <button onClick={this.showError}>Show Error Message of Attachment</button>
                <button onClick={this.hideError}>Hide Error Message of Attachment</button>
            </div>
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
        <div id='on-callback-attachment'>
        <Attachment
          files={this.state.files}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        </div>
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
        <div id='show-hide-attachment'>
          <Attachment
            files={this.state.files}
            isVisible={this.state.isVisible}
            onFilesAdd={this.handleFilesAdd}
            onFileRemove={this.handleFileRemove}
          />
          <button onClick={this.show}>Show Attachment</button>
          <button onClick={this.hide}>Hide Attachment</button>
        </div>
      );
    }
  }

export default {
    ConstructorAttachment,
    SetFilesAttachment,
    GetFilesAttachment,
    // SetDropZoneTextAttachment,
    SetBrowseButtonTextAttachment,
    SetFileLimitTextAttachment,
    SetErrorMessageAttachment,
    OnCallbackAttachment,
    ShowHideAttachment

}