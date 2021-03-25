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
  ['src_resize_ts'],
  {
    /***/ '../codecs/resize/pkg/squoosh_resize_bg.wasm':
      /*!***************************************************!*\
  !*** ../codecs/resize/pkg/squoosh_resize_bg.wasm ***!
  \***************************************************/
      /***/ (module, exports, __webpack_require__) => {
        'use strict';
        eval(
          'module.exports = __webpack_require__.v(exports, module.id, "d1b68024f9931949400d");\n\n//# sourceURL=webpack://web-optimizer/../codecs/resize/pkg/squoosh_resize_bg.wasm?',
        );

        /***/
      },

    /***/ './src/meta.ts':
      /*!*********************!*\
  !*** ./src/meta.ts ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"workerResizeMethods\": () => (/* binding */ workerResizeMethods)\n/* harmony export */ });\n/**\n * Copyright 2020 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nconst workerResizeMethods = ['triangle', 'catrom', 'mitchell', 'lanczos3', 'hqx'];\n\n//# sourceURL=webpack://web-optimizer/./src/meta.ts?",
        );

        /***/
      },

    /***/ './src/resize.ts':
      /*!***********************!*\
  !*** ./src/resize.ts ***!
  \***********************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getContainOffsets": () => (/* binding */ getContainOffsets),\n/* harmony export */   "resizeWasmBridge": () => (/* binding */ resizeWasmBridge),\n/* harmony export */   "default": () => (/* binding */ resize)\n/* harmony export */ });\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta */ "./src/meta.ts");\n/* harmony import */ var _codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../codecs/resize/pkg/squoosh_resize_bg */ "../codecs/resize/pkg/squoosh_resize_bg.wasm");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__]);\n_codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n/**\n * Copyright 2020 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nfunction getContainOffsets(sw, sh, dw, dh) {\n  const currentAspect = sw / sh;\n  const endAspect = dw / dh;\n\n  if (endAspect > currentAspect) {\n    const newSh = sw / endAspect;\n    const newSy = (sh - newSh) / 2;\n    return {\n      sw,\n      sh: newSh,\n      sx: 0,\n      sy: newSy\n    };\n  }\n\n  const newSw = sh * endAspect;\n  const newSx = (sw - newSw) / 2;\n  return {\n    sh,\n    sw: newSw,\n    sx: newSx,\n    sy: 0\n  };\n}\nlet cachegetUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.memory.buffer) {\n    cachegetUint8Memory0 = new Uint8Array(_codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.memory.buffer);\n  }\n\n  return cachegetUint8Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm0(arg, malloc) {\n  const ptr = malloc(arg.length * 1);\n  getUint8Memory0().set(arg, ptr / 1);\n  WASM_VECTOR_LEN = arg.length;\n  return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.memory.buffer) {\n    cachegetInt32Memory0 = new Int32Array(_codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.memory.buffer);\n  }\n\n  return cachegetInt32Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n * @param {Uint8Array} input_image\n * @param {number} input_width\n * @param {number} input_height\n * @param {number} output_width\n * @param {number} output_height\n * @param {number} typ_idx\n * @param {boolean} premultiply\n * @param {boolean} color_space_conversion\n * @returns {Uint8Array}\n */\n\n\nfunction resizeWasmBridge(input_image, input_width, input_height, output_width, output_height, typ_idx, premultiply, color_space_conversion) {\n  var ptr0 = passArray8ToWasm0(input_image, _codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_malloc);\n  var len0 = WASM_VECTOR_LEN;\n  (0,_codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.resize)(8, ptr0, len0, input_width, input_height, output_width, output_height, typ_idx, premultiply, color_space_conversion);\n  var r0 = getInt32Memory0()[8 / 4 + 0];\n  var r1 = getInt32Memory0()[8 / 4 + 1];\n  var v1 = getArrayU8FromWasm0(r0, r1).slice();\n\n  (0,_codecs_resize_pkg_squoosh_resize_bg__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_free)(r0, r1 * 1);\n\n  return v1;\n}\n\nfunction crop(data, sx, sy, sw, sh) {\n  const inputPixels = new Uint32Array(data.data.buffer); // Copy within the same buffer for speed and memory efficiency.\n\n  for (let y = 0; y < sh; y += 1) {\n    const start = (y + sy) * data.width + sx;\n    inputPixels.copyWithin(y * sw, start, start + sw);\n  }\n\n  return new ImageData(new Uint8ClampedArray(inputPixels.buffer.slice(0, sw * sh * 4)), sw, sh);\n}\n\nasync function resize(data, opts) {\n  let input = data;\n\n  if (opts.fitMethod === \'contain\') {\n    const {\n      sx,\n      sy,\n      sw,\n      sh\n    } = getContainOffsets(data.width, data.height, opts.width, opts.height);\n    input = crop(input, Math.round(sx), Math.round(sy), Math.round(sw), Math.round(sh));\n  }\n\n  const result = resizeWasmBridge(new Uint8Array(input.data.buffer), input.width, input.height, opts.width, opts.height, _meta__WEBPACK_IMPORTED_MODULE_0__.workerResizeMethods.indexOf(\'lanczos3\'), opts.premultiply, opts.linearRGB);\n  return new ImageData(new Uint8ClampedArray(result.buffer), opts.width, opts.height);\n}\n});\n\n//# sourceURL=webpack://web-optimizer/./src/resize.ts?',
        );

        /***/
      },
  },
]);
