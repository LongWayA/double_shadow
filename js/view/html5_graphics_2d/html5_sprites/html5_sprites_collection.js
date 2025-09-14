/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name html5_sprites_collection.js
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


class Html5SpritesCollection_C {
    static NAME = "Html5SpritesCollection_C";
    static PATH_TO_IMAGES = PathesBrowser_R.pathToImages_html5_sprites_collection_js;
    static REZERV = 0;
    static ADVENTURES = 1;
    static GROUNDS = 2;
    static ITEMS = 3;
    static CREATURES = 4;
    static REZERV_MAX_COUNT = 1;
    static ADVENTURES_MAX_COUNT = 25;
    static GROUNDS_MAX_COUNT = 8;
    static ITEMS_MAX_COUNT = 20;
    static CREATURES_MAX_COUNT = 15;

    //GROUNDS
    // так кодируются тайлы для слоя земли
    static GROUND_NOTHING = 0;      // пустая область
    static GROUND_STONE = 1;        // непробиваемый камень
    static GROUND_SEND = 2;         // копаемый песок
    static GROUND_FLOOR = 3;        // проходимый пол
    static GROUND_WALL = 4;         // стена подземелья
    static GROUND_WALL_FORTIFED = 5;// укрепленная стена подземелья
    static GROUND_VEIN_GOLD = 6;    // золотая жила
    static GROUND_VEIN_GEM = 7;     // драгоценный камень жила

   //ITEMS
    // так кодируются тайлы для слоя предметов
    static ITEMS_NOTHING = 0;
    static ITEMS_RING = 1;
    static ITEMS_SWORD_1 = 2;
    static ITEMS_SWORD_2 = 3;
    static ITEMS_SWORD_3 = 4;
    static ITEMS_SHIELD = 5;
    static ITEMS_ARMOR_1 = 6;
    static ITEMS_ARMOR_2 = 7;
    static ITEMS_ARMOR_3 = 8;
    static ITEMS_ARMOR_4 = 9;
    static ITEMS_ARMOR_5 = 10;
    static ITEMS_ARMOR_6 = 11;
    static ITEMS_FLOWER_1 = 12;
    static ITEMS_FLOWER_2 = 13;
    static ITEMS_FLOWER_3 = 14;
    static ITEMS_FLOWER_4 = 15;
    static ITEMS_FLOWER_5 = 16;
    static ITEMS_FLOWER_6 = 17;
    static ITEMS_POTION = 18;
    static ITEMS_DOOR = 19;

    //CREATURES
    // так кодируются тайлы для слоя монстров   
    static CREATURES_NOTHING = 0;
    static CREATURES_GHOST = 1;
    static CREATURES_DRAGON = 2;
    static CREATURES_GOBLIN = 3;
    static CREATURES_HARPY = 4;
    static CREATURES_DRUID = 5;
    static CREATURES_VARNEY = 6;
    static CREATURES_LICH = 7;
    static CREATURES_MEDUSA = 8;
    static CREATURES_MINOTAUR = 9;
    static CREATURES_GENIE = 10;
    static CREATURES_FIGHTER = 11;
    static CREATURES_GARGOYLE = 12;
    static CREATURES_SKELETON = 13;
    static CREATURES_TITAN = 14;
    sprites = new Array(5);
    constructor() {
    }
    iniM() {
        // Массив содержит картинки-тайлы для отображения на карте       
        this.sprites[Html5SpritesCollection_C.ADVENTURES] = new Array(Html5SpritesCollection_C.ADVENTURES_MAX_COUNT);
        this.sprites[Html5SpritesCollection_C.GROUNDS] = new Array(Html5SpritesCollection_C.GROUNDS_MAX_COUNT);
        this.sprites[Html5SpritesCollection_C.ITEMS] = new Array(Html5SpritesCollection_C.ITEMS_MAX_COUNT);
        this.sprites[Html5SpritesCollection_C.CREATURES] = new Array(Html5SpritesCollection_C.CREATURES_MAX_COUNT);
         //инициализируем массивы с картинками       
        this.iniSprite(Html5SpritesCollection_C.ADVENTURES, Html5SpritesCollection_C.PATH_TO_IMAGES + "/adventures/ad_");
        this.iniSprite(Html5SpritesCollection_C.GROUNDS, Html5SpritesCollection_C.PATH_TO_IMAGES + "/grounds/gr_");
        this.iniSprite(Html5SpritesCollection_C.ITEMS, Html5SpritesCollection_C.PATH_TO_IMAGES + "/items/it_");
        this.iniSprite(Html5SpritesCollection_C.CREATURES, Html5SpritesCollection_C.PATH_TO_IMAGES + "/creatures/cr_");
        this.iniSpriteString();
    }
    getSprite(type, index) {
        return this.sprites[type][index].Image;
    }
    getSpriteString(type, index) {
        return this.sprites[type][index].NameImage;
    }
    getHeightSprite(type, index) {
        return this.sprites[type][index].Image.height;
    }
    getWidthSprite(type, index) {
        return this.sprites[type][index].Image.width;
    }
    getLeftSprite(type, index, middle) {
        let width = this.sprites[type][index].Image.width;
        let left = middle - width / 2;
        return left;
    }
    iniSprite(type, path) {
        /*
        класс
        Sprite_С содержит поля:
        Image содержит картинку для
        Path      содержит путь по которому была загружена картинка
        NameImage    содержит название картинки
        */       
        let length = this.sprites[type].length;
        // https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement :
        // "The Image() constructor, taking two optional unsigned long, 
        // the width and the height of the resource, creates an instance 
        // of HTMLImageElement not inserted in a DOM tree."       
        for (let i = 0; i < length; i++) {
            this.sprites[type][i] = new Sprite_С();
            this.sprites[type][i].Image = document.createElement('img');
            this.sprites[type][i].PathToImage = path + i + ".png";
            this.sprites[type][i].Image.src = this.sprites[type][i].PathToImage;
            this.sprites[type][i].NameImage = "Image str (картинка №) = " + i;
        }
    }

    //инициализируем массивы с картинками   
    iniSpriteString() {
       //GROUNDS
        // массив по номерам тайлов  имена тайлов для слоя земли        
        this.sprites[Html5SpritesCollection_C.GROUNDS][0].NameImage = "nothing(пустая область)";
        this.sprites[Html5SpritesCollection_C.GROUNDS][1].NameImage = "stone(камень)";
        this.sprites[Html5SpritesCollection_C.GROUNDS][2].NameImage = "sand(копаемый песок)";
        this.sprites[Html5SpritesCollection_C.GROUNDS][3].NameImage = "floor(проходимый пол)";
        this.sprites[Html5SpritesCollection_C.GROUNDS][4].NameImage = "wall(стена подземелья) ";
        this.sprites[Html5SpritesCollection_C.GROUNDS][5].NameImage = "fortified wall(укрепленная стена подземелья) ";
        this.sprites[Html5SpritesCollection_C.GROUNDS][6].NameImage = "gold vein(золотая жила)";
        this.sprites[Html5SpritesCollection_C.GROUNDS][7].NameImage = "gem vein(драгоценный камень жила)";

        //ITEMS
        //массив по номерам тайлов их название для слоя предметов
        this.sprites[Html5SpritesCollection_C.ITEMS][0].NameImage = "nothing(пустая область)";
        this.sprites[Html5SpritesCollection_C.ITEMS][1].NameImage = "ring(кольцо)";
        this.sprites[Html5SpritesCollection_C.ITEMS][2].NameImage = "sword(первый меч)";
        this.sprites[Html5SpritesCollection_C.ITEMS][3].NameImage = "sword2(второй меч)";
        this.sprites[Html5SpritesCollection_C.ITEMS][4].NameImage = "sword3(третий меч-не прозрачный фон)";
        this.sprites[Html5SpritesCollection_C.ITEMS][5].NameImage = "shield(щит)";
        this.sprites[Html5SpritesCollection_C.ITEMS][6].NameImage = "armor(первый доспех)";
        this.sprites[Html5SpritesCollection_C.ITEMS][7].NameImage = "armor2(второй доспех)";
        this.sprites[Html5SpritesCollection_C.ITEMS][8].NameImage = "armor3(третий доспех)";
        this.sprites[Html5SpritesCollection_C.ITEMS][9].NameImage = "armor4(четвертый доспех)";
        this.sprites[Html5SpritesCollection_C.ITEMS][10].NameImage = "armor5(пятый доспех)";
        this.sprites[Html5SpritesCollection_C.ITEMS][11].NameImage = "armor6(шестой доспех-не прозрачный фон)";
        this.sprites[Html5SpritesCollection_C.ITEMS][12].NameImage = "flower(первый цветок)";
        this.sprites[Html5SpritesCollection_C.ITEMS][13].NameImage = "flower2(второй цветок)";
        this.sprites[Html5SpritesCollection_C.ITEMS][14].NameImage = "flower3(третий цветок)";
        this.sprites[Html5SpritesCollection_C.ITEMS][15].NameImage = "flower4(четвертый цветок)";
        this.sprites[Html5SpritesCollection_C.ITEMS][16].NameImage = "flower5(пятый цветок)";
        this.sprites[Html5SpritesCollection_C.ITEMS][17].NameImage = "flower6(шестой цветок-не прозрачный фон)";
        this.sprites[Html5SpritesCollection_C.ITEMS][18].NameImage = "potion(элексир)";
        this.sprites[Html5SpritesCollection_C.ITEMS][19].NameImage = "door(дверь)";
        
        //CREATURES
        //массив по номерам тайлов их название для слоя монстров
        this.sprites[Html5SpritesCollection_C.CREATURES][0].NameImage = "nothing(пустая область)";
        this.sprites[Html5SpritesCollection_C.CREATURES][1].NameImage = "ghost(привидение)";
        this.sprites[Html5SpritesCollection_C.CREATURES][2].NameImage = "dragon(дракон)";
        this.sprites[Html5SpritesCollection_C.CREATURES][3].NameImage = "goblin(гоблин)";
        this.sprites[Html5SpritesCollection_C.CREATURES][4].NameImage = "harpy(гарпия)";
        this.sprites[Html5SpritesCollection_C.CREATURES][5].NameImage = "druid(друид)";
        this.sprites[Html5SpritesCollection_C.CREATURES][6].NameImage = "varney(псоглавый)";
        this.sprites[Html5SpritesCollection_C.CREATURES][7].NameImage = "lich(лич)";
        this.sprites[Html5SpritesCollection_C.CREATURES][8].NameImage = "medusa(медуза)";
        this.sprites[Html5SpritesCollection_C.CREATURES][9].NameImage = "minotaur(минотавр)";
        this.sprites[Html5SpritesCollection_C.CREATURES][10].NameImage = "genie(джин)";
        this.sprites[Html5SpritesCollection_C.CREATURES][11].NameImage = "fighter(файтер-рыцарь)";
        this.sprites[Html5SpritesCollection_C.CREATURES][12].NameImage = "gargoyle(гаргулия)";
        this.sprites[Html5SpritesCollection_C.CREATURES][13].NameImage = "skeleton(скелет)";
        this.sprites[Html5SpritesCollection_C.CREATURES][14].NameImage = "titan(титан)";
    }
}

