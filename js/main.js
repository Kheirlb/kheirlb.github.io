//add navbar to pages
$(function(){
  $("#nav-placeholder").load("/nav.html");
  $("#footer-placeholder").load("/footer.html");
});

// (".nav a").on("click",
$(document).on('click', 'a', function() {
  $(document).find("li.nav-item.active").removeClass("active");
  $(this).parent().addClass("active");
});

const typeID = document.getElementById("typeSpot");
// "^500Hello.",
// "My name is Karl Parks.",
// "Welcome to my website.^1500 :)",

// "^500Hello.^1000 <br>>^500 My name is Karl Parks.^1000 <br>>^500 Welcome to my website.^1500 :)",

//typer
var typed = new Typed(typeID, {
  strings: ["",
  "^500Hello.^250",
  "My name is Karl Parks.^250",
  "Welcome to my website.^1250 :)",
            ],
  typeSpeed: 40,
  backSpeed: 25,
});

//background delay
// var waitTime = 1000;
// setTimeout(function(){
//     $('.jumbo2').css('background-image', 'url("/img/7K_karlLeaning2_edited.jpg")');
// }, waitTime)

//plotly
var skillVar = document.getElementById('skillDiv');

//old plotly data
// var center = "Select a<br>Category";
// var mainParents = ["", center, center, center, center, center, center];
//
// pythonLink = "<a style='color: blue' href='https://github.com/Kheirlb/purethermal1-uvc-capture'>Python</a>"
//
// var languages = ["MATLAB", "Java", pythonLink, "C/C++", "LabView", "FORTRAN", "JavaScript", "Racket", "Linux/Unix","Version Control"];
// var langParents = Array(languages.length).fill("Software");
//
// var cadPrograms = ["PTC Creo<br>Simulate", "Solidworks", "FEMAP<br>NASTRAN", "Autodesk<br>Inventor", "Blender"];
// var cadParents = Array(cadPrograms.length).fill("CAD");
//
// var aerospaceBackground = ["Avionics", "Composites", "Cryogenics", "High<br>Pressure", "Propulsion", "FEA", "PDM/PLM"];
// var aerospaceParents = Array(aerospaceBackground.length).fill("Aerospace");
//
// ikLink = "<a style='color: blue' href='https://github.com/Kheirlb/CS556/blob/master/report/workSpace1.png'>Inverse<br>Kinematics</a>"
// var robotics = ["Jacobians", "Genetic<br>Algorithms", "PID<br>Controllers", ikLink];
// var robotParents = Array(robotics.length).fill("Robotics");
//
// var leadership = ["<a style='color: blue' href='https://www.sdsurocketproject.org/our-team'>President<br>SDSURP</a>", "Senior<br>Engineer<br>SDSURP", "Design Lead<br>SDSURP", "VP of<br>Programming<br>CESC","Resident<br>Advisor","President<br>RHA"];
// var leadershipParents = Array(leadership.length).fill("Leadership");
//
// var electrical = ["Breadboards", "PCBs", "Soldering", "Multimeters", "Oscilloscopes", "Microohm<br>Meters"];
// var electricalParents = Array(electrical.length).fill("Electrical");
//
// var mainCategories = [center, "Software", "CAD", "Aerospace", "Robotics", "Leadership", "Electrical"];
// var combinedLabels = mainCategories.concat(languages, cadPrograms, aerospaceBackground, robotics, leadership, electrical);
// var combinedParents = mainParents.concat(langParents, cadParents, aerospaceParents, robotParents, leadershipParents, electricalParents);

// //fix acronyms attempt
// var combinedLabelsNoAcronyms = combinedLabels;
// for (label in combinedLabels) {
//   if (combinedLabels[label].includes("SDSURP")) {
//     console.log(combinedLabels[label]);
//     combinedLabelsNoAcronyms[label] = combinedLabelsNoAcronyms[label].replace("SDSURP","SDSU Rocket Project");
//   } else if (combinedLabels[label].includes("RHA")) {
//     console.log(combinedLabels[label]);
//     combinedLabelsNoAcronyms[label] = combinedLabelsNoAcronyms[label].replace("RHA","Residence Hall Association");
//   }
// }

//hover events:
//https://plot.ly/javascript/hover-events/
//https://community.plot.ly/t/how-to-customize-plotly-tooltip/332/24

//imported version using a csv
var data;
var allParents;
Plotly.d3.csv('/docs/karl_plotly_data.csv', function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  };

  function addBreaks(manyStrings) {
    //test code
    // console.log(manyStrings.length);
    // stringNum = 8;
    // numOfWords = manyStrings[stringNum].split(' ').length;
    // console.log("# Words:" + numOfWords);
    // console.log(manyStrings[stringNum].replace(/((\w+\W+){5})/, '$1<br/>'));

    //looping and resave
    var skipWords = 4;
    var re = new RegExp('((\\w+\\W+){' + skipWords +'})','g');
    var i;
    for (i = 0; i < manyStrings.length; i++) {
      //console.log(manyStrings[i].replace(re, '$1<br>'));
      manyStrings[i] = manyStrings[i].replace(re, '$1<br>');
    }

    return manyStrings;
  }

  data = [
      {
        type: "sunburst",
        labels: unpack(rows, 'labels'),
        parents: (allParents = unpack(rows, 'parents')),
        textfont: {"color": "black"},
        insidetextfont: {"color": "white"},
        // meta: unpack(rows, 'short'),
        hovertext: addBreaks(unpack(rows, 'short')),
        hovertemplate: "%{label}<extra>%{hovertext}</extra>",
        leaf: {"opacity": 0.75},
        marker: {"line": {"width": 3}},
        insidetextorientation: 'radial',
        branchvalues: 'total',
        hoverlabel: {"align": "left"},
      }
  ];

// var data = [
// {
//   type: "sunburst",
//   labels: dataImported[0].labels, //combinedLabels
//   parents: dataImported[0].parents, //combinedParents
//   // "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
//   leaf: {"opacity": 0.75},
//   marker: {"line": {"width": 3}},
//   insidetextorientation: 'radial',
//   branchvalues: 'total',
//   // hovertext: ["This is a whoe bunch of useless text that you will never use in your life because this is just a test so ignore the test text if you get what I mean ya know fool? Like don't bother me when I'm testing this shit out okay? I feel like you are all up in my stuff here and I just don't like it okay."],
//   // hovertemplate:
//   //   "<b>%{label}</b><br><br>" +
//   //   "<extra><b>Description:</b>%{hovertext}</extra>",
//   showlegend: false,
//   // meta: ["", "", "", "", "", "", "", "MATLAB is the only language taught in the SDSU Aerospace<br> Department and is widely used in several of our lab<br> courses. I am extremely proficient with the MATLAB language and<br> IDE and have developed code in my professional job."],
//   // hovertemplate: "%{label}<extra>%{meta}</extra>",
//   // "hoverlabel": {"align": "center"},
// }];

var layout = {
  "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
};

Plotly.plot(skillVar, data, layout, {responsive: true, displayModeBar: false})

//Hover interaction
// var hoverInfo = document.getElementById('hoverinfo');
// skillVar.on('plotly_hover', function(data){
//   var xaxis = data.points[0].xaxis,
//       yaxis = data.points[0].yaxis;
//
//   var infotext = data.points.map(function(d){
//     console.log("Hovering Over: " + d.label);
//     // hoverInfo.innerHTML = d.meta + "<br>";
//   });
// })
// .on('plotly_unhover', function(data){
//    // hoverInfo.innerHTML = '';
// });

//Click interaction
skillVar.on('plotly_click', function(data){
  var xaxis = data.points[0].xaxis,
      yaxis = data.points[0].yaxis;
  var infotext = data.points.map(function(d){
    console.log('Clicked: ' + d.label);
    if (allParents.indexOf(d.label) > -1) {
      changePlotLabel(d.label);
    }
    // else {
    //   if (hoverInfo.innerHTML === undefined) {
    //     (hoverInfo.innerHTML) = d.meta;
    //     window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#mySkills";
    //   }
    // }
  });
});

var prevParent = "";
function changePlotLabel(clickedLabel){
  if (clickedLabel != prevParent) {
    data[0].insidetextorientation = 'horizontal';
    prevParent = clickedLabel;
  }
  else { //need to fix if user clicks to many times
    data[0].insidetextorientation = 'radial';
    prevParent = "";
  }
};

});
