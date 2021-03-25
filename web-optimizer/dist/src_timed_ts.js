/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis['webpackChunkweb_optimizer'] =
  globalThis['webpackChunkweb_optimizer'] || []).push([
  ['src_timed_ts'],
  {
    /***/ './src/timed.ts':
      /*!**********************!*\
  !*** ./src/timed.ts ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "timed": () => (/* binding */ timed)\n/* harmony export */ });\n/**\n * Copyright 2020 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nfunction timed(name, func) {\n  console.time(name);\n  return func().finally(() => console.timeEnd(name));\n}\n\n//# sourceURL=webpack://web-optimizer/./src/timed.ts?',
        );

        /***/
      },
  },
]);
