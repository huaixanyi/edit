"use strict";

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    )
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) :
            "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0
    }
}

function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) return _arrayLikeToArray(t)
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
}
if (!window.ActiveXObject && !("ActiveXObject" in window)) {
    var __getClientLogo = function () {
        var t, e = JSON.parse(decodeURI(atob(
            "JTVCJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwLy8lMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMC8vJTIyLCUyMiUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUMlNUMlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlMjAvLyUyMiwlMjIlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyNEREREREREREREREREREREREREREREIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwREREREREREREREREREREREREREQlMjAjIyUyMiwlMjIlMjAlMjAlMjBfX19fX19fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fX19fX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwX19fJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCU3QyU1QyU1QyUyMCUyMCUyMF9fJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyMlMjBoaCUyMCUyMCUyMCUyMC8vJTIwJTIwJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAvXyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU3QyU1QyU1QyUyMC9fJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAvLyUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlMjBfXyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUNfX19fJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDX19fXyUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwd3d3dyUyMCUyMCUyMCUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyME1NTU1NTU1NTU1NTU1NTU1NTU1NJTIwIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFJlbGVhc2UlMjAxLjAuMC4lMjBQb3dlcmVkJTIwYnklMjBqaW5rZWxhLWNvcmUlMjAyLjguNS4lMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDLyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1Qy8lMjIsJTIyJTIyJTVEJTVE"
            ))),
            i = ["%c"],
            n = [];
        e.forEach((function (t) {
            var e = t[0],
                n = t[1];
            i.push(e + n)
        })), n = n.concat(["color:#00a1d6"]), n = [i.join("\n")].concat(n), (t = console).log.apply(t,
            _toConsumableArray(n))
    };
    __getClientLogo()
}! function (t) {
    function e(e) {
        for (var n, o, s = e[0], c = e[1], l = e[2], d = 0, f = []; d < s.length; d++) o = s[d], Object.prototype.hasOwnProperty
            .call(a, o) && a[o] && f.push(a[o][0]), a[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (u && u(e); f.length;) f.shift()();
        return r.push.apply(r, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], n = !0, s = 1; s < i.length; s++) {
                var c = i[s];
                0 !== a[c] && (n = !1)
            }
            n && (r.splice(e--, 1), t = o(o.s = i[0]))
        }
        return t
    }
    var n = {},
        a = {
            0: 0
        },
        r = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.e = function (t) {
        var e = [],
            i = a[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var n = new Promise((function (e, n) {
                    i = a[t] = [e, n]
                }));
                e.push(i[2] = n);
                var r, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function (t) {
                    return o.p + "" + t + ".cross-year-2020.f874e412a3319d2b47e13c1a1bb6e13d05ebf4b4.js"
                }(t);
                var c = new Error;
                r = function (e) {
                    s.onerror = s.onload = null, clearTimeout(l);
                    var i = a[t];
                    if (0 !== i) {
                        if (i) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + n + ": " + r + ")", c.name =
                                "ChunkLoadError", c.type = n, c.request = r, i[1](c)
                        }
                        a[t] = void 0
                    }
                };
                var l = setTimeout((function () {
                    r({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = r, document.head.appendChild(s)
            } return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function (t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(i, n, function (e) {
                return t[e]
            }.bind(null, n));
        return i
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "//s1.hdslb.com/bfs/static/cross-year-2020/", o.oe = function (t) {
        throw console.error(t), t
    };
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var l = 0; l < s.length; l++) e(s[l]);
    var u = c;
    r.push([135, 1]), i()
}([, , , , , , , , , , , , , function (t, e, i) {
    i.d(e, "d", (function () {
        return n
    })), i.d(e, "c", (function () {
        return a
    })), i.d(e, "b", (function () {
        return r
    })), i.d(e, "a", (function () {
        return o
    }));
    i(3), i(14),
        function () {
            try {
                document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
            } catch (t) {
                return !1
            }
        }();

    function n(t) {
        return t ? t.replace(/^http(s)?:/, "") : ""
    }

    function a(t) {
        var e, i, n;
        "function" == typeof window.biliQuickLogin ? window.biliQuickLogin((function () {
            t ? t() : window.location.reload()
        })) : (e = "//static.hdslb.com/account/bili_quick_login.js", i = function () {
            window.biliQuickLogin((function () {
                t ? t() : window.location.reload()
            }))
        }, (n = document.createElement("script")).type = "text/javascript", n.src = e, n.onload = i,
            document.body.appendChild(n))
    }

    function r() {
        return new Promise((function (t) {
            var e = window.document.createElement("script");
            e.src = "https://interface.bilibili.com/serverdate.js", e.async = 1, e.onload =
                function () {
                    t(window.serverdate), window.document.body.removeChild(e), e = null
                }, e.onerror = function () {
                t((new Date).getTime()), window.document.body.removeChild(e), e = null
            }, window.document.body.appendChild(e)
        }))
    }

    function o(t, e) {
        if (t) {
            var i = t.getBoundingClientRect(),
                n = e || 0;
            return i.x + i.y + i.width + i.height !== 0 && (i.top < window.innerHeight + n && i.bottom >= 0)
        }
    }
}, function (t, e, i) {
    var n = i(3),
        a = i.n(n),
        r = i(54),
        o = i.n(r);
    e.a = function (t) {
        var e, i, n, r, s, c = {
                url: (e = t.url, i = "undefined" == typeof window, n = i ? "http:" : window.location.protocol ||
                    "https:", r = e.indexOf(".bilibili.co") > -1, s = !i && window.location.href.indexOf(
                    "uat-") > -1 && r && -1 === e.indexOf("uat-") ? "uat-" : "", r || e.indexOf(
                    ".hdslb.com") > -1 ? /^http(s)?:/.test(e) ? e : 0 === e.indexOf("//") ? "".concat(
                    n).concat(e.replace("//", "//".concat(s))) : "".concat(n, "//").concat(s + e) :
                    "".concat(n, "//").concat(s, "api.bilibili.com/").concat(e)),
                timeout: t.timeout || 1e4
            },
            l = c.url.indexOf("-mng.bilibili.co") > -1 || c.url.indexOf("manager.bilibili.co") > -1;
        return void 0 === t.method && (t.method = "GET"), (t.method && "GET" === t.method.toUpperCase() &&
            !1 !== t.include || !0 === t.include) && (c.withCredentials = !0), t.params && (c.params =
            t.params), t.headers && t.headers["x1-bilispy-color"] && (c.headers = Object.assign(c.headers ||
            {}, {
            "x1-bilispy-color": t.headers["x1-bilispy-color"]
        })), t.cookies && (c.withCredentials = !0, c.headers = Object.assign(c.headers || {}, {
            cookie: t.cookies
        })), t.method && "GET" === t.method.toUpperCase() ? o.a.get(c.url, c).then((function (t) {
            return t
        })).catch((function (t) {
            return l && "undefined" != typeof window && "Network Error" === t.message && !
                window.errorRedirect && (window.location.href = "//".concat("",
                "bangumi-mng.bilibili.co/html/403.html")), {
                status: 404,
                msg: t.stack
            }
        })) : (t.method && (c.method = t.method), c.method && c.method.toUpperCase().indexOf("POST") >
        -1 && (c.headers || (c.headers = {}), "MNG-POST" === c.method.toUpperCase() ? (c.headers[
            "content-type"] = "application/json;charset=UTF-8", c.method = "POST", c.data =
            c.params) : (c.headers["content-type"] = "application/x-www-form-urlencoded", c.data =
            c.params instanceof window.FormData ? c.params : function (t) {
                if (t && "object" === a()(t)) {
                    var e = [];
                    for (var i in t)
                        if (t.hasOwnProperty(i) && void 0 !== t[i]) {
                            var n = "object" === a()(t[i]) ? JSON.stringify(t[i]) : t[i];
                            e.push("".concat(i, "=").concat(encodeURIComponent(n)))
                        } return e.join("&")
                }
                return ""
            }(c.params || {})), delete c.params), o()(c).then((function (t) {
            return t
        })).catch((function (t) {
            return l && "undefined" != typeof window && "Network Error" === t.message && !
                window.errorRedirect && (window.location.href = "//".concat("",
                "bangumi-mng.bilibili.co/html/403.html")), {
                status: 404,
                msg: t.stack
            }
        })))
    }
}, function (t, e, i) {
    i.d(e, "c", (function () {
        return s
    })), i.d(e, "b", (function () {
        return c
    })), i.d(e, "a", (function () {
        return l
    }));
    i(118), i(119);
    var n = i(3),
        a = i.n(n);
    i(20), i(45), i(120);
    i(121);
    var r = i(122),
        o = i.n(r);
    i(10), "undefined" == typeof window || a()(window), new o.a({
        useCookie: !0
    });

    function s(t) {
        return "object" === a()(t) ? JSON.parse(JSON.stringify(t).replace(/\"(\w+)\"\:/g, (function (t, e) {
            return '"'.concat(e.replace(/\_(\w)/g, (function (t, e) {
                return e.toUpperCase()
            })), '":')
        }))) : t
    }
    var c = !0;

    function l(t) {
        for (var e = document.getElementsByTagName("meta"), i = 0; i < e.length; i++)
            if (e[i].getAttribute("name") === t) return e[i].getAttribute("content");
        return ""
    }! function () {
        try {
            document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
        } catch (t) {
            return !1
        }
    }();
    (window.navigator.userAgent || "").toLowerCase().indexOf("ipad");
    var u = window.navigator.userAgent;
    /MicroMessenger/i.test(u)
}, , function (t, e, i) {
    e.a = {
        bubble: "//i0.hdslb.com/bfs/activity-plat/static/d1cf92bc9dbcd4aba66a240199ecc790/bubble.png",
        card: {
            json: "//activity.hdslb.com/blackboard/static/9183f4c095a1217654dcabe1721b8f88/card-pc.json",
            prefix: "card_",
            piece: 40,
            width: 204,
            height: 334,
            speed: .4
        },
        kvStar: {
            json: "//activity.hdslb.com/blackboard/static/9183f4c095a1217654dcabe1721b8f88/kv-star.json",
            prefix: "kv_star_",
            piece: 41,
            width: 300,
            height: 150,
            speed: .4,
            loop: !1
        },
        bling: {
            json: "//activity.hdslb.com/blackboard/static/9183f4c095a1217654dcabe1721b8f88/bling.json",
            prefix: "bling_",
            piece: 24,
            width: 100,
            height: 100,
            speed: .3,
            loop: !0
        },
        fall: {
            json: "//activity.hdslb.com/blackboard/static/9183f4c095a1217654dcabe1721b8f88/fall.json",
            prefix: "fall_",
            piece: 28,
            width: 400,
            height: 400,
            speed: .3,
            loop: !1
        }
    }
}, , , , function (t, e, i) {
    var n = new(i(10).default);
    e.a = n
}, , , , , , , , , function (t, e, i) {
    t.exports = i.p + "assets/star.png"
}, function (t, e) {
    t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAw1BMVEUAAAD///9/v/9/v/+As/+Iu+6HtPCGtvN/tfR/tvZ/svZ/tPeDtvCGtfKDt/KGufKCtfSEt/KEtvWDt/WEtfWDtvWDt/OCt/OEt/SCtvSCt/SDtfSCtvWDtvWEtvWDtvWDt/WCtvODt/SCtfSCtfSDtvWEtvWEtvOEtfSCtvWDtvOEtvSDtvSDtvSDtvWDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSDtvSTNBCqAAAAQHRSTlMAAQQICg8RFRgcHiIjJicoLTxNTk9QUlhZXmBhYmV6e3+FhoeRkpOXn6yvuLm9w8rLzc7S1ujp6u/y9Pb5+vv+xOnsoQAAAW9JREFUWMOt1tlSAjEQheHjgvuCuOCOiiju4woC6nn/p/JCZTIzWbobc5VKVb6bpKp/YObg4ngJhjXd7JysAcD8M8lBQy/U7kl+NAF0SZKjTbXwQJIcLgB9moxfgdwDBrQYY4GHwPXffrRlET6XgZWe3sgFtgCgrjYcof1zojWqgtbwCTrDL2iMkCA3woLUiAkyIy5IjJSQNtJCypAIcUMmxAypEDbkQsjQCH5DJ/gMrVA19ELZsAhFwyYUjBeb4BpWwWOohYphEEqGSQA2cuHKJjivqZq3fsFmFAWLURb0Ri0bXx3aDEdo13umhsnc/2AxioKpYbKJGyabuGGyiRsmF86MDRMQFA0TFMQNExGEDRMVCsa2TUgbaSFlSIS4IRNihlQIG3IhZGgEv6ETfIZWqBqzaqFgNAB09IJr9OeAN4PgGrvA0CI4xhFwaxLGxtc6UH8nyVNDf7yS5DkArHafbnYss3/x8vFufwr/sb4B9/EvbyxAK6MAAAAASUVORK5CYII="
}, , , , , , , , , , , , , function (t, e, i) {
    var n = i(4),
        a = i.n(n),
        r = i(5),
        o = i.n(r),
        s = function () {
            function t(e) {
                a()(this, t), this.timeList = e.timeList, this.serverTime = e.serverTime, this.timer = null,
                    this.gap = this.serverTime - ((new Date).getTime() + 60 * (new Date).getTimezoneOffset() *
                        1e3 + 288e5), this.init()
            }
            return o()(t, [{
                key: "getRightTs",
                value: function () {
                    return (new Date).getTime() + 60 * (new Date).getTimezoneOffset() * 1e3 +
                        288e5 + this.gap
                }
            }, {
                key: "init",
                value: function () {
                    var t = this;
                    return this.timer = setInterval((function () {
                        var e = t.timeList.filter((function (e) {
                            return !e.locked && "point" === e.type && t
                                    .getRightTs() - new Date(e.pointTime).getTime() >=
                                0
                        }));
                        t.timeList.forEach((function (e) {
                            t.getRightTs() - new Date(e.pointTime).getTime() >=
                            1e3 && (e.locked = !0)
                        })), e.forEach((function (t) {
                            t.locked || (t.trigger(), t.locked = !0)
                        })), t.timeList.every((function (t) {
                            return t.locked
                        })) && t.destroy()
                    }), 1e3), this
                }
            }, {
                key: "register",
                value: function (t) {
                    this.timeList.push(t)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.timer && clearInterval(this.timer)
                }
            }]), t
        }();
    e.a = s
}, , , , , , , , , , , , , , function (t, e, i) {
    (function (t) {
        i.d(e, "b", (function () {
            return s
        })), i.d(e, "a", (function () {
            return c
        }));
        var n = i(3),
            a = i.n(n),
            r = i(59),
            o = i.n(r);

        function s(t, e) {
            var i, n, a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                s = function (s) {
                    for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++) l[u -
                    1] = arguments[u];
                    if (a = l, !i || s !== n) {
                        var d = r.leading;
                        "function" == typeof d && (d = d(s, n)), i && s === n || !d || t.apply(void 0, [s].concat(
                            o()(a))), n = s, clearTimeout(i), i = setTimeout((function () {
                            t.apply(void 0, [s].concat(o()(a))), i = 0
                        }), e)
                    }
                };
            return s._clear = function () {
                clearTimeout(i), i = null
            }, s
        }

        function c(t, e) {
            if (t === e) return !0;
            if ("object" === a()(t)) {
                for (var i in t)
                    if (!c(t[i], e[i])) return !1;
                return !0
            }
            return !1
        }
    }).call(this, i(18))
}, , , , , , , , , , , , , , , , function (t, e, i) {}, function (t, e, i) {}, , , , , function (t, e, i) {},
    function (t, e, i) {},
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA+VBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9BnGuhAAAAUnRSTlMAAQIDBQYHCQoLDg8QERIVGBsfJCcoKi8xMjQ2QURGSEtRU1haXWJoa3KAhpGSlZ+hoqetsLGztru9vsTGys/U2t3i5OXo6uzv8PHy8/X3+Pz+NaM2JQAAAOJJREFUGBl9wYlWgkAABdCHtNpiaHtWFi22amWWbeaSJKXF+/+PiYhDzDAz90Jmwcytwmj+zXdgUiObFvRchqrQKr0zNF6DxlybkW4BSnaTsccZKFhXTNxOIsO6ZMq1DYldo6AxBcFsg5LWAlKKL8x4XUGiMqCC7+LP9EVAtXoeoZ0OtXp7QP6eBk9LAA49anwc5/DLaVHpuYRY7jRg1vkE/u1/UvJ1BMGmR4FfhmS1zxRvAxnLAyaGW1BYHzI2KkNp95uR4AAaJ4ycQeuGoQcbWotd0nNgsB3QhVH9DmaFIkQ/INx9kjJKXO4AAAAASUVORK5CYII="
    },
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {}, , , , , , ,
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {}, , , , , , , , , , , , , , , , , , ,
    function (t, e, i) {
        i.r(e);
        var n = i(4),
            a = i.n(n),
            r = i(5),
            o = i.n(r),
            s = i(6),
            c = i.n(s),
            l = i(7),
            u = i.n(l),
            d = i(2),
            f = i.n(d),
            p = i(3),
            v = i.n(p),
            h = i(1),
            y = i(0);

        function m(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var g = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            _ = function (t) {
                c()(i, t);
                var e = m(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).lock = !1, t.instance = null, t
                }
                return o()(i, [{
                    key: "goReward",
                    value: function () {
                        var t = this;
                        if (!this.loginInfo.isLogin) return this.QUICK_LOGIN();
                        this.lock || (this.lock = !0, this.DO_MISSION_ACT({
                            taskType: 5,
                            taskBatch: this.starBatch,
                            flag: this.flag
                        }).then((function () {
                            t.lock = !1
                        })).catch((function () {
                            t.lock = !1
                        })))
                    }
                }, {
                    key: "mounted",
                    value: function () {
                        var t = this,
                            e = !0;
                        1 === this.flag && this.showStarAnimation && (e = !1), this.anime.drawGiftStar(
                            this.$refs.gift, {
                                onlyBling: e,
                                bubble: 1 === this.flag
                            }).then((function (e) {
                            t.instance = e
                        }))
                    }
                }, {
                    key: "beforeDestory",
                    value: function () {
                        this.instance && this.instance.destory && this.instance.destory()
                    }
                }]), i
            }(h.c);
        g([y.c], _.prototype, "anime", void 0), g([y.c], _.prototype, "starBatch", void 0), g([y.c], _.prototype,
            "loginInfo", void 0), g([y.c], _.prototype, "showStarAnimation", void 0), g([y.a], _.prototype,
            "DO_MISSION_ACT", void 0), g([y.b], _.prototype, "QUICK_LOGIN", void 0), g([Object(h.b)(Number)], _
            .prototype, "flag", void 0), g([Object(h.b)(String)], _.prototype, "locationModule", void 0), g([
            Object(h.b)(Number)], _.prototype, "top", void 0), g([Object(h.b)(Number)], _.prototype, "left",
            void 0);
        var w = _ = g([h.a], _),
            b = (i(195), i(8)),
            T = Object(b.a)(w, (function () {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    ref: "gift",
                    staticClass: "star-item-wrapper",
                    style: {
                        top: t.top + "px",
                        left: t.left + "px"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.goReward(e)
                        }
                    }
                })
            }), [], !1, null, null, null).exports,
            S = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (!i.length) return [];
                var n = i[e - 1] || [];
                return n.filter((function (e) {
                    return e.locationModule === t
                }))
            },
            I = i(9);

        function C(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var k = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            x = function (t) {
                c()(n, t);
                var e = C(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).lockOrder = !1, t
                }
                return o()(n, [{
                    key: "handlePreorder",
                    value: function () {
                        var t = this;
                        if (Object(I.a)("reserve_watch_btn_click", {
                            position_id: 1
                        }), this.appointInfo.orderStatus) return h.c.prototype.$message.info(
                            "宸查绾");
                        this.lockOrder || (this.lockOrder = !0, this.loginInfo.isLogin ? this.ACT_ORDER()
                            .then((function () {
                                t.lockOrder = !1
                            })).catch((function () {
                                t.lockOrder = !1
                            })) : (this.lockOrder = !1, this.QUICK_LOGIN()))
                    }
                }, {
                    key: "mounted",
                    value: function () {
                        this.GET_ORDER_INFO()
                    }
                }, {
                    key: "orderPageStyle",
                    get: function () {
                        return {
                            height: 0 === this.inLive ? "".concat(this.screenHeight, "px") : "auto",
                            width: "".concat(this.screenWidth, "px"),
                            "margin-bottom": 0 === this.inLive ? "".concat(this.screenHeight > 780 ?
                                0 : 780 - this.screenHeight, "px") : 0
                        }
                    }
                }, {
                    key: "timeImg",
                    get: function () {
                        var t = i(214);
                        return 1 === this.inLive && (t = i(215)), 2 === this.inLive && (t = i(216)),
                        0 === this.inLive && this.todayImage && (t = i(217)), t
                    }
                }, {
                    key: "logoStyle",
                    get: function () {
                        var t = 1080 * this.screenWidth / this.screenHeight > 1920 ? this.screenWidth /
                            1920 : this.screenHeight / 1080,
                            e = Math.min(1.2, Math.max(.75, t)),
                            i = this.screenHeight / 780,
                            n = Math.floor(60 * Math.min(2, i));
                        return {
                            "margin-top": "".concat((n = e <= 1 ? n - 60 * e : n).toFixed(4), "px"),
                            transform: "scale(".concat(e.toFixed(4), ")"),
                            webkitTransform: "scale(".concat(e.toFixed(4), ")")
                        }
                    }
                }, {
                    key: "scaleStyle",
                    get: function () {
                        var t = (1080 * this.screenWidth / this.screenHeight > 1920 ? this.screenWidth /
                            1920 : this.screenHeight / 1080).toFixed(4),
                            e = Math.max(.75, Number(t)),
                            i = this.screenHeight / 780,
                            n = e <= .75 ? (1 - e) * (i < .75 ? 300 : 100) : 0;
                        return {
                            transform: "scale(".concat(e, ") translateY(-").concat(n.toFixed(4),
                                "px)")
                        }
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("preorder", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), n
            }(h.c);
        k([y.c], x.prototype, "starList", void 0), k([y.c], x.prototype, "starBatch", void 0), k([y.c], x.prototype,
            "totalStarList", void 0), k([y.c], x.prototype, "showStarWrapper", void 0), k([y.c], x.prototype,
            "anime", void 0), k([y.c], x.prototype, "ratio", void 0), k([y.c], x.prototype, "screenHeight",
            void 0), k([y.c], x.prototype, "screenWidth", void 0), k([y.c], x.prototype, "loginInfo", void 0),
            k([y.c], x.prototype, "appointInfo", void 0), k([y.c], x.prototype, "notInFirstScreen", void 0), k([y.c],
            x.prototype, "inLive", void 0), k([y.c], x.prototype, "todayImage", void 0), k([y.b], x.prototype,
            "commonSetM", void 0), k([y.b], x.prototype, "QUICK_LOGIN", void 0), k([y.a], x.prototype,
            "ACT_ORDER", void 0), k([y.a], x.prototype, "GET_ORDER_INFO", void 0), k([y.a], x.prototype,
            "DO_MISSION_ACT", void 0);
        var M = x = k([Object(h.a)({
                components: {
                    StarItem: T
                }
            })], x),
            A = (i(218), Object(b.a)(M, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    style: t.orderPageStyle,
                    attrs: {
                        id: "preorder"
                    }
                }, [n("div", {
                    staticClass: "preorder-content flex-box flex-aic flex-fdc flex-jcsb"
                }, [n("div", [n("img", {
                    staticClass: "kv-logo flex-fs0",
                    style: t.logoStyle,
                    attrs: {
                        src: i(193)
                    }
                }), t._v(" "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.inLive || 2 === t.inLive,
                        expression: "inLive===1|| inLive===2"
                    }],
                    staticClass: "party-time",
                    attrs: {
                        src: t.timeImg,
                        alt: "time"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "position-relative flex-fs0 flex-box flex-aic flex-fdc",
                    style: t.scaleStyle
                }, [0 === t.inLive ? n("div", {
                    staticClass: "flex-box flex-aic flex-fdc flex-fs0"
                }, [n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.inLive,
                        expression: "inLive===0"
                    }],
                    staticClass: "party-time",
                    attrs: {
                        src: t.timeImg,
                        alt: "time"
                    }
                }), t._v(" "), n("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "reserve_watch_btn_show",
                            data: {
                                position_id: 1
                            }
                        },
                        expression: "{\n            name: 'reserve_watch_btn_show',\n            data: { position_id: 1 },\n          }"
                    }],
                    class: t.appointInfo.orderStatus ?
                        "order-btn ordered smooth-transition" :
                        "order-btn smooth-transition",
                    on: {
                        click: t.handlePreorder
                    }
                }), t._v(" "), t.appointInfo.orderStatus ? t._e() :
                    n("div", {
                        staticClass: "order-tip flex-box flex-aic flex-jcc"
                    }, [n("div", {
                        staticClass: "order-tip-icon"
                    }), t._v(
                        "\n          鍚屾椂鍏虫敞銆愬摂鍝╁摂鍝╂櫄浼氥€戣处鍙疯幏寰楁渶鏂板姩鎬乗n        "
                    )]), t._v(" "), n("div", {
                    staticClass: "party-number"
                }, [n("div", {
                    staticClass: "party-number-box"
                }), t._v(" "), n("div", {
                    staticClass: "party-number-together"
                }, [t._v("\n            褰撳墠鏈� " + t._s(
                    t.appointInfo.appointNum ||
                    0) +
                    " 浜虹害浣犱竴璧疯法骞碶n          ")])]), t._v(" "), n(
                    "img", {
                        staticClass: "scroll-tip",
                        attrs: {
                            src: i(194),
                            alt: "scroll"
                        }
                    })]) : t._e(), t._v(" "), t.showStarWrapper ? n(
                    "div", t._l(t.starLocations, (function (e) {
                        return n("star-item", t._b({
                            key: t.starBatch + "-" + e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()])])])
            }), [], !1, null, "026e89ae", null).exports),
            U = i(27);

        function O(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var j = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            R = function (t) {
                c()(i, t);
                var e = O(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).lockOrder = !1, t.activeStep = null, t.notInFirstScreen = !
                        1, t.sidebarExpand = !0, t.showSideMenu = !1, t
                }
                return o()(i, [{
                    key: "handlePreorder",
                    value: function () {
                        var t = this;
                        Object(I.a)("reserve_watch_btn_click", {
                            position_id: 2
                        }), this.lockOrder || this.appointInfo.orderStatus || (this.lockOrder = !
                            0, this.loginInfo.isLogin ? this.ACT_ORDER().then((function () {
                            t.lockOrder = !1
                        })).catch((function () {
                            t.lockOrder = !1
                        })) : (this.lockOrder = !1, this.QUICK_LOGIN()))
                    }
                }, {
                    key: "getScrollTop",
                    value: function () {
                        return Math.max(window.pageYOffset || 0, window.document.documentElement.scrollTop ||
                            window.document.body.scrollTop)
                    }
                }, {
                    key: "getTargetBounding",
                    value: function (t) {
                        return document.querySelector(t) && document.querySelector(t).getBoundingClientRect()
                    }
                }, {
                    key: "handleScroll",
                    value: function () {
                        var t = this;
                        this.getScrollTop() <= 1 && (this.activeStep = 0), this.notInFirstScreen =
                            this.getScrollTop() >= this.getTargetBounding("#preorder").height, 1 ===
                        this.inLive && (this.notInFirstScreen = this.getScrollTop() >= this.getTargetBounding(
                            "#live-room").height + this.getTargetBounding("#preorder").height);
                        var e = this.getTargetBounding("#menu-comp");
                        (0 === this.inLive || 1 === this.inLive) && this.pcMenuShowImg && e && (e.top <
                        0 && e.top + e.height < 0 ? this.showSideMenu = !0 : this.showSideMenu = !
                            1), this.commonSetM({
                            key: "notInFirstScreen",
                            value: this.notInFirstScreen
                        });
                        var i = this.sideNavList.filter((function (e) {
                                return e.show && e.step && "top" !== e.target && t.getTargetBounding(
                                    "#".concat(e.target))
                            })).map((function (e) {
                                return {
                                    top: t.getTargetBounding("#".concat(e.target)).top,
                                    target: e.target,
                                    step: e.step
                                }
                            })),
                            n = 0;
                        i.forEach((function (t) {
                            t.top <= 1 && (n = t.step)
                        })), this.activeStep = n
                    }
                }, {
                    key: "handleScreenEvent",
                    value: function () {
                        this.GET_ADV_LIST()
                    }
                }, {
                    key: "mounted",
                    value: function () {
                        this.handleScreenEvent(), this.handleScroll(), window.addEventListener(
                            "scroll", Object(U.throttle)(16, !1, this.handleScroll), !1)
                    }
                }, {
                    key: "showMenuToast",
                    value: function () {
                        Object(I.a)("program_click", {
                            position_id: 2
                        }), this.GET_MENU_LIST(), this.commonSetM({
                            key: "showMenuToast",
                            value: !0
                        })
                    }
                }, {
                    key: "sideNavList",
                    get: function () {
                        var t = {
                            step: 1,
                            target: "",
                            show: -1 !== this.inLive
                        };
                        return 0 === this.inLive ? t.target = "preview" : 1 === this.inLive ? t.target =
                            "live-room" : 2 === this.inLive && (t.target = "video-container"), [{
                            step: 0,
                            target: "top",
                            show: !0
                        }, t, {
                            step: 2,
                            target: "live-reward",
                            show: 1 === this.inLive && this.ruleInfo.menuRule
                        }, {
                            step: 3,
                            target: "chapter",
                            show: 2 === this.inLive && this.sectionList.length
                        }, {
                            step: 4,
                            target: "dfilm",
                            show: this.onlyBpList.length >= 4
                        }, {
                            step: 5,
                            target: this.guestStarList.length > 0 ? "guest-star" : "guest",
                            show: this.guestList.length > 0 && 0 === this.inLive
                        }, {
                            step: 6,
                            target: "star",
                            show: 0 === this.inLive
                        }, {
                            step: 7,
                            target: "relative-movie",
                            show: this.movieList.length > 0
                        }, {
                            step: 8,
                            target: "recreation",
                            show: this.recreationList.length > 0 && 0 === this.inLive
                        }, {
                            step: 9,
                            target: "dynamic",
                            show: !0
                        }]
                    }
                }]), i
            }(h.c);
        j([y.c], R.prototype, "loginInfo", void 0), j([y.c], R.prototype, "step", void 0), j([y.c], R.prototype,
            "appointInfo", void 0), j([y.c], R.prototype, "guestList", void 0), j([y.c], R.prototype,
            "recreationList", void 0), j([y.c], R.prototype, "guestStarList", void 0), j([y.c], R.prototype,
            "movieList", void 0), j([y.c], R.prototype, "onlyBpList", void 0), j([y.c], R.prototype, "inLive",
            void 0), j([y.c], R.prototype, "pcMenuShowImg", void 0), j([y.c], R.prototype, "ruleInfo", void 0),
            j([y.c], R.prototype, "sectionList", void 0), j([y.b], R.prototype, "commonSetM", void 0), j([y.b], R.prototype,
            "QUICK_LOGIN", void 0), j([y.a], R.prototype, "GET_ADV_LIST", void 0), j([y.a], R.prototype,
            "GET_MENU_LIST", void 0), j([y.a], R.prototype, "ACT_ORDER", void 0);
        var L = R = j([h.a], R),
            E = (i(220), Object(b.a)(L, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: ["side-nav ", t.notInFirstScreen ? "" : "unvisible"]
                }, [n("div", {
                    staticClass: "full-sidebar flex-box flex-aic flex-fdc flex-jcc"
                }, [n("div", {
                    class: ["toggle-wrapper flex-fs0", t.sidebarExpand ?
                        "expanded" : "hided"]
                }, [n("img", {
                    class: ["toggle-icon", t.sidebarExpand ? "expanded" :
                        "hided"],
                    attrs: {
                        src: i(219),
                        alt: "toggle"
                    },
                    on: {
                        click: function (e) {
                            t.sidebarExpand = !t.sidebarExpand
                        }
                    }
                }), t._v(" "), t._l(t.sideNavList.filter((function (t) {
                    return t.show
                })), (function (e) {
                    return n("a", {
                        key: e.step,
                        staticClass: "side-nav-item",
                        attrs: {
                            href: "#" + e.target
                        }
                    }, [n("div", {
                        class: "smooth-transition bg-" +
                            e.target + " " + (e.step ===
                            t.activeStep ?
                                "active" : "")
                    })])
                }))], 2), t._v(" "), t.appointInfo.orderStatus || 0 !== t.inLive ?
                    t._e() : n("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "reserve_watch_btn_show",
                                data: {
                                    position_id: 2
                                }
                            },
                            expression: "{\n        name: 'reserve_watch_btn_show',\n        data: { position_id: 2 },\n      }"
                        }],
                        staticClass: "bg-order flex-fs0",
                        on: {
                            click: t.handlePreorder
                        }
                    }), t._v(" "), t.pcMenuShowImg && t.showSideMenu && (0 === t.inLive ||
                    1 === t.inLive) ? n("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "program_show",
                            data: {
                                position_id: 2
                            }
                        },
                        expression: "{\n        name: 'program_show',\n        data: { position_id: 2 },\n      }"
                    }],
                    staticClass: "side-menu-btn flex-fs0",
                    on: {
                        click: t.showMenuToast
                    }
                }) : t._e()])])
            }), [], !1, null, "a8bc69fa", null).exports),
            D = i(17);

        function J(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var N = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            P = function (t) {
                c()(i, t);
                var e = J(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).instance = null, t
                }
                return o()(i, [{
                    key: "mounted",
                    value: function () {
                        var t = this;
                        this.anime.drawBaseAnime(this.$el, D.a.card).then((function (e) {
                            t.instance = e
                        }))
                    }
                }, {
                    key: "beforeDestory",
                    value: function () {
                        this.instance && this.instance.destory()
                    }
                }]), i
            }(h.c);
        N([y.c], P.prototype, "anime", void 0);
        var V = P = N([h.a], P),
            Q = (i(221), Object(b.a)(V, (function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    staticClass: "card-fire"
                })
            }), [], !1, null, null, null).exports);

        function B(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var G = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            W = function (t) {
                c()(i, t);
                var e = B(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).activeIndex = -1, t.swiperOption = {
                        initialSlide: 2,
                        slidesPerView: 9,
                        spaceBetween: 40,
                        centeredSlides: !0,
                        grabCursor: !0,
                        allowTouchMove: !1,
                        disableOnInteraction: !0
                    }, t
                }
                return o()(i, [{
                    key: "handleScoreChange",
                    value: function () {
                        this.handleActiveChange()
                    }
                }, {
                    key: "handlePrizeChange",
                    value: function () {
                        this.handleActiveChange()
                    }
                }, {
                    key: "handleActiveChange",
                    value: function () {
                        if (this.totalScore >= 0 && this.prizeList.length) {
                            if (this.totalScore >= this.prizeList[this.prizeList.length - 1].star)
                                return this.activeIndex = this.prizeList.length - 1;
                            for (var t = -1, e = 0; e < this.prizeList.length; e++)
                                if (this.totalScore >= this.prizeList[e].star && this.totalScore <
                                    this.prizeList[e + 1].star) {
                                    t = e;
                                    break
                                } this.activeIndex = t
                        }
                    }
                }, {
                    key: "handleMouseEnter",
                    value: function () {}
                }, {
                    key: "onHover",
                    value: function (t) {
                        this.$refs.starSwiper.swiper.slideTo(t)
                    }
                }, {
                    key: "mounted",
                    value: function () {}
                }, {
                    key: "handleSwiperMove",
                    value: function () {
                        var t = this.$refs.starSwiper,
                            e = t.$el,
                            i = null,
                            n = this;
                        e.addEventListener("mouseover", (function (t) {
                            i || (i = setTimeout((function () {
                                i = null,
                                    function (t) {
                                        var e = t.clientX,
                                            i = n.$refs.starSwiper;
                                        e > 600 ? i.swiper.slideTo(i.swiper
                                                .activeIndex + 1, 2e3) :
                                            i.swiper.slideTo(i.swiper.activeIndex -
                                                1, 2e3)
                                    }(t)
                            }), 300))
                        })), e.addEventListener("mouseover", (function (e) {
                            var i = e.clientX - (window.innerWidth - 1424) / 2,
                                n = Math.floor(i / 110);
                            t.swiper.slideTo(n)
                        }))
                    }
                }, {
                    key: "styleObj",
                    get: function () {
                        return {
                            left: "".concat(78 * this.activeIndex, "px"),
                            opacity: this.activeIndex <= 8 && this.activeIndex >= 0 ? 1 : 0
                        }
                    }
                }]), i
            }(h.c);
        G([y.c], W.prototype, "totalScore", void 0), G([y.c], W.prototype, "prizeList", void 0), G([Object(h.d)(
            "totalScore")], W.prototype, "handleScoreChange", null), G([Object(h.d)("prizeList")], W.prototype,
            "handlePrizeChange", null);
        var z = W = G([Object(h.a)({
                components: {
                    CardFire: Q
                }
            })], W),
            F = (i(222), Object(b.a)(z, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "card-swiper"
                }, [n("div", {
                    staticClass: "swiper-box"
                }, [n("swiper", {
                    ref: "starSwiper",
                    staticClass: "swiper swiper-cursor",
                    attrs: {
                        options: t.swiperOption
                    },
                    on: {
                        onmouseenter: t.handleMouseEnter
                    }
                }, t._l(t.prizeList, (function (e, a) {
                    return n("swiper-slide", {
                        key: a
                    }, [n("div", {
                        staticClass: "prize-item"
                    }, [a <= t.activeIndex ? n(
                        "card-fire") : t._e(), t._v(
                        " "), n("img", {
                        staticClass: "prize-img",
                        attrs: {
                            src: e.image,
                            alt: "prize"
                        }
                    })], 1), t._v(" "), n("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "my_meteor_show",
                                data: {
                                    ord_id: a +
                                        1,
                                    title: e.title ||
                                        ""
                                }
                            },
                            expression: "{\n            name: 'my_meteor_show',\n            data: { ord_id: index + 1, title:item.title ||'' },\n          }"
                        }],
                        staticClass: "prize-star flex-box  flex-jcc"
                    }, [n("img", {
                        staticClass: "prize-star-icon flex-fs0",
                        attrs: {
                            src: i(30),
                            alt: "star"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "prize-star-number"
                    }, [t._v(t._s(e.star))])])])
                })), 1)], 1), t._v(" "), n("div", {
                    staticClass: "swiper-bottom flex-box flex-aic"
                }, [n("div", {
                    staticClass: "flex-box flex-aic flex-jcsb swiper-index-container"
                }, t._l(9, (function (e, i) {
                    return n("div", {
                        key: i,
                        class: ["swiper-index-item", i < t.activeIndex ?
                            "passed" : i === t.activeIndex ?
                                "active" : ""]
                    })
                })), 0), t._v(" "), n("img", {
                    staticClass: "shining-star",
                    style: t.styleObj,
                    attrs: {
                        src: i(82),
                        alt: "star"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "flex-box flex-aic flex-jcsb swiper-image-container"
                }, t._l(9, (function (e, i) {
                    return n("div", {
                        key: i,
                        class: ["swiper-image-item", i < t.activeIndex ?
                            "passed" : i === t.activeIndex ?
                                "active" : ""],
                        on: {
                            mouseenter: function (e) {
                                return t.onHover(i)
                            }
                        }
                    })
                })), 0)])
            }), [], !1, null, "41b401c8", null).exports);

        function H(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var X = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            K = function (t) {
                c()(i, t);
                var e = H(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).activeIndex = 0, t.offsetIndex = 0, t.hoverIndex = -
                        1, t.timer = null, t.throttleTimer = null, t.run = !0, t.translateX = 0, t.enableAnimation = !
                        1, t.mouseInfo = {
                        x: 0,
                        y: 0
                    }, t.offsetX = 0, t
                }
                return o()(i, [{
                    key: "handleOffsetIndexChange",
                    value: function () {
                        this.translateX = -147 * this.offsetIndex
                    }
                }, {
                    key: "handleScoreChange",
                    value: function () {
                        this.handleActiveChange()
                    }
                }, {
                    key: "handlePrizeChange",
                    value: function () {
                        this.handleActiveChange()
                    }
                }, {
                    key: "handleActiveChange",
                    value: function () {
                        if (this.totalScore >= 0 && this.prizeList.length) {
                            if (this.totalScore >= this.prizeList[this.prizeList.length - 1].star)
                                return this.activeIndex = this.prizeList.length - 1;
                            for (var t = -1, e = 0; e < this.prizeList.length; e++)
                                if (this.totalScore >= this.prizeList[e].star && this.totalScore <
                                    this.prizeList[e + 1].star) {
                                    t = e;
                                    break
                                } this.activeIndex = t, this.offsetIndex = Math.max(t, 0)
                        }
                    }
                }, {
                    key: "onLeave",
                    value: function () {
                        this.hoverIndex = -1
                    }
                }, {
                    key: "onHover",
                    value: function (t) {
                        this.hoverIndex = t, this.offsetIndex = t
                    }
                }, {
                    key: "handleContainerLeave",
                    value: function () {
                        this.enableAnimation = !1, this.$refs.scrollBox.style.transition =
                            "all 0.5s ease"
                    }
                }, {
                    key: "handleMouseMove",
                    value: function (t) {
                        this.mouseFn1(t)
                    }
                }, {
                    key: "mouseFn",
                    value: function (t) {
                        var e = t.screenX - this.mouseInfo.x,
                            i = Math.abs(e);
                        Math.abs(t.screenY - this.mouseInfo.y) - i <= 0 && i >= 5 && (this.offsetX *
                        e > 0 && this.triggerScroll(), this.offsetX = e), this.mouseInfo = {
                            x: t.screenX,
                            y: t.screenY
                        }
                    }
                }, {
                    key: "scrollSmoothFn",
                    value: function () {
                        var t = this;
                        this.$nextTick((function () {
                            t.translateX = Math.min(0, Math.max(-1176, t.translateX +
                                20 * (t.offsetX < 0 ? 1 : -1)))
                        }))
                    }
                }, {
                    key: "triggerScroll",
                    value: function () {
                        this.scrollSmoothFn()
                    }
                }, {
                    key: "mouseFn1",
                    value: function (t) {
                        var e = this.$refs.scrollBox;
                        e.style.transition = "all 0s ease";
                        var i = Math.floor(1176 * t.clientX / this.screenWidth),
                            n = Math.abs(i);
                        e.style.transform = "translateX(-".concat(n, "px)")
                    }
                }, {
                    key: "innerMarginStyle",
                    get: function () {
                        return {
                            "overflow-x": this.screenWidth <= 980 ? "hidden" : "initial"
                        }
                    }
                }, {
                    key: "styleObj",
                    get: function () {
                        return {
                            left: "".concat(78 * this.activeIndex, "px"),
                            opacity: this.activeIndex <= 8 && this.activeIndex >= 0 ? 1 : 0
                        }
                    }
                }, {
                    key: "offSetXStyle",
                    get: function () {
                        return {
                            transform: "translateX(".concat(this.translateX, "px)")
                        }
                    }
                }]), i
            }(h.c);
        X([y.c], K.prototype, "totalScore", void 0), X([y.c], K.prototype, "defaultImg", void 0), X([y.c], K.prototype,
            "prizeList", void 0), X([y.c], K.prototype, "screenWidth", void 0), X([Object(h.d)("offsetIndex")],
            K.prototype, "handleOffsetIndexChange", null), X([Object(h.d)("totalScore")], K.prototype,
            "handleScoreChange", null), X([Object(h.d)("prizeList")], K.prototype, "handlePrizeChange", null);
        var q = K = X([Object(h.a)({
                components: {
                    CardFire: Q
                }
            })], K),
            Y = (i(223), Object(b.a)(q, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "inner-margin",
                    style: t.innerMarginStyle,
                    attrs: {
                        id: "prize-list"
                    }
                }, [n("div", {
                    staticClass: "touch-container"
                }, [n("div", {
                    ref: "scrollBox",
                    staticClass: "prize-container flex-box flex-aic",
                    style: t.offSetXStyle,
                    on: {
                        mouseleave: t.handleContainerLeave,
                        mousemove: function (e) {
                            return t.handleMouseMove(e)
                        }
                    }
                }, t._l(t.prizeList, (function (e, a) {
                    return n("div", {
                        key: a,
                        class: (a === t.hoverIndex ?
                            "bottom-hover" : "") + " " + (a <=
                            t.activeIndex ? "active" : "") +
                            " prize-item"
                    }, [n("div", {
                        staticClass: "prize-pic"
                    }, [a <= t.activeIndex ? n(
                        "card-fire") : t._e(), t._v(
                        " "), n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.image,
                            expression: "item.image"
                        }],
                        staticClass: "prize-img",
                        attrs: {
                            src: t.defaultImg,
                            alt: "prize"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "prize-info"
                    }, [n("div", {
                        staticClass: "prize-name"
                    }, [t._v(t._s(e.title))]),
                        t._v(" "), n("div", {
                            staticClass: "prize-number"
                        }, [t._v(t._s(e.awardAmount) +
                            "鍚�")])])], 1), t._v(" "), n(
                        "div", {
                            directives: [{
                                name: "exposure",
                                rawName: "v-exposure",
                                value: {
                                    name: "my_meteor_show",
                                    data: {
                                        ord_id: a +
                                            1,
                                        title: e.title ||
                                            ""
                                    }
                                },
                                expression: "{\n            name: 'my_meteor_show',\n            data: { ord_id: index + 1, title: item.title || '' },\n          }"
                            }],
                            staticClass: "prize-star flex-box flex-jcc flex-aic"
                        }, [n("img", {
                            staticClass: "prize-star-icon flex-fs0",
                            attrs: {
                                src: i(30),
                                alt: "star"
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "prize-star-number"
                        }, [t._v(t._s(e.star))])])])
                })), 0)]), t._v(" "), n("div", {
                    staticClass: "swiper-bottom flex-box flex-aic"
                }, [n("div", {
                    staticClass: "flex-box flex-aic flex-jcsb swiper-index-container"
                }, t._l(t.prizeList, (function (e, i) {
                    return n("div", {
                        key: i,
                        class: ["swiper-index-item", i < t.activeIndex ?
                            "passed" : i === t.activeIndex ?
                                "active" : ""]
                    })
                })), 0), t._v(" "), n("img", {
                    staticClass: "shining-star",
                    style: t.styleObj,
                    attrs: {
                        src: i(82),
                        alt: "star"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "flex-box flex-aic flex-jcsb swiper-image-container"
                }, t._l(t.prizeList, (function (e, i) {
                    return n("div", {
                        key: i,
                        class: ["swiper-image-item", i < t.activeIndex ?
                            "passed" : i === t.activeIndex ?
                                "active" : ""],
                        on: {
                            mouseleave: t.onLeave,
                            mouseenter: function (e) {
                                return t.onHover(i)
                            }
                        }
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.thumbImage,
                            expression: "item.thumbImage"
                        }],
                        staticClass: "prize-thumb",
                        attrs: {
                            src: t.defaultImg,
                            alt: e.title
                        }
                    })])
                })), 0)])
            }), [], !1, null, "18dc5508", null).exports),
            $ = i(46);

        function Z(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var tt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            et = function (t) {
                c()(i, t);
                var e = Z(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).toastVisible = !1, t
                }
                return o()(i, [{
                    key: "handleTimer",
                    value: function (t) {
                        document.body.style.overflow = t ? "hidden" : ""
                    }
                }, {
                    key: "handlePropChange",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "transData",
                    value: function (t) {
                        return $(t).format("MM鏈圖鏃�")
                    }
                }, {
                    key: "beforeMount",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "closeToast",
                    value: function () {
                        this.toastVisible = !1, this.$emit("input", this.toastVisible)
                    }
                }]), i
            }(h.c);
        tt([y.c], et.prototype, "taskPointList", void 0), tt([Object(h.b)(Boolean)], et.prototype, "value", void 0),
            tt([Object(h.d)("toastVisible")], et.prototype, "handleTimer", null), tt([Object(h.d)("value")], et.prototype,
            "handlePropChange", null);
        var it = et = tt([h.a], et),
            nt = (i(225), Object(b.a)(it, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.toastVisible,
                        expression: "toastVisible"
                    }],
                    staticClass: "toast-dialog"
                }, [n("div", {
                    staticClass: "toast-mask animation-toast"
                }), t._v(" "), n("div", {
                    staticClass: "toast-body animation-toast"
                }, [n("div", {
                    staticClass: "toast-header"
                }, [n("img", {
                    staticClass: "toast-close",
                    attrs: {
                        src: i(31),
                        alt: "鍏抽棴"
                    },
                    on: {
                        click: t.closeToast
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "toast-content"
                }, [n("div", {
                    staticClass: "record-content"
                }, [n("div", {
                    staticClass: "record-title"
                }, [t._v("娴佹槦鑾峰彇璁板綍")]), t._v(" "), t.taskPointList
                    .length ? n("div", {
                    staticClass: "record-list custom-scrollbar"
                }, t._l(t.taskPointList, (function (e, a) {
                    return n("div", {
                        key: a,
                        staticClass: "record-item flex-box flex-aic flex-jcsb"
                    }, [n("div", [t._v(
                        "\n              " +
                        t._s(t.transData(
                            1e3 *
                            e.ctime
                        )) + "閫氳繃" +
                        t._s(e.task_name) +
                        "鑾峰緱" + t._s(
                        e.task_score
                        ) +
                        "棰楁祦鏄焅n            "
                    )]), t._v(" "), n("div", {
                        staticClass: "flex-box flex-aic"
                    }, [n("div", {
                        staticClass: "task-plus"
                    }, [t._v(
                        "+"
                    )]), t._v(" "),
                        n("img", {
                            staticClass: "task-star",
                            attrs: {
                                src: i(
                                    30
                                ),
                                alt: "star"
                            }
                        }), t._v(" "),
                        n("div", {
                            staticClass: "task-score"
                        }, [t._v(t._s(
                            e
                                .task_score
                        ))])])])
                })), 0) : n("div", {
                    staticClass: "record-placeholder"
                }, [n("img", {
                    staticClass: "record-placeholder-img",
                    attrs: {
                        src: i(224),
                        alt: "鏆傛棤"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "record-placeholder-text"
                }, [t._v("绌虹┖鐨勶紝蹇幓鏀堕泦鍚э紒")])])])])])])
            }), [], !1, null, "6c063a51", null).exports);

        function at(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var rt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            ot = function (t) {
                c()(i, t);
                var e = at(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).toastVisible = !1, t
                }
                return o()(i, [{
                    key: "handleTimer",
                    value: function (t) {
                        document.body.style.overflow = t ? "hidden" : ""
                    }
                }, {
                    key: "handlePropChange",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "beforeMount",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "closeToast",
                    value: function () {
                        this.toastVisible = !1, this.$emit("input", this.toastVisible)
                    }
                }]), i
            }(h.c);
        rt([y.c], ot.prototype, "ruleInfo", void 0), rt([Object(h.b)(Boolean)], ot.prototype, "value", void 0), rt(
            [Object(h.b)(String)], ot.prototype, "type", void 0), rt([Object(h.d)("toastVisible")], ot.prototype,
            "handleTimer", null), rt([Object(h.d)("value")], ot.prototype, "handlePropChange", null);
        var st = ot = rt([h.a], ot),
            ct = (i(226), Object(b.a)(st, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.toastVisible,
                        expression: "toastVisible"
                    }],
                    staticClass: "toast-dialog"
                }, [n("div", {
                    staticClass: "toast-mask animation-toast"
                }), t._v(" "), n("div", {
                    staticClass: "toast-body animation-toast"
                }, [n("div", {
                    staticClass: "toast-header"
                }, [n("img", {
                    staticClass: "toast-close",
                    attrs: {
                        src: i(31),
                        alt: "鍏抽棴"
                    },
                    on: {
                        click: t.closeToast
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "toast-content"
                }, ["menu" === t.type ? n("div", {
                    staticClass: "rule-content custom-scrollbar",
                    domProps: {
                        innerHTML: t._s(t.ruleInfo.menuRule)
                    }
                }) : n("div", {
                    staticClass: "rule-content custom-scrollbar",
                    domProps: {
                        innerHTML: t._s(t.ruleInfo.ruleTextPc)
                    }
                })])])])
            }), [], !1, null, "2ba491e0", null).exports);

        function lt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var ut = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            dt = function (t) {
                c()(i, t);
                var e = lt(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).toastVisible = !0, t
                }
                return o()(i, [{
                    key: "handleTimer",
                    value: function (t) {
                        document.body.style.overflow = t ? "hidden" : ""
                    }
                }, {
                    key: "handlePropChange",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "beforeMount",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "closeToast",
                    value: function () {
                        this.toastVisible = !1, this.$emit("input", this.toastVisible)
                    }
                }]), i
            }(h.c);
        ut([Object(h.b)(Boolean)], dt.prototype, "value", void 0), ut([y.c], dt.prototype, "luckyInfo", void 0), ut(
            [y.b], dt.prototype, "commonSetM", void 0), ut([y.a], dt.prototype, "DO_MISSION_ACT", void 0), ut([
            Object(h.d)("toastVisible")], dt.prototype, "handleTimer", null), ut([Object(h.d)("value")], dt.prototype,
            "handlePropChange", null);
        var ft = dt = ut([h.a], dt),
            pt = (i(227), Object(b.a)(ft, (function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.toastVisible,
                        expression: "toastVisible"
                    }],
                    staticClass: "toast-dialog"
                }, [e("div", {
                    staticClass: "toast-mask animation-toast"
                }), this._v(" "), e("div", {
                    staticClass: "toast-body animation-toast"
                }, [e("div", {
                    staticClass: "toast-content"
                }, [e("div", {
                    staticClass: "toast-title"
                }, [this._v("鍏ㄩ儴涓鍚嶅崟")]), this._v(" "), e("div", {
                    staticClass: "toast-final-menu custom-scrollbar"
                }, [e("img", {
                    staticClass: "menu-img",
                    attrs: {
                        src: this.luckyInfo.rewardImgPc,
                        alt: "鍚嶅崟"
                    }
                })])]), this._v(" "), e("img", {
                    staticClass: "toast-close",
                    attrs: {
                        src: i(31),
                        alt: "鍏抽棴"
                    },
                    on: {
                        click: this.closeToast
                    }
                })])])
            }), [], !1, null, "3c4ebf5c", null).exports),
            vt = i(28),
            ht = i(21);

        function yt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var mt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            gt = function (t) {
                c()(n, t);
                var e = yt(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).lockOrder = !1, t.showPopShare = !1, t
                }
                return o()(n, [{
                    key: "refreshStar",
                    value: function () {
                        this.REFRESH_SCORE()
                    }
                }, {
                    key: "loadShareConfig",
                    value: function () {
                        var t = this;
                        vt.a.share({
                            title: this.shareInfo.title || "",
                            desc: this.shareInfo.desc || "",
                            link: window.location.href + "".concat(location.href.indexOf(
                                "?") > -1 ? "&ts=".concat((new Date).getTime()) :
                                "?ts=".concat((new Date).getTime())),
                            pics: this.shareInfo.pics || "",
                            show: ["bili", "weibo", "qq", "qzone", "baidu_tieba", "wechat"],
                            biz_type: 3,
                            defaultInput: this.shareInfo.editContent || "",
                            onDynamicShareSucceed: function () {
                                t.handleShareAct()
                            }
                        }, document.querySelector("#share-card2"), (function (e) {
                            "bili" !== e && t.handleShareAct()
                        }))
                    }
                }, {
                    key: "toLogin",
                    value: function () {
                        this.QUICK_LOGIN()
                    }
                }, {
                    key: "handleClick",
                    value: function (t) {
                        var e = this;
                        switch (t.task_type) {
                            case 1:
                                Object(I.a)("meteor_task_reserve_click"), this.handlePreorder();
                                break;
                            case 3:
                                if (Object(I.a)("meteor_task_share_click", {
                                    share_num: t.finish_num || 0
                                }), t.done) return;
                                this.loginInfo.isLogin ? this.showPopShare = !0 : this.QUICK_LOGIN();
                                break;
                            case 2:
                                Object(I.a)("meteor_task_watch_click", {
                                    watch_num: t.finish_num || 0
                                }), this.loginInfo.isLogin && this.lookVideoUrl ? window.open(
                                    this.lookVideoUrl) : this.QUICK_LOGIN();
                                break;
                            case 4:
                                if (Object(I.a)("meteor_task_dynamic_click"), !this.loginInfo.isLogin)
                                    return this.QUICK_LOGIN();
                                Object(vt.b)({
                                    title: this.shareInfo.title || "",
                                    desc: this.shareInfo.desc || "",
                                    link: window.location.href + "".concat(location.href.indexOf(
                                        "?") > -1 ? "&ts=".concat((new Date).getTime()) :
                                        "?ts=".concat((new Date).getTime())),
                                    pics: this.shareInfo.pics || "",
                                    defaultInput: this.shareInfo.editContent || "",
                                    onDynamicShareSucceed: function () {
                                        e.refreshStar()
                                    }
                                })
                        }
                    }
                }, {
                    key: "handlePreorder",
                    value: function () {
                        var t = this;
                        if (this.lockOrder || this.appointInfo.orderStatus) return h.c.prototype.$message
                            .info("宸查绾");
                        this.lockOrder = !0, this.loginInfo.isLogin ? this.ACT_ORDER().then((
                            function () {
                                t.lockOrder = !1
                            })).catch((function () {
                            t.lockOrder = !1
                        })) : (this.lockOrder = !1, this.QUICK_LOGIN())
                    }
                }, {
                    key: "handleShareAct",
                    value: function () {
                        this.DO_MISSION_ACT({
                            taskType: 3,
                            taskBatch: 0,
                            flag: 0
                        })
                    }
                }, {
                    key: "beforeMount",
                    value: function () {
                        var t = this;
                        ht.a.$on("clickOutSide", (function () {
                            t.showPopShare = !1
                        }))
                    }
                }, {
                    key: "showDailyTask",
                    get: function () {
                        var t = this,
                            e = [],
                            n = this.dialyTaskList.find((function (t) {
                                return 5 === t.task_type
                            }));
                        if (n) {
                            var a = n.meteorShower && n.meteorShower.next_start_time ? new Date(1e3 *
                                n.meteorShower.next_start_time) : null;
                            return this.dialyTaskList.forEach((function (n) {
                                switch (n.task_type) {
                                    case 1:
                                        e.push({
                                            title: "棰勭害鐩存挱",
                                            desc: '瀹屾垚棰勭害鍙幏寰�<br/><span class="white-text">'
                                                .concat(n.task_score || 0,
                                                    "棰楁祦鏄�</span>"),
                                            done: t.appointInfo.orderStatus ||
                                                !1,
                                            task_type: n.task_type,
                                            btn: "鍘婚绾�",
                                            doneText: "宸查绾�",
                                            exposureName: "meteor_task_reserve_show",
                                            cover: i(283)
                                        });
                                        break;
                                    case 2:
                                        e.push({
                                            title: "瑙傜湅瑙嗛",
                                            process: "(".concat(n.finish_num ||
                                                0, "/").concat(n.total_num ||
                                                0, ")"),
                                            desc: '鐪�1娆℃寚瀹氳法鏅氳棰戝彲鑾峰緱<span class="white-text">'
                                                .concat(n.task_score || 0,
                                                    "棰楁祦鏄�</span>锛屾瘡鏃ヤ笂闄�").concat(
                                                    n.task_score * n.total_num ||
                                                    0, "棰�"),
                                            done: n.finish_num === n.total_num,
                                            task_type: n.task_type,
                                            btn: "鍘昏鐪�",
                                            doneText: "鍘昏鐪�",
                                            finish_num: n.finish_num || 0,
                                            exposureName: "meteor_task_watch_show",
                                            cover: i(284)
                                        });
                                        break;
                                    case 3:
                                        e.push({
                                            title: "鍒嗕韩濂藉弸",
                                            process: "",
                                            desc: '鍒嗕韩鏈娲诲姩椤甸潰鍙幏寰�<span class="white-text">'
                                                .concat(n.task_score || 0,
                                                    "棰楁祦鏄�</span>"),
                                            done: n.finish_num === n.total_num,
                                            task_type: n.task_type,
                                            btn: "鍘诲垎浜�",
                                            doneText: "宸插垎浜�",
                                            finish_num: n.finish_num || 0,
                                            exposureName: "meteor_task_share_show",
                                            cover: i(285)
                                        });
                                        break;
                                    case 4:
                                        e.push({
                                            title: "鍙戝竷鍔ㄦ€�",
                                            process: "(".concat(n.finish_num,
                                                "/").concat(n.total_num,
                                                ")"),
                                            desc: '鍙戝竷1娆″甫鎸囧畾璺ㄦ櫄tag鍔ㄦ€侊紝鍙緱<span class="white-text">'
                                                .concat(n.task_score || 0,
                                                    "棰楁祦鏄�</span>锛屾瘡鏃ヤ笂闄�").concat(
                                                    n.task_score * n.total_num ||
                                                    0, "棰�"),
                                            done: !1,
                                            task_type: n.task_type,
                                            btn: "鍘诲彂甯�",
                                            doneText: "",
                                            finish_num: n.finish_num || 0,
                                            exposureName: "meteor_task_dynamic_show",
                                            cover: i(286)
                                        });
                                        break;
                                    case 5:
                                        e.push({
                                            title: "鏀堕泦娴佹槦",
                                            process: "(".concat(n.finish_num ||
                                                0, "/").concat(n.total_num ||
                                                0, ")"),
                                            desc: a ? "".concat(n.meteorShower &&
                                                n.meteorShower.batch ?
                                                "涓嬪満" : "绗竴鍦�",
                                                '娴佹槦闆ㄥ皢浜�<span class="white-text">'
                                            ).concat($(a).format(
                                                "MM鏈圖鏃� HH鐐�"),
                                                "</span>闄嶈惤<br/> 蹇幓椤甸潰瀵绘壘娴佹槦锛岃繕鏈夊皬鎯婂枩绛夌潃浣犲摕"
                                            ) : "蹇湪鏈〉闈㈠鎵炬祦鏄燂紝杩樻湁灏忔儕鍠滅瓑鐫€浣犲摕!",
                                            done: n.finish_num === n.total_num,
                                            task_type: n.task_type,
                                            cover: i(287)
                                        })
                                }
                            })), [e[0], e[2], e[1], e[3], e[4]]
                        }
                    }
                }]), n
            }(h.c);
        mt([y.c], gt.prototype, "loginInfo", void 0), mt([y.c], gt.prototype, "defaultImg", void 0), mt([y.c], gt.prototype,
            "dialyTaskList", void 0), mt([y.c], gt.prototype, "appointInfo", void 0), mt([y.c], gt.prototype,
            "shareInfo", void 0), mt([y.c], gt.prototype, "lookVideoUrl", void 0), mt([y.b], gt.prototype,
            "QUICK_LOGIN", void 0), mt([y.a], gt.prototype, "ACT_ORDER", void 0), mt([y.a], gt.prototype,
            "REFRESH_SCORE", void 0), mt([y.a], gt.prototype, "DO_MISSION_ACT", void 0), mt([Object(h.d)(
            "shareInfo")], gt.prototype, "loadShareConfig", null);
        var _t = gt = mt([Object(h.a)({
                components: {}
            })], gt),
            wt = (i(288), Object(b.a)(_t, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "star-task"
                    }
                }, [n("div", {
                    staticClass: "rule-wrapper"
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showPopShare,
                        expression: "showPopShare"
                    }],
                    staticClass: "pop-share",
                    on: {
                        click: function (t) {
                            t.stopPropagation()
                        }
                    }
                }, [t._m(0)]), t._v(" "), n("div", {
                    staticClass: "rule-info"
                }, [n("img", {
                    staticClass: "star-rule-title",
                    attrs: {
                        src: i(228),
                        alt: "浠诲姟"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "rule-content clearfix"
                }, t._l(t.showDailyTask, (function (e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "rule-item flex-box"
                    }, [n("div", {
                        staticClass: "rule-item-img flex-fs0"
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e
                                .cover,
                            expression: "item.cover"
                        }],
                        attrs: {
                            src: t.defaultImg,
                            alt: "浠诲姟"
                        }
                    })]), t._v(" "), n("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: e
                                        .exposureName ||
                                    "",
                                data: {
                                    share_num: 3 ===
                                    e
                                        .task_type ?
                                        e
                                            .finish_num :
                                        0,
                                    watch_num: 2 ===
                                    e
                                        .task_type ?
                                        e
                                            .finish_num :
                                        0
                                }
                            },
                            expression: "{\n              name: item.exposureName || '',\n              data: {\n                share_num: item.task_type === 3 ? item.finish_num : 0,\n                watch_num: item.task_type === 2 ? item.finish_num : 0,\n              },\n            }"
                        }],
                        staticClass: "rule-item-info flex-f1 flex-box flex-jcsb flex-fdc"
                    }, [n("div", {
                        staticClass: "rule-item-title"
                    }, [n("span", [t._v(
                        t._s(
                            e
                                .title
                        ))]), t._v(
                        " "), n(
                        "span", {
                            staticClass: "rule-item-process"
                        }, [t._v(t._s(
                            e
                                .process
                        ))])]), t._v(" "),
                        n("div", {
                            staticClass: "rule-item-desc",
                            domProps: {
                                innerHTML: t
                                    ._s(e.desc)
                            }
                        })]), t._v(" "), e.btn ? n(
                        "div", {
                            class: "rule-item-btn flex-fs0 " +
                                (e.done && 2 !== e.task_type ?
                                    "done" : ""),
                            on: {
                                click: function (i) {
                                    return i.stopPropagation(),
                                        t.handleClick(
                                            e)
                                }
                            }
                        }, [n("span", [t._v(t._s(e.done ?
                            e.doneText :
                            e.btn))])]) : t._e()])
                })), 0)])])])
            }), [function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "share-bottom-box"
                }, [e("div", {
                    staticClass: "flex-box flex-aic flex-jcc",
                    attrs: {
                        id: "share-card2"
                    }
                })])
            }], !1, null, "5094cd51", null).exports);

        function bt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Tt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            St = function (t) {
                c()(n, t);
                var e = bt(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).showRuleToast = !1, t.showRecordToast = !1,
                        t.showFinalToast = !1, t.locked = !1, t.imgObj = {
                        titleImg: i(289),
                        rewardImg: i(290),
                        rewardBgImg: i(291),
                        rewardBtnImg: i(292),
                        refreshImg: i(293),
                        infoImg: i(294),
                        ruleIcon: i(295),
                        task_top_icon: i(296),
                        task_bottom_icon: i(297),
                        task_announce_icon: i(298)
                    }, t
                }
                return o()(n, [{
                    key: "refreshStar",
                    value: function () {
                        var t = this;
                        this.locked || (this.locked = !0, Promise.all([this.GET_USER_DAILY(), this.GET_USER_SCORE()])
                            .then((function () {
                                h.c.prototype.$message.info("鏄熸槦鍒锋柊鎴愬姛")
                            })).finally((function () {
                                t.locked = !1
                            })))
                    }
                }, {
                    key: "showRule",
                    value: function () {
                        this.showRuleToast = !0
                    }
                }, {
                    key: "showRecord",
                    value: function () {
                        this.loginInfo.isLogin ? this.showRecordToast = !0 : this.QUICK_LOGIN()
                    }
                }, {
                    key: "toLogin",
                    value: function () {
                        this.QUICK_LOGIN()
                    }
                }, {
                    key: "innerMarginStyle",
                    get: function () {
                        return {
                            "overflow-x": this.screenWidth <= 980 ? "hidden" : "initial"
                        }
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("star", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), n
            }(h.c);
        Tt([y.c], St.prototype, "loginInfo", void 0), Tt([y.c], St.prototype, "totalScore", void 0), Tt([y.c], St.prototype,
            "taskPointList", void 0), Tt([y.c], St.prototype, "dialyTaskList", void 0), Tt([y.c], St.prototype,
            "appointInfo", void 0), Tt([y.c], St.prototype, "starList", void 0), Tt([y.c], St.prototype,
            "starBatch", void 0), Tt([y.c], St.prototype, "totalStarList", void 0), Tt([y.c], St.prototype,
            "showStarWrapper", void 0), Tt([y.c], St.prototype, "screenWidth", void 0), Tt([y.c], St.prototype,
            "inLive", void 0), Tt([y.c], St.prototype, "luckyInfo", void 0), Tt([y.c], St.prototype,
            "defaultImg", void 0), Tt([y.b], St.prototype, "QUICK_LOGIN", void 0), Tt([y.a], St.prototype,
            "GET_USER_SCORE", void 0), Tt([y.a], St.prototype, "GET_USER_DAILY", void 0);
        var It = St = Tt([Object(h.a)({
                components: {
                    CardSwiper: F,
                    RecordToast: nt,
                    RuleToast: ct,
                    StarItem: T,
                    StarTask: wt,
                    prizeList: Y,
                    FinalToast: pt
                }
            })], St),
            Ct = (i(299), Object(b.a)(It, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return 1 === t.inLive || 2 === t.inLive && t.luckyInfo.firstImg ? n("div", {
                    staticClass: "star-container",
                    style: t.innerMarginStyle,
                    attrs: {
                        id: "star"
                    }
                }, [n("img", {
                    staticClass: "task-placeholder-img task-placeholder-img-top",
                    attrs: {
                        src: t.imgObj.task_top_icon
                    }
                }), t._v(" "), n("img", {
                    staticClass: "task-placeholder-img task-placeholder-img-bottom",
                    attrs: {
                        src: t.imgObj.task_bottom_icon
                    }
                }), t._v(" "), n("div", {
                    staticClass: "star-relative"
                }, [0 === t.inLive || 1 === t.inLive ? n("img", {
                    staticClass: "star-title",
                    attrs: {
                        src: t.imgObj.titleImg,
                        alt: "star"
                    }
                }) : t._e(), t._v(" "), 2 === t.inLive ? n("img", {
                    staticClass: "star-title",
                    attrs: {
                        src: t.imgObj.rewardImg,
                        alt: "star"
                    }
                }) : t._e(), t._v(" "), t.showStarWrapper ? n("div", t._l(t.starLocations,
                    (function (e) {
                        return n("star-item", t._b({
                            key: e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()]), t._v(" "), 2 === t.inLive && t.luckyInfo.firstImg ?
                    n("div", {
                        staticClass: "final-reward"
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.luckyInfo.firstImg,
                            expression: "luckyInfo.firstImg"
                        }],
                        staticClass: "final-reward-user no-drag",
                        attrs: {
                            src: t.defaultImg,
                            alt: "涓鍚嶅崟"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "final-reward-btn no-drag",
                        attrs: {
                            src: t.imgObj.rewardBtnImg,
                            alt: ""
                        },
                        on: {
                            click: function (e) {
                                t.showFinalToast = !0
                            }
                        }
                    })]) : t._e(), t._v(" "), 0 === t.inLive || 1 === t.inLive ? n("div", {
                    staticClass: "inner star-header flex-box flex-aic flex-jcsb"
                }, [n("div", {
                    staticClass: "flex-box flex-aic"
                }, [n("img", {
                    staticClass: "star-icon flex-fs0",
                    attrs: {
                        src: i(30),
                        alt: "star"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "star-text"
                }, [t._v("鎴戠殑娴佹槦")]), t._v(" "), t.loginInfo.isLogin ? n(
                    "div", {
                        staticClass: "star-total"
                    }, [t._v(t._s(t.totalScore))]) : t._e(), t._v(" "), t.loginInfo
                    .isLogin ? n("div", {
                    staticClass: "refresh-btn-box flex-box flex-aic flex-jcc"
                }, [n("img", {
                    staticClass: "refresh-btn-icon",
                    attrs: {
                        src: t.imgObj.refreshImg,
                        alt: "refresh"
                    },
                    on: {
                        click: t.refreshStar
                    }
                })]) : t._e(), t._v(" "), t.loginInfo.isLogin ? t._e() : n(
                    "div", {
                        staticClass: "to-login-btn",
                        on: {
                            click: t.toLogin
                        }
                    }, [t._v("\n        鐧诲綍鏌ョ湅\n      ")]), t._v(" "), t.loginInfo
                    .isLogin && 0 === t.inLive ? n("a", {
                    staticClass: "star-more-btn",
                    attrs: {
                        href: "#star-task"
                    }
                }, [t._v("濡備綍鑾峰彇鏇村")]) : t._e()]), t._v(" "), n("div", {
                    staticClass: "star-header-right flex-box flex-aic"
                }, [n("div", {
                    staticClass: "star-records flex-box flex-aic flex-jcc",
                    on: {
                        click: t.showRecord
                    }
                }, [n("img", {
                    staticClass: "star-info-icon",
                    attrs: {
                        src: t.imgObj.infoImg,
                        alt: "record"
                    }
                }), t._v(" "), n("div", [t._v("娴佹槦鑾峰彇璁板綍")])]), t._v(" "),
                    n("div", {
                        staticClass: "star-rules flex-box flex-aic flex-jcc",
                        on: {
                            click: t.showRule
                        }
                    }, [n("img", {
                        staticClass: "star-info-icon",
                        attrs: {
                            src: t.imgObj.ruleIcon,
                            alt: "rules"
                        }
                    }), t._v(" "), n("div", [t._v("娲诲姩瑙勫垯")])])])]) : t._e(), t._v(" "), 0 ===
                t.inLive || 1 === t.inLive ? n("img", {
                    staticClass: "task-announce",
                    attrs: {
                        src: t.imgObj.task_announce_icon,
                        alt: "鍏憡"
                    }
                }) : t._e(), t._v(" "), 0 === t.inLive || 1 === t.inLive ? n("prize-list") :
                    t._e(), t._v(" "), n("star-task", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.inLive,
                        expression: "inLive === 0"
                    }]
                }), t._v(" "), n("record-toast", {
                    model: {
                        value: t.showRecordToast,
                        callback: function (e) {
                            t.showRecordToast = e
                        },
                        expression: "showRecordToast"
                    }
                }), t._v(" "), n("rule-toast", {
                    model: {
                        value: t.showRuleToast,
                        callback: function (e) {
                            t.showRuleToast = e
                        },
                        expression: "showRuleToast"
                    }
                }), t._v(" "), n("final-toast", {
                    model: {
                        value: t.showFinalToast,
                        callback: function (e) {
                            t.showFinalToast = e
                        },
                        expression: "showFinalToast"
                    }
                })], 1) : t._e()
            }), [], !1, null, "e32ac818", null).exports),
            kt = i(11),
            xt = i.n(kt),
            Mt = i(13);

        function At(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Ut = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ot = function (t) {
                c()(i, t);
                var e = At(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).trimHttp = Mt.d, t.swiperOption = {
                        autoplay: {
                            delay: 3e3
                        },
                        allowTouchMove: !1,
                        preventClicks: !1,
                        pagination: {
                            el: ".adv-swiper-pagination",
                            clickable: !1
                        }
                    }, t
                }
                return o()(i, [{
                    key: "handleLoggerClick",
                    value: function (t, e) {
                        var i = 1 === t.data.index ? "first_advert_banner_click" : 1 === t.data.index ?
                            "second_advert_banner_click" : "third_advert_banner_click";
                        Object(I.a)(i, {
                            ord_id: e + 1
                        })
                    }
                }]), i
            }(h.c);
        Ut([Object(h.b)({
            type: Array,
            required: !0
        })], Ot.prototype, "list", void 0), Ut([y.c], Ot.prototype, "defaultImg", void 0);
        var jt = Ot = Ut([h.a], Ot),
            Rt = (i(302), Object(b.a)(jt, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "adv-list"
                }, [i("swiper", {
                    ref: "videoSwiper",
                    staticClass: "swiper",
                    attrs: {
                        options: t.swiperOption
                    }
                }, [t._l(t.list, (function (e, n) {
                    return i("swiper-slide", {
                        key: e.id,
                        staticClass: "adv-slide"
                    }, [i("div", {
                        staticClass: "adv-tag"
                    }, [t._v("骞垮憡")]), t._v(" "), i("a", {
                        staticClass: "adv-alink",
                        attrs: {
                            href: e.data.link,
                            target: "_blank"
                        },
                        on: {
                            click: function (i) {
                                return t.handleLoggerClick(
                                    e, n)
                            }
                        }
                    }, [i("img", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: 1 ===
                                e.data.index ?
                                    "first_advert_banner_show" :
                                    2 ===
                                    e.data.index ?
                                        "second_advert_banner_show" :
                                        "third_advert_banner_show",
                                data: {
                                    ord_id: n +
                                        1
                                }
                            },
                            expression: "{\n            name:\n              item.data.index === 1\n                ? 'first_advert_banner_show'\n                : item.data.index === 2\n                ? 'second_advert_banner_show'\n                : 'third_advert_banner_show',\n            data: { ord_id: index + 1 },\n          }"
                        }, {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.trimHttp(
                                e.data.image
                            ),
                            expression: "trimHttp(item.data.image)"
                        }],
                        staticClass: "adv-image no-drag",
                        attrs: {
                            src: t.defaultImg
                        }
                    })])])
                })), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.list.length > 1,
                        expression: "list.length > 1"
                    }],
                    staticClass: "adv-swiper-pagination",
                    attrs: {
                        slot: "pagination"
                    },
                    slot: "pagination"
                })], 2)], 1)
            }), [], !1, null, "40d43a70", null).exports);

        function Lt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Et = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Dt = function (t) {
                c()(n, t);
                var e = Lt(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).trimHttp = Mt.d, t.imgObj = {
                        starTitleImg: i(303),
                        makerTitleImg: i(304),
                        upTitleImg: i(305)
                    }, t
                }
                return o()(n, [{
                    key: "handleStatusClick",
                    value: function (t) {
                        "up" === t.data.userType ? Object(I.a)("up_people_follow_btn_click", {
                            mid: t.data.mid || 0
                        }) : "user" === t.data.userType ? Object(I.a)(
                            "performance_guests_follow_btn_click", {
                                mid: t.data.mid || 0
                            }) : "create" === t.data.userType && Object(I.a)(
                            "create_team_follow_btn_click", {
                                mid: t.data.mid || 0
                            }), t.isWatch || (this.loginInfo.isLogin ? this.WATCH_GUEST_ACT({
                            mid: t.data.mid
                        }) : Object(Mt.c)())
                    }
                }, {
                    key: "starLocations1",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("guest-star", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }, {
                    key: "starLocations2",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("guest-up", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }, {
                    key: "starLocations3",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("guest-maker", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), n
            }(h.c);
        Et([y.c], Dt.prototype, "starList", void 0), Et([y.c], Dt.prototype, "starBatch", void 0), Et([y.c], Dt.prototype,
            "totalStarList", void 0), Et([y.c], Dt.prototype, "showStarWrapper", void 0), Et([y.c], Dt.prototype,
            "guestUpList", void 0), Et([y.c], Dt.prototype, "guestStarList", void 0), Et([y.c], Dt.prototype,
            "makerList", void 0), Et([y.c], Dt.prototype, "loginInfo", void 0), Et([y.c], Dt.prototype,
            "defaultImg", void 0), Et([y.a], Dt.prototype, "WATCH_GUEST_ACT", void 0);
        var Jt = Dt = Et([Object(h.a)({
                components: {
                    CardFire: Q,
                    StarItem: T
                }
            })], Dt),
            Nt = (i(306), Object(b.a)(Jt, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "guest"
                    }
                }, [t.makerList && t.makerList.length ? i("div", {
                    attrs: {
                        id: "guest-maker"
                    }
                }, [i("img", {
                    staticClass: "guest-title",
                    attrs: {
                        src: t.imgObj.makerTitleImg,
                        alt: "鍒朵綔浜�"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "guest-maker flex-box flex-aic flex-jcc flex-fww"
                }, t._l(t.makerList, (function (e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "guest-item flex-fs0"
                    }, [i("img", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "create_team_show",
                                data: {
                                    mid: e.data &&
                                        e.data.mid ||
                                        0
                                }
                            },
                            expression: "{\n            name: 'create_team_show',\n            data: { mid: item.data ? item.data.mid || 0 : 0 },\n          }"
                        }, {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.trimHttp(e
                                .data.avatar
                            ),
                            expression: "trimHttp(item.data.avatar)"
                        }],
                        staticClass: "guest-avatar",
                        attrs: {
                            src: t.defaultImg,
                            alt: "avatar"
                        }
                    }), t._v(" "), Number(e.data.mid) > 0 ?
                        i("div", {
                            directives: [{
                                name: "exposure",
                                rawName: "v-exposure",
                                value: {
                                    name: "create_team_follow_btn_show",
                                    data: {
                                        mid: e.data &&
                                            e.data.mid ||
                                            0
                                    }
                                },
                                expression: "{\n            name: 'create_team_follow_btn_show',\n            data: { mid: item.data ? item.data.mid || 0 : 0 },\n          }"
                            }],
                            class: "guest-status " + (e.isWatch ?
                                "watched" : ""),
                            on: {
                                click: function (i) {
                                    return t.handleStatusClick(
                                        e)
                                }
                            }
                        }, [e.isWatch ? i("span", [t._v(
                            "宸插叧娉�")]) : i("span", [t._v(
                            "+鍏虫敞")])]) : t._e(), t._v(" "), i(
                        "div", {
                            staticClass: "guest-name-box "
                        }, [i("div", {
                            staticClass: "guest-name label-line-2",
                            domProps: {
                                innerHTML: t._s(e.data
                                    .name || ""
                                )
                            }
                        })])])
                })), 0), t._v(" "), t.showStarWrapper ? i("div", t._l(t.starLocations3,
                    (function (e) {
                        return i("star-item", t._b({
                            key: t.starBatch + "-" + e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()]) : t._e(), t._v(" "), t.guestStarList && t.guestStarList
                    .length ? i("div", {
                    attrs: {
                        id: "guest-star"
                    }
                }, [i("img", {
                    staticClass: "guest-title",
                    attrs: {
                        src: t.imgObj.starTitleImg,
                        alt: "up"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "guest-up-desc"
                }, [t._v("鎸夐瀛楁瘝鎺掑簭")]), t._v(" "), i("div", {
                    staticClass: "guest-list-up flex-box flex-aic flex-jcc flex-fww"
                }, t._l(t.guestStarList, (function (e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "guest-item"
                    }, [i("img", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "performance_guests_show",
                                data: {
                                    mid: e.data &&
                                        e.data.mid ||
                                        0
                                }
                            },
                            expression: "{\n            name: 'performance_guests_show',\n            data: { mid: item.data ? item.data.mid || 0 : 0 },\n          }"
                        }, {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.trimHttp(e
                                .data.avatar
                            ),
                            expression: "trimHttp(item.data.avatar)"
                        }],
                        staticClass: "guest-avatar",
                        attrs: {
                            src: t.defaultImg,
                            alt: "avatar"
                        }
                    }), t._v(" "), Number(e.data.mid) > 0 ?
                        i("div", {
                            directives: [{
                                name: "exposure",
                                rawName: "v-exposure",
                                value: {
                                    name: "performance_guests_follow_btn_show",
                                    data: {
                                        mid: e.data &&
                                            e.data.mid ||
                                            0
                                    }
                                },
                                expression: "{\n            name: 'performance_guests_follow_btn_show',\n            data: { mid: item.data ? item.data.mid || 0 : 0 },\n          }"
                            }],
                            class: "guest-status " + (e.isWatch ?
                                "watched" : ""),
                            on: {
                                click: function (i) {
                                    return t.handleStatusClick(
                                        e)
                                }
                            }
                        }, [e.isWatch ? i("span", [t._v(
                            "宸插叧娉�")]) : i("span", [t._v(
                            "+鍏虫敞")])]) : t._e(), t._v(" "), i(
                        "div", {
                            staticClass: "guest-name-box "
                        }, [i("div", {
                            staticClass: "guest-name label-line-2",
                            domProps: {
                                innerHTML: t._s(e.data
                                    .name || ""
                                )
                            }
                        })])])
                })), 0), t._v(" "), t.showStarWrapper ? i("div", t._l(t.starLocations1,
                    (function (e) {
                        return i("star-item", t._b({
                            key: t.starBatch + "-" + e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()]) : t._e(), t._v(" "), t.guestUpList && t.guestUpList.length ?
                    i("div", {
                        attrs: {
                            id: "guest-up"
                        }
                    }, [i("img", {
                        staticClass: "guest-title",
                        attrs: {
                            src: t.imgObj.upTitleImg,
                            alt: "up"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "guest-up-desc"
                    }, [t._v("鎸夐瀛楁瘝鎺掑簭")]), t._v(" "), i("div", {
                        staticClass: "guest-list-up flex-box flex-aic flex-jcc flex-fww"
                    }, t._l(t.guestUpList, (function (e) {
                        return i("div", {
                            key: e.id,
                            staticClass: "guest-item"
                        }, [i("img", {
                            directives: [{
                                name: "exposure",
                                rawName: "v-exposure",
                                value: {
                                    name: "up_people_show",
                                    data: {
                                        mid: e.data &&
                                            e.data.mid ||
                                            0
                                    }
                                },
                                expression: "{\n            name: 'up_people_show',\n            data: { mid: item.data ? item.data.mid || 0 : 0 },\n          }"
                            }, {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: t.trimHttp(e
                                    .data.avatar
                                ),
                                expression: "trimHttp(item.data.avatar)"
                            }],
                            staticClass: "guest-avatar",
                            attrs: {
                                src: t.defaultImg,
                                alt: "avatar"
                            }
                        }), t._v(" "), Number(e.data.mid) > 0 ?
                            i("div", {
                                directives: [{
                                    name: "exposure",
                                    rawName: "v-exposure",
                                    value: {
                                        name: "up_people_follow_btn_show",
                                        data: {
                                            mid: e.data &&
                                                e.data.mid ||
                                                0
                                        }
                                    },
                                    expression: "{\n            name: 'up_people_follow_btn_show',\n            data: { mid: item.data ? item.data.mid || 0 : 0 },\n          }"
                                }],
                                class: "guest-status " + (e.isWatch ?
                                    "watched" : ""),
                                on: {
                                    click: function (i) {
                                        return t.handleStatusClick(
                                            e)
                                    }
                                }
                            }, [e.isWatch ? i("span", [t._v(
                                "宸插叧娉�")]) : i("span", [t._v(
                                "+鍏虫敞")])]) : t._e(), t._v(" "), i(
                            "div", {
                                staticClass: "guest-name-box "
                            }, [i("div", {
                                staticClass: "guest-name label-line-2",
                                domProps: {
                                    innerHTML: t._s(e.data
                                        .name || ""
                                    )
                                }
                            })])])
                    })), 0), t._v(" "), t.showStarWrapper ? i("div", t._l(t.starLocations2,
                        (function (e) {
                            return i("star-item", t._b({
                                key: t.starBatch + "-" + e.flag
                            }, "star-item", e, !1))
                        })), 1) : t._e()]) : t._e()])
            }), [], !1, null, "3e408a78", null).exports);

        function Pt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Vt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Qt = function (t) {
                c()(n, t);
                var e = Pt(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).imgObj = {
                        titleImg: i(307)
                    }, t.trimHttp = Mt.d, t
                }
                return o()(n, [{
                    key: "handleExposureClick",
                    value: function (t, e) {
                        Object(I.a)("sole_backstage_doc_click", {
                            title: t.data.title || "",
                            season_id: t.data.ssid || t.data.season_id || "",
                            bvid: t.data.bvid || "",
                            epid: t.data.epid || "",
                            ord_id: e + 1
                        })
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("dfilm", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), n
            }(h.c);
        Vt([y.c], Qt.prototype, "onlyBpList", void 0), Vt([y.c], Qt.prototype, "starList", void 0), Vt([y.c], Qt.prototype,
            "starBatch", void 0), Vt([y.c], Qt.prototype, "defaultImg", void 0), Vt([y.c], Qt.prototype,
            "totalStarList", void 0), Vt([y.c], Qt.prototype, "showStarWrapper", void 0);
        var Bt = Qt = Vt([Object(h.a)({
                components: {
                    StarItem: T
                }
            })], Qt),
            Gt = (i(308), Object(b.a)(Bt, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.onlyBpList && t.onlyBpList.length >= 4 ? i("div", {
                    attrs: {
                        id: "dfilm"
                    }
                }, [i("img", {
                    staticClass: "dfilm-title-img",
                    attrs: {
                        src: t.imgObj.titleImg,
                        alt: "thanks"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "dfilm-box clearfix"
                }, t._l(t.onlyBpList.slice(0, 4), (function (e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "dfilm-item"
                    }, [i("a", {
                        attrs: {
                            href: e.data.link,
                            target: "_blank"
                        },
                        on: {
                            click: function (i) {
                                return t.handleExposureClick(
                                    e, n)
                            }
                        }
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.trimHttp(e
                                .data.img),
                            expression: "trimHttp(item.data.img)"
                        }],
                        staticClass: "dfilm-img",
                        attrs: {
                            src: t.defaultImg
                        }
                    }), t._v(" "), i("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "sole_backstage_doc_show",
                                data: {
                                    title: e.data
                                            .title ||
                                        "",
                                    season_id: e
                                            .data.ssid ||
                                        e.data.season_id ||
                                        "",
                                    bvid: e.data
                                            .bvid ||
                                        "",
                                    epid: e.data
                                            .epid ||
                                        "",
                                    ord_id: n +
                                        1
                                }
                            },
                            expression: "{\n            name: 'sole_backstage_doc_show',\n            data: {\n              title: item.data.title || '',\n              season_id: item.data.ssid || item.data.season_id || '',\n              bvid: item.data.bvid || '',\n              epid: item.data.epid || '',\n              ord_id: index + 1,\n            },\n          }"
                        }],
                        staticClass: "dfilm-title label-line-2"
                    }, [t._v("\n          " + t._s(e.data
                            .title || "") +
                        "\n        ")])])])
                })), 0), t._v(" "), t.showStarWrapper ? i("div", t._l(t.starLocations, (
                    function (e) {
                        return i("star-item", t._b({
                            key: e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()]) : t._e()
            }), [], !1, null, "20a017ae", null).exports),
            Wt = i(130);

        function zt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Ft = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ht = function (t) {
                c()(i, t);
                var e = zt(i);

                function i() {
                    return a()(this, i), e.apply(this, arguments)
                }
                return o()(i, [{
                    key: "mounted",
                    value: function () {
                        var t = this.$refs.liteRoomMountPoint;
                        Object(Wt.a)({
                            parentEle: t,
                            roomId: Number(this.liveInfo.pcSrc),
                            eventListener: {
                                pageFullscreenStateChange: function () {},
                                loginStatusUpdate: function () {}
                            }
                        })
                    }
                }]), i
            }(h.c);
        Ft([y.c], Ht.prototype, "liveInfo", void 0);
        var Xt = Ht = Ft([h.a], Ht),
            Kt = (i(309), Object(b.a)(Xt, (function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "live_room_show",
                            data: {
                                room_id: this.liveInfo.pcSrc
                            }
                        },
                        expression: "{\n    name: 'live_room_show',\n    data: {\n      room_id: this.liveInfo.pcSrc,\n    },\n  }"
                    }],
                    ref: "liteRoomMountPoint",
                    attrs: {
                        id: "live-room"
                    }
                })
            }), [], !1, null, "a1ada6e4", null).exports);

        function qt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Yt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            $t = function (t) {
                c()(i, t);
                var e = qt(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).showMenuToast = !1, t
                }
                return o()(i, [{
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("live-reward", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), i
            }(h.c);
        Yt([y.c], $t.prototype, "starBatch", void 0), Yt([y.c], $t.prototype, "showStarWrapper", void 0), Yt([y.c],
            $t.prototype, "totalStarList", void 0), Yt([y.c], $t.prototype, "starList", void 0), Yt([y.c], $t.prototype,
            "ruleInfo", void 0), Yt([y.c], $t.prototype, "defaultImg", void 0);
        var Zt = $t = Yt([Object(h.a)({
                components: {
                    RuleToast: ct,
                    StarItem: T
                }
            })], $t),
            te = (i(312), Object(b.a)(Zt, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.ruleInfo.menuRule ? n("div", {
                    attrs: {
                        id: "live-reward"
                    }
                }, [n("img", {
                    staticClass: "live-reward-title",
                    attrs: {
                        src: i(310),
                        alt: ""
                    }
                }), t._v(" "), n("div", {
                    staticClass: "live-reward-content"
                }, [n("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: i(311),
                        expression: "require('../assets/images/live_reward_pic1.png')"
                    }],
                    staticClass: "live-reward-img",
                    attrs: {
                        src: t.defaultImg
                    }
                }), t._v(" "), n("div", {
                    staticClass: "live-reward-btn",
                    on: {
                        click: function (e) {
                            t.showMenuToast = !0
                        }
                    }
                }, [t._v("\n      璺ㄥ勾澶滄娊濂栨敾鐣n    ")])]), t._v(" "), n("rule-toast", {
                    attrs: {
                        type: "menu"
                    },
                    model: {
                        value: t.showMenuToast,
                        callback: function (e) {
                            t.showMenuToast = e
                        },
                        expression: "showMenuToast"
                    }
                }), t._v(" "), t.showStarWrapper ? n("div", t._l(t.starLocations, (function (
                    e) {
                    return n("star-item", t._b({
                        key: t.starBatch + "-" + e.flag
                    }, "star-item", e, !1))
                })), 1) : t._e()], 1) : t._e()
            }), [], !1, null, "0f1018d7", null).exports);

        function ee(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var ie = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            ne = function (t) {
                c()(i, t);
                var e = ee(i);

                function i() {
                    return a()(this, i), e.apply(this, arguments)
                }
                return o()(i, [{
                    key: "showMenuToast",
                    value: function () {
                        Object(I.a)("program_click", {
                            position_id: 1
                        }), this.GET_MENU_LIST(), this.commonSetM({
                            key: "showMenuToast",
                            value: !0
                        })
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("menu-comp", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), i
            }(h.c);
        ie([y.b], ne.prototype, "commonSetM", void 0), ie([y.a], ne.prototype, "GET_MENU_LIST", void 0), ie([y.c],
            ne.prototype, "starBatch", void 0), ie([y.c], ne.prototype, "showStarWrapper", void 0), ie([y.c],
            ne.prototype, "totalStarList", void 0), ie([y.c], ne.prototype, "starList", void 0);
        var ae = ne = ie([Object(h.a)({
                components: {
                    StarItem: T
                }
            })], ne),
            re = (i(313), Object(b.a)(ae, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "program_show",
                            data: {
                                position_id: 1
                            }
                        },
                        expression: "{ name: 'program_show', data: { position_id: 1 } }"
                    }],
                    staticClass: "menu-list-title",
                    attrs: {
                        id: "menu-comp"
                    }
                }, [i("div", {
                    staticClass: "menu-list-img",
                    on: {
                        click: t.showMenuToast
                    }
                }), t._v(" "), t.showStarWrapper ? i("div", t._l(t.starLocations, (function (
                    e) {
                    return i("star-item", t._b({
                        key: t.starBatch + "-" + e.flag
                    }, "star-item", e, !1))
                })), 1) : t._e()])
            }), [], !1, null, "2b976eb9", null).exports),
            oe = i(15);

        function se(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var ce = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            le = oe.b ? 54929 : 39056,
            ue = oe.b ? 54930 : 39057,
            de = oe.b ? 54931 : 39058,
            fe = oe.b ? 35874 : 29067,
            pe = function (t) {
                c()(n, t);
                var e = se(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).trimHttp = Mt.d, t.swiperOption = {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0
                        },
                        allowTouchMove: !1,
                        preventClicks: !1,
                        navigation: {
                            prevEl: ".swiper-button-bl-prev",
                            nextEl: ".swiper-button-bl-next"
                        }
                    }, t
                }
                return o()(n, [{
                    key: "handleSectionClick",
                    value: function (t, e, i, n) {
                        var a = 0 === n ? "section_rl_video_click" : 1 === n ?
                            "section_ys_video_click" : "section_xf_video_click";
                        Object(I.a)(a, {
                            season_id: i.season_id || "",
                            ord_id: e + 1,
                            title: t.long_title || "",
                            epid: t.id || "",
                            bvid: t.bvid || ""
                        })
                    }
                }, {
                    key: "chapterList",
                    get: function () {
                        return [{
                            img: i(314),
                            list: this.sectionList.find((function (t) {
                                return t.id === le
                            })) && this.sectionList.find((function (t) {
                                return t.id === le
                            })).episodes || [],
                            season_id: fe
                        }, {
                            img: i(315),
                            list: this.sectionList.find((function (t) {
                                return t.id === ue
                            })) && this.sectionList.find((function (t) {
                                return t.id === ue
                            })).episodes || [],
                            season_id: fe
                        }, {
                            img: i(316),
                            list: this.sectionList.find((function (t) {
                                return t.id === de
                            })) && this.sectionList.find((function (t) {
                                return t.id === de
                            })).episodes || [],
                            season_id: fe
                        }].filter((function (t) {
                            return t.list.length
                        }))
                    }
                }]), n
            }(h.c);
        ce([y.c], pe.prototype, "defaultImg", void 0), ce([y.c], pe.prototype, "sectionList", void 0);
        var ve = pe = ce([h.a], pe),
            he = (i(317), Object(b.a)(ve, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "chapter"
                    }
                }, t._l(t.chapterList, (function (e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "chapter-section"
                    }, [i("img", {
                        staticClass: "chapter-title no-drag",
                        attrs: {
                            src: e.img,
                            alt: ""
                        }
                    }), t._v(" "), i("swiper", {
                        staticClass: "chapter-swiper",
                        attrs: {
                            options: t.swiperOption
                        }
                    }, [t._l(e.list, (function (a, r) {
                        return i("swiper-slide", {
                            key: r
                        }, [i("a", {
                            staticClass: "chapter-alink",
                            attrs: {
                                href: a.link,
                                target: "_blank"
                            },
                            on: {
                                click: function (
                                    i) {
                                    return t
                                        .handleSectionClick(
                                            a,
                                            r,
                                            e,
                                            n
                                        )
                                }
                            }
                        }, [i("img", {
                            directives: [{
                                name: "exposure",
                                rawName: "v-exposure",
                                value: {
                                    name: 0 ===
                                    n ?
                                        "section_rl_video_show" :
                                        1 ===
                                        n ?
                                            "section_ys_video_show" :
                                            "section_xf_video_show",
                                    data: {
                                        season_id: e
                                                .season_id ||
                                            "",
                                        ord_id: r +
                                            1,
                                        title: a
                                                .long_title ||
                                            "",
                                        epid: a
                                                .id ||
                                            "",
                                        bvid: a
                                                .bvid ||
                                            ""
                                    }
                                },
                                expression: "{\n              name:\n                index === 0\n                  ? 'section_rl_video_show'\n                  : index === 1\n                  ? 'section_ys_video_show'\n                  : 'section_xf_video_show',\n              data: {\n                season_id: item.season_id || '',\n                ord_id: index1 + 1,\n                title: item1.long_title || '',\n                epid: item1.id || '',\n                bvid: item1.bvid || '',\n              },\n            }"
                            },
                                {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t
                                        .trimHttp(
                                            a
                                                .cover ||
                                            ""
                                        ),
                                    expression: "trimHttp(item1.cover || '')"
                                }
                            ],
                            staticClass: "chapter-cover no-drag",
                            attrs: {
                                src: t
                                    .defaultImg
                            }
                        }), t._v(" "),
                            i("div", {
                                staticClass: "chapter-desc label-line-2"
                            }, [t._v(
                                "\n            " +
                                t._s(
                                    a
                                        .title ||
                                    ""
                                ) +
                                " " +
                                t._s(
                                    a
                                        .long_title ||
                                    ""
                                ) +
                                "\n          "
                            )])])])
                    })), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.list.length > 4,
                            expression: "item.list.length > 4"
                        }],
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    }), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.list.length > 4,
                            expression: "item.list.length > 4"
                        }],
                        staticClass: "swiper-button-bl swiper-button-bl-prev",
                        attrs: {
                            slot: "button-prev"
                        },
                        slot: "button-prev"
                    }), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.list.length > 4,
                            expression: "item.list.length > 4"
                        }],
                        staticClass: "swiper-button-bl swiper-button-bl-next",
                        attrs: {
                            slot: "button-prev"
                        },
                        slot: "button-prev"
                    })], 2)], 1)
                })), 0)
            }), [], !1, null, "0af15385", null).exports);

        function ye(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function me(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ye(Object(i), !0).forEach((function (e) {
                    xt()(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(
                    i)) : ye(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function ge(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var _e = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            we = function (t) {
                c()(i, t);
                var e = ge(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).trimHttp = Mt.d, t.swiperIns = null, t.swiperOption = {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0
                        },
                        allowTouchMove: !1,
                        navigation: {
                            prevEl: ".swiper-button-bl-prev",
                            nextEl: ".swiper-button-bl-next"
                        }
                    }, t
                }
                return o()(i, [{
                    key: "handleVideoChange",
                    value: function () {
                        this.finalVideoList && this.finalVideoList.length > 0 && this.handleVideoClick(
                            this.finalVideoList[0], 0)
                    }
                }, {
                    key: "mounted",
                    value: function () {}
                }, {
                    key: "handleVideoClick",
                    value: function (t, e) {
                        var i = t.data || {},
                            n = i.cid,
                            a = void 0 === n ? "" : n,
                            r = i.bvid,
                            o = void 0 === r ? "" : r,
                            s = i.seasonType,
                            c = i.ssid,
                            l = void 0 === c ? "" : c,
                            u = i.epid,
                            d = void 0 === u ? "" : u,
                            f = i.title,
                            p = void 0 === f ? "" : f;
                        Object(I.a)("player_click", {
                            ord_id: e + 1,
                            epid: d,
                            season_id: l,
                            bvid: o,
                            title: p,
                            cid: a
                        });
                        var v = this.$refs.topIframe;
                        v && (v.src = d && l ? "//www.bilibili.com/blackboard/newplayer.html?cid=".concat(
                            a, "&bvid=").concat(o,
                            "&as_wide=1&player_type=2&urlparam=module%253Dbangumi&p=1&crossDomain=true&season_type="
                            ).concat(s, "&season_id=").concat(l, "&ep_id=").concat(d,
                            "&noEndPanel=1&autoplay=0") :
                            "//www.bilibili.com/blackboard/newplayer.html?bvid=".concat(o,
                                "&as_wide=1&player_type=2&p=1&crossDomain=true&noEndPanel=1&autoplay=0"
                            ), v.setAttribute("allowfullscreen", "true"))
                    }
                }, {
                    key: "innerMarginStyle",
                    get: function () {
                        return {
                            "overflow-x": this.screenWidth <= 980 ? "hidden" : "initial"
                        }
                    }
                }, {
                    key: "calcDistance",
                    get: function () {
                        return "-64px"
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("preview", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }, {
                    key: "starLocations1",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("casbox", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }, {
                    key: "lowMargin",
                    get: function () {
                        return this.finalVideoList.length > 4
                    }
                }, {
                    key: "trackInfo",
                    get: function () {
                        var t = {
                                ord_id: 1
                            },
                            e = this.finalVideoList && this.finalVideoList.length > 0 ? this.finalVideoList[
                                0].data : {},
                            i = e.ssid,
                            n = void 0 === i ? "" : i,
                            a = e.epid,
                            r = void 0 === a ? 0 : a,
                            o = e.bvid,
                            s = void 0 === o ? "" : o,
                            c = e.cid,
                            l = void 0 === c ? "" : c,
                            u = e.title,
                            d = void 0 === u ? "" : u;
                        return t = me(me({}, t), {}, {
                            season_id: n || "",
                            cid: l,
                            title: d,
                            epid: r,
                            bvid: s
                        })
                    }
                }]), i
            }(h.c);
        _e([y.c], we.prototype, "bannerFst", void 0), _e([y.c], we.prototype, "bannerSec", void 0), _e([y.c], we.prototype,
            "starBatch", void 0), _e([y.c], we.prototype, "totalStarList", void 0), _e([y.c], we.prototype,
            "starList", void 0), _e([y.c], we.prototype, "screenWidth", void 0), _e([y.c], we.prototype,
            "defaultImg", void 0), _e([y.c], we.prototype, "showStarWrapper", void 0), _e([y.c], we.prototype,
            "inLive", void 0), _e([y.c], we.prototype, "liveInfo", void 0), _e([y.c], we.prototype,
            "pcMenuShowImg", void 0), _e([y.c], we.prototype, "finalVideoList", void 0), _e([y.b], we.prototype,
            "commonSetM", void 0), _e([Object(h.d)("finalVideoList")], we.prototype, "handleVideoChange", null);
        var be = we = _e([Object(h.a)({
                components: {
                    Adv: Rt,
                    StarItem: T,
                    GuestList: Nt,
                    DocumentaryFilm: Gt,
                    LiveRoom: Kt,
                    LiveReward: te,
                    MenuComp: re,
                    Chapter: he
                }
            })], we),
            Te = (i(318), Object(b.a)(be, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    style: t.innerMarginStyle,
                    attrs: {
                        id: "preview"
                    }
                }, [0 === t.inLive || 2 === t.inLive ? n("div", {
                    staticClass: "video-container",
                    attrs: {
                        id: "video-container"
                    }
                }, [n("img", {
                    staticClass: "video-bg",
                    attrs: {
                        src: i(300),
                        alt: "video"
                    }
                }), t._v(" "), n("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "player_show",
                            data: t.trackInfo
                        },
                        expression: "{ name: 'player_show', data: trackInfo }"
                    }],
                    staticClass: "video-wrapper"
                }, [n("iframe", {
                    ref: "topIframe",
                    attrs: {
                        src: "",
                        frameborder: "0",
                        allowfullscreen: "true"
                    }
                })])]) : t._e(), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: -1 === t.inLive,
                        expression: "inLive === -1"
                    }],
                    staticClass: "place-holder-container"
                }), t._v(" "), 1 === t.inLive && t.liveInfo.pcSrc ? n("live-room") : t._e(),
                    t._v(" "), 0 === t.inLive || 2 === t.inLive ? n("img", {
                        staticClass: "dolby-img",
                        attrs: {
                            src: i(301),
                            alt: "dolby"
                        }
                    }) : t._e(), t._v(" "), 1 !== t.inLive && -1 !== t.inLive ? n("div", {
                        staticClass: "cas-box",
                        attrs: {
                            id: "casbox"
                        }
                    }, [t.finalVideoList && t.finalVideoList.length > 1 ? n("swiper", {
                        ref: "videoSwiper",
                        staticClass: "swiper",
                        attrs: {
                            options: t.swiperOption
                        }
                    }, [t._l(t.finalVideoList, (function (e, i) {
                        return n("swiper-slide", {
                            key: i,
                            nativeOn: {
                                click: function (n) {
                                    return t.handleVideoClick(
                                        e, i)
                                }
                            }
                        }, [n("img", {
                            directives: [{
                                name: "exposure",
                                rawName: "v-exposure",
                                value: {
                                    name: 0 ===
                                    i ? "" :
                                        "player_show",
                                    data: {
                                        epid: e
                                                .data
                                                .epid ||
                                            "",
                                        season_id: e
                                                .data
                                                .season_id ||
                                            e.data
                                                .ssid ||
                                            "",
                                        bvid: e
                                                .data
                                                .bvid ||
                                            "",
                                        ord_id: i +
                                            1,
                                        title: e
                                                .data
                                                .title ||
                                            ""
                                    }
                                },
                                expression: "{\n            name: index === 0 ? '' : 'player_show',\n            data: {\n              epid: item.data.epid || '',\n              season_id: item.data.season_id || item.data.ssid || '',\n              bvid: item.data.bvid || '',\n              ord_id: index + 1,\n              title: item.data.title || '',\n            },\n          }"
                            }, {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: t.trimHttp(
                                    e.data.image ||
                                    ""),
                                expression: "trimHttp(item.data.image || '')"
                            }],
                            staticClass: "video-cover",
                            attrs: {
                                src: t.defaultImg,
                                alt: "video"
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "video-desc label-line-2"
                        }, [t._v("\n          " + t._s(
                            e.data.title || "") +
                            "\n        ")])])
                    })), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.lowMargin,
                            expression: "lowMargin"
                        }],
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.lowMargin,
                            expression: "lowMargin"
                        }],
                        staticClass: "swiper-button-bl swiper-button-bl-prev",
                        style: {
                            left: t.calcDistance
                        },
                        attrs: {
                            slot: "button-prev"
                        },
                        slot: "button-prev"
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.lowMargin,
                            expression: "lowMargin"
                        }],
                        staticClass: "swiper-button-bl swiper-button-bl-next",
                        style: {
                            right: t.calcDistance
                        },
                        attrs: {
                            slot: "button-prev"
                        },
                        slot: "button-prev"
                    })], 2) : t._e(), t._v(" "), t.showStarWrapper ? n("div", t._l(t.starLocations1,
                        (function (e) {
                            return n("star-item", t._b({
                                key: e.flag
                            }, "star-item", e, !1))
                        })), 1) : t._e()], 1) : t._e(), t._v(" "), !t.pcMenuShowImg || 0 !== t.inLive &&
                    1 !== t.inLive ? t._e() : n("menu-comp"), t._v(" "), t.bannerFst && t.bannerFst
                        .length ? n("adv", {
                        class: t.lowMargin ? "adv-list-box" : "adv-list-box no-margin",
                        attrs: {
                            list: t.bannerFst
                        }
                    }) : t._e(), t._v(" "), 1 === t.inLive ? n("live-reward") : t._e(), t._v(
                        " "), 2 === t.inLive ? n("Chapter") : t._e(), t._v(" "), 0 === t.inLive ||
                    2 === t.inLive ? n("documentary-film") : t._e(), t._v(" "), 0 === t.inLive ?
                        n("guest-list") : t._e(), t._v(" "), t.bannerSec && t.bannerSec.length ? n(
                        "adv", {
                            staticClass: "adv-list-box",
                            attrs: {
                                list: t.bannerSec
                            }
                        }) : t._e(), t._v(" "), 0 === t.inLive ? n("live-reward") : t._e(), t._v(
                        " "), t.showStarWrapper ? n("div", t._l(t.starLocations, (function (e) {
                        return n("star-item", t._b({
                            key: e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()], 1)
            }), [], !1, null, "55fce2b6", null).exports);

        function Se(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Ie = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ce = function (t) {
                c()(i, t);
                var e = Se(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).shareObj = null, t
                }
                return o()(i, [{
                    key: "initShareInfo",
                    value: function () {
                        var t = this;
                        this.shareObj = vt.a.share({
                            title: this.shareInfo.title || "",
                            desc: this.shareInfo.desc || "",
                            link: window.location.href + "".concat(location.href.indexOf(
                                "?") > -1 ? "&ts=".concat((new Date).getTime()) :
                                "?ts=".concat((new Date).getTime())),
                            pics: this.shareInfo.pics || "",
                            show: ["bili", "weibo", "qq", "qzone", "baidu_tieba", "wechat"],
                            biz_type: 3,
                            defaultInput: this.shareInfo.editContent || "",
                            onDynamicShareSucceed: function () {
                                t.handleShareAct()
                            }
                        }, document.querySelector("#share-card1"), (function (e) {
                            "bili" !== e && t.handleShareAct()
                        }))
                    }
                }, {
                    key: "handleShareAct",
                    value: function () {
                        this.loginInfo.isLogin && this.DO_MISSION_ACT({
                            taskType: 3,
                            taskBatch: 0,
                            flag: 0
                        })
                    }
                }]), i
            }(h.c);
        Ie([y.a], Ce.prototype, "DO_MISSION_ACT", void 0), Ie([y.c], Ce.prototype, "loginInfo", void 0), Ie([y.c],
            Ce.prototype, "shareInfo", void 0), Ie([Object(h.d)("shareInfo")], Ce.prototype, "initShareInfo",
            null);
        var ke = Ce = Ie([h.a], Ce),
            xe = (i(321), Object(b.a)(ke, (function () {
                var t = this.$createElement;
                this._self._c;
                return this._m(0)
            }), [function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "share-bottom-box"
                }, [e("div", {
                    staticClass: "flex-box flex-aic flex-jcc",
                    attrs: {
                        id: "share-card1"
                    }
                })])
            }], !1, null, "2d32504c", null).exports);

        function Me(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Ae = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ue = function (t) {
                c()(n, t);
                var e = Me(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).titleImg = i(322), t.trimHttp = Mt.d, t
                }
                return o()(n, [{
                    key: "handleExposureClick",
                    value: function (t, e) {
                        Object(I.a)("choice_second_created_video_click", {
                            season_id: t.data.ssid || t.data.season_id || "",
                            bvid: t.data.bvid || "",
                            epid: t.data.epid || "",
                            ord_id: e + 1,
                            title: t.data.title || ""
                        })
                    }
                }, {
                    key: "handleMoreClickLogger",
                    value: function () {
                        Object(I.a)("choice_second_created_video_more_btn_click", {})
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("recreation", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }, {
                    key: "moreLanding",
                    get: function () {
                        var t = "",
                            e = this.recreationList.find((function (t) {
                                return t.data && t.data.moreLanding
                            }));
                        return e && (t = e.data.moreLanding), t
                    }
                }]), n
            }(h.c);
        Ae([y.c], Ue.prototype, "recreationList", void 0), Ae([y.c], Ue.prototype, "defaultImg", void 0), Ae([y.c],
            Ue.prototype, "starList", void 0), Ae([y.c], Ue.prototype, "starBatch", void 0), Ae([y.c], Ue.prototype,
            "totalStarList", void 0), Ae([y.c], Ue.prototype, "showStarWrapper", void 0);
        var Oe = Ue = Ae([Object(h.a)({
                components: {
                    StarItem: T
                }
            })], Ue),
            je = (i(323), Object(b.a)(Oe, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.recreationList && t.recreationList.length ? i("div", {
                    attrs: {
                        id: "recreation"
                    }
                }, [i("img", {
                    staticClass: "recreation-title-img",
                    attrs: {
                        src: t.titleImg,
                        alt: "thanks"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "recreation-box clearfix"
                }, t._l(t.recreationList.slice(0, 4), (function (e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "recreation-item"
                    }, [i("a", {
                        attrs: {
                            href: e.data.link,
                            target: "_blank"
                        },
                        on: {
                            click: function (i) {
                                return t.handleExposureClick(
                                    e, n)
                            }
                        }
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.trimHttp(e
                                .data.img),
                            expression: "trimHttp(item.data.img)"
                        }],
                        staticClass: "recreation-img",
                        attrs: {
                            src: t.defaultImg
                        }
                    }), t._v(" "), i("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "choice_second_created_video_show",
                                data: {
                                    season_id: e
                                            .data.ssid ||
                                        e.data.season_id ||
                                        "",
                                    bvid: e.data
                                            .bvid ||
                                        "",
                                    epid: e.data
                                            .epid ||
                                        "",
                                    ord_id: n +
                                        1,
                                    title: e.data
                                            .title ||
                                        ""
                                }
                            },
                            expression: "{\n            name: 'choice_second_created_video_show',\n            data: {\n              season_id: item.data.ssid || item.data.season_id || '',\n              bvid: item.data.bvid || '',\n              epid: item.data.epid || '',\n              ord_id: index + 1,\n              title: item.data.title || '',\n            },\n          }"
                        }],
                        staticClass: "recreation-title label-line-2"
                    }, [t._v("\n          " + t._s(e.data
                            .title || "") +
                        "\n        ")])])])
                })), 0), t._v(" "), i("a", {
                    attrs: {
                        href: t.moreLanding,
                        target: "_blank"
                    },
                    on: {
                        click: t.handleMoreClickLogger
                    }
                }, [i("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "choice_second_created_video_more_btn_show"
                        },
                        expression: "{ name: 'choice_second_created_video_more_btn_show' }"
                    }],
                    staticClass: "recreation-more"
                }, [t._v("\n      鐐瑰嚮鏌ョ湅鏇村\n    ")])]), t._v(" "), t.showStarWrapper ? i(
                    "div", t._l(t.starLocations, (function (e) {
                        return i("star-item", t._b({
                            key: e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()]) : t._e()
            }), [], !1, null, "0c132912", null).exports);

        function Re(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Le = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ee = function (t) {
                c()(n, t);
                var e = Re(n);

                function n() {
                    var t;
                    return a()(this, n), (t = e.apply(this, arguments)).titleImg = i(325), t
                }
                return o()(n, [{
                    key: "handleClickLogger",
                    value: function (t, e) {
                        Object(I.a)("2019_zmdy_review_click", {
                            season_id: t.data.ssid || t.data.season_id || "",
                            bvid: t.data.bvid || "",
                            epid: t.data.epid || "",
                            ord_id: e + 1,
                            title: t.data.title || ""
                        })
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("review", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), n
            }(h.c);
        Le([y.c], Ee.prototype, "reviewVideoList", void 0), Le([y.c], Ee.prototype, "defaultImg", void 0), Le([y.c],
            Ee.prototype, "starList", void 0), Le([y.c], Ee.prototype, "starBatch", void 0), Le([y.c], Ee.prototype,
            "totalStarList", void 0), Le([y.c], Ee.prototype, "showStarWrapper", void 0);
        var De = Ee = Le([Object(h.a)({
                components: {
                    StarItem: T
                }
            })], Ee),
            Je = (i(326), Object(b.a)(De, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.reviewVideoList && t.reviewVideoList.length ? n("div", {
                    attrs: {
                        id: "review"
                    }
                }, [n("img", {
                    staticClass: "review-title-img",
                    attrs: {
                        src: t.titleImg,
                        alt: "thanks"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "review-box flex-box flex-aic flex-jcsb"
                }, t._l(t.reviewVideoList, (function (e, a) {
                    return n("div", {
                        key: a,
                        staticClass: "review-item"
                    }, [n("a", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "2019_zmdy_review_show",
                                data: {
                                    season_id: e.data.ssid ||
                                        e.data.season_id ||
                                        "",
                                    bvid: e.data.bvid ||
                                        "",
                                    epid: e.data.epid ||
                                        "",
                                    ord_id: a + 1,
                                    title: e.data.title ||
                                        ""
                                }
                            },
                            expression: "{\n          name: '2019_zmdy_review_show',\n          data: {\n            season_id: item.data.ssid || item.data.season_id || '',\n            bvid: item.data.bvid || '',\n            epid: item.data.epid || '',\n            ord_id: index + 1,\n            title: item.data.title || '',\n          },\n        }"
                        }],
                        staticClass: "review-link flex-box flex-aic flex-jcc",
                        attrs: {
                            href: e.data.link,
                            target: "_blank"
                        },
                        on: {
                            click: function (i) {
                                return t.handleClickLogger(
                                    e, a)
                            }
                        }
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.data.img,
                            expression: "item.data.img"
                        }],
                        staticClass: "review-item-img",
                        attrs: {
                            src: t.defaultImg
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "icon-play",
                        attrs: {
                            src: i(324),
                            alt: "play"
                        }
                    })])])
                })), 0), t._v(" "), t.showStarWrapper ? n("div", t._l(t.starLocations, (
                    function (e) {
                        return n("star-item", t._b({
                            key: e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()]) : t._e()
            }), [], !1, null, "588b5f6a", null).exports);

        function Ne(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Pe = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ve = function (t) {
                c()(i, t);
                var e = Ne(i);

                function i() {
                    var t;
                    return a()(this, i), (t = e.apply(this, arguments)).trimHttp = Mt.d, t
                }
                return o()(i, [{
                    key: "handleItemClick",
                    value: function (t, e) {
                        Object(I.a)("related_video_follow_click", {
                            season_id: t.index_value || "",
                            ord_id: e + 1,
                            title: t.title || ""
                        }), t.followed || this.SET_MOVIE_STATUS({
                            ssid: t.index_value
                        })
                    }
                }, {
                    key: "handleRelativeMovieClick",
                    value: function (t, e) {
                        Object(I.a)("related_video_click", {
                            season_id: t.index_value || "",
                            ord_id: e + 1,
                            title: t.title || ""
                        })
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("relative-movie", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), i
            }(h.c);
        Pe([y.c], Ve.prototype, "movieList", void 0), Pe([y.c], Ve.prototype, "starBatch", void 0), Pe([y.c], Ve.prototype,
            "showStarWrapper", void 0), Pe([y.c], Ve.prototype, "totalStarList", void 0), Pe([y.c], Ve.prototype,
            "starList", void 0), Pe([y.c], Ve.prototype, "bannerThird", void 0), Pe([y.c], Ve.prototype,
            "defaultImg", void 0), Pe([y.a], Ve.prototype, "SET_MOVIE_STATUS", void 0);
        var Qe = Ve = Pe([Object(h.a)({
                components: {
                    StarItem: T,
                    Adv: Rt
                }
            })], Ve),
            Be = (i(328), Object(b.a)(Qe, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.movieList.length ? n("div", {
                    attrs: {
                        id: "relative-movie"
                    }
                }, [n("img", {
                    staticClass: "relative-movie-title",
                    attrs: {
                        src: i(327),
                        alt: "鐩稿叧褰辫"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "relative-movie-list flex-box flex-aic flex-fww"
                }, t._l(t.movieList, (function (e, i) {
                    return n("div", {
                        key: e.id,
                        staticClass: "relative-movie-item"
                    }, [n("a", {
                        attrs: {
                            href: e.link,
                            target: "_blank"
                        },
                        on: {
                            click: function (n) {
                                return t.handleRelativeMovieClick(
                                    e, i)
                            }
                        }
                    }, [n("img", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "related_video_show",
                                data: {
                                    season_id: e
                                            .index_value ||
                                        "",
                                    ord_id: i +
                                        1,
                                    title: e.title ||
                                        ""
                                }
                            },
                            expression: "{\n            name: 'related_video_show',\n            data: {\n              season_id: item.index_value || '',\n              ord_id: index + 1,\n              title: item.title || '',\n            },\n          }"
                        }, {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.trimHttp(e
                                .img || ""),
                            expression: "trimHttp(item.img || '')"
                        }],
                        staticClass: "relative-movie-image no-drag",
                        attrs: {
                            src: t.defaultImg,
                            alt: e.title
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "relative-movie-name label-line-2"
                    }, [t._v(t._s(e.title))])]), t._v(" "), n("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "related_video_follow_show",
                                data: {
                                    season_id: e.index_value ||
                                        "",
                                    ord_id: i + 1,
                                    title: e.title ||
                                        ""
                                }
                            },
                            expression: "{\n          name: 'related_video_follow_show',\n          data: {\n            season_id: item.index_value || '',\n            ord_id: index + 1,\n            title: item.title || '',\n          },\n        }"
                        }],
                        class: "relative-movie-btn " + (e.followed ?
                            "followed" : ""),
                        on: {
                            click: function (n) {
                                return n.stopPropagation(),
                                    t.handleItemClick(e, i)
                            }
                        }
                    }, [e.followed ? n("span", [t._v("宸茶拷")]) :
                        n("span", [t._v("杩藉墽")])])])
                })), 0), t._v(" "), t.bannerThird && t.bannerThird.length ? n("adv", {
                    staticClass: "adv-list-box",
                    attrs: {
                        list: t.bannerThird
                    }
                }) : t._e(), t._v(" "), t.showStarWrapper ? n("div", t._l(t.starLocations,
                    (function (e) {
                        return n("star-item", t._b({
                            key: t.starBatch + "-" + e.flag
                        }, "star-item", e, !1))
                    })), 1) : t._e()], 1) : t._e()
            }), [], !1, null, "f40146a4", null).exports);

        function Ge(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var We = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            ze = function (t) {
                c()(i, t);
                var e = Ge(i);

                function i() {
                    return a()(this, i), e.apply(this, arguments)
                }
                return o()(i, [{
                    key: "handleExposureClick",
                    value: function (t) {
                        Object(I.a)("thanks_click", {
                            url: t.link || ""
                        })
                    }
                }, {
                    key: "innerMarginStyle",
                    get: function () {
                        return {
                            "overflow-x": this.screenWidth <= 980 ? "hidden" : "initial"
                        }
                    }
                }, {
                    key: "starLocations",
                    get: function () {
                        var t = this;
                        if (!this.starBatch) return [];
                        var e = S("dynamic", this.starBatch, this.totalStarList);
                        return e.length && this.starList.length ? e.filter((function (e) {
                            return t.starList.some((function (t) {
                                return t.flag === e.flag && 0 === t.clickStatus
                            }))
                        })) : []
                    }
                }]), i
            }(h.c);
        We([y.c], ze.prototype, "bannerSec", void 0), We([y.c], ze.prototype, "loginInfo", void 0), We([y.c], ze.prototype,
            "pcThanks", void 0), We([y.c], ze.prototype, "screenWidth", void 0), We([y.c], ze.prototype,
            "starList", void 0), We([y.c], ze.prototype, "starBatch", void 0), We([y.c], ze.prototype,
            "totalStarList", void 0), We([y.c], ze.prototype, "showStarWrapper", void 0), We([y.c], ze.prototype,
            "defaultImg", void 0), We([y.c], ze.prototype, "inLive", void 0);
        var Fe = ze = We([Object(h.a)({
                components: {
                    ShareCard: xe,
                    adv: Rt,
                    GuestList: Nt,
                    RecreationBox: je,
                    ReviewBox: Je,
                    DocumentaryFilm: Gt,
                    StarItem: T,
                    RelativeMovie: Be,
                    LiveReward: te
                }
            })], ze),
            He = (i(329), Object(b.a)(Fe, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "inner-margin",
                    style: t.innerMarginStyle,
                    attrs: {
                        id: "misc-info"
                    }
                }, [1 === t.inLive ? n("documentary-film") : t._e(), t._v(" "), n(
                    "relative-movie"), t._v(" "), 2 !== t.inLive ? n("recreation-box") : t._e(),
                    t._v(" "), n("review-box"), t._v(" "), n("div", {
                        staticClass: "divide-line"
                    }), t._v(" "), n("div", {
                        staticClass: "special-thanks "
                    }, [n("img", {
                        staticClass: "special-thanks-img",
                        attrs: {
                            src: i(319),
                            alt: "thanks"
                        }
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "exposure",
                            rawName: "v-exposure",
                            value: {
                                name: "thanks_show"
                            },
                            expression: "{ name: 'thanks_show' }"
                        }],
                        staticClass: "thanks-relative"
                    }, [t.pcThanks.imgUrl ? n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.pcThanks.imgUrl,
                            expression: "pcThanks.imgUrl"
                        }],
                        attrs: {
                            src: t.defaultImg,
                            alt: "thanks"
                        }
                    }) : t._e(), t._v(" "), t._l(t.pcThanks.linkList, (function (
                        e, i) {
                        return n("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.link,
                                expression: "item.link"
                            }],
                            key: i + e.link,
                            style: {
                                left: e.left + "px",
                                top: e.top + "px",
                                width: e.width + "px",
                                height: e.height + "px"
                            },
                            attrs: {
                                target: "_blank",
                                href: e.link
                            },
                            on: {
                                click: function (i) {
                                    return t.handleExposureClick(
                                        e)
                                }
                            }
                        })
                    }))], 2)]), t._v(" "), n("share-card"), t._v(" "), n("div", {
                        attrs: {
                            id: "dynamic"
                        }
                    }, [n("img", {
                        staticClass: "dynamic-title",
                        attrs: {
                            src: i(320),
                            alt: "dynamic"
                        }
                    }), t._v(" "), n("iframe", {
                        attrs: {
                            src: "https://www.bilibili.com/blackboard/activity-feedtag.html?topic=B%E7%AB%99%E8%B7%A8%E5%B9%B4%E6%99%9A%E4%BC%9A&uid=" +
                                (t.loginInfo.mid || ""),
                            frameborder: "no",
                            allowfullscreen: "true",
                            framespacing: "0",
                            border: "0"
                        }
                    }), t._v(" "), t.showStarWrapper ? n("div", t._l(t.starLocations, (
                        function (e) {
                            return n("star-item", t._b({
                                key: e.flag
                            }, "star-item", e, !1))
                        })), 1) : t._e()])], 1)
            }), [], !1, null, "51f5eb10", null).exports),
            Xe = i(14),
            Ke = i(44);

        function qe(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return u()(this, i)
            }
        }
        var Ye = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            $e = function (t) {
                c()(i, t);
                var e = qe(i);

                function i() {
                    return a()(this, i), e.apply(this, arguments)
                }
                return o()(i, [{
                    key: "mounted",
                    value: function () {
                        this.FETCH_LOGIN_INFO(), this.GET_VIDEO_LIST(), this.GET_CONFIG_INFO(),
                            this.GET_MOVIE_LIST(), this.initConfigInfo()
                    }
                }, {
                    key: "initConfigInfo",
                    value: function () {
                        var t = this;
                        Object(Xe.a)({
                            url: "//activity.hdslb.com/blackboard/static/jsonlist/".concat(
                                oe.b ? "152/vDMu12-Sp.json" : "155/XKaF9M9sX.json"),
                            params: {
                                ts: (new Date).getTime()
                            },
                            include: !1
                        }).then((function (e) {
                            var i = e.data || {};
                            t.commonSetM({
                                key: "pcThanks",
                                value: i.pcThanks || {}
                            }), t.commonSetM({
                                key: "prizeList",
                                value: i.adCardPc || {}
                            }), t.commonSetM({
                                key: "ruleInfo",
                                value: i.ruleInfo || {}
                            });
                            var n = i.pcShowerLocations || [];
                            t.commonSetM({
                                key: "lookVideoUrl",
                                value: i.lookVideoUrl || ""
                            }), t.commonSetM({
                                key: "giftIdEnum",
                                value: i.giftIdEnum || {}
                            }), t.commonSetM({
                                key: "liveInfo",
                                value: i.liveInfo || {}
                            }), t.commonSetM({
                                key: "pcMenuShowImg",
                                value: i.pcMenuShowImg || ""
                            }), t.commonSetM({
                                key: "pcMenuShareImg",
                                value: i.pcMenuShareImg || ""
                            }), i.liveInfo && i.liveInfo.endTime ? Object(Mt.b)().then(
                                (function (e) {
                                    e >= i.liveInfo.startDay && t.commonSetM({
                                        key: "todayImage",
                                        value: !0
                                    }), e < i.liveInfo.startTime ? (t.setStep0(
                                        n), new Ke.a({
                                        serverTime: e,
                                        timeList: [{
                                            type: "point",
                                            pointTime: i.liveInfo
                                                .startTime,
                                            trigger: function () {
                                                t.commonSetM({
                                                    key: "inLive",
                                                    value: 1
                                                }),
                                                    t.commonSetM({
                                                        key: "totalStarList",
                                                        value: []
                                                    })
                                            }
                                        }, {
                                            type: "point",
                                            pointTime: i.liveInfo
                                                .startDay,
                                            trigger: function () {
                                                t.commonSetM({
                                                    key: "todayImage",
                                                    value:
                                                        !
                                                            0
                                                })
                                            }
                                        }]
                                    })) : e >= i.liveInfo.startTime && e <
                                    i.liveInfo.endTime ? t.setStep1() : e >=
                                        i.liveInfo.endTime && t.setStep2()
                                })) : t.commonSetM({
                                key: "inLive",
                                value: 0
                            })
                        })).catch((function () {
                            t.commonSetM({
                                key: "inLive",
                                value: 0
                            })
                        }))
                    }
                }, {
                    key: "setStep0",
                    value: function (t) {
                        this.commonSetM({
                            key: "inLive",
                            value: 0
                        });
                        var e = [];
                        t.forEach((function (t) {
                            var i = [];
                            t.forEach((function (t) {
                                "string" == typeof t ? i.push(JSON.parse(t)) :
                                    i.push(t)
                            })), e.push(i)
                        })), this.commonSetM({
                            key: "totalStarList",
                            value: e
                        }), this.GET_GUEST_LIST(), this.REFRESH_SCORE()
                    }
                }, {
                    key: "setStep1",
                    value: function () {
                        this.commonSetM({
                            key: "inLive",
                            value: 1
                        }), this.REFRESH_SCORE()
                    }
                }, {
                    key: "setStep2",
                    value: function () {
                        this.commonSetM({
                            key: "inLive",
                            value: 2
                        }), this.GET_SEASON_INFO(), this.GET_FINAL_VIDEO_LIST(), this.GET_LUCKY_INFO()
                    }
                }, {
                    key: "innerContentStyle",
                    get: function () {
                        return {
                            "overflow-x": this.screenWidth > 1220 ? "hidden" : "scroll"
                        }
                    }
                }]), i
            }(h.c);
        Ye([y.c], $e.prototype, "screenWidth", void 0), Ye([y.c], $e.prototype, "screenHeight", void 0), Ye([y.c],
            $e.prototype, "inLive", void 0), Ye([y.b], $e.prototype, "commonSetM", void 0), Ye([y.a], $e.prototype,
            "FETCH_LOGIN_INFO", void 0), Ye([y.a], $e.prototype, "GET_VIDEO_LIST", void 0), Ye([y.a], $e.prototype,
            "GET_CONFIG_INFO", void 0), Ye([y.a], $e.prototype, "GET_MOVIE_LIST", void 0), Ye([y.a], $e.prototype,
            "GET_GUEST_LIST", void 0), Ye([y.a], $e.prototype, "REFRESH_SCORE", void 0), Ye([y.a], $e.prototype,
            "GET_SEASON_INFO", void 0), Ye([y.a], $e.prototype, "GET_LUCKY_INFO", void 0), Ye([y.a], $e.prototype,
            "GET_FINAL_VIDEO_LIST", void 0);
        var Ze = $e = Ye([Object(h.a)({
                components: {
                    orderPage: A,
                    SideNav: E,
                    StarCollect: Ct,
                    PreviewVideo: Te,
                    MiscInfo: He
                }
            })], $e),
            ti = (i(330), Object(b.a)(Ze, (function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "cross-year-2020"
                }, [e("order-page"), this._v(" "), e("div", {
                    staticClass: "inner-content-box",
                    style: this.innerContentStyle
                }, [e("preview-video"), this._v(" "), e("star-collect"), this._v(" "),
                    e("misc-info")], 1), this._v(" "), e("side-nav")], 1)
            }), [], !1, null, null, null));
        e.default = ti.exports
    },
    function (t, e, i) {
        t.exports = i(348)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACECAMAAADSkIWaAAAAG1BMVEUzQpYzQZc0Q5dLYrg7TaI3SJxAVKlFWrBIXrWrrVrRAAAAAnRSTlPmSXG3YGYAAAHHSURBVHja7d3LbqtAEEXRXOrU4/+/+DatKN0RicwoUuG9B22l8GTJJASwxMe/j+NRDdAQPashelyQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQ3oWksrxMojPJbRTXSWOS7EzbpGyU3T8lqzUI6/4pHVqE9WP2/ouXE6F9tyvvSnJJEWFTkbOysxpTybuRPMpelepEkt0q+5BkN8suJLe9qspVVdlWdCCtg4/k/hvapbQz70GyM78njxYkt1HcpGcfkm4ehqsFSTby9ySFjfqQjieTFOs/H88MX1vakGL7FVHa2b7JKrwtyafgQhql+pFyvn5W2473NfOOpLK1m630qdIAtiPl5rmqvCPpCP1+hqijH+lVrUkR5+qaa/oTSGn+tYY9giSLscyZW81R00PtqizTKq2iTM8geY6Bz7mO3qSV+1pX4uQCEifqb0ZyG8XN92WjS5O6d+spOl1AzpDk7pfNYyYpqtMFZC/7Vu3Zt4KbMX9NWqnsTtHqXm2kvajC+91R9zNd8hlfi4IECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYL0QzyA6e9FD3zw139wyN++nqyAfwAAAABJRU5ErkJggg=="
    },
    function (t, e, i) {
        i(74)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/kv_logo.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/scroll.png"
    },
    function (t, e, i) {
        i(75)
    }, , , , , , , , , , , , , , , , , , ,
    function (t, e, i) {
        t.exports = i.p + "assets/time.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/inlive_time.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/time_review.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/time_today.png"
    },
    function (t, e, i) {
        i(80)
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAiBAMAAACgmpTJAAAAGFBMVEUAAACQmdSLotGNndeMndiNndeNntiNndiQG+lwAAAAB3RSTlMAHgvBlZRukWZImwAAAFpJREFUGNNlyLENgDAQBMETwjklIF0RlOASXAIluH0u+P2EjUarX+NCC42NVlQLragWmujcaJay0CxloVnKQm/LreNBMspEMspEMspEMspEMspEcsREcuu41X0I5Dg1SzAf6wAAAABJRU5ErkJggg=="
    },
    function (t, e, i) {
        i(81)
    },
    function (t, e, i) {
        i(83)
    },
    function (t, e, i) {
        i(84)
    },
    function (t, e, i) {
        i(85)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/empty_holder.png"
    },
    function (t, e, i) {
        i(86)
    },
    function (t, e, i) {
        i(87)
    },
    function (t, e, i) {
        i(88)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/star_task_title.png"
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (t, e, i) {
        t.exports = i.p + "assets/task_preorder.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_video.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_share.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_dynamic.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_collect.png"
    },
    function (t, e, i) {
        i(95)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/star_title.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/reward_menu_list_title.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_reward_bg.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_reward_btn.png"
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAk1BMVEUAAACfv/Sfuu2gv/Sgv/Sgv/SsrP+eu/+gwPSgv/WgvfegwPSgv/Siv/GgwPWhwPSgv/Wgv/Sgv/Ogv/agv/Cgv/Sgv/WhwPSgwPSgv/Shv/WevvOhvvagvfSgwPSgv/Whv/Sgv/Sgv/SgwPWgvvOgv/Sgv/Sfv/Sgv/Shv/OhwPSfwPWgvvWfvvWhv/Sgv/Sgv/RZbOMLAAAAMHRSTlMAWg7v0usECPfCHtvMI/OlknFUNBC2q5yXjGUnGhbl3tfHu3o64qIwhmtoTktKQy3E+K9qAAAByElEQVRIx+WV23KCMBCGYziLIiBURRQVPNVD9/2frs1mrEZJgpnpVb/LnXwDSf7dkL8gjamZ2IPqbCgCjBaGIliFiYgEc0MR/No1EBG7ecfzjnBnSrs5lziwQGB50mvjSQQtfJRqbZ+DBOtT9ZMzH6Ri4km9oQ03nPVA0PxZptidA5xN0cfruLPrEzmNBciIZUUQ8z1RMOTfC5vnAAyu6suz+alTIopVj6iJgTFxxcg5iau7dv49Mav+ISM6AuatqCBO+kRLA4yxkKFOjfiBGyRvQzFpQ8MxkZP3mTKxZyDi5ZuMQta6WwNvgS1hIA6xKQzEL2w5A7HPc6pjN/hBCH2Gs14rbtnkEUsW6yBtvHCqi7V1l8RdW45wxmpHjYiLErF2ZrW12nOXbNFTr3kWb0cVKbZ6a8pz5Qcxz/VzeQ6MVCEmbEH02ggjnGmlPFzY6oeW8ER4PlTilSG+kpnsVyCg7d5KsZUcGHZbDMZbUAwzakveT7f2+d+4sh6pALHTxxVeEQIyoPLusoGzjE8LXkmn1u3NpKr8j+CXKFyFD+967GoGrANtVBeiI5tFL5pTezoN1cQWtKDwuk+9YhqEjuWEm7hXkv/KN/6JaxKn3RKwAAAAAElFTkSuQmCC"
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAkFBMVEUAAACgv/Sgv/Sbm/+gv/Sgvvegv/SgwPSgv/Sgv/Sgv/ShwPShwPSgv/ShwPWgvvGgv/Wgv/SgwPSgv/Sgv/WfvvWgvvWhwPOev+2jvf+gv/Sgv/WgvvWgwPWhwPSgv/Wgv/Ofv/WctP+gwPOhwPSgwPSgv/SgvfS/v/+gwPSgwPSgwPWgv/Shv/Sgv/Ogv/Qy0tG7AAAAL3RSTlMA5/sC5B3w9slB1Sy9d0kR3aiNblFKOiQNCezCln5pYlYwBrGun1sWBOKzk4fPm7ZyREkAAAHfSURBVEjH7ZXZloIwDIYZFGURlUX2HXF3eP+3m6YFtBSseDUX5hwR0n40Tf5Q4Wv/3jYfcrk8+4ibhXXyEZjVdfAIdv1TU/azHuP8Mxq+do/A0eQYGMOoqE0GpSUeXrXPux45342ARjPBFqaZgt+Kflt/EndSESNrIrrGk8AEFnQEE12X0hStBYiomn/j/ThzyMziiG5TWDl5Z00pM0NSCB3LTiY1K3XFG2U8Rd/P69bUAjsdsXWI6m+qDaj+ehep+raSsSj3YnXog4dnam891K3dIPZuiN2vjgeWoWlLbLaSSiUraqRTqP6IsDbHhKItYJ8KETwt8xmWZznc9W4A3EFgQLBiBY/REHfc4oJ2ndLrD08lBWTMx+W8vSg/riOT8VkJboPZBJMCp+c1cdqK130INQt7cYigJI8jVhuWpIPKoJ+5Qi8AFBhwL/DMhUSznxGZCzowi33XmQvabFw+2TbHrFY8G13eXmw8H2p05IE38mFzI9JLWwuVAQSV88AKTUqVy1PvmhJoeM0DYVJQUyZCqCl9ZrEnltq5z7pTPXo/Jg01fvAsGp+cnaCd4nZqxAF9EpzhdEpK79hVNp04dmK5JB20ci5vSEeBArA6vC7nHDC3hyWysYSvfW3A/gCjn2cNOMtkOgAAAABJRU5ErkJggg=="
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAaVBMVEUAAAChv/Sgv/T///+gv/Sgv/Sgv/Sgv/Sjv/GgwPOhv/Wgv/OevPSgwPSgwPSgv/Sgv/Whv/SgwPSgv/ShwPSgv/SgwPWku/qmsv+hv/Sgv/WfvvSgv/Sgv/SgvvOjv/GgwPSgv/Wgv/RKsfrgAAAAInRSTlMARrsB7feoWhKYOSki+t6FZnfy19GyMQsFhzNR6sxTJJ6USLT4zAAAAcBJREFUSMftVtuWgyAMFLQK3q3X2tuu//+Ra6oWMLH0HM/2qfNWkinDJAacLz6GlmV16SWJV9YZa99lucw/DBoOPnPf4Z2rAaE6W2kxH0jw+DUvOE55qQwa0XWiCWQ6rRyDV6fLpiQ/1BdDf1rN3E3e76QqWgeiSb/cYp4eHuZUKH/4fNo4H8S88GkTG/G0JPQgGpB+gi+XWSZ7muv3s9wLOER5y0Hnsl8xKOTznqCWE3XXcoCYcl5InoJ6MZ8TMs7I0cr4v1hoWxeapmrtLBsXk8jBGPeUS1WSMYmt4lDkH4c+OteTfDPcwslDGzEE/1qkNHVpotrETZFWaFJJ8YQH5iyQ0LJGvMZtoVJjo7lqI16OKw2xnzQ7tBl/lkYGdKLAvOvqBAL6wUiBCnUkr9BXOqg2JhKGer2DiFapPeIhqbQ5hfLFMMdajgI1JioH3QA55z1R1czWchi45XCTY+Amx5+VmlYCJ/nWDzn21tZHg1KKRocCQ2lodKBhhYhqWN0s43GWelU/0XikBzJAsGU/NZDv21dA75Do1RWw/9LZf83ZL9b9VznGfevxcHdsuFHPldu/PZDwk+zEWueLT+EPAMdJuUUwRvUAAAAASUVORK5CYII="
    },
    function (t, e, i) {
        t.exports = i.p + "assets/star_task_top.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/star_task_bottom.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/task_announce.png"
    },
    function (t, e, i) {
        i(96)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/video_bg.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/dolby.png"
    },
    function (t, e, i) {
        i(97)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/bilibili_star_title1.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/bilibili_maker_title.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/bilibili_up_title.png"
    },
    function (t, e, i) {
        i(98)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/dfilm_title.png"
    },
    function (t, e, i) {
        i(99)
    },
    function (t, e, i) {
        i(100)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/live_title1.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/live_reward_pic1.png"
    },
    function (t, e, i) {
        i(101)
    },
    function (t, e, i) {
        i(102)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/sunset_title.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/moon_rise_title.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/star_sky_title.png"
    },
    function (t, e, i) {
        i(103)
    },
    function (t, e, i) {
        i(104)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/thanks_title.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/dynamic_title.png"
    },
    function (t, e, i) {
        i(105)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/recreation_title.png"
    },
    function (t, e, i) {
        i(106)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/play.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/review_title.png"
    },
    function (t, e, i) {
        i(107)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/relative_movie_title1.png"
    },
    function (t, e, i) {
        i(108)
    },
    function (t, e, i) {
        i(109)
    },
    function (t, e, i) {
        i(110)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/vip.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/treasure.png"
    },
    function (t, e, i) {
        i(111)
    },
    function (t, e, i) {
        i(112)
    },
    function (t, e, i) {
        i(113)
    },
    function (t, e, i) {
        t.exports = i.p + "assets/menu_bg_logo.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/menu_bg_top.png"
    },
    function (t, e, i) {
        t.exports = i.p + "assets/menu_bg_bottom.png"
    },
    function (t, e, i) {
        i(114)
    },
    function (t, e, i) {
        i(115)
    }, , , , , , , ,
    function (t, e, i) {
        i.r(e);
        var n = i(10),
            a = i(116),
            r = i(24),
            o = i(11),
            s = i.n(o),
            c = i(13),
            l = i(21);
        var u, d, f = function (t) {
                return function (e, i) {
                    return e.data[t] - i.data[t]
                }
            },
            p = "commonSetM",
            v = (u = {}, s()(u, p, (function (t, e) {
                var i = e.key,
                    n = e.value;
                t[i] = n
            })), s()(u, "SET_LOGIN_INFO", (function (t, e) {
                e.isLogin = e.isLogin || !1, t.loginInfo = e
            })), s()(u, "SET_ORDER_STATUS", (function () {
                l.a.$emit("toastOrder", !0)
            })), s()(u, "SHOW_REWARD_TOAST", (function (t, e) {
                l.a.$emit("toastReward", e)
            })), s()(u, "SET_DAILY_LIST", (function (t, e) {
                t.dialyTaskList = e || []
            })), s()(u, "SET_STAR_LIST", (function (t, e) {
                var i = e.find((function (t) {
                    return 5 === t.task_type
                }));
                i && (t.starList = i.meteorShower && i.meteorShower.meteorShowers || [], t.rewardTaskInfo =
                    i || {}, t.starBatch = i.meteorShower && i.meteorShower.batch || 0)
            })), s()(u, "QUICK_LOGIN", (function () {
                Object(c.c)()
            })), s()(u, "SET_STAR_FLOW", (function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t.showStarAnimation = e
            })), s()(u, "REFRESH_FURION", (function (t) {
                t.furionIns && (t.furionIns.destroy(), t.furionIns = null)
            })), s()(u, "SET_GUEST_STATUS", (function (t) {
                t.guestStarList = t.guestList.filter((function (t) {
                    return t.data && "user" === t.data.userType
                })).sort(f("order")), t.guestUpList = t.guestList.filter((function (t) {
                    return t.data && "up" === t.data.userType
                })).sort(f("order")), t.makerList = t.guestList.filter((function (t) {
                    return t.data && "create" === t.data.userType
                })).sort(f("order"))
            })), u),
            h = i(14),
            y = function (t) {
                var e = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
                    i = document.cookie.match(e);
                return i ? unescape(i[2]) : null
            },
            m = i(44),
            g = i(15);

        function _(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function w(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _(Object(i), !0).forEach((function (e) {
                    s()(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(
                    i)) : _(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var b = "缃戠粶閿欒锛岃绋嶅悗鍐嶈瘯",
            T = (d = {}, s()(d, "FETCH_LOGIN_INFO", (function (t) {
                var e = t.state,
                    i = t.commit,
                    n = t.dispatch;
                return Object(h.a)({
                    method: "GET",
                    url: "x/web-interface/nav",
                    params: {
                        ts: (new Date).getTime()
                    },
                    include: !0
                }).then((function (t) {
                    var a = {};
                    200 === t.status && t.data && (a = t.data.data || {}, i(
                        "SET_LOGIN_INFO", a), e.guestList.length && n(
                        "GET_GUEST_STATUS"), n("GET_MOVIE_STATUS"))
                })).catch((function () {
                    i("SET_LOGIN_INFO", {})
                }))
            })), s()(d, "ACT_ORDER", (function (t) {
                var e = t.state,
                    i = t.commit,
                    a = Object(g.a)("spm_prefix"),
                    r = {
                        from: "web_page",
                        type: "page_id",
                        oid: "cross-2020-pc",
                        platform: "pc",
                        csrf: y("bili_jct"),
                        mobiapp: "",
                        spmid: a,
                        buvid: y("buvid3") || ""
                    };
                return Object(h.a)({
                    url: "x/activity/relation/do",
                    method: "post",
                    params: w({
                        id: g.b ? 3 : 18
                    }, r),
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        i("SET_ORDER_STATUS");
                        var a = {
                            orderStatus: !0,
                            appointNum: e.appointInfo.appointNum || 0
                        };
                        i(p, {
                            key: "appointInfo",
                            value: a
                        })
                    } else n.default.prototype.$message.info(t.data && t.data.message || b)
                }))
            })), s()(d, "GET_ORDER_INFO", (function (t) {
                var e = t.commit;
                Object(h.a)({
                    url: "x/activity/relation/info",
                    params: {
                        ts: (new Date).getTime(),
                        id: g.b ? 3 : 18,
                        specific: "reserve"
                    }
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var i = t.data.data && t.data.data.reserve_item || {},
                            n = i.state,
                            a = void 0 === n ? 0 : n,
                            r = i.total;
                        e(p, {
                            key: "appointInfo",
                            value: {
                                orderStatus: 1 === a,
                                appointNum: void 0 === r ? 0 : r
                            }
                        })
                    }
                }))
            })), s()(d, "GET_USER_SCORE", (function (t) {
                var e = t.commit;
                return Object(h.a)({
                    url: "pgc/activity/year/2021/task/point/all",
                    method: "get",
                    params: {
                        ts: (new Date).getTime(),
                        csrf: y("bili_jct")
                    },
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var i = t.data.data || {},
                            n = i.taskPointList,
                            a = void 0 === n ? [] : n,
                            r = i.total_task_score;
                        e(p, {
                            key: "totalScore",
                            value: void 0 === r ? 0 : r
                        }), e(p, {
                            key: "taskPointList",
                            value: a
                        })
                    }
                }))
            })), s()(d, "GET_USER_DAILY", (function (t) {
                var e = t.commit,
                    i = t.dispatch;
                return Object(h.a)({
                    url: "pgc/activity/year/2021/task/point/day",
                    method: "get",
                    params: {
                        ts: (new Date).getTime(),
                        csrf: y("bili_jct")
                    },
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var n = t.data.data || [],
                            a = n.find((function (t) {
                                return 5 === t.task_type
                            }));
                        if (!a || !a.meteorShower) return;
                        e("SET_STAR_FLOW", 1 === a.meteorShower.status), e("SET_DAILY_LIST",
                            n || []), e("SET_STAR_LIST", n || []), e("REFRESH_FURION"),
                            Object(c.b)().then((function (t) {
                                if (a.meteorShower.next_start_time) {
                                    var n = new m.a({
                                        serverTime: t,
                                        timeList: [{
                                            type: "point",
                                            pointTime: 1e3 * a.meteorShower
                                                .next_start_time,
                                            trigger: function () {
                                                i(
                                                    "REFRESH_SCORE"
                                                )
                                            }
                                        }]
                                    });
                                    e(p, {
                                        key: "furionIns",
                                        value: n
                                    })
                                }
                            }))
                    }
                }))
            })), s()(d, "DO_MISSION_ACT", (function (t, e) {
                var i = t.dispatch,
                    a = t.commit,
                    r = t.state,
                    o = e.taskType,
                    s = e.taskBatch,
                    c = e.flag;
                if (0 === r.inLive) return Object(h.a)({
                    url: "pgc/activity/year/2021/task/point",
                    method: "post",
                    params: {
                        ts: (new Date).getTime(),
                        csrf: y("bili_jct"),
                        task_type: o,
                        task_batch: s,
                        flag: c
                    },
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        if (5 === o) {
                            var e = t.data.data;
                            1 === c && localStorage.setItem("starflow", "".concat(s)),
                                a("SHOW_REWARD_TOAST", e)
                        }
                        i("REFRESH_SCORE")
                    } else n.default.prototype.$message.info(t.data && t.data.message ||
                        b)
                }))
            })), s()(d, "GET_ADV_LIST", (function (t) {
                var e = t.commit;
                return Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat(g.b ? 787 :
                        802),
                    trans: !1,
                    method: "get",
                    params: {
                        ts: (new Date).getTime()
                    },
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var i = t.data.data && t.data.data.list || [];
                        e(p, {
                            key: "bannerFst",
                            value: i.filter((function (t) {
                                return t.data && 1 === t.data.index
                            })).sort(f("order"))
                        }), e(p, {
                            key: "bannerSec",
                            value: i.filter((function (t) {
                                return t.data && 2 === t.data.index
                            })).sort(f("order"))
                        }), e(p, {
                            key: "bannerThird",
                            value: i.filter((function (t) {
                                return t.data && 3 === t.data.index
                            })).sort(f("order"))
                        })
                    }
                }))
            })), s()(d, "GET_GUEST_LIST", (function (t) {
                var e = t.commit,
                    i = t.dispatch;
                return Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat(g.b ? 792 :
                        801),
                    params: {
                        ts: (new Date).getTime()
                    },
                    trans: !1,
                    method: "get",
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        if (!t.data.data) return;
                        var n = t.data.data.list || [];
                        e(p, {
                            key: "guestList",
                            value: n
                        }), i("GET_GUEST_STATUS")
                    }
                }))
            })), s()(d, "WATCH_GUEST_ACT", (function (t, e) {
                var i = t.state,
                    a = t.commit,
                    r = e.mid;
                Object(h.a)({
                    url: "x/relation/modify",
                    method: "post",
                    params: {
                        ts: (new Date).getTime(),
                        fid: r,
                        act: 1,
                        re_src: 14,
                        csrf: y("bili_jct")
                    },
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var e = i.guestList.find((function (t) {
                            return t.data.mid === r
                        }));
                        e && (e.isWatch = !0), a("SET_GUEST_STATUS")
                    } else n.default.prototype.$message.info(t.data && t.data.message || b)
                }))
            })), s()(d, "GET_GUEST_STATUS", (function (t) {
                var e = t.state,
                    i = t.commit,
                    n = e.loginInfo,
                    a = e.guestList || [],
                    r = (a.filter((function (t) {
                        return Number(t.data.mid || 0) > 0
                    })) || []).map((function (t) {
                        return t.data.mid
                    })).join(",");
                if (r && n.isLogin) try {
                    Object(h.a)({
                        url: "x/relation/relations",
                        params: {
                            ts: (new Date).getTime(),
                            fids: r
                        }
                    }).then((function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ?
                            arguments[0] : {};
                        if (t.data && 0 === t.data.code) {
                            var e = t.data.data,
                                n = a.map((function (t) {
                                    var i = t.data.mid,
                                        n = i > 0 && !(!e || !e[i] || 1 !== e[i]
                                                .attribute && 2 !== e[i].attribute &&
                                            6 !== e[i].attribute);
                                    return w(w({}, t), {}, {
                                        isWatch: n
                                    })
                                }));
                            i(p, {
                                key: "guestList",
                                value: n
                            }), i("SET_GUEST_STATUS")
                        }
                    }))
                } catch (t) {} else i("SET_GUEST_STATUS")
            })), s()(d, "GET_VIDEO_LIST", (function (t) {
                var e = t.commit;
                return Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat(g.b ? 793 :
                        800),
                    trans: !1,
                    method: "get",
                    params: {
                        ts: (new Date).getTime()
                    },
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        if (!t.data.data) return;
                        var i = t.data.data.list || [];
                        e(p, {
                            key: "reviewVideoList",
                            value: i.filter((function (t) {
                                return t.data && "page2019" === t.data.videoType
                            })).sort(f("order"))
                        }), e(p, {
                            key: "onlyBpList",
                            value: i.filter((function (t) {
                                return t.data && "onlyBp" === t.data.videoType
                            })).sort(f("order"))
                        }), e(p, {
                            key: "recreationList",
                            value: i.filter((function (t) {
                                return t.data && "wonderCreate" === t.data
                                    .videoType
                            })).sort(f("order"))
                        }), e(p, {
                            key: "fastLookList",
                            value: i.filter((function (t) {
                                return t.data && "fastLook" === t.data.videoType
                            })).sort(f("order"))
                        })
                    }
                })).catch((function () {}))
            })), s()(d, "GET_CONFIG_INFO", (function (t) {
                var e = t.commit;
                return Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat(g.b ? 794 :
                        799),
                    params: {
                        ts: (new Date).getTime()
                    },
                    trans: !1,
                    method: "get",
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        if (!t.data.data) return;
                        var i = t.data.data.list || [];
                        e(p, {
                            key: "shareInfo",
                            value: i.length && i[0].data || {}
                        })
                    }
                })).catch((function () {}))
            })), s()(d, "GET_MENU_LIST", (function (t) {
                var e = t.state,
                    i = t.commit;
                if (!e.menuList.length) return Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat((g.b,
                        805)),
                    params: {
                        ts: (new Date).getTime()
                    },
                    trans: !1,
                    method: "get",
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        if (!t.data.data) return;
                        var e = t.data.data.list || [];
                        i(p, {
                            key: "menuList",
                            value: e.sort(f("order"))
                        })
                    }
                })).catch((function () {}))
            })), s()(d, "REFRESH_SCORE", (function (t) {
                var e = t.state,
                    i = t.dispatch;
                2 !== e.inLive && (i("GET_USER_SCORE"), i("GET_USER_DAILY"))
            })), s()(d, "GET_MOVIE_LIST", (function (t) {
                var e = t.commit,
                    i = t.dispatch;
                return Object(h.a)({
                    url: "pgc/operation/api/static/season",
                    params: {
                        ts: (new Date).getTime(),
                        wid: g.b ? 10705 : 10228
                    },
                    method: "get",
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var n = t.data.data || [];
                        e(p, {
                            key: "movieList",
                            value: n
                        }), i("GET_MOVIE_STATUS")
                    }
                }))
            })), s()(d, "GET_MOVIE_STATUS", (function (t) {
                var e = t.state,
                    i = t.commit,
                    n = e.loginInfo,
                    a = e.movieList.filter((function (t) {
                        return t.index_value
                    })).map((function (t) {
                        return t.index_value
                    })).join(",");
                n.isLogin && a && Object(h.a)({
                    url: "pgc/web/follow/status",
                    method: "get",
                    params: {
                        season_ids: a
                    }
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var n = t.data.result || {},
                            a = e.movieList.map((function (t) {
                                var e = t.index_value;
                                return e && n[e] && 1 === n[e].is_follow ? w(w({},
                                    t), {}, {
                                    followed: !0
                                }) : w(w({}, t), {}, {
                                    followed: !1
                                })
                            }));
                        i(p, {
                            key: "movieList",
                            value: a
                        })
                    }
                }))
            })), s()(d, "SET_MOVIE_STATUS", (function (t, e) {
                var i = t.state,
                    a = t.commit,
                    r = e.ssid;
                return i.loginInfo.isLogin ? Object(h.a)({
                    url: "pgc/web/follow/add",
                    method: "post",
                    params: {
                        csrf: y("bili_jct"),
                        season_id: r
                    },
                    include: !0
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var e = i.movieList.find((function (t) {
                            return t.index_value === r
                        }));
                        e && (e.followed = !0)
                    } else n.default.prototype.$message.info(t.data && t.data.message || b)
                })) : a("QUICK_LOGIN")
            })), s()(d, "GET_LUCKY_INFO", (function (t) {
                var e = t.commit;
                Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat(g.b ? 812 :
                        811),
                    trans: !1,
                    method: "get",
                    params: {
                        ts: (new Date).getTime()
                    },
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var i = t.data.data && t.data.data.list || [];
                        i.length && e(p, {
                            key: "luckyInfo",
                            value: i[0] && i[0].data || {}
                        })
                    }
                }))
            })), s()(d, "GET_SEASON_INFO", (function (t) {
                var e = t.commit;
                Object(h.a)({
                    url: "pgc/view/web/season",
                    trans: !1,
                    method: "get",
                    params: {
                        ts: (new Date).getTime(),
                        season_id: g.b ? 35874 : 29067
                    },
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var i = t.data && t.data.result || {};
                        e(p, {
                            key: "sectionList",
                            value: i.section || []
                        })
                    }
                }))
            })), s()(d, "GET_FINAL_VIDEO_LIST", (function (t) {
                var e = t.commit;
                Object(h.a)({
                    url: "https://www.bilibili.com/activity/web/view/data/".concat(g.b ? 786 :
                        803),
                    trans: !1,
                    method: "get",
                    params: {
                        ts: (new Date).getTime()
                    },
                    withCredentials: !1
                }).then((function (t) {
                    if (t.data && 0 === t.data.code) {
                        var i = (t.data.data && t.data.data.list || []).sort(f("order")) ||
                            [];
                        e(p, {
                            key: "finalVideoList",
                            value: i
                        })
                    }
                }))
            })), d),
            S = i(4),
            I = i.n(S),
            C = i(5),
            k = i.n(C),
            x = i(16),
            M = i(17),
            A = i(6),
            U = i.n(A),
            O = i(7),
            j = i.n(O),
            R = i(2),
            L = i.n(R),
            E = function () {
                function t() {
                    I()(this, t), this.alive = !0, this.active = !1
                }
                return k()(t, [{
                    key: "getAnimatedSprite",
                    value: function (t) {
                        for (var e = [], i = 0; i < t.piece; i++) {
                            var n = x.e.from("".concat(t.prefix).concat(i + 1, ".png"));
                            e.push(n)
                        }
                        var a = new x.a(e);
                        return a.width = t.width, a.height = t.height, a.loop = void 0 === t.loop ||
                            t.loop, a.animationSpeed = t.speed, a
                    }
                }, {
                    key: "stop",
                    value: function () {
                        this.active && this.alive && (this.active = !1, this.app.stop())
                    }
                }, {
                    key: "start",
                    value: function () {
                        !this.active && this.alive && (this.active = !0, this.app.start())
                    }
                }, {
                    key: "destory",
                    value: function () {
                        this.alive && (this.alive = !1, this.app.destroy())
                    }
                }]), t
            }();

        function D(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var J = function (t) {
            U()(i, t);
            var e = D(i);

            function i(t, n) {
                var a;
                return I()(this, i), (a = e.call(this)).ctx = t, a.app = new x.b({
                    width: n.width,
                    height: n.height,
                    transparent: !0,
                    autoStart: !1
                }), a.anime = a.getAnimatedSprite(n), a.app.stage.addChild(a.anime), t.appendChild(a.app.view),
                    a.anime.play(), a.start(), a
            }
            return i
        }(E);

        function N(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var P = M.a.kvStar,
            V = function (t) {
                U()(i, t);
                var e = N(i);

                function i(t) {
                    var n;
                    return I()(this, i), (n = e.call(this)).conf = [{
                        x: 400,
                        y: 300,
                        speed: .3
                    }, {
                        x: 200,
                        y: 60,
                        speed: .3
                    }, {
                        x: 1400,
                        y: 0,
                        speed: .3
                    }], n.secConf = [{
                        x: 400,
                        y: 160,
                        speed: .2
                    }, {
                        x: 1200,
                        y: 500,
                        speed: .6
                    }], n.loop = 0, n.ctx = t, n.app = new x.b({
                        width: 1920,
                        height: 1080,
                        transparent: !0,
                        autoStart: !1
                    }), t.appendChild(n.app.view), n.runStars(), n.start(), n
                }
                return k()(i, [{
                    key: "runStars",
                    value: function () {
                        var t = this;
                        this.anime = this.getAnimatedSprite(P), this.anime.loop = !0;
                        var e = this.conf.splice(0, 1)[0];
                        this.anime.x = e.x, this.anime.y = e.y, this.anime.animationSpeed = e.speed,
                            this.app.stage.addChild(this.anime), this.anime.onLoop = function () {
                            if (t.loop++, 1 === t.loop && t.runSecond(), 0 === t.conf.length) t
                                .anime.loop = !1, t.anime.visible = !1, t.destory();
                            else {
                                var e = t.conf.splice(0, 1)[0];
                                t.anime.x = e.x, t.anime.y = e.y, t.anime.animationSpeed = e.speed
                            }
                        }, this.anime.play()
                    }
                }, {
                    key: "runSecond",
                    value: function () {
                        var t = this;
                        this.secConf.forEach((function (e, i) {
                            var n = t.getAnimatedSprite(P);
                            n.x = e.x, n.y = e.y, n.animationSpeed = e.speed, n.onComplete =
                                function () {
                                    1 === i && t.runThird(), n.visible = !1, n.destroy()
                                }, t.app.stage.addChild(n), n.play()
                        }))
                    }
                }, {
                    key: "runThird",
                    value: function () {
                        var t = this,
                            e = this.getAnimatedSprite(P);
                        e.x = 300, e.y = 500, e.animationSpeed = .3, e.onComplete = function () {
                            e.visible = !1, t.app.view.style.display = "none", t.app.stop()
                        }, this.app.stage.addChild(e), e.play()
                    }
                }]), i
            }(E),
            Q = i(32);

        function B(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var G = M.a.fall,
            W = M.a.bling,
            z = function (t) {
                U()(i, t);
                var e = B(i);

                function i(t) {
                    var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return I()(this, i), (n = e.call(this)).ctx = t, n.app = new x.b({
                        width: a.onlyBling ? 170 : G.width - 180,
                        height: a.onlyBling ? 80 : G.height - 200,
                        transparent: !0,
                        autoStart: !1
                    }), n.conf = a, n.app.view.style.position = "absolute", n.app.view.style.bottom = "0", n.app
                        .view.style.left = "-90px", n.app.view.style.pointerEvents = "none", t.appendChild(n.app.view),
                        n.draw(), n.start(), n
                }
                return k()(i, [{
                    key: "addBubble",
                    value: function () {
                        var t = this;
                        this.bubble = new x.d(x.e.from("bubble")), this.bubble.width = 90, this.bubble
                            .height = 30, this.bubble.x = 0, this.bubble.y = this.conf.onlyBling ?
                            26 : G.height - 254, this.app.stage.addChild(this.bubble), this.tweenIn =
                            new Q.a.Tween({
                                x: 0
                            }).to({
                                x: 5
                            }, 1e3).onUpdate((function (e) {
                                t.bubble.x = e.x, t.bubble.alpha = (e.x + 5) / 10
                            })).easing(Q.a.Easing.Quadratic.InOut), this.tweenOut = new Q.a.Tween({
                            x: 5
                        }).to({
                            x: 0
                        }, 1e3).onUpdate((function (e) {
                            t.bubble.x = e.x, t.bubble.alpha = (e.x + 5) / 10
                        })).easing(Q.a.Easing.Quadratic.InOut), this.tweenIn.chain(this.tweenOut),
                            this.tweenOut.chain(this.tweenIn), this.tweenIn.start(), this.app.ticker
                            .add((function () {
                                Q.a.update()
                            }))
                    }
                }, {
                    key: "draw",
                    value: function () {
                        var t = this;
                        this.conf.onlyBling ? (this.bling = this.getAnimatedSprite(W), this.bling.x =
                            80, this.bling.y = -10, this.app.stage.addChild(this.bling), this.conf
                            .bubble && this.addBubble()) : (this.fall = this.getAnimatedSprite(
                            G), this.fall.x = -50, this.fall.y = -130, this.fall.onComplete =
                            function () {
                                t.bling.play(), t.conf.bubble && t.addBubble(), t.bling.visible = !
                                    0, t.fall.visible = !1, t.fall.destroy()
                            }, this.bling = this.getAnimatedSprite(W), this.bling.visible = !1,
                            this.bling.x = 77, this.bling.y = 110, this.app.stage.addChild(this
                            .fall), this.app.stage.addChild(this.bling)), this.conf.delay ||
                        this.play()
                    }
                }, {
                    key: "play",
                    value: function () {
                        this.conf.onlyBling ? this.bling.play() : this.fall.play(), this.start()
                    }
                }, {
                    key: "replay",
                    value: function () {
                        var t = this;
                        this.bling.visible = !1, this.bling.stop(), this.fall ? this.fall.gotoAndPlay(
                            0) : (this.app.view.width = G.width - 180, this.app.view.height = G
                            .height - 200, this.bling.x = 77, this.bling.y = 110, this.fall =
                            this.getAnimatedSprite(G), this.fall.x = -50, this.fall.y = -130,
                            this.fall.onComplete = function () {
                                t.bling.play(), t.bling.visible = !0, t.fall.visible = !1, t.fall
                                    .destroy()
                            }, this.app.stage.addChild(this.fall), this.fall.play())
                    }
                }]), i
            }(E),
            F = i(27),
            H = new(function () {
                function t() {
                    var e = this;
                    I()(this, t), this.loading = !0, this.queue = [], this.apps = [], this.addSource(), x.c.shared
                        .load((function () {
                            e.loading = !1, e.queue.forEach((function (t) {
                                var i = 0 === t.type ? new J(t.ctx, t.conf) : 1 === t.type ?
                                    new V(t.ctx) : new z(t.ctx, t.conf);
                                e.apps.push(i), t.cb(i)
                            })), e.queue = []
                        }));
                    var i = Object(F.throttle)(200, !1, this.check.bind(this));
                    window.addEventListener("scroll", i, !1)
                }
                return k()(t, [{
                    key: "check",
                    value: function () {
                        this.apps.forEach((function (t) {
                            Object(c.a)(t.ctx) ? t.start() : t.stop()
                        }))
                    }
                }, {
                    key: "addSource",
                    value: function () {
                        var t = x.c.shared;
                        for (var e in M.a) {
                            if (M.a.hasOwnProperty(e) && !t.resources[e]) "string" == typeof M.a[
                                e] ? t.add(e, M.a[e]) : t.add(e, M.a[e].json)
                        }
                    }
                }, {
                    key: "drawBaseAnime",
                    value: function (t, e) {
                        var i = this;
                        return new Promise((function (n) {
                            if (i.loading) i.queue.push({
                                type: 0,
                                cb: n,
                                ctx: t,
                                conf: e
                            });
                            else {
                                var a = new J(t, e);
                                i.apps.push(a), n(a)
                            }
                        }))
                    }
                }, {
                    key: "drawKvStar",
                    value: function (t) {
                        var e = this;
                        return new Promise((function (i) {
                            if (e.loading) e.queue.push({
                                type: 1,
                                cb: i,
                                ctx: t
                            });
                            else {
                                var n = new V(t);
                                e.apps.push(n), i(n)
                            }
                        }))
                    }
                }, {
                    key: "drawGiftStar",
                    value: function (t, e) {
                        var i = this;
                        return new Promise((function (n) {
                            if (i.loading) i.queue.push({
                                type: 2,
                                cb: n,
                                ctx: t,
                                conf: e
                            });
                            else {
                                var a = new z(t, e);
                                i.apps.push(a), n(a)
                            }
                        }))
                    }
                }]), t
            }()),
            X = function () {
                return {
                    anime: H,
                    furionIns: null,
                    activity2019: {},
                    bannerFst: [],
                    bannerSec: [],
                    bannerThird: [],
                    reviewVideoList: [],
                    onlyBpList: [],
                    fastLookList: [],
                    recreationList: [],
                    guestUpList: [],
                    guestStarList: [],
                    makerList: [],
                    guestList: [],
                    videoList: [],
                    movieList: [],
                    loginInfo: {},
                    totalScore: 0,
                    taskPointList: [],
                    dialyTaskList: [],
                    pcThanks: {},
                    prizeList: [],
                    ruleInfo: {},
                    screenHeight: 1080,
                    screenWidth: 1280,
                    starList: [],
                    starBatch: 0,
                    rewardTaskInfo: {},
                    showStarWrapper: !0,
                    shareInfo: {},
                    showStarAnimation: !1,
                    appointInfo: {
                        orderStatus: !1,
                        isLook: !1,
                        appointNum: 0
                    },
                    totalStarList: [],
                    lookVideoUrl: "",
                    appointId: 5,
                    giftIdEnum: {},
                    defaultImg: i(191),
                    ratio: 0,
                    notInFirstScreen: !1,
                    showMenuToast: !1,
                    menuList: [],
                    liveInfo: {},
                    inLive: -1,
                    pcMenuShowImg: "",
                    pcMenuShareImg: "",
                    todayImage: !1,
                    luckyInfo: {},
                    sectionList: [],
                    finalVideoList: []
                }
            };
        n.default.use(r.a);
        var K = function () {
                return new r.a.Store({
                    state: X,
                    mutations: v,
                    actions: T
                })
            },
            q = i(56),
            Y = function () {
                return Promise.resolve().then(i.bind(null, 134))
            };
        n.default.use(q.a);
        var $ = function () {
                return new q.a({
                    mode: "history",
                    routes: [{
                        path: "/",
                        component: Y
                    }]
                })
            },
            Z = i(3),
            tt = i.n(Z),
            et = i(1),
            it = i(0);

        function nt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var at = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : tt()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            rt = function (t) {
                U()(i, t);
                var e = nt(i);

                function i() {
                    var t;
                    return I()(this, i), (t = e.apply(this, arguments)).noAnime = !1, t.instance = null, t.resizeHandler =
                        function () {}, t.scrollHandler = function () {}, t.style = {}, t.h = 0, t.w = 0, t.scale =
                        "", t.ratio = 0, t
                }
                return k()(i, [{
                    key: "mounted",
                    value: function () {
                        var t = this,
                            e = function () {
                                t.w = t.getWindowW(), t.h = t.getWindowH(), t.commonSetM({
                                    key: "screenHeight",
                                    value: t.getWindowH()
                                }), t.commonSetM({
                                    key: "screenWidth",
                                    value: Math.max(t.getWindowW())
                                });
                                var e = (1080 * t.w / t.h > 1920 ? t.w / 1920 : t.h / 1080).toFixed(
                                    4);
                                t.scale = e, t.style = {
                                    transform: "scale(".concat(e, ") translateZ(0)"),
                                    webkitTransform: "scale(".concat(e, ") translateZ(0)")
                                }
                            };
                        e();
                        var i = this.getScrollTop();
                        this.noAnime = i > this.h, this.resizeHandler = Object(F.throttle)(16, !1,
                            e), window.addEventListener("resize", this.resizeHandler, !1);
                        this.scrollHandler = Object(F.throttle)(16, !1, (function () {
                            var e = t.getScrollTop();
                            t.ratio = Math.min(t.h, e) / t.h, t.commonSetM({
                                key: "ratio",
                                value: t.ratio
                            }), e > t.h && (t.noAnime = !0)
                        })), window.addEventListener("scroll", this.scrollHandler, !1), this.anime
                            .drawKvStar(this.$refs.kvStar).then((function (e) {
                                t.instance = e
                            })), window.addEventListener("orientationchange", e, !1)
                    }
                }, {
                    key: "getWindowW",
                    value: function () {
                        return window.innerWidth || window.document.documentElement.clientWidth ||
                            window.screen.width
                    }
                }, {
                    key: "getWindowH",
                    value: function () {
                        return window.innerHeight || document.documentElement.clientHeight ||
                            window.screen.height
                    }
                }, {
                    key: "getScrollTop",
                    value: function () {
                        return Math.max(window.pageYOffset || 0, window.document.documentElement.scrollTop ||
                            window.document.body.scrollTop)
                    }
                }, {
                    key: "beforeDestory",
                    value: function () {
                        this.instance && this.instance.destory()
                    }
                }, {
                    key: "bgBodyStyle",
                    get: function () {
                        return {
                            transform: "scale(".concat(2 - this.ratio, ")"),
                            opacity: this.ratio
                        }
                    }
                }, {
                    key: "bgKvStyle",
                    get: function () {
                        return {
                            transform: "translateY(-".concat(Math.ceil(40 * this.ratio), "px)"),
                            opacity: 1 - this.ratio
                        }
                    }
                }, {
                    key: "sunStyle",
                    get: function () {
                        return {
                            transform: "translateY(-".concat(Math.ceil(80 * this.ratio), "px)"),
                            opacity: 1 - this.ratio
                        }
                    }
                }, {
                    key: "cloudBirdStyle",
                    get: function () {
                        return {
                            transform: "scale(".concat(1 + this.ratio, ")"),
                            opacity: 1 - this.ratio
                        }
                    }
                }, {
                    key: "manStyle",
                    get: function () {
                        return {
                            transform: "scale(".concat(1 - .4 * this.ratio, ")"),
                            opacity: 1 - this.ratio
                        }
                    }
                }]), i
            }(et.c);
        at([it.c], rt.prototype, "anime", void 0), at([it.b], rt.prototype, "commonSetM", void 0);
        var ot = rt = at([et.a], rt),
            st = (i(192), i(8)),
            ct = Object(st.a)(ot, (function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: ["anime-bg", {
                        "no-anime": t.noAnime
                    }],
                    style: t.style
                }, [i("div", {
                    staticClass: "body-bg",
                    style: t.bgBodyStyle
                }), t._v(" "), i("div", {
                    staticClass: "kv-bg",
                    style: t.bgKvStyle
                }), t._v(" "), i("div", {
                    staticClass: "kv-sun",
                    style: t.sunStyle
                }), t._v(" "), i("div", {
                    ref: "kvStar",
                    staticClass: "star-layer"
                }), t._v(" "), i("div", {
                    staticClass: "kv-cloud-l",
                    style: t.cloudBirdStyle
                }), t._v(" "), i("div", {
                    staticClass: "kv-cloud-r",
                    style: t.cloudBirdStyle
                }), t._v(" "), i("div", {
                    staticClass: "kv-man",
                    style: t.manStyle
                }), t._v(" "), i("div", {
                    staticClass: "kv-bird",
                    style: t.cloudBirdStyle
                }), t._v(" "), t._m(0), t._v(" "), i("div", {
                    staticClass: "shadow",
                    style: {
                        opacity: 1 - t.ratio
                    }
                })])
            }), [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "little-star"
                }, [i("div", {
                    staticClass: "star scale-8",
                    staticStyle: {
                        top: "200px",
                        right: "380px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-6 delay-1",
                    staticStyle: {
                        top: "240px",
                        right: "360px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-4",
                    staticStyle: {
                        top: "200px",
                        left: "300px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-8 delay-1",
                    staticStyle: {
                        top: "900px",
                        left: "100px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-6",
                    staticStyle: {
                        top: "780px",
                        left: "460px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-8 delay-1",
                    staticStyle: {
                        top: "60px",
                        left: "1100px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-6 delay-1",
                    staticStyle: {
                        top: "20px",
                        right: "420px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-6",
                    staticStyle: {
                        top: "520px",
                        right: "420px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-8 delay-1",
                    staticStyle: {
                        top: "700px",
                        right: "500px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-8",
                    staticStyle: {
                        bottom: "160px",
                        right: "200px"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "star scale-8 delay-1",
                    staticStyle: {
                        bottom: "300px",
                        left: "1300px"
                    }
                })])
            }], !1, null, null, null).exports,
            lt = i(134);

        function ut(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var dt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : tt()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            ft = function (t) {
                U()(i, t);
                var e = ut(i);

                function i() {
                    var t;
                    return I()(this, i), (t = e.apply(this, arguments)).toastVisible = !0, t.showMask = !0, t
                }
                return k()(i, [{
                    key: "handlePageHidden",
                    value: function (t) {
                        document.body.style.overflow = t ? "hidden" : ""
                    }
                }, {
                    key: "handlePropChange",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "beforeMount",
                    value: function () {
                        this.toastVisible = this.value
                    }
                }, {
                    key: "closeMsg",
                    value: function () {
                        this.toastVisible = !1, this.$emit("input", this.toastVisible)
                    }
                }]), i
            }(et.c);
        dt([Object(et.b)(Boolean)], ft.prototype, "value", void 0), dt([Object(et.d)("toastVisible")], ft.prototype,
            "handlePageHidden", null), dt([Object(et.d)("value")], ft.prototype, "handlePropChange", null);
        var pt = ft = dt([et.a], ft),
            vt = (i(333), Object(st.a)(pt, (function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.toastVisible,
                        expression: "toastVisible"
                    }],
                    staticClass: "toast-dialog "
                }, [this.showMask ? e("div", {
                    staticClass: "toast-mask animation-toast"
                }) : this._e(), this._v(" "), e("div", {
                    staticClass: "toast-body animation-toast"
                }, [e("div", {
                    staticClass: "toast-header"
                }, [e("img", {
                    staticClass: "toast-close",
                    attrs: {
                        src: i(31),
                        alt: "鍏抽棴"
                    },
                    on: {
                        click: this.closeMsg
                    }
                })]), this._v(" "), e("div", {
                    staticClass: "toast-content"
                }, [this._t("default")], 2)])])
            }), [], !1, null, "7decad57", null).exports);

        function ht(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var yt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : tt()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            mt = function (t) {
                U()(i, t);
                var e = ht(i);

                function i() {
                    var t;
                    return I()(this, i), (t = e.apply(this, arguments)).showToast = !1, t.rewardInfo = {
                        type: 0,
                        number: 0
                    }, t.giftTypeEnum = {
                        9: 2,
                        0: 1,
                        6: 3
                    }, t
                }
                return k()(i, [{
                    key: "beforeMount",
                    value: function () {
                        var t = this;
                        l.a.$on("toastReward", (function (e) {
                            if (e && e.length) {
                                var i = e[0];
                                t.rewardInfo = {
                                    type: t.giftTypeEnum[i.gift_Type] || 0,
                                    number: t.giftIdEnum[i.gift_id] || 0
                                }
                            } else t.rewardInfo = {
                                type: 1,
                                number: 0
                            };
                            t.showToast = !0
                        }))
                    }
                }, {
                    key: "showProcessText",
                    get: function () {
                        return "".concat(this.rewardTaskInfo.finish_num || 0, "/").concat(this.rewardTaskInfo
                            .total_num || 0)
                    }
                }]), i
            }(et.c);
        yt([it.c], mt.prototype, "rewardTaskInfo", void 0), yt([it.c], mt.prototype, "giftIdEnum", void 0);
        var gt = mt = yt([Object(et.a)({
                components: {
                    ToastDialog: vt
                }
            })], mt),
            _t = (i(334), Object(st.a)(gt, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("toast-dialog", {
                    model: {
                        value: t.showToast,
                        callback: function (e) {
                            t.showToast = e
                        },
                        expression: "showToast"
                    }
                }, [n("div", {
                    staticClass: "reward"
                }, [n("div", {
                    staticClass: "reward-title"
                }, [t._v("鎭枩浣犳壘鍒版祦鏄熷暒锛�(" + t._s(t.showProcessText) + ")")]), t._v(
                    " "), n("div", {
                    staticClass: "reward-extra"
                }, [2 === t.rewardInfo.type ? n("div", [t._v("\n        鍚屾椂琚� " +
                    t._s(t.rewardInfo.number) + " 棰楅瓟鏅剁牳涓璡n      ")]) : t._e(),
                    t._v(" "), 3 === t.rewardInfo.type ? n("div", [t._v(
                        "鍚屾椂琚ぇ浼氬憳浼樻儬鍒哥牳涓�")]) : t._e()]), t._v(" "), n("div", {
                    staticClass: "reward-desc reward-primary"
                }, [2 === t.rewardInfo.type ? n("div", [t._v(
                    "\n        鍙湪浼氬憳璐腑蹇�-榄斿姏浠撳簱閲屾煡鐪嬮噷鏌ョ湅\n      "
                )]) : t._e(), t._v(" "), 3 === t.rewardInfo.type ? n("div",
                    [t._v("\n        鍙湪涓汉璐︽埛-鎴戠殑澶т細鍛�-鍗″埜鍖呴噷鏌ョ湅\n      ")]
                ) : t._e()]), t._v(" "), n("div", {
                    staticClass: "reward-list flex-box flex-aic flex-jcc"
                }, [n("div", {
                    staticClass: "reward-star flex-box flex-aic"
                }, [n("img", {
                    staticClass: "reward-star-img",
                    attrs: {
                        src: i(30),
                        alt: "star"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "reward-number reward-primary"
                }, [t._v("x")]), t._v(" "), n("div", [t._v("1")])]), t._v(
                    " "), 1 !== t.rewardInfo.type ? n("div", {
                    staticClass: "reward-more flex-box flex-aic"
                }, [3 === t.rewardInfo.type ? n("img", {
                    staticClass: "reward-more-vip",
                    attrs: {
                        src: i(331),
                        alt: "star"
                    }
                }) : t._e(), t._v(" "), 2 === t.rewardInfo.type ? n(
                    "img", {
                        staticClass: "reward-more-treasure",
                        attrs: {
                            src: i(332),
                            alt: "star"
                        }
                    }) : t._e(), t._v(" "), 2 === t.rewardInfo.type ?
                    n("div", {
                        staticClass: "reward-number reward-primary"
                    }, [t._v("\n          x\n        ")]) : t._e(), t._v(
                    " "), 2 === t.rewardInfo.type ? n("div", [t._v(
                    t._s(t.rewardInfo.number))]) : t._e(), t._v(" "),
                    3 === t.rewardInfo.type ? n("div", [t._v(t._s(t.rewardInfo
                        .number) + "鍏冨埜")]) : t._e()]) : t._e()])]), t._v(" "), n("div", {
                    staticClass: "reward-close cursor-pointer",
                    on: {
                        click: function (e) {
                            t.showToast = !1
                        }
                    }
                }, [t._v("\n    纭\n  ")])])
            }), [], !1, null, "9df7cd1c", null).exports),
            wt = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "toast-content"
                }, [n("div", {
                    staticClass: "order-content"
                }, [n("div", {
                    staticClass: "order-status"
                }, [t._v("棰勭害鎴愬姛")]), t._v(" "), n("div", {
                    staticClass: "order-reward"
                }, [t._v("鎭枩浣犲悓鏃惰幏寰�10棰楁祦鏄�")]), t._v(" "), n("div", {
                    staticClass: "order-detail flex-box flex-aic flex-jcc"
                }, [n("img", {
                    staticClass: "reward-star-img",
                    attrs: {
                        src: i(30),
                        alt: "star"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "reward-number"
                }, [t._v("x")]), t._v(" "), n("div", [t._v("10")]), t._v(" "), n(
                    "div", {
                        staticClass: "order-desc"
                    }, [t._v("浠呴檺棣栨棰勭害")])])])])
            }];

        function bt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var Tt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : tt()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            St = function (t) {
                U()(i, t);
                var e = bt(i);

                function i() {
                    var t;
                    return I()(this, i), (t = e.apply(this, arguments)).toastVisible = !1, t.showMask = !0, t.count =
                        5, t.timer = null, t
                }
                return k()(i, [{
                    key: "handleTimer",
                    value: function (t) {
                        var e = this;
                        t ? (document.body.style.overflow = "hidden", this.timer = setInterval((
                            function () {
                                e.count >= 1 ? e.count -= 1 : e.closeToast()
                            }), 1e3)) : (document.body.style.overflow = "", this.GET_ORDER_INFO(),
                            this.GET_USER_SCORE(), this.timer && clearInterval(this.timer),
                            this.count = 5)
                    }
                }, {
                    key: "closeToast",
                    value: function () {
                        this.timer && clearInterval(this.timer), this.count = 5, this.toastVisible = !
                            1
                    }
                }, {
                    key: "beforeMount",
                    value: function () {
                        var t = this;
                        l.a.$on("toastOrder", (function () {
                            t.toastVisible = !0
                        }))
                    }
                }]), i
            }(et.c);
        Tt([it.a], St.prototype, "GET_ORDER_INFO", void 0), Tt([it.a], St.prototype, "GET_USER_SCORE", void 0), Tt(
            [Object(et.d)("toastVisible")], St.prototype, "handleTimer", null);
        var It = St = Tt([et.a], St),
            Ct = (i(335), Object(st.a)(It, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.toastVisible,
                        expression: "toastVisible"
                    }],
                    staticClass: "toast-dialog"
                }, [t.showMask ? n("div", {
                    staticClass: "toast-mask animation-toast"
                }) : t._e(), t._v(" "), n("div", {
                    staticClass: "toast-body animation-toast"
                }, [n("div", {
                    staticClass: "toast-header"
                }, [n("img", {
                    staticClass: "toast-close",
                    attrs: {
                        src: i(31),
                        alt: "鍏抽棴"
                    },
                    on: {
                        click: t.closeToast
                    }
                })]), t._v(" "), t._m(0), t._v(" "), n("div", {
                    staticClass: "order-toast-close",
                    on: {
                        click: t.closeToast
                    }
                }, [t._v("纭(" + t._s(t.count) + ")")])])])
            }), wt, !1, null, "3e300df0", null).exports),
            kt = i(28),
            xt = i(9);

        function Mt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var At = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : tt()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Ut = function (t) {
                U()(i, t);
                var e = Mt(i);

                function i() {
                    var t;
                    return I()(this, i), (t = e.apply(this, arguments)).shareObj = null, t
                }
                return k()(i, [{
                    key: "handleTimer",
                    value: function (t) {
                        document.body.style.overflow = t ? "hidden" : ""
                    }
                }, {
                    key: "handleMenuChange",
                    value: function () {
                        this.initShareInfo()
                    }
                }, {
                    key: "handleShareChange",
                    value: function () {
                        this.initShareInfo()
                    }
                }, {
                    key: "initShareInfo",
                    value: function () {
                        var t = this;
                        this.pcMenuShareImg && this.shareInfo.title && (this.shareObj = kt.a.share({
                            title: this.shareInfo.title || "",
                            desc: this.shareInfo.desc || "",
                            link: window.location.href + "".concat(location.href.indexOf(
                                "?") > -1 ? "&ts=".concat((new Date).getTime()) :
                                "?ts=".concat((new Date).getTime())),
                            pics: this.pcMenuShareImg || this.shareInfo.pics || "",
                            show: ["bili", "weibo", "qq", "qzone", "baidu_tieba",
                                "wechat"],
                            biz_type: 3,
                            defaultInput: this.shareInfo.editContent || "",
                            onDynamicShareSucceed: function () {
                                t.handleShareAct()
                            },
                            dynamic: {
                                image: this.pcMenuShareImg || "",
                                descPre: this.shareInfo.editContent || "",
                                callback: function () {}
                            }
                        }, document.querySelector("#share-card3"), (function (e) {
                            "bili" !== e && t.handleShareAct()
                        })))
                    }
                }, {
                    key: "handleShareAct",
                    value: function () {}
                }, {
                    key: "closeToast",
                    value: function () {
                        this.commonSetM({
                            key: "showMenuToast",
                            value: !1
                        })
                    }
                }, {
                    key: "handleShareClick",
                    value: function () {
                        Object(xt.a)("program-share_click", {})
                    }
                }]), i
            }(et.c);
        At([it.c], Ut.prototype, "showMenuToast", void 0), At([it.c], Ut.prototype, "menuList", void 0), At([it.c],
            Ut.prototype, "pcMenuShowImg", void 0), At([it.c], Ut.prototype, "pcMenuShareImg", void 0), At([it.c],
            Ut.prototype, "loginInfo", void 0), At([it.c], Ut.prototype, "shareInfo", void 0), At([it.b], Ut.prototype,
            "commonSetM", void 0), At([it.a], Ut.prototype, "DO_MISSION_ACT", void 0), At([Object(et.d)(
            "showMenuToast")], Ut.prototype, "handleTimer", null), At([Object(et.d)("pcMenuShareImg")], Ut.prototype,
            "handleMenuChange", null), At([Object(et.d)("shareInfo")], Ut.prototype, "handleShareChange", null);
        var Ot = Ut = At([et.a], Ut),
            jt = (i(339), Object(st.a)(Ot, (function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showMenuToast,
                        expression: "showMenuToast"
                    }],
                    staticClass: "toast-dialog"
                }, [n("div", {
                    staticClass: "toast-mask animation-toast"
                }), t._v(" "), n("div", {
                    staticClass: "toast-body animation-toast"
                }, [n("div", {
                    staticClass: "toast-content custom-scrollbar"
                }, [n("img", {
                    staticClass: "menu-img",
                    attrs: {
                        src: t.pcMenuShowImg,
                        alt: "鑺傜洰鍗�"
                    }
                })]), t._v(" "), n("img", {
                    staticClass: "toast-close",
                    attrs: {
                        src: i(31),
                        alt: "鍏抽棴"
                    },
                    on: {
                        click: t.closeToast
                    }
                }), t._v(" "), n("img", {
                    staticClass: "toast-menu-img menu-logo no-drag",
                    attrs: {
                        src: i(336),
                        alt: ""
                    }
                }), t._v(" "), n("img", {
                    staticClass: "toast-menu-img menu-top no-drag",
                    attrs: {
                        src: i(337),
                        alt: ""
                    }
                }), t._v(" "), n("img", {
                    staticClass: "toast-menu-img menu-bottom no-drag",
                    attrs: {
                        src: i(338),
                        alt: ""
                    }
                }), t._v(" "), n("div", {
                    directives: [{
                        name: "exposure",
                        rawName: "v-exposure",
                        value: {
                            name: "program-share_show",
                            data: {}
                        },
                        expression: "{\n        name: 'program-share_show',\n        data: {},\n      }"
                    }],
                    staticClass: "share-bottom-box"
                }, [n("div", {
                    staticClass: "flex-box flex-aic flex-jcc",
                    attrs: {
                        id: "share-card3"
                    },
                    on: {
                        click: t.handleShareClick
                    }
                })])])])
            }), [], !1, null, "9945c6dc", null).exports);

        function Rt(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var i, n = L()(t);
                if (e) {
                    var a = L()(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return j()(this, i)
            }
        }
        var Lt = function (t, e, i, n) {
                var a, r = arguments.length,
                    o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : tt()(Reflect)) && "function" ==
                    typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) :
                        a(e, i)) || o);
                return r > 3 && o && Object.defineProperty(e, i, o), o
            },
            Et = function (t) {
                U()(i, t);
                var e = Rt(i);

                function i() {
                    return I()(this, i), e.apply(this, arguments)
                }
                return k()(i, [{
                    key: "mounted",
                    value: function () {
                        navigator.userAgent.match(/Trident\/7\./) && document.body.addEventListener &&
                        document.body.addEventListener("mousewheel", (function () {
                            event.preventDefault();
                            var t = event.wheelDelta,
                                e = window.pageYOffset;
                            window.scrollTo(0, e - t)
                        }), {
                            passive: !0
                        })
                    }
                }, {
                    key: "handleGlobalClick",
                    value: function () {
                        l.a.$emit("clickOutSide")
                    }
                }]), i
            }(et.c);
        Lt([it.c], Et.prototype, "shareInfo", void 0);
        var Dt = Et = Lt([Object(et.a)({
                metaInfo: function () {
                    return {
                        title: this.shareInfo && this.shareInfo.pageTitle ||
                            "鈥�2020鏈€缇庣殑澶溾€漛ilibili鏅氫細"
                    }
                },
                components: {
                    AnimeKv: ct,
                    Home: lt.default,
                    RewardToast: _t,
                    OrderToast: Ct,
                    MenuToast: jt
                }
            })], Et),
            Jt = (i(340), Object(st.a)(Dt, (function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    attrs: {
                        id: "app"
                    },
                    on: {
                        click: this.handleGlobalClick
                    }
                }, [e("anime-kv"), this._v(" "), e("Home"), this._v(" "), e("RewardToast"),
                    this._v(" "), e("OrderToast"), this._v(" "), e("MenuToast")], 1)
            }), [], !1, null, null, null).exports),
            Nt = i(131),
            Pt = i.n(Nt),
            Vt = (i(342), i(132)),
            Qt = i.n(Vt),
            Bt = (i(343), new n.default);

        function Gt(t, e) {
            if (t) {
                var i = t.getBoundingClientRect(),
                    n = e || 0;
                return i.x + i.y + i.width + i.height !== 0 && (i.top < window.innerHeight + n && i.bottom >= 0)
            }
        }
        var Wt = ["scroll", "resize", "load"];

        function zt(t, e) {
            var i, n;
            for (i = 0, n = t.length; i < n; ++i)
                if (t[i].el === e) return i;
            return -1
        }
        var Ft = {
                install: function (t, e) {
                    var i = [],
                        n = [],
                        a = e || {
                            preload: 0
                        };

                    function r(t) {
                        t.loading || t.loaded || !Gt(t.el, a.preload) || function (t) {
                            if (t.loading || t.loaded) return;
                            t.loading = !0;
                            var e = new Image;
                            e.onload = function () {
                                t.el.src = t.src, t.loading = !1, t.loaded = !0, t.el.setAttribute(
                                    "lazy", "loaded")
                            }, e.onerror = function () {
                                t.loading = !1, t.loaded = !0, t.el.src = t.defaultImg
                            }, e.src = t.src
                        }(t)
                    }

                    function o(t) {
                        !t.loaded && Gt(t.el, a.preload) && (t.handler.call(), t.loaded = !0)
                    }

                    function s(e, a) {
                        var s = tt()(e);
                        "string" === s ? function (e, n) {
                            var a = zt(i, n),
                                o = n.getAttribute("src"),
                                s = {
                                    el: n,
                                    src: e,
                                    loading: !1,
                                    loaded: !1,
                                    defaultImg: o
                                }; - 1 !== a ? i[a] = s : i.push(s), t.nextTick((function () {
                                r(s)
                            }))
                        }(e, a) : "object" === s && function (e, i) {
                            var a = zt(n, i),
                                r = {
                                    el: i,
                                    id: e.id,
                                    loaded: !1,
                                    handler: e.handler || function () {}
                                }; - 1 !== a ? n[a].id !== e.id && (n[a] = r, t.nextTick((function () {
                                o(r)
                            }))) : (n.push(r), t.nextTick((function () {
                                o(r)
                            })))
                        }(e, a)
                    }
                    t.directive("lazy", {
                        bind: function (t, e) {
                            s(e.value, t)
                        },
                        update: function (t, e) {
                            s(e.value, t)
                        },
                        componentUpdated: function (t, e) {},
                        unbind: function (t, e) {
                            var i = e.value;
                            if ("object" === tt()(i)) {
                                var a = zt(n, t); - 1 !== a && n.splice(a, 1)
                            }
                        }
                    });
                    var c, l, u, d, f, p = (c = function () {
                        ! function () {
                            var t, e;
                            for (t = 0, e = i.length; t < e; ++t) r(i[t])
                        }(),
                            function () {
                                var t, e;
                                for (t = 0, e = n.length; t < e; ++t) o(n[t])
                            }()
                    }, l = 200, u = 100, d = null, f = 0, function () {
                        var t = this,
                            e = arguments,
                            i = +new Date;
                        clearTimeout(d), f || (f = i), i - f >= u ? (c.apply(t, e), f = i) : d =
                            setTimeout((function () {
                                c.apply(t, e)
                            }), l)
                    });
                    if ("undefined" != typeof window)
                        if (a.selector) ! function t(e) {
                            var i = window.document.querySelector(e);
                            if (i)
                                for (var n = 0; n < Wt.length; ++n) i.addEventListener(Wt[n], p);
                            else window.setTimeout((function () {
                                t(e)
                            }), 500)
                        }(a.selector);
                        else
                            for (var v = 0; v < Wt.length; ++v) window.addEventListener(Wt[v], p);
                    Bt.$on("updateFloor", (function () {
                        p()
                    })), Bt.$on("appMounted", (function () {
                        p()
                    })), "undefined" != typeof window && (window.triggerLazyProcess = p)
                }
            },
            Ht = i(58),
            Xt = i(133),
            Kt = {},
            qt = function () {
                function t(e, i, n) {
                    I()(this, t), this.el = e, this.observer = null, this.frozen = !1, this.createObserver(i, n)
                }
                return k()(t, [{
                    key: "createObserver",
                    value: function (t, e) {
                        var i = this;
                        if (this.observer && this.destroyObserver(), !this.frozen) {
                            if (t.observeOpts ? (this.options = Object.assign({}, Kt, t.observeOpts),
                                this.eventObj = t.eventObj || {}) : (this.eventObj = t, this.options =
                                Object.assign({}, Kt)), this.callback = function (t, e) {
                                t && i.eventObj.name && Xt.a.reportWebClick(i.eventObj.name, i.eventObj
                                    .data), t && i.options.once && (i.frozen = !0, i.destroyObserver())
                            }, this.callback && this.options.throttle) {
                                var n = (this.options.throttleOptions || {}).leading;
                                this.callback = Object(Ht.b)(this.callback, this.options.throttle, {
                                    leading: function (t) {
                                        return "both" === n || "visible" === n && t ||
                                            "hidden" === n && !t
                                    }
                                })
                            }
                            this.oldResult = void 0, this.observer = new IntersectionObserver((
                                function (t) {
                                    var e = t[0];
                                    if (t.length > 1) {
                                        var n = t.find((function (t) {
                                            return t.isIntersecting
                                        }));
                                        n && (e = n)
                                    }
                                    if (i.callback) {
                                        var a = e.isIntersecting && e.intersectionRatio >=
                                            i.threshold;
                                        if (a === i.oldResult) return;
                                        i.oldResult = a, i.callback(a, e)
                                    }
                                }), this.options.intersection), e.context.$nextTick((function () {
                                i.observer && i.observer.observe(i.el)
                            }))
                        }
                    }
                }, {
                    key: "destroyObserver",
                    value: function () {
                        this.observer && (this.observer.disconnect(), this.observer = null), this.callback &&
                        this.callback._clear && (this.callback._clear(), this.callback = null)
                    }
                }, {
                    key: "threshold",
                    get: function () {
                        return this.options.intersection && this.options.intersection.threshold ||
                            0
                    }
                }]), t
            }();

        function Yt(t, e, i) {
            var n = e.value;
            if (n)
                if ("undefined" == typeof IntersectionObserver) console.warn(
                    "[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill"
                );
                else {
                    var a = new qt(t, n, i);
                    t._vue_visibilityState = a
                }
        }

        function $t(t, e, i) {
            var n = e.value,
                a = e.oldValue;
            if (!Object(Ht.a)(n, a)) {
                var r = t._vue_visibilityState;
                n ? r ? r.createObserver(n, i) : Yt(t, {
                    value: n
                }, i) : Zt(t)
            }
        }

        function Zt(t) {
            var e = t._vue_visibilityState;
            e && (e.destroyObserver(), delete t._vue_visibilityState)
        }
        i(347);
        var te = {
            install: function (t, e) {
                t.directive("exposure", function (t) {
                    return Kt = t, {
                        bind: Yt,
                        update: $t,
                        unbind: Zt
                    }
                }(e))
            }
        };
        n.default.use(te, {
            intersection: {
                threshold: .5
            }
        }), n.default.prototype.$message = Qt.a, n.default.use(Pt.a), n.default.use(Ft), n.default.use(a.a);
        var ee = window.Sentry,
            ie = ee.BrowserClient,
            ne = ee.Integrations,
            ae = new ie({
                dsn: "".concat("https", "://fa76e4f290994f51ba92eb998c3a14ff@api.bilibili.com/x/traceback/12"),
                debug: !1,
                release: "f874e412a3319d2b47e13c1a1bb6e13d05ebf4b4",
                environment: "production",
                sampleRate: 1,
                integrations: [new ne.Vue({
                    Vue: n.default,
                    attachProps: !0,
                    logErrors: !1
                })]
            });
        window.Sentry.getCurrentHub().bindClient(ae), window.document.domain = "bilibili.com", n.default.mixin({
            beforeRouteUpdate: function (t, e, i) {
                var n = this.$options.asyncData;
                n ? n({
                    store: this.$store,
                    route: t
                }).then(i).catch(i) : i()
            }
        });
        var re, oe, se = (re = K(), oe = $(), {
                app: new n.default({
                    store: re,
                    router: oe,
                    render: function (t) {
                        return t(Jt)
                    }
                }),
                router: oe,
                store: re
            }),
            ce = se.app,
            le = se.router,
            ue = se.store;
        le.onReady((function () {
            if (window.__INITIAL_STATE__) ue.replaceState(window.__INITIAL_STATE__);
            else {
                var t = le.getMatchedComponents();
                if (!t) {
                    var e = new Error("404 Not Found");
                    throw e.status = 404, e
                }
                Promise.all(t.map((function (t) {
                    return t.asyncData && t.asyncData(ue, {})
                }))).then((function () {
                    ce.$mount("#cross-year-2020-app")
                })).catch((function () {}))
            }
            window && window.document.getElementById("app") && ce.$mount("#app")
        }))
    }]);
//# sourceMappingURL=cross-year-2020.f874e412a3319d2b47e13c1a1bb6e13d05ebf4b4.js.map