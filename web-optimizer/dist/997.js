(globalThis.webpackChunkweb_optimizer =
  globalThis.webpackChunkweb_optimizer || []).push([
  [997],
  {
    997: (n, r, e) => {
      'use strict';
      e.r(r), e.d(r, { default: () => t });
      const t =
        ('file:///Users/tsebastian/Development/shipit/squoosh/codecs/webp/enc/webp_enc.js',
        function (n) {
          var r, e, t;
          (n = n || {}),
            r || (r = void 0 !== n ? n : {}),
            (r.ready = new Promise(function (n, r) {
              (e = n), (t = r);
            }));
          var o,
            i = {};
          for (o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
          var a,
            u = '';
          (u = self.location.href),
            (u =
              0 !==
              (u =
                'file:///Users/tsebastian/Development/shipit/squoosh/codecs/webp/enc/webp_enc.js').indexOf(
                'blob:',
              )
                ? u.substr(0, u.lastIndexOf('/') + 1)
                : ''),
            (a = function (n) {
              var r = new XMLHttpRequest();
              return (
                r.open('GET', n, !1),
                (r.responseType = 'arraybuffer'),
                r.send(null),
                new Uint8Array(r.response)
              );
            });
          var f,
            c = r.printErr || console.warn.bind(console);
          for (o in i) i.hasOwnProperty(o) && (r[o] = i[o]);
          (i = null),
            r.wasmBinary && (f = r.wasmBinary),
            r.noExitRuntime && r.noExitRuntime,
            'object' != typeof WebAssembly &&
              V('no native wasm support detected');
          var s,
            l,
            p,
            h,
            v,
            y,
            d,
            m,
            g,
            w,
            b = !1,
            T = new TextDecoder('utf8'),
            A = new TextDecoder('utf-16le');
          function _(n, r) {
            var e = n >> 1;
            for (r = e + r / 2; !(e >= r) && y[e]; ) ++e;
            return A.decode(h.subarray(n, e << 1));
          }
          function W(n, r, e) {
            if ((void 0 === e && (e = 2147483647), 2 > e)) return 0;
            var t = r;
            e = (e -= 2) < 2 * n.length ? e / 2 : n.length;
            for (var o = 0; o < e; ++o) (v[r >> 1] = n.charCodeAt(o)), (r += 2);
            return (v[r >> 1] = 0), r - t;
          }
          function P(n) {
            return 2 * n.length;
          }
          function E(n, r) {
            for (var e = 0, t = ''; !(e >= r / 4); ) {
              var o = d[(n + 4 * e) >> 2];
              if (0 == o) break;
              ++e,
                65536 <= o
                  ? ((o -= 65536),
                    (t += String.fromCharCode(
                      55296 | (o >> 10),
                      56320 | (1023 & o),
                    )))
                  : (t += String.fromCharCode(o));
            }
            return t;
          }
          function k(n, r, e) {
            if ((void 0 === e && (e = 2147483647), 4 > e)) return 0;
            var t = r;
            e = t + e - 4;
            for (var o = 0; o < n.length; ++o) {
              var i = n.charCodeAt(o);
              if (
                (55296 <= i &&
                  57343 >= i &&
                  (i =
                    (65536 + ((1023 & i) << 10)) | (1023 & n.charCodeAt(++o))),
                (d[r >> 2] = i),
                (r += 4) + 4 > e)
              )
                break;
            }
            return (d[r >> 2] = 0), r - t;
          }
          function C(n) {
            for (var r = 0, e = 0; e < n.length; ++e) {
              var t = n.charCodeAt(e);
              55296 <= t && 57343 >= t && ++e, (r += 4);
            }
            return r;
          }
          function F(n) {
            (l = n),
              (r.HEAP8 = p = new Int8Array(n)),
              (r.HEAP16 = v = new Int16Array(n)),
              (r.HEAP32 = d = new Int32Array(n)),
              (r.HEAPU8 = h = new Uint8Array(n)),
              (r.HEAPU16 = y = new Uint16Array(n)),
              (r.HEAPU32 = m = new Uint32Array(n)),
              (r.HEAPF32 = g = new Float32Array(n)),
              (r.HEAPF64 = w = new Float64Array(n));
          }
          var R = r.INITIAL_MEMORY || 16777216;
          (s = r.wasmMemory
            ? r.wasmMemory
            : new WebAssembly.Memory({ initial: R / 65536, maximum: 32768 })) &&
            (l = s.buffer),
            (R = l.byteLength),
            F(l);
          var I,
            U = [],
            O = [],
            D = [],
            S = [];
          function x() {
            var n = r.preRun.shift();
            U.unshift(n);
          }
          var M = 0,
            j = null,
            H = null;
          function V(n) {
            throw (
              (r.onAbort && r.onAbort(n),
              c(n),
              (b = !0),
              (n = new WebAssembly.RuntimeError(
                'abort(' + n + '). Build with -s ASSERTIONS=1 for more info.',
              )),
              t(n),
              n)
            );
          }
          function B() {
            var n = z;
            return String.prototype.startsWith
              ? n.startsWith('data:application/octet-stream;base64,')
              : 0 === n.indexOf('data:application/octet-stream;base64,');
          }
          (r.preloadedImages = {}), (r.preloadedAudios = {});
          var z = 'webp_enc.wasm';
          if (!B()) {
            var q = z;
            z = r.locateFile ? r.locateFile(q, u) : u + q;
          }
          function N() {
            try {
              if (f) return new Uint8Array(f);
              if (a) return a(z);
              throw 'both async and sync fetching of the wasm failed';
            } catch (n) {
              V(n);
            }
          }
          function L(n) {
            for (; 0 < n.length; ) {
              var e = n.shift();
              if ('function' == typeof e) e(r);
              else {
                var t = e.L;
                'number' == typeof t
                  ? void 0 === e.G
                    ? I.get(t)()
                    : I.get(t)(e.G)
                  : t(void 0 === e.G ? null : e.G);
              }
            }
          }
          var G = {};
          function J(n) {
            for (; n.length; ) {
              var r = n.pop();
              n.pop()(r);
            }
          }
          function K(n) {
            return this.fromWireType(m[n >> 2]);
          }
          var X = {},
            Y = {},
            Z = {};
          function $(n) {
            if (void 0 === n) return '_unknown';
            var r = (n = n.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
            return 48 <= r && 57 >= r ? '_' + n : n;
          }
          function Q(n, r) {
            return (
              (n = $(n)),
              new Function(
                'body',
                'return function ' +
                  n +
                  '() {\n    "use strict";    return body.apply(this, arguments);\n};\n',
              )(r)
            );
          }
          function nn(n) {
            var r = Error,
              e = Q(n, function (r) {
                (this.name = n),
                  (this.message = r),
                  void 0 !== (r = Error(r).stack) &&
                    (this.stack =
                      this.toString() +
                      '\n' +
                      r.replace(/^Error(:[^\n]*)?\n/, ''));
              });
            return (
              (e.prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.toString = function () {
                return void 0 === this.message
                  ? this.name
                  : this.name + ': ' + this.message;
              }),
              e
            );
          }
          var rn = void 0;
          function en(n, r, e) {
            function t(r) {
              if ((r = e(r)).length !== n.length)
                throw new rn('Mismatched type converter count');
              for (var t = 0; t < n.length; ++t) cn(n[t], r[t]);
            }
            n.forEach(function (n) {
              Z[n] = r;
            });
            var o = Array(r.length),
              i = [],
              a = 0;
            r.forEach(function (n, r) {
              Y.hasOwnProperty(n)
                ? (o[r] = Y[n])
                : (i.push(n),
                  X.hasOwnProperty(n) || (X[n] = []),
                  X[n].push(function () {
                    (o[r] = Y[n]), ++a === i.length && t(o);
                  }));
            }),
              0 === i.length && t(o);
          }
          function tn(n) {
            switch (n) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError('Unknown type size: ' + n);
            }
          }
          var on = void 0;
          function an(n) {
            for (var r = ''; h[n]; ) r += on[h[n++]];
            return r;
          }
          var un = void 0;
          function fn(n) {
            throw new un(n);
          }
          function cn(n, r, e) {
            if (((e = e || {}), !('argPackAdvance' in r)))
              throw new TypeError(
                'registerType registeredInstance requires argPackAdvance',
              );
            var t = r.name;
            if (
              (n ||
                fn(
                  'type "' +
                    t +
                    '" must have a positive integer typeid pointer',
                ),
              Y.hasOwnProperty(n))
            ) {
              if (e.P) return;
              fn("Cannot register type '" + t + "' twice");
            }
            (Y[n] = r),
              delete Z[n],
              X.hasOwnProperty(n) &&
                ((r = X[n]),
                delete X[n],
                r.forEach(function (n) {
                  n();
                }));
          }
          var sn = [],
            ln = [
              {},
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ];
          function pn(n) {
            4 < n && 0 == --ln[n].H && ((ln[n] = void 0), sn.push(n));
          }
          function hn(n) {
            switch (n) {
              case void 0:
                return 1;
              case null:
                return 2;
              case !0:
                return 3;
              case !1:
                return 4;
              default:
                var r = sn.length ? sn.pop() : ln.length;
                return (ln[r] = { H: 1, value: n }), r;
            }
          }
          function vn(n, e, t) {
            r.hasOwnProperty(n)
              ? ((void 0 === t ||
                  (void 0 !== r[n].F && void 0 !== r[n].F[t])) &&
                  fn("Cannot register public name '" + n + "' twice"),
                (function (n, e) {
                  var t = r;
                  if (void 0 === t[n].F) {
                    var o = t[n];
                    (t[n] = function () {
                      return (
                        t[n].F.hasOwnProperty(arguments.length) ||
                          fn(
                            "Function '" +
                              e +
                              "' called with an invalid number of arguments (" +
                              arguments.length +
                              ') - expects one of (' +
                              t[n].F +
                              ')!',
                          ),
                        t[n].F[arguments.length].apply(this, arguments)
                      );
                    }),
                      (t[n].F = []),
                      (t[n].F[o.J] = o);
                  }
                })(n, n),
                r.hasOwnProperty(t) &&
                  fn(
                    'Cannot register multiple overloads of a function with the same number of arguments (' +
                      t +
                      ')!',
                  ),
                (r[n].F[t] = e))
              : ((r[n] = e), void 0 !== t && (r[n].X = t));
          }
          function yn(n, r, e) {
            switch (r) {
              case 0:
                return function (n) {
                  return this.fromWireType((e ? p : h)[n]);
                };
              case 1:
                return function (n) {
                  return this.fromWireType((e ? v : y)[n >> 1]);
                };
              case 2:
                return function (n) {
                  return this.fromWireType((e ? d : m)[n >> 2]);
                };
              default:
                throw new TypeError('Unknown integer type: ' + n);
            }
          }
          function dn(n) {
            var r = an((n = On(n)));
            return Un(n), r;
          }
          function mn(n, r) {
            var e = Y[n];
            return void 0 === e && fn(r + ' has unknown type ' + dn(n)), e;
          }
          function gn(n) {
            if (null === n) return 'null';
            var r = typeof n;
            return 'object' === r || 'array' === r || 'function' === r
              ? n.toString()
              : '' + n;
          }
          function wn(n, r) {
            switch (r) {
              case 2:
                return function (n) {
                  return this.fromWireType(g[n >> 2]);
                };
              case 3:
                return function (n) {
                  return this.fromWireType(w[n >> 3]);
                };
              default:
                throw new TypeError('Unknown float type: ' + n);
            }
          }
          function bn(n, e) {
            var t =
              -1 != (n = an(n)).indexOf('j')
                ? (function (n, e) {
                    0 <= n.indexOf('j') ||
                      V(
                        'Assertion failed: getDynCaller should only be called with i64 sigs',
                      );
                    var t = [];
                    return function () {
                      t.length = arguments.length;
                      for (var o = 0; o < arguments.length; o++)
                        t[o] = arguments[o];
                      return -1 != n.indexOf('j')
                        ? t && t.length
                          ? r['dynCall_' + n].apply(null, [e].concat(t))
                          : r['dynCall_' + n].call(null, e)
                        : I.get(e).apply(null, t);
                    };
                  })(n, e)
                : I.get(e);
            return (
              'function' != typeof t &&
                fn('unknown function pointer with signature ' + n + ': ' + e),
              t
            );
          }
          var Tn = void 0;
          function An(n, r, e) {
            switch (r) {
              case 0:
                return e
                  ? function (n) {
                      return p[n];
                    }
                  : function (n) {
                      return h[n];
                    };
              case 1:
                return e
                  ? function (n) {
                      return v[n >> 1];
                    }
                  : function (n) {
                      return y[n >> 1];
                    };
              case 2:
                return e
                  ? function (n) {
                      return d[n >> 2];
                    }
                  : function (n) {
                      return m[n >> 2];
                    };
              default:
                throw new TypeError('Unknown integer type: ' + n);
            }
          }
          var _n = {};
          function Wn() {
            return 'object' == typeof globalThis
              ? globalThis
              : Function('return this')();
          }
          var Pn = {};
          rn = r.InternalError = nn('InternalError');
          for (var En = Array(256), kn = 0; 256 > kn; ++kn)
            En[kn] = String.fromCharCode(kn);
          (on = En),
            (un = r.BindingError = nn('BindingError')),
            (r.count_emval_handles = function () {
              for (var n = 0, r = 5; r < ln.length; ++r)
                void 0 !== ln[r] && ++n;
              return n;
            }),
            (r.get_first_emval = function () {
              for (var n = 5; n < ln.length; ++n)
                if (void 0 !== ln[n]) return ln[n];
              return null;
            }),
            (Tn = r.UnboundTypeError = nn('UnboundTypeError')),
            O.push({
              L: function () {
                Rn();
              },
            });
          var Cn = {
            w: function () {},
            m: function (n) {
              var r = G[n];
              delete G[n];
              var e = r.R,
                t = r.S,
                o = r.I;
              en(
                [n],
                o
                  .map(function (n) {
                    return n.O;
                  })
                  .concat(
                    o.map(function (n) {
                      return n.U;
                    }),
                  ),
                function (n) {
                  var i = {};
                  return (
                    o.forEach(function (r, e) {
                      var t = n[e],
                        a = r.M,
                        u = r.N,
                        f = n[e + o.length],
                        c = r.T,
                        s = r.V;
                      i[r.K] = {
                        read: function (n) {
                          return t.fromWireType(a(u, n));
                        },
                        write: function (n, r) {
                          var e = [];
                          c(s, n, f.toWireType(e, r)), J(e);
                        },
                      };
                    }),
                    [
                      {
                        name: r.name,
                        fromWireType: function (n) {
                          var r,
                            e = {};
                          for (r in i) e[r] = i[r].read(n);
                          return t(n), e;
                        },
                        toWireType: function (n, r) {
                          for (var o in i)
                            if (!(o in r))
                              throw new TypeError(
                                'Missing field:  "' + o + '"',
                              );
                          var a = e();
                          for (o in i) i[o].write(a, r[o]);
                          return null !== n && n.push(t, a), a;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: K,
                        D: t,
                      },
                    ]
                  );
                },
              );
            },
            s: function (n, r, e, t, o) {
              var i = tn(e);
              cn(n, {
                name: (r = an(r)),
                fromWireType: function (n) {
                  return !!n;
                },
                toWireType: function (n, r) {
                  return r ? t : o;
                },
                argPackAdvance: 8,
                readValueFromPointer: function (n) {
                  if (1 === e) var t = p;
                  else if (2 === e) t = v;
                  else {
                    if (4 !== e)
                      throw new TypeError('Unknown boolean type size: ' + r);
                    t = d;
                  }
                  return this.fromWireType(t[n >> i]);
                },
                D: null,
              });
            },
            r: function (n, r) {
              cn(n, {
                name: (r = an(r)),
                fromWireType: function (n) {
                  var r = ln[n].value;
                  return pn(n), r;
                },
                toWireType: function (n, r) {
                  return hn(r);
                },
                argPackAdvance: 8,
                readValueFromPointer: K,
                D: null,
              });
            },
            o: function (n, r, e, t) {
              function o() {}
              (e = tn(e)),
                (r = an(r)),
                (o.values = {}),
                cn(n, {
                  name: r,
                  constructor: o,
                  fromWireType: function (n) {
                    return this.constructor.values[n];
                  },
                  toWireType: function (n, r) {
                    return r.value;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: yn(r, e, t),
                  D: null,
                }),
                vn(r, o);
            },
            f: function (n, r, e) {
              var t = mn(n, 'enum');
              (r = an(r)),
                (n = t.constructor),
                (t = Object.create(t.constructor.prototype, {
                  value: { value: e },
                  constructor: { value: Q(t.name + '_' + r, function () {}) },
                })),
                (n.values[e] = t),
                (n[r] = t);
            },
            k: function (n, r, e) {
              (e = tn(e)),
                cn(n, {
                  name: (r = an(r)),
                  fromWireType: function (n) {
                    return n;
                  },
                  toWireType: function (n, r) {
                    if ('number' != typeof r && 'boolean' != typeof r)
                      throw new TypeError(
                        'Cannot convert "' + gn(r) + '" to ' + this.name,
                      );
                    return r;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: wn(r, e),
                  D: null,
                });
            },
            i: function (n, e, t, o, i, a) {
              var u = (function (n, r) {
                for (var e = [], t = 0; t < n; t++) e.push(d[(r >> 2) + t]);
                return e;
              })(e, t);
              (n = an(n)),
                (i = bn(o, i)),
                vn(
                  n,
                  function () {
                    !(function (n, r) {
                      var e = [],
                        t = {};
                      throw (
                        (r.forEach(function n(r) {
                          t[r] ||
                            Y[r] ||
                            (Z[r] ? Z[r].forEach(n) : (e.push(r), (t[r] = !0)));
                        }),
                        new Tn(n + ': ' + e.map(dn).join([', '])))
                      );
                    })('Cannot call ' + n + ' due to unbound types', u);
                  },
                  e - 1,
                ),
                en([], u, function (t) {
                  var o = n,
                    u = n;
                  t = [t[0], null].concat(t.slice(1));
                  var f = i,
                    c = t.length;
                  2 > c &&
                    fn(
                      "argTypes array size mismatch! Must at least get return value and 'this' types!",
                    );
                  for (
                    var s = null !== t[1] && !1, l = !1, p = 1;
                    p < t.length;
                    ++p
                  )
                    if (null !== t[p] && void 0 === t[p].D) {
                      l = !0;
                      break;
                    }
                  var h = 'void' !== t[0].name,
                    v = '',
                    y = '';
                  for (p = 0; p < c - 2; ++p)
                    (v += (0 !== p ? ', ' : '') + 'arg' + p),
                      (y += (0 !== p ? ', ' : '') + 'arg' + p + 'Wired');
                  (u =
                    'return function ' +
                    $(u) +
                    '(' +
                    v +
                    ') {\nif (arguments.length !== ' +
                    (c - 2) +
                    ") {\nthrowBindingError('function " +
                    u +
                    " called with ' + arguments.length + ' arguments, expected " +
                    (c - 2) +
                    " args!');\n}\n"),
                    l && (u += 'var destructors = [];\n');
                  var d = l ? 'destructors' : 'null';
                  for (
                    v = 'throwBindingError invoker fn runDestructors retType classParam'.split(
                      ' ',
                    ),
                      f = [fn, f, a, J, t[0], t[1]],
                      s &&
                        (u +=
                          'var thisWired = classParam.toWireType(' +
                          d +
                          ', this);\n'),
                      p = 0;
                    p < c - 2;
                    ++p
                  )
                    (u +=
                      'var arg' +
                      p +
                      'Wired = argType' +
                      p +
                      '.toWireType(' +
                      d +
                      ', arg' +
                      p +
                      '); // ' +
                      t[p + 2].name +
                      '\n'),
                      v.push('argType' + p),
                      f.push(t[p + 2]);
                  if (
                    (s && (y = 'thisWired' + (0 < y.length ? ', ' : '') + y),
                    (u +=
                      (h ? 'var rv = ' : '') +
                      'invoker(fn' +
                      (0 < y.length ? ', ' : '') +
                      y +
                      ');\n'),
                    l)
                  )
                    u += 'runDestructors(destructors);\n';
                  else
                    for (p = s ? 1 : 2; p < t.length; ++p)
                      (c = 1 === p ? 'thisWired' : 'arg' + (p - 2) + 'Wired'),
                        null !== t[p].D &&
                          ((u +=
                            c + '_dtor(' + c + '); // ' + t[p].name + '\n'),
                          v.push(c + '_dtor'),
                          f.push(t[p].D));
                  if (
                    (h &&
                      (u +=
                        'var ret = retType.fromWireType(rv);\nreturn ret;\n'),
                    v.push(u + '}\n'),
                    (t = (function (n) {
                      var r = Function;
                      if (!(r instanceof Function))
                        throw new TypeError(
                          'new_ called with constructor type ' +
                            typeof r +
                            ' which is not a function',
                        );
                      var e = Q(
                        r.name || 'unknownFunctionName',
                        function () {},
                      );
                      return (
                        (e.prototype = r.prototype),
                        (e = new e()),
                        (n = r.apply(e, n)) instanceof Object ? n : e
                      );
                    })(v).apply(null, f)),
                    (p = e - 1),
                    !r.hasOwnProperty(o))
                  )
                    throw new rn('Replacing nonexistant public symbol');
                  return (
                    void 0 !== r[o].F && void 0 !== p
                      ? (r[o].F[p] = t)
                      : ((r[o] = t), (r[o].J = p)),
                    []
                  );
                });
            },
            d: function (n, r, e, t, o) {
              function i(n) {
                return n;
              }
              (r = an(r)), -1 === o && (o = 4294967295);
              var a = tn(e);
              if (0 === t) {
                var u = 32 - 8 * e;
                i = function (n) {
                  return (n << u) >>> u;
                };
              }
              var f = -1 != r.indexOf('unsigned');
              cn(n, {
                name: r,
                fromWireType: i,
                toWireType: function (n, e) {
                  if ('number' != typeof e && 'boolean' != typeof e)
                    throw new TypeError(
                      'Cannot convert "' + gn(e) + '" to ' + this.name,
                    );
                  if (e < t || e > o)
                    throw new TypeError(
                      'Passing a number "' +
                        gn(e) +
                        '" from JS side to C/C++ side to an argument of type "' +
                        r +
                        '", which is outside the valid range [' +
                        t +
                        ', ' +
                        o +
                        ']!',
                    );
                  return f ? e >>> 0 : 0 | e;
                },
                argPackAdvance: 8,
                readValueFromPointer: An(r, a, 0 !== t),
                D: null,
              });
            },
            c: function (n, r, e) {
              function t(n) {
                var r = m;
                return new o(l, r[1 + (n >>= 2)], r[n]);
              }
              var o = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
              ][r];
              cn(
                n,
                {
                  name: (e = an(e)),
                  fromWireType: t,
                  argPackAdvance: 8,
                  readValueFromPointer: t,
                },
                { P: !0 },
              );
            },
            l: function (n, r) {
              var e = 'std::string' === (r = an(r));
              cn(n, {
                name: r,
                fromWireType: function (n) {
                  var r = m[n >> 2];
                  if (e)
                    for (var t = n + 4, o = 0; o <= r; ++o) {
                      var i = n + 4 + o;
                      if (o == r || 0 == h[i]) {
                        if (t) {
                          for (var a = t + (i - t), u = t; !(u >= a) && h[u]; )
                            ++u;
                          t = T.decode(h.subarray(t, u));
                        } else t = '';
                        if (void 0 === f) var f = t;
                        else (f += String.fromCharCode(0)), (f += t);
                        t = i + 1;
                      }
                    }
                  else {
                    for (f = Array(r), o = 0; o < r; ++o)
                      f[o] = String.fromCharCode(h[n + 4 + o]);
                    f = f.join('');
                  }
                  return Un(n), f;
                },
                toWireType: function (n, r) {
                  r instanceof ArrayBuffer && (r = new Uint8Array(r));
                  var t = 'string' == typeof r;
                  t ||
                    r instanceof Uint8Array ||
                    r instanceof Uint8ClampedArray ||
                    r instanceof Int8Array ||
                    fn('Cannot pass non-string to std::string');
                  var o = (e && t
                      ? function () {
                          for (var n = 0, e = 0; e < r.length; ++e) {
                            var t = r.charCodeAt(e);
                            55296 <= t &&
                              57343 >= t &&
                              (t =
                                (65536 + ((1023 & t) << 10)) |
                                (1023 & r.charCodeAt(++e))),
                              127 >= t
                                ? ++n
                                : (n =
                                    2047 >= t
                                      ? n + 2
                                      : 65535 >= t
                                      ? n + 3
                                      : n + 4);
                          }
                          return n;
                        }
                      : function () {
                          return r.length;
                        })(),
                    i = In(4 + o + 1);
                  if (((m[i >> 2] = o), e && t))
                    !(function (n, r, e) {
                      var t = h;
                      if (0 < e) {
                        e = r + e - 1;
                        for (var o = 0; o < n.length; ++o) {
                          var i = n.charCodeAt(o);
                          if (
                            (55296 <= i &&
                              57343 >= i &&
                              (i =
                                (65536 + ((1023 & i) << 10)) |
                                (1023 & n.charCodeAt(++o))),
                            127 >= i)
                          ) {
                            if (r >= e) break;
                            t[r++] = i;
                          } else {
                            if (2047 >= i) {
                              if (r + 1 >= e) break;
                              t[r++] = 192 | (i >> 6);
                            } else {
                              if (65535 >= i) {
                                if (r + 2 >= e) break;
                                t[r++] = 224 | (i >> 12);
                              } else {
                                if (r + 3 >= e) break;
                                (t[r++] = 240 | (i >> 18)),
                                  (t[r++] = 128 | ((i >> 12) & 63));
                              }
                              t[r++] = 128 | ((i >> 6) & 63);
                            }
                            t[r++] = 128 | (63 & i);
                          }
                        }
                        t[r] = 0;
                      }
                    })(r, i + 4, o + 1);
                  else if (t)
                    for (t = 0; t < o; ++t) {
                      var a = r.charCodeAt(t);
                      255 < a &&
                        (Un(i),
                        fn(
                          'String has UTF-16 code units that do not fit in 8 bits',
                        )),
                        (h[i + 4 + t] = a);
                    }
                  else for (t = 0; t < o; ++t) h[i + 4 + t] = r[t];
                  return null !== n && n.push(Un, i), i;
                },
                argPackAdvance: 8,
                readValueFromPointer: K,
                D: function (n) {
                  Un(n);
                },
              });
            },
            h: function (n, r, e) {
              if (((e = an(e)), 2 === r))
                var t = _,
                  o = W,
                  i = P,
                  a = function () {
                    return y;
                  },
                  u = 1;
              else
                4 === r &&
                  ((t = E),
                  (o = k),
                  (i = C),
                  (a = function () {
                    return m;
                  }),
                  (u = 2));
              cn(n, {
                name: e,
                fromWireType: function (n) {
                  for (
                    var e, o = m[n >> 2], i = a(), f = n + 4, c = 0;
                    c <= o;
                    ++c
                  ) {
                    var s = n + 4 + c * r;
                    (c != o && 0 != i[s >> u]) ||
                      ((f = t(f, s - f)),
                      void 0 === e
                        ? (e = f)
                        : ((e += String.fromCharCode(0)), (e += f)),
                      (f = s + r));
                  }
                  return Un(n), e;
                },
                toWireType: function (n, t) {
                  'string' != typeof t &&
                    fn('Cannot pass non-string to C++ string type ' + e);
                  var a = i(t),
                    f = In(4 + a + r);
                  return (
                    (m[f >> 2] = a >> u),
                    o(t, f + 4, a + r),
                    null !== n && n.push(Un, f),
                    f
                  );
                },
                argPackAdvance: 8,
                readValueFromPointer: K,
                D: function (n) {
                  Un(n);
                },
              });
            },
            n: function (n, r, e, t, o, i) {
              G[n] = { name: an(r), R: bn(e, t), S: bn(o, i), I: [] };
            },
            b: function (n, r, e, t, o, i, a, u, f, c) {
              G[n].I.push({
                K: an(r),
                O: e,
                M: bn(t, o),
                N: i,
                U: a,
                T: bn(u, f),
                V: c,
              });
            },
            t: function (n, r) {
              cn(n, {
                W: !0,
                name: (r = an(r)),
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function () {},
              });
            },
            g: pn,
            v: function (n) {
              if (0 === n) return hn(Wn());
              var r = _n[n];
              return (n = void 0 === r ? an(n) : r), hn(Wn()[n]);
            },
            u: function (n) {
              4 < n && (ln[n].H += 1);
            },
            p: function (n, e, t, o) {
              n || fn('Cannot use deleted val. handle = ' + n),
                (n = ln[n].value);
              var i = Pn[e];
              if (!i) {
                i = '';
                for (var a = 0; a < e; ++a)
                  i += (0 !== a ? ', ' : '') + 'arg' + a;
                var u =
                  'return function emval_allocator_' +
                  e +
                  '(constructor, argTypes, args) {\n';
                for (a = 0; a < e; ++a)
                  u +=
                    'var argType' +
                    a +
                    " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " +
                    a +
                    '], "parameter ' +
                    a +
                    '");\nvar arg' +
                    a +
                    ' = argType' +
                    a +
                    '.readValueFromPointer(args);\nargs += argType' +
                    a +
                    "['argPackAdvance'];\n";
                (i = new Function(
                  'requireRegisteredType',
                  'Module',
                  '__emval_register',
                  u +
                    'var obj = new constructor(' +
                    i +
                    ');\nreturn __emval_register(obj);\n}\n',
                )(mn, r, hn)),
                  (Pn[e] = i);
              }
              return i(n, t, o);
            },
            j: function () {
              V();
            },
            q: function (n, r, e) {
              h.copyWithin(n, r, r + e);
            },
            e: function (n) {
              n >>>= 0;
              var r = h.length;
              if (2147483648 < n) return !1;
              for (var e = 1; 4 >= e; e *= 2) {
                var t = r * (1 + 0.2 / e);
                (t = Math.min(t, n + 100663296)),
                  0 < (t = Math.max(16777216, n, t)) % 65536 &&
                    (t += 65536 - (t % 65536));
                n: {
                  try {
                    s.grow(
                      (Math.min(2147483648, t) - l.byteLength + 65535) >>> 16,
                    ),
                      F(s.buffer);
                    var o = 1;
                    break n;
                  } catch (n) {}
                  o = void 0;
                }
                if (o) return !0;
              }
              return !1;
            },
            a: s,
          };
          !(function () {
            function n(n) {
              (r.asm = n.exports),
                (I = r.asm.x),
                M--,
                r.monitorRunDependencies && r.monitorRunDependencies(M),
                0 == M &&
                  (null !== j && (clearInterval(j), (j = null)),
                  H && ((n = H), (H = null), n()));
            }
            function e(r) {
              n(r.instance);
            }
            function o(n) {
              return (f || 'function' != typeof fetch
                ? Promise.resolve().then(N)
                : fetch(z, { credentials: 'same-origin' })
                    .then(function (n) {
                      if (!n.ok)
                        throw "failed to load wasm binary file at '" + z + "'";
                      return n.arrayBuffer();
                    })
                    .catch(function () {
                      return N();
                    })
              )
                .then(function (n) {
                  return WebAssembly.instantiate(n, i);
                })
                .then(n, function (n) {
                  c('failed to asynchronously prepare wasm: ' + n), V(n);
                });
            }
            var i = { a: Cn };
            if (
              (M++,
              r.monitorRunDependencies && r.monitorRunDependencies(M),
              r.instantiateWasm)
            )
              try {
                return r.instantiateWasm(i, n);
              } catch (n) {
                return (
                  c('Module.instantiateWasm callback failed with error: ' + n),
                  !1
                );
              }
            (f ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            B() ||
            'function' != typeof fetch
              ? o(e)
              : fetch(z, { credentials: 'same-origin' }).then(function (n) {
                  return WebAssembly.instantiateStreaming(n, i).then(
                    e,
                    function (n) {
                      return (
                        c('wasm streaming compile failed: ' + n),
                        c('falling back to ArrayBuffer instantiation'),
                        o(e)
                      );
                    },
                  );
                })
            ).catch(t);
          })();
          var Fn,
            Rn = (r.___wasm_call_ctors = function () {
              return (Rn = r.___wasm_call_ctors = r.asm.y).apply(
                null,
                arguments,
              );
            }),
            In = (r._malloc = function () {
              return (In = r._malloc = r.asm.z).apply(null, arguments);
            }),
            Un = (r._free = function () {
              return (Un = r._free = r.asm.A).apply(null, arguments);
            }),
            On = (r.___getTypeName = function () {
              return (On = r.___getTypeName = r.asm.B).apply(null, arguments);
            });
          function Dn() {
            function n() {
              if (!Fn && ((Fn = !0), (r.calledRun = !0), !b)) {
                if (
                  (L(O),
                  L(D),
                  e(r),
                  r.onRuntimeInitialized && r.onRuntimeInitialized(),
                  r.postRun)
                )
                  for (
                    'function' == typeof r.postRun && (r.postRun = [r.postRun]);
                    r.postRun.length;

                  ) {
                    var n = r.postRun.shift();
                    S.unshift(n);
                  }
                L(S);
              }
            }
            if (!(0 < M)) {
              if (r.preRun)
                for (
                  'function' == typeof r.preRun && (r.preRun = [r.preRun]);
                  r.preRun.length;

                )
                  x();
              L(U),
                0 < M ||
                  (r.setStatus
                    ? (r.setStatus('Running...'),
                      setTimeout(function () {
                        setTimeout(function () {
                          r.setStatus('');
                        }, 1),
                          n();
                      }, 1))
                    : n());
            }
          }
          if (
            ((r.___embind_register_native_and_builtin_types = function () {
              return (r.___embind_register_native_and_builtin_types =
                r.asm.C).apply(null, arguments);
            }),
            (H = function n() {
              Fn || Dn(), Fn || (H = n);
            }),
            (r.run = Dn),
            r.preInit)
          )
            for (
              'function' == typeof r.preInit && (r.preInit = [r.preInit]);
              0 < r.preInit.length;

            )
              r.preInit.pop()();
          return Dn(), n.ready;
        });
    },
  },
]);
