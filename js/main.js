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
