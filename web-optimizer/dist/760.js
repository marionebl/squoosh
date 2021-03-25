(() => {
  var e,
    t,
    r,
    n,
    a,
    i = {},
    o = {};
  function s(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { id: e, exports: {} });
    return i[e](r, r.exports, s), r.exports;
  }
  (s.m = i),
    (e =
      'function' == typeof Symbol
        ? Symbol('webpack then')
        : '__webpack_then__'),
    (t =
      'function' == typeof Symbol
        ? Symbol('webpack exports')
        : '__webpack_exports__'),
    (r = (e) => {
      e && (e.forEach((e) => e.r--), e.forEach((e) => (e.r-- ? e.r++ : e())));
    }),
    (n = (e) => !--e.r && e()),
    (a = (e, t) => (e ? e.push(t) : n(t))),
    (s.a = (i, o, s) => {
      var p,
        c,
        l,
        u = s && [],
        h = i.exports,
        f = !0,
        b = !1,
        m = (t, r, n) => {
          b ||
            ((b = !0),
            (r.r += t.length),
            t.map((t, a) => t[e](r, n)),
            (b = !1));
        },
        d = new Promise((e, t) => {
          (l = t), (c = () => (e(h), r(u), (u = 0)));
        });
      (d[t] = h),
        (d[e] = (e, t) => {
          if (f) return n(e);
          p && m(p, e, t), a(u, e), d.catch(t);
        }),
        (i.exports = d),
        o((i) => {
          if (!i) return c();
          var o, s;
          p = ((i) =>
            i.map((i) => {
              if (null !== i && 'object' == typeof i) {
                if (i[e]) return i;
                if (i.then) {
                  var o = [];
                  i.then((e) => {
                    (s[t] = e), r(o), (o = 0);
                  });
                  var s = { [e]: (e, t) => (a(o, e), i.catch(t)) };
                  return s;
                }
              }
              return { [e]: (e) => n(e), [t]: i };
            }))(i);
          var l = new Promise((e, r) => {
            ((o = () => e((s = p.map((e) => e[t])))).r = 0), m(p, o, r);
          });
          return o.r ? l : s;
        }).then(c, l),
        (f = !1);
    }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) &&
          !s.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), []))),
    (s.u = (e) => e + '.js'),
    (s.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + '');
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (s.p = e);
    })(),
    (() => {
      var e = { 760: 1 };
      s.f.i = (t, r) => {
        e[t] || importScripts(s.p + s.u(t));
      };
      var t = (globalThis.webpackChunkweb_optimizer =
          globalThis.webpackChunkweb_optimizer || []),
        r = t.push.bind(t);
      t.push = (t) => {
        var [n, a, i] = t;
        for (var o in a) s.o(a, o) && (s.m[o] = a[o]);
        for (i && i(s); n.length; ) e[n.pop()] = 1;
        r(t);
      };
    })(),
    (s.v = (e, t, r, n) => {
      var a = fetch(s.p + '' + r + '.module.wasm');
      return 'function' == typeof WebAssembly.instantiateStreaming
        ? WebAssembly.instantiateStreaming(a, n).then((t) =>
            Object.assign(e, t.instance.exports),
          )
        : a
            .then((e) => e.arrayBuffer())
            .then((e) => WebAssembly.instantiate(e, n))
            .then((t) => Object.assign(e, t.instance.exports));
    }),
    self.addEventListener('message', async (e) => {
      self.postMessage(
        await (async function (e) {
          const { timed: t } = await s.e(754).then(s.bind(s, 754)),
            r =
              ((await s.e(117).then(s.bind(s, 117))).default,
              (await s.e(846).then(s.bind(s, 846))).default);
          return await r(e, {
            width: 1600,
            height: (1600 / e.width) * e.height,
            method: 'lanczos3',
            fitMethod: 'stretch',
            premultiply: !0,
            linearRGB: !0,
          });
        })(e.data),
      );
    });
})();
