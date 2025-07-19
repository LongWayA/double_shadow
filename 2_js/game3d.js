/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name game3d.js
 * @version created 19.07m.2025 
 * last modified 19.07m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  
 *  
*/

class Game3d_C {
    static NAME = "Game3d_C";
    html5Canvas_O = new Html5Canvas_C();

    x = 50;
    y = 50;
    width = 400;
    height = 100;

    constructor() {
    }

    iniM() {
       this.html5Canvas_O.iniM();
    }

    tickStartGame() {
        this.x = 50;
        this.y = 50;
        this.width = 400;
        this.height = 50;
        console.log('Game_C->tickStartGame');
        this.html5Canvas_O.clearRect(this.x,this.y,this.width,this.height);
        this.html5Canvas_O.drawRect(this.x,this.y,this.width,this.height,Html5Canvas_C.LINE_WIDTH_3,Html5Canvas_C.RED,0);
        this.html5Canvas_O.drawText("Start Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL, 
            Html5Canvas_C.RED, Html5Canvas_C.LINE_WIDTH_3);

    }
    tickContinueGame() {
        console.log('Game_C->tickContinueGame');
        this.html5Canvas_O.clearRect(this.x,this.y,this.width,this.height);
        this.html5Canvas_O.drawRect(this.x,this.y,this.width,this.height,Html5Canvas_C.LINE_WIDTH_3,Html5Canvas_C.GREEN,0);       
        this.html5Canvas_O.drawText("Continue Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL, 
            Html5Canvas_C.GREEN, Html5Canvas_C.LINE_WIDTH_3);

    }
    tickPauseGame() {
        console.log('Game_C->tickPauseGame');
        this.html5Canvas_O.clearRect(this.x,this.y,this.width,this.height);
        this.html5Canvas_O.drawRect(this.x,this.y,this.width,this.height,Html5Canvas_C.LINE_WIDTH_3,Html5Canvas_C.BLUE,0);
        this.html5Canvas_O.drawText("Pause Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL, 
            Html5Canvas_C.BLUE, Html5Canvas_C.LINE_WIDTH_3);

    }
    tickEndGame() {
        console.log('Game_C->tickEndGame');
         this.html5Canvas_O.clearRect(this.x,this.y,this.width,this.height);
        this.html5Canvas_O.drawRect(this.x,this.y,this.width,this.height,Html5Canvas_C.LINE_WIDTH_3,Html5Canvas_C.BLACK,0);
        this.html5Canvas_O.drawText("End Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL, 
            Html5Canvas_C.BLACK, Html5Canvas_C.LINE_WIDTH_3);       

    }

}