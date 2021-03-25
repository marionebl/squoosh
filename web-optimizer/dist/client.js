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
    /***/ './src/client.ts':
      /*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__,
      ) => {
        eval(
          "//@ts-ignore\nconst _worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"src_worker_ts\"), __webpack_require__.b));\n\nconsole.log(_worker);\n\nasync function loadImage(src) {\n  // Load image\n  const img = document.createElement('img');\n  img.src = src;\n  await new Promise(resolve => img.onload = resolve); // Make canvas same size as image\n\n  const canvas = document.createElement('canvas');\n  [canvas.width, canvas.height] = [img.width, img.height]; // Draw image onto canvas\n\n  const ctx = canvas.getContext('2d');\n  ctx.drawImage(img, 0, 0);\n  return ctx.getImageData(0, 0, img.width, img.height);\n}\n\nconst fileInput = document.querySelector('input');\nfileInput.addEventListener('change', async () => {\n  if (fileInput.files.length) {\n    const blobUrl = URL.createObjectURL(fileInput.files[0]);\n\n    _worker.postMessage(await loadImage(blobUrl));\n  }\n});\n\n_worker.addEventListener('message', e => {\n  const blob = new Blob([e.data], {\n    type: 'image/webp'\n  });\n  const blobURL = URL.createObjectURL(blob);\n  const img = document.createElement('img');\n  img.src = blobURL;\n  document.body.appendChild(img);\n});\n\nconsole.log(new URL(/* asset import */ __webpack_require__(/*! ./worker.ts */ \"./src/worker.ts\"), __webpack_require__.b));\n\n//# sourceURL=webpack://web-optimizer/./src/client.ts?",
        );

        /***/
      },

    /***/ './src/worker.ts':
      /*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "6881376a24e0bd484cf2.ts";\n\n//# sourceURL=webpack://web-optimizer/./src/worker.ts?',
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
  })(); /* webpack/runtime/load script */
  /******/
  /******/ /******/ (() => {
    /******/ var inProgress = {};
    /******/ var dataWebpackPrefix = 'web-optimizer:'; // loadScript function to load a script via script tag
    /******/ /******/ __webpack_require__.l = (url, done, key, chunkId) => {
      /******/ if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      /******/ var script, needAttach;
      /******/ if (key !== undefined) {
        /******/ var scripts = document.getElementsByTagName('script');
        /******/ for (var i = 0; i < scripts.length; i++) {
          /******/ var s = scripts[i];
          /******/ if (
            s.getAttribute('src') == url ||
            s.getAttribute('data-webpack') == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
          /******/
        }
        /******/
      }
      /******/ if (!script) {
        /******/ needAttach = true;
        /******/ script = document.createElement('script');
        /******/
        /******/ script.charset = 'utf-8';
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute('nonce', __webpack_require__.nc);
          /******/
        }
        /******/ script.setAttribute('data-webpack', dataWebpackPrefix + key);
        /******/ script.src = url;
        /******/
      }
      /******/ inProgress[url] = [done];
      /******/ var onScriptComplete = (prev, event) => {
        /******/ // avoid mem leaks in IE.
        /******/ script.onerror = script.onload = null;
        /******/ clearTimeout(timeout);
        /******/ var doneFns = inProgress[url];
        /******/ delete inProgress[url];
        /******/ script.parentNode && script.parentNode.removeChild(script);
        /******/ doneFns && doneFns.forEach((fn) => fn(event));
        /******/ if (prev) return prev(event);
        /******/
      };
      /******/ /******/ var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, {
          type: 'timeout',
          target: script,
        }),
        120000,
      );
      /******/ script.onerror = onScriptComplete.bind(null, script.onerror);
      /******/ script.onload = onScriptComplete.bind(null, script.onload);
      /******/ needAttach && document.head.appendChild(script);
      /******/
    };
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
  })(); /* webpack/runtime/jsonp chunk loading */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/
    /******/ /******/ /******/ /******/ var installedChunks = {
      /******/ client: 0,
      /******/
    };
    /******/
    /******/ __webpack_require__.f.j = (chunkId, promises) => {
      /******/ // JSONP chunk loading for javascript
      /******/ var installedChunkData = __webpack_require__.o(
        installedChunks,
        chunkId,
      )
        ? installedChunks[chunkId]
        : undefined;
      /******/ if (installedChunkData !== 0) {
        // 0 means "already installed".
        /******/
        /******/ // a Promise means "currently loading".
        /******/ if (installedChunkData) {
          /******/ promises.push(installedChunkData[2]);
          /******/
        } else {
          /******/ if (true) {
            // all chunks have JS
            /******/ // setup Promise in chunk cache
            /******/ var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] = [
                  resolve,
                  reject,
                ]),
            );
            /******/ promises.push((installedChunkData[2] = promise)); // start chunk loading
            /******/
            /******/ /******/ var url =
              __webpack_require__.p + __webpack_require__.u(chunkId); // create error before stack unwound to get useful stacktrace later
            /******/ /******/ var error = new Error();
            /******/ var loadingEnded = (event) => {
              /******/ if (__webpack_require__.o(installedChunks, chunkId)) {
                /******/ installedChunkData = installedChunks[chunkId];
                /******/ if (installedChunkData !== 0)
                  installedChunks[chunkId] = undefined;
                /******/ if (installedChunkData) {
                  /******/ var errorType =
                    event && (event.type === 'load' ? 'missing' : event.type);
                  /******/ var realSrc =
                    event && event.target && event.target.src;
                  /******/ error.message =
                    'Loading chunk ' +
                    chunkId +
                    ' failed.\n(' +
                    errorType +
                    ': ' +
                    realSrc +
                    ')';
                  /******/ error.name = 'ChunkLoadError';
                  /******/ error.type = errorType;
                  /******/ error.request = realSrc;
                  /******/ installedChunkData[1](error);
                  /******/
                }
                /******/
              }
              /******/
            };
            /******/ __webpack_require__.l(
              url,
              loadingEnded,
              'chunk-' + chunkId,
              chunkId,
            );
            /******/
          } else installedChunks[chunkId] = 0;
          /******/
        }
        /******/
      }
      /******/
    }; // no prefetching // no preloaded // no HMR // no HMR manifest // no on chunks loaded // install a JSONP callback for chunk loading
    /******/
    /******/ /******/
    /******/ /******/
    /******/ /******/
    /******/ /******/
    /******/ /******/
    /******/ /******/ var webpackJsonpCallback = (
      parentChunkLoadingFunction,
      data,
    ) => {
      /******/ var [chunkIds, moreModules, runtime] = data; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
      /******/ /******/ /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ for (moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__);
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkIds[i]] = 0;
        /******/
      }
      /******/
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (globalThis['webpackChunkweb_optimizer'] =
      globalThis['webpackChunkweb_optimizer'] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
    );
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
    './src/client.ts',
  );
  /******/
  /******/
})();
