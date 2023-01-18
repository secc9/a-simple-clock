
let x = 0;
let y = 0;
let r = 0;
let g = 0;
let b = 0;
let roundEdge = 100;
let alpha = 100;
let alphaStroke = 0;
let diam; 
let posX;
let posY;
let amtSc;
let amtMn;
let amtHr;

function setup() {
  createCanvas(windowWidth, windowHeight);
    // console.log(hour() + ":" + minute()+ ":" + second());
}

function draw() {
  background(0);






////////////////////////
////////////////////////
//Make a goddamn clock//
////////////////////////
////////////////////////


  let hr = hour();
  let mn = minute();
  let sc = second();
  let ms = millis();


  /////////////////////////////////////
  /////////////////////////////////////
  /////////////map to time/////////////
  /////////////////////////////////////
  /////////////////////////////////////

  //map to seconds
  secondsMove= map(sc, 0, 60, 50, displayWidth );

  //map to minutes
  minutesMove = map(mn, 0, 60, 50, displayWidth);

  // map to hours
  hoursMove = map(hr % 12, 0, 12, 50, displayWidth);  // % 12 idea taken from Coding Train 


///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
/////////Draw the markers of time//////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


    amtSc = frameCount % 60; 
    amtMn = frameCount % 225; 
    amtHr = frameCount % 900;
    alphaStroke = sc % 60 ;
    b = frameCount % 255;

    strokeJoin(ROUND);

    // hoursCounter
    strokeWeight(amtHr);
    stroke(255, 255, 255, alphaStroke);
    fill(0, 0, b, alpha);
    rect(hoursMove, y, 100, 999,roundEdge);


    //minutesCounter
    strokeWeight(amtMn);
    stroke(255,255, 255, alphaStroke);
    fill(255, 255, b, alpha);
    rect(minutesMove, y, 100, 999,roundEdge );

    //secondsCounter
    strokeWeight(amtSc);
    stroke(255, 255, 255, alphaStroke);
    fill(255, g, b, alpha);
    rect(secondsMove, y, 100, 999, roundEdge);
  
  


// when x reaches the end of the screen after its round of time it starts
// again from the left
if(x > 1000){
  x = 50;
  y = y+ 100;
}



}


