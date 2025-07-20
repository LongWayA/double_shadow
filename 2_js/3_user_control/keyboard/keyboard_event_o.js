/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name keyboard_event_o.js
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

/**
 * тут объект а не клас потому что:
 * this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
 * this теряет контекст, когда метод используется в качестве обработчика события.
 *
 */
let userInputKeyboardEvent_R = {
    NAME: "userInputKeyboardEvent_R",
   // команды бойцам
    KEY_LEFT: "KeyA",//движение влево     A
    KEY_RIGHT: "KeyD",//движение вправо    D
    KEY_UP: "KeyW",//движение вверх     W
    KEY_DOWN: "KeyS",//движение вниз      S
    KEY_RUN: "KeyQ",//бег                 J
    isKeyDown: 0,
    eventCode: "_",// заносится скан код нажатой клавиши
    eventCodeOld: "_",
    eventCodeOneDown: 0,
    eventKey: "_",
    command: "_",
    iniM() {
        window.addEventListener("keydown", userInputKeyboardEvent_R.keyDownE);
        window.addEventListener("keyup", userInputKeyboardEvent_R.keyUpE);
        userInputKeyboardEvent_R.eventCode = "_";// заносится «физический код клавиши» например KeyZ
        userInputKeyboardEvent_R.eventCodeOld = "_";
        userInputKeyboardEvent_R.eventKey = "_";//заносится символ клавиши например Z
        userInputKeyboardEvent_R.eventCodeOneDown = 0;
        userInputKeyboardEvent_R.isKeyDown = 0;
    },
    // во время нажатия клавиши вызывается эта функция
    // на нажатие реагируем один раз. один раз записываем какую кнопку нажали   
    keyDownE(event) {
        if (userInputKeyboardEvent_R.isKeyDown == 0) {
            userInputKeyboardEvent_R.isKeyDown = 1;
            userInputKeyboardEvent_R.eventCodeOld = userInputKeyboardEvent_R.eventCode;
            userInputKeyboardEvent_R.eventCode = event.code;
            userInputKeyboardEvent_R.eventKey = event.key;
            userInputKeyboardEvent_R.eventCodeOneDown = 1;
        }
    },
    keyUpE(event) {
        if (userInputKeyboardEvent_R.eventCodeOneDown == 1) {
            userInputKeyboardEvent_R.eventCodeOneDown = 0;
        }
    },
};
