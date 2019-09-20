const graph = document.getElementById("graphdiv2");
const leg = document.getElementById("legendDiv");
var visibleArray = [true, false, false, false];
g2 = new Dygraph(
    graph,
    "../data/PcJS4.csv", // path to CSV file
    {
        legend: 'always',
        labelsDiv: leg,
        title: 'Karl made a Web Chart - SHF-G Chamber Pressure Data',
        ylabel: 'Pressure [psi]',
        xlabel: 'Time [s]',
        visibility: visibleArray,
        valueRange: [-10, 70]
    }          // options
  );

//g2.visibility() = [true, false, false, false];

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var temp = output.innerHTML;
  output.innerHTML = this.value;
  changeVisibility(temp, output.innerHTML);
};

function changeVisibility(previousIndex, desiredIndex) {
    console.log("Previous: " + previousIndex + ", Desired: " + desiredIndex);
    visibleArray[previousIndex-1] = false;
    visibleArray[desiredIndex-1] = true;
    g2.setVisibility(visibleArray);
};
