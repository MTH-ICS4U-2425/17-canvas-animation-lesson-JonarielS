/**
 * player.js
 * 
 * The Player Class
 * 
 * Acts as a sprite or "hero" for the game
 * 
 * Author: 
 */

import { CTX, CANVAS, GRAVITY, FLOOR } from "./globals.js"

let dino = new Image();
dino.src = "../images/dino_large.png"
let cacti = new Image();
cacti.src = "../images/dino_large.png"
let i = 1
let x1 = -1100
let x2 = -1100
let x3 = -1100
let x4 = -1100
let x5 = -1100
let x6 = -1100

//Randomizer
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}




export default class Player {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;

    this.position = {
      x: x,
      y: y
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.prick = {
      x: 1100,
      y: 0
    };
  }

  get right() { return this.position.x + this.width; }
  get bottom() { return this.position.y + this.height; }
  get left() { return this.position.x; }
  get top() { return this.position.y; }
  set bottom(location) { this.position.y = location - this.height;}
  set right(location) { this.position.x = location - this.width;}
  set top(location) { this.position.y = location;}
  set left(location) { this.position.x = location;}

  /**
   * Main function to update location, velocity, and image
   */
  update() {
    // Add gravity of the hero
    // if  (this.bottom < FLOOR ) {
    //   this.velocity.y += GRAVITY;
    // }

    // // If we hit the floor, stop falling
    // if (this.bottom > FLOOR) {
    //   this.velocity.y = 0;
    //   this.position.y = FLOOR - this.height;
    // }

    if (this.bottom + this.velocity.y >= FLOOR) {
      this.velocity.y = 0;
      this.bottom = FLOOR;
    } else {
      this.velocity.y += GRAVITY;
    }

    // Update the location of the hero
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.prick.x += this.velocity.x;
    this.draw();

  }

  /**
   * Draw the player on the canvas
   */
  draw(color) {
    //CTX.fillStyle = "violet";
    //CTX.drawImage(dino, 1677, 2, 88, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)

    if ( i >= 0 && i < 8 && this.bottom == FLOOR){
      CTX.drawImage(dino, 1854, 2, 87, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)
      i++
    } else if ( i >= 8 && i < 16 && this.bottom == FLOOR){
      CTX.drawImage(dino, 1942, 2, 87, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)
      i++
    } else if (i == 16 && this.bottom == FLOOR){
      CTX.drawImage(dino, 1942, 2, 87, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)
      i = 0
    } else if (this.bottom <= FLOOR) {
      CTX.drawImage(dino, 1677, 2, 88, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)
    }
  }

  jump() {
    if (this.bottom >= FLOOR) {
      this.bottom = FLOOR
      this.velocity.y = -27;
      //CTX.drawImage(dino, 1677, 2, 88, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)
      console.log("fugly")
    }
  }

  cactus() {

    let r = null
    let timer = 2
    
    while (timer < 600){
      timer+=0.5
      if(timer > 599){
        //console.log(timer)
        timer == 1
      }
      //console.log(timer)
    }

    if (timer % 15 == 0){
      r = randInt(0, 600)
    } 


    //small 1
    CTX.drawImage(cacti, 445, 2, 35, 70, x1, 280, 23.3333333333, 46.6666666667)

    //small 2
    CTX.drawImage(cacti, 480, 2, 68, 70, x2, 280, 45.3333333333, 46.6666666667)

    //small 3
    CTX.drawImage(cacti, 548, 2, 102, 70, x3, 280, 68, 46.6666666667)

    //big 1
    CTX.drawImage(cacti, 652, 2, 50, 100, x4, 260, 33.3333333333, 66.6666666667)

    //big 2
    CTX.drawImage(cacti, 702, 2, 100, 100, x5, 260, 66.6666666667, 66.6666666667)

    //big 3
    CTX.drawImage(cacti, 802, 2, 150, 100, x6, 260, 100, 66.6666666667)


    if (x1 >= -100){
      x1-=5
    }
    if (x2 >= -100){
      x2-=5
    }
    if (x3 >= -100){
      x3-=5
    }
    if (x4 >= -100){
      x4-=5
    }
    if (x5 >= -100){
      x5-=5
    }
    if (x6 >= -200){
      x6-=5
    }

    if (r == 1 && x1 <= -99){
      x1 = 1100
    }
    if (r == 2 && x2 <= -99){
      x2 = 1100
    }
    if (r == 3 && x3 <= -99){
      x3 = 1100
    }
    if (r == 4 && x4 <= -99){
      x4 = 1100
    }
    if (r == 5 && x5 <= -99){
      x5 = 1100
    }
    if (r == 6 && x6 <= -199){
      x6 = 1100
    }
}

  cloud() {

    let c = null
    let timer = 2
    
    while (timer < 600){
      timer+=0.5
      if(timer > 599){
        //console.log(timer)
        timer == 1
      }
      //console.log(timer)
    }

    if (timer % 15 == 0){
      c = randInt(0, 600)
    } 


    //cloud 1
    CTX.drawImage(cacti, 165, 2, 92, 27, 50, 180, 92, 27)

    

    if (x1 >= -100){
      x1-=5
    }
    if (x2 >= -100){
      x2-=5
    }
    if (x3 >= -100){
      x3-=5
    }
    if (x4 >= -100){
      x4-=5
    }
    if (x5 >= -100){
      x5-=5
    }
    if (x6 >= -200){
      x6-=5
    }

    if (c == 1 && x1 <= -99){
      x1 = 1100
    }
    if (c == 2 && x2 <= -99){
      x2 = 1100
    }
    if (c == 3 && x3 <= -99){
      x3 = 1100
    }
    if (c == 4 && x4 <= -99){
      x4 = 1100
    }
    if (c == 5 && x5 <= -99){
      x5 = 1100
    }
    if (c == 6 && x6 <= -199){
      x6 = 1100
    }
}

}


