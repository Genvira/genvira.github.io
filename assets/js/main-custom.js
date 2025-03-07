/*!
 * Minimal Mistakes Jekyll Theme 4.26.2 by Michael Rose
 * Copyright 2013-2024 Michael Rose - mademistakes.com | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE
 */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (e.document) return t(e);
            throw new Error("jQuery requires a window with a document");
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (w, P) {
  "use strict";
  function y(e) {
    return (
      "function" == typeof e &&
      "number" != typeof e.nodeType &&
      "function" != typeof e.item
    );
  }
  function m(e) {
    return null != e && e === e.window;
  }
  var t = [],
    M = Object.getPrototypeOf,
    s = t.slice,
    _ = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    R = t.push,
    B = t.indexOf,
    F = {},
    $ = F.toString,
    W = F.hasOwnProperty,
    z = W.toString,
    U = z.call(Object),
    g = {},
    C = w.document,
    X = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function Q(e, t, n) {
    var r,
      o,
      i = (n = n || C).createElement("script");
    if (((i.text = e), t))
      for (r in X)
        (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          i.setAttribute(r, o);
    n.head.appendChild(i).parentNode.removeChild(i);
  }
  function h(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? F[$.call(e)] || "object"
        : typeof e;
  }
  var e = "3.6.0",
    T = function (e, t) {
      return new T.fn.init(e, t);
    };
  function Y(e) {
    var t = !!e && "length" in e && e.length,
      n = h(e);
    return (
      !y(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (T.fn = T.prototype =
    {
      jquery: e,
      constructor: T,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        e = T.merge(this.constructor(), e);
        return (e.prevObject = this), e;
      },
      each: function (e) {
        return T.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          T.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          T.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          T.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: R,
      sort: t.sort,
      splice: t.splice,
    }),
    (T.extend = T.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          o,
          i = arguments[0] || {},
          a = 1,
          s = arguments.length,
          l = !1;
        for (
          "boolean" == typeof i && ((l = i), (i = arguments[a] || {}), a++),
            "object" == typeof i || y(i) || (i = {}),
            a === s && ((i = this), a--);
          a < s;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = e[t]),
                "__proto__" !== t &&
                  i !== n &&
                  (l && n && (T.isPlainObject(n) || (r = Array.isArray(n)))
                    ? ((o = i[t]),
                      (o =
                        r && !Array.isArray(o)
                          ? []
                          : r || T.isPlainObject(o)
                            ? o
                            : {}),
                      (r = !1),
                      (i[t] = T.extend(l, o, n)))
                    : void 0 !== n && (i[t] = n));
        return i;
      }),
    T.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        return !(
          !e ||
          "[object Object]" !== $.call(e) ||
          ((e = M(e)) &&
            ("function" !=
              typeof (e = W.call(e, "constructor") && e.constructor) ||
              z.call(e) !== U))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        Q(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (Y(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
            (Y(Object(e))
              ? T.merge(t, "string" == typeof e ? [e] : e)
              : R.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : B.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
          !t(e[o], o) != a && r.push(e[o]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          o,
          i = 0,
          a = [];
        if (Y(e))
          for (r = e.length; i < r; i++)
            null != (o = t(e[i], i, n)) && a.push(o);
        else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
        return _(a);
      },
      guid: 1,
      support: g,
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]),
    T.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        F["[object " + t + "]"] = t.toLowerCase();
      },
    );
  function r(e, t, n) {
    for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (o && T(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function V(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var e = (function (P) {
      function d(e, t) {
        return (
          (e = "0x" + e.slice(1) - 65536),
          t ||
            (e < 0
              ? String.fromCharCode(65536 + e)
              : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
        );
      }
      function M(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      function _() {
        C();
      }
      var e,
        f,
        x,
        i,
        R,
        p,
        B,
        F,
        w,
        l,
        u,
        C,
        T,
        n,
        E,
        h,
        r,
        o,
        m,
        S = "sizzle" + +new Date(),
        c = P.document,
        k = 0,
        $ = 0,
        W = L(),
        z = L(),
        U = L(),
        g = L(),
        X = function (e, t) {
          return e === t && (u = !0), 0;
        },
        Q = {}.hasOwnProperty,
        t = [],
        Y = t.pop,
        V = t.push,
        A = t.push,
        G = t.slice,
        y = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        K =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        a = "[\\x20\\t\\r\\n\\f]",
        s =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          a +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        Z =
          "\\[" +
          a +
          "*(" +
          s +
          ")(?:" +
          a +
          "*([*^$|!~]?=)" +
          a +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          s +
          "))|)" +
          a +
          "*\\]",
        J =
          ":(" +
          s +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          Z +
          ")*)|.*)\\)|)",
        ee = new RegExp(a + "+", "g"),
        v = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
        te = new RegExp("^" + a + "*," + a + "*"),
        ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
        re = new RegExp(a + "|>"),
        oe = new RegExp(J),
        ie = new RegExp("^" + s + "$"),
        b = {
          ID: new RegExp("^#(" + s + ")"),
          CLASS: new RegExp("^\\.(" + s + ")"),
          TAG: new RegExp("^(" + s + "|[*])"),
          ATTR: new RegExp("^" + Z),
          PSEUDO: new RegExp("^" + J),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              a +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              a +
              "*(?:([+-]|)" +
              a +
              "*(\\d+)|))" +
              a +
              "*\\)|)",
            "i",
          ),
          bool: new RegExp("^(?:" + K + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              a +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              a +
              "*((?:-\\d)?\\d*)" +
              a +
              "*\\)|)(?=[^-]|$)",
            "i",
          ),
        },
        ae = /HTML$/i,
        se = /^(?:input|select|textarea|button)$/i,
        le = /^h\d$/i,
        N = /^[^{]+\{\s*\[native \w/,
        ue = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ce = /[+~]/,
        j = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])",
          "g",
        ),
        de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fe = ye(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" },
        );
      try {
        A.apply((t = G.call(c.childNodes)), c.childNodes),
          t[c.childNodes.length].nodeType;
      } catch (e) {
        A = {
          apply: t.length
            ? function (e, t) {
                V.apply(e, G.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      function I(t, e, n, r) {
        var o,
          i,
          a,
          s,
          l,
          u,
          c = e && e.ownerDocument,
          d = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
        )
          return n;
        if (!r && (C(e), (e = e || T), E)) {
          if (11 !== d && (s = ue.exec(t)))
            if ((o = s[1])) {
              if (9 === d) {
                if (!(u = e.getElementById(o))) return n;
                if (u.id === o) return n.push(u), n;
              } else if (
                c &&
                (u = c.getElementById(o)) &&
                m(e, u) &&
                u.id === o
              )
                return n.push(u), n;
            } else {
              if (s[2]) return A.apply(n, e.getElementsByTagName(t)), n;
              if (
                (o = s[3]) &&
                f.getElementsByClassName &&
                e.getElementsByClassName
              )
                return A.apply(n, e.getElementsByClassName(o)), n;
            }
          if (
            f.qsa &&
            !g[t + " "] &&
            (!h || !h.test(t)) &&
            (1 !== d || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((u = t), (c = e), 1 === d && (re.test(t) || ne.test(t)))) {
              for (
                ((c = (ce.test(t) && ge(e.parentNode)) || e) === e &&
                  f.scope) ||
                  ((a = e.getAttribute("id"))
                    ? (a = a.replace(de, M))
                    : e.setAttribute("id", (a = S))),
                  i = (l = p(t)).length;
                i--;

              )
                l[i] = (a ? "#" + a : ":scope") + " " + H(l[i]);
              u = l.join(",");
            }
            try {
              return A.apply(n, c.querySelectorAll(u)), n;
            } catch (e) {
              g(t, !0);
            } finally {
              a === S && e.removeAttribute("id");
            }
          }
        }
        return F(t.replace(v, "$1"), e, n, r);
      }
      function L() {
        var n = [];
        function r(e, t) {
          return (
            n.push(e + " ") > x.cacheLength && delete r[n.shift()],
            (r[e + " "] = t)
          );
        }
        return r;
      }
      function D(e) {
        return (e[S] = !0), e;
      }
      function O(e) {
        var t = T.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }
      function pe(e, t) {
        for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
      }
      function he(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function me(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && fe(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function q(a) {
        return D(function (i) {
          return (
            (i = +i),
            D(function (e, t) {
              for (var n, r = a([], e.length, i), o = r.length; o--; )
                e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (e in ((f = I.support = {}),
      (R = I.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            e = e && (e.ownerDocument || e).documentElement;
          return !ae.test(t || (e && e.nodeName) || "HTML");
        }),
      (C = I.setDocument =
        function (e) {
          var e = e ? e.ownerDocument || e : c;
          return (
            e != T &&
              9 === e.nodeType &&
              e.documentElement &&
              ((n = (T = e).documentElement),
              (E = !R(T)),
              c != T &&
                (e = T.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", _, !1)
                  : e.attachEvent && e.attachEvent("onunload", _)),
              (f.scope = O(function (e) {
                return (
                  n.appendChild(e).appendChild(T.createElement("div")),
                  void 0 !== e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (f.attributes = O(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (f.getElementsByTagName = O(function (e) {
                return (
                  e.appendChild(T.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (f.getElementsByClassName = N.test(T.getElementsByClassName)),
              (f.getById = O(function (e) {
                return (
                  (n.appendChild(e).id = S),
                  !T.getElementsByName || !T.getElementsByName(S).length
                );
              })),
              f.getById
                ? ((x.filter.ID = function (e) {
                    var t = e.replace(j, d);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && E)
                      return (t = t.getElementById(e)) ? [t] : [];
                  }))
                : ((x.filter.ID = function (e) {
                    var t = e.replace(j, d);
                    return function (e) {
                      e =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return e && e.value === t;
                    };
                  }),
                  (x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && E) {
                      var n,
                        r,
                        o,
                        i = t.getElementById(e);
                      if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                          return [i];
                        for (o = t.getElementsByName(e), r = 0; (i = o[r++]); )
                          if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                      }
                      return [];
                    }
                  })),
              (x.find.TAG = f.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : f.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      o = 0,
                      i = t.getElementsByTagName(e);
                    if ("*" !== e) return i;
                    for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }),
              (x.find.CLASS =
                f.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e);
                }),
              (r = []),
              (h = []),
              (f.qsa = N.test(T.querySelectorAll)) &&
                (O(function (e) {
                  var t;
                  (n.appendChild(e).innerHTML =
                    "<a id='" +
                    S +
                    "'></a><select id='" +
                    S +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      h.push("[*^$]=" + a + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      h.push("\\[" + a + "*(?:value|" + K + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length ||
                      h.push("~="),
                    (t = T.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      h.push(
                        "\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")",
                      ),
                    e.querySelectorAll(":checked").length || h.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length ||
                      h.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    h.push("[\\r\\n\\f]");
                }),
                O(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = T.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      h.push("name" + a + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      h.push(":enabled", ":disabled"),
                    (n.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      h.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    h.push(",.*:");
                })),
              (f.matchesSelector = N.test(
                (o =
                  n.matches ||
                  n.webkitMatchesSelector ||
                  n.mozMatchesSelector ||
                  n.oMatchesSelector ||
                  n.msMatchesSelector),
              )) &&
                O(function (e) {
                  (f.disconnectedMatch = o.call(e, "*")),
                    o.call(e, "[s!='']:x"),
                    r.push("!=", J);
                }),
              (h = h.length && new RegExp(h.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (e = N.test(n.compareDocumentPosition)),
              (m =
                e || N.test(n.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                      return (
                        e === t ||
                        !(
                          !t ||
                          1 !== t.nodeType ||
                          !(n.contains
                            ? n.contains(t)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(t))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (X = e
                ? function (e, t) {
                    var n;
                    return e === t
                      ? ((u = !0), 0)
                      : (n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition) ||
                          (1 &
                            (n =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!f.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e == T || (e.ownerDocument == c && m(c, e))
                              ? -1
                              : t == T || (t.ownerDocument == c && m(c, t))
                                ? 1
                                : l
                                  ? y(l, e) - y(l, t)
                                  : 0
                            : 4 & n
                              ? -1
                              : 1);
                  }
                : function (e, t) {
                    if (e === t) return (u = !0), 0;
                    var n,
                      r = 0,
                      o = e.parentNode,
                      i = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!o || !i)
                      return e == T
                        ? -1
                        : t == T
                          ? 1
                          : o
                            ? -1
                            : i
                              ? 1
                              : l
                                ? y(l, e) - y(l, t)
                                : 0;
                    if (o === i) return he(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (; a[r] === s[r]; ) r++;
                    return r
                      ? he(a[r], s[r])
                      : a[r] == c
                        ? -1
                        : s[r] == c
                          ? 1
                          : 0;
                  })),
            T
          );
        }),
      (I.matches = function (e, t) {
        return I(e, null, null, t);
      }),
      (I.matchesSelector = function (e, t) {
        if (
          (C(e),
          f.matchesSelector &&
            E &&
            !g[t + " "] &&
            (!r || !r.test(t)) &&
            (!h || !h.test(t)))
        )
          try {
            var n = o.call(e, t);
            if (
              n ||
              f.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            g(t, !0);
          }
        return 0 < I(t, T, null, [e]).length;
      }),
      (I.contains = function (e, t) {
        return (e.ownerDocument || e) != T && C(e), m(e, t);
      }),
      (I.attr = function (e, t) {
        (e.ownerDocument || e) != T && C(e);
        var n = x.attrHandle[t.toLowerCase()],
          n = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== n
          ? n
          : f.attributes || !E
            ? e.getAttribute(t)
            : (n = e.getAttributeNode(t)) && n.specified
              ? n.value
              : null;
      }),
      (I.escape = function (e) {
        return (e + "").replace(de, M);
      }),
      (I.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (I.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          o = 0;
        if (
          ((u = !f.detectDuplicates),
          (l = !f.sortStable && e.slice(0)),
          e.sort(X),
          u)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (l = null), e;
      }),
      (i = I.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += i(t);
          return n;
        }),
      ((x = I.selectors =
        {
          cacheLength: 50,
          createPseudo: D,
          match: b,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(j, d)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(j, d)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || I.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && I.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return b.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      oe.test(n) &&
                      (t =
                        (t = p(n, !0)) &&
                        n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(j, d).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = W[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) &&
                  W(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        "",
                    );
                  }))
              );
            },
            ATTR: function (t, n, r) {
              return function (e) {
                e = I.attr(e, t);
                return null == e
                  ? "!=" === n
                  : !n ||
                      ((e += ""),
                      "=" === n
                        ? e === r
                        : "!=" === n
                          ? e !== r
                          : "^=" === n
                            ? r && 0 === e.indexOf(r)
                            : "*=" === n
                              ? r && -1 < e.indexOf(r)
                              : "$=" === n
                                ? r && e.slice(-r.length) === r
                                : "~=" === n
                                  ? -1 <
                                    (" " + e.replace(ee, " ") + " ").indexOf(r)
                                  : "|=" === n &&
                                    (e === r ||
                                      e.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (h, e, t, m, g) {
              var v = "nth" !== h.slice(0, 3),
                y = "last" !== h.slice(-4),
                b = "of-type" === e;
              return 1 === m && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      l,
                      u = v != y ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      d = b && e.nodeName.toLowerCase(),
                      f = !n && !b,
                      p = !1;
                    if (c) {
                      if (v) {
                        for (; u; ) {
                          for (a = e; (a = a[u]); )
                            if (
                              b
                                ? a.nodeName.toLowerCase() === d
                                : 1 === a.nodeType
                            )
                              return !1;
                          l = u = "only" === h && !l && "nextSibling";
                        }
                        return !0;
                      }
                      if (((l = [y ? c.firstChild : c.lastChild]), y && f)) {
                        for (
                          p =
                            (s =
                              (r =
                                (o =
                                  (i = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                  (i[a.uniqueID] = {}))[h] || [])[0] === k &&
                              r[1]) && r[2],
                            a = s && c.childNodes[s];
                          (a = (++s && a && a[u]) || ((p = s = 0), l.pop()));

                        )
                          if (1 === a.nodeType && ++p && a === e) {
                            o[h] = [k, s, p];
                            break;
                          }
                      } else if (
                        !1 ===
                        (p = f
                          ? (s =
                              (r =
                                (o =
                                  (i = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                  (i[a.uniqueID] = {}))[h] || [])[0] === k &&
                              r[1])
                          : p)
                      )
                        for (
                          ;
                          (a = (++s && a && a[u]) || ((p = s = 0), l.pop())) &&
                          ((b
                            ? a.nodeName.toLowerCase() !== d
                            : 1 !== a.nodeType) ||
                            !++p ||
                            (f &&
                              ((o =
                                (i = a[S] || (a[S] = {}))[a.uniqueID] ||
                                (i[a.uniqueID] = {}))[h] = [k, p]),
                            a !== e));

                        );
                      return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                    }
                  };
            },
            PSEUDO: function (e, i) {
              var t,
                a =
                  x.pseudos[e] ||
                  x.setFilters[e.toLowerCase()] ||
                  I.error("unsupported pseudo: " + e);
              return a[S]
                ? a(i)
                : 1 < a.length
                  ? ((t = [e, e, "", i]),
                    x.setFilters.hasOwnProperty(e.toLowerCase())
                      ? D(function (e, t) {
                          for (var n, r = a(e, i), o = r.length; o--; )
                            e[(n = y(e, r[o]))] = !(t[n] = r[o]);
                        })
                      : function (e) {
                          return a(e, 0, t);
                        })
                  : a;
            },
          },
          pseudos: {
            not: D(function (e) {
              var r = [],
                o = [],
                s = B(e.replace(v, "$1"));
              return s[S]
                ? D(function (e, t, n, r) {
                    for (var o, i = s(e, null, r, []), a = e.length; a--; )
                      (o = i[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, t, n) {
                    return (
                      (r[0] = e), s(r, null, n, o), (r[0] = null), !o.pop()
                    );
                  };
            }),
            has: D(function (t) {
              return function (e) {
                return 0 < I(t, e).length;
              };
            }),
            contains: D(function (t) {
              return (
                (t = t.replace(j, d)),
                function (e) {
                  return -1 < (e.textContent || i(e)).indexOf(t);
                }
              );
            }),
            lang: D(function (n) {
              return (
                ie.test(n || "") || I.error("unsupported lang: " + n),
                (n = n.replace(j, d).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = P.location && P.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === n;
            },
            focus: function (e) {
              return (
                e === T.activeElement &&
                (!T.hasFocus || T.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !x.pseudos.empty(e);
            },
            header: function (e) {
              return le.test(e.nodeName);
            },
            input: function (e) {
              return se.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (e = e.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: q(function () {
              return [0];
            }),
            last: q(function (e, t) {
              return [t - 1];
            }),
            eq: q(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: q(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: q(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: q(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: q(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = x.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        x.pseudos[e] = (function (t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        })(e);
      for (e in { submit: !0, reset: !0 })
        x.pseudos[e] = (function (n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
          };
        })(e);
      function ve() {}
      function H(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function ye(a, e, t) {
        var s = e.dir,
          l = e.next,
          u = l || s,
          c = t && "parentNode" === u,
          d = $++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[s]); ) if (1 === e.nodeType || c) return a(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var r,
                o,
                i = [k, d];
              if (n) {
                for (; (e = e[s]); )
                  if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
              } else
                for (; (e = e[s]); )
                  if (1 === e.nodeType || c)
                    if (
                      ((o =
                        (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[s] || e;
                    else {
                      if ((r = o[u]) && r[0] === k && r[1] === d)
                        return (i[2] = r[2]);
                      if (((o[u] = i)[2] = a(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function be(o) {
        return 1 < o.length
          ? function (e, t, n) {
              for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
              return !0;
            }
          : o[0];
      }
      function xe(e, t, n, r, o) {
        for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
          !(i = e[s]) || (n && !n(i, r, o)) || (a.push(i), u && t.push(s));
        return a;
      }
      function we(p, h, m, g, v, e) {
        return (
          g && !g[S] && (g = we(g)),
          v && !v[S] && (v = we(v, e)),
          D(function (e, t, n, r) {
            var o,
              i,
              a,
              s = [],
              l = [],
              u = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var r = 0, o = t.length; r < o; r++) I(e, t[r], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              d = !p || (!e && h) ? c : xe(c, s, p, n, r),
              f = m ? (v || (e ? p : u || g) ? [] : t) : d;
            if ((m && m(d, f, n, r), g))
              for (o = xe(f, l), g(o, [], n, r), i = o.length; i--; )
                (a = o[i]) && (f[l[i]] = !(d[l[i]] = a));
            if (e) {
              if (v || p) {
                if (v) {
                  for (o = [], i = f.length; i--; )
                    (a = f[i]) && o.push((d[i] = a));
                  v(null, (f = []), o, r);
                }
                for (i = f.length; i--; )
                  (a = f[i]) &&
                    -1 < (o = v ? y(e, a) : s[i]) &&
                    (e[o] = !(t[o] = a));
              }
            } else
              (f = xe(f === t ? f.splice(u, f.length) : f)),
                v ? v(null, t, f, r) : A.apply(t, f);
          })
        );
      }
      function Ce(g, v) {
        function e(e, t, n, r, o) {
          var i,
            a,
            s,
            l = 0,
            u = "0",
            c = e && [],
            d = [],
            f = w,
            p = e || (b && x.find.TAG("*", o)),
            h = (k += null == f ? 1 : Math.random() || 0.1),
            m = p.length;
          for (
            o && (w = t == T || t || o);
            u !== m && null != (i = p[u]);
            u++
          ) {
            if (b && i) {
              for (
                a = 0, t || i.ownerDocument == T || (C(i), (n = !E));
                (s = g[a++]);

              )
                if (s(i, t || T, n)) {
                  r.push(i);
                  break;
                }
              o && (k = h);
            }
            y && ((i = !s && i) && l--, e) && c.push(i);
          }
          if (((l += u), y && u !== l)) {
            for (a = 0; (s = v[a++]); ) s(c, d, t, n);
            if (e) {
              if (0 < l) for (; u--; ) c[u] || d[u] || (d[u] = Y.call(r));
              d = xe(d);
            }
            A.apply(r, d),
              o && !e && 0 < d.length && 1 < l + v.length && I.uniqueSort(r);
          }
          return o && ((k = h), (w = f)), c;
        }
        var y = 0 < v.length,
          b = 0 < g.length;
        return y ? D(e) : e;
      }
      return (
        (ve.prototype = x.filters = x.pseudos),
        (x.setFilters = new ve()),
        (p = I.tokenize =
          function (e, t) {
            var n,
              r,
              o,
              i,
              a,
              s,
              l,
              u = z[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = x.preFilter; a; ) {
              for (i in ((n && !(r = te.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), s.push((o = []))),
              (n = !1),
              (r = ne.exec(a)) &&
                ((n = r.shift()),
                o.push({ value: n, type: r[0].replace(v, " ") }),
                (a = a.slice(n.length))),
              x.filter))
                !(r = b[i].exec(a)) ||
                  (l[i] && !(r = l[i](r))) ||
                  ((n = r.shift()),
                  o.push({ value: n, type: i, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? I.error(e) : z(e, s).slice(0);
          }),
        (B = I.compile =
          function (e, t) {
            var n,
              r = [],
              o = [],
              i = U[e + " "];
            if (!i) {
              for (n = (t = t || p(e)).length; n--; )
                ((i = (function e(t) {
                  for (
                    var r,
                      n,
                      o,
                      i = t.length,
                      a = x.relative[t[0].type],
                      s = a || x.relative[" "],
                      l = a ? 1 : 0,
                      u = ye(
                        function (e) {
                          return e === r;
                        },
                        s,
                        !0,
                      ),
                      c = ye(
                        function (e) {
                          return -1 < y(r, e);
                        },
                        s,
                        !0,
                      ),
                      d = [
                        function (e, t, n) {
                          return (
                            (e =
                              (!a && (n || t !== w)) ||
                              ((r = t).nodeType ? u : c)(e, t, n)),
                            (r = null),
                            e
                          );
                        },
                      ];
                    l < i;
                    l++
                  )
                    if ((n = x.relative[t[l].type])) d = [ye(be(d), n)];
                    else {
                      if (
                        (n = x.filter[t[l].type].apply(null, t[l].matches))[S]
                      ) {
                        for (o = ++l; o < i && !x.relative[t[o].type]; o++);
                        return we(
                          1 < l && be(d),
                          1 < l &&
                            H(
                              t
                                .slice(0, l - 1)
                                .concat({
                                  value: " " === t[l - 2].type ? "*" : "",
                                }),
                            ).replace(v, "$1"),
                          n,
                          l < o && e(t.slice(l, o)),
                          o < i && e((t = t.slice(o))),
                          o < i && H(t),
                        );
                      }
                      d.push(n);
                    }
                  return be(d);
                })(t[n]))[S]
                  ? r
                  : o
                ).push(i);
              (i = U(e, Ce(o, r))).selector = e;
            }
            return i;
          }),
        (F = I.select =
          function (e, t, n, r) {
            var o,
              i,
              a,
              s,
              l,
              u = "function" == typeof e && e,
              c = !r && p((e = u.selector || e));
            if (((n = n || []), 1 === c.length)) {
              if (
                2 < (i = c[0] = c[0].slice(0)).length &&
                "ID" === (a = i[0]).type &&
                9 === t.nodeType &&
                E &&
                x.relative[i[1].type]
              ) {
                if (!(t = (x.find.ID(a.matches[0].replace(j, d), t) || [])[0]))
                  return n;
                u && (t = t.parentNode), (e = e.slice(i.shift().value.length));
              }
              for (
                o = b.needsContext.test(e) ? 0 : i.length;
                o-- && ((a = i[o]), !x.relative[(s = a.type)]);

              )
                if (
                  (l = x.find[s]) &&
                  (r = l(
                    a.matches[0].replace(j, d),
                    (ce.test(i[0].type) && ge(t.parentNode)) || t,
                  ))
                ) {
                  if ((i.splice(o, 1), (e = r.length && H(i)))) break;
                  return A.apply(n, r), n;
                }
            }
            return (
              (u || B(e, c))(
                r,
                t,
                !E,
                n,
                !t || (ce.test(e) && ge(t.parentNode)) || t,
              ),
              n
            );
          }),
        (f.sortStable = S.split("").sort(X).join("") === S),
        (f.detectDuplicates = !!u),
        C(),
        (f.sortDetached = O(function (e) {
          return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
        })),
        O(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          pe("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (f.attributes &&
          O(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          pe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        O(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          pe(K, function (e, t, n) {
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (n = e.getAttributeNode(t)) && n.specified
                  ? n.value
                  : null;
          }),
        I
      );
    })(w),
    G =
      ((T.find = e),
      (T.expr = e.selectors),
      (T.expr[":"] = T.expr.pseudos),
      (T.uniqueSort = T.unique = e.uniqueSort),
      (T.text = e.getText),
      (T.isXMLDoc = e.isXML),
      (T.contains = e.contains),
      (T.escapeSelector = e.escape),
      T.expr.match.needsContext);
  function l(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var K = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Z(e, n, r) {
    return y(n)
      ? T.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? T.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
          ? T.grep(e, function (e) {
              return -1 < B.call(n, e) !== r;
            })
          : T.filter(n, e, r);
  }
  (T.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? T.find.matchesSelector(r, e)
          ? [r]
          : []
        : T.find.matches(
            e,
            T.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    T.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            T(e).filter(function () {
              for (t = 0; t < r; t++) if (T.contains(o[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
        return 1 < r ? T.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(Z(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(Z(this, e || [], !0));
      },
      is: function (e) {
        return !!Z(this, "string" == typeof e && G.test(e) ? T(e) : e || [], !1)
          .length;
      },
    });
  var J,
    ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    te =
      (((T.fn.init = function (e, t, n) {
        if (e) {
          if (((n = n || J), "string" != typeof e))
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(T)
                : T.makeArray(e, this);
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : ee.exec(e)) ||
            (!r[1] && t)
          )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : C,
                  !0,
                ),
              ),
              K.test(r[1]) && T.isPlainObject(t))
            )
              for (var r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          } else
            (n = C.getElementById(r[2])) && ((this[0] = n), (this.length = 1));
        }
        return this;
      }).prototype = T.fn),
      (J = T(C)),
      /^(?:parents|prev(?:Until|All))/),
    ne = { children: !0, contents: !0, next: !0, prev: !0 };
  function re(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  T.fn.extend({
    has: function (e) {
      var t = T(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        o = this.length,
        i = [],
        a = "string" != typeof e && T(e);
      if (!G.test(e))
        for (; r < o; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && T.find.matchesSelector(n, e))
            ) {
              i.push(n);
              break;
            }
      return this.pushStack(1 < i.length ? T.uniqueSort(i) : i);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? B.call(T(e), this[0])
          : B.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    T.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return r(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return r(e, "parentNode", n);
        },
        next: function (e) {
          return re(e, "nextSibling");
        },
        prev: function (e) {
          return re(e, "previousSibling");
        },
        nextAll: function (e) {
          return r(e, "nextSibling");
        },
        prevAll: function (e) {
          return r(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return r(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return r(e, "previousSibling", n);
        },
        siblings: function (e) {
          return V((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return V(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && M(e.contentDocument)
            ? e.contentDocument
            : (l(e, "template") && (e = e.content || e),
              T.merge([], e.childNodes));
        },
      },
      function (r, o) {
        T.fn[r] = function (e, t) {
          var n = T.map(this, o, e);
          return (
            (t = "Until" !== r.slice(-5) ? e : t) &&
              "string" == typeof t &&
              (n = T.filter(t, n)),
            1 < this.length &&
              (ne[r] || T.uniqueSort(n), te.test(r)) &&
              n.reverse(),
            this.pushStack(n)
          );
        };
      },
    );
  var E = /[^\x20\t\r\n\f]+/g;
  function c(e) {
    return e;
  }
  function oe(e) {
    throw e;
  }
  function ie(e, t, n, r) {
    var o;
    try {
      e && y((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && y((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (T.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          T.each(e.match(E) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : T.extend({}, r);
    function o() {
      for (s = s || r.once, a = i = !0; u.length; c = -1)
        for (t = u.shift(); ++c < l.length; )
          !1 === l[c].apply(t[0], t[1]) &&
            r.stopOnFalse &&
            ((c = l.length), (t = !1));
      r.memory || (t = !1), (i = !1), s && (l = t ? [] : "");
    }
    var i,
      t,
      a,
      s,
      l = [],
      u = [],
      c = -1,
      d = {
        add: function () {
          return (
            l &&
              (t && !i && ((c = l.length - 1), u.push(t)),
              (function n(e) {
                T.each(e, function (e, t) {
                  y(t)
                    ? (r.unique && d.has(t)) || l.push(t)
                    : t && t.length && "string" !== h(t) && n(t);
                });
              })(arguments),
              t) &&
              !i &&
              o(),
            this
          );
        },
        remove: function () {
          return (
            T.each(arguments, function (e, t) {
              for (var n; -1 < (n = T.inArray(t, l, n)); )
                l.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < T.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return (l = l && []), this;
        },
        disable: function () {
          return (s = u = []), (l = t = ""), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (s = u = []), t || i || (l = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i) ||
              o(),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        },
      };
    return d;
  }),
    T.extend({
      Deferred: function (e) {
        var i = [
            [
              "notify",
              "progress",
              T.Callbacks("memory"),
              T.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          o = "pending",
          a = {
            state: function () {
              return o;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var o = arguments;
              return T.Deferred(function (r) {
                T.each(i, function (e, t) {
                  var n = y(o[t[4]]) && o[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && y(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (o = null);
              }).promise();
            },
            then: function (t, n, r) {
              var l = 0;
              function u(o, i, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(o < l)) {
                      if ((e = a.apply(n, r)) === i.promise())
                        throw new TypeError("Thenable self-resolution");
                      (t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        y(t)
                          ? s
                            ? t.call(e, u(l, i, c, s), u(l, i, oe, s))
                            : (l++,
                              t.call(
                                e,
                                u(l, i, c, s),
                                u(l, i, oe, s),
                                u(l, i, c, i.notifyWith),
                              ))
                          : (a !== c && ((n = void 0), (r = [e])),
                            (s || i.resolveWith)(n, r));
                    }
                  }
                  var n = this,
                    r = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            T.Deferred.exceptionHook &&
                              T.Deferred.exceptionHook(e, t.stackTrace),
                              l <= o + 1 &&
                                (a !== oe && ((n = void 0), (r = [e])),
                                i.rejectWith(n, r));
                          }
                        };
                  o
                    ? t()
                    : (T.Deferred.getStackHook &&
                        (t.stackTrace = T.Deferred.getStackHook()),
                      w.setTimeout(t));
                };
              }
              return T.Deferred(function (e) {
                i[0][3].add(u(0, e, y(r) ? r : c, e.notifyWith)),
                  i[1][3].add(u(0, e, y(t) ? t : c)),
                  i[2][3].add(u(0, e, y(n) ? n : oe));
              }).promise();
            },
            promise: function (e) {
              return null != e ? T.extend(e, a) : a;
            },
          },
          s = {};
        return (
          T.each(i, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    o = r;
                  },
                  i[3 - e][2].disable,
                  i[3 - e][3].disable,
                  i[0][2].lock,
                  i[0][3].lock,
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (o[t] = this),
              (i[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(o, i);
          };
        }
        var n = arguments.length,
          r = n,
          o = Array(r),
          i = s.call(arguments),
          a = T.Deferred();
        if (
          n <= 1 &&
          (ie(e, a.done(t(r)).resolve, a.reject, !n),
          "pending" === a.state() || y(i[r] && i[r].then))
        )
          return a.then();
        for (; r--; ) ie(i[r], t(r), a.reject);
        return a.promise();
      },
    });
  var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    se =
      ((T.Deferred.exceptionHook = function (e, t) {
        w.console &&
          w.console.warn &&
          e &&
          ae.test(e.name) &&
          w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
      (T.readyException = function (e) {
        w.setTimeout(function () {
          throw e;
        });
      }),
      T.Deferred());
  function le() {
    C.removeEventListener("DOMContentLoaded", le),
      w.removeEventListener("load", le),
      T.ready();
  }
  (T.fn.ready = function (e) {
    return (
      se.then(e).catch(function (e) {
        T.readyException(e);
      }),
      this
    );
  }),
    T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) ||
          ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
          se.resolveWith(C, [T]);
      },
    }),
    (T.ready.then = se.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? w.setTimeout(T.ready)
      : (C.addEventListener("DOMContentLoaded", le),
        w.addEventListener("load", le));
  function d(e, t, n, r, o, i, a) {
    var s = 0,
      l = e.length,
      u = null == n;
    if ("object" === h(n)) for (s in ((o = !0), n)) d(e, t, s, n[s], !0, i, a);
    else if (
      void 0 !== r &&
      ((o = !0),
      y(r) || (a = !0),
      (t = u
        ? a
          ? (t.call(e, r), null)
          : ((u = t),
            function (e, t, n) {
              return u.call(T(e), n);
            })
        : t))
    )
      for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return o ? e : u ? t.call(e) : l ? t(e[0], n) : i;
  }
  var ue = /^-ms-/,
    ce = /-([a-z])/g;
  function de(e, t) {
    return t.toUpperCase();
  }
  function b(e) {
    return e.replace(ue, "ms-").replace(ce, de);
  }
  function v(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function fe() {
    this.expando = T.expando + fe.uid++;
  }
  (fe.uid = 1),
    (fe.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            v(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          o = this.cache(e);
        if ("string" == typeof t) o[b(t)] = n;
        else for (r in t) o[b(r)] = t[r];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][b(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(b)
              : (t = b(t)) in r
                ? [t]
                : t.match(E) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !T.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !T.isEmptyObject(e);
      },
    });
  var x = new fe(),
    u = new fe(),
    pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    he = /[A-Z]/g;
  function me(e, t, n) {
    var r, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(he, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                  ? +o
                  : pe.test(o)
                    ? JSON.parse(o)
                    : o));
        } catch (e) {}
        u.set(e, t, n);
      } else n = void 0;
    return n;
  }
  T.extend({
    hasData: function (e) {
      return u.hasData(e) || x.hasData(e);
    },
    data: function (e, t, n) {
      return u.access(e, t, n);
    },
    removeData: function (e, t) {
      u.remove(e, t);
    },
    _data: function (e, t, n) {
      return x.access(e, t, n);
    },
    _removeData: function (e, t) {
      x.remove(e, t);
    },
  }),
    T.fn.extend({
      data: function (n, e) {
        var t,
          r,
          o,
          i = this[0],
          a = i && i.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                u.set(this, n);
              })
            : d(
                this,
                function (e) {
                  var t;
                  if (i && void 0 === e)
                    return void 0 !== (t = u.get(i, n)) ||
                      void 0 !== (t = me(i, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    u.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0,
              );
        if (
          this.length &&
          ((o = u.get(i)), 1 === i.nodeType) &&
          !x.get(i, "hasDataAttrs")
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (r = a[t].name).indexOf("data-") &&
              ((r = b(r.slice(5))), me(i, r, o[r]));
          x.set(i, "hasDataAttrs", !0);
        }
        return o;
      },
      removeData: function (e) {
        return this.each(function () {
          u.remove(this, e);
        });
      },
    }),
    T.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (r = x.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!r || Array.isArray(n)
                ? (r = x.access(e, t, T.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = T.queue(e, t),
          r = n.length,
          o = n.shift(),
          i = T._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), r--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(
              e,
              function () {
                T.dequeue(e, t);
              },
              i,
            )),
          !r && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          x.get(e, n) ||
          x.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              x.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    T.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? T.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = T.queue(this, t, n);
                  T._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --o || i.resolveWith(a, [a]);
        }
        var r,
          o = 1,
          i = T.Deferred(),
          a = this,
          s = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (r = x.get(a[s], e + "queueHooks")) &&
            r.empty &&
            (o++, r.empty.add(n));
        return n(), i.promise(t);
      },
    });
  function ge(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && k(e) && "none" === T.css(e, "display"))
    );
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
    f = ["Top", "Right", "Bottom", "Left"],
    S = C.documentElement,
    k = function (e) {
      return T.contains(e.ownerDocument, e);
    },
    ye = { composed: !0 };
  S.getRootNode &&
    (k = function (e) {
      return (
        T.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
      );
    });
  function be(e, t, n, r) {
    var o,
      i,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return T.css(e, t, "");
          },
      l = s(),
      u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (T.cssNumber[t] || ("px" !== u && +l)) &&
        ve.exec(T.css(e, t));
    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; a--; )
        T.style(e, t, c + u),
          (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0),
          (c /= i);
      T.style(e, t, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0), (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r) &&
        ((r.unit = u), (r.start = c), (r.end = o)),
      o
    );
  }
  var xe = {};
  function A(e, t) {
    for (var n, r, o, i, a, s = [], l = 0, u = e.length; l < u; l++)
      (r = e[l]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((s[l] = x.get(r, "display") || null),
              s[l] || (r.style.display = "")),
            "" === r.style.display &&
              ge(r) &&
              (s[l] =
                ((a = i = void 0),
                (i = (o = r).ownerDocument),
                (o = o.nodeName),
                (a = xe[o]) ||
                  ((i = i.body.appendChild(i.createElement(o))),
                  (a = T.css(i, "display")),
                  i.parentNode.removeChild(i),
                  (xe[o] = a = "none" === a ? "block" : a)),
                a)))
          : "none" !== n && ((s[l] = "none"), x.set(r, "display", n)));
    for (l = 0; l < u; l++) null != s[l] && (e[l].style.display = s[l]);
    return e;
  }
  T.fn.extend({
    show: function () {
      return A(this, !0);
    },
    hide: function () {
      return A(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ge(this) ? T(this).show() : T(this).hide();
          });
    },
  });
  var we = /^(?:checkbox|radio)$/i,
    Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Te = /^$|^module$|\/(?:java|ecma)script/i,
    N =
      ((D = C.createDocumentFragment().appendChild(C.createElement("div"))),
      (a = C.createElement("input")).setAttribute("type", "radio"),
      a.setAttribute("checked", "checked"),
      a.setAttribute("name", "t"),
      D.appendChild(a),
      (g.checkClone = D.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (D.innerHTML = "<textarea>x</textarea>"),
      (g.noCloneChecked = !!D.cloneNode(!0).lastChild.defaultValue),
      (D.innerHTML = "<option></option>"),
      (g.option = !!D.lastChild),
      {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      });
  function j(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
    return void 0 === t || (t && l(e, t)) ? T.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      x.set(e[n], "globalEval", !t || x.get(t[n], "globalEval"));
  }
  (N.tbody = N.tfoot = N.colgroup = N.caption = N.thead),
    (N.th = N.td),
    g.option ||
      (N.optgroup = N.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var Se = /<|&#?\w+;/;
  function ke(e, t, n, r, o) {
    for (
      var i,
        a,
        s,
        l,
        u,
        c = t.createDocumentFragment(),
        d = [],
        f = 0,
        p = e.length;
      f < p;
      f++
    )
      if ((i = e[f]) || 0 === i)
        if ("object" === h(i)) T.merge(d, i.nodeType ? [i] : i);
        else if (Se.test(i)) {
          for (
            a = a || c.appendChild(t.createElement("div")),
              s = (Ce.exec(i) || ["", ""])[1].toLowerCase(),
              s = N[s] || N._default,
              a.innerHTML = s[1] + T.htmlPrefilter(i) + s[2],
              u = s[0];
            u--;

          )
            a = a.lastChild;
          T.merge(d, a.childNodes), ((a = c.firstChild).textContent = "");
        } else d.push(t.createTextNode(i));
    for (c.textContent = "", f = 0; (i = d[f++]); )
      if (r && -1 < T.inArray(i, r)) o && o.push(i);
      else if (((l = k(i)), (a = j(c.appendChild(i), "script")), l && Ee(a), n))
        for (u = 0; (i = a[u++]); ) Te.test(i.type || "") && n.push(i);
    return c;
  }
  var Ae = /^([^.]*)(?:\.(.+)|)/;
  function n() {
    return !0;
  }
  function p() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return C.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function je(e, t, n, r, o, i) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        je(e, s, n, r, t[s], i);
      return e;
    }
    if (
      (null == r && null == o
        ? ((o = n), (r = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = r), (r = void 0))
            : ((o = r), (r = n), (n = void 0))),
      !1 === o)
    )
      o = p;
    else if (!o) return e;
    return (
      1 === i &&
        ((a = o),
        ((o = function (e) {
          return T().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = T.guid++))),
      e.each(function () {
        T.event.add(this, t, o, r, n);
      })
    );
  }
  function Ie(e, o, i) {
    i
      ? (x.set(e, o, !1),
        T.event.add(e, o, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = x.get(this, o);
            if (1 & e.isTrigger && this[o]) {
              if (r.length)
                (T.event.special[o] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                x.set(this, o, r),
                (t = i(this, o)),
                this[o](),
                r !== (n = x.get(this, o)) || t ? x.set(this, o, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (x.set(this, o, {
                  value: T.event.trigger(
                    T.extend(r[0], T.Event.prototype),
                    r.slice(1),
                    this,
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === x.get(e, o) && T.event.add(e, o, n);
  }
  (T.event = {
    global: {},
    add: function (t, e, n, r, o) {
      var i,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        h = x.get(t);
      if (v(t))
        for (
          n.handler && ((n = (i = n).handler), (o = i.selector)),
            o && T.find.matchesSelector(S, o),
            n.guid || (n.guid = T.guid++),
            s = (s = h.events) || (h.events = Object.create(null)),
            a =
              (a = h.handle) ||
              (h.handle = function (e) {
                return void 0 !== T && T.event.triggered !== e.type
                  ? T.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            l = (e = (e || "").match(E) || [""]).length;
          l--;

        )
          (d = p = (f = Ae.exec(e[l]) || [])[1]),
            (f = (f[2] || "").split(".").sort()),
            d &&
              ((u = T.event.special[d] || {}),
              (d = (o ? u.delegateType : u.bindType) || d),
              (u = T.event.special[d] || {}),
              (p = T.extend(
                {
                  type: d,
                  origType: p,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && T.expr.match.needsContext.test(o),
                  namespace: f.join("."),
                },
                i,
              )),
              (c = s[d]) ||
                (((c = s[d] = []).delegateCount = 0),
                u.setup && !1 !== u.setup.call(t, r, f, a)) ||
                (t.addEventListener && t.addEventListener(d, a)),
              u.add &&
                (u.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)),
              o ? c.splice(c.delegateCount++, 0, p) : c.push(p),
              (T.event.global[d] = !0));
    },
    remove: function (e, t, n, r, o) {
      var i,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g = x.hasData(e) && x.get(e);
      if (g && (l = g.events)) {
        for (u = (t = (t || "").match(E) || [""]).length; u--; )
          if (
            ((p = m = (s = Ae.exec(t[u]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = T.event.special[p] || {},
                f = l[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = i = f.length;
              i--;

            )
              (c = f[i]),
                (!o && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (f.splice(i, 1),
                  c.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, c));
            a &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                T.removeEvent(e, p, g.handle),
              delete l[p]);
          } else for (p in l) T.event.remove(e, p + t[u], n, r, !0);
        T.isEmptyObject(l) && x.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        o,
        i,
        a = new Array(arguments.length),
        s = T.event.fix(e),
        e = (x.get(this, "events") || Object.create(null))[s.type] || [],
        l = T.event.special[s.type] || {};
      for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, s))
      ) {
        for (
          i = T.event.handlers.call(this, s, e), t = 0;
          (r = i[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (o = (
                  (T.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, a)) &&
                !1 === (s.result = o) &&
                (s.preventDefault(), s.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (i = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(o = (r = t[n]).selector + " ")] &&
                (a[o] = r.needsContext
                  ? -1 < T(o, this).index(u)
                  : T.find(o, this, null, [u]).length),
                a[o] && i.push(r);
            i.length && s.push({ elem: u, handlers: i });
          }
      return (
        (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(T.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: y(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[T.expando] ? e : new T.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          e = this || e;
          return (
            we.test(e.type) && e.click && l(e, "input") && Ie(e, "click", n), !1
          );
        },
        trigger: function (e) {
          e = this || e;
          return (
            we.test(e.type) && e.click && l(e, "input") && Ie(e, "click"), !0
          );
        },
        _default: function (e) {
          e = e.target;
          return (
            (we.test(e.type) &&
              e.click &&
              l(e, "input") &&
              x.get(e, "click")) ||
            l(e, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? n
              : p),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && T.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[T.expando] = !0);
    }),
    (T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: p,
      isPropagationStopped: p,
      isImmediatePropagationStopped: p,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = n),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = n),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = n),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    T.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      T.event.addProp,
    ),
    T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      T.event.special[e] = {
        setup: function () {
          return Ie(this, e, Ne), !1;
        },
        trigger: function () {
          return Ie(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    T.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, o) {
        T.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || T.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      },
    ),
    T.fn.extend({
      on: function (e, t, n, r) {
        return je(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return je(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj)
          (r = e.handleObj),
            T(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            );
        else {
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = p),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          for (o in e) this.off(o, t, e[o]);
        }
        return this;
      },
    });
  var Le = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (l(e, "table") &&
        l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        T(e).children("tbody")[0]) ||
      e
    );
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Pe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, o, i;
    if (1 === t.nodeType) {
      if (x.hasData(e) && (i = x.get(e).events))
        for (o in (x.remove(t, "handle events"), i))
          for (n = 0, r = i[o].length; n < r; n++) T.event.add(t, o, i[o][n]);
      u.hasData(e) && ((e = u.access(e)), (e = T.extend({}, e)), u.set(t, e));
    }
  }
  function I(n, r, o, i) {
    r = _(r);
    var e,
      t,
      a,
      s,
      l,
      u,
      c = 0,
      d = n.length,
      f = d - 1,
      p = r[0],
      h = y(p);
    if (h || (1 < d && "string" == typeof p && !g.checkClone && De.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), I(t, r, o, i);
      });
    if (
      d &&
      ((t = (e = ke(r, n[0].ownerDocument, !1, n, i)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || i)
    ) {
      for (s = (a = T.map(j(e, "script"), He)).length; c < d; c++)
        (l = e),
          c !== f &&
            ((l = T.clone(l, !0, !0)), s) &&
            T.merge(a, j(l, "script")),
          o.call(n[c], l, c);
      if (s)
        for (u = a[a.length - 1].ownerDocument, T.map(a, Pe), c = 0; c < s; c++)
          (l = a[c]),
            Te.test(l.type || "") &&
              !x.access(l, "globalEval") &&
              T.contains(u, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? T._evalUrl &&
                  !l.noModule &&
                  T._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    u,
                  )
                : Q(l.textContent.replace(Oe, ""), l, u));
    }
    return n;
  }
  function _e(e, t, n) {
    for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
      n || 1 !== r.nodeType || T.cleanData(j(r)),
        r.parentNode &&
          (n && k(r) && Ee(j(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  T.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        o,
        i,
        a,
        s,
        l,
        u,
        c = e.cloneNode(!0),
        d = k(e);
      if (
        !(
          g.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          T.isXMLDoc(e)
        )
      )
        for (a = j(c), r = 0, o = (i = j(e)).length; r < o; r++)
          (s = i[r]),
            (l = a[r]),
            (u = void 0),
            "input" === (u = l.nodeName.toLowerCase()) && we.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== u && "textarea" !== u) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (i = i || j(e), a = a || j(c), r = 0, o = i.length; r < o; r++)
            Me(i[r], a[r]);
        else Me(e, c);
      return 0 < (a = j(c, "script")).length && Ee(a, !d && j(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
        if (v(n)) {
          if ((t = n[x.expando])) {
            if (t.events)
              for (r in t.events)
                o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
            n[x.expando] = void 0;
          }
          n[u.expando] && (n[u.expando] = void 0);
        }
    },
  }),
    T.fn.extend({
      detach: function (e) {
        return _e(this, e, !0);
      },
      remove: function (e) {
        return _e(this, e);
      },
      text: function (e) {
        return d(
          this,
          function (e) {
            return void 0 === e
              ? T.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return I(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return I(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = qe(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return I(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return I(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (T.cleanData(j(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return T.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return d(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Le.test(e) &&
              !N[(Ce.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = T.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (T.cleanData(j(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return I(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            T.inArray(this, n) < 0 &&
              (T.cleanData(j(this)), t) &&
              t.replaceChild(e, this);
          },
          n,
        );
      },
    }),
    T.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        T.fn[e] = function (e) {
          for (var t, n = [], r = T(e), o = r.length - 1, i = 0; i <= o; i++)
            (t = i === o ? this : this.clone(!0)),
              T(r[i])[a](t),
              R.apply(n, t.get());
          return this.pushStack(n);
        };
      },
    );
  function Re(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : w).getComputedStyle(e);
  }
  function Be(e, t, n) {
    var r,
      o = {};
    for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
    for (r in ((n = n.call(e)), t)) e.style[r] = o[r];
    return n;
  }
  var Fe,
    $e,
    We,
    ze,
    Ue,
    Xe,
    Qe,
    o,
    Ye = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
    Ve = new RegExp(f.join("|"), "i");
  function Ge() {
    var e;
    o &&
      ((Qe.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
      (o.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
      S.appendChild(Qe).appendChild(o),
      (e = w.getComputedStyle(o)),
      (Fe = "1%" !== e.top),
      (Xe = 12 === Ke(e.marginLeft)),
      (o.style.right = "60%"),
      (ze = 36 === Ke(e.right)),
      ($e = 36 === Ke(e.width)),
      (o.style.position = "absolute"),
      (We = 12 === Ke(o.offsetWidth / 3)),
      S.removeChild(Qe),
      (o = null));
  }
  function Ke(e) {
    return Math.round(parseFloat(e));
  }
  function Ze(e, t, n) {
    var r,
      o,
      i = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (o = n.getPropertyValue(t) || n[t]) ||
          k(e) ||
          (o = T.style(e, t)),
        !g.pixelBoxStyles()) &&
        Ye.test(o) &&
        Ve.test(t) &&
        ((e = i.width),
        (t = i.minWidth),
        (r = i.maxWidth),
        (i.minWidth = i.maxWidth = i.width = o),
        (o = n.width),
        (i.width = e),
        (i.minWidth = t),
        (i.maxWidth = r)),
      void 0 !== o ? o + "" : o
    );
  }
  function Je(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  (Qe = C.createElement("div")),
    (o = C.createElement("div")).style &&
      ((o.style.backgroundClip = "content-box"),
      (o.cloneNode(!0).style.backgroundClip = ""),
      (g.clearCloneStyle = "content-box" === o.style.backgroundClip),
      T.extend(g, {
        boxSizingReliable: function () {
          return Ge(), $e;
        },
        pixelBoxStyles: function () {
          return Ge(), ze;
        },
        pixelPosition: function () {
          return Ge(), Fe;
        },
        reliableMarginLeft: function () {
          return Ge(), Xe;
        },
        scrollboxSize: function () {
          return Ge(), We;
        },
        reliableTrDimensions: function () {
          var e, t, n;
          return (
            null == Ue &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              S.appendChild(e).appendChild(t).appendChild(n),
              (n = w.getComputedStyle(t)),
              (Ue =
                parseInt(n.height, 10) +
                  parseInt(n.borderTopWidth, 10) +
                  parseInt(n.borderBottomWidth, 10) ===
                t.offsetHeight),
              S.removeChild(e)),
            Ue
          );
        },
      }));
  var et = ["Webkit", "Moz", "ms"],
    tt = C.createElement("div").style,
    nt = {};
  function rt(e) {
    var t = T.cssProps[e] || nt[e];
    return (
      t ||
      (e in tt
        ? e
        : (nt[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = et.length;
                n--;

              )
                if ((e = et[n] + t) in tt) return e;
            })(e) || e))
    );
  }
  var ot = /^(none|table(?!-c[ea]).+)/,
    it = /^--/,
    at = { position: "absolute", visibility: "hidden", display: "block" },
    st = { letterSpacing: "0", fontWeight: "400" };
  function lt(e, t, n) {
    var r = ve.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function ut(e, t, n, r, o, i) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += T.css(e, n + f[a], !0, o)),
        r
          ? ("content" === n && (l -= T.css(e, "padding" + f[a], !0, o)),
            "margin" !== n && (l -= T.css(e, "border" + f[a] + "Width", !0, o)))
          : ((l += T.css(e, "padding" + f[a], !0, o)),
            "padding" !== n
              ? (l += T.css(e, "border" + f[a] + "Width", !0, o))
              : (s += T.css(e, "border" + f[a] + "Width", !0, o)));
    return (
      !r &&
        0 <= i &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5,
            ),
          ) || 0),
      l
    );
  }
  function ct(e, t, n) {
    var r = Re(e),
      o =
        (!g.boxSizingReliable() || n) &&
        "border-box" === T.css(e, "boxSizing", !1, r),
      i = o,
      a = Ze(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ye.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!g.boxSizingReliable() && o) ||
        (!g.reliableTrDimensions() && l(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((o = "border-box" === T.css(e, "boxSizing", !1, r)), (i = s in e)) &&
        (a = e[s]),
      (a = parseFloat(a) || 0) +
        ut(e, t, n || (o ? "border" : "content"), i, r, a) +
        "px"
    );
  }
  function i(e, t, n, r, o) {
    return new i.prototype.init(e, t, n, r, o);
  }
  T.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (t = Ze(e, "opacity")) ? "1" : t;
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          i,
          a,
          s = b(t),
          l = it.test(t),
          u = e.style;
        if (
          (l || (t = rt(s)), (a = T.cssHooks[t] || T.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
        "string" === (i = typeof n) &&
          (o = ve.exec(n)) &&
          o[1] &&
          ((n = be(e, t, o)), (i = "number")),
          null == n ||
            n != n ||
            ("number" !== i ||
              l ||
              (n += (o && o[3]) || (T.cssNumber[s] ? "" : "px")),
            g.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
            (l ? u.setProperty(t, n) : (u[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var o,
        i = b(t);
      return (
        it.test(t) || (t = rt(i)),
        "normal" ===
          (o =
            void 0 ===
            (o =
              (i = T.cssHooks[t] || T.cssHooks[i]) && "get" in i
                ? i.get(e, !0, n)
                : o)
              ? Ze(e, t, r)
              : o) &&
          t in st &&
          (o = st[t]),
        ("" === n || n) && ((i = parseFloat(o)), !0 === n || isFinite(i))
          ? i || 0
          : o
      );
    },
  }),
    T.each(["height", "width"], function (e, a) {
      T.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !ot.test(T.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ct(e, a, n)
              : Be(e, at, function () {
                  return ct(e, a, n);
                });
        },
        set: function (e, t, n) {
          var r = Re(e),
            o = !g.scrollboxSize() && "absolute" === r.position,
            i = (o || n) && "border-box" === T.css(e, "boxSizing", !1, r),
            n = n ? ut(e, a, n, i, r) : 0;
          return (
            i &&
              o &&
              (n -= Math.ceil(
                e["offset" + a[0].toUpperCase() + a.slice(1)] -
                  parseFloat(r[a]) -
                  ut(e, a, "border", !1, r) -
                  0.5,
              )),
            n &&
              (i = ve.exec(t)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[a] = t), (t = T.css(e, a))),
            lt(0, t, n)
          );
        },
      };
    }),
    (T.cssHooks.marginLeft = Je(g.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ze(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Be(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    T.each({ margin: "", padding: "", border: "Width" }, function (o, i) {
      (T.cssHooks[o + i] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[o + f[t] + i] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== o && (T.cssHooks[o + i].set = lt);
    }),
    T.fn.extend({
      css: function (e, t) {
        return d(
          this,
          function (e, t, n) {
            var r,
              o,
              i = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), o = t.length; a < o; a++)
                i[t[a]] = T.css(e, t[a], !1, r);
              return i;
            }
            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((T.Tween = i).prototype = {
      constructor: i,
      init: function (e, t, n, r, o, i) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || T.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = i || (T.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = i.propHooks[this.prop];
        return (e && e.get ? e : i.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = i.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                T.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : i.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = i.prototype),
    ((i.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = T.css(e.elem, e.prop, "")) && "auto" !== e
              ? e
              : 0;
        },
        set: function (e) {
          T.fx.step[e.prop]
            ? T.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!T.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : T.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = i.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (T.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (T.fx = i.prototype.init),
    (T.fx.step = {});
  var L,
    dt,
    a,
    D,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function ht() {
    dt &&
      (!1 === C.hidden && w.requestAnimationFrame
        ? w.requestAnimationFrame(ht)
        : w.setTimeout(ht, T.fx.interval),
      T.fx.tick());
  }
  function mt() {
    return (
      w.setTimeout(function () {
        L = void 0;
      }),
      (L = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      o = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      o["margin" + (n = f[r])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function vt(e, t, n) {
    for (
      var r,
        o = (O.tweeners[t] || []).concat(O.tweeners["*"]),
        i = 0,
        a = o.length;
      i < a;
      i++
    )
      if ((r = o[i].call(n, t, e))) return r;
  }
  function O(o, e, t) {
    var n,
      i,
      r,
      a,
      s,
      l,
      u,
      c = 0,
      d = O.prefilters.length,
      f = T.Deferred().always(function () {
        delete p.elem;
      }),
      p = function () {
        if (!i) {
          for (
            var e = L || mt(),
              e = Math.max(0, h.startTime + h.duration - e),
              t = 1 - (e / h.duration || 0),
              n = 0,
              r = h.tweens.length;
            n < r;
            n++
          )
            h.tweens[n].run(t);
          if ((f.notifyWith(o, [h, t, e]), t < 1 && r)) return e;
          r || f.notifyWith(o, [h, 1, 0]), f.resolveWith(o, [h]);
        }
        return !1;
      },
      h = f.promise({
        elem: o,
        props: T.extend({}, e),
        opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: L || mt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          t = T.Tween(
            o,
            h.opts,
            e,
            t,
            h.opts.specialEasing[e] || h.opts.easing,
          );
          return h.tweens.push(t), t;
        },
        stop: function (e) {
          var t = 0,
            n = e ? h.tweens.length : 0;
          if (!i) {
            for (i = !0; t < n; t++) h.tweens[t].run(1);
            e
              ? (f.notifyWith(o, [h, 1, 0]), f.resolveWith(o, [h, e]))
              : f.rejectWith(o, [h, e]);
          }
          return this;
        },
      }),
      m = h.props,
      g = m,
      v = h.opts.specialEasing;
    for (r in g)
      if (
        ((s = v[(a = b(r))]),
        (l = g[r]),
        Array.isArray(l) && ((s = l[1]), (l = g[r] = l[0])),
        r !== a && ((g[a] = l), delete g[r]),
        (u = T.cssHooks[a]) && "expand" in u)
      )
        for (r in ((l = u.expand(l)), delete g[a], l))
          r in g || ((g[r] = l[r]), (v[r] = s));
      else v[a] = s;
    for (; c < d; c++)
      if ((n = O.prefilters[c].call(h, o, m, h.opts)))
        return (
          y(n.stop) &&
            (T._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      T.map(m, vt, h),
      y(h.opts.start) && h.opts.start.call(o, h),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always),
      T.fx.timer(T.extend(p, { elem: o, anim: h, queue: h.opts.queue })),
      h
    );
  }
  (T.Animation = T.extend(O, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return be(n.elem, e, ve.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, r = 0, o = (e = y(e) ? ((t = e), ["*"]) : e.match(E)).length;
        r < o;
        r++
      )
        (n = e[r]),
          (O.tweeners[n] = O.tweeners[n] || []),
          O.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          o,
          i,
          a,
          s,
          l,
          u,
          c = "width" in t || "height" in t,
          d = this,
          f = {},
          p = e.style,
          h = e.nodeType && ge(e),
          m = x.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = T._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((o = t[r]), ft.test(o))) {
            if (
              (delete t[r],
              (i = i || "toggle" === o),
              o === (h ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[r]) continue;
              h = !0;
            }
            f[r] = (m && m[r]) || T.style(e, r);
          }
        if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
          for (r in (c &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = x.get(e, "display")),
            "none" === (c = T.css(e, "display")) &&
              (u
                ? (c = u)
                : (A([e], !0),
                  (u = e.style.display || u),
                  (c = T.css(e, "display")),
                  A([e]))),
            "inline" === c || ("inline-block" === c && null != u)) &&
            "none" === T.css(e, "float") &&
            (l ||
              (d.done(function () {
                p.display = u;
              }),
              null == u && ((c = p.display), (u = "none" === c ? "" : c))),
            (p.display = "inline-block")),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (m
                ? "hidden" in m && (h = m.hidden)
                : (m = x.access(e, "fxshow", { display: u })),
              i && (m.hidden = !h),
              h && A([e], !0),
              d.done(function () {
                for (r in (h || A([e]), x.remove(e, "fxshow"), f))
                  T.style(e, r, f[r]);
              })),
              (l = vt(h ? m[r] : 0, r, d)),
              r in m ||
                ((m[r] = l.start), h && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? O.prefilters.unshift(e) : O.prefilters.push(e);
    },
  })),
    (T.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? T.extend({}, e)
          : {
              complete: n || (!n && t) || (y(e) && e),
              duration: e,
              easing: (n && t) || (t && !y(t) && t),
            };
      return (
        T.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in T.fx.speeds
              ? (r.duration = T.fx.speeds[r.duration])
              : (r.duration = T.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
        }),
        r
      );
    }),
    T.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ge)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        function o() {
          var e = O(this, T.extend({}, t), a);
          (i || x.get(this, "finish")) && e.stop(!0);
        }
        var i = T.isEmptyObject(t),
          a = T.speed(e, n, r);
        return (
          (o.finish = o),
          i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        );
      },
      stop: function (o, e, i) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(i);
        }
        return (
          "string" != typeof o && ((i = e), (e = o), (o = void 0)),
          e && this.queue(o || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = T.timers,
              r = x.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(i), (e = !1), n.splice(t, 1));
            (!e && i) || T.dequeue(this, o);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = x.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              o = T.timers,
              i = n ? n.length : 0;
            for (
              t.finish = !0,
                T.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === a &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < i; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    T.each(["toggle", "show", "hide"], function (e, r) {
      var o = T.fn[r];
      T.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    T.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        T.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (T.timers = []),
    (T.fx.tick = function () {
      var e,
        t = 0,
        n = T.timers;
      for (L = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || T.fx.stop(), (L = void 0);
    }),
    (T.fx.timer = function (e) {
      T.timers.push(e), T.fx.start();
    }),
    (T.fx.interval = 13),
    (T.fx.start = function () {
      dt || ((dt = !0), ht());
    }),
    (T.fx.stop = function () {
      dt = null;
    }),
    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (T.fn.delay = function (r, e) {
      return (
        (r = (T.fx && T.fx.speeds[r]) || r),
        this.queue((e = e || "fx"), function (e, t) {
          var n = w.setTimeout(e, r);
          t.stop = function () {
            w.clearTimeout(n);
          };
        })
      );
    }),
    (a = C.createElement("input")),
    (D = C.createElement("select").appendChild(C.createElement("option"))),
    (a.type = "checkbox"),
    (g.checkOn = "" !== a.value),
    (g.optSelected = D.selected),
    ((a = C.createElement("input")).value = "t"),
    (a.type = "radio"),
    (g.radioValue = "t" === a.value);
  var yt,
    bt = T.expr.attrHandle,
    xt =
      (T.fn.extend({
        attr: function (e, t) {
          return d(this, T.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
      T.extend({
        attr: function (e, t, n) {
          var r,
            o,
            i = e.nodeType;
          if (3 !== i && 8 !== i && 2 !== i)
            return void 0 === e.getAttribute
              ? T.prop(e, t, n)
              : ((1 === i && T.isXMLDoc(e)) ||
                  (o =
                    T.attrHooks[t.toLowerCase()] ||
                    (T.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void T.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                  : !(o && "get" in o && null !== (r = o.get(e, t))) &&
                      null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              var n;
              if (!g.radioValue && "radio" === t && l(e, "input"))
                return (
                  (n = e.value),
                  e.setAttribute("type", t),
                  n && (e.value = n),
                  t
                );
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            o = t && t.match(E);
          if (o && 1 === e.nodeType)
            for (; (n = o[r++]); ) e.removeAttribute(n);
        },
      }),
      (yt = {
        set: function (e, t, n) {
          return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = bt[t] || T.find.attr;
        bt[t] = function (e, t, n) {
          var r,
            o,
            i = t.toLowerCase();
          return (
            n ||
              ((o = bt[i]),
              (bt[i] = r),
              (r = null != a(e, t, n) ? i : null),
              (bt[i] = o)),
            r
          );
        };
      }),
      /^(?:input|select|textarea|button)$/i),
    wt = /^(?:a|area)$/i;
  function q(e) {
    return (e.match(E) || []).join(" ");
  }
  function H(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Ct(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(E)) || [];
  }
  T.fn.extend({
    prop: function (e, t) {
      return d(this, T.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[T.propFix[e] || e];
      });
    },
  }),
    T.extend({
      prop: function (e, t, n) {
        var r,
          o,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return (
            (1 === i && T.isXMLDoc(e)) ||
              ((t = T.propFix[t] || t), (o = T.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                ? r
                : (e[t] = n)
              : o && "get" in o && null !== (r = o.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = T.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : xt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    g.optSelected ||
      (T.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
        },
      }),
    T.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        T.propFix[this.toLowerCase()] = this;
      },
    ),
    T.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          s = 0;
        if (y(t))
          return this.each(function (e) {
            T(this).addClass(t.call(this, e, H(this)));
          });
        if ((e = Ct(t)).length)
          for (; (n = this[s++]); )
            if (((a = H(n)), (r = 1 === n.nodeType && " " + q(a) + " "))) {
              for (i = 0; (o = e[i++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              a !== (a = q(r)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          s = 0;
        if (y(t))
          return this.each(function (e) {
            T(this).removeClass(t.call(this, e, H(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = Ct(t)).length)
          for (; (n = this[s++]); )
            if (((a = H(n)), (r = 1 === n.nodeType && " " + q(a) + " "))) {
              for (i = 0; (o = e[i++]); )
                for (; -1 < r.indexOf(" " + o + " "); )
                  r = r.replace(" " + o + " ", " ");
              a !== (a = q(r)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (o, t) {
        var i = typeof o,
          a = "string" == i || Array.isArray(o);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(o)
            : this.removeClass(o)
          : y(o)
            ? this.each(function (e) {
                T(this).toggleClass(o.call(this, e, H(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if (a)
                  for (t = 0, n = T(this), r = Ct(o); (e = r[t++]); )
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== o && "boolean" != i) ||
                    ((e = H(this)) && x.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        (!e && !1 !== o && x.get(this, "__className__")) || "",
                      ));
              });
      },
      hasClass: function (e) {
        for (var t, n = 0, r = " " + e + " "; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (" " + q(H(t)) + " ").indexOf(r))
            return !0;
        return !1;
      },
    });
  function Tt(e) {
    e.stopPropagation();
  }
  var Et = /\r/g,
    St =
      (T.fn.extend({
        val: function (t) {
          var n,
            e,
            r,
            o = this[0];
          return arguments.length
            ? ((r = y(t)),
              this.each(function (e) {
                1 !== this.nodeType ||
                  (null == (e = r ? t.call(this, e, T(this).val()) : t)
                    ? (e = "")
                    : "number" == typeof e
                      ? (e += "")
                      : Array.isArray(e) &&
                        (e = T.map(e, function (e) {
                          return null == e ? "" : e + "";
                        })),
                  (n =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in n &&
                    void 0 !== n.set(this, e, "value")) ||
                  (this.value = e);
              }))
            : o
              ? (n =
                  T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in n &&
                void 0 !== (e = n.get(o, "value"))
                ? e
                : "string" == typeof (e = o.value)
                  ? e.replace(Et, "")
                  : null == e
                    ? ""
                    : e
              : void 0;
        },
      }),
      T.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = T.find.attr(e, "value");
              return null != t ? t : q(T.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n = e.options,
                  r = e.selectedIndex,
                  o = "select-one" === e.type,
                  i = o ? null : [],
                  a = o ? r + 1 : n.length,
                  s = r < 0 ? a : o ? r : 0;
                s < a;
                s++
              )
                if (
                  ((t = n[s]).selected || s === r) &&
                  !t.disabled &&
                  (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))
                ) {
                  if (((t = T(t).val()), o)) return t;
                  i.push(t);
                }
              return i;
            },
            set: function (e, t) {
              for (
                var n, r, o = e.options, i = T.makeArray(t), a = o.length;
                a--;

              )
                ((r = o[a]).selected =
                  -1 < T.inArray(T.valHooks.option.get(r), i)) && (n = !0);
              return n || (e.selectedIndex = -1), i;
            },
          },
        },
      }),
      T.each(["radio", "checkbox"], function () {
        (T.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < T.inArray(T(e).val(), t));
          },
        }),
          g.checkOn ||
            (T.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (g.focusin = "onfocusin" in w),
      /^(?:focusinfocus|focusoutblur)$/),
    kt =
      (T.extend(T.event, {
        trigger: function (e, t, n, r) {
          var o,
            i,
            a,
            s,
            l,
            u,
            c,
            d = [n || C],
            f = W.call(e, "type") ? e.type : e,
            p = W.call(e, "namespace") ? e.namespace.split(".") : [],
            h = (c = i = n = n || C);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !St.test(f + T.event.triggered) &&
            (-1 < f.indexOf(".") &&
              ((f = (p = f.split(".")).shift()), p.sort()),
            (s = f.indexOf(":") < 0 && "on" + f),
            ((e = e[T.expando]
              ? e
              : new T.Event(f, "object" == typeof e && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = p.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : T.makeArray(t, [e])),
            (u = T.event.special[f] || {}),
            r || !u.trigger || !1 !== u.trigger.apply(n, t))
          ) {
            if (!r && !u.noBubble && !m(n)) {
              for (
                a = u.delegateType || f, St.test(a + f) || (h = h.parentNode);
                h;
                h = h.parentNode
              )
                d.push(h), (i = h);
              i === (n.ownerDocument || C) &&
                d.push(i.defaultView || i.parentWindow || w);
            }
            for (o = 0; (h = d[o++]) && !e.isPropagationStopped(); )
              (c = h),
                (e.type = 1 < o ? a : u.bindType || f),
                (l =
                  (x.get(h, "events") || Object.create(null))[e.type] &&
                  x.get(h, "handle")) && l.apply(h, t),
                (l = s && h[s]) &&
                  l.apply &&
                  v(h) &&
                  ((e.result = l.apply(h, t)), !1 === e.result) &&
                  e.preventDefault();
            return (
              (e.type = f),
              r ||
                e.isDefaultPrevented() ||
                (u._default && !1 !== u._default.apply(d.pop(), t)) ||
                !v(n) ||
                (s &&
                  y(n[f]) &&
                  !m(n) &&
                  ((i = n[s]) && (n[s] = null),
                  (T.event.triggered = f),
                  e.isPropagationStopped() && c.addEventListener(f, Tt),
                  n[f](),
                  e.isPropagationStopped() && c.removeEventListener(f, Tt),
                  (T.event.triggered = void 0),
                  i) &&
                  (n[s] = i)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          n = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(n, null, t);
        },
      }),
      T.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            T.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return T.event.trigger(e, t, n, !0);
        },
      }),
      g.focusin ||
        T.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
          function o(e) {
            T.event.simulate(r, e.target, T.event.fix(e));
          }
          T.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = x.access(e, r);
              t || e.addEventListener(n, o, !0), x.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = x.access(e, r) - 1;
              t
                ? x.access(e, r, t)
                : (e.removeEventListener(n, o, !0), x.remove(e, r));
            },
          };
        }),
      w.location),
    At = { guid: Date.now() },
    Nt = /\?/,
    jt =
      ((T.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
          t = new w.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (t && !n) ||
            T.error(
              "Invalid XML: " +
                (n
                  ? T.map(n.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e),
            ),
          t
        );
      }),
      /\[\]$/),
    It = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    Dt = /^(?:input|select|textarea|keygen)/i;
  (T.param = function (e, t) {
    function n(e, t) {
      (t = y(t) ? t() : t),
        (o[o.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
    }
    var r,
      o = [];
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
      T.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(r, e, o, i) {
          if (Array.isArray(e))
            T.each(e, function (e, t) {
              o || jt.test(r)
                ? i(r, t)
                : n(
                    r +
                      "[" +
                      ("object" == typeof t && null != t ? e : "") +
                      "]",
                    t,
                    o,
                    i,
                  );
            });
          else if (o || "object" !== h(e)) i(r, e);
          else for (var t in e) n(r + "[" + t + "]", e[t], o, i);
        })(r, e[r], t, n);
    return o.join("&");
  }),
    T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !T(this).is(":disabled") &&
              Dt.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = T(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? T.map(n, function (e) {
                    return { name: t.name, value: e.replace(It, "\r\n") };
                  })
                : { name: t.name, value: n.replace(It, "\r\n") };
          })
          .get();
      },
    });
  var Ot = /%20/g,
    qt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Mt = /^(?:GET|HEAD)$/,
    _t = /^\/\//,
    Rt = {},
    Bt = {},
    Ft = "*/".concat("*"),
    $t = C.createElement("a");
  function Wt(i) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        o = e.toLowerCase().match(E) || [];
      if (y(t))
        for (; (n = o[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (i[n] = i[n] || []).unshift(t))
            : (i[n] = i[n] || []).push(t);
    };
  }
  function zt(t, r, o, i) {
    var a = {},
      s = t === Bt;
    function l(e) {
      var n;
      return (
        (a[e] = !0),
        T.each(t[e] || [], function (e, t) {
          t = t(r, o, i);
          return "string" != typeof t || s || a[t]
            ? s
              ? !(n = t)
              : void 0
            : (r.dataTypes.unshift(t), l(t), !1);
        }),
        n
      );
    }
    return l(r.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function Ut(e, t) {
    var n,
      r,
      o = T.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : (r = r || {}))[n] = t[n]);
    return r && T.extend(!0, e, r), e;
  }
  ($t.href = kt.href),
    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            kt.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
      },
      ajaxPrefilter: Wt(Rt),
      ajaxTransport: Wt(Bt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var l,
          u,
          c,
          n,
          d,
          f,
          p,
          r,
          h = T.ajaxSetup({}, (t = t || {})),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? T(m) : T.event,
          v = T.Deferred(),
          y = T.Callbacks("once memory"),
          b = h.statusCode || {},
          o = {},
          i = {},
          a = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (f) {
                if (!n)
                  for (n = {}; (t = Pt.exec(c)); )
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return f ? c : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == f &&
                  ((e = i[e.toLowerCase()] = i[e.toLowerCase()] || e),
                  (o[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == f && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (f) x.always(e[x.status]);
                else for (var t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || a;
              return l && l.abort(e), s(0, e), this;
            },
          };
        if (
          (v.promise(x),
          (h.url = ((e || h.url || kt.href) + "").replace(
            _t,
            kt.protocol + "//",
          )),
          (h.type = t.method || t.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(E) || [""]),
          null == h.crossDomain)
        ) {
          e = C.createElement("a");
          try {
            (e.href = h.url),
              (e.href = e.href),
              (h.crossDomain =
                $t.protocol + "//" + $t.host != e.protocol + "//" + e.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = T.param(h.data, h.traditional)),
          zt(Rt, h, t, x),
          !f)
        ) {
          for (r in ((p = T.event && h.global) &&
            0 == T.active++ &&
            T.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Mt.test(h.type)),
          (u = h.url.replace(qt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              (h.data = h.data.replace(Ot, "+"))
            : ((e = h.url.slice(u.length)),
              h.data &&
                (h.processData || "string" == typeof h.data) &&
                ((u += (Nt.test(u) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
                ((u = u.replace(Ht, "$1")),
                (e = (Nt.test(u) ? "&" : "?") + "_=" + At.guid++ + e)),
              (h.url = u + e)),
          h.ifModified &&
            (T.lastModified[u] &&
              x.setRequestHeader("If-Modified-Since", T.lastModified[u]),
            T.etag[u]) &&
            x.setRequestHeader("If-None-Match", T.etag[u]),
          ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
            x.setRequestHeader("Content-Type", h.contentType),
          x.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
              : h.accepts["*"],
          ),
          h.headers))
            x.setRequestHeader(r, h.headers[r]);
          if (h.beforeSend && (!1 === h.beforeSend.call(m, x, h) || f))
            return x.abort();
          if (
            ((a = "abort"),
            y.add(h.complete),
            x.done(h.success),
            x.fail(h.error),
            (l = zt(Bt, h, t, x)))
          ) {
            if (((x.readyState = 1), p && g.trigger("ajaxSend", [x, h]), f))
              return x;
            h.async &&
              0 < h.timeout &&
              (d = w.setTimeout(function () {
                x.abort("timeout");
              }, h.timeout));
            try {
              (f = !1), l.send(o, s);
            } catch (e) {
              if (f) throw e;
              s(-1, e);
            }
          } else s(-1, "No Transport");
        }
        return x;
        function s(e, t, n, r) {
          var o,
            i,
            a,
            s = t;
          f ||
            ((f = !0),
            d && w.clearTimeout(d),
            (l = void 0),
            (c = r || ""),
            (x.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var r, o, i, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (o in s)
                    if (s[o] && s[o].test(r)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) i = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      i = o;
                      break;
                    }
                    a = a || o;
                  }
                  i = i || a;
                }
                if (i) return i !== l[0] && l.unshift(i), n[i];
              })(h, x, n)),
            !r &&
              -1 < T.inArray("script", h.dataTypes) &&
              T.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (a = (function (e, t, n, r) {
              var o,
                i,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (i = c.shift(); i; )
                if (
                  (e.responseFields[i] && (n[e.responseFields[i]] = t),
                  !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = i),
                  (i = c.shift()))
                )
                  if ("*" === i) i = l;
                  else if ("*" !== l && l !== i) {
                    if (!(a = u[l + " " + i] || u["* " + i]))
                      for (o in u)
                        if (
                          (s = o.split(" "))[1] === i &&
                          (a = u[l + " " + s[0]] || u["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = u[o])
                            : !0 !== u[o] && ((i = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + i,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, a, x, r)),
            r
              ? (h.ifModified &&
                  ((n = x.getResponseHeader("Last-Modified")) &&
                    (T.lastModified[u] = n),
                  (n = x.getResponseHeader("etag"))) &&
                  (T.etag[u] = n),
                204 === e || "HEAD" === h.type
                  ? (s = "nocontent")
                  : 304 === e
                    ? (s = "notmodified")
                    : ((s = a.state), (o = a.data), (r = !(i = a.error))))
              : ((i = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
            (x.status = e),
            (x.statusText = (t || s) + ""),
            r ? v.resolveWith(m, [o, s, x]) : v.rejectWith(m, [x, s, i]),
            x.statusCode(b),
            (b = void 0),
            p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? o : i]),
            y.fireWith(m, [x, s]),
            p &&
              (g.trigger("ajaxComplete", [x, h]),
              --T.active || T.event.trigger("ajaxStop")));
        }
      },
      getJSON: function (e, t, n) {
        return T.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script");
      },
    }),
    T.each(["get", "post"], function (e, o) {
      T[o] = function (e, t, n, r) {
        return (
          y(t) && ((r = r || n), (n = t), (t = void 0)),
          T.ajax(
            T.extend(
              { url: e, type: o, dataType: r, data: t, success: n },
              T.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    T.ajaxPrefilter(function (e) {
      for (var t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (T._evalUrl = function (e, t, n) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          T.globalEval(e, t, n);
        },
      });
    }),
    T.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (y(e) && (e = e.call(this[0])),
            (e = T(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return y(n)
          ? this.each(function (e) {
              T(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = T(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = y(t);
        return this.each(function (e) {
          T(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              T(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e);
    }),
    (T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (T.ajaxSettings.xhr = function () {
      try {
        return new w.XMLHttpRequest();
      } catch (e) {}
    });
  var Xt = { 0: 200, 1223: 204 },
    Qt = T.ajaxSettings.xhr(),
    Yt =
      ((g.cors = !!Qt && "withCredentials" in Qt),
      (g.ajax = Qt = !!Qt),
      T.ajaxTransport(function (o) {
        var i, a;
        if (g.cors || (Qt && !o.crossDomain))
          return {
            send: function (e, t) {
              var n,
                r = o.xhr();
              if (
                (r.open(o.type, o.url, o.async, o.username, o.password),
                o.xhrFields)
              )
                for (n in o.xhrFields) r[n] = o.xhrFields[n];
              for (n in (o.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(o.mimeType),
              o.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (i = function (e) {
                return function () {
                  i &&
                    ((i =
                      a =
                      r.onload =
                      r.onerror =
                      r.onabort =
                      r.ontimeout =
                      r.onreadystatechange =
                        null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                        ? "number" != typeof r.status
                          ? t(0, "error")
                          : t(r.status, r.statusText)
                        : t(
                            Xt[r.status] || r.status,
                            r.statusText,
                            "text" !== (r.responseType || "text") ||
                              "string" != typeof r.responseText
                              ? { binary: r.response }
                              : { text: r.responseText },
                            r.getAllResponseHeaders(),
                          ));
                };
              }),
                (r.onload = i()),
                (a = r.onerror = r.ontimeout = i("error")),
                void 0 !== r.onabort
                  ? (r.onabort = a)
                  : (r.onreadystatechange = function () {
                      4 === r.readyState &&
                        w.setTimeout(function () {
                          i && a();
                        });
                    }),
                (i = i("abort"));
              try {
                r.send((o.hasContent && o.data) || null);
              } catch (e) {
                if (i) throw e;
              }
            },
            abort: function () {
              i && i();
            },
          };
      }),
      T.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      T.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return T.globalEval(e), e;
          },
        },
      }),
      T.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      T.ajaxTransport("script", function (n) {
        var r, o;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (r = T("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (o = function (e) {
                    r.remove(),
                      (o = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  }),
                )),
                C.head.appendChild(r[0]);
            },
            abort: function () {
              o && o();
            },
          };
      }),
      []),
    Vt = /(=)\?(?=&|$)|\?\?/,
    Gt =
      (T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Yt.pop() || T.expando + "_" + At.guid++;
          return (this[e] = !0), e;
        },
      }),
      T.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          o,
          i,
          a =
            !1 !== e.jsonp &&
            (Vt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded",
                  ) &&
                Vt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Vt, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return i || T.error(r + " was not called"), i[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = w[r]),
            (w[r] = function () {
              i = arguments;
            }),
            n.always(function () {
              void 0 === o ? T(w).removeProp(r) : (w[r] = o),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(r)),
                i && y(o) && o(i[0]),
                (i = o = void 0);
            }),
            "script"
          );
      }),
      (g.createHTMLDocument =
        (((e = C.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === e.childNodes.length)),
      (T.parseHTML = function (e, t, n) {
        var r;
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (g.createHTMLDocument
                ? (((r = (t =
                    C.implementation.createHTMLDocument("")).createElement(
                    "base",
                  )).href = C.location.href),
                  t.head.appendChild(r))
                : (t = C)),
            (r = !n && []),
            (n = K.exec(e))
              ? [t.createElement(n[1])]
              : ((n = ke([e], t, r)),
                r && r.length && T(r).remove(),
                T.merge([], n.childNodes)));
      }),
      (T.fn.load = function (e, t, n) {
        var r,
          o,
          i,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((r = q(e.slice(s))), (e = e.slice(0, s))),
          y(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (o = "POST"),
          0 < a.length &&
            T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (e) {
                (i = arguments),
                  a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, i || [e.responseText, t, e]);
                    });
                  },
              ),
          this
        );
      }),
      (T.expr.pseudos.animated = function (t) {
        return T.grep(T.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (T.offset = {
        setOffset: function (e, t, n) {
          var r,
            o,
            i,
            a,
            s = T.css(e, "position"),
            l = T(e),
            u = {};
          "static" === s && (e.style.position = "relative"),
            (i = l.offset()),
            (r = T.css(e, "top")),
            (a = T.css(e, "left")),
            (s =
              ("absolute" === s || "fixed" === s) &&
              -1 < (r + a).indexOf("auto")
                ? ((o = (s = l.position()).top), s.left)
                : ((o = parseFloat(r) || 0), parseFloat(a) || 0)),
            null != (t = y(t) ? t.call(e, n, T.extend({}, i)) : t).top &&
              (u.top = t.top - i.top + o),
            null != t.left && (u.left = t.left - i.left + s),
            "using" in t ? t.using.call(e, u) : l.css(u);
        },
      }),
      T.fn.extend({
        offset: function (t) {
          var e, n;
          return arguments.length
            ? void 0 === t
              ? this
              : this.each(function (e) {
                  T.offset.setOffset(this, t, e);
                })
            : (n = this[0])
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (n = n.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };
            if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === T.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                (o.left += T.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - T.css(r, "marginTop", !0),
              left: t.left - o.left - T.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === T.css(e, "position");

            )
              e = e.offsetParent;
            return e || S;
          });
        },
      }),
      T.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, o) {
          var i = "pageYOffset" === o;
          T.fn[t] = function (e) {
            return d(
              this,
              function (e, t, n) {
                var r;
                if (
                  (m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === n)
                )
                  return r ? r[o] : e[t];
                r
                  ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length,
            );
          };
        },
      ),
      T.each(["top", "left"], function (e, n) {
        T.cssHooks[n] = Je(g.pixelPosition, function (e, t) {
          if (t)
            return (t = Ze(e, n)), Ye.test(t) ? T(e).position()[n] + "px" : t;
        });
      }),
      T.each({ Height: "height", Width: "width" }, function (a, s) {
        T.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (r, i) {
            T.fn[i] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                o = r || (!0 === e || !0 === t ? "margin" : "border");
              return d(
                this,
                function (e, t, n) {
                  var r;
                  return m(e)
                    ? 0 === i.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                      ? ((r = e.documentElement),
                        Math.max(
                          e.body["scroll" + a],
                          r["scroll" + a],
                          e.body["offset" + a],
                          r["offset" + a],
                          r["client" + a],
                        ))
                      : void 0 === n
                        ? T.css(e, t, o)
                        : T.style(e, t, n, o);
                },
                s,
                n ? e : void 0,
                n,
              );
            };
          },
        );
      }),
      T.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          T.fn[t] = function (e) {
            return this.on(t, e);
          };
        },
      ),
      T.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      T.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " ",
        ),
        function (e, n) {
          T.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        },
      ),
      /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
    Kt =
      ((T.proxy = function (e, t) {
        var n, r;
        if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), y(e)))
          return (
            (n = s.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, n.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            r
          );
      }),
      (T.holdReady = function (e) {
        e ? T.readyWait++ : T.ready(!0);
      }),
      (T.isArray = Array.isArray),
      (T.parseJSON = JSON.parse),
      (T.nodeName = l),
      (T.isFunction = y),
      (T.isWindow = m),
      (T.camelCase = b),
      (T.type = h),
      (T.now = Date.now),
      (T.isNumeric = function (e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (T.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return T;
        }),
      w.jQuery),
    Zt = w.$;
  return (
    (T.noConflict = function (e) {
      return w.$ === T && (w.$ = Zt), e && w.jQuery === T && (w.jQuery = Kt), T;
    }),
    void 0 === P && (w.jQuery = w.$ = T),
    T
  );
}),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define([], function () {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(e))
        : (e.Gumshoe = t(e));
  })(
    "undefined" != typeof global
      ? global
      : "undefined" != typeof window
        ? window
        : this,
    function (c) {
      "use strict";
      function d(e) {
        e &&
          e.sort(function (e, t) {
            return r(e.content) < r(t.content) ? -1 : 1;
          });
      }
      function n() {
        return (
          c.innerHeight + c.pageYOffset >=
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
          )
        );
      }
      function f(e, t) {
        var n;
        e &&
          (n = e.nav.closest("li")) &&
          (n.classList.remove(t.navClass),
          e.content.classList.remove(t.contentClass),
          o(n, t),
          h("gumshoeDeactivate", n, {
            link: e.nav,
            content: e.content,
            settings: t,
          }));
      }
      var p = {
          navClass: "active",
          contentClass: "active",
          nested: !1,
          nestedClass: "active",
          offset: 0,
          reflow: !1,
          events: !0,
        },
        h = function (e, t, n) {
          n.settings.events &&
            ((e = new CustomEvent(e, {
              bubbles: !0,
              cancelable: !0,
              detail: n,
            })),
            t.dispatchEvent(e));
        },
        r = function (e) {
          var t = 0;
          if (e.offsetParent)
            for (; e; ) (t += e.offsetTop), (e = e.offsetParent);
          return 0 <= t ? t : 0;
        },
        m = function (e, t, n) {
          (e = e.getBoundingClientRect()),
            (t =
              "function" == typeof (t = t).offset
                ? parseFloat(t.offset())
                : parseFloat(t.offset));
          return n
            ? parseInt(e.bottom, 10) <
                (c.innerHeight || document.documentElement.clientHeight)
            : parseInt(e.top, 10) <= t;
        },
        g = function (e, t) {
          return !(!n() || !m(e.content, t, !0));
        },
        o = function (e, t) {
          t.nested &&
            (e = e.parentNode.closest("li")) &&
            (e.classList.remove(t.nestedClass), o(e, t));
        },
        v = function (e, t) {
          t.nested &&
            (e = e.parentNode.closest("li")) &&
            (e.classList.add(t.nestedClass), v(e, t));
        };
      return function (e, t) {
        function n(e) {
          s && c.cancelAnimationFrame(s),
            (s = c.requestAnimationFrame(u.detect));
        }
        function r(e) {
          s && c.cancelAnimationFrame(s),
            (s = c.requestAnimationFrame(function () {
              d(i), u.detect();
            }));
        }
        var o,
          i,
          a,
          s,
          l,
          u = {
            setup: function () {
              (o = document.querySelectorAll(e)),
                (i = []),
                Array.prototype.forEach.call(o, function (e) {
                  var t = document.getElementById(
                    decodeURIComponent(e.hash.substr(1)),
                  );
                  t && i.push({ nav: e, content: t });
                }),
                d(i);
            },
          };
        (u.detect = function () {
          var e,
            t,
            n,
            r = (function (e, t) {
              var n = e[e.length - 1];
              if (g(n, t)) return n;
              for (var r = e.length - 1; 0 <= r; r--)
                if (m(e[r].content, t)) return e[r];
            })(i, l);
          r
            ? (a && r.content === a.content) ||
              (f(a, l),
              (t = l),
              (e = r) &&
                (n = e.nav.closest("li")) &&
                (n.classList.add(t.navClass),
                e.content.classList.add(t.contentClass),
                v(n, t),
                h("gumshoeActivate", n, {
                  link: e.nav,
                  content: e.content,
                  settings: t,
                })),
              (a = r))
            : a && (f(a, l), (a = null));
        }),
          (u.destroy = function () {
            a && f(a, l),
              c.removeEventListener("scroll", n, !1),
              l.reflow && c.removeEventListener("resize", r, !1),
              (l = s = a = o = i = null);
          });
        return (
          (l = (function () {
            var n = {};
            return (
              Array.prototype.forEach.call(arguments, function (e) {
                for (var t in e) {
                  if (!e.hasOwnProperty(t)) return;
                  n[t] = e[t];
                }
              }),
              n
            );
          })(p, t || {})),
          u.setup(),
          u.detect(),
          c.addEventListener("scroll", n, !1),
          l.reflow && c.addEventListener("resize", r, !1),
          u
        );
      };
    },
  ),
  (function (e, c) {
    var r,
      t = e.jQuery || e.Cowboy || (e.Cowboy = {});
    (t.throttle = r =
      function (o, i, a, s) {
        var l,
          u = 0;
        function e() {
          var e = this,
            t = +new Date() - u,
            n = arguments;
          function r() {
            (u = +new Date()), a.apply(e, n);
          }
          s && !l && r(),
            l && clearTimeout(l),
            s === c && o < t
              ? r()
              : !0 !== i &&
                (l = setTimeout(
                  s
                    ? function () {
                        l = c;
                      }
                    : r,
                  s === c ? o - t : o,
                ));
        }
        return (
          "boolean" != typeof i && ((s = a), (a = i), (i = c)),
          t.guid && (e.guid = a.guid = a.guid || t.guid++),
          e
        );
      }),
      (t.debounce = function (e, t, n) {
        return n === c ? r(e, t, !1) : r(e, n, !1 !== t);
      });
  })(this),
  (function (i) {
    "use strict";
    i.fn.fitVids = function (e) {
      var t,
        n,
        o = { customSelector: null, ignore: null };
      return (
        document.getElementById("fit-vids-style") ||
          ((t = document.head || document.getElementsByTagName("head")[0]),
          ((n = document.createElement("div")).innerHTML =
            '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
          t.appendChild(n.childNodes[1])),
        e && i.extend(o, e),
        this.each(function () {
          var e = [
              'iframe[src*="player.vimeo.com"]',
              'iframe[src*="youtube.com"]',
              'iframe[src*="youtube-nocookie.com"]',
              'iframe[src*="kickstarter.com"][src*="video.html"]',
              "object",
              "embed",
            ],
            r =
              (o.customSelector && e.push(o.customSelector), ".fitvidsignore"),
            e =
              (o.ignore && (r = r + ", " + o.ignore),
              i(this).find(e.join(",")));
          (e = (e = e.not("object object")).not(r)).each(function (e) {
            var t,
              n = i(this);
            0 < n.parents(r).length ||
              ("embed" === this.tagName.toLowerCase() &&
                n.parent("object").length) ||
              n.parent(".fluid-width-video-wrapper").length ||
              (n.css("height") ||
                n.css("width") ||
                (!isNaN(n.attr("height")) && !isNaN(n.attr("width"))) ||
                (n.attr("height", 9), n.attr("width", 16)),
              (t =
                ("object" === this.tagName.toLowerCase() ||
                (n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)))
                  ? parseInt(n.attr("height"), 10)
                  : n.height()) /
                (isNaN(parseInt(n.attr("width"), 10))
                  ? n.width()
                  : parseInt(n.attr("width"), 10))),
              n.attr("id") || n.attr("id", "fitvid" + e),
              n
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * t + "%"),
              n.removeAttr("height").removeAttr("width"));
          });
        })
      );
    };
  })(window.jQuery || window.Zepto),
  $(function () {
    var n,
      r,
      e,
      o,
      t = $("nav.greedy-nav .greedy-nav__toggle"),
      i = $("nav.greedy-nav .visible-links"),
      a = $("nav.greedy-nav .hidden-links"),
      s = $("nav.greedy-nav"),
      l = $("nav.greedy-nav .site-logo"),
      u = $("nav.greedy-nav .site-logo img"),
      c = $("nav.greedy-nav .site-title"),
      d = $("nav.greedy-nav button.search__toggle");
    function f() {
      function t(e, t) {
        (r += t), (n += 1), o.push(r);
      }
      (r = n = 0),
        (e = 1e3),
        (o = []),
        i.children().outerWidth(t),
        a.children().each(function () {
          var e;
          (e = (e = $(this)).clone()).css("visibility", "hidden"),
            i.append(e),
            t(0, e.outerWidth()),
            e.remove();
        });
    }
    f();
    var p,
      h,
      m,
      g,
      v = $(window).width(),
      y = v < 768 ? 0 : v < 1024 ? 1 : v < 1280 ? 2 : 3;
    function b() {
      var e =
        (v = $(window).width()) < 768 ? 0 : v < 1024 ? 1 : v < 1280 ? 2 : 3;
      e !== y && f(),
        (y = e),
        (h = i.children().length),
        (p =
          s.innerWidth() -
          (0 !== l.length ? l.outerWidth(!0) : 0) -
          c.outerWidth(!0) -
          (0 !== d.length ? d.outerWidth(!0) : 0) -
          (h !== o.length ? t.outerWidth(!0) : 0)),
        (m = o[h - 1]),
        p < m
          ? (i.children().last().prependTo(a), --h, b())
          : p + (h === o.length - 1 ? t.outerWidth(!0) : 0) > o[h] &&
            (a.children().first().appendTo(i), (h += 1), b()),
        t.attr("count", n - h),
        h === n ? t.addClass("hidden") : t.removeClass("hidden");
    }
    $(window).resize(function () {
      b();
    }),
      t.on("click", function () {
        a.toggleClass("hidden"), $(this).toggleClass("close"), clearTimeout(g);
      }),
      a
        .on("click", function () {
          a.addClass("hidden"), t.removeClass("close");
        })
        .on("mouseleave", function () {
          g = setTimeout(function () {
            a.addClass("hidden"), $(".greedy-nav__toggle").removeClass("close");
          }, e);
        })
        .on("mouseenter", function () {
          clearTimeout(g);
        }),
      0 === u.length || u[0].complete || 0 !== u[0].naturalWidth
        ? b()
        : u.one("load error", b);
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
        ? e(require("jquery"))
        : e(window.jQuery || window.Zepto);
  })(function (u) {
    function e() {}
    function c(e, t) {
      h.ev.on("mfp" + e + T, t);
    }
    function d(e, t, n, r) {
      var o = document.createElement("div");
      return (
        (o.className = "mfp-" + e),
        n && (o.innerHTML = n),
        r ? t && t.appendChild(o) : ((o = u(o)), t && o.appendTo(t)),
        o
      );
    }
    function f(e, t) {
      h.ev.triggerHandler("mfp" + e, t),
        h.st.callbacks &&
          ((e = e.charAt(0).toLowerCase() + e.slice(1)), h.st.callbacks[e]) &&
          h.st.callbacks[e].apply(h, u.isArray(t) ? t : [t]);
    }
    function p(e) {
      return (
        (e === n && h.currTemplate.closeBtn) ||
          ((h.currTemplate.closeBtn = u(
            h.st.closeMarkup.replace("%title%", h.st.tClose),
          )),
          (n = e)),
        h.currTemplate.closeBtn
      );
    }
    function i() {
      u.magnificPopup.instance ||
        ((h = new e()).init(), (u.magnificPopup.instance = h));
    }
    function a() {
      y && (v.after(y.addClass(l)).detach(), (y = null));
    }
    function o() {
      b && u(document.body).removeClass(b);
    }
    function t() {
      o(), h.req && h.req.abort();
    }
    var h,
      r,
      m,
      s,
      g,
      n,
      l,
      v,
      y,
      b,
      x = "Close",
      P = "BeforeClose",
      w = "MarkupParse",
      C = "Open",
      T = ".mfp",
      E = "mfp-ready",
      M = "mfp-removing",
      S = "mfp-prevent-close",
      k = !!window.jQuery,
      A = u(window),
      N =
        ((u.magnificPopup = {
          instance: null,
          proto: (e.prototype = {
            constructor: e,
            init: function () {
              var e = navigator.appVersion;
              (h.isLowIE = h.isIE8 =
                document.all && !document.addEventListener),
                (h.isAndroid = /android/gi.test(e)),
                (h.isIOS = /iphone|ipad|ipod/gi.test(e)),
                (h.supportsTransition = (function () {
                  var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                  if (void 0 !== e.transition) return !0;
                  for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
                  return !1;
                })()),
                (h.probablyMobile =
                  h.isAndroid ||
                  h.isIOS ||
                  /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                    navigator.userAgent,
                  )),
                (m = u(document)),
                (h.popupsCache = {});
            },
            open: function (e) {
              if (!1 === e.isObj) {
                (h.items = e.items.toArray()), (h.index = 0);
                for (var t, n = e.items, r = 0; r < n.length; r++)
                  if ((t = (t = n[r]).parsed ? t.el[0] : t) === e.el[0]) {
                    h.index = r;
                    break;
                  }
              } else
                (h.items = u.isArray(e.items) ? e.items : [e.items]),
                  (h.index = e.index || 0);
              if (!h.isOpen) {
                (h.types = []),
                  (g = ""),
                  e.mainEl && e.mainEl.length
                    ? (h.ev = e.mainEl.eq(0))
                    : (h.ev = m),
                  e.key
                    ? (h.popupsCache[e.key] || (h.popupsCache[e.key] = {}),
                      (h.currTemplate = h.popupsCache[e.key]))
                    : (h.currTemplate = {}),
                  (h.st = u.extend(!0, {}, u.magnificPopup.defaults, e)),
                  (h.fixedContentPos =
                    "auto" === h.st.fixedContentPos
                      ? !h.probablyMobile
                      : h.st.fixedContentPos),
                  h.st.modal &&
                    ((h.st.closeOnContentClick = !1),
                    (h.st.closeOnBgClick = !1),
                    (h.st.showCloseBtn = !1),
                    (h.st.enableEscapeKey = !1)),
                  h.bgOverlay ||
                    ((h.bgOverlay = d("bg").on("click" + T, function () {
                      h.close();
                    })),
                    (h.wrap = d("wrap")
                      .attr("tabindex", -1)
                      .on("click" + T, function (e) {
                        h._checkIfClose(e.target) && h.close();
                      })),
                    (h.container = d("container", h.wrap))),
                  (h.contentContainer = d("content")),
                  h.st.preloader &&
                    (h.preloader = d("preloader", h.container, h.st.tLoading));
                var o = u.magnificPopup.modules;
                for (r = 0; r < o.length; r++) {
                  var i = (i = o[r]).charAt(0).toUpperCase() + i.slice(1);
                  h["init" + i].call(h);
                }
                f("BeforeOpen"),
                  h.st.showCloseBtn &&
                    (h.st.closeBtnInside
                      ? (c(w, function (e, t, n, r) {
                          n.close_replaceWith = p(r.type);
                        }),
                        (g += " mfp-close-btn-in"))
                      : h.wrap.append(p())),
                  h.st.alignTop && (g += " mfp-align-top"),
                  h.fixedContentPos
                    ? h.wrap.css({
                        overflow: h.st.overflowY,
                        overflowX: "hidden",
                        overflowY: h.st.overflowY,
                      })
                    : h.wrap.css({ top: A.scrollTop(), position: "absolute" }),
                  (!1 !== h.st.fixedBgPos &&
                    ("auto" !== h.st.fixedBgPos || h.fixedContentPos)) ||
                    h.bgOverlay.css({
                      height: m.height(),
                      position: "absolute",
                    }),
                  h.st.enableEscapeKey &&
                    m.on("keyup" + T, function (e) {
                      27 === e.keyCode && h.close();
                    }),
                  A.on("resize" + T, function () {
                    h.updateSize();
                  }),
                  h.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                  g && h.wrap.addClass(g);
                var a = (h.wH = A.height()),
                  s = {},
                  l =
                    (h.fixedContentPos &&
                      h._hasScrollBar(a) &&
                      (l = h._getScrollbarSize()) &&
                      (s.marginRight = l),
                    h.fixedContentPos &&
                      (h.isIE7
                        ? u("body, html").css("overflow", "hidden")
                        : (s.overflow = "hidden")),
                    h.st.mainClass);
                return (
                  h.isIE7 && (l += " mfp-ie7"),
                  l && h._addClassToMFP(l),
                  h.updateItemHTML(),
                  f("BuildControls"),
                  u("html").css(s),
                  h.bgOverlay
                    .add(h.wrap)
                    .prependTo(h.st.prependTo || u(document.body)),
                  (h._lastFocusedEl = document.activeElement),
                  setTimeout(function () {
                    h.content
                      ? (h._addClassToMFP(E), h._setFocus())
                      : h.bgOverlay.addClass(E),
                      m.on("focusin" + T, h._onFocusIn);
                  }, 16),
                  (h.isOpen = !0),
                  h.updateSize(a),
                  f(C),
                  e
                );
              }
              h.updateItemHTML();
            },
            close: function () {
              h.isOpen &&
                (f(P),
                (h.isOpen = !1),
                h.st.removalDelay && !h.isLowIE && h.supportsTransition
                  ? (h._addClassToMFP(M),
                    setTimeout(function () {
                      h._close();
                    }, h.st.removalDelay))
                  : h._close());
            },
            _close: function () {
              f(x);
              var e = M + " " + E + " ";
              h.bgOverlay.detach(),
                h.wrap.detach(),
                h.container.empty(),
                h.st.mainClass && (e += h.st.mainClass + " "),
                h._removeClassFromMFP(e),
                h.fixedContentPos &&
                  ((e = { marginRight: "" }),
                  h.isIE7
                    ? u("body, html").css("overflow", "")
                    : (e.overflow = ""),
                  u("html").css(e)),
                m.off("keyup.mfp focusin" + T),
                h.ev.off(T),
                h.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                h.bgOverlay.attr("class", "mfp-bg"),
                h.container.attr("class", "mfp-container"),
                !h.st.showCloseBtn ||
                  (h.st.closeBtnInside &&
                    !0 !== h.currTemplate[h.currItem.type]) ||
                  (h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach()),
                h.st.autoFocusLast &&
                  h._lastFocusedEl &&
                  u(h._lastFocusedEl).focus(),
                (h.currItem = null),
                (h.content = null),
                (h.currTemplate = null),
                (h.prevHeight = 0),
                f("AfterClose");
            },
            updateSize: function (e) {
              var t;
              h.isIOS
                ? ((t =
                    document.documentElement.clientWidth / window.innerWidth),
                  (t = window.innerHeight * t),
                  h.wrap.css("height", t),
                  (h.wH = t))
                : (h.wH = e || A.height()),
                h.fixedContentPos || h.wrap.css("height", h.wH),
                f("Resize");
            },
            updateItemHTML: function () {
              var e = h.items[h.index],
                t =
                  (h.contentContainer.detach(),
                  h.content && h.content.detach(),
                  (e = e.parsed ? e : h.parseEl(h.index)).type),
                n =
                  (f("BeforeChange", [h.currItem ? h.currItem.type : "", t]),
                  (h.currItem = e),
                  h.currTemplate[t] ||
                    ((n = !!h.st[t] && h.st[t].markup),
                    f("FirstMarkupParse", n),
                    (h.currTemplate[t] = !n || u(n))),
                  s &&
                    s !== e.type &&
                    h.container.removeClass("mfp-" + s + "-holder"),
                  h["get" + t.charAt(0).toUpperCase() + t.slice(1)](
                    e,
                    h.currTemplate[t],
                  ));
              h.appendContent(n, t),
                (e.preloaded = !0),
                f("Change", e),
                (s = e.type),
                h.container.prepend(h.contentContainer),
                f("AfterChange");
            },
            appendContent: function (e, t) {
              (h.content = e)
                ? h.st.showCloseBtn &&
                  h.st.closeBtnInside &&
                  !0 === h.currTemplate[t]
                  ? h.content.find(".mfp-close").length || h.content.append(p())
                  : (h.content = e)
                : (h.content = ""),
                f("BeforeAppend"),
                h.container.addClass("mfp-" + t + "-holder"),
                h.contentContainer.append(h.content);
            },
            parseEl: function (e) {
              var t,
                n = h.items[e];
              if (
                (n = n.tagName
                  ? { el: u(n) }
                  : ((t = n.type), { data: n, src: n.src })).el
              ) {
                for (var r = h.types, o = 0; o < r.length; o++)
                  if (n.el.hasClass("mfp-" + r[o])) {
                    t = r[o];
                    break;
                  }
                (n.src = n.el.attr("data-mfp-src")),
                  n.src || (n.src = n.el.attr("href"));
              }
              return (
                (n.type = t || h.st.type || "inline"),
                (n.index = e),
                (n.parsed = !0),
                (h.items[e] = n),
                f("ElementParse", n),
                h.items[e]
              );
            },
            addGroup: function (t, n) {
              function e(e) {
                (e.mfpEl = this), h._openClick(e, t, n);
              }
              var r = "click.magnificPopup";
              ((n = n || {}).mainEl = t),
                n.items
                  ? ((n.isObj = !0), t.off(r).on(r, e))
                  : ((n.isObj = !1),
                    n.delegate
                      ? t.off(r).on(r, n.delegate, e)
                      : (n.items = t).off(r).on(r, e));
            },
            _openClick: function (e, t, n) {
              var r = (void 0 !== n.midClick ? n : u.magnificPopup.defaults)
                .midClick;
              if (
                r ||
                !(
                  2 === e.which ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.altKey ||
                  e.shiftKey
                )
              ) {
                r = (void 0 !== n.disableOn ? n : u.magnificPopup.defaults)
                  .disableOn;
                if (r)
                  if (u.isFunction(r)) {
                    if (!r.call(h)) return !0;
                  } else if (A.width() < r) return !0;
                e.type && (e.preventDefault(), h.isOpen) && e.stopPropagation(),
                  (n.el = u(e.mfpEl)),
                  n.delegate && (n.items = t.find(n.delegate)),
                  h.open(n);
              }
            },
            updateStatus: function (e, t) {
              var n;
              h.preloader &&
                (r !== e && h.container.removeClass("mfp-s-" + r),
                (n = {
                  status: e,
                  text: (t = t || "loading" !== e ? t : h.st.tLoading),
                }),
                f("UpdateStatus", n),
                (e = n.status),
                h.preloader.html((t = n.text)),
                h.preloader.find("a").on("click", function (e) {
                  e.stopImmediatePropagation();
                }),
                h.container.addClass("mfp-s-" + e),
                (r = e));
            },
            _checkIfClose: function (e) {
              if (!u(e).hasClass(S)) {
                var t = h.st.closeOnContentClick,
                  n = h.st.closeOnBgClick;
                if (t && n) return !0;
                if (
                  !h.content ||
                  u(e).hasClass("mfp-close") ||
                  (h.preloader && e === h.preloader[0])
                )
                  return !0;
                if (e === h.content[0] || u.contains(h.content[0], e)) {
                  if (t) return !0;
                } else if (n && u.contains(document, e)) return !0;
                return !1;
              }
            },
            _addClassToMFP: function (e) {
              h.bgOverlay.addClass(e), h.wrap.addClass(e);
            },
            _removeClassFromMFP: function (e) {
              this.bgOverlay.removeClass(e), h.wrap.removeClass(e);
            },
            _hasScrollBar: function (e) {
              return (
                (h.isIE7 ? m.height() : document.body.scrollHeight) >
                (e || A.height())
              );
            },
            _setFocus: function () {
              (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus();
            },
            _onFocusIn: function (e) {
              if (e.target !== h.wrap[0] && !u.contains(h.wrap[0], e.target))
                return h._setFocus(), !1;
            },
            _parseMarkup: function (o, e, t) {
              var i;
              t.data && (e = u.extend(t.data, e)),
                f(w, [o, e, t]),
                u.each(e, function (e, t) {
                  if (void 0 === t || !1 === t) return !0;
                  var n, r;
                  1 < (i = e.split("_")).length
                    ? 0 < (n = o.find(T + "-" + i[0])).length &&
                      ("replaceWith" === (r = i[1])
                        ? n[0] !== t[0] && n.replaceWith(t)
                        : "img" === r
                          ? n.is("img")
                            ? n.attr("src", t)
                            : n.replaceWith(
                                u("<img>")
                                  .attr("src", t)
                                  .attr("class", n.attr("class")),
                              )
                          : n.attr(i[1], t))
                    : o.find(T + "-" + e).html(t);
                });
            },
            _getScrollbarSize: function () {
              var e;
              return (
                void 0 === h.scrollbarSize &&
                  (((e = document.createElement("div")).style.cssText =
                    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                  document.body.appendChild(e),
                  (h.scrollbarSize = e.offsetWidth - e.clientWidth),
                  document.body.removeChild(e)),
                h.scrollbarSize
              );
            },
          }),
          modules: [],
          open: function (e, t) {
            return (
              i(),
              ((e = e ? u.extend(!0, {}, e) : {}).isObj = !0),
              (e.index = t || 0),
              this.instance.open(e)
            );
          },
          close: function () {
            return u.magnificPopup.instance && u.magnificPopup.instance.close();
          },
          registerModule: function (e, t) {
            t.options && (u.magnificPopup.defaults[e] = t.options),
              u.extend(this.proto, t.proto),
              this.modules.push(e);
          },
          defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup:
              '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0,
          },
        }),
        (u.fn.magnificPopup = function (e) {
          i();
          var t,
            n,
            r,
            o = u(this);
          return (
            "string" == typeof e
              ? "open" === e
                ? ((t = k ? o.data("magnificPopup") : o[0].magnificPopup),
                  (n = parseInt(arguments[1], 10) || 0),
                  (r = t.items
                    ? t.items[n]
                    : ((r = o),
                      (r = t.delegate ? r.find(t.delegate) : r).eq(n))),
                  h._openClick({ mfpEl: r }, o, t))
                : h.isOpen &&
                  h[e].apply(h, Array.prototype.slice.call(arguments, 1))
              : ((e = u.extend(!0, {}, e)),
                k ? o.data("magnificPopup", e) : (o[0].magnificPopup = e),
                h.addGroup(o, e)),
            o
          );
        }),
        "inline"),
      j =
        (u.magnificPopup.registerModule(N, {
          options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found",
          },
          proto: {
            initInline: function () {
              h.types.push(N),
                c(x + "." + N, function () {
                  a();
                });
            },
            getInline: function (e, t) {
              var n, r, o;
              return (
                a(),
                e.src
                  ? ((n = h.st.inline),
                    (r = u(e.src)).length
                      ? ((o = r[0].parentNode) &&
                          o.tagName &&
                          (v ||
                            ((l = n.hiddenClass), (v = d(l)), (l = "mfp-" + l)),
                          (y = r.after(v).detach().removeClass(l))),
                        h.updateStatus("ready"))
                      : (h.updateStatus("error", n.tNotFound),
                        (r = u("<div>"))),
                    (e.inlineElement = r))
                  : (h.updateStatus("ready"), h._parseMarkup(t, {}, e), t)
              );
            },
          },
        }),
        "ajax");
    u.magnificPopup.registerModule(j, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          h.types.push(j),
            (b = h.st.ajax.cursor),
            c(x + "." + j, t),
            c("BeforeChange." + j, t);
        },
        getAjax: function (r) {
          b && u(document.body).addClass(b), h.updateStatus("loading");
          var e = u.extend(
            {
              url: r.src,
              success: function (e, t, n) {
                e = { data: e, xhr: n };
                f("ParseAjax", e),
                  h.appendContent(u(e.data), j),
                  (r.finished = !0),
                  o(),
                  h._setFocus(),
                  setTimeout(function () {
                    h.wrap.addClass(E);
                  }, 16),
                  h.updateStatus("ready"),
                  f("AjaxContentAdded");
              },
              error: function () {
                o(),
                  (r.finished = r.loadError = !0),
                  h.updateStatus(
                    "error",
                    h.st.ajax.tError.replace("%url%", r.src),
                  );
              },
            },
            h.st.ajax.settings,
          );
          return (h.req = u.ajax(e)), "";
        },
      },
    });
    var I;
    u.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var e = h.st.image,
            t = ".image";
          h.types.push("image"),
            c(C + t, function () {
              "image" === h.currItem.type &&
                e.cursor &&
                u(document.body).addClass(e.cursor);
            }),
            c(x + t, function () {
              e.cursor && u(document.body).removeClass(e.cursor),
                A.off("resize" + T);
            }),
            c("Resize" + t, h.resizeImage),
            h.isLowIE && c("AfterChange", h.resizeImage);
        },
        resizeImage: function () {
          var e,
            t = h.currItem;
          t &&
            t.img &&
            h.st.image.verticalFit &&
            ((e = 0),
            h.isLowIE &&
              (e =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
            t.img.css("max-height", h.wH - e));
        },
        _onImageHasSize: function (e) {
          e.img &&
            ((e.hasSize = !0),
            I && clearInterval(I),
            (e.isCheckingImgSize = !1),
            f("ImageHasSize", e),
            e.imgHidden) &&
            (h.content && h.content.removeClass("mfp-loading"),
            (e.imgHidden = !1));
        },
        findImageSize: function (t) {
          function n(e) {
            I && clearInterval(I),
              (I = setInterval(function () {
                0 < o.naturalWidth
                  ? h._onImageHasSize(t)
                  : (200 < r && clearInterval(I),
                    3 === ++r ? n(10) : 40 === r ? n(50) : 100 === r && n(500));
              }, e));
          }
          var r = 0,
            o = t.img[0];
          n(1);
        },
        getImage: function (e, t) {
          function n() {
            e &&
              (e.img[0].complete
                ? (e.img.off(".mfploader"),
                  e === h.currItem &&
                    (h._onImageHasSize(e), h.updateStatus("ready")),
                  (e.hasSize = !0),
                  (e.loaded = !0),
                  f("ImageLoadComplete"))
                : ++i < 200
                  ? setTimeout(n, 100)
                  : r());
          }
          function r() {
            e &&
              (e.img.off(".mfploader"),
              e === h.currItem &&
                (h._onImageHasSize(e),
                h.updateStatus("error", a.tError.replace("%url%", e.src))),
              (e.hasSize = !0),
              (e.loaded = !0),
              (e.loadError = !0));
          }
          var o,
            i = 0,
            a = h.st.image,
            s = t.find(".mfp-img");
          return (
            s.length &&
              (((o = document.createElement("img")).className = "mfp-img"),
              e.el &&
                e.el.find("img").length &&
                (o.alt = e.el.find("img").attr("alt")),
              (e.img = u(o).on("load.mfploader", n).on("error.mfploader", r)),
              (o.src = e.src),
              s.is("img") && (e.img = e.img.clone()),
              0 < (o = e.img[0]).naturalWidth
                ? (e.hasSize = !0)
                : o.width || (e.hasSize = !1)),
            h._parseMarkup(
              t,
              {
                title: (function (e) {
                  if (e.data && void 0 !== e.data.title) return e.data.title;
                  var t = h.st.image.titleSrc;
                  if (t) {
                    if (u.isFunction(t)) return t.call(h, e);
                    if (e.el) return e.el.attr(t) || "";
                  }
                  return "";
                })(e),
                img_replaceWith: e.img,
              },
              e,
            ),
            h.resizeImage(),
            e.hasSize
              ? (I && clearInterval(I),
                e.loadError
                  ? (t.addClass("mfp-loading"),
                    h.updateStatus("error", a.tError.replace("%url%", e.src)))
                  : (t.removeClass("mfp-loading"), h.updateStatus("ready")))
              : (h.updateStatus("loading"),
                (e.loading = !0),
                e.hasSize ||
                  ((e.imgHidden = !0),
                  t.addClass("mfp-loading"),
                  h.findImageSize(e))),
            t
          );
        },
      },
    });
    function L(e) {
      var t;
      h.currTemplate[q] &&
        (t = h.currTemplate[q].find("iframe")).length &&
        (e || (t[0].src = "//about:blank"), h.isIE8) &&
        t.css("display", e ? "block" : "none");
    }
    function D(e) {
      var t = h.items.length;
      return t - 1 < e ? e - t : e < 0 ? t + e : e;
    }
    function _(e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    }
    u.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var e,
            t,
            n,
            r,
            o,
            i,
            a = h.st.zoom,
            s = ".zoom";
          a.enabled &&
            h.supportsTransition &&
            ((t = a.duration),
            (n = function (e) {
              var e = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                t = "all " + a.duration / 1e3 + "s " + a.easing,
                n = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (n["-webkit-" + r] = n["-moz-" + r] = n["-o-" + r] = n[r] = t),
                e.css(n),
                e
              );
            }),
            (r = function () {
              h.content.css("visibility", "visible");
            }),
            c("BuildControls" + s, function () {
              h._allowZoom() &&
                (clearTimeout(o),
                h.content.css("visibility", "hidden"),
                (e = h._getItemToZoom())
                  ? ((i = n(e)).css(h._getOffset()),
                    h.wrap.append(i),
                    (o = setTimeout(function () {
                      i.css(h._getOffset(!0)),
                        (o = setTimeout(function () {
                          r(),
                            setTimeout(function () {
                              i.remove(),
                                (e = i = null),
                                f("ZoomAnimationEnded");
                            }, 16);
                        }, t));
                    }, 16)))
                  : r());
            }),
            c(P + s, function () {
              if (h._allowZoom()) {
                if ((clearTimeout(o), (h.st.removalDelay = t), !e)) {
                  if (!(e = h._getItemToZoom())) return;
                  i = n(e);
                }
                i.css(h._getOffset(!0)),
                  h.wrap.append(i),
                  h.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    i.css(h._getOffset());
                  }, 16);
              }
            }),
            c(x + s, function () {
              h._allowZoom() && (r(), i && i.remove(), (e = null));
            }));
        },
        _allowZoom: function () {
          return "image" === h.currItem.type;
        },
        _getItemToZoom: function () {
          return !!h.currItem.hasSize && h.currItem.img;
        },
        _getOffset: function (e) {
          var e = e
              ? h.currItem.img
              : h.st.zoom.opener(h.currItem.el || h.currItem),
            t = e.offset(),
            n = parseInt(e.css("padding-top"), 10),
            r = parseInt(e.css("padding-bottom"), 10),
            e =
              ((t.top -= u(window).scrollTop() - n),
              {
                width: e.width(),
                height: (k ? e.innerHeight() : e[0].offsetHeight) - r - n,
              });
          return (
            (O =
              void 0 === O
                ? void 0 !== document.createElement("p").style.MozTransform
                : O)
              ? (e["-moz-transform"] = e.transform =
                  "translate(" + t.left + "px," + t.top + "px)")
              : ((e.left = t.left), (e.top = t.top)),
            e
          );
        },
      },
    });
    var O,
      q = "iframe",
      H =
        (u.magnificPopup.registerModule(q, {
          options: {
            markup:
              '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
              youtube: {
                index: "youtube.com",
                id: "v=",
                src: "//www.youtube.com/embed/%id%?autoplay=1",
              },
              vimeo: {
                index: "vimeo.com/",
                id: "/",
                src: "//player.vimeo.com/video/%id%?autoplay=1",
              },
              gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
          },
          proto: {
            initIframe: function () {
              h.types.push(q),
                c("BeforeChange", function (e, t, n) {
                  t !== n && (t === q ? L() : n === q && L(!0));
                }),
                c(x + "." + q, function () {
                  L();
                });
            },
            getIframe: function (e, t) {
              var n = e.src,
                r = h.st.iframe,
                o =
                  (u.each(r.patterns, function () {
                    if (-1 < n.indexOf(this.index))
                      return (
                        this.id &&
                          (n =
                            "string" == typeof this.id
                              ? n.substr(
                                  n.lastIndexOf(this.id) + this.id.length,
                                  n.length,
                                )
                              : this.id.call(this, n)),
                        (n = this.src.replace("%id%", n)),
                        !1
                      );
                  }),
                  {});
              return (
                r.srcAction && (o[r.srcAction] = n),
                h._parseMarkup(t, o, e),
                h.updateStatus("ready"),
                t
              );
            },
          },
        }),
        u.magnificPopup.registerModule("gallery", {
          options: {
            enabled: !1,
            arrowMarkup:
              '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
          },
          proto: {
            initGallery: function () {
              var i = h.st.gallery,
                e = ".mfp-gallery";
              if (((h.direction = !0), !i || !i.enabled)) return !1;
              (g += " mfp-gallery"),
                c(C + e, function () {
                  i.navigateByImgClick &&
                    h.wrap.on("click" + e, ".mfp-img", function () {
                      if (1 < h.items.length) return h.next(), !1;
                    }),
                    m.on("keydown" + e, function (e) {
                      37 === e.keyCode
                        ? h.prev()
                        : 39 === e.keyCode && h.next();
                    });
                }),
                c("UpdateStatus" + e, function (e, t) {
                  t.text &&
                    (t.text = _(t.text, h.currItem.index, h.items.length));
                }),
                c(w + e, function (e, t, n, r) {
                  var o = h.items.length;
                  n.counter = 1 < o ? _(i.tCounter, r.index, o) : "";
                }),
                c("BuildControls" + e, function () {
                  var e, t;
                  1 < h.items.length &&
                    i.arrows &&
                    !h.arrowLeft &&
                    ((t = i.arrowMarkup),
                    (e = h.arrowLeft =
                      u(
                        t
                          .replace(/%title%/gi, i.tPrev)
                          .replace(/%dir%/gi, "left"),
                      ).addClass(S)),
                    (t = h.arrowRight =
                      u(
                        t
                          .replace(/%title%/gi, i.tNext)
                          .replace(/%dir%/gi, "right"),
                      ).addClass(S)),
                    e.click(function () {
                      h.prev();
                    }),
                    t.click(function () {
                      h.next();
                    }),
                    h.container.append(e.add(t)));
                }),
                c("Change" + e, function () {
                  h._preloadTimeout && clearTimeout(h._preloadTimeout),
                    (h._preloadTimeout = setTimeout(function () {
                      h.preloadNearbyImages(), (h._preloadTimeout = null);
                    }, 16));
                }),
                c(x + e, function () {
                  m.off(e),
                    h.wrap.off("click" + e),
                    (h.arrowRight = h.arrowLeft = null);
                });
            },
            next: function () {
              (h.direction = !0),
                (h.index = D(h.index + 1)),
                h.updateItemHTML();
            },
            prev: function () {
              (h.direction = !1),
                (h.index = D(h.index - 1)),
                h.updateItemHTML();
            },
            goTo: function (e) {
              (h.direction = e >= h.index), (h.index = e), h.updateItemHTML();
            },
            preloadNearbyImages: function () {
              for (
                var e = h.st.gallery.preload,
                  t = Math.min(e[0], h.items.length),
                  n = Math.min(e[1], h.items.length),
                  r = 1;
                r <= (h.direction ? n : t);
                r++
              )
                h._preloadItem(h.index + r);
              for (r = 1; r <= (h.direction ? t : n); r++)
                h._preloadItem(h.index - r);
            },
            _preloadItem: function (e) {
              var t;
              (e = D(e)),
                h.items[e].preloaded ||
                  ((t = h.items[e]).parsed || (t = h.parseEl(e)),
                  f("LazyLoad", t),
                  "image" === t.type &&
                    (t.img = u('<img class="mfp-img" />')
                      .on("load.mfploader", function () {
                        t.hasSize = !0;
                      })
                      .on("error.mfploader", function () {
                        (t.hasSize = !0),
                          (t.loadError = !0),
                          f("LazyLoadError", t);
                      })
                      .attr("src", t.src)),
                  (t.preloaded = !0));
            },
          },
        }),
        "retina");
    u.magnificPopup.registerModule(H, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return "@2x" + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          var n, r;
          1 < window.devicePixelRatio &&
            ((n = h.st.retina), (r = n.ratio), 1 < (r = isNaN(r) ? r() : r)) &&
            (c("ImageHasSize." + H, function (e, t) {
              t.img.css({
                "max-width": t.img[0].naturalWidth / r,
                width: "100%",
              });
            }),
            c("ElementParse." + H, function (e, t) {
              t.src = n.replaceSrc(t, r);
            }));
        },
      },
    }),
      i();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define([], function () {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(e))
        : (e.SmoothScroll = t(e));
  })(
    "undefined" != typeof global
      ? global
      : "undefined" != typeof window
        ? window
        : this,
    function (w) {
      "use strict";
      function C() {
        var n = {};
        return (
          Array.prototype.forEach.call(arguments, function (e) {
            for (var t in e) {
              if (!e.hasOwnProperty(t)) return;
              n[t] = e[t];
            }
          }),
          n
        );
      }
      function i(e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (
          var t,
            n = String(e),
            r = n.length,
            o = -1,
            i = "",
            a = n.charCodeAt(0);
          ++o < r;

        ) {
          if (0 === (t = n.charCodeAt(o)))
            throw new InvalidCharacterError(
              "Invalid character: the input contains U+0000.",
            );
          (1 <= t && t <= 31) ||
          127 == t ||
          (0 === o && 48 <= t && t <= 57) ||
          (1 === o && 48 <= t && t <= 57 && 45 === a)
            ? (i += "\\" + t.toString(16) + " ")
            : (i +=
                128 <= t ||
                45 === t ||
                95 === t ||
                (48 <= t && t <= 57) ||
                (65 <= t && t <= 90) ||
                (97 <= t && t <= 122)
                  ? n.charAt(o)
                  : "\\" + n.charAt(o));
        }
        return "#" + i;
      }
      function T(e, t, n, r) {
        t.emitEvents &&
          "function" == typeof w.CustomEvent &&
          ((t = new CustomEvent(e, {
            bubbles: !0,
            detail: { anchor: n, toggle: r },
          })),
          document.dispatchEvent(t));
      }
      var E = {
          ignore: "[data-scroll-ignore]",
          header: null,
          topOnEmptyHash: !0,
          speed: 500,
          speedAsDuration: !1,
          durationMax: null,
          durationMin: null,
          clip: !0,
          offset: 0,
          easing: "easeInOutCubic",
          customEasing: null,
          updateURL: !0,
          popstate: !0,
          emitEvents: !0,
        },
        S = function (e) {
          return parseInt(w.getComputedStyle(e).height, 10);
        },
        k = function () {
          return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
          );
        };
      return function (r, e) {
        function t(e) {
          if (
            !e.defaultPrevented &&
            !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
            "closest" in e.target &&
            (o = e.target.closest(r)) &&
            "a" === o.tagName.toLowerCase() &&
            !e.target.closest(v.ignore) &&
            o.hostname === w.location.hostname &&
            o.pathname === w.location.pathname &&
            /#/.test(o.href)
          ) {
            var t, n;
            try {
              n = i(decodeURIComponent(o.hash));
            } catch (e) {
              n = i(o.hash);
            }
            if ("#" === n) {
              if (!v.topOnEmptyHash) return;
              t = document.documentElement;
            } else t = document.querySelector(n);
            (t = t || "#top" !== n ? t : document.documentElement) &&
              (e.preventDefault(),
              (n = v),
              history.replaceState &&
                n.updateURL &&
                !history.state &&
                ((e = (e = w.location.hash) || ""),
                history.replaceState(
                  {
                    smoothScroll: JSON.stringify(n),
                    anchor: e || w.pageYOffset,
                  },
                  document.title,
                  e || w.location.href,
                )),
              x.animateScroll(t, o));
          }
        }
        function n(e) {
          var t;
          null === history.state ||
            !history.state.smoothScroll ||
            history.state.smoothScroll !== JSON.stringify(v) ||
            ("string" == typeof (t = history.state.anchor) &&
              t &&
              !(t = document.querySelector(i(history.state.anchor)))) ||
            x.animateScroll(t, null, { updateURL: !1 });
        }
        var v,
          o,
          y,
          b,
          x = {
            cancelScroll: function (e) {
              cancelAnimationFrame(b), (b = null), e || T("scrollCancel", v);
            },
          };
        (x.animateScroll = function (r, o, e) {
          x.cancelScroll();
          var i,
            a,
            s,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            t,
            m = C(v || E, e || {}),
            g = "[object Number]" === Object.prototype.toString.call(r),
            e = g || !r.tagName ? null : r;
          (g || e) &&
            ((i = w.pageYOffset),
            m.header && !y && (y = document.querySelector(m.header)),
            (t = (t = y) ? S(t) + t.offsetTop : 0),
            (a = g
              ? r
              : (function (e, t, n, r) {
                  var o = 0;
                  if (e.offsetParent)
                    for (; (o += e.offsetTop), (e = e.offsetParent); );
                  return (
                    (o = Math.max(o - t - n, 0)),
                    (o = r ? Math.min(o, k() - w.innerHeight) : o)
                  );
                })(
                  e,
                  t,
                  parseInt(
                    "function" == typeof m.offset ? m.offset(r, o) : m.offset,
                    10,
                  ),
                  m.clip,
                )),
            (s = a - i),
            (l = k()),
            (u = 0),
            (c = (function (e, t) {
              e = t.speedAsDuration ? t.speed : Math.abs((e / 1e3) * t.speed);
              return t.durationMax && e > t.durationMax
                ? t.durationMax
                : t.durationMin && e < t.durationMin
                  ? t.durationMin
                  : parseInt(e, 10);
            })(s, m)),
            (p = function (e, t) {
              var n = w.pageYOffset;
              if (e == t || n == t || (i < t && w.innerHeight + n) >= l)
                return (
                  x.cancelScroll(!0),
                  (e = t),
                  (n = g),
                  0 === (t = r) && document.body.focus(),
                  n ||
                    (t.focus(),
                    document.activeElement !== t &&
                      (t.setAttribute("tabindex", "-1"),
                      t.focus(),
                      (t.style.outline = "none")),
                    w.scrollTo(0, e)),
                  T("scrollStop", m, r, o),
                  !(b = d = null)
                );
            }),
            (h = function (e) {
              var t, n, r;
              (u += e - (d = d || e)),
                (f =
                  i +
                  s *
                    ((n = 1 < (f = 0 === c ? 0 : u / c) ? 1 : f),
                    "easeInQuad" === (t = m).easing && (r = n * n),
                    "easeOutQuad" === t.easing && (r = n * (2 - n)),
                    "easeInOutQuad" === t.easing &&
                      (r = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                    "easeInCubic" === t.easing && (r = n * n * n),
                    "easeOutCubic" === t.easing && (r = --n * n * n + 1),
                    "easeInOutCubic" === t.easing &&
                      (r =
                        n < 0.5
                          ? 4 * n * n * n
                          : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                    "easeInQuart" === t.easing && (r = n * n * n * n),
                    "easeOutQuart" === t.easing && (r = 1 - --n * n * n * n),
                    "easeInOutQuart" === t.easing &&
                      (r =
                        n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                    "easeInQuint" === t.easing && (r = n * n * n * n * n),
                    "easeOutQuint" === t.easing &&
                      (r = 1 + --n * n * n * n * n),
                    "easeInOutQuint" === t.easing &&
                      (r =
                        n < 0.5
                          ? 16 * n * n * n * n * n
                          : 1 + 16 * --n * n * n * n * n),
                    (r = t.customEasing ? t.customEasing(n) : r) || n)),
                w.scrollTo(0, Math.floor(f)),
                p(f, a) || ((b = w.requestAnimationFrame(h)), (d = e));
            }),
            0 === w.pageYOffset && w.scrollTo(0, 0),
            (e = r),
            (t = m),
            g ||
              (history.pushState &&
                t.updateURL &&
                history.pushState(
                  { smoothScroll: JSON.stringify(t), anchor: e.id },
                  document.title,
                  e === document.documentElement ? "#top" : "#" + e.id,
                )),
            "matchMedia" in w &&
            w.matchMedia("(prefers-reduced-motion)").matches
              ? w.scrollTo(0, Math.floor(a))
              : (T("scrollStart", m, r, o),
                x.cancelScroll(!0),
                w.requestAnimationFrame(h)));
        }),
          (x.destroy = function () {
            v &&
              (document.removeEventListener("click", t, !1),
              w.removeEventListener("popstate", n, !1),
              x.cancelScroll(),
              (b = y = o = v = null));
          });
        if (
          "querySelector" in document &&
          "addEventListener" in w &&
          "requestAnimationFrame" in w &&
          "closest" in w.Element.prototype
        )
          return (
            x.destroy(),
            (v = C(E, e || {})),
            (y = v.header ? document.querySelector(v.header) : null),
            document.addEventListener("click", t, !1),
            v.updateURL && v.popstate && w.addEventListener("popstate", n, !1),
            x
          );
        throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
      };
    },
  ),
  $(document).ready(function () {
    $("#main").fitVids(),
      $(".author__urls-wrapper button").on("click", function () {
        $(".author__urls").toggleClass("is--visible"),
          $(".author__urls-wrapper").find("button").toggleClass("open");
      }),
      $(document).keyup(function (e) {
        27 === e.keyCode &&
          $(".initial-content").hasClass("is--hidden") &&
          ($(".search-content").toggleClass("is--visible"),
          $(".initial-content").toggleClass("is--hidden"));
      }),
      $(".search__toggle").on("click", function () {
        $(".search-content").toggleClass("is--visible"),
          $(".initial-content").toggleClass("is--hidden"),
          setTimeout(function () {
            $(".search-content input").focus();
          }, 400);
      });
    function o(e) {
      for (
        var t = e.target, n = t.nextElementSibling;
        n && "code" !== n.tagName.toLowerCase();

      )
        n = n.nextElementSibling;
      if (n)
        return (
          (e = (function (e) {
            if (document.queryCommandEnabled("copy") && navigator.clipboard)
              return (
                navigator.clipboard.writeText(e).then(
                  () => !0,
                  () => console.error("Failed to copy text to clipboard: " + e),
                ),
                !0
              );
            var t = "rtl" === document.documentElement.getAttribute("dir"),
              n = document.createElement("textarea"),
              t =
                ((n.className = "clipboard-helper"),
                (n.style[t ? "right" : "left"] = "-9999px"),
                window.pageYOffset || document.documentElement.scrollTop),
              t =
                ((n.style.top = t + "px"),
                n.setAttribute("readonly", ""),
                (n.value = e),
                document.body.appendChild(n),
                !0);
            try {
              n.select(), (t = document.execCommand("copy"));
            } catch (e) {
              t = !1;
            }
            return n.parentNode.removeChild(n), t;
          })(
            (n = (e = n.querySelector("td.code, td.rouge-code")) ? e : n)
              .innerText,
          )),
          t.focus(),
          e &&
            (null !== t.interval && clearInterval(t.interval),
            t.classList.add("copied"),
            (t.interval = setTimeout(function () {
              t.classList.remove("copied"),
                clearInterval(t.interval),
                (t.interval = null);
            }, 1500))),
          e
        );
      throw (
        (console.warn(t), new Error("No code block found for this button."))
      );
    }
    var e;
    new SmoothScroll('a[href*="#"]', {
      offset: 20,
      speed: 400,
      speedAsDuration: !0,
      durationMax: 500,
    }),
      0 < $("nav.toc").length &&
        new Gumshoe("nav.toc a", {
          navClass: "active",
          contentClass: "active",
          nested: !1,
          nestedClass: "active",
          offset: 20,
          reflow: !0,
          events: !0,
        }),
      window.chrome &&
        document.addEventListener("gumshoeActivate", function (e) {
          var e = e.target,
            t = { behavior: "auto", block: "nearest", inline: "start" },
            n = document.querySelector("aside.sidebar__right.sticky");
          n &&
            "sticky" === window.getComputedStyle(n).position &&
            (e.parentElement.classList.contains("toc__menu") &&
            e == e.parentElement.firstElementChild
              ? document.querySelector("nav.toc header")
              : e
            ).scrollIntoView(t);
        }),
      $(
        "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp'],a[href$='.svg']",
      )
        .has("> img")
        .addClass("image-popup"),
      $(".image-popup").magnificPopup({
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
        image: {
          tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        },
        removalDelay: 500,
        mainClass: "mfp-zoom-in",
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim",
            );
          },
        },
        closeOnContentClick: !0,
        midClick: !0,
      }),
      (e = document.querySelector(".page__content")) &&
        e.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function (e) {
          var t,
            n = e.getAttribute("id");
          n &&
            (((t = document.createElement("a")).className = "header-link"),
            (t.href = "#" + n),
            (t.innerHTML =
              '<span class="sr-only">Permalink</span><i class="fas fa-link"></i>'),
            (t.title = "Permalink"),
            e.appendChild(t));
        });
    window.enable_copy_code_button &&
      document
        .querySelectorAll(".page__content pre.highlight > code")
        .forEach(function (e, t, n) {
          var r,
            e = e.parentElement;
          "code" === e.firstElementChild.tagName.toLowerCase() &&
            (((r = document.createElement("button")).title =
              "Copy to clipboard"),
            (r.className = "clipboard-copy-button"),
            (r.innerHTML =
              '<span class="sr-only">Copy code</span><i class="far fa-fw fa-copy"></i><i class="fas fa-fw fa-check copied"></i>'),
            r.addEventListener("click", o),
            e.prepend(r));
        });
  });

