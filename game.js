function setup() {
  createCanvas(900, 700);
  start = millis();
}

var vinder = 0;
var moleX;
var moleY;
var start;
var moletid = 900; // Tid mellem mole bevægelser
var tegnemole = true;

function mouseClicked() {
  var distance = int(dist(mouseX, mouseY, moleX, moleY));
  if (distance <= 50 && tegnemole) {
    console.log("mole trykket");
    tegnemole = false;
    vinder = vinder + 1;
    console.log(vinder);
  }
}

function draw() {
  background(255);
  
  // Titel
  fill(0);
  textSize(50);
  text("Whack a mole!", 30, 50);

  // Huller
  fill(0);
  rect(200, 100, 29, 29);
  rect(100, 100, 29, 29);
  rect(300, 100, 29, 29);
  rect(200, 200, 29, 29);
  rect(100, 200, 29, 29);
  rect(300, 200, 29, 29);
  rect(200, 300, 29, 29);
  rect(100, 300, 29, 29);
  rect(300, 300, 29, 29);

  // Vis vinder
  textSize(20);
  text("Vinder:", 100, 400);
  text(vinder, 170, 400);

  // Tjek om tiden er gået for mole bevægelse
  if (millis() - start > moletid) {
    moveMole();
    start = millis();
  }

  // tegne mole
  if (tegnemole){
    fill(203, 203, 65);
    ellipse(moleX, moleY, 20, 20);
  }
  
}

function moveMole() {
  tegnemole = random ()> 0.5 ? true:false
  var possibleX = [115, 215, 315];
  var possibleY = [115, 215, 315];
  moleX = random(possibleX);
  moleY = random(possibleY);
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.introduktion-container').style.display = 'none';
  }, 3000); // Her kan vi juster forsinkelsen (i millisekunder) for splash skærmen
});
