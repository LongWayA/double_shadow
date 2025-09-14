/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name double_shadow.js
 * @version created 18.07m.2025 
 * last modified 18.07m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  запускаем цикл игры
 *  обрабатываем нажатия кнопок
*/

let DoubleShadow_R = {

    timer_O: new Timer_C(), //таймер
    buttons_O: new Buttons_C(), //состояния кнопок
    game_O: new Game2d_C(), //игра

    NAME: "DoubleShadow_R",
 
    DONT_GAME: 0,
    START_GAME: 1,
    CONTINUE_GAME: 2,
    PAUSE_GAME: 3,
    END_GAME: 4,

    setTimeoutCount: -1,  // значение которое возвращает функция setTimeout
    countLoop: 0,  // сколько раз прокрутился цикл игры
    delaySleepGameMs: 0, // время в мс на которое останавливаем цикл игры.
    isLoop: false, // активен ли цикл игры
    gameState: 0, // состояния игры. может быть: нет игры, старт, продолжение , пауза, конец.

    iniM() {
        console.log('DoubleShadow_R->iniM');
        DoubleShadow_R.gameState = DoubleShadow_R.DONT_GAME;
        DoubleShadow_R.timer_O.iniM();
        DoubleShadow_R.buttons_O.iniM();
        DoubleShadow_R.game_O.iniM(DoubleShadow_R.timer_O);
    },

    startGameButton() {
        console.log('DoubleShadow_R->startGameButton');
        DoubleShadow_R.gameState = DoubleShadow_R.START_GAME;
        DoubleShadow_R.buttons_O.startButtonAttribute();
        DoubleShadow_R.timer_O.iniTicksPerSecond(5);
        DoubleShadow_R.startMenu();
    },

    continueGameButton() {
        console.log('DoubleShadow_R->continueGameButton');
        DoubleShadow_R.gameState = DoubleShadow_R.CONTINUE_GAME;
        DoubleShadow_R.buttons_O.continueButtonAttribute();
        DoubleShadow_R.timer_O.iniTicksPerSecond(2);
    },

    pauseGameButton() {
        console.log('DoubleShadow_R->pauseGameButton');
        DoubleShadow_R.gameState = DoubleShadow_R.PAUSE_GAME;
        DoubleShadow_R.buttons_O.pauseButtonAttribute();
        DoubleShadow_R.timer_O.iniTicksPerSecond(0.5);
    },

    endGameButton() {
        console.log('DoubleShadow_R->endGameButton');
        DoubleShadow_R.gameState = DoubleShadow_R.END_GAME;
        DoubleShadow_R.buttons_O.endButtonAttribute();
    },

    testButton() {
        console.log('DoubleShadow_R->testButton');
    },
    
    startMenu() {
        if (!DoubleShadow_R.isLoop) {
            console.log('DoubleShadow_R->startMenu->call DoubleShadow_R.loop()');
            DoubleShadow_R.loop();
        }
    },

    tickGame() {
        // обработка состяний игры
        if (DoubleShadow_R.gameState == DoubleShadow_R.START_GAME) {
             //console.log('DoubleShadow_R->tickGame->START_GAME');
             DoubleShadow_R.game_O.tickStartGame();
        } else if (DoubleShadow_R.gameState == DoubleShadow_R.CONTINUE_GAME) {
             //console.log('DoubleShadow_R->tickGame->CONTINUE_GAME');
             DoubleShadow_R.game_O.tickContinueGame();
        } else if (DoubleShadow_R.gameState == DoubleShadow_R.PAUSE_GAME) {
             //console.log('DoubleShadow_R->tickGame->PAUSE_GAME');
             DoubleShadow_R.game_O.tickPauseGame();
        } else if (DoubleShadow_R.gameState == DoubleShadow_R.END_GAME) {
             //console.log('DoubleShadow_R->tickGame->END_GAME');
             DoubleShadow_R.game_O.tickEndGame();
        } else if (DoubleShadow_R.gameState == DoubleShadow_R.DONT_GAME) {
             console.log('DoubleShadow_R->tickGame->DONT_GAME');
        } else {
             console.log('DoubleShadow_R->tickGame->ERR');
        }
    },

    // setTimeout позволяет вызвать функцию один раз через определённый интервал времени
    loop() {
        DoubleShadow_R.isLoop = true;
        DoubleShadow_R.setTimeoutCount = -1;
        //countLoop = countLoop + 1;
        //if (countLoop > 100000) countLoop = 0;

        // Задержка следующего вызова (пауза потока выполнения цикла) в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
        DoubleShadow_R.delaySleepGameMs = DoubleShadow_R.timer_O.getTickTimeThreadSleepGameMs();

        DoubleShadow_R.setTimeoutCount = setTimeout(function tick() {

            DoubleShadow_R.timer_O.updateTimeBeforeTick(); //
            DoubleShadow_R.tickGame();
            DoubleShadow_R.timer_O.updateTimeAfterTick();
            DoubleShadow_R.delaySleepGameMs = DoubleShadow_R.timer_O.getTickTimeThreadSleepGameMs();

            if (DoubleShadow_R.gameState == DoubleShadow_R.END_GAME) DoubleShadow_R.isLoop = false;
            if (DoubleShadow_R.isLoop) DoubleShadow_R.setTimeoutCount = setTimeout(tick, DoubleShadow_R.delaySleepGameMs);

        }, DoubleShadow_R.delaySleepGameMs);
        //console.log("DoubleShadow_R->loop() setTimeoutCount = " + DoubleShadow_R.setTimeoutCount);
    },

};
