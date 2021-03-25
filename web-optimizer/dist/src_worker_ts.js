/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/worker.ts':
      /*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__,
      ) => {
        eval(
          '// export type ProcessorWorkerApi = typeof workerApi;\n// \'as any\' to work around the way our client code has insight into worker code\nasync function handleImage(imageData) {\n  const {\n    timed\n  } = await __webpack_require__.e(/*! import() */ "src_timed_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./timed */ "./src/timed.ts"));\n  const webpEncode = (await __webpack_require__.e(/*! import() */ "src_webpEncode_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./webpEncode */ "./src/webpEncode.ts"))).default;\n  const resize = (await __webpack_require__.e(/*! import() */ "src_resize_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resize */ "./src/resize.ts"))).default;\n  const resizedImageData = await resize(imageData, {\n    width: 1600,\n    height: 1600 / imageData.width * imageData.height,\n    method: \'lanczos3\',\n    fitMethod: \'stretch\',\n    premultiply: true,\n    linearRGB: true\n  });\n  const webpImageData = await webpEncode(resizedImageData, {\n    quality: 70,\n    target_size: 0,\n    target_PSNR: 0,\n    method: 4,\n    sns_strength: 50,\n    filter_strength: 60,\n    filter_sharpness: 0,\n    filter_type: 1,\n    partitions: 0,\n    segments: 4,\n    pass: 1,\n    show_compressed: 0,\n    preprocessing: 0,\n    autofilter: 0,\n    partition_limit: 0,\n    alpha_compression: 1,\n    alpha_filtering: 1,\n    alpha_quality: 100,\n    lossless: 0,\n    exact: 0,\n    image_hint: 0,\n    emulate_jpeg_size: 0,\n    thread_level: 0,\n    low_memory: 0,\n    near_lossless: 100,\n    use_delta_palette: 0,\n    use_sharp_yuv: 0\n  });\n  return webpImageData; // const workerApi = {\n  //   webpEncode(\n  //     ...args: Parameters<typeof webpEncode>\n  //   ): ReturnType<typeof webpEncode> {\n  //     return timed(\'webpEncode\', () => webpEncode(...args));\n  //   },\n  //   resize(\n  //     ...args: Parameters<typeof resize>\n  //   ): ReturnType<typeof resize> {\n  //     return timed(\'resize\', () => resize(...args));\n  //   },\n  // };\n}\n\nself.addEventListener(\'message\', async e => {\n  //@ts-ignore\n  self.postMessage(await handleImage(e.data));\n});\n\n//# sourceURL=webpack://web-optimizer/./src/worker.ts?',
        );

        /***/
      },

    /******/
  }; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId, // no module.loaded needed
      /******/ /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    ); // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = __webpack_modules__; /* webpack/runtime/async module */
  /******/
  /************************************************************************/
  /******/ /******/ (() => {
    /******/ var webpackThen =
      typeof Symbol === 'function'
        ? Symbol('webpack then')
        : '__webpack_then__';
    /******/ var webpackExports =
      typeof Symbol === 'function'
        ? Symbol('webpack exports')
        : '__webpack_exports__';
    /******/ var completeQueue = (queue) => {
      /******/ if (queue) {
        /******/ queue.forEach((fn) => fn.r--);
        /******/ queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
        /******/
      }
      /******/
    };
    /******/ var completeFunction = (fn) => !--fn.r && fn();
    /******/ var queueFunction = (queue, fn) =>
      queue ? queue.push(fn) : completeFunction(fn);
    /******/ var wrapDeps = (deps) =>
      deps.map((dep) => {
        /******/ if (dep !== null && typeof dep === 'object') {
          /******/ if (dep[webpackThen]) return dep;
          /******/ if (dep.then) {
            /******/ var queue = [];
            /******/ dep.then((r) => {
              /******/ obj[webpackExports] = r;
              /******/ completeQueue(queue);
              /******/ queue = 0;
              /******/
            });
            /******/ var obj = {
              [webpackThen]: (fn, reject) => (
                queueFunction(queue, fn), dep.catch(reject)
              ),
            };
            /******/ return obj;
            /******/
          }
          /******/
        }
        /******/ return {
          [webpackThen]: (fn) => completeFunction(fn),
          [webpackExports]: dep,
        };
        /******/
      });
    /******/ __webpack_require__.a = (module, body, hasAwait) => {
      /******/ var queue = hasAwait && [];
      /******/ var exports = module.exports;
      /******/ var currentDeps;
      /******/ var outerResolve;
      /******/ var reject;
      /******/ var isEvaluating = true;
      /******/ var nested = false;
      /******/ var whenAll = (deps, onResolve, onReject) => {
        /******/ if (nested) return;
        /******/ nested = true;
        /******/ onResolve.r += deps.length;
        /******/ deps.map((dep, i) => dep[webpackThen](onResolve, onReject));
        /******/ nested = false;
        /******/
      };
      /******/ var promise = new Promise((resolve, rej) => {
        /******/ reject = rej;
        /******/ outerResolve = () => (
          resolve(exports), completeQueue(queue), (queue = 0)
        );
        /******/
      });
      /******/ promise[webpackExports] = exports;
      /******/ promise[webpackThen] = (fn, rejectFn) => {
        /******/ if (isEvaluating) {
          return completeFunction(fn);
        }
        /******/ if (currentDeps) whenAll(currentDeps, fn, rejectFn);
        /******/ queueFunction(queue, fn);
        /******/ promise.catch(rejectFn);
        /******/
      };
      /******/ module.exports = promise;
      /******/ body((deps) => {
        /******/ if (!deps) return outerResolve();
        /******/ currentDeps = wrapDeps(deps);
        /******/ var fn, result;
        /******/ var promise = new Promise((resolve, reject) => {
          /******/ fn = () =>
            resolve((result = currentDeps.map((d) => d[webpackExports])));
          /******/ fn.r = 0;
          /******/ whenAll(currentDeps, fn, reject);
          /******/
        });
        /******/ return fn.r ? promise : result;
        /******/
      }).then(outerResolve, reject);
      /******/ isEvaluating = false;
      /******/
    };
    /******/
  })(); /* webpack/runtime/define property getters */
  /******/
  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/ensure chunk */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.f = {}; // This file contains only the entry chunk. // The chunk loading function for additional chunks
    /******/ /******/ /******/ __webpack_require__.e = (chunkId) => {
      /******/ return Promise.all(
        Object.keys(__webpack_require__.f).reduce((promises, key) => {
          /******/ __webpack_require__.f[key](chunkId, promises);
          /******/ return promises;
          /******/
        }, []),
      );
      /******/
    };
    /******/
  })(); /* webpack/runtime/get javascript chunk filename */
  /******/
  /******/ /******/ (() => {
    /******/ // This function allow to reference async chunks
    /******/ __webpack_require__.u = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return '' + chunkId + '.js';
      /******/
    };
    /******/
  })(); /* webpack/runtime/global */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })(); /* webpack/runtime/publicPath */
  /******/
  /******/ /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + '';
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName('script');
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    } // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ /******/ /******/ if (!scriptUrl)
      throw new Error('Automatic publicPath is not supported in this browser');
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/');
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })(); /* webpack/runtime/importScripts chunk loading */
  /******/
  /******/ /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded chunks
    /******/ // "1" means "already loaded"
    /******/ var installedChunks = {
      /******/ src_worker_ts: 1,
      /******/
    }; // importScripts chunk loading
    /******/
    /******/ /******/ var installChunk = (data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ for (var moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__);
      /******/ while (chunkIds.length)
        /******/ installedChunks[chunkIds.pop()] = 1;
      /******/ parentChunkLoadingFunction(data);
      /******/
    };
    /******/ __webpack_require__.f.i = (chunkId, promises) => {
      /******/ // "1" is the signal for "already loaded"
      /******/ if (!installedChunks[chunkId]) {
        /******/ if (true) {
          // all chunks have JS
          /******/ importScripts(
            __webpack_require__.p + __webpack_require__.u(chunkId),
          );
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (globalThis['webpackChunkweb_optimizer'] =
      globalThis['webpackChunkweb_optimizer'] || []);
    /******/ var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(
      chunkLoadingGlobal,
    );
    /******/ chunkLoadingGlobal.push = installChunk;
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
  })(); /* webpack/runtime/wasm chunk loading */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.v = (
      exports,
      wasmModuleId,
      wasmModuleHash,
      importsObj,
    ) => {
      /******/ var req = fetch(
        __webpack_require__.p + '' + wasmModuleHash + '.module.wasm',
      );
      /******/ if (typeof WebAssembly.instantiateStreaming === 'function') {
        /******/ return WebAssembly.instantiateStreaming(req, importsObj)
          /******/ .then((res) => Object.assign(exports, res.instance.exports));
        /******/
      }
      /******/ return req
        /******/ .then((x) => x.arrayBuffer())
        /******/ .then((bytes) => WebAssembly.instantiate(bytes, importsObj))
        /******/ .then((res) => Object.assign(exports, res.instance.exports));
      /******/
    };
    /******/
  })(); // startup // Load entry module and return exports // This entry module can't be inlined because the eval devtool is used.
  /******/
  /************************************************************************/
  /******/
  /******/ /******/ /******/ /******/ var __webpack_exports__ = __webpack_require__(
    './src/worker.ts',
  );
  /******/
  /******/
})();
