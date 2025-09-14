/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name html5_sprites_immortal.js
 * @version created 19.07m.2025 
 * last modified 19.07m.2025
*/

/**
* НАЗНАЧЕНИЕ
*Заполняем двумерный массив html5SpritesCollection_R.sprites. Это набор объектов class Tile_for_load_Image_C
* В нем ссылки на картинки, символ картинки, название картинки.
* четыре типа картинок - приключения, земля, предметы, монстры
*
* Также готовим два типа вспомогательных массивов -карт
* html5SpritesCollection_R.GroundsMapChars - карта по символу выдает порядковый номер в массиве html5SpritesCollection_R.sprites
* html5SpritesCollection_R.GroundsMapString - карта по символу выдает название картинки.
* есть три карты для разных слоев земли, предметов, монстров
*
* Пример использования:
* html5SpritesCollection_R.sprites[_type, _index].Image;
* _type = html5SpritesCollection_R.GROUNDS , _index = html5SpritesCollection_R.GroundsMapChars.get(html5SpritesCollection_R.GROUND_FLOOR)
*/

class Html5SpritesImmortal_C {
    NAME = "html5SpritesImmortal_R";
    html5Canvas_R = null;
    PATH_TO_IMAGES = PathesBrowser_R.pathToImages_html5_sprites_immortal_js;
    MAX_COUNT = 3;
    sprites = new Array(1);
    constructor() {
    }
    iniM(html5Canvas_R) {
        this.sprites = new Array(this.MAX_COUNT),
            this.iniSprite(this.PATH_TO_IMAGES);
        this.iniSpriteString();
        this.html5Canvas_R = html5Canvas_R;
    }
    getSprite(index) {
        return this.sprites[index].Image;
    }
    getSpriteString(index) {
        return this.sprites[index].NameImage;
    }
    getHeightSprite(index) {
        return this.sprites[index].Image.height;
    }
    getWidthSprite(index) {
        return this.sprites[index].Image.width;
    }
    getLeftSprite(index, middle) {
        let width = this.sprites[index].Image.width;
        let left = middle - width / 2;
        return left;
    }
    iniSprite(path) {
        /*
        класс
        Sprite_С содержит поля:
        Image содержит картинку для
        Path      содержит путь по которому была загружена картинка
        NameImage    содержит название картинки
        */
        let length = this.sprites.length;
        // "The Image() constructor, taking two optional unsigned long, 
        // the width and the height of the resource, creates an instance 
        // of HTMLImageElement not inserted in a DOM tree."
        for (let i = 0; i < length; i++) {
            this.sprites[i] = new Sprite_Imm_C();
            this.sprites[i].Image = document.createElement('img');
            this.sprites[i].Image.src = path + i + ".png";
            this.sprites[i].PathToImage = path + i + ".png";
            this.sprites[i].NameImage = "Image str (картинка №) = " + i;
        }
    }
    iniSpriteString() {
        this.sprites[0].NameImage = "nothing(пустая область)"; // пустая область
        this.sprites[1].NameImage = "ghost(привидение)"; //1_monster_ghost     привидение
        this.sprites[2].NameImage = "dragon(дракон)"; //2_monster_dragon    дракон
    }
    drowSprite(index, imageLeft, imageTop, imageWidth = 0, imageHeight = 0) {
        let image = this.sprites[index].Image;
        this.html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
    }
}
