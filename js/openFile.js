function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('name', 'File Upload');
  fileSelector.setAttribute('id', 'txtFileUpload');
  fileSelector.setAttribute('accept', '.csv');
  //fileSelector.setAttribute('multiple', 'multiple');
  console.log('Created File Selector');
  return fileSelector;
}

class FileDialogue extends React.Component {
  componentDidMount(){
    this.fileSelector = buildFileSelector();
  }

  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
    console.log(this.fileSelector);
  }

  render(){
    return <a className="button" href="" onClick={this.handleFileSelect}>Open CSV File</a>
  }
}

ReactDOM.render(<FileDialogue />, document.getElementById('app'))
