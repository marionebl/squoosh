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
  ['src_webpEncode_ts'],
  {
    /***/ './src/webpEncode.ts':
      /*!***************************!*\
  !*** ./src/webpEncode.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ encode)\n/* harmony export */ });\n/* harmony import */ var _codecs_webp_enc_webp_enc_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../codecs/webp/enc/webp_enc.wasm */ "../codecs/webp/enc/webp_enc.wasm");\n/**\n * Copyright 2020 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n// @ts-ignore\n // @ts-ignore\n\nfunction initEmscriptenModule( // @ts-ignore\nmoduleFactory, wasmUrl, workerUrl) {\n  return moduleFactory({\n    // Just to be safe, don\'t automatically invoke any wasm functions\n    noInitialRun: true,\n    locateFile: url => {\n      if (url.endsWith(\'.wasm\')) return wasmUrl;\n      if (url.endsWith(\'.worker.js\')) return workerUrl;\n      throw Error(\'Unknown url in locateFile \' + url);\n    }\n  });\n}\n\n// import wasmUrl from \'url:codecs/webp/enc/webp_enc.wasm\';\nlet emscriptenModule;\n\nasync function init() {\n  const webpEncoder = await __webpack_require__.e(/*! import() */ "codecs_webp_enc_webp_enc_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../codecs/webp/enc/webp_enc.js */ "../codecs/webp/enc/webp_enc.js"));\n  return initEmscriptenModule(webpEncoder.default, _codecs_webp_enc_webp_enc_wasm__WEBPACK_IMPORTED_MODULE_0__.default);\n}\n\nasync function encode(data, options) {\n  if (!emscriptenModule) emscriptenModule = init();\n  const module = await emscriptenModule;\n  const result = module.encode(data.data, data.width, data.height, options);\n  if (!result) throw new Error(\'Encoding error.\');\n  return result.buffer;\n}\n\n//# sourceURL=webpack://web-optimizer/./src/webpEncode.ts?',
        );

        /***/
      },

    /***/ '../codecs/webp/enc/webp_enc.wasm':
      /*!****************************************!*\
  !*** ../codecs/webp/enc/webp_enc.wasm ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "effd1b2ce1f46888cce53d539d49ea4a.wasm");\n\n//# sourceURL=webpack://web-optimizer/../codecs/webp/enc/webp_enc.wasm?',
        );

        /***/
      },
  },
]);
