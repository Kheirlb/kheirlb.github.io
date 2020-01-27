document.getElementById('txtFileUpload').addEventListener('change', upload, false);
// inTitle = document.getElementById('inTitle');
// inYTitle = document.getElementById('inYTitle');
// inXTitle = document.getElementById('inXTitle');

// plotly information and data upload information
var datagraph = document.getElementById('graph');
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

var plotLayout = {
    title: 'Make a Title Karl',
    xaxis: {
        title: 'Time [s]'
    },
    yaxis: {
        title: 'Some Fucking Amplitude'
    },
    hovermode:'closest',
    shapes: [
      //line vertical
      {
        type: 'line',
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 1,
        yref: 'paper',
        line: {
          color: 'green',
          width: 2
        }
      },
    ]
}

//upload function
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
//creates vectors to plot called after upload
function createVec() {
    //grab all x values
    let xVec = [];
    numRow = plotlyData.data.length;
    numCol = Object.values(plotlyData.data[1]).length;
    for (row = 0; row < numRow; row++) {
        xVec[row] = parseFloat(Object.values(plotlyData.data[row])[0]);
    }
    for (col = 1; col < numCol; col++) {
        let yVec = [];
        for (row = 0; row < numRow; row++) {
            yVec[row] = parseFloat(Object.values(plotlyData.data[row])[col]);
        }
        console.log(yVec[0]);
        let name = Object.keys(plotlyData.data[0])[col];
        dataToPlot.push({x: xVec, y: yVec, name: name});
    }
    // plotLayout.xaxis.title = Object.keys(plotlyData.data[0])[0];
    // plotLayout.yaxis.title = Object.keys(plotlyData.data[0])[1];
    Plotly.newPlot(datagraph, dataToPlot, plotLayout, {responsive: true, editable: false});
}

// initial sample plot
Plotly.plot(datagraph, [{
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  y: [2, 1, 3, 9, 8, 4, 3, 6, 1, 0, 4, 5]
}], plotLayout, {responsive: true, editable: false}
);

// video play information
var videoplayer = document.getElementById("video-player");  //get your videoplayer
var vidRateSlider = document.getElementById("vidRateSlider");
var vidRateVal = document.getElementById("vidRateVal");
var timeDis = document.getElementById("demo");

vidRateVal.innerHTML = vidRateSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
vidRateSlider.oninput = function() {
  vidRateVal.innerHTML = this.value;
  videoplayer.playbackRate = this.value;
}

// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
videoplayer.ontimeupdate = function() {myFunction()};

function myFunction() {
// Display the current position of the video in a <p> element with id="demo"
    curTime = videoplayer.currentTime;
    timeDis.innerHTML = curTime;
    //console.log(videoplayer.currentTime);
    //plotLayout.shapes[0].x0 = videoplayer.currentTime;
    //plotLayout.shapes[0].x1 = videoplayer.currentTime;
    Plotly.relayout(datagraph, {'shapes[0].x0': curTime,'shapes[0].x1': curTime});
}

function changeClipping() {
  var source = videoplayer.getElementsByTagName('source');
  start = document.getElementById("startClip").value
  end = document.getElementById("endClip").value;
  newSource = 'video/count10.mp4#t=' + start + ',' + end;
  source[0].setAttribute('src', newSource);
  videoplayer.load();
  vidRateSlider.value = 1;
  vidRateVal.innerHTML = 1;
}
