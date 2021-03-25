(() => {
  var e,
    t,
    r,
    n,
    o,
    i = {},
    a = {};
  function s(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { id: e, exports: {} });
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
    (o = (e, t) => (e ? e.push(t) : n(t))),
    (s.a = (i, a, s) => {
      var p,
        c,
        u,
        f = s && [],
        l = i.exports,
        b = !0,
        h = !1,
        m = (t, r, n) => {
          h ||
            ((h = !0),
            (r.r += t.length),
            t.map((t, o) => t[e](r, n)),
            (h = !1));
        },
        y = new Promise((e, t) => {
          (u = t), (c = () => (e(l), r(f), (f = 0)));
        });
      (y[t] = l),
        (y[e] = (e, t) => {
          if (b) return n(e);
          p && m(p, e, t), o(f, e), y.catch(t);
        }),
        (i.exports = y),
        a((i) => {
          if (!i) return c();
          var a, s;
          p = ((i) =>
            i.map((i) => {
              if (null !== i && 'object' == typeof i) {
                if (i[e]) return i;
                if (i.then) {
                  var a = [];
                  i.then((e) => {
                    (s[t] = e), r(a), (a = 0);
                  });
                  var s = { [e]: (e, t) => (o(a, e), i.catch(t)) };
                  return s;
                }
              }
              return { [e]: (e) => n(e), [t]: i };
            }))(i);
          var u = new Promise((e, r) => {
            ((a = () => e((s = p.map((e) => e[t])))).r = 0), m(p, a, r);
          });
          return a.r ? u : s;
        }).then(c, u),
        (b = !1);
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
      var e = { 617: 1 };
      s.f.i = (t, r) => {
        e[t] || importScripts(s.p + s.u(t));
      };
      var t = (self.webpackChunkweb_optimizer =
          self.webpackChunkweb_optimizer || []),
        r = t.push.bind(t);
      t.push = (t) => {
        var [n, o, i] = t;
        for (var a in o) s.o(o, a) && (s.m[a] = o[a]);
        for (i && i(s); n.length; ) e[n.pop()] = 1;
        r(t);
      };
    })(),
    (s.v = (e, t, r, n) => {
      var o = fetch(s.p + '' + r + '.module.wasm');
      return 'function' == typeof WebAssembly.instantiateStreaming
        ? WebAssembly.instantiateStreaming(o, n).then((t) =>
            Object.assign(e, t.instance.exports),
          )
        : o
            .then((e) => e.arrayBuffer())
            .then((e) => WebAssembly.instantiate(e, n))
            .then((t) => Object.assign(e, t.instance.exports));
    }),
    self.addEventListener('message', function (e) {
      console.log(e);
    });
})();
