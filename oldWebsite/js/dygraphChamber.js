const graph = document.getElementById("graphdiv2");
const leg = document.getElementById("legendDiv");
g2 = new Dygraph(
    graph,
    "../data/PcJS3.csv", // path to CSV file
    {
        legend: 'always',
        labelsDiv: leg,
        title: 'Karl made a Web Chart - SHF-G Chamber Pressure Data',
        ylabel: 'Pressure [psi]',
        xlabel: 'Time [s]',
    }          // options
  );

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
