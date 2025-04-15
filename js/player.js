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
      x: 0,
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
    this.draw();

    this.prick.x += this.velocity.x;

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
      this.velocity.y = -25;
      //CTX.drawImage(dino, 1677, 2, 88, 94, this.position.x, this.position.y-15, 58.6666666667, 62.6666666667)
      console.log("fugly")
    }
  }

  cactus() {
    this.prick.x = 50
    //small 1
    CTX.drawImage(cacti, 445, 2, 35, 70, this.prick.x, 50, 35, 70)

    //small 2
    CTX.drawImage(cacti, 480, 2, 68, 70, 150, 50, 68, 70)

    //small 3
    CTX.drawImage(cacti, 548, 2, 102, 70, 250, 50, 102, 70)

    //big 1
    CTX.drawImage(cacti, 652, 2, 50, 100, 350, 50, 50, 100)

    //big 2
    CTX.drawImage(cacti, 702, 2, 100, 100, 500, 50, 100, 100)

    //big 3
    CTX.drawImage(cacti, 802, 2, 150, 100, 650, 50, 150, 100)

    this.prick.x-=1
}

  summon(){

  }

}
