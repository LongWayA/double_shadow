/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name index.js
 * @version created 18.07m.2025 
 * last modified 18.07m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  запускаем цикл игры
 *  обрабатываем нажатия кнопок
*/

let Index_R = {

    NAME: "Index_R",
    // состояние игры. может быть старт, продолжение , пауза, конец.
    DONT_GAME: 0,
    START_GAME: 1,
    CONTINUE_GAME: 2,
    PAUSE_GAME: 3,
    END_GAME: 4,

    timer_O: new Timer_C(),
    buttons_O: new Buttons_C(),
    game_O: new Game2d_C(),

    setTimeoutCount: -1,
    delaySleepGameMs: 0,
    isLoop: false,
    gameState: 0,

    iniM() {
        console.log('Index_R->iniM');
        Index_R.gameState = Index_R.DONT_GAME;
        Index_R.timer_O.iniM();
        Index_R.buttons_O.iniM();
        Index_R.game_O.iniM(Index_R.timer_O);
    },

    startGameButton() {
        console.log('Index_R->startGameButton');
        Index_R.gameState = Index_R.START_GAME;
        Index_R.buttons_O.startButtonAttribute();
        Index_R.timer_O.iniTicksPerSecond(5);
        Index_R.startMenu();
    },

    continueGameButton() {
        console.log('Index_R->continueGameButton');
        Index_R.gameState = Index_R.CONTINUE_GAME;
        Index_R.buttons_O.continueButtonAttribute();
        Index_R.timer_O.iniTicksPerSecond(2);
    },

    pauseGameButton() {
        console.log('Index_R->pauseGameButton');
        Index_R.gameState = Index_R.PAUSE_GAME;
        Index_R.buttons_O.pauseButtonAttribute();
        Index_R.timer_O.iniTicksPerSecond(0.5);
    },

    endGameButton() {
        console.log('Index_R->endGameButton');
        Index_R.gameState = Index_R.END_GAME;
        Index_R.buttons_O.endButtonAttribute();
    },

    testButton() {
        console.log('Index_R->testButton');
    },
    
    startMenu() {

        if (!Index_R.isLoop) {
            console.log('Index_R->startMenu->call Index_R.loop()');
            Index_R.loop();
        }
    },

    tickGame() {
        
        if (Index_R.gameState == Index_R.START_GAME) {
             //console.log('Index_R->tickGame->START_GAME');
             Index_R.game_O.tickStartGame();
        } else if (Index_R.gameState == Index_R.CONTINUE_GAME) {
             //console.log('Index_R->tickGame->CONTINUE_GAME');
             Index_R.game_O.tickContinueGame();
        } else if (Index_R.gameState == Index_R.PAUSE_GAME) {
             //console.log('Index_R->tickGame->PAUSE_GAME');
             Index_R.game_O.tickPauseGame();
        } else if (Index_R.gameState == Index_R.END_GAME) {
             //console.log('Index_R->tickGame->END_GAME');
             Index_R.game_O.tickEndGame();
        } else if (Index_R.gameState == Index_R.DONT_GAME) {
             console.log('Index_R->tickGame->DONT_GAME');
        } else {
             console.log('Index_R->tickGame->ERR');
        }
    },

    // setTimeout позволяет вызвать функцию один раз через определённый интервал времени
    loop() {
        Index_R.isLoop = true;
        Index_R.setTimeoutCount = -1;

        //Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
        Index_R.delaySleepGameMs = Index_R.timer_O.getTickTimeThreadSleepGameMs();

        Index_R.setTimeoutCount = setTimeout(function tick() {

            Index_R.timer_O.updateTimeBeforeTick(); //
            Index_R.tickGame();
            Index_R.timer_O.updateTimeAfterTick();
            Index_R.delaySleepGameMs = Index_R.timer_O.getTickTimeThreadSleepGameMs();

            if (Index_R.gameState == Index_R.END_GAME) Index_R.isLoop = false;
            if (Index_R.isLoop) Index_R.setTimeoutCount = setTimeout(tick, Index_R.delaySleepGameMs);

        }, Index_R.delaySleepGameMs);
        //console.log("Index_R->loop() setTimeoutCount = " + Index_R.setTimeoutCount);
    },

};
