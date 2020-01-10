//add navbar to pages

$(function(){
  $("#nav-placeholder").load("/nav.html");
  $("#footer-placeholder").load("/footer.html");
});

const typeID = document.getElementById("typeSpot");

// "^500Hello.",
// "My name is Karl Parks.",
// "Welcome to my website.^1500 :)",

// "^500Hello.^1000 <br>>^500 My name is Karl Parks.^1000 <br>>^500 Welcome to my website.^1500 :)",

//typer
var typed = new Typed(typeID, {
  strings: ["",
  "^500Hello.",
  "My name is Karl Parks.",
  "Welcome to my website.^1500 :)",
            ],
  typeSpeed: 40,
  backSpeed: 25,
});

//background delay
var waitTime = 1000;
setTimeout(function(){
    $('.jumbo2').css('background-image', 'url("/img/7K_karlLeaning2.jpeg")');
}, waitTime)

//plotly
var skillVar = document.getElementById('skillDiv');
var center = "This is me.";
var mainParents = ["", center, center, center, center, center, center];

pythonLink = "<a style='color: blue' href='https://github.com/Kheirlb/purethermal1-uvc-capture'>Python</a>"

var languages = ["MATLAB", "Java", pythonLink, "C/C++", "LabView", "FORTRAN", "JavaScript", "Racket/Scheme", "Linux/Unix","Version Control"];
var langParents = Array(languages.length).fill("Software");

var cadPrograms = ["PTC Creo/Simulate", "Solidworks", "FEMAP/NASTRAN", "Autodesk<br>Inventor", "Blender"];
var cadParents = Array(cadPrograms.length).fill("CAD/FEA");

var aerospaceBackground = ["Avionics", "Composites", "Cryogenics", "High Pressure", "Propulsion", "FEA", "PDM/PLM"];
var aerospaceParents = Array(aerospaceBackground.length).fill("Aerospace");

ikLink = "<a style='color: blue' href='https://github.com/Kheirlb/CS556/blob/master/report/workSpace1.png'>Inverse<br>Kinematics</a>"
var robotics = ["Jacobians", "Genetic<br>Algorithms", "PID<br>Controllers", ikLink];
var robotParents = Array(robotics.length).fill("Robotics");

var leadership = ["<a style='color: blue' href='https://www.sdsurocketproject.org/our-team'>President<br>SDSURP</a>", "Senior<br>Engineer<br>SDSURP", "Design Lead<br>SDSURP", "VP of<br>Programming<br>CESC","Resident<br>Advisor","President<br>RHA"];
var leadershipParents = Array(leadership.length).fill("Leadership");

var electrical = ["Breadboards", "PCBs", "Soldering", "Multimeters", "Oscilloscopes", "Microohm Meters"];
var electricalParents = Array(electrical.length).fill("Electrical");

var mainCategories = [center, "Software", "CAD/FEA", "Aerospace", "Robotics", "Leadership", "Electrical"];
var combinedLabels = mainCategories.concat(languages, cadPrograms, aerospaceBackground, robotics, leadership, electrical);
var combinedParents = mainParents.concat(langParents, cadParents, aerospaceParents, robotParents, leadershipParents, electricalParents);

//hover events:
//https://plot.ly/javascript/hover-events/
//https://community.plot.ly/t/how-to-customize-plotly-tooltip/332/24

var data = [
{
  "type": "sunburst",
  "labels": combinedLabels,
  "parents": combinedParents,
 // "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
  "leaf": {"opacity": 0.7},
  "marker": {"line": {"width": 3}},
  "branchvalues": 'total',
}];

var layout = {
  "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
};

Plotly.plot(skillVar, data, layout, {responsive: true})
