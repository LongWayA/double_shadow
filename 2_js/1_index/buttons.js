/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name buttons.js
 * @version created 18.07m.2025 
 * last modified 18.07m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  
 *  
*/

class Buttons_C {
    static NAME = "Buttons_C";

    elementbuttonStart = document.getElementById("buttonStart");
    elementbuttonContinue = document.getElementById("buttonContinue");   
    elementbuttonPause = document.getElementById("buttonPause");
    elementbuttonEnd = document.getElementById("buttonEnd");
    elementbuttonTest = document.getElementById("buttonTest");

    constructor() {
    }

    iniM() {
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");

        this.elementbuttonContinue.disabled = true;
        this.elementbuttonContinue.setAttribute("class", "");

        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");

        this.elementbuttonEnd.disabled = true;
        this.elementbuttonEnd.setAttribute("class", "");

        this.elementbuttonTest.setAttribute("class", "styled");
        this.elementbuttonTest.setAttribute("value", "PROBE");
    }

    startButtonAttribute() {
        //console.log('Buttons_C->startButtonAttribute');
        this.elementbuttonStart.disabled = true;
        this.elementbuttonStart.setAttribute("class", "");

        this.elementbuttonContinue.disabled = true;
        this.elementbuttonContinue.setAttribute("class", "");

        this.elementbuttonPause.disabled = false;
        this.elementbuttonPause.setAttribute("class", "styled");

        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }

    continueButtonAttribute() {
        //console.log('Buttons_C->continueButtonAttribute');
        this.elementbuttonStart.disabled = true;
        this.elementbuttonStart.setAttribute("class", "");

        this.elementbuttonContinue.disabled = true;
        this.elementbuttonContinue.setAttribute("class", "");    
        
        this.elementbuttonPause.disabled = false;
        this.elementbuttonPause.setAttribute("class", "styled");

        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }

    pauseButtonAttribute() {
        //console.log('Buttons_C->pauseButtonAttribute');
        this.elementbuttonStart.disabled = true;
        this.elementbuttonStart.setAttribute("class", "");

        this.elementbuttonContinue.disabled = false;
        this.elementbuttonContinue.setAttribute("class", "styled");

        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");

        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }

    endButtonAttribute() {
        //console.log('Buttons_C->endButtonAttribute');
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");

        this.elementbuttonContinue.disabled = true;
        this.elementbuttonContinue.setAttribute("class", "");

        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");

        this.elementbuttonEnd.disabled = true;
        this.elementbuttonEnd.setAttribute("class", "");
    }
}