/**
 * cactus.js
 * 
 * The Cactus Class
 * 
 * Where the army of cacti shall be summoned
 * 
 * Author: 
 */

import { CTX, CANVAS, GRAVITY, FLOOR } from "./globals.js"

//Cactuses
let cacti = new Image();
cacti.src = "../images/dino_large.png"
//Small 1
CTX.drawImage(cacti, 445, 2, 34, 70, 50, 50, 58.6666666667, 62.6666666667)

let CactusBunch = []



class Cactus {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
    
        this.position = {
          x: x,
          y: y
        };

    }

    cactus() {
        CTX.drawImage(cacti, 445, 2, 35, 70, 50, 50, 35, 70)

        CTX.drawImage(cacti, 480, 2, 68, 70, 150, 50, 68, 70)

        CTX.drawImage(cacti, 548, 2, 102, 70, 250, 50, 102, 70)

    }
)