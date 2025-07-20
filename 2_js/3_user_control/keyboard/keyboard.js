/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name keyboard.js
 * @version created 19.07m.2025 
 * last modified 19.07m.2025
*/

/**
* НАЗНАЧЕНИЕ
* Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
*Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».
*Если пользователь работает с разными языками, то при переключении на другой язык символ изменится с "Z" на совершенно другой. 
*Получившееся станет новым значением event.key, тогда как event.code останется тем же: "KeyZ".
*https://learn.javascript.ru/keyboard-events
*/

class UserInputKeyboard_C {
    html5Canvas_R = null;
    html5Sprites_R = null;
    static NAME = "UserInputKeyboard_C";
    command = "_";
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.html5Sprites_R = html5Sprites_R;
        userInputKeyboardEvent_R.iniM();
    }
    tick(immortals, ground) {
        if (userInputKeyboardEvent_R.isKeyDown == 1) {
            userInputKeyboardEvent_R.isKeyDown = 0;
            this.command = "nothing";
            if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_LEFT) {
                this.command = "go left";
                immortals.List[1].runSet(4);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_RIGHT) {
                this.command = "go right";
                immortals.List[1].runSet(2);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_UP) {
                this.command = "go up";
                immortals.List[1].runSet(1);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_DOWN) {
                this.command = "go down";
                immortals.List[1].runSet(3);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_RUN) {
                this.command = "run -";
            }
        }
    }
    drow() {
        let X0 = 550;
        let Y0 = 600;
        let left = X0;
        let top = Y0 - 2;
        let width = 350;
        let height = 22;
        this.printText("eventCode = " + userInputKeyboardEvent_R.eventCode, left, top, width, height, X0, Y0);
        let X0_2 = X0;
        let Y0_2 = Y0 + 25;
        let left_2 = X0_2;
        let top_2 = Y0_2 - 2;
        let width_2 = 350;
        let height_2 = 22;
        this.printText("eventKey = " + userInputKeyboardEvent_R.eventKey, left_2, top_2, width_2, height_2, X0_2, Y0_2);
        let X0_3 = X0;
        let Y0_3 = Y0_2 + 25;
        let left_3 = X0_3;
        let top_3 = Y0_3 - 2;
        let width_3 = 350;
        let height_3 = 22;
        this.printText(this.command, left_3, top_3, width_3, height_3, X0_3, Y0_3);
    }
    printText(text, left, top, width, height, x0, y0) {
        this.html5Canvas_R.clearRect(left, top, width, height);
        this.html5Canvas_R.drawRect(left, top, width, height, 1, 'blue', 0);
        this.html5Canvas_R.drawText(text, x0, y0, 'italic 20px sans-serif', 'blue', 1);
    }
}