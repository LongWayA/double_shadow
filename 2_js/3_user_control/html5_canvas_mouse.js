/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name html5_canvas_mouse.js
 * @version created 19.07m.2025 
 * last modified 19.07m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  
 *  
*/

class Html5CanvasMouse_C {
    static NAME = "Html5CanvasMouse_C";
    mouseMoveIsChange = false;
    mouseMove = {
        X: 0,
        Y: 0
    };
    mouseDownIsChange = false;
    mouseDown = {
        X: 0,
        Y: 0
    };
    mouseUpIsChange = false;
    mouseUp = {
        X: 0,
        Y: 0
    };
    constructor() {
    }
    iniM(idCanvas) {
        idCanvas.addEventListener('mousemove', (event) => {
            this.mouseMoveIsChange = true;
            this.mouseMove.X = event.offsetX;
            this.mouseMove.Y = event.offsetY;
        });
        idCanvas.addEventListener('mousedown', (event) => {
            this.mouseDownIsChange = true;
            this.mouseDown.X = event.offsetX;
            this.mouseDown.Y = event.offsetY;
        });
        idCanvas.addEventListener('mouseup', (event) => {
            this.mouseUpIsChange = true;
            this.mouseUp.X = event.offsetX;
            this.mouseUp.Y = event.offsetY;
        });
    }
    set_mouseMoveIsChange(mouseMoveIsChange = false) {
        this.mouseMoveIsChange = mouseMoveIsChange;
    }
    get_mouseMoveIsChange() {
        return this.mouseMoveIsChange;
    }
    get_mouseMoveCoordinate() {
        return this.mouseMove;
    }
    set_mouseDownIsChange(mouseDownIsChange = false) {
        this.mouseDownIsChange = mouseDownIsChange;
    }
    get_mouseDownIsChange() {
        return this.mouseDownIsChange;
    }
    get_mouseDownCoordinate() {
        return this.mouseDown;
    }
    set_mouseUpIsChange(mouseUpIsChange = false) {
        this.mouseUpIsChange = mouseUpIsChange;
    }
    get_mouseUpIsChange() {
        return this.mouseUpIsChange;
    }
    get_mouseUpCoordinate() {
        return this.mouseUp;
    }
}
