(globalThis.webpackChunkweb_optimizer =
  globalThis.webpackChunkweb_optimizer || []).push([
  [846],
  {
    835: (t, e, n) => {
      'use strict';
      t.exports = n.v(e, t.id, '6fd9f1fb81b98374ab55');
    },
    110: (t, e, n) => {
      'use strict';
      n.d(e, { L: () => r });
      const r = ['triangle', 'catrom', 'mitchell', 'lanczos3', 'hqx'];
    },
    846: (t, e, n) => {
      'use strict';
      n.a(t, async (t) => {
        n.r(e),
          n.d(e, {
            getContainOffsets: () => s,
            resizeWasmBridge: () => c,
            default: () => d,
          });
        var r = n(110),
          i = n(835),
          a = t([i]);
        function s(t, e, n, r) {
          const i = n / r;
          if (i > t / e) {
            const n = t / i;
            return { sw: t, sh: n, sx: 0, sy: (e - n) / 2 };
          }
          const a = e * i;
          return { sh: e, sw: a, sx: (t - a) / 2, sy: 0 };
        }
        i = (a.then ? await a : a)[0];
        let u = null;
        function f() {
          return (
            (null !== u && u.buffer === i.memory.buffer) ||
              (u = new Uint8Array(i.memory.buffer)),
            u
          );
        }
        let o = 0,
          h = null;
        function l() {
          return (
            (null !== h && h.buffer === i.memory.buffer) ||
              (h = new Int32Array(i.memory.buffer)),
            h
          );
        }
        function c(t, e, n, r, a, s, u, h) {
          var c = (function (t, e) {
              const n = e(1 * t.length);
              return f().set(t, n / 1), (o = t.length), n;
            })(t, i.__wbindgen_malloc),
            d = o;
          (0, i.resize)(8, c, d, e, n, r, a, s, u, h);
          var w,
            b,
            m = l()[2],
            y = l()[3],
            g = ((w = m), (b = y), f().subarray(w / 1, w / 1 + b)).slice();
          return (0, i.__wbindgen_free)(m, 1 * y), g;
        }
        async function d(t, e) {
          let n = t;
          if ('contain' === e.fitMethod) {
            const { sx: r, sy: i, sw: a, sh: u } = s(
              t.width,
              t.height,
              e.width,
              e.height,
            );
            n = (function (t, e, n, r, i) {
              const a = new Uint32Array(t.data.buffer);
              for (let s = 0; s < i; s += 1) {
                const i = (s + n) * t.width + e;
                a.copyWithin(s * r, i, i + r);
              }
              return new ImageData(
                new Uint8ClampedArray(a.buffer.slice(0, r * i * 4)),
                r,
                i,
              );
            })(n, Math.round(r), Math.round(i), Math.round(a), Math.round(u));
          }
          const i = c(
            new Uint8Array(n.data.buffer),
            n.width,
            n.height,
            e.width,
            e.height,
            r.L.indexOf('lanczos3'),
            e.premultiply,
            e.linearRGB,
          );
          return new ImageData(
            new Uint8ClampedArray(i.buffer),
            e.width,
            e.height,
          );
        }
      });
    },
  },
]);
