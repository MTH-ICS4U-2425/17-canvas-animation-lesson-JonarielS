/**
 * ICS4U - Mr. Brash 🐿️
 * 
 * 17 - Canvas Animation
 * 
 * Author:
 * 
 */

'use strict';

import Player from "./player.js";
import { CANVAS, CTX, MS_PER_FRAME, KEYS } from "./globals.js";

// Globals
const HERO = new Player(120, 50, 48, 48);
let ground = new Image();
let score = 0
let highscore = 0
ground.src = "../images/dino_large.png"
ground.x_pos = 0;
ground.x2_pos = 2300;

//Randomizer
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Colours
//Color Random
// function get_rgb_string() {
//   let r = randInt(0, 255)
//   let g = randInt(0, 255)
//   let b = randInt(0, 255)

//   return `rgb(${r}, ${g}, ${b})`
// }


let frame_time = performance.now()

// Event Listeners
document.addEventListener("keydown", keypress);


// Disable the context menu on the entire document
document.addEventListener("contextmenu", (event) => { 
  event.preventDefault();
  return false; 
});

/**
 * The user pressed a key on the keyboard 
 */
function keypress(event) {
  if ([KEYS.W, KEYS.UP_ARROW, KEYS.SPACE].includes(event.keyCode)) {
    HERO.jump()
  }
}


/**
 * The main game loop
 */
function update() {
  // Prepare for the next frame
  requestAnimationFrame(update)
  
  /*** Desired FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time
  
  if (TIME_PASSED < MS_PER_FRAME) return
  
  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = NOW - EXCESS_TIME

  //console.log(frame_time)
  /*** END FPS Trap ***/
  
  // Clear the canvas
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  // Draw the ground

  // drawImage(image file, source x, source y, source width, source height, 
  // direction x, direction y, direction width, direction height)

  //Image 1
  CTX.drawImage(ground, 0, 102, 2300, 26, ground.x_pos, 300, 2300, 28)
  //Image 2
  CTX.drawImage(ground, 0, 102, 2300, 26, ground.x2_pos, 300, 2300, 28)
  ground.x_pos-=10;
  ground.x2_pos-=10;
  //console.log(ground.x_pos)

  if(ground.x_pos < -2298) {
    ground.x_pos = 2298
  }
  else if(ground.x2_pos < -2298) {
    ground.x2_pos = 2298
  }





  //HERO.draw(get_rgb_string());

  //Cactus Determinator
  HERO.cactus();
  HERO.cloud();
  HERO.deathCheck();

  CTX.fillText(score, 1000, 20)
  //CTX.fillText(highscore, 1000, 50)

  //Death, Restart & Score Count
  if (HERO.deathCheck() == true){
      HERO.update();
      score++
  } else if (HERO.deathCheck() == false){
    HERO.deadBody();
    ground.x_pos+=10;
    ground.x2_pos+=10;
    highscore = score
    score = 0
    CTX.fillText("Press Enter to play again", 400, 200)
  } else if (HERO.deadBody() == true){
    HERO.update();
   }






  //console.log(decider)

  // if (decider == 1){
  //   HERO.cactus1();
  // }


  // Draw our hero
  //HERO.position.x +=1
  //console.log(decider)


  
  
}


document.addEventListener("keydown", begin);



//Game Start
function begin(event) {
  if ([KEYS.W, KEYS.UP_ARROW, KEYS.SPACE].includes(event.keyCode)) {
    update()
  }
}

// Attempted Splashscreen
  CTX.font = "30px Press-Start-2P";
  CTX.fillText("Press Space to Play", 400, 200)


// Start the animation
//update()
