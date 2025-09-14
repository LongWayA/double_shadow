/** 
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @author AnBr75
 * @name pathes_web.js
 * @version created 12.09m.2025 
 * last modified 12.09m.2025
*/

/**
 * НАЗНАЧЕНИЕ
 *  
 *  
*/

let PathesWeb_R = {

      NAME: "PathesWeb_R",

      HOME: 1,
      SERVER: 2,

      isServer:true,
      pathesState: 0, // 
      counterGet_counter_js: 'no',

      iniM() {

            console.log('PathesWeb_R->iniM');

            if (PathesWeb_R.isServer){ 
                  PathesWeb_R.pathesState = PathesWeb_R.SERVER;
            } else {
                   PathesWeb_R.pathesState = PathesWeb_R.HOME;
            }

            if (PathesWeb_R.pathesState == PathesWeb_R.HOME) {

                  PathesWeb_R.counterGet_counter_js = '/0_0_SQL_base/CountRequestsGet.php/?name=requests_double_shadow';

            } else if (PathesWeb_R.pathesState == PathesWeb_R.SERVER) {

               PathesWeb_R.counterGet_counter_js = 'https://alphagameset.ru/0_0_SQL_base/CountRequestsGet.php/?name=requests_double_shadow';

            }

      },
};

PathesWeb_R.iniM();