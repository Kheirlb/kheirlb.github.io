const typeID = document.getElementById("typeSpot");

var waitTime = 6000;

var typed = new Typed(typeID, {
  strings: ["",
            "^500Hello.",
            "My name is Karl Parks.",
            "Welcome to my website.^1500 :)",
            ],
  typeSpeed: 40,
  backSpeed: 25,
});

setTimeout(function(){
    $('.jumbo2').css('background-image', 'url("/img/7K_karlLeaning2.jpeg")');
}, waitTime)

//plotly
var skillVar = document.getElementById('skillDiv');
var center = "This is me.";
var mainParents = ["", center, center, center, center, center, center];

pythonLink = "<a style='color: blue' href='https://github.com/Kheirlb/purethermal1-uvc-capture'>Python</a>"

var languages = ["MATLAB", "Java", pythonLink, "C/C++", "LabView", "FORTRAN", "JavaScript", "Racket/Scheme", "Linux/Unix"];
var langParents = Array(languages.length).fill("Software");

var cadPrograms = ["PTC Creo", "Solidworks", "Autodesk<br>Inventor", "Blender"];
var cadParents = Array(cadPrograms.length).fill("CAD");

var aerospaceBackground = ["Avionics","Composites", "Cryogenics", "High Pressure", "Propulsion"];
var aerospaceParents = Array(aerospaceBackground.length).fill("Aerospace");

ikLink = "<a style='color: blue' href='https://github.com/Kheirlb/CS556/blob/master/report/workSpace1.png'>Inverse<br>Kinematics</a>"
var robotics = ["Jacobians", "Genetic<br>Algorithms", "PID<br>Controllers", ikLink];
var robotParents = Array(robotics.length).fill("Robotics");

var leadership = ["<a style='color: blue' href='https://www.sdsurocketproject.org/our-team'>President</a>", "Senior<br>Engineer<br>(SDSURP)", "Design Lead<br>(SDSURP)", "CESC<br>VP of<br>Programming","Resident<br>Advisor","RHA Pres"];
var leadershipParents = Array(leadership.length).fill("Leadership");

var electrical = ["Breadboards", "PCBs", "Soldering", "Multimeters", "Oscilloscopes", "Microohm Meters"];
var electricalParents = Array(electrical.length).fill("Electrical");

var mainCategories = [center, "Software", "CAD", "Aerospace", "Robotics", "Leadership", "Electrical"];
var combinedLabels = mainCategories.concat(languages, cadPrograms, aerospaceBackground, robotics, leadership, electrical);
var combinedParents = mainParents.concat(langParents, cadParents, aerospaceParents, robotParents, leadershipParents, electricalParents);

var data = [
{
  "type": "sunburst",
  "labels": combinedLabels,
  "parents": combinedParents,
 // "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
  "leaf": {"opacity": 0.7},
  "marker": {"line": {"width": 3}},
  "branchvalues": 'total'
}];

var layout = {
  "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
};

Plotly.plot(skillVar, data, layout, {responsive: true})
