document.getElementById('txtFileUpload').addEventListener('change', upload, false);

var plotlyData;
//var xVec = [];
//var yVec = [];
var dataToPlot = [];
var dataTraces = {};

var trace = {
    x: [],
    y: [],
    type: 'scatter'
}

function upload(evt) {
    var data = null;
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
        var csvData = event.target.result;

        var data = Papa.parse(csvData, {header : true});
        plotlyData = data;
        console.log(data);
        dataToPlot = [];
        createVec();

    };
    reader.onerror = function() {
        alert('Unable to read ' + file.fileName);
    };

}

var row;
var col;
function createVec() {
    //grab all x values
    let xVec = [];
    numRow = plotlyData.data.length;
    numCol = Object.values(plotlyData.data[1]).length;
    for (row = 0; row < numRow; row++) {
        xVec[row] = parseFloat(Object.values(plotlyData.data[row])[0]);
        //yVec[row] = parseFloat(Object.values(plotlyData.data[row])[1]);
    }
    for (col = 1; col < numCol; col++) {
        let yVec = [];
        for (row = 0; row < numRow; row++) {
            yVec[row] = parseFloat(Object.values(plotlyData.data[row])[col]);
            // if (row == 0) {
            //     console.log(yVec[0]);
            // }
        }
        console.log(yVec[0]);
        // tempObj = Object.create(trace);
        // tempObj.x = xVec;
        // tempObj.y = yVec;
        //dataTraces[col-1] = {x: xVec, y: yVec};
        dataToPlot.push({x: xVec, y: yVec});
    }
    //create each trace
    // for (col = 0; col < Object.values(plotlyData.data[1]).length; col++) {
    //     //for all y values
    //     for (i = 0; i < plotlyData.data.length; i++) {
    //         yVec[i] = parseFloat(Object.values(plotlyData.data[i])[col]);
    //     }
    //     dataTraces[col] = {x: xVec, y: yVec};
    //     dataToPlot = [dataTraces[0]];
    // }
    // dataTraces[0] = {x: xVec, y: yVec};
    // dataTraces[1] = {x: xVec, y: yVec};
    //dataToPlot.push(dataTraces[0]);
    // dataToPlot.push(dataTraces[1]);

    //dataToPlot = [dataTraces[0], dataTraces[1]];
    //dataToPlot.push(dataTraces[dataTraces.length - 1]);
    Plotly.newPlot('graph', dataToPlot);
}

Plotly.plot('graph', [{
  x: [1, 2, 3],
  y: [2, 1, 3]
}], {
  sliders: [{
    pad: {t: 30},
    currentvalue: {
      xanchor: 'right',
      prefix: 'color: ',
      font: {
        color: '#888',
        size: 20
      }
    },
    steps: [{
      label: 'red',
      method: 'restyle',
      args: ['line.color', 'red']
    }, {
      label: 'green',
      method: 'restyle',
      args: ['line.color', 'green']
    }, {
      label: 'blue',
      method: 'restyle',
      args: ['line.color', 'blue']
    }]
  }]
});
