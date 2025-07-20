/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name game2d.js
 * @version created 19.07m.2025 
 * last modified 19.07m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  
 *  
*/

class Game2d_C {
    static NAME = "Game2d_C";
    html5Canvas_O = new Html5Canvas_C();
    html5SpritesCollection_O = new Html5SpritesCollection_C();
    frames_O = new Frames_C();    
    html5CanvasMouse_O = new Html5CanvasMouse_C(); 
    drawTimerNumber_O = new DrawTimerNumber_C();       

    x = 50;
    y = 50;
    width = 400;
    height = 100;

    x2 = 50;
    y2 = 50;
    width2 = 400;
    height2 = 100;

    countTick = 0;

    minX = 50;

    constructor() {
    }

    iniM(timer) {
        this.html5Canvas_O.iniM();
        this.html5SpritesCollection_O.iniM();
        this.frames_O.iniM(this.html5Canvas_O);
        this.html5CanvasMouse_O.iniM(this.html5Canvas_O.idCanvas);
        this.drawTimerNumber_O.iniM(timer, this.html5Canvas_O);
        
        
    }

    tickStartGame() {
        this.x = 0;
        this.y = 0;
        this.width = 1200;
        this.height = 730;
        this.countTick = this.countTick + 1;
        if(this.countTick > 100000) this.countTick = 1;

        console.log('Game_C->tickStartGame');
        this.html5Canvas_O.clearRect(this.x, this.y, this.width, this.height);
        this.html5Canvas_O.drawRect(this.x2, this.y2, this.width2, this.height2, Html5Canvas_C.LINE_WIDTH_3, Html5Canvas_C.RED, 0);
        this.html5Canvas_O.drawText("Start Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.RED, Html5Canvas_C.LINE_WIDTH_3);

        let img = this.html5SpritesCollection_O.getSprite(Html5SpritesCollection_C.CREATURES, Html5SpritesCollection_C.CREATURES_MINOTAUR);
        this.minX =  this.minX + 2;
        if(this.minX > 400) this.minX = 50;
        this.html5Canvas_O.drawImage(img, this.minX , 50);

        this.frames_O.drowEditorFrame();
        this.frames_O.drowMapFrame();
        this.frames_O.drowTilesPanelFrame();
        this.frames_O.drowPrintFrameFrame();   
        
        this.drawTimerNumber_O.drawTimerTick(50, 230);
        this.drawTimerNumber_O.drawNumberTick(50, 170, this.countTick)

    }
    tickContinueGame() {
        console.log('Game_C->tickContinueGame');
        this.html5Canvas_O.clearRect(this.x, this.y, this.width, this.height);
        this.html5Canvas_O.drawRect(this.x2, this.y2, this.width2, this.height2, Html5Canvas_C.LINE_WIDTH_3, Html5Canvas_C.GREEN, 0);
        this.html5Canvas_O.drawText("Continue Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.GREEN, Html5Canvas_C.LINE_WIDTH_3);

    }
    tickPauseGame() {
        console.log('Game_C->tickPauseGame');
        this.html5Canvas_O.clearRect(this.x, this.y, this.width, this.height);
        this.html5Canvas_O.drawRect(this.x2, this.y2, this.width2, this.height2, Html5Canvas_C.LINE_WIDTH_3, Html5Canvas_C.BLUE, 0);
        this.html5Canvas_O.drawText("Pause Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.BLUE, Html5Canvas_C.LINE_WIDTH_3);

    }
    tickEndGame() {
        console.log('Game_C->tickEndGame');
        this.html5Canvas_O.clearRect(this.x, this.y, this.width, this.height);
        this.html5Canvas_O.drawRect(this.x2, this.y2, this.width2, this.height2, Html5Canvas_C.LINE_WIDTH_3, Html5Canvas_C.BLACK, 0);
        this.html5Canvas_O.drawText("End Game", 100, 50, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.BLACK, Html5Canvas_C.LINE_WIDTH_3);
    this.countTick = 0;  
    this.minX = 50; 

    }

}