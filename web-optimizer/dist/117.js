(globalThis.webpackChunkweb_optimizer =
  globalThis.webpackChunkweb_optimizer || []).push([
  [117],
  {
    117: (e, n, t) => {
      'use strict';
      let i;
      async function r(e, n) {
        i ||
          (i = (async function () {
            return (0, (await t.e(997).then(t.bind(t, 997))).default)({
              noInitialRun: !0,
              locateFile: (e) => {
                if (e.endsWith('.wasm'))
                  return 'dist/effd1b2ce1f46888cce53d539d49ea4a.wasm';
                if (!e.endsWith('.worker.js'))
                  throw Error('Unknown url in locateFile ' + e);
              },
            });
          })());
        const r = (await i).encode(e.data, e.width, e.height, n);
        if (!r) throw new Error('Encoding error.');
        return r.buffer;
      }
      t.r(n), t.d(n, { default: () => r });
    },
  },
]);
