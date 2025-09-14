/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name frames.js
 * @version created 20.07m.2025 
 * last modified 20.07m.2025
*/

/**
* НАЗНАЧЕНИЕ
* Определяем рамки областей вывода на экран
*/

class Frames_C {
    html5Canvas_R = null;
    static NAME = "Frames_C";
    // рамки
    // Общая рамка экрана вывода графики   
    editorFrame = {
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    };
    // Область вывода карты   
    mapFrame = {
        tile_SIZE_WIDTH: 50,
        tile_SIZE_HEIGHT: 50,
        HEIGHT_PX: 500,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    };
    // Область вывода выбора элементов карты  
    tilesPanelFrame = {
        tile_SIZE_WIDTH: 50,
        tile_SIZE_HEIGHT: 50,
        HEIGHT_PX: 190,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
        Ground_X0: 0,
        Ground_Y0: 0,
        Ground_Y_Max: 0,
        Item_X0: 0,
        Item_Y0: 0,
        Item_Y_Max: 0,
        Monster_X0: 0,
        Monster_Y0: 0,
        Monster_Y_Max: 0,
    };
    // Область печати сообщений редактора   
    printFrame = {
        height_px: 0,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    };
    constructor() {
    }
    iniFrame() {
       // Общая рамка экрана вывода графики>>>>>>>>>>>>>>>>>>>>>>
        this.editorFrame.x0 = 0; // нулевая координата по горизонтали общего окна. т.е. самая левая точка.
        this.editorFrame.y0 = 0; // нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
        this.editorFrame.width = (this.html5Canvas_R).widthCanvas; // ширина окна берется из канвы сайта
        this.editorFrame.height = (this.html5Canvas_R).heightCanvas; // высота окна берется из канвы сайта
        this.editorFrame.X_Max = this.editorFrame.x0 + this.editorFrame.width; // максимальная координата по горизонтали.
        this.editorFrame.Y_Max = this.editorFrame.y0 + this.editorFrame.height; // максимальная координата по вертикали. Вправо вниз
        // console.log('DDME_this.js: this.editorFrame.x0 = ' + this.editorFrame.x0);
        // console.log('DDME_this.js: this.editorFrame.x0 = ' + this.editorFrame.x0);
        // console.log('DDME_this.js: this.editorFrame.width = ' + this.editorFrame.width);
        // console.log('DDME_this.js: this.editorFrame.height = ' + this.editorFrame.height);
        // console.log('DDME_this.js: this.editorFrame.X_Max = ' + this.editorFrame.X_Max);
        // console.log('DDME_this.js: this.editorFrame.Y_Max = ' + this.editorFrame.Y_Max);
        // Общая рамка экрана вывода графики<<<<<<<<<<<<<<<<<<<<<<
        //------------------------------------------------------------------------
        //------------------------------------------------------------------------
        // Область вывода карты>>>>>>>>>>>>>>>>>>>>>>
        this.mapFrame.x0 = this.editorFrame.x0;
        this.mapFrame.y0 = this.editorFrame.y0;
        this.mapFrame.width = this.editorFrame.width;
        this.mapFrame.height = this.mapFrame.HEIGHT_PX;
        if (this.mapFrame.height > this.editorFrame.height) {
            this.mapFrame.height = this.editorFrame.height;
        }
        this.mapFrame.X_Max = this.mapFrame.x0 + this.mapFrame.width;
        this.mapFrame.Y_Max = this.mapFrame.y0 + this.mapFrame.height;
        // Область вывода выбора элементов карты>>>>>>>>>>>>>>>>>>>>>>       
        this.tilesPanelFrame.x0 = this.mapFrame.x0;
        this.tilesPanelFrame.y0 = this.mapFrame.Y_Max;
        this.tilesPanelFrame.width = this.editorFrame.width;
        this.tilesPanelFrame.height = this.tilesPanelFrame.HEIGHT_PX;
        if (this.tilesPanelFrame.height > this.editorFrame.height) {
            this.tilesPanelFrame.height = this.editorFrame.height;
        }
        this.tilesPanelFrame.X_Max = this.tilesPanelFrame.x0 + this.tilesPanelFrame.width;
        this.tilesPanelFrame.Y_Max = this.tilesPanelFrame.y0 + this.tilesPanelFrame.height;
        this.tilesPanelFrame.Ground_X0 = this.tilesPanelFrame.x0; // задаем горизонтальное расстояние для тайлов слоя граунд
        this.tilesPanelFrame.Ground_Y0 = this.tilesPanelFrame.y0 + 10; // задаем вертикальное расстояние для тайлов слоя граунд
        this.tilesPanelFrame.Ground_Y_Max = this.tilesPanelFrame.Ground_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT; // задаем вертикальное расстояние для тайлов слоя граунд
        this.tilesPanelFrame.Item_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Item_Y0 = this.tilesPanelFrame.Ground_Y_Max + 10;
        this.tilesPanelFrame.Item_Y_Max = this.tilesPanelFrame.Item_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
        this.tilesPanelFrame.Monster_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Monster_Y0 = this.tilesPanelFrame.Item_Y_Max + 10;
        this.tilesPanelFrame.Monster_Y_Max = this.tilesPanelFrame.Monster_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
       // Область печати сообщений редактора>>>>>>>>>>>>>>>>>>>>>>        
        this.printFrame.height_px = this.editorFrame.Y_Max - this.tilesPanelFrame.Y_Max;
        this.printFrame.x0 = this.tilesPanelFrame.x0;
        this.printFrame.y0 = this.tilesPanelFrame.Y_Max;
        this.printFrame.width = this.editorFrame.width;
        this.printFrame.height = this.printFrame.height_px;
        this.printFrame.X_Max = this.printFrame.x0 + this.printFrame.width;
        this.printFrame.Y_Max = this.printFrame.y0 + this.printFrame.height;
    }
    iniM(html5Canvas_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.iniFrame();
    }
    drowEditorFrame() {
        this.html5Canvas_R.drawRect(this.editorFrame.x0, this.editorFrame.y0, this.editorFrame.width, this.editorFrame.height, 2, 'blue', 0);
    }
    drowMapFrame() {
        this.html5Canvas_R.drawRect(this.mapFrame.x0, this.mapFrame.y0, this.mapFrame.width, this.mapFrame.height, 2, 'blue', 0);
    }
    drowTilesPanelFrame() {
        this.html5Canvas_R.drawRect(this.tilesPanelFrame.x0, this.tilesPanelFrame.y0, this.tilesPanelFrame.width, this.tilesPanelFrame.height, 2, 'blue', 0);
    }
    drowPrintFrameFrame() {
        this.html5Canvas_R.drawRect(this.printFrame.x0, this.printFrame.y0, this.printFrame.width, this.printFrame.height, 2, 'blue', 0);
    }
}
