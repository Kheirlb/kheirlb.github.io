let a = 0;
var data2;

class FileReader extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    console.log(csvfile);
    console.log(csvfile.name);
    const filepath = 'file:///C:/Users/KarlP/Documents/GitHub/kheirlb.github.io/data/normal.csv';
    Papa.parse(filepath, {
        header: true,
        complete: function(results) {
            console.log('Do we get this far?');
            data2 = results;
        }
    });
    console.log('Does it work?');
  };

  updateData(result) {
    console.log('Updating Data?');
    var data = result.data;
    console.log(data);
  }

  render() {
    console.log(this.state.csvfile);
    return (
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now!</button>
      </div>
    );
  }
}

ReactDOM.render(<FileReader />, document.getElementById("root"));

//export default FileReader;
