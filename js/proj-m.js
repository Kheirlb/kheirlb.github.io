//add navbar to pages

$(function(){
  $("#footer-placeholder").load("/footer.html");
  $("#nav-placeholder-proj").load("/nav-proj.html");
});

const typeID = document.getElementById("mayaTypeSpot");

// "^500Hello.",
// "My name is Karl Parks.",
// "Welcome to my website.^1500 :)",

// "^500Hello.^1000 <br>>^500 My name is Karl Parks.^1000 <br>>^500 Welcome to my website.^1500 :)",

//typer
var typed = new Typed(typeID, {
  strings: ["",
  "^2000Hello my Maya.^1500 :)",
  "I am absolutely in love with you.^500",
  "You are the love of my life.^500",
  "I can't wait to make you coffee in the morning.^500",
  "And kessel you all night long.^500",
  "I just wanted to say...^500 that you light up my world.^500",
  "Oh...^500 and I love your butt too.^1500 ;)",
            ],
  typeSpeed: 40,
  backSpeed: 25,
});
