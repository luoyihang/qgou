/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        }); else if (!c && f.type(b) === "object") for (var e in b) b_(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/,
            m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g,
            r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/,
            u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
                return (b + "").toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty,
            E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf,
            I = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.7.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return F.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), A.add(a);
                return this
            }, eq: function (a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: E, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c], f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && J()
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a != null && a == a.window
            }, isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }, type: function (a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) ;
                return d === b || D.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            }, error: function (a) {
                throw new Error(a)
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                if (typeof c != "string" || !c) return null;
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(w, "ms-").replace(v, x)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            }, trim: G ? function (a) {
                return a == null ? "" : G.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (H) return H.call(b, a, c);
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e]; else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length,
                    k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a)) return b;
                var f = F.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h, i) {
                var j, k = d == null, l = 0, m = a.length;
                if (d && typeof d == "object") {
                    for (l in d) e.access(a, c, l, d[l], 1, h, f);
                    g = 1
                } else if (f !== b) {
                    j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                        return j.call(e(a), c)
                    }) : (c.call(a, f), c = null));
                    if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                    g = 1
                }
                return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {
            add: function () {
                if (c) {
                    var a = c.length;
                    n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            }, remove: function () {
                if (c) {
                    var b = arguments, d = 0, e = b.length;
                    for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                        j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                        if (a.unique) break
                    }
                }
                return this
            }, has: function (a) {
                if (c) {
                    var b = 0, d = c.length;
                    for (; b < d; b++) if (a === c[b]) return !0
                }
                return !1
            }, empty: function () {
                c = [];
                return this
            }, disable: function () {
                c = d = e = b;
                return this
            }, disabled: function () {
                return !c
            }, lock: function () {
                d = b, (!e || e === !0) && p.disable();
                return this
            }, locked: function () {
                return !d
            }, fireWith: function (b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            }, fire: function () {
                p.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!i
            }
        };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"),
                e = "pending", g = {resolve: b, reject: c, notify: d}, h = {
                    done: b.add, fail: c.add, progress: d.add, state: function () {
                        return e
                    }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    }, always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    }, pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0], e = b[1], g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    }, promise: function (a) {
                        if (a == null) a = h; else for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}), j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        }, when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }

            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent) for (n in{
            submit: 1,
            change: 1,
            focusin: 1
        }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0], k = 0, m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        }, _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a; else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        }, val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get, set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/,
        D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (
        a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }, H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }, I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s,
                t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
                        p = {}, r = [], n[0] = m;
                        for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                        r.length && j.push({elem: m, matches: r})
                    }
                }
                d.length > e && j.push({elem: this, matches: d.slice(e)});
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {setup: f.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J
    }, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J; else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        }, die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1,
            i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k); else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0; else if (f === !0) continue
                    }
                    if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a); else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1) ;
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                }, "~": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0, h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(j, "")
                }, TAG: function (a, b) {
                    return a[1].replace(j, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c); else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!m(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                        return !0
                    }
                    m.error(e)
                }, CHILD: function (a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                        case"only":
                        case"first":
                            while (l = l.previousSibling) if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case"last":
                            while (l = l.nextSibling) if (l.nodeType === 1) return !1;
                            return !0;
                        case"nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1],
                        d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        }, p = o.match.POS, q = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a); else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]); else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice,
        Q = f.expr.match.globalPOS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        }, not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i,
        _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f
                    .clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g,
                h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        }, clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l); else {
                    l = l.replace(Y, "<$1></$2>");
                    var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0],
                        p = b.createElement("div"), q = bh.childNodes, r;
                    b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                    while (o--) p = p.lastChild;
                    if (!f.support.tbody) {
                        var s = $.test(l),
                            t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                        for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                    }
                    !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                }
                var u;
                if (!f.support.appendChecked) if (l[0] && typeof (u = l.length) == "number") for (i = 0; i < u; i++) bn(l[i]); else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/,
        bw = {position: "absolute", visibility: "hidden", display: "block"}, bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function (a, b, c) {
            var d = {}, e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                    return bB(a, b, d)
                })
            }, set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {display: "inline-block"}, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//,
        bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/,
        bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bE, "\r\n")}
                }) : {name: b.name, value: c.replace(bE, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0; else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(),
                i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u,
                v = {
                    readyState: 0, setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    }, getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    }, overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    }, abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in{success: 1, error: 1, complete: 1}) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z); else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            }); else for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h],
                j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg) cg[a](0, 1)
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    } : ch, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort(); else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co,
        cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m,
                    n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }

            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        }, stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }

                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this, g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        }, show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(co), co = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a)) return d ? {top: d.top, left: d.left} : {top: 0, left: 0};
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i,
            n = d.left + l - j;
        return {top: m, left: n}
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0], d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(),
                d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
(function (g) {
    var a = "2.22";
    var b = g.browser.msie && /MSIE 6.0/.test(navigator.userAgent);

    function d() {
        if (window.console && window.console.log) {
            window.console.log("[cycle] " + Array.prototype.join.call(arguments, ""))
        }
    }

    g.fn.cycle = function (i) {
        return this.each(function () {
            i = i || {};
            if (i.constructor == String) {
                switch (i) {
                    case"stop":
                        if (this.cycleTimeout) {
                            clearTimeout(this.cycleTimeout)
                        }
                        this.cycleTimeout = 0;
                        return;
                    case"pause":
                        this.cyclePause = 1;
                        return;
                    case"resume":
                        this.cyclePause = 0;
                        return;
                    default:
                        i = {fx: i}
                }
            }
            if (this.cycleTimeout) {
                clearTimeout(this.cycleTimeout)
            }
            this.cycleTimeout = 0;
            this.cyclePause = 0;
            var p = g(this);
            var n = i.slideExpr ? g(i.slideExpr, this) : p.children();
            var k = n.get();
            if (k.length < 2) {
                d("terminating; too few slides: " + k.length);
                return
            }
            var j = g.extend({}, g.fn.cycle.defaults, i || {}, g.metadata ? p.metadata() : g.meta ? p.data() : {});
            if (j.autostop) {
                j.countdown = j.autostopCount || k.length
            }
            j.before = j.before ? [j.before] : [];
            j.after = j.after ? [j.after] : [];
            j.after.unshift(function () {
                j.busy = 0
            });
            if (j.continuous) {
                j.after.push(function () {
                    e(k, j, 0, !j.rev)
                })
            }
            if (b && j.cleartype && !j.cleartypeNoBg) {
                c(n)
            }
            var r = this.className;
            j.width = parseInt((r.match(/w:(\d+)/) || [])[1]) || j.width;
            j.height = parseInt((r.match(/h:(\d+)/) || [])[1]) || j.height;
            j.timeout = parseInt((r.match(/t:(\d+)/) || [])[1]) || j.timeout;
            if (p.css("position") == "static") {
                p.css("position", "relative")
            }
            if (j.width) {
                p.width(j.width)
            }
            if (j.height && j.height != "auto") {
                p.height(j.height)
            }
            if (j.random) {
                j.randomMap = [];
                for (var l = 0; l < k.length; l++) {
                    j.randomMap.push(l)
                }
                j.randomMap.sort(function (t, s) {
                    return Math.random() - 0.5
                });
                j.randomIndex = 0;
                j.startingSlide = j.randomMap[0]
            } else {
                if (j.startingSlide >= k.length) {
                    j.startingSlide = 0
                }
            }
            var m = j.startingSlide || 0;
            n.css({position: "absolute", top: 0, left: 0}).hide().each(function (s) {
                var t = m ? s >= m ? k.length - (s - m) : m - s : k.length - s;
                g(this).css("z-index", t)
            });
            g(k[m]).css("opacity", 1).show();
            if (g.browser.msie) {
                k[m].style.removeAttribute("filter")
            }
            if (j.fit && j.width) {
                n.width(j.width)
            }
            if (j.fit && j.height && j.height != "auto") {
                n.height(j.height)
            }
            if (j.pause) {
                p.hover(function () {
                    this.cyclePause = 1
                }, function () {
                    this.cyclePause = 0
                })
            }
            var q = g.fn.cycle.transitions[j.fx];
            if (g.isFunction(q)) {
                q(p, n, j)
            } else {
                if (j.fx != "custom") {
                    d("unknown transition: " + j.fx)
                }
            }
            n.each(function () {
                var s = g(this);
                this.cycleH = (j.fit && j.height) ? j.height : s.height();
                this.cycleW = (j.fit && j.width) ? j.width : s.width()
            });
            j.cssBefore = j.cssBefore || {};
            j.animIn = j.animIn || {};
            j.animOut = j.animOut || {};
            n.not(":eq(" + m + ")").css(j.cssBefore);
            if (j.cssFirst) {
                g(n[m]).css(j.cssFirst)
            }
            if (j.timeout) {
                if (j.speed.constructor == String) {
                    j.speed = {slow: 600, fast: 200}[j.speed] || 400
                }
                if (!j.sync) {
                    j.speed = j.speed / 2
                }
                while ((j.timeout - j.speed) < 250) {
                    j.timeout += j.speed
                }
            }
            if (j.easing) {
                j.easeIn = j.easeOut = j.easing
            }
            if (!j.speedIn) {
                j.speedIn = j.speed
            }
            if (!j.speedOut) {
                j.speedOut = j.speed
            }
            j.slideCount = k.length;
            j.currSlide = m;
            if (j.random) {
                j.nextSlide = j.currSlide;
                if (++j.randomIndex == k.length) {
                    j.randomIndex = 0
                }
                j.nextSlide = j.randomMap[j.randomIndex]
            } else {
                j.nextSlide = j.startingSlide >= (k.length - 1) ? 0 : j.startingSlide + 1
            }
            var o = n[m];
            if (j.before.length) {
                j.before[0].apply(o, [o, o, j, true])
            }
            if (j.after.length > 1) {
                j.after[1].apply(o, [o, o, j, true])
            }
            if (j.click && !j.next) {
                j.next = j.click
            }
            if (j.next) {
                g(j.next).bind("click", function () {
                    return f(k, j, j.rev ? -1 : 1)
                })
            }
            if (j.prev) {
                g(j.prev).bind("click", function () {
                    return f(k, j, j.rev ? 1 : -1)
                })
            }
            if (j.pager) {
                h(k, j)
            }
            j.addSlide = function (u) {
                var t = g(u), v = t[0];
                if (!j.autostopCount) {
                    j.countdown++
                }
                k.push(v);
                if (j.els) {
                    j.els.push(v)
                }
                j.slideCount = k.length;
                t.css("position", "absolute").appendTo(p);
                if (b && j.cleartype && !j.cleartypeNoBg) {
                    c(t)
                }
                if (j.fit && j.width) {
                    t.width(j.width)
                }
                if (j.fit && j.height && j.height != "auto") {
                    n.height(j.height)
                }
                v.cycleH = (j.fit && j.height) ? j.height : t.height();
                v.cycleW = (j.fit && j.width) ? j.width : t.width();
                t.css(j.cssBefore);
                if (typeof j.onAddSlide == "function") {
                    j.onAddSlide(t)
                }
            };
            if (j.timeout || j.continuous) {
                this.cycleTimeout = setTimeout(function () {
                    e(k, j, 0, !j.rev);
                    g("#banner").find("img").eq(1).attr("src", g("#banner").find("img").eq(1).attr("lazy_src"));
                    g("#banner").find("img").eq(2).attr("src", g("#banner").find("img").eq(2).attr("lazy_src"))
                }, j.continuous ? 10 : j.timeout + (j.delay || 0))
            }
        })
    };

    function e(n, i, m, o) {
        if (i.busy) {
            return
        }
        var l = n[0].parentNode, r = n[i.currSlide], q = n[i.nextSlide];
        if (l.cycleTimeout === 0 && !m) {
            return
        }
        if (!m && !l.cyclePause && ((i.autostop && (--i.countdown <= 0)) || (i.nowrap && !i.random && i.nextSlide < i.currSlide))) {
            if (i.end) {
                i.end(i)
            }
            return
        }
        if (m || !l.cyclePause) {
            if (i.before.length) {
                g.each(i.before, function (p, s) {
                    s.apply(q, [r, q, i, o])
                })
            }
            var j = function () {
                if (g.browser.msie && i.cleartype) {
                    this.style.removeAttribute("filter")
                }
                g.each(i.after, function (p, s) {
                    s.apply(q, [r, q, i, o])
                })
            };
            if (i.nextSlide != i.currSlide) {
                i.busy = 1;
                if (i.fxFn) {
                    i.fxFn(r, q, i, j, o)
                } else {
                    if (g.isFunction(g.fn.cycle[i.fx])) {
                        g.fn.cycle[i.fx](r, q, i, j)
                    } else {
                        g.fn.cycle.custom(r, q, i, j)
                    }
                }
            }
            if (i.random) {
                i.currSlide = i.nextSlide;
                if (++i.randomIndex == n.length) {
                    i.randomIndex = 0
                }
                i.nextSlide = i.randomMap[i.randomIndex]
            } else {
                var k = (i.nextSlide + 1) == n.length;
                i.nextSlide = k ? 0 : i.nextSlide + 1;
                i.currSlide = k ? n.length - 1 : i.nextSlide - 1
            }
            if (i.pager) {
                g.fn.cycle.updateActivePagerLink(i.pager, i.currSlide)
            }
        }
        if (i.timeout && !i.continuous) {
            l.cycleTimeout = setTimeout(function () {
                e(n, i, 0, !i.rev)
            }, i.timeout)
        } else {
            if (i.continuous && l.cyclePause) {
                l.cycleTimeout = setTimeout(function () {
                    e(n, i, 0, !i.rev)
                }, 10)
            }
        }
    }

    g.fn.cycle.updateActivePagerLink = function (i, j) {
        g(i).find("a").removeClass("activeSlide").filter("a:eq(" + j + ")").addClass("activeSlide")
    };

    function f(i, j, m) {
        var l = i[0].parentNode, k = l.cycleTimeout;
        if (k) {
            clearTimeout(k);
            l.cycleTimeout = 0
        }
        j.nextSlide = j.currSlide + m;
        if (j.nextSlide < 0) {
            if (j.nowrap) {
                return false
            }
            j.nextSlide = i.length - 1
        } else {
            if (j.nextSlide >= i.length) {
                if (j.nowrap) {
                    return false
                }
                j.nextSlide = 0
            }
        }
        if (j.prevNextClick && typeof j.prevNextClick == "function") {
            j.prevNextClick(m > 0, j.nextSlide, i[j.nextSlide])
        }
        e(i, j, 1, m >= 0);
        return false
    }

    function h(j, k) {
        var i = g(k.pager);
        g.each(j, function (l, n) {
            var m = (typeof k.pagerAnchorBuilder == "function") ? g(k.pagerAnchorBuilder(l, n)) : g('<a id="menu' + l + '" href="#"></a>');
            if (m.parents("body").length == 0) {
                m.appendTo(i)
            }
            m.bind(k.pagerEvent, function () {
                k.nextSlide = l;
                var q = j[0].parentNode, o = q.cycleTimeout;
                if (o) {
                    clearTimeout(o);
                    q.cycleTimeout = 0
                }
                if (typeof k.pagerClick == "function") {
                    k.pagerClick(k.nextSlide, j[k.nextSlide])
                }
                e(j, k, 1, !k.rev);
                return false
            })
        });
        g.fn.cycle.updateActivePagerLink(k.pager, k.startingSlide)
    }

    function c(k) {
        function j(l) {
            var l = parseInt(l).toString(16);
            return l.length < 2 ? "0" + l : l
        }

        function i(n) {
            for (; n && n.nodeName.toLowerCase() != "html"; n = n.parentNode) {
                var l = g.css(n, "background-color");
                if (l.indexOf("rgb") >= 0) {
                    var m = l.match(/\d+/g);
                    return "#" + j(m[0]) + j(m[1]) + j(m[2])
                }
                if (l && l != "transparent") {
                    return l
                }
            }
            return "#ffffff"
        }

        k.each(function () {
            g(this).css("background-color", i(this))
        })
    }

    g.fn.cycle.custom = function (o, l, m, i) {
        var n = g(o), k = g(l);
        k.css(m.cssBefore);
        var j = function () {
            k.animate(m.animIn, m.speedIn, m.easeIn, i)
        };
        n.animate(m.animOut, m.speedOut, m.easeOut, function () {
            if (m.cssAfter) {
                n.css(m.cssAfter)
            }
            if (!m.sync) {
                j()
            }
        });
        if (m.sync) {
            j()
        }
    };
    g.fn.cycle.transitions = {
        fade: function (j, k, i) {
            k.not(":eq(" + i.startingSlide + ")").css("opacity", 0);
            i.before.push(function () {
                g(this).show()
            });
            i.animIn = {opacity: 1};
            i.animOut = {opacity: 0};
            i.cssBefore = {opacity: 0};
            i.cssAfter = {display: "none"}
        }
    };
    g.fn.cycle.ver = function () {
        return a
    };
    g.fn.cycle.defaults = {
        fx: "fade",
        timeout: 300000,
        continuous: 0,
        speed: 800,
        speedIn: null,
        speedOut: null,
        next: null,
        prev: null,
        prevNextClick: null,
        pager: null,
        pagerClick: null,
        pagerEvent: "click",
        pagerAnchorBuilder: null,
        before: null,
        after: null,
        end: null,
        easing: null,
        easeIn: null,
        easeOut: null,
        shuffle: null,
        animIn: null,
        animOut: null,
        cssBefore: null,
        cssAfter: null,
        fxFn: null,
        height: "auto",
        startingSlide: 0,
        sync: 1,
        random: 0,
        fit: 0,
        pause: 1,
        autostop: 0,
        autostopCount: 0,
        delay: 0,
        slideExpr: null,
        cleartype: 0,
        nowrap: 0
    }
})(jQuery);
(function (a) {
    a.fn.cycle.transitions.scrollLeft = function (c, d, b) {
        c.css("overflow", "hidden");
        b.before.push(function (g, e, f) {
            a(this).show();
            f.cssBefore.left = e.offsetWidth;
            f.animOut.left = 0 - g.offsetWidth
        });
        b.cssFirst = {left: 0};
        b.animIn = {left: 0}
    };
    a.fn.cycle.transitions.scrollRight = function (c, d, b) {
        c.css("overflow", "hidden");
        b.before.push(function (g, e, f) {
            a(this).show();
            f.cssBefore.left = 0 - e.offsetWidth;
            f.animOut.left = g.offsetWidth
        });
        b.cssFirst = {left: 0};
        b.animIn = {left: 0}
    };
    a.fn.cycle.transitions.scrollHorz = function (c, d, b) {
        c.css("overflow", "hidden").width();
        b.before.push(function (i, g, h, f) {
            a(this).show();
            var e = i.offsetWidth, j = g.offsetWidth;
            h.cssBefore = f ? {left: j} : {left: -j};
            h.animIn.left = 0;
            h.animOut.left = f ? -e : e;
            d.not(i).css(h.cssBefore)
        });
        b.cssFirst = {left: 0};
        b.cssAfter = {display: "none"}
    }
})(jQuery);
(function (a) {
    if (typeof this["loxia"] === "undefined") {
        var b = this;
        this.loxia = {
            global: b,
            windowFeatures: "toolbar=no, menubar=no,scrollbars=yes, resizable=no,location=no, status=no",
            isString: function (c) {
                return typeof c === "string" || c instanceof String
            },
            formatNumber: function (f) {
                f = f + "";
                var c = f.split(".");
                var e = c[0], d = c.length > 1 ? "." + c[1] : "";
                e = e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                return e + d
            },
            getViewport: function () {
                var c, d;
                if (typeof window.innerWidth != "undefined") {
                    c = window.innerWidth, d = window.innerHeight
                } else {
                    if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
                        c = document.documentElement.clientWidth, d = document.documentElement.clientHeight
                    } else {
                        c = document.getElementsByTagName("body")[0].clientWidth, d = document.getElementsByTagName("body")[0].clientHeight
                    }
                }
                return {width: c, height: d}
            },
            center: function (c, e) {
                var j = {}, h = 0, g = 0, i = 0, f = 0;
                if (e) {
                    j.width = a(e).width();
                    j.height = a(e).height()
                } else {
                    j = this.getViewport();
                    i = a("html").scrollLeft();
                    f = a("html").scrollTop()
                }
                if (e) {
                    g = a(e).offset().left;
                    h = a(e).offset().top
                }
                a(c).css({
                    position: "absolute",
                    left: (i + g + (j.width - a(c).width()) / 2) + "px",
                    top: (f + h + (j.height - a(c).height()) / 2) + "px"
                })
            },
            encodeUrl: function (f, d) {
                var e = f.indexOf("?");
                if (e === -1) {
                    if (d === undefined || d) {
                        return this.getTimeUrl(f)
                    } else {
                        return f
                    }
                }
                var c = f.substring(0, e + 1), j = f.substring(e + 1).split("&");
                for (var g = 0; g < j.length; g++) {
                    if (g > 0) {
                        c += "&"
                    }
                    var h = j[g].split("=");
                    c += h[0] + "=" + encodeURIComponent(h[1])
                }
                if (d === undefined || d) {
                    c = this.getTimeUrl(c)
                }
                return c
            },
            getTimeUrl: function (c) {
                var d = (new Date()).getTime();
                if (c.indexOf("loxiaflag=") >= 0) {
                    c = c.replace(/loxiaflag=\d{13}/, "loxiaflag=" + d.toString());
                    return c
                }
                c += (/\?/.test(c)) ? "&" : "?";
                return (c + "loxiaflag=" + d.toString())
            },
            getObject: function (f, e) {
                e = e || b;
                var g = f.split(".");
                for (var d = 0, c; e && (c = g[d]); d++) {
                    e = (c in e ? e[c] : undefined)
                }
                return e
            },
            setObject: function (g, f, e) {
                e = e || b;
                var j = g.split(".");
                var h = j.pop();
                for (var d = 0, c; e && (c = j[d]); d++) {
                    e = (c in e ? e[c] : e[c] = {})
                }
                return (e && h ? (e[h] = f) : undefined)
            },
            hitch: function (c, d) {
                if (!d) {
                    d = c;
                    c = null
                }
                if (this.isString(d)) {
                    c = c || b;
                    if (!c[d]) {
                        throw (['hitch: scope["', d, '"] is null (scope="', c, '")'].join(""))
                    }
                    return function () {
                        return c[d].apply(c, arguments || [])
                    }
                }
                return !c ? d : function () {
                    return d.apply(c, arguments || [])
                }
            },
            _ajaxSetValue: function (e, c, d) {
                if (d === null) {
                    return
                }
                var f = e[c];
                if (this.isString(f)) {
                    e[c] = [f, d]
                } else {
                    if (a.isArray(f)) {
                        e[c].push(d)
                    } else {
                        e[c] = d
                    }
                }
            },
            _ajaxFieldValue: function (e) {
                var c = null, d = (e.type || "").toLowerCase();
                if (e.name && d && !e.disabled) {
                    if (d === "radio" || d === "checkbox") {
                        if (e.checked) {
                            c = e.value
                        }
                    } else {
                        if (e.multiple) {
                            c = [];
                            a("option", e).each(function () {
                                if (this.selected) {
                                    c.push(this.value)
                                }
                            })
                        } else {
                            c = e.value
                        }
                    }
                }
                return c
            },
            _ajaxFormToObj: function (e) {
                if (!e) {
                    return {}
                }
                e = this.isString(e) ? a("#" + e).get(0) : e;
                var d = {}, f = this, c = "file|submit|image|reset|button|";
                a.each(e.elements, function (h, k) {
                    var g = k.name, j = (k.type || "").toLowerCase();
                    if (g && j && c.indexOf(j) === -1 && !k.disabled) {
                        f._ajaxSetValue(d, g, f._ajaxFieldValue(k))
                    }
                });
                return d
            },
            _ajaxOptions: function (e, f, d) {
                var c = {};
                if (arguments.length === 1) {
                    c = e
                } else {
                    c = d || {};
                    c.url = e;
                    if (f) {
                        if (this.isString(f)) {
                            a.extend(c, {data: this._ajaxFormToObj(f)})
                        } else {
                            a.extend(c, {data: f})
                        }
                    }
                }
                return c
            },
            asyncXhr: function (d, e, c) {
                a.ajax(this._ajaxOptions(d, e, c))
            },
            asyncXhrGet: function (e, f, d) {
                var c = this._ajaxOptions(e, f, d);
                c.type = "GET";
                a.ajax(c)
            },
            asyncXhrPost: function (e, f, d) {
                var c = this._ajaxOptions(e, f, d);
                c.type = "POST";
                a.ajax(c)
            },
            syncXhr: function (e, g, d) {
                var f, c = this._ajaxOptions(e, g, d);
                a.extend(c, {
                    async: false, success: function (h, i) {
                        f = h
                    }, error: function (i, k, j) {
                        f = {};
                        var h = {};
                        h.message = "Error occurs when fetching data from url:" + this.url;
                        h.cause = k ? k : j;
                        f.exception = h
                    }
                });
                a.ajax(c);
                return f
            },
            syncXhrGet: function (d, e, c) {
                if (arguments.length === 1) {
                    d.type = "GET"
                } else {
                    c = a.extend({}, c, {type: "GET"})
                }
                return this.syncXhr(d, e, c)
            },
            syncXhrPost: function (d, e, c) {
                if (arguments.length === 1) {
                    d.type = "POST"
                } else {
                    c = a.extend({}, c, {type: "POST"})
                }
                return this.syncXhr(d, e, c)
            },
            openPage: function (c, f, e, d) {
                f = f || "_blank";
                e = e || this.windowFeatures;
                if (d && d.length && d.length === 2) {
                    e = "width=" + d[0] + ",height=" + d[1] + "," + e
                }
                return window.open(this.encodeUrl(c), f, e)
            },
            fixPng: function (f, d) {
                var e = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
                var c = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
                if (!a.browser.msie || !(e || c)) {
                    return
                }
                f = f || document;
                d = d || a(document.body).attr("root");
                a(f).find("img[src$=.png]").each(function () {
                    a(this).attr("width", a(this).width());
                    a(this).attr("height", a(this).height());
                    var n = "";
                    var i = "";
                    var h = (a(this).attr("id")) ? ' id="' + a(this).attr("id") + '" ' : "";
                    var o = (a(this).attr("class")) ? ' class="' + a(this).attr("class") + '" ' : "";
                    var k = (a(this).attr("title")) ? ' title="' + a(this).attr("title") + '" ' : "";
                    var l = (a(this).attr("alt")) ? ' alt="' + a(this).attr("alt") + '" ' : "";
                    var j = (a(this).attr("align")) ? "float:" + a(this).attr("align") + ";" : "";
                    var g = (a(this).parent().attr("href")) ? "cursor:hand;" : "";
                    if (this.style.border) {
                        n += "border:" + this.style.border + ";";
                        this.style.border = ""
                    }
                    if (this.style.padding) {
                        n += "padding:" + this.style.padding + ";";
                        this.style.padding = ""
                    }
                    if (this.style.margin) {
                        n += "margin:" + this.style.margin + ";";
                        this.style.margin = ""
                    }
                    var m = (this.style.cssText);
                    i += '<img src="' + domain_image + '/images/transparent.gif"';
                    if (h) {
                        i += h
                    }
                    if (o) {
                        i += o
                    }
                    if (k) {
                        i += k
                    }
                    if (l) {
                        i += l
                    }
                    i += ' style="background:transparent;' + j + g;
                    i += "width:" + a(this).width() + "px;height:" + a(this).height() + "px;";
                    i += "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a(this).attr("src") + "', sizingMethod='scale');";
                    i += m + '" />';
                    a(this).after(i);
                    a(this).remove()
                })
            }
        }
    }
})(jQuery);
;window.Modernizr = function (a, b, c) {
    function A(a) {
        j.cssText = a
    }

    function B(a, b) {
        return A(n.join(a + ";") + (b || ""))
    }

    function C(a, b) {
        return typeof a === b
    }

    function D(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function E(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!D(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function F(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function G(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), F(e, b, c))
    }

    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k,
        l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "),
        q = o.toLowerCase().split(" "), r = {}, s = {}, t = {}, u = [], v = u.slice, w, x = function (a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
            if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
        }, y = {}.hasOwnProperty, z;
    !C(y, "undefined") && !C(y.call, "undefined") ? z = function (a, b) {
        return y.call(a, b)
    } : z = function (a, b) {
        return b in a && C(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = v.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(v.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(v.call(arguments)))
        };
        return e
    }), r.flexbox = function () {
        return G("flexWrap")
    }, r.borderradius = function () {
        return G("borderRadius")
    }, r.boxshadow = function () {
        return G("boxShadow")
    }, r.opacity = function () {
        return B("opacity:.55"), /^0.55$/.test(j.opacity)
    }, r.generatedcontent = function () {
        var a;
        return x(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
            a = b.offsetHeight >= 3
        }), a
    };
    for (var H in r) z(r, H) && (w = H.toLowerCase(), e[w] = r[H](), u.push((e[w] ? "" : "no-") + w));
    return e.addTest = function (a, b) {
        if (typeof a == "object") for (var d in a) z(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, A(""), i = k = null, function (a, b) {
        function l(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function n(a) {
            var b = j[a[h]];
            return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }

        function o(a, c, d) {
            c || (c = b);
            if (k) return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
            a || (a = b);
            if (k) return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
            for (; e < g; e++) d.createElement(f[e]);
            return d
        }

        function q(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }

        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }

        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g, h = "_html5shiv", i = 0, j = {}, k;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0, k = !0
            }
        })();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s, r(b)
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.testProp = function (a) {
        return E([a])
    }, e.testAllProps = G, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [],
        q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, x = [], y = {}, z = {
            timeout: function (a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f,
                g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () {
                        var b = 0, c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b
                    }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else !c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};

(function (a) {
    a.tiny = a.tiny || {};
    a.tiny.scrollbar = {
        options: {
            axis: "y",
            wheel: 40,
            scroll: true,
            lockscroll: true,
            size: "auto",
            sizethumb: "auto",
            invertscroll: false
        }
    };
    a.fn.tinyscrollbar = function (d) {
        var c = a.extend({},
            a.tiny.scrollbar.options, d);
        this.each(function () {
            a(this).data("tsb", new b(a(this), c))
        });
        return this
    };
    a.fn.tinyscrollbar_update = function (c) {
        return a(this).data("tsb").update(c)
    };

    function b(q, g) {
        var k = this,
            t = q,
            j = {
                obj: a(".viewport", q)
            },
            h = {
                obj: a(".overview", q)
            },
            d = {
                obj: a(".scrollbar", q)
            },
            m = {
                obj: a(".track", d.obj)
            },
            p = {
                obj: a(".thumb", d.obj)
            },
            l = g.axis === "x",
            n = l ? "left" : "top",
            v = l ? "Width" : "Height",
            r = 0,
            y = {
                start: 0,
                now: 0
            },
            o = {},
            e = "ontouchstart" in document.documentElement;

        function c() {
            k.update();
            s();
            return k
        }

        this.update = function (z) {
            j[g.axis] = j.obj[0]["offset" + v];
            h[g.axis] = h.obj[0]["scroll" + v];
            h.ratio = j[g.axis] / h[g.axis];
            d.obj.toggleClass("disable", h.ratio >= 1);
            m[g.axis] = g.size === "auto" ? j[g.axis] : g.size;
            p[g.axis] = Math.min(m[g.axis], Math.max(0, (g.sizethumb === "auto" ? (m[g.axis] * h.ratio) : g.sizethumb)));
            d.ratio = g.sizethumb === "auto" ? (h[g.axis] / m[g.axis]) : (h[g.axis] - j[g.axis]) / (m[g.axis] - p[g.axis]);
            r = (z === "relative" && h.ratio <= 1) ? Math.min((h[g.axis] - j[g.axis]), Math.max(0, r)) : 0;
            r = (z === "bottom" && h.ratio <= 1) ? (h[g.axis] - j[g.axis]) : isNaN(parseInt(z, 10)) ? r : parseInt(z, 10);
            w()
        };

        function w() {
            var z = v.toLowerCase();
            p.obj.css(n, r / d.ratio);
            h.obj.css(n, -r);
            o.start = p.obj.offset()[n];
            d.obj.css(z, m[g.axis]);
            m.obj.css(z, m[g.axis]);
            p.obj.css(z, p[g.axis])
        }

        function s() {
            if (!e) {
                p.obj.bind("mousedown", i);
                m.obj.bind("mouseup", u)
            } else {
                j.obj[0].ontouchstart = function (z) {
                    if (1 === z.touches.length) {
                        i(z.touches[0]);
                        z.stopPropagation()
                    }
                }
            }
            if (g.scroll && window.addEventListener) {
                t[0].addEventListener("DOMMouseScroll", x, false);
                t[0].addEventListener("mousewheel", x, false);
                t[0].addEventListener("MozMousePixelScroll",
                    function (z) {
                        z.preventDefault()
                    },
                    false)
            } else {
                if (g.scroll) {
                    t[0].onmousewheel = x
                }
            }
        }

        function i(A) {
            a("body").addClass("noSelect");
            var z = parseInt(p.obj.css(n), 10);
            o.start = l ? A.pageX : A.pageY;
            y.start = z == "auto" ? 0 : z;
            if (!e) {
                a(document).bind("mousemove", u);
                a(document).bind("mouseup", f);
                p.obj.bind("mouseup", f)
            } else {
                document.ontouchmove = function (B) {
                    B.preventDefault();
                    u(B.touches[0])
                };
                document.ontouchend = f
            }
        }

        function x(B) {
            if (h.ratio < 1) {
                var A = B || window.event,
                    z = A.wheelDelta ? A.wheelDelta / 120 : -A.detail / 3;
                r -= z * g.wheel;
                r = Math.min((h[g.axis] - j[g.axis]), Math.max(0, r));
                p.obj.css(n, r / d.ratio);
                h.obj.css(n, -r);
                if (g.lockscroll || (r !== (h[g.axis] - j[g.axis]) && r !== 0)) {
                    A = a.event.fix(A);
                    A.preventDefault()
                }
            }
        }

        function u(z) {
            if (h.ratio < 1) {
                if (g.invertscroll && e) {
                    y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + (o.start - (l ? z.pageX : z.pageY)))))
                } else {
                    y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + ((l ? z.pageX : z.pageY) - o.start))))
                }
                r = y.now * d.ratio;
                h.obj.css(n, -r);
                p.obj.css(n, y.now)
            }
        }

        function f() {
            a("body").removeClass("noSelect");
            a(document).unbind("mousemove", u);
            a(document).unbind("mouseup", f);
            p.obj.unbind("mouseup", f);
            document.ontouchmove = document.ontouchend = null
        }

        return c()
    }
}(jQuery));
(function (a) {
    a.fn.lazyload = function (c) {
        var e = {threshold: 400, failurelimit: 2, event: "scroll", effect: "show", container: window};
        if (c) {
            a.extend(e, c)
        }
        var f = this;
        if ("scroll" == e.event) {
            a(e.container).bind("scroll", function (i) {
                var g = 0;
                f.each(function () {
                    if (a.abovethetop(this, e) || a.leftofbegin(this, e)) {
                    } else {
                        if (!a.belowthefold(this, e) && !a.rightoffold(this, e)) {
                            if (a.browser.msie) {
                                a(this).show();
                                a(this).css("z-index", "1")
                            }
                            a(this).trigger("appear")
                        } else {
                            if (g++ > e.failurelimit) {
                                return false
                            }
                        }
                    }
                });
                var h = a.grep(f, function (j) {
                    return !j.loaded
                });
                f = a(h)
            })
        }

        function b(g) {
            var i = a(g).parent(), h = i.width(), j = i.height();
            return {width: h, height: j, parent: i}
        }

        var d = window.dateType ? false : true;
        this.each(function () {
            var h = this, g = b(h);
            if (undefined == a(h).attr("original")) {
                a(h).attr("original", a(h).attr("lazy_src"))
            }
            if ("scroll" != e.event || undefined == a(h).attr("src") || e.placeholder == a(h).attr("src") || (a.abovethetop(h, e) || a.leftofbegin(h, e) || a.belowthefold(h, e) || a.rightoffold(h, e))) {
                var k = e.placeholder;
                if (k) {
                    var i = (g.width - 23) / 2, j = (g.height - 5) / 2;
                    a(h).attr("src", k)
                } else {
                    a(h).removeAttr("src")
                }
                h.loaded = false
            } else {
                h.loaded = true
            }
            a(h).one("appear", function () {
                if (!this.loaded) {
                    a("<img />").bind("load", function () {
                        a(h).hide().attr("src", a(h).attr("lazy_src"))[e.effect](e.effectspeed);
                        h.loaded = true
                    }).attr("src", a(h).attr("original"))
                }
            });
            if ("scroll" != e.event) {
                a(h).bind(e.event, function (l) {
                    if (!h.loaded) {
                        a(h).trigger("appear")
                    }
                })
            }
        });
        if (d) {
            a(e.container).trigger(e.event);
            window.dateType = true
        }
        return this
    };
    a.belowthefold = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).height() + a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top + a(d.container).height()
        }
        return b <= a(c).offset().top - d.threshold
    };
    a.rightoffold = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).width() + a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left + a(d.container).width()
        }
        return b <= a(c).offset().left - d.threshold
    };
    a.abovethetop = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top
        }
        return b >= a(c).offset().top + d.threshold + a(c).height()
    };
    a.leftofbegin = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left
        }
        return b >= a(c).offset().left + d.threshold + a(c).width()
    };
    a.extend(a.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery);
var imgReady = (function () {
    var d = [], c = null, b = function () {
        var e = 0;
        for (; e < d.length; e++) {
            d[e].end ? d.splice(e--, 1) : d[e]()
        }
        !d.length && a()
    }, a = function () {
        clearInterval(c);
        c = null
    };
    return function (f, k, m, j) {
        var l, g, n, i, e, h = new Image();
        h.src = f;
        if (h.complete) {
            k.call(h);
            m && m.call(h);
            return
        }
        g = h.width;
        n = h.height;
        h.onerror = function () {
            j && j.call(h);
            l.end = true;
            h = h.onload = h.onerror = null
        };
        l = function () {
            i = h.width;
            e = h.height;
            k.call(h);
            l.end = true
        };
        l();
        h.onload = function () {
            !l.end && l();
            m && m.call(h);
            h = h.onload = h.onerror = null
        };
        if (!l.end) {
            d.push(l);
            if (c === null) {
                c = setInterval(b, 40)
            }
        }
    }
})();
(function (a) {
    a(function () {
        var c = 0;
        var b = 0;
        for (c = 0; c <= 100; c++) {
            for (b = 0; b <= 22; b++) {
                a(".bmk_a").eq(c * 22 + b).css({
                    left: b * 141.4213562373095 - 51 + "px",
                    top: c * 141.4213562373095 * 0.997 - 51 + "px"
                })
            }
        }
        a(".bmk").each(function () {
            var d = 0;
            a(this).mouseenter(function () {
                d++;
                var f = a(this);
                if (d % 2 == 1) {
                    var g = 1;
                    var e = setInterval(function () {
                        ++g;
                        if (g > 12) {
                            clearInterval(e);
                            return false
                        }
                        if (f.hasClass("bmk_a")) {
                            f.removeClass("img_" + (g - 1));
                            f.addClass("img_" + g)
                        } else {
                            f.removeClass("img" + 1);
                            f.removeClass("img" + 12);
                            f.removeClass("img" + (g - 1));
                            f.addClass("img" + g)
                        }
                    }, 10)
                } else {
                    var g = 12;
                    var e = setInterval(function () {
                        --g;
                        if (g < 1) {
                            clearInterval(e);
                            return false
                        }
                        if (f.hasClass("bmk_a")) {
                            f.removeClass("img_" + (g + 1));
                            f.addClass("img_" + g)
                        } else {
                            f.removeClass("img" + 1);
                            f.removeClass("img" + 12);
                            f.removeClass("img" + (g + 1));
                            f.addClass("img" + g)
                        }
                    }, 10)
                }
            })
        });
        a(".max,.kv_up,.text_disappear").click(function () {
            a(".max").fadeOut(1000);
            a(".kv_up").fadeOut(1000);
            a(".text_disappear").fadeOut(1000)
        })
    })
})(jQuery);
var $j = jQuery.noConflict();
var s_account = "";
if (window.location.host == "www.converse.com.cn" || window.location.host == "m.converse.com.cn") {
    s_account = "nikeconversechina"
} else {
    s_account = "nikeconversechinadev"
}
var s = s_gi(s_account);
s.charSet = "UTF-8";
s.cookieDomainPeriods = 3;
s.currencyCode = "CNY";
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
s.linkInternalFilters = "javascript:,.converse.com,.converse.com.cn,.nike.com,.weibo.com,.t.qq.com,.renren.com,.douban.com";
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.siteID = "";
s.defaultPage = "homepage";
s.queryVarsList = "c1,page,sort";
s.pathExcludeDelim = ";";
s.pathConcatDelim = " > ";
s.pathExcludeList = "";
s.usePlugins = true;

function s_getObjectID(c) {
    var d = c.href;
    return d
}

s.getObjectID = s_getObjectID;
var i = 1;

function s_doPlugins(t) {
    t.prop13 = "apac";
    t.prop14 = "cn";
    t.prop15 = "cn_zh";
    t.prop21 = "ecommerce";
    t.prop12 = "online store";
    if (document.cookie.indexOf("source=emar") != -1 && document.cookie.indexOf("channel=cps") != -1) {
        t.eVar54 = "CPS traffic"
    } else {
        t.eVar54 = "non CPS traffic"
    }
    if (!t.pageType && !t.pageName) {
        t.pageName = t.getPageName();
        t.pageName = t.pageName.toLowerCase()
    }
    if (t.pageName && t.pageName != "") {
        var C = t.pageName.split(" > ");
        var v = C[0];
        var w = C[1];
        var x = C[2];
        var y = C[3];
        var z = C[4];
        var B = C[5];
        if (v && !t.channel) {
            t.channel = v;
            t.channel = t.channel.toLowerCase()
        }
        if (v && w && !t.prop18) {
            t.prop18 = v + " > " + w;
            t.prop18 = t.prop18.toLowerCase()
        }
        if (w && x && !t.prop19) {
            t.prop19 = v + " > " + w + " > " + x;
            t.prop19 = t.prop19.toLowerCase()
        }
    }
    if (s_account) {
        t.server = s_account
    }
    t.prop24 = "D=User-Agent";
    t.prop26 = t.eVar5 = document.location;
    if (t.getQueryParam("cid")) {
        t.campaign = t.getValOnce(t.getQueryParam("cid", "cid_cookie", 0));
        t.campaign = t.campaign.toLowerCase();
        t.prop28 = "D=v0";
        t.eVar6 = "D=v0";
        t.eVar17 = t.crossVisitParticipation(t.campaign, "s_cpm", "90", "5", " > ", "");
        t.clickThruQuality("cid", "event50", "event51");
        t.prop29 = t.campaign + "|" + t.pageName
    }

    function H() {
        var c = {}, a = location.search.substring(1), b = /([^&=]+)=([^&]*)/g, d;
        while (d = b.exec(a)) {
            c[decodeURIComponent(d[1])] = decodeURIComponent(d[2])
        }
        return c
    }

    var u = ["baidu", "sogou", "sohu", "zhongsou", "soso", "yahoo", "google", "bing"];
    var I = ["kaixin", "renren", "douban", "myspace", "facebook", "51.com", "xici", "daqi", "19lou", "weibo", "bbs.ifeng", "qq", "blog.sina", "t.sina.com.cn"];
    var G = H()["cid"];
    if (G != undefined) {
        switch (G) {
            case"eml":
                t.eVar29 = "email";
                break;
            case"ban":
                t.eVar29 = "display";
                break;
            case"sem":
                t.eVar29 = "sem";
                break;
            case"aff ":
                t.eVar29 = "affiliate";
                break
        }
    } else {
        var D = false;
        var A = document.referrer;
        if (A != "") {
            for (var F = 0; F < u.length; F++) {
                if (A.indexOf(u[F]) != -1) {
                    t.eVar29 = "seo";
                    D = true;
                    break
                }
            }
            if (!D) {
                for (var F = 0; F < I.length; F++) {
                    if (A.indexOf(I[F]) != -1) {
                        t.eVar29 = "social";
                        D = true;
                        break
                    }
                }
            }
            if (!D) {
                t.eVar29 = "referral"
            }
        } else {
            t.eVar29 = "direct"
        }
    }
    if (t.eVar29) {
        t.prop6 = t.eVar35 = "D=v29";
        t.eVar8 = t.crossVisitParticipation(t.eVar29, "s_source", "90", "5", " > ", "")
    }
    t.prop32 = t.eVar36 = "D=oid";
    t.prop30 = t.getQueryParam("sort");
    if (t.getQueryParam("iid")) {
        t.eVar14 = t.getValOnce(t.getQueryParam("iid", "iid_cookie", 0));
        t.eVar14 = t.eVar14.toLowerCase();
        t.events = t.apl(t.events, "event42", ",", 1)
    }
    if (t.prop10) {
        t.events = "event3";
        t.eVar11 = "D=c10";
        t.prop17 = "internal search > no results";
        t.eVar13 = "D=c17";
        t.eVar12 = "+1"
    }
    if (t.prop11) {
        t.events = "event3";
        t.eVar11 = "D=c11";
        t.prop17 = "internal search > results";
        t.eVar13 = "D=c17";
        t.eVar12 = "+1"
    }
    if (t.prop31) {
        t.eVar1 = "D=c31"
    }
    if (t.purchaseID) {
        t.eVar10 = t.purchaseID
    }
    t.prop33 = t.getDaysSinceLastVisit("s_lv");
    t.prop34 = t.getNewRepeat();
    t.prop35 = t.getVisitNum();
    if (t.prop33) {
        t.eVar16 = t.getValOnce(t.prop33, "s_var_16", 0)
    }
    if (t.prop34) {
        t.eVar18 = t.getValOnce(t.prop34, "s_var_18", 0)
    }
    if (t.prop35) {
        t.eVar19 = t.getValOnce(t.prop35, "s_var_19", 0)
    }
    if (t.eVar34) {
        t.eVar34 = t.getValOnce(t.eVar34, "e_var_34", 0)
    }
    var J = new Date();
    var E = J.getFullYear();
    s_hour = t.getTimeParting("h", "+8", E);
    s_day = t.getTimeParting("d", "+8", E);
    t.prop8 = t.getTimeParting("w", "+8", E);
    s_daypart = s_day + "|" + s_hour;
    t.prop7 = s_daypart.toLowerCase();
    if (t.prop7) {
        t.eVar31 = "D=c7"
    }
    if (t.prop8) {
        t.eVar30 = "D=c8"
    }
    if (t.eVar18 == "Repeat") {
        t.prop1 = t.getAndPersistValue(t.eVar18, "repeat_path", 0) + ": " + t.pageName;
        t.prop1 = t.prop1.toLowerCase()
    }
    if (t.eVar18 == "New") {
        t.prop2 = t.getAndPersistValue(t.eVar18, "new_path", 0) + ": " + t.pageName;
        t.prop2 = t.prop2.toLowerCase()
    }
    if (t.pageType) {
        t.pageName = "";
        t.channel = ""
    }
    if (t.eVar4) {
        t.eVar4 = t.getValOnce(t.eVar4, "s_var_4", 0)
    }
    if (t.eVar1) {
        t.eVar1 = t.getValOnce(t.eVar1, "s_var_1", 0)
    }
    if (t.eVar34) {
        t.eVar34 = t.getValOnce(t.eVar34, "s_var_34", 0)
    }
    t.events = t.apl(t.events, "event1", ",", 1);
    if (t.events) {
        if (t.events.indexOf("scOpen") > -1) {
            t.ttc = "start"
        }
        if (t.events.indexOf("purchase") > -1) {
            t.ttc = "stop"
        }
        t.eVar7 = t.getTimeToComplete(t.ttc, "ttc", 0)
    }
    t.prop5 = t.getPreviousValue(t.pageName, "gpv_pn");
    t.setupDynamicObjectIDs();
    t.events = t.getCartOpen("s_scOpen");
    t.events = t.resetGetCartOpen()
}

s.doPlugins = s_doPlugins;
s.getPageName = new Function("u", "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s.queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.substring(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.indexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.defaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p.substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x;z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.substring(x+1)}return n");
s.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
s.getCartOpen = new Function("c", "var s=this,t=new Date,e=s.events?s.events:'',i=0;t.setTime(t.getTime()+1800000);if(s.c_r(c)||e.indexOf('scOpen')>-1){if(!s.c_w(c,1,t)){s.c_w(c,1,0)}}else{if(e.indexOf('scAdd')>-1){if(s.c_w(c,1,t)){i=1}else if(s.c_w(c,1,0)){i=1}}}if(i){e=e+',scOpen'}return e");
s.resetGetCartOpen = new Function("var s=this,t=new Date,e=s.events?s.events:'';t.setTime(t.getTime()+10000);if(e.indexOf('purchase')>-1){if(s.c_r('s_scOpen')||e.indexOf('scOpen')>-1){if(!s.c_w('s_scOpen','',t)){s.c_w('s_scOpen','',0);}}}return e");
s.getAndPersistValue = new Function("v", "c", "e", "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
s.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.getTimeToComplete = new Function("v", "cn", "e", "var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s.c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th=3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un='hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='seconds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
s.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L");
s.p_c = new Function("v", "c", "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.length:x).toLowerCase()?v:0");
s.p_gh = new Function("var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot(o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
s.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
s.downloadLinkHandler = new Function("p", "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
s.linkHandler = new Function("p", "t", "var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkName=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn = new Function("t", "h", "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;");
s.setupDynamicObjectIDs = new Function("var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,false);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semaphore=1}");
s.setOIDs = new Function("e", "var s=s_c_il[" + s._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i,a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.repl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0)x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this.s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");
s.getVisitNum = new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");
s.getTimeParting = new Function("t", "z", "y", "dc=new Date('1/1/2000');var f=15;var ne=8;if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay();gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>15&&thismin<30){mint='15'}if(thismin>30&&thismin<45){mint='30'}if(thismin>45&&thismin<60){mint='45'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return timestring}if(t=='d'){return daystring};if(t=='w'){return endstring}}};");
s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.events+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tcth_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct,0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev+cp_ev;}}}");
s.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}");
s.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
s.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");
s.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;");
s.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
s.dc = "112";
s.visitorNamespace = "converse";
s.visitorMigrationKey = "4DCC71DA";
var s_code = "", s_objectID;

function s_gi(u, n, A) {
    var l = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?decodeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
        c = window, w = c.s_c_il, B = navigator, D = B.userAgent, a = B.appVersion, m = a.indexOf("MSIE "),
        z = D.indexOf("Netscape6/"), e, v, C;
    if (u) {
        u = u.toLowerCase();
        if (w) {
            for (v = 0; v < w.length; v++) {
                C = w[v];
                if (!C._c || C._c == "s_c") {
                    if (C.oun == u) {
                        return C
                    } else {
                        if (C.fs && C.sa && C.fs(C.oun, u)) {
                            C.sa(u);
                            return C
                        }
                    }
                }
            }
        }
    }
    c.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    c.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    c.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    c.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    c.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    c.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    c.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");
    c.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    l = s_d(l);
    if (m > 0) {
        e = parseInt(v = a.substring(m + 5));
        if (e > 3) {
            e = parseFloat(v)
        }
    } else {
        if (z > 0) {
            e = parseFloat(D.substring(z + 10))
        } else {
            e = parseFloat(a)
        }
    }
    if (e >= 5 && a.indexOf("Opera") < 0 && D.indexOf("Opera") < 0) {
        c.s_c = new Function("un", "pg", "ss", "var s=this;" + l);
        return new s_c(u, n, A)
    } else {
        C = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(l) + ";return s")
    }
    return C(u, n, A)
};
(function (p) {
    if (typeof p.RSAUtils === "undefined") {
        var k = p.RSAUtils = {}
    }
    var o = 2;
    var e = 16;
    var c = e;
    var b = 1 << 16;
    var z = b >>> 1;
    var l = b * b;
    var h = b - 1;
    var A = 9999999999999998;
    var m;
    var g;
    var t, a;
    var v = p.BigInt = function (B) {
        if (typeof B == "boolean" && B == true) {
            this.digits = null
        } else {
            this.digits = g.slice(0)
        }
        this.isNeg = false
    };
    k.setMaxDigits = function (C) {
        m = C;
        g = new Array(m);
        for (var B = 0; B < g.length; B++) {
            g[B] = 0
        }
        t = new v();
        a = new v();
        a.digits[0] = 1
    };
    k.setMaxDigits(20);
    var q = 15;
    k.biFromNumber = function (D) {
        var B = new v();
        B.isNeg = D < 0;
        D = Math.abs(D);
        var C = 0;
        while (D > 0) {
            B.digits[C++] = D & h;
            D = Math.floor(D / b)
        }
        return B
    };
    var r = k.biFromNumber(1000000000000000);
    k.biFromDecimal = function (F) {
        var E = F.charAt(0) == "-";
        var D = E ? 1 : 0;
        var B;
        while (D < F.length && F.charAt(D) == "0") {
            ++D
        }
        if (D == F.length) {
            B = new v()
        } else {
            var C = F.length - D;
            var G = C % q;
            if (G == 0) {
                G = q
            }
            B = k.biFromNumber(Number(F.substr(D, G)));
            D += G;
            while (D < F.length) {
                B = k.biAdd(k.biMultiply(B, r), k.biFromNumber(Number(F.substr(D, q))));
                D += q
            }
            B.isNeg = E
        }
        return B
    };
    k.biCopy = function (C) {
        var B = new v(true);
        B.digits = C.digits.slice(0);
        B.isNeg = C.isNeg;
        return B
    };
    k.reverseStr = function (D) {
        var B = "";
        for (var C = D.length - 1; C > -1; --C) {
            B += D.charAt(C)
        }
        return B
    };
    var x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    k.biToString = function (D, F) {
        var C = new v();
        C.digits[0] = F;
        var E = k.biDivideModulo(D, C);
        var B = x[E[1].digits[0]];
        while (k.biCompare(E[0], t) == 1) {
            E = k.biDivideModulo(E[0], C);
            digit = E[1].digits[0];
            B += x[E[1].digits[0]]
        }
        return (D.isNeg ? "-" : "") + k.reverseStr(B)
    };
    k.biToDecimal = function (D) {
        var C = new v();
        C.digits[0] = 10;
        var E = k.biDivideModulo(D, C);
        var B = String(E[1].digits[0]);
        while (k.biCompare(E[0], t) == 1) {
            E = k.biDivideModulo(E[0], C);
            B += String(E[1].digits[0])
        }
        return (D.isNeg ? "-" : "") + k.reverseStr(B)
    };
    var w = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    k.digitToHex = function (D) {
        var C = 15;
        var B = "";
        for (i = 0; i < 4; ++i) {
            B += w[D & C];
            D >>>= 4
        }
        return k.reverseStr(B)
    };
    k.biToHex = function (C) {
        var B = "";
        var E = k.biHighIndex(C);
        for (var D = k.biHighIndex(C); D > -1; --D) {
            B += k.digitToHex(C.digits[D])
        }
        return B
    };
    k.charToHex = function (I) {
        var D = 48;
        var C = D + 9;
        var E = 97;
        var H = E + 25;
        var G = 65;
        var F = 65 + 25;
        var B;
        if (I >= D && I <= C) {
            B = I - D
        } else {
            if (I >= G && I <= F) {
                B = 10 + I - G
            } else {
                if (I >= E && I <= H) {
                    B = 10 + I - E
                } else {
                    B = 0
                }
            }
        }
        return B
    };
    k.hexToDigit = function (E) {
        var C = 0;
        var B = Math.min(E.length, 4);
        for (var D = 0; D < B; ++D) {
            C <<= 4;
            C |= k.charToHex(E.charCodeAt(D))
        }
        return C
    };
    k.biFromHex = function (F) {
        var C = new v();
        var B = F.length;
        for (var E = B, D = 0; E > 0; E -= 4, ++D) {
            C.digits[D] = k.hexToDigit(F.substr(Math.max(E - 4, 0), Math.min(E, 4)))
        }
        return C
    };
    k.biFromString = function (J, I) {
        var B = J.charAt(0) == "-";
        var E = B ? 1 : 0;
        var K = new v();
        var C = new v();
        C.digits[0] = 1;
        for (var D = J.length - 1; D >= E; D--) {
            var F = J.charCodeAt(D);
            var G = k.charToHex(F);
            var H = k.biMultiplyDigit(C, G);
            K = k.biAdd(K, H);
            C = k.biMultiplyDigit(C, I)
        }
        K.isNeg = B;
        return K
    };
    k.biDump = function (B) {
        return (B.isNeg ? "-" : "") + B.digits.join(" ")
    };
    k.biAdd = function (C, G) {
        var B;
        if (C.isNeg != G.isNeg) {
            G.isNeg = !G.isNeg;
            B = k.biSubtract(C, G);
            G.isNeg = !G.isNeg
        } else {
            B = new v();
            var F = 0;
            var E;
            for (var D = 0; D < C.digits.length; ++D) {
                E = C.digits[D] + G.digits[D] + F;
                B.digits[D] = E % b;
                F = Number(E >= b)
            }
            B.isNeg = C.isNeg
        }
        return B
    };
    k.biSubtract = function (C, G) {
        var B;
        if (C.isNeg != G.isNeg) {
            G.isNeg = !G.isNeg;
            B = k.biAdd(C, G);
            G.isNeg = !G.isNeg
        } else {
            B = new v();
            var F, E;
            E = 0;
            for (var D = 0; D < C.digits.length; ++D) {
                F = C.digits[D] - G.digits[D] + E;
                B.digits[D] = F % b;
                if (B.digits[D] < 0) {
                    B.digits[D] += b
                }
                E = 0 - Number(F < 0)
            }
            if (E == -1) {
                E = 0;
                for (var D = 0; D < C.digits.length; ++D) {
                    F = 0 - B.digits[D] + E;
                    B.digits[D] = F % b;
                    if (B.digits[D] < 0) {
                        B.digits[D] += b
                    }
                    E = 0 - Number(F < 0)
                }
                B.isNeg = !C.isNeg
            } else {
                B.isNeg = C.isNeg
            }
        }
        return B
    };
    k.biHighIndex = function (C) {
        var B = C.digits.length - 1;
        while (B > 0 && C.digits[B] == 0) {
            --B
        }
        return B
    };
    k.biNumBits = function (D) {
        var F = k.biHighIndex(D);
        var E = D.digits[F];
        var C = (F + 1) * c;
        var B;
        for (B = C; B > C - c; --B) {
            if ((E & 32768) != 0) {
                break
            }
            E <<= 1
        }
        return B
    };
    k.biMultiply = function (H, G) {
        var K = new v();
        var F;
        var C = k.biHighIndex(H);
        var J = k.biHighIndex(G);
        var I, B, D;
        for (var E = 0; E <= J; ++E) {
            F = 0;
            D = E;
            for (j = 0; j <= C; ++j, ++D) {
                B = K.digits[D] + H.digits[j] * G.digits[E] + F;
                K.digits[D] = B & h;
                F = B >>> e
            }
            K.digits[E + C + 1] = F
        }
        K.isNeg = H.isNeg != G.isNeg;
        return K
    };
    k.biMultiplyDigit = function (B, G) {
        var F, E, D;
        result = new v();
        F = k.biHighIndex(B);
        E = 0;
        for (var C = 0; C <= F; ++C) {
            D = result.digits[C] + B.digits[C] * G + E;
            result.digits[C] = D & h;
            E = D >>> e
        }
        result.digits[1 + F] = E;
        return result
    };
    k.arrayCopy = function (F, I, D, H, G) {
        var B = Math.min(I + G, F.length);
        for (var E = I, C = H; E < B; ++E, ++C) {
            D[C] = F[E]
        }
    };
    var f = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
    k.biShiftLeft = function (C, I) {
        var E = Math.floor(I / c);
        var B = new v();
        k.arrayCopy(C.digits, 0, B.digits, E, B.digits.length - E);
        var H = I % c;
        var D = c - H;
        for (var F = B.digits.length - 1, G = F - 1; F > 0; --F, --G) {
            B.digits[F] = ((B.digits[F] << H) & h) | ((B.digits[G] & f[H]) >>> (D))
        }
        B.digits[0] = ((B.digits[F] << H) & h);
        B.isNeg = C.isNeg;
        return B
    };
    var u = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
    k.biShiftRight = function (C, I) {
        var D = Math.floor(I / c);
        var B = new v();
        k.arrayCopy(C.digits, D, B.digits, 0, C.digits.length - D);
        var G = I % c;
        var H = c - G;
        for (var E = 0, F = E + 1; E < B.digits.length - 1; ++E, ++F) {
            B.digits[E] = (B.digits[E] >>> G) | ((B.digits[F] & u[G]) << H)
        }
        B.digits[B.digits.length - 1] >>>= G;
        B.isNeg = C.isNeg;
        return B
    };
    k.biMultiplyByRadixPower = function (C, D) {
        var B = new v();
        k.arrayCopy(C.digits, 0, B.digits, D, B.digits.length - D);
        return B
    };
    k.biDivideByRadixPower = function (C, D) {
        var B = new v();
        k.arrayCopy(C.digits, D, B.digits, 0, B.digits.length - D);
        return B
    };
    k.biModuloByRadixPower = function (C, D) {
        var B = new v();
        k.arrayCopy(C.digits, 0, B.digits, 0, D);
        return B
    };
    k.biCompare = function (B, D) {
        if (B.isNeg != D.isNeg) {
            return 1 - 2 * Number(B.isNeg)
        }
        for (var C = B.digits.length - 1; C >= 0; --C) {
            if (B.digits[C] != D.digits[C]) {
                if (B.isNeg) {
                    return 1 - 2 * Number(B.digits[C] > D.digits[C])
                } else {
                    return 1 - 2 * Number(B.digits[C] < D.digits[C])
                }
            }
        }
        return 0
    };
    k.biDivideModulo = function (G, F) {
        var B = k.biNumBits(G);
        var E = k.biNumBits(F);
        var D = F.isNeg;
        var L, K;
        if (B < E) {
            if (G.isNeg) {
                L = k.biCopy(a);
                L.isNeg = !F.isNeg;
                G.isNeg = false;
                F.isNeg = false;
                K = biSubtract(F, G);
                G.isNeg = true;
                F.isNeg = D
            } else {
                L = new v();
                K = k.biCopy(G)
            }
            return [L, K]
        }
        L = new v();
        K = G;
        var I = Math.ceil(E / c) - 1;
        var H = 0;
        while (F.digits[I] < z) {
            F = k.biShiftLeft(F, 1);
            ++H;
            ++E;
            I = Math.ceil(E / c) - 1
        }
        K = k.biShiftLeft(K, H);
        B += H;
        var O = Math.ceil(B / c) - 1;
        var T = k.biMultiplyByRadixPower(F, O - I);
        while (k.biCompare(K, T) != -1) {
            ++L.digits[O - I];
            K = k.biSubtract(K, T)
        }
        for (var R = O; R > I; --R) {
            var J = (R >= K.digits.length) ? 0 : K.digits[R];
            var S = (R - 1 >= K.digits.length) ? 0 : K.digits[R - 1];
            var Q = (R - 2 >= K.digits.length) ? 0 : K.digits[R - 2];
            var P = (I >= F.digits.length) ? 0 : F.digits[I];
            var C = (I - 1 >= F.digits.length) ? 0 : F.digits[I - 1];
            if (J == P) {
                L.digits[R - I - 1] = h
            } else {
                L.digits[R - I - 1] = Math.floor((J * b + S) / P)
            }
            var N = L.digits[R - I - 1] * ((P * b) + C);
            var M = (J * l) + ((S * b) + Q);
            while (N > M) {
                --L.digits[R - I - 1];
                N = L.digits[R - I - 1] * ((P * b) | C);
                M = (J * b * b) + ((S * b) + Q)
            }
            T = k.biMultiplyByRadixPower(F, R - I - 1);
            K = k.biSubtract(K, k.biMultiplyDigit(T, L.digits[R - I - 1]));
            if (K.isNeg) {
                K = k.biAdd(K, T);
                --L.digits[R - I - 1]
            }
        }
        K = k.biShiftRight(K, H);
        L.isNeg = G.isNeg != D;
        if (G.isNeg) {
            if (D) {
                L = k.biAdd(L, a)
            } else {
                L = k.biSubtract(L, a)
            }
            F = k.biShiftRight(F, H);
            K = k.biSubtract(F, K)
        }
        if (K.digits[0] == 0 && k.biHighIndex(K) == 0) {
            K.isNeg = false
        }
        return [L, K]
    };
    k.biDivide = function (B, C) {
        return k.biDivideModulo(B, C)[0]
    };
    k.biModulo = function (B, C) {
        return k.biDivideModulo(B, C)[1]
    };
    k.biMultiplyMod = function (C, D, B) {
        return k.biModulo(k.biMultiply(C, D), B)
    };
    k.biPow = function (C, E) {
        var B = a;
        var D = C;
        while (true) {
            if ((E & 1) != 0) {
                B = k.biMultiply(B, D)
            }
            E >>= 1;
            if (E == 0) {
                break
            }
            D = k.biMultiply(D, D)
        }
        return B
    };
    k.biPowMod = function (D, G, C) {
        var B = a;
        var E = D;
        var F = G;
        while (true) {
            if ((F.digits[0] & 1) != 0) {
                B = k.biMultiplyMod(B, E, C)
            }
            F = k.biShiftRight(F, 1);
            if (F.digits[0] == 0 && k.biHighIndex(F) == 0) {
                break
            }
            E = k.biMultiplyMod(E, E, C)
        }
        return B
    };
    p.BarrettMu = function (B) {
        this.modulus = k.biCopy(B);
        this.k = k.biHighIndex(this.modulus) + 1;
        var C = new v();
        C.digits[2 * this.k] = 1;
        this.mu = k.biDivide(C, this.modulus);
        this.bkplus1 = new v();
        this.bkplus1.digits[this.k + 1] = 1;
        this.modulo = s;
        this.multiplyMod = n;
        this.powMod = d
    };

    function s(J) {
        var C = k;
        var I = C.biDivideByRadixPower(J, this.k - 1);
        var G = C.biMultiply(I, this.mu);
        var F = C.biDivideByRadixPower(G, this.k + 1);
        var E = C.biModuloByRadixPower(J, this.k + 1);
        var K = C.biMultiply(F, this.modulus);
        var D = C.biModuloByRadixPower(K, this.k + 1);
        var B = C.biSubtract(E, D);
        if (B.isNeg) {
            B = C.biAdd(B, this.bkplus1)
        }
        var H = C.biCompare(B, this.modulus) >= 0;
        while (H) {
            B = C.biSubtract(B, this.modulus);
            H = C.biCompare(B, this.modulus) >= 0
        }
        return B
    }

    function n(B, D) {
        var C = k.biMultiply(B, D);
        return this.modulo(C)
    }

    function d(C, F) {
        var B = new v();
        B.digits[0] = 1;
        var D = C;
        var E = F;
        while (true) {
            if ((E.digits[0] & 1) != 0) {
                B = this.multiplyMod(B, D)
            }
            E = k.biShiftRight(E, 1);
            if (E.digits[0] == 0 && k.biHighIndex(E) == 0) {
                break
            }
            D = this.multiplyMod(D, D)
        }
        return B
    }

    var y = function (C, E, B) {
        var D = k;
        this.e = D.biFromHex(C);
        this.d = D.biFromHex(E);
        this.m = D.biFromHex(B);
        this.chunkSize = 2 * D.biHighIndex(this.m);
        this.radix = 16;
        this.barrett = new p.BarrettMu(this.m)
    };
    k.getKeyPair = function (C, D, B) {
        return new y(C, D, B)
    };
    if (typeof p.twoDigit === "undefined") {
        p.twoDigit = function (B) {
            return (B < 10 ? "0" : "") + String(B)
        }
    }
    k.encryptedString = function (I, L) {
        var H = [];
        var B = L.length;
        var F = 0;
        while (F < B) {
            H[F] = L.charCodeAt(F);
            F++
        }
        while (H.length % I.chunkSize != 0) {
            H[F++] = 0
        }
        var G = H.length;
        var M = "";
        var E, D, C;
        for (F = 0; F < G; F += I.chunkSize) {
            C = new v();
            E = 0;
            for (D = F; D < F + I.chunkSize; ++E) {
                C.digits[E] = H[D++];
                C.digits[E] += H[D++] << 8
            }
            var K = I.barrett.powMod(C, I.e);
            var J = I.radix == 16 ? k.biToHex(K) : k.biToString(K, I.radix);
            M += J + " "
        }
        return M.substring(0, M.length - 1)
    };
    k.decryptedString = function (F, G) {
        var I = G.split(" ");
        var B = "";
        var E, D, H;
        for (E = 0; E < I.length; ++E) {
            var C;
            if (F.radix == 16) {
                C = k.biFromHex(I[E])
            } else {
                C = k.biFromString(I[E], F.radix)
            }
            H = F.barrett.powMod(C, F.d);
            for (D = 0; D <= k.biHighIndex(H); ++D) {
                B += String.fromCharCode(H.digits[D] & 255, H.digits[D] >> 8)
            }
        }
        while (B.charCodeAt(B.length - 1) == 0) {
            B = B.substring(0, B.length - 1)
        }
        return B
    };
    k.setMaxDigits(130)
})(window);
$j(document).ready(function () {
    var r = s_gi(s_account);
    var b = r.getQueryParam("traffic_source");
    if (!(r == null || r == "" || r == undefined)) {
        var q = "";
        var E = omniture_pagename;
        if (window.location.href.indexOf("/checkout.htm") > -1) {
            E = "buy flow > check out > home"
        } else {
            if (window.location.href.indexOf("order-payment.htm") > -1 && $j(".payment-box .payment-details .inline-block :nth-child(2)").children("span").text().trim() == "货到付款") {
                E = "buy flow > payment successfully > home"
            }
        }
        if (E != "") {
            r.pageName = E;
            var A = r.pageName.split(" > ");
            var u = A[0];
            var v = A[1];
            var x = A[2];
            var y = A[3];
            var z = A[4];
            var B = A[5];
            if (u) {
                r.channel = u;
                r.channel = r.channel.toLowerCase()
            }
            if (u && v) {
                r.prop18 = u + " > " + v;
                r.prop18 = r.prop18.toLowerCase()
            }
            if (v && x) {
                r.prop19 = u + " > " + v + " > " + x;
                r.prop19 = r.prop19.toLowerCase()
            }
            var r = s_gi(s_account);
            if (E.indexOf("product > product > pdp >") > -1) {
                r.linkTrackVars = "events,products,eVar20,prop20,eVar26,eVar27,prop23, eVar40";
                r.eVar40 = r.prop23 = "product detial page";
                r.linkTrackEvents = r.events = "prodView,event27";
                r.products = ";" + $j("#skuCode").val();
                r.eVar20 = $j("#evar20").val();
                r.prop20 = $j(".product-name").text();
                r.eVar26 = $j(".c-s-level").text();
                r.eVar27 = 0
            } else {
                if (E.indexOf("product wall > onsite search") > -1) {
                    var t = $j("#hasresult").val();
                    if (t == "true") {
                        r.linkTrackVars = "eVar12,prop11";
                        r.eVar12 = "+1";
                        r.prop11 = $j.trim($j("#keyword").val());
                        E = "product wall > onsite search > " + $j.trim($j("#keyword").val())
                    } else {
                        if (t == "false") {
                            r.linkTrackVars = "eVar12,prop10";
                            r.eVar12 = "+1";
                            r.prop10 = $j.trim($j("#keyword").val());
                            E = "product wall > onsite search > no result"
                        }
                    }
                } else {
                    if (E.indexOf("product wall") > -1 || E.indexOf("category") > -1) {
                        r.linkTrackVars = "prop23,prop17,eVar40";
                        var F = E.split(">");
                        r.prop17 = F[F.length - 1];
                        r.eVar40 = r.prop23 = "product category page"
                    } else {
                        if (E.indexOf("helpcenter > store locator > home") > -1) {
                            r.linkTrackVars = "prop23, eVar40";
                            r.eVar40 = r.prop23 = "helpcenter page"
                        } else {
                            if (E.indexOf("home > campaign landing > homepage") > -1 || E.indexOf("home > home landing > homepage") > -1) {
                                r.linkTrackVars = "prop23, eVar40";
                                r.eVar40 = r.prop23 = "home page"
                            } else {
                                if (E.indexOf("buy flow > shopping cart > home") > -1) {
                                    var D = $j("#skuList").val().split(",");
                                    var q = "";
                                    for (var z = 0; z < D.length; z++) {
                                        if (q == "") {
                                            q = ";" + D[z]
                                        } else {
                                            q += ",;" + D[z]
                                        }
                                    }
                                    r.linkTrackVars = "events,products,prop23, eVar40";
                                    r.eVar40 = r.prop23 = "buy flow page";
                                    r.linkTrackEvents = r.events = "scView";
                                    r.products = q
                                } else {
                                    if (E.indexOf("myaccount > myfavorite > home") > -1) {
                                        var D = "";
                                        $j(".skuCode").each(function () {
                                            D = D + $j(this).val() + ","
                                        });
                                        r.linkTrackVars = "events,products,prop23, eVar40";
                                        r.eVar40 = r.prop23 = "account page";
                                        r.linkTrackEvents = r.events = "event21";
                                        r.products = D
                                    } else {
                                        if (E.indexOf("myaccount") > -1 || E.indexOf("my account") > -1) {
                                            r.linkTrackVars = "prop23, eVar40";
                                            r.eVar40 = r.prop23 = "account page"
                                        } else {
                                            if (E.indexOf("buy flow > check out > home") > -1) {
                                                var s = $j(".infor-main .goods.clearfix .box-2").children("span");
                                                for (var z = 0; z < s.length; z++) {
                                                    var H = ";" + s[z].innerHTML + ",";
                                                    q += H
                                                }
                                                var C = $j("#omnitureeVar34").val();
                                                r.linkTrackVars = "events,products,eVar34,eVar41,prop23,eVar40";
                                                r.eVar40 = r.prop23 = "buy flow page";
                                                if (window.location.href.indexOf("isBuyNow=true") > -1) {
                                                    r.eVar41 = "quick purchase"
                                                } else {
                                                    r.eVar41 = "cart purchase"
                                                }
                                                r.linkTrackEvents = r.events = "event20";
                                                r.products = q;
                                                r.eVar34 = C
                                            } else {
                                                if (E.indexOf("buy flow > payment content > home") > -1) {
                                                    r.linkTrackVars = "events,s.state,s.zip,eVar41,prop23, eVar40";
                                                    r.linkTrackEvents = r.events = "event19";
                                                    r.eVar40 = r.prop23 = "buy flow page";
                                                    r.eVar41 = "shopcar purchase";
                                                    r.state = $j(".shopcart-con-ul li:eq(1)").text().split(" ")[0];
                                                    r.zip = $j(".shopcart-con-ul li:eq(1)").text().split(" ")[1]
                                                } else {
                                                    if (E.indexOf("buy flow > payment successfully > home") > -1) {
                                                        var w = $j("#omnitureProducts").val();
                                                        var C = $j("#omnitureeVar34").val();
                                                        var v = $j(".payment-box .payment-details .inline-block :nth-child(1)").children("span").text().trim();
                                                        r.linkTrackVars = "events,products,eVar34,eVar2,eVar3,eVar45,prop23,eVar40,eVar10";
                                                        r.eVar40 = r.prop23 = "buy flow page";
                                                        r.linkTrackEvents = r.events = "purchase,event26";
                                                        r.eVar34 = C;
                                                        r.eVar45 = "Customer";
                                                        r.products = w;
                                                        r.eVar2 = $j("#so_cardNo").text();
                                                        r.eVar3 = $j(".payment-box .payment-details .inline-block :nth-child(2)").children("span").text().trim();
                                                        r.eVar10 = v;
                                                        r.purchaseID = v
                                                    } else {
                                                        if (E.indexOf("my account > withdraw apply > home") > -1) {
                                                        } else {
                                                            if (E.indexOf("buy flow > now buy delivery information > home") > -1) {
                                                                r.linkTrackVars = "events,eVar41,prop23, eVar40";
                                                                r.linkTrackEvents = r.events = "event20";
                                                                r.eVar41 = "quick purchase";
                                                                r.eVar40 = r.prop23 = "buy flow page"
                                                            } else {
                                                                if (E.indexOf("buy flow > now buy payment content > home") > -1) {
                                                                    r.linkTrackVars = "events,s.state,s.zip,eVar41,prop23, eVar40";
                                                                    r.linkTrackEvents = r.events = "event19";
                                                                    r.eVar41 = "quick purchase";
                                                                    r.eVar40 = r.prop23 = "buy flow page"
                                                                } else {
                                                                    if (E.indexOf("buy flow > now buy confirm payment method > home") > -1) {
                                                                        r.linkTrackVars = "prop23, eVar40";
                                                                        r.eVar40 = r.prop23 = "buy flow pag"
                                                                    } else {
                                                                        r.linkTrackVars = "prop23, eVar40";
                                                                        r.prop23 = "other page"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (E.indexOf("buy flow > delivery information > home") > -1 || E.indexOf("buy flow > now buy delivery information > home") > -1) {
                if ($j(".address-form").length > 0) {
                    deliveryGridsum("guest")
                } else {
                    deliveryGridsum("member")
                }
            }
        }
        if (!b || b != "borui") {
            var G = r.t();
            if (G) {
                document.write(G)
            }
        }
        r.linkTrackVars = r.linkTrackEvents = r.events = ""
    }
    jQuery("#chat").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,prop9";
        a.linkTrackEvents = a.events = "event11";
        a.prop9 = "online chat";
        if (!b || b != "borui") {
            a.tl(this, "o", omniture_pagename);
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery(".more-seaker").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events";
        a.linkTrackEvents = a.events = "event53";
        if (!b || b != "borui") {
            a.tl(true, "o", "view more Chuck II");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery(".weibo,#idSina").click(function (a) {
        var c = s_gi(s_account);
        c.linkTrackVars = "events,eVar33";
        c.linkTrackEvents = c.events = "event2";
        c.eVar33 = "sina";
        if (!b || b != "borui") {
            c.tl(this, "o", "social-sina");
            c.linkTrackVars = c.linkTrackEvents = c.events = "";
            c.eVar33 = ""
        }
    });
    jQuery(".wechat,#idWeixin").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar33";
        a.linkTrackEvents = a.events = "event2";
        a.eVar33 = "wechat";
        if (!b || b != "borui") {
            a.tl(this, "o", "social-wechat");
            a.linkTrackVars = a.linkTrackEvents = a.events = "";
            a.eVar33 = ""
        }
    });
    jQuery(".qqwb,#idQQ").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar33";
        a.linkTrackEvents = a.events = "event2";
        a.eVar33 = "tencent";
        if (!b || b != "borui") {
            a.tl(this, "o", "social-tencent");
            a.linkTrackVars = a.linkTrackEvents = a.events = "";
            a.eVar33 = ""
        }
    });
    jQuery(".renren,#idRenren").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar33";
        a.linkTrackEvents = a.events = "event2";
        a.eVar33 = "renren";
        if (!b || b != "borui") {
            a.tl(this, "e", "social-renren");
            a.linkTrackVars = a.linkTrackEvents = a.events = "";
            a.eVar33 = ""
        }
    });
    jQuery(".douban,#idDouBan").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar33";
        a.linkTrackEvents = a.events = "event2";
        a.eVar33 = "douban";
        if (!b || b != "borui") {
            a.tl(this, "o", "social-douban");
            a.linkTrackVars = a.linkTrackEvents = a.events = "";
            a.eVar33 = ""
        }
    });
    $j("body").on("click", "#add-to-favorite", function () {
        var e = jQuery("#skuCode").val();
        var a = jQuery("#skuPrice").val();
        if (e && a) {
            var d = s_gi(s_account);
            d.linkTrackVars = "events,products";
            d.linkTrackEvents = "event36";
            d.events = "event36";
            var c = parseInt(jQuery.trim(jQuery("#num-select").val()) || 0);
            d.products = ";" + e + ";" + c + ";" + parseFloat(a) * parseInt(c) + ",";
            if (!b || b != "borui") {
                d.tl(this, "o", "add-to-favorite");
                d.linkTrackVars = d.linkTrackEvents = d.events = "";
                d.product = ""
            }
        }
    });
    $j("#now-buy-btn").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,products";
        a.linkTrackEvents = a.events = "event52";
        a.products = ";" + $j("#skuCode").val();
        if (!b || b != "borui") {
            a.tl(this, "o", "quick purchase");
            a.linkTrackVars = a.linkTrackEvents = a.events = "";
            a.product = ""
        }
    });
    jQuery(".datail-product-buy-wrap .other-product-list a[code]").click(function () {
        var d = jQuery("#skuCode").val();
        var c = jQuery(this).attr("code");
        if (d && c) {
            var a = s_gi(s_account);
            a.linkTrackVars = "events,eVar13,prop3,eVar15";
            a.linkTrackEvents = a.events = "event16";
            a.prop3 = "same series";
            a.eVar13 = "cross-sell > same series> " + d + " >" + c;
            a.eVar15 = d;
            if (!b || b != "borui") {
                a.tl(this, "o", "cross_sell-same series-" + d + "-" + c);
                a.linkTrackVars = a.linkTrackEvents = a.events = "";
                a.eVar13 = "";
                a.prop3 = "";
                a.eVar15 = ""
            }
        }
    });
    jQuery("#comment-button").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar28,prop3";
        a.eVar28 = "tab > reviews";
        a.prop3 = "add reviews";
        if (!b || b != "borui") {
            a.tl(this, "o", "add-comment");
            a.eVar28 = "";
            a.prop3 = ""
        }
    });
    $j("body").on("click", ".suggest-product .product-list-slide div dt img", function () {
        var d = jQuery("#skuCode").val();
        var c = jQuery(this).parent().parent().parent().attr("skucode");
        if (d && c) {
            var a = s_gi(s_account);
            a.linkTrackVars = "events,eVar13,prop3,eVar15";
            a.linkTrackEvents = a.events = "event16";
            a.prop3 = "relevant product";
            a.eVar13 = "cross-sell > relevant product>  " + d + " >" + c;
            a.eVar15 = d;
            if (!b || b != "borui") {
                a.tl(this, "o", "cross_relevant product series-" + d + "-" + c);
                a.linkTrackVars = a.linkTrackEvents = a.events = "";
                a.eVar13 = "";
                a.prop3 = "";
                a.eVar15 = ""
            }
        }
    });
    $j("body").on("click", "#view-history .product-list-slide dt img", function () {
        var d = jQuery("#skuCode").val();
        var c = jQuery(this).parent().parent().parent().attr("skucode");
        if (d && c) {
            var a = s_gi(s_account);
            a.linkTrackVars = "events,eVar13,prop3,eVar15";
            a.linkTrackEvents = a.events = "event16";
            a.prop3 = "recent viewed";
            a.eVar15 = d;
            a.eVar13 = "cross-sell > recent viewed >  " + d + " >" + c;
            if (!b || b != "borui") {
                a.tl(this, "o", "cross_recent viewed series-" + d + "-" + c);
                a.linkTrackVars = a.linkTrackEvents = a.events = "";
                a.eVar13 = "";
                a.prop3 = "";
                a.eVar15 = ""
            }
        }
    });
    jQuery("#district").change(function () {
        var c = jQuery(this).val();
        var a = jQuery("#_city").prev().text();
        var e = jQuery("#_province").prev().text();
        if (c) {
            var d = s_gi(s_account);
            d.linkTrackVars = "events,eVar56,prop23";
            d.linkTrackEvents = d.events = "event45";
            d.eVar56 = '"searchstore: ' + e + a + c;
            d.prop23 = "tools";
            if (!b || b != "borui") {
                d.tl(this, "o", "searchstore");
                d.linkTrackVars = d.linkTrackEvents = d.events = "";
                d.eVar56 = ""
            }
        }
    });
    jQuery(".sinalog").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4";
        a.eVar4 = "logged in: weibo";
        if (!b || b != "borui") {
            a.tl(this, "o", "logged in: weibo");
            a.linkTrackVars = "";
            a.eVar4 = ""
        }
    });
    jQuery(".qqlog").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4";
        a.eVar4 = "logged in: qq";
        if (!b || b != "borui") {
            a.tl(this, "o", "logged in: qq");
            a.linkTrackVars = "";
            a.eVar4 = ""
        }
    });
    jQuery(".renrenlog").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4";
        a.eVar4 = "logged in: renren";
        if (!b || b != "borui") {
            a.tl(this, "o", "logged in: renren");
            a.linkTrackVars = "";
            a.eVar4 = ""
        }
    });
    jQuery(".doubanlog").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4";
        a.eVar4 = "logged in: douban";
        if (!b || b != "borui") {
            a.tl(this, "o", "logged in: douban");
            a.linkTrackVars = "";
            a.eVar4 = ""
        }
    });
    jQuery(".zhifubaolog").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4";
        a.eVar4 = "logged in: alipay";
        if (!b || b != "borui") {
            a.tl(this, "o", "logged in: alipay");
            a.linkTrackVars = "";
            a.eVar4 = ""
        }
    });
    jQuery(".top-login-btn").click(function () {
        var a = self.location.toString();
        if (a && a.indexOf("shoppingCart.htm") > -1) {
            var c = s_gi(s_account);
            c.linkTrackVars = "eVar4,eVar34";
            c.linkTrackEvents = c.events = "event15";
            c.eVar4 = "login complete";
            c.eVar34 = "buyflow: member";
            if (!b || b != "borui") {
                c.tl(this, "o", "buyflow: member");
                c.linkTrackVars = "";
                c.eVar4 = "";
                c.eVar34 = ""
            }
        } else {
            var c = s_gi(s_account);
            c.linkTrackVars = "eVar4";
            c.linkTrackEvents = c.events = "event15";
            c.eVar4 = "login complete";
            if (!b || b != "borui") {
                c.tl(this, "o", "logged in: member");
                c.linkTrackVars = "";
                c.eVar4 = ""
            }
        }
    });
    jQuery(".log-sign-button").click(function () {
        if (jQuery(this).has(".log")) {
            var a = s_gi(s_account);
            a.linkTrackVars = "events,eVar4";
            a.linkTrackEvents = a.events = "event15";
            a.eVar4 = "navigation login start";
            if (!b || b != "borui") {
                a.tl(this, "o", "login register > buyflow > login");
                a.linkTrackVars = a.linkTrackEvents = a.events = ""
            }
        } else {
            var a = s_gi(s_account);
            a.linkTrackVars = "events,eVar4";
            a.linkTrackEvents = a.events = "event15";
            a.eVar4 = "navigation register start";
            if (!b || b != "borui") {
                a.tl(this, "o", "login register > buyflow > register");
                a.linkTrackVars = a.linkTrackEvents = a.events = ""
            }
        }
    });
    jQuery(".register-login-box .create").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar4";
        a.linkTrackEvents = a.events = "event15";
        a.eVar4 = "navigation register start";
        if (!b || b != "borui") {
            a.tl(this, "o", "login register > buyflow > register");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery("#cartGuestLogin").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4,eVar34";
        a.eVar4 = "logged in:guest";
        a.eVar34 = "buyflow: guest";
        if (!b || b != "borui") {
            a.tl(this, "o", "buyflow: guest");
            a.linkTrackVars = "";
            a.eVar4 = "";
            a.eVar34 = ""
        }
    });
    $j(".hasSubcategories").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar4,eVar34";
        a.eVar4 = "logged in:guest";
        a.eVar34 = "buyflow: guest";
        if (!b || b != "borui") {
            a.tl(this, "o", "buyflow: guest");
            a.linkTrackVars = "";
            a.eVar4 = "";
            a.eVar34 = ""
        }
    });
    $j("body").on("click", ".product-list dl", function (a) {
        if (!a.isTrigger) {
            var c = s_gi(s_account);
            c.linkTrackVars = "eVar13";
            c.eVar13 = "pd wall";
            if (!b || b != "borui") {
                c.tl(this, "o", "product-list");
                c.eVar13 = ""
            }
        }
    });
    $j(".collection-icon i").live("click", function () {
        var c = $j(this).parent().parent().attr("skucode");
        var a = s_gi(s_account);
        a.linkTrackVars = "events,products";
        a.linkTrackEvents = a.events = "event38,event36";
        a.products = ";" + c;
        if (!b || b != "borui") {
            a.tl(this, "o", "product-list-favorites");
            a.product = ""
        }
    });
    jQuery("#registration-btn").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar4";
        a.linkTrackEvents = a.events = "event15";
        a.eVar4 = "register complete";
        if (!b || b != "borui") {
            a.tl(this, "o", "register");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery(".new_register").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar4";
        a.linkTrackEvents = a.events = "event15";
        a.eVar4 = "buy flow register start";
        if (!b || b != "borui") {
            a.tl(this, "o", "buy-flow-register-start");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery("#cartMemberLogin").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar4";
        a.linkTrackEvents = a.events = "event15";
        a.eVar4 = "buy flow login start";
        if (!b || b != "borui") {
            a.tl(this, "o", "cart-member-login");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery(".comment_save_btn").click(function () {
        var a = $j(this).closest(".favourite-grid").find(".review-rating-stars").data("score") || 5;
        var c = s_gi(s_account);
        c.linkTrackVars = "events,eVar25";
        c.linkTrackEvents = c.events = "event13,event14";
        c.eVar25 = a;
        if (!b || b != "borui") {
            c.tl(this, "o", "comment_save");
            c.linkTrackVars = c.linkTrackEvents = c.events = ""
        }
    });
    jQuery("#comment_cancel_btn").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "event";
        a.linkTrackEvents = a.events = "event14";
        if (!b || b != "borui") {
            a.tl(this, "o", "comment_cancel");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery("#shopping_cart_remove_sku").click(function () {
        var c = jQuery(this).attr("sku_code");
        var a = s_gi(s_account);
        a.linkTrackVars = "events,products";
        a.linkTrackEvents = a.events = "scRemove";
        a.products = ";" + c;
        if (!b || b != "borui") {
            a.tl(this, "o", "shopping_cart_remove_sku");
            a.linkTrackVars = a.linkTrackEvents = a.events = "";
            a.products = ""
        }
    });
    jQuery("#nextDeliveryInformation").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events";
        a.linkTrackEvents = a.events = "scCheckout";
        if (!b || b != "borui") {
            a.tl(this, "o", "scCheckout");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery("#updateSku").live("click", function () {
        var a = s_gi(s_account);
        if (!b || b != "borui") {
            a.tl(this, "o", "cart edit")
        }
    });
    jQuery("#use-card-btn").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar39";
        a.linkTrackEvents = a.events = "event29";
        a.eVar39 = "coupon confirm";
        if (!b || b != "borui") {
            a.tl(this, "o", "coupon-confirm");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery(".use-coupon-card").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar39";
        a.linkTrackEvents = a.events = "event29";
        a.eVar39 = "coupon use";
        if (!b || b != "borui") {
            a.tl(this, "o", "coupon-use");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    jQuery(".navigation-expanded li a").click(function () {
        var c = s_gi(s_account);
        c.linkTrackVars = "prop3";
        var a = $j(this).attr("href");
        if (a.indexOf("women") > -1) {
            c.prop3 = "tpnv:women"
        } else {
            if (a.indexOf("men") > -1) {
                c.prop3 = "tpnv:men"
            } else {
                if (a.indexOf("kids") > -1) {
                    c.prop3 = "tpnv:kid"
                }
            }
        }
        if (!b || b != "borui") {
            c.tl(this, "o", "top page navigation");
            c.prop3 = ""
        }
    });
    jQuery(".hasSubcategories").click(function () {
        var c = s_gi(s_account);
        c.linkTrackVars = "prop3";
        var a = $j(this).text();
        if (a.indexOf("女的") > -1) {
            c.prop3 = "tpnv:women"
        } else {
            if (a.indexOf("男的") > -1) {
                c.prop3 = "tpnv:men"
            } else {
                if (a.indexOf("儿童") > -1) {
                    c.prop3 = "tpnv:kid"
                }
            }
        }
        if (!b || b != "borui") {
            c.tl(this, "o", "top page navigation");
            c.prop3 = ""
        }
    });
    jQuery("#live800icon").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,prop9";
        a.linkTrackEvents = a.events = "event11";
        a.prop9 = "online chat";
        if (!b || b != "borui") {
            a.tl(this, "o", "live 800");
            a.linkTrackEvents = a.events = "";
            a.prop9 = ""
        }
    });
    $j(".filter-category-detail dl dd").live("click touchend", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "prop3";
        if (null != $j(this).attr("key")) {
            a.prop3 = "lenv:" + $j(this).attr("key");
            if (!b || b != "borui") {
                a.tl(this, "o", "filter-category");
                a.prop3 = ""
            }
        } else {
            if (null != $j(this).attr("property")) {
                a.prop3 = "lenv:" + $j(this).attr("property");
                if (!b || b != "borui") {
                    a.tl(this, "o", "filter-category");
                    a.prop3 = ""
                }
            } else {
                if (null != $j(this).attr("max") && null != $j(this).attr("min")) {
                    a.prop3 = "lenv:" + $j(this).text();
                    if (!b || b != "borui") {
                        a.tl(this, "o", "filter-category");
                        a.prop3 = ""
                    }
                }
            }
        }
    });
    $j(".filter-category-detail dl dd ul li").live("click touchend", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "prop3";
        a.prop3 = "lenv:" + $j(this).text();
        if (!b || b != "borui") {
            a.tl(this, "o", "filter-category");
            a.prop3 = ""
        }
    });
    $j(".brand-product dl dt a,.brand-product dl dd a").live("click", function () {
        var a = self.location.toString();
        if (a && a.indexOf("/item.htm") == -1) {
            var c = s_gi(s_account);
            c.linkTrackVars = "eVar13";
            c.eVar13 = "hp pd nav";
            if (!b || b != "borui") {
                c.tl(this, "o", "homepage pd navigation");
                c.eVar13 = ""
            }
        }
    });
    $j("body").on("click", ".save-address", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events";
        a.linkTrackEvents = a.events = "event8";
        if (!b || b != "borui") {
            a.tl(this, "o", "save-address");
            a.linkTrackEvents = a.events = ""
        }
    });
    $j(".save-password").click(function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events";
        a.linkTrackEvents = a.events = "event7";
        if (!b || b != "borui") {
            a.tl(this, "o", "save-password");
            a.linkTrackEvents = a.events = ""
        }
    });
    $j(".sitemap dt a,.sitemap dd a").live("click", function () {
        var c = s_gi(s_account);
        c.linkTrackVars = "prop3";
        var a = $j(this).attr("href");
        if (a.indexOf("women") > -1) {
            c.prop3 = "bonv:women"
        } else {
            if (a.indexOf("men") > -1) {
                c.prop3 = "bonv:men"
            } else {
                if (a.indexOf("kids") > -1) {
                    c.prop3 = "bonv:kid"
                } else {
                    if (a.indexOf("blog") > -1) {
                        c.linkTrackVars = "prop23, eVar40";
                        c.eVar40 = c.prop23 = "blog page";
                        c.prop3 = "bonv:magz"
                    } else {
                        if (a.indexOf("helpcenter") > -1) {
                            c.prop3 = "bonv:help"
                        } else {
                            c.prop3 = "bonv:account"
                        }
                    }
                }
            }
        }
        if (!b || b != "borui") {
            c.tl(this, "o", "bo navigation");
            c.prop3 = ""
        }
    });
    $j("#delivery-submit").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "s.state,s.zip";
        a.state = $j(".address-info li:eq(1)").text().split(" ")[0];
        a.zip = $j(".address-info li:eq(1)").text().split(" ")[1];
        if (!b || b != "borui") {
            a.tl(this, "o", "delivery-information");
            a.state = "";
            a.zip = ""
        }
    });
    $j(".looklliftCard").live("click", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "events,eVar39";
        a.linkTrackEvents = a.events = "event29";
        a.eVar39 = "coupon view";
        if (!b || b != "borui") {
            a.tl(this, "o", "coupon-view");
            a.linkTrackVars = a.linkTrackEvents = a.events = ""
        }
    });
    $j("body").on("click", "#size-chart-btn", function () {
        var a = s_gi(s_account);
        a.linkTrackVars = "eVar28,prop3";
        a.eVar28 = "tab > measurement";
        a.prop3 = "measurement tab";
        if (!b || b != "borui") {
            a.tl(this, "o", "measurement");
            a.linkTrackVars = "";
            a.eVar28 = "";
            a.prop3 = ""
        }
    });
    $j(".anniu").live("click", function () {
        var a = s_gi(s_account);
        if (!b || b != "borui") {
            a.tl(this, "o", "C2_Book_PC")
        }
    });
    jQuery("#commit-order").click(function () {
        var c = s_gi(s_account);
        c.linkTrackVars = "events,products,eVar34,eVar41";
        c.linkTrackEvents = c.events = "event18,event23,event24,event25";
        c.products = q;
        var a = $j("#OmnitureeVar").val();
        if (a == "order: guest") {
            c.eVar34 = "order: guest"
        } else {
            c.eVar34 = "order: member"
        }
        if (window.location.href.indexOf("isBuyNow=true") > -1) {
            c.eVar41 = "quick purchase"
        } else {
            c.eVar41 = "cart purchase"
        }
        if (!b || b != "borui") {
            c.tl(this, "o", "submit-order");
            c.linkTrackVars = c.linkTrackEvents = c.events = "";
            c.products = ""
        }
    });
    jQuery(".sitemap a").click(function () {
        if (jQuery(this).attr("href").match("www.nike.com") == "www.nike.com") {
            var a = s_gi(s_account);
            a.linkTrackVars = "events,eVar33";
            a.linkTrackEvents = a.events = "event2";
            a.eVar33 = "NIKE";
            if (!b || b != "borui") {
                a.tl(this, "e", "jump-to-NIKE");
                a.linkTrackVars = a.linkTrackEvents = a.events = "";
                a.eVar33 = ""
            }
        }
    })
});
var search_count = 0;
var searchCount = 0;
var sss = s_gi(s_account);
var traffic_source = sss.getQueryParam("traffic_source");

function changeSortOmniture(c) {
    var d = s_gi(s_account);
    d.linkTrackVars = "eVar13";
    d.eVar13 = "filter nav>" + c;
    if (!traffic_source || traffic_source != "borui") {
        d.tl(this, "o", "change-Sort");
        d.linkTrackVars = d.linkTrackEvents = d.events = "";
        d.eVar13 = ""
    }
}

function outOfStockOnmiture(f) {
    var e = jQuery("#skuCode").val();
    var d = s_gi(s_account);
    d.linkTrackEvents = "products";
    d.products = ";" + e;
    if (!traffic_source || traffic_source != "borui") {
        d.tl(f, "o", "product out of stock");
        d.linkTrackVars = d.linkTrackEvents = d.events = "";
        d.products = ""
    }
}

function addToChatOnmiture(h, i) {
    var g = jQuery("#skuCode").val();
    var j = jQuery("#skuPrice").val();
    if (g && i) {
        var f = s_gi(s_account);
        f.linkTrackVars = "events,products";
        f.linkTrackEvents = f.events = "scAdd,event22";
        f.products = ";" + g + ";" + i + ";" + parseFloat(j) * parseInt(i) + ",";
        if (!traffic_source || traffic_source != "borui") {
            f.tl(h, "o", "scAdd");
            f.linkTrackVars = f.linkTrackEvents = f.events = "";
            f.products = ""
        }
    }
}

function outOfStockOmniture(f, e) {
    if (e) {
        var d = s_gi(s_account);
        d.linkTrackVars = "events,products";
        d.linkTrackEvents = d.events = "event28";
        d.products = ";" + e;
        if (!traffic_source || traffic_source != "borui") {
            d.tl(f, "o", "outOfStock");
            d.linkTrackVars = d.linkTrackEvents = d.events = "";
            d.products = ""
        }
    }
}

function returnGoodsOmniture(c) {
    if (skuCode) {
        var d = s_gi(s_account);
        d.linkTrackVars = "eVar28";
        d.eVar28 = "tab > withdraw";
        if (!traffic_source || traffic_source != "borui") {
            d.tl(c, "o", "tab -- withdraw");
            d.linkTrackVars = "";
            d.eVar28 = ""
        }
    }
}

function addCommentSuccessOmniture() {
    var b = s_gi(s_account);
    b.linkTrackVars = "events";
    b.linkTrackEvents = b.events = "event13";
    if (!traffic_source || traffic_source != "borui") {
        b.tl(this, "o", "add-Comment-Success");
        b.linkTrackVars = b.linkTrackEvents = b.events = ""
    }
}

function couponPOP() {
    var b = s_gi(s_account);
    b.linkTrackVars = "events,eVar4,eVar44";
    b.linkTrackEvents = b.events = "event15";
    b.eVar4 = "register successfully";
    b.eVar44 = "brandsite member";
    if (!traffic_source || traffic_source != "borui") {
        b.tl(this, "o", "cuponPOP");
        b.linkTrackVars = b.linkTrackEvents = b.events = ""
    }
}

function favoriteSuccessOmniture() {
    var f = jQuery("#skuCode").val();
    var g = jQuery("#skuPrice").val();
    if (f && g) {
        var e = s_gi(s_account);
        e.linkTrackVars = "events,products";
        e.linkTrackEvents = e.events = "event38";
        var h = parseInt(jQuery.trim(jQuery("#num-select").val()) || 0);
        e.products = ";" + f + ";" + h + ";" + parseFloat(g) * parseInt(h) + ",";
        if (!traffic_source || traffic_source != "borui") {
            e.tl(this, "o", "favorite-success");
            e.linkTrackVars = e.linkTrackEvents = e.events = "";
            e.product = ""
        }
    }
};
var loading = false;
(function (a) {
    a.fn.extend({
        inputtext: function () {
            var b = $j(this);
            b.focus(function (e) {
                var d = $j(this);
                $j("body").find("input").each(function () {
                    $j(this).val() == "" && $j(this).siblings().show()
                });
                c(d)
            }).blur(function () {
                var d = $j(this);
                c(d)
            });
            a.each(b, function () {
                var d = $j(this);
                $j(this).siblings("span").click(function () {
                    $j(this).stop(true, true).fadeOut(200);
                    d.focus()
                })
            });

            function c(d) {
                d.val() == "" && (d.siblings("span").is(":visible") ? d.siblings("span").stop(true, true).fadeOut(200) : d.siblings("span").stop(true, true).fadeIn(200))
            }
        }, selectEvent: function () {
            var b = $j(this);
            var c = '<span class="selectindex"></span>';
            $j.each(b, function () {
                var d = $j(this).val();
                $j(this).parent(".selectbox").prepend(c);
                $j(this).siblings(".selectindex").html(d);
                $j(this).focus(function () {
                }).blur(function () {
                }).change(function () {
                    var e = $j(this).val();
                    $j(this).siblings(".selectindex").html(e)
                })
            })
        }
    })
})(jQuery);
var shopCartNumUtil = {
    cartNumKey: "shoppingCartNum", saveCartNum: function (a) {
        try {
            localStorage.setItem(shopCartNumUtil.cartNumKey, a)
        } catch (b) {
        }
    }, deleteCartNum: function () {
        return localStorage.removeItem(shopCartNumUtil.cartNumKey)
    }, getCartNum: function () {
        var a = localStorage.getItem(shopCartNumUtil.cartNumKey);
        var b;
        if ("undefined" == typeof quickstrike) {
            b = "false"
        } else {
            b = quickstrike
        }
        if (!a && b && b == "true") {
            a = "0"
        }
        return a
    }
};

function escape_cr(a) {
    if (a != "") {
        a = a.replace(/</g, "&lt;");
        a = a.replace(/%3C/g, "&lt;");
        a = a.replace(/>/g, "&gt;");
        a = a.replace(/%3E/g, "&gt;");
        a = a.replace(/'/g, "&#39;");
        a = a.replace(/"/g, "&quot;")
    }
    return a
}

var CONVERSE = CONVERSE || {};
CONVERSE.DEFAULTS = {
    contextpath: function () {
        var b = window.location.protocol, a = window.location.host;
        return b + "//" + a
    }, blackBg: function () {
        return domain_image + "/images/commons/blackbg.png"
    }, placeholderImg: domain_image + "/images/commons/spacer.gif", headerExpand: function () {
        var e = ["header-expanded-content", "search-content", "navigation-expanded", "header-cart"];
        var d = 0;
        for (var c = 0; c < e.length; c++) {
            var b = $j("." + e[c]);
            var a = b.length;
            if (b.is(":visible")) {
                if (b.length > 1) {
                    while (d < a) {
                        if ($j(b[d]).is(":visible")) {
                            return $j(b[d])
                        }
                        d++
                    }
                } else {
                    return b
                }
            }
        }
    }, isTouchDevice: function () {
        return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
    }, effect: "fade"
};
CONVERSE.CONENTWRAPPER = {
    init: function () {
        this.kvslide();
        this.fillcolor();
        this.slideModule();
        this.resizeHandle();
        this.favoritesClick();
        this.slideLeft()
    }, kvslide: function () {
        var b = this, f = $j(".slide"), d = $j(".rslides_tabs"), e = $j(".rslides_title li"),
            g = $j(".slide").siblings(".right"), c = $j(".slide").siblings(".left"), a;
        if (f.length > 0) {
            $j(".rslides_title li").eq(0).attr("class", "select");
            f.cycle({
                fx: (CONVERSE.DEFAULTS.isTouchDevice()) ? "scrollHorz" : "fade",
                next: g,
                prev: c,
                pager: ".rslides_tabs",
                pagerEvent: "mouseover",
                timeout: 5000,
                prevNextClick: function (h, i) {
                    e.attr("class", "");
                    e.eq(i).addClass("select")
                },
                after: function (i, h, k) {
                    var j = $j(h).index();
                    e.attr("class", "");
                    e.eq(j).addClass("select")
                }
            });
            e.mousemove(function (i) {
                var h = $j(this).index();
                e.attr("class", "");
                $j(this).addClass("select");
                d.children().eq(h).trigger("mouseover");
                return false
            });
            $j(".hoverimg", ".homeslide").hover(function () {
                $j(this).attr("src", $j(this).attr("src").replace(".jpg", "_hover.jpg"))
            }, function () {
                $j(this).attr("src", $j(this).attr("src").replace("_hover.jpg", ".jpg"))
            });
            $j(".hovertext", ".homeslide").hover(function () {
                $j(this).attr("src", $j(this).attr("src").replace(".png", "_hover.png"))
            }, function () {
                $j(this).attr("src", $j(this).attr("src").replace("_hover.png", ".png"))
            })
        }
    }, fillcolor: function () {
        var a = this;
        var b = $j(".pdlcolorbox li");
        var c = "<div class='colorarrow-content'>";
        c += "<div class='colorarrow arrowleft'></div>";
        c += "<div class='colorarrow arrowright'></div>";
        c += "</div>";
        $j.each(b, function () {
        });
        $j(".pdlcolorbox").each(function () {
        });
        $j(".pdlcolorbox li").live("mouseenter", function () {
            $j(this).siblings("li").removeClass("select");
            $j(this).addClass("select");
            $j(this).parents("dl").find("dt").find("img").attr("src", domain_image + "/resources/product/" + $j(this).attr("skucode") + "/" + $j(this).attr("skucode") + "_1B_NEW.png?" + version_image);
            var f = $j(this).attr("favoritecount");
            $j(this).parents("dd").next().html("<i></i>" + f + "收藏");
            var e = $j(this).closest("dl").find("dt a");
            var d = e.attr("href");
            if (d.indexOf("item.htm") > -1) {
                e.attr("href", d.replace(/(\/\w+\/)\w+(\/[\S\s]+)/, "$1" + $j(this).attr("skucode") + "$2"))
            }
        });
        this.slideColor()
    }, slideColor: function (e) {
        var c = $j(e).parent().siblings(), a = $j(e), d = 0, b = this;
        c.find(".colorarrow").click(function () {
            var h = $j("li", a).length;
            var i = h - 4, j;
            var g = h - 1;
            var f = $j(this).attr("class").indexOf("arrowleft") > 0 ? 1 : -1;
            $j(this).attr("class").indexOf("arrowleft") > 0 ? (d < i ? d++ : d = 0) : (d > -1 * i ? d-- : d = 0);
            d == 0 ? c.find(".arrowleft").hide() : c.find(".arrowleft").show();
            d == -1 * i ? c.find(".arrowright").hide() : c.find(".arrowright").show();
            a.animate({"margin-left": b.boxwapper * d}, 300);
            return false
        })
    }, favoritesClick: function () {
        $j(".collection-icon").live("click", function () {
            var e = $j(this).parent().find(".p-l-name").text();
            var b = $j(this).parent().attr("skucode");
            var c = _contextPath + "/myaccount/add_to_favorite.json";
            var a = loxia.syncXhr(c, {skuCode: b});
            if (!a) {
                showMessage("收藏失败");
                return false
            }
            if (a.errorCode) {
                if (a.errorCode == "notLogin") {
                    $j(".log-sign-button .log").trigger("click");
                    return false
                }
            }
            if (a.result) {
                if (a.result == "fail") {
                    showMessage("收藏失败");
                    return false
                }
                if (a.result == "already") {
                    showMessage("您已收藏该商品");
                    return false
                }
                if (a.result == "success") {
                    var d = parseInt($j.trim($j(this).text()));
                    if (isNaN(d)) {
                        return
                    }
                    d++;
                    showMessage("收藏成功");
                    addFavoritesListGridsum(e)
                }
            }
        })
    }, slideModule: function () {
        $j(".bs-container").hover(function (p) {
            p.preventDefault();
            if ($j(".cur", this).length > 0) {
                return
            }
            var j = $j(this).index();
            f(j);
            $j(".bs-container .cur").removeClass("cur");
            $j(".brand-segments .visible").stop().fadeOut().removeClass("visible");
            $j(".list-slide-container:eq(" + j + ")").stop().fadeIn(function () {
                $j(window).trigger("scroll")
            }).addClass("visible");
            $j(".bs-container:eq(" + j + ")").find(".bs-title").addClass("cur");
            var o = $j(this);
            var g = o.data("loaded");
            if (g != "yes") {
                var l = $j(this).data("slide");
                loxia.asyncXhrGet(_contextPath + "/loadHomeProducts.htm", {propertyCode: l}, {
                    success: function (i) {
                        o.data("loaded", "yes");
                        var r = $j("#list-slide-container-" + l);
                        r.html(i);
                        r.find(".l-s-grid:last").addClass("noborder");
                        var s = r.find(".product-list-slide");
                        var q = s.find(".brand-product").height();
                        s.height(q);
                        $j("#list-slide-container-" + l + " dt img").lazyload({
                            effect: "fadeIn",
                            placeholder: CONVERSE.DEFAULTS.placeholderImg
                        });
                        $j(window).trigger("scroll")
                    }
                })
            } else {
                var l = $j(this).data("slide");
                var m = $j("#list-slide-container-" + l);
                var n = m.find(".product-list-slide");
                if (n.height() == 0) {
                    var k = n.find(".brand-product").height();
                    n.height(k)
                }
            }
        }, function () {
        });

        function f(h) {
            var j = h, k = h + 1;
            var g = parseInt(12 * k + 13.5 * j);
            $j(".brand-menu").stop().animate({left: g + "%"}, 600);
            return false
        }

        if ($j(".list-slide-container").length > 0) {
            var b = $j(".product-list-slide").find(".brand-product").height();
            $j(".product-list-slide").height(b)
        } else {
            $j(".product-list-slide").each(function () {
                var g = $j(this).find(".brand-product").height();
                $j(this).height(g)
            })
        }
        var c = $j(".product-list-slide");
        var e = $j(".recent-slide");
        var a, d;
        e.length > 0 && (a = e.siblings(".left"), d = e.siblings(".right"), e.cycle({
            fx: "scrollHorz",
            timeout: 0,
            speedIn: 600,
            speedOut: 600,
            next: $j(d),
            prev: $j(a),
            after: function () {
                $j(window).trigger("scroll")
            }
        }))
    }, resizeSlide: function () {
        var b = $j(window).width(), e = 500 / 1280;
        var f = Math.round(b * e);
        $j(".homecontent").css("width", b + "px");
        $j(".slidecontent").css({width: b + "px", height: f + "px"}).stop(true, true).fadeIn(600);
        var a = $j(document).height(), c = $j("#header").height();
        var d = a;
        if ($j(window).height() >= d) {
            $j(".blackbg").css({height: d, top: 0})
        }
    }, positionFooter: function () {
        var c = $j(".footer-wrapper").offset().top, b = $j(".footer-wrapper").height(), a = $j(window).height();
        c <= (a - b) ? $j(".footer-wrapper").css({
            position: "absolute",
            bottom: "0px"
        }) : $j(".footer-wrapper").css({position: "relative"})
    }, fillcolorHandler: function (d) {
        var a = parseInt(d.length * this.boxwapper - this.boxmargin);
        var c = $j(".pdlcolorbox-slidecontent").width() - a;
        var b = parseInt(c / 2);
        d.parent().css("margin-left", b + "px")
    }, variableColorbox: function () {
        var a = this;
        if ($j(window).width() >= 1000) {
            a.boxwapper = 50;
            a.boxmargin = 0
        } else {
            if ($j(window).width() < 1000 && $j(window).width() >= 768) {
                a.boxwapper = 40;
                a.boxmargin = 0
            } else {
                if ($j(window).width() < 768) {
                    a.boxwapper = 50;
                    a.boxmargin = 0
                }
            }
        }
    }, resizeHandle: function () {
        var a = this;
        a.variableColorbox();
        $j(".pdlcolorbox").each(function () {
            var b = $j("li", this);
            b.length <= 4 && a.fillcolorHandler(b)
        });
        a.resizeSlide();
        $j(window).resize(function () {
            var b = $j(".visible .brand-product").height();
            $j(".product-list-slide").height(b);
            a.variableColorbox();
            $j(".pdlcolorbox").each(function () {
                var c = $j("li", this);
                c.length <= 4 && a.fillcolorHandler(c)
            });
            a.resizeSlide()
        })
    }, slideLeft: function () {
        $j(".filter-category-detail dl dt").live("click touchend", function (b) {
            b.preventDefault();
            if (!$j(this).parent().hasClass("minus")) {
                var c = $j(this).closest("dl").index();
                $j(".filter-category-detail dl:not(:eq(" + c + "))").animate({height: 25}, 500);
                var a = 0;
                $j(this).closest("dl").children().each(function () {
                    a += $j(this).outerHeight(true)
                });
                $j(this).closest("dl").animate({height: a}, 500, function () {
                });
                $j(".filter-category-detail dl.minus").removeClass("minus");
                $j(this).closest("dl").addClass("minus")
            } else {
                $j(this).closest("dl").animate({height: 25}, 500, function () {
                });
                $j(this).closest("dl").removeClass("minus")
            }
        })
    }
};
CONVERSE.HEADER = {
    init: function () {
        var a = this;
        this.customInputAndSelect();
        this.headerSlideEvent();
        this.cartEvent();
        this.headerMenuSlide();
        this.loginfadeEvent();
        this.fadeBlackbackground();
        this.navslideDown();
        this.scrollHandle();
        this.closeLogoutpopup();
        this.compatIE()
    }, customInputAndSelect: function () {
        $j(".login-content input,.registration input,.search-content input").inputtext();
        $j(".selectbox select").selectEvent()
    }, headerMenuSlide: function () {
        $j(".logined").hover(function () {
            $j(".toppoint").css({display: "block"});
            $j(this).find("ul").stop().slideDown(200)
        }, function () {
            $j(".toppoint").css({display: "none"});
            $j(this).find("ul").stop().slideUp(200)
        });
        $j(".chatcontent").click(function () {
            $j("#live800iconlink").click()
        })
    }, headerSlideEvent: function () {
        var a = this;
        $j(".log-sign-button").click(function (g) {
            var d = $j(g.target).attr("class"), h, i, c = g.target.nodeName, b, e;
            var f = $j(".login-content .memberlogin .verifyimg");
            switch (d) {
                case"log":
                    h = $j(".login-content"), i = $j(".registration-content");
                    break;
                case"register":
                    h = $j(".registration-content"), i = $j(".login-content"), b = $j(".register-login-box"), e = $j(".forget-password");
                    f = h.find(".verifyimg");
                    break;
                default:
                    h = h = $j(".login-content"), i = $j(".registration-content")
            }
            if (!f.attr("src")) {
                f.attr("src", f.data("src"))
            }
            $j(".header-expanded-content").is(":visible") ? (c == "SPAN" ? i.fadeOut().stop().fadeOut(300, function () {
                h.fadeIn();
                if ("undefined" !== typeof b) {
                    b.css("display", "inline-block");
                    e.hide()
                }
            }) : ($j(this).removeClass("active"), i.hide(), h.fadeOut(300, function () {
                $j(".header-expanded-content").slideUp()
            }), $j(".blackbg").fadeOut(400, function () {
                $j(this).css("z-index", "1000")
            }))) : ($j("#header .active").removeClass("active"), $j(this).addClass("active"), CONVERSE.DEFAULTS.effect = "fade", a.dropDowncontent($j(".header-expanded-content"), h, i))
        })
    }, dropDowncontent: function (c, h, g, e) {
        var f = CONVERSE.DEFAULTS.headerExpand(), b = $j(".blackbg"), d = $j(this);
        g && g.hide();
        "undefined" == typeof f ? c.slideDown(500, function () {
            a()
        }) : f.slideUp(500, function () {
            c.slideDown(500, function () {
                a()
            })
        });
        b.css("z-index", "99").fadeIn(500);

        function a() {
            if (h) {
                CONVERSE.DEFAULTS.effect == "fade" ? h.fadeIn() : h.slideDown(500)
            }
            $j(window).trigger("scroll");
            "undefined" !== typeof e && setTimeout(e, 500)
        }
    }, loginfadeEvent: function () {
        $j(".create").click(function () {
            $j(".login-content").fadeOut(300, function () {
                $j(".registration-content").fadeIn()
            });
            $j(".registration-content .verifyimg").attr("src", $j(".registration-content .verifyimg").data("src"))
        });
        $j(".forgetpassword").click(function () {
            $j(".register-login-box").fadeOut(300);
            setTimeout(function () {
                $j(".forget-password").css("display", "inline-block").fadeIn()
            }, 300);
            loadSecuritycode("p_f_w")
        })
    }, productlistLazy: function () {
        $j(".search-product-list").each(function () {
            $j("dt", this).find("img").lazyload({effect: "fadeIn", placeholder: CONVERSE.DEFAULTS.placeholderImg})
        });
        $j(window).trigger("scroll")
    }, searchEvent: function () {
        $j(".popular-keywords").addClass("clearfix");
        var a = this;
        $j(".search-button , .search-404-btn").click(function () {
            var b = $j.trim($j("#search_txt").val());
            b = escape_cr(b);
            if ($j(".search-content").is(":visible")) {
                $j("#header .active").removeClass("active");
                $j(".search-result").slideUp(500, function () {
                    $j(".search-content").slideUp(function () {
                        $j(".blackbg").css("z-index", "1000").fadeOut(400)
                    })
                })
            } else {
                $j("#header .active").removeClass("active");
                $j(this).addClass("active");
                CONVERSE.DEFAULTS.effect = "slideDown";
                if ("想找什么随便搜" != b && 0 < b.length) {
                } else {
                    $j(".search-result").css("padding-bottom", "0px").html("");
                    a.dropDowncontent($j(".search-content"), $j(".search-result"))
                }
            }
        });
        $j(".search-content .close").click(function () {
            $j(".search-result").slideUp(500, function () {
                $j(".search-content").slideUp(function () {
                    $j(".blackbg").fadeOut(400, function () {
                        $j(this).css("index", "1000")
                    })
                })
            });
            $j("#header .active").removeClass("active")
        })
    }, cartEvent: function () {
        var a = this;
        var b = $j(".cart-content");
        b.length > 0 && ($j(".cart-button").click(function () {
            b.is(":visible") ? ($j("#header .active").removeClass("active"), $j(".cart-resulte").fadeOut(500, function () {
                b.slideUp(function () {
                    $j(".blackbg").css("z-index", "1000").fadeOut(400)
                })
            })) : ($j("#header .active").removeClass("active"), $j(this).addClass("active"), CONVERSE.DEFAULTS.effect = "fade", a.dropDowncontent(b, $j(".cart-resulte")))
        }), $j(".c-r-close").click(function () {
            $j(".cart-resulte").fadeOut(500, function () {
                b.slideUp(function () {
                    $j(".blackbg").css("z-index", "1000").fadeOut(400)
                })
            });
            $j("#header .active").removeClass("active")
        }))
    }, fadeBlackbackground: function () {
        var a = this;
        var b = '<div class="blackbg">';
        b += '<img width="100%" height="100%" src=' + CONVERSE.DEFAULTS.blackBg() + " />";
        b += "</div>";
        $j("body").append(b);
        $j(".blackbg").click(function () {
            if (loading) {
                return
            }
            var d = CONVERSE.DEFAULTS.headerExpand();
            var c = $j(this);
            var e = $j(".s-c-popup");
            e.is(":visible") && e.fadeOut();
            c.fadeOut(200, function () {
                "undefined" !== typeof d && d.slideUp(400, function () {
                    d.attr("class") == "navigation-expanded" && d.css({height: "0px", opacity: "0"})
                });
                $j(".header-content .active,.level1 .active").removeClass("active")
            })
        })
    }, navslideDown: function () {
        var c = true;
        var b = $j(".level1 li.has-sub"), a = $j(".navigation-expanded");
        b.hover(function () {
            if ($j(this).hasClass("active")) {
                return
            }
            if ($j(".header-expanded .header-expanded-content").is(":visible") || $j(".header-expanded .search-content").is(":visible")) {
                return
            }
            var g = a.find("ul").height();
            $j(".header-content .active").removeClass("active");
            var h = a.eq($j(this).index()).children("ul").size();
            var f = Math.round(h * g + 2);
            var e = $j(this).index(), j = $j(".active").index() || 0, d = CONVERSE.DEFAULTS.headerExpand();
            b.attr("class", "");
            $j(this).addClass("active");
            if (a.eq(j).is(":visible")) {
                c = true;
                a.eq(j).fadeOut(300, function () {
                    if (c) {
                        $j(this).css({height: "0", opacity: "0"});
                        a.hide();
                        a.eq(e).stop().css({opacity: "1", height: f + "px"}).fadeIn();
                        $j(".blackbg").css("z-index", "99").fadeIn(300);
                        c = false
                    }
                })
            } else {
                c = false;
                "undefined" !== typeof d ? d.slideUp(500, function () {
                    a.eq(e).show().animate({opacity: "1", height: f + "px"}, 400)
                }) : a.eq(e).show().animate({
                    opacity: "1",
                    height: f + "px"
                }, 400), $j(".blackbg").css("z-index", "99").fadeIn(400)
            }
        }, function () {
        });
        $j("#navigation").mouseleave(function () {
            if ($j(".header-expanded-content").is(":visible") || $j(".search-content").is(":visible")) {
                return false
            }
            $j(".navigation-expanded").stop(true, true);
            $j(".navigation-expanded, .blackbg").fadeOut(300);
            $j(".blackbg").fadeOut();
            $j("#navigation .navigation-content li").removeClass("active")
        });
        $j(".no-expanded").mouseover(function () {
            if ($j(".header-expanded-content").is(":visible") || $j(".search-content").is(":visible")) {
                return false
            }
            $j(".navigation-expanded, .blackbg").fadeOut(300);
            $j("#navigation .navigation-content li").removeClass("active")
        })
    }, stickHeader: function (e, b) {
        var c = $j("#header").height() + $j("#navigation").height(), d = $j(e);
        var a = "<div class='stickspace' style='height:" + c + "px;'></div>";
        $j(".stickspace").length == 0 && $j("body").prepend(a);
        this.checkHeaderStick(b, d)
    }, checkHeaderStick: function (e, d) {
        var c, b, a;
        if (e == 0) {
            d.height(0);
            c = 50;
            b = 30;
            a = 30;
            $j("#navigation .level1 a").addClass("stickicon");
            $j(".toppoint").css({top: 45});
            $j(".loginmenu").css({top: 60});
            "undefined" == typeof CONVERSE.DEFAULTS.headerExpand() ? d.animate({height: 80}, 300) : d.height(80)
        } else {
            if (e == 1) {
                c = 80;
                b = 50;
                a = 35;
                $j("#navigation .level1 a").removeClass("stickicon");
                $j(".toppoint").css({top: 64});
                $j(".loginmenu").css({top: "100%"})
            }
        }
        $j("#header").css({height: c + "px", "line-height": c + "px"});
        $j("#navigation").css({height: b + "px", "line-height": a + "px"});
        return false
    }, closeLogoutpopup: function () {
        $j(".loginout-popup .closeBtn").click(function () {
            $j(this).parent().fadeOut(300, function () {
                $j(".blackbg").fadeOut()
            })
        })
    }, clearfix: function () {
        $j(".clearfix").append('<div class="clear"></div>')
    }, resizeHandle: function () {
        $j(window).resize(function () {
            var a = new CONVERSE.TINYSEACHSCROLL();
            a.initScroll()
        })
    }, logoutEvent: function () {
        $j("body").on("click", ".logout-btn", function (a) {
            a.preventDefault();
            loxia.asyncXhr(_contextPath + "/member/logout.json", {da: new Date().getTime()}, {
                success: function (b, c) {
                    if (b && b.result) {
                        shopCartNumUtil.saveCartNum($j("#cartQuantity").val());
                        window.location.href = _contextPath + "/index.htm"
                    }
                }
            })
        })
    }, scrollHandle: function () {
        if ($j("#stickHeader").length == 0) {
            return
        }
        var b = this, a = 1;
        var d = $j("#header").height() + $j("#navigation").height();
        var c = $j("#stickHeader").length > 0 ? "#stickHeader" : ".stickHeader";
        b.stickHeader(c, a);
        var e = $j(c);
        e.addClass("clearfix");
        $j(window).bind("scroll", function () {
            if ($j(window).scrollTop() > d) {
                a--;
                $j(".live800 a img").css({"margin-top": "10px"});
                a == 0 && (e.css({top: "0px"}), b.checkHeaderStick(a, e))
            } else {
                if ($j(window).scrollTop() == 0) {
                    a = 1;
                    $j(".live800 a img").css({"margin-top": "25px"});
                    e.css({height: d + "px"});
                    b.checkHeaderStick(a, e)
                }
            }
        })
    }, compatIE: function () {
        if ($j.browser.msie && $j.browser.version < 9) {
            this.clearfix()
        }
    }, initLookBookSize: function () {
        var a = $j(window).width(), b = 742 / 1900;
        var c = Math.round(a * b);
        $j(".home-lookbook").css({width: a + "px", height: c + "px"})
    }
};
CONVERSE.TINYSEACHSCROLL = function () {
    var b = this, a = 0;
    b.s_obj = $j(".search-product-list", ".search-result");
    b.s_name = "viewport";
    b.s_objclass = "s-scroll";
    var c = '<div class="scrollbar" style="position:absolute;right:10px;top:0px;width:10px;background-color:#FFF;">';
    c += '<div class="track">';
    c += '<div class="thumb" style="width:10px;height20px;background-color:#000;position:absolute;z-index:10;"></div>';
    c += '<i style="width:1px;height:100%;background-color:#b7b7b7;left:5px;top:0px;position:absolute;z-index:5px;"></i>';
    c += "</div>";
    c += "</div>";
    b.root = function () {
        $j("." + b.s_objclass).length == 0 && (b.s_obj.wrap("<div id=" + b.s_name + " class=" + b.s_name + ' style="width:100%;height:100%;position:relative;"></div>'), $j("." + b.s_name).wrap("<div class=" + b.s_objclass + ' style="overflow:hidden;width:100%;position:relative;"></div>'), $j("." + b.s_objclass).append(c), b.s_obj.addClass("overview"))
    };
    b.resizeHandle = function () {
        var d = $j(window).height(),
            f = $j("#header").height() + $j("#navigation").height() + $j(".popular-keywords").height() + 230;
        var e = d - f;
        b.s_obj.height() > e ? ($j("." + b.s_objclass).css("height", e + "px"), $j(".scrollbar", "." + b.s_objclass).show(), a = 1) : ($j("." + b.s_objclass).css("height", "auto"), $j(".scrollbar", "." + b.s_objclass).hide(), a = 0)
    };
    b.initScroll = function () {
        b.root();
        b.resizeHandle();
        var d = $j("." + b.s_objclass);
        if (d.length > 0 && a == 1) {
            if (jQuery.browser.msie && jQuery.browser.version == 6) {
                $j(".scrollbar", "." + b.s_objclass).remove();
                b.s_obj.css({position: "static"});
                $j(".t.s_name", "." + b.s_objclass).css({overflowY: "scroll"})
            } else {
                $j(".t.s_name", "." + b.s_objclass).css("overflow", "hidden");
                $j(".search-result", ".search-content").css("padding-bottom", "15px");
                d.tinyscrollbar()
            }
        }
    }
};

function compate() {
    Modernizr.load([{
        test: Modernizr.flexbox && Modernizr.boxshadow,
        nope: [domain_js + "/js/IE9.js?20150204", domain_js + "/css/cssforie.css?20150204"]
    }])
}

$j(function () {
    compate();
    CONVERSE.HEADER.init();
    CONVERSE.CONENTWRAPPER.init()
});
$j(window).load(function () {
    CONVERSE.HEADER.productlistLazy();
    CONVERSE.HEADER.searchEvent();
    CONVERSE.HEADER.resizeHandle()
});
var countDownInterval = null;
var countDownEle = null;

function countDown() {
    var c = $j(this);
    countDownEle = c;
    if (c.data("btnClickFlag")) {
        console.log("重复点击！");
        return
    }
    c.data("btnClickFlag", true);
    var b = 60;
    var e = c.find(".send-mobile-desction");
    d();
    if (!e || e.length <= 0) {
        c.removeData("btnClickFlag");
        console.log("Can not found the element who class is 'send-mobile-desction'!");
        return
    }
    if (countDownInterval) {
        clearInterval(countDownInterval)
    }
    var a = setInterval(function () {
        d();
        if (b < 0) {
            clearInterval(a);
            c.removeData("btnClickFlag");
            e.html("发送短信验证码")
        }
    }, 1000);
    countDownInterval = a;

    function d() {
        e.html(b + "S...");
        b--
    }
}

function resetCountDown() {
    if (!countDownInterval) {
        return
    }
    countDownEle.removeData("btnClickFlag");
    clearInterval(countDownInterval);
    countDownEle.find(".send-mobile-desction").html("发送短信验证码")
}

var statusLock = function () {
    var a = this;
    a.lockStatus = false;
    a.padlock = function () {
        a.lockStatus = true
    };
    a.deblocking = function () {
        a.lockStatus = false
    };
    a.isLocking = function () {
        return a.lockStatus
    }
};
var loadAnimate = function () {
    var a = this;
    a._loading = {};
    a.start = function () {
        a.displayBg();
        a._loading = $j(".loading");
        var c = a._loading;
        if (c.length == 0) {
            c = $j('<div class="loading" style="width:32px;height:32px;position:absolute;left:50%;margin-left:-16px;display:none;z-index:2000;"><img width="32" height="32" src="' + domain_image + '/images/commons/indicator_verybig.gif"/><div>');
            $j("body").append(c)
        }
        var b = parseInt($j(document).scrollTop());
        c.css("top", b + $j(window).height() / 2 + "px").show();
        a._loading = c
    };
    a.close = function () {
        var b = a._loading;
        if (b.length <= 0) {
            console.log("加载动画未开启");
            return
        }
        b.hide();
        a.hideBg()
    };
    a.hideBg = function () {
        $j(".blackbg").fadeOut(400)
    };
    a.displayBg = function () {
        $j(".blackbg").css("z-index", "1000").height($j(document).height()).show()
    }
};

function formatCurrency(a) {
    a = a.toString().replace(/\$|\,/g, "");
    if (isNaN(a)) {
        a = "0"
    }
    sign = (a == (a = Math.abs(a)));
    a = Math.floor(a * 100 + 0.50000000001);
    cents = a % 100;
    a = Math.floor(a / 100).toString();
    if (cents < 10) {
        cents = "0" + cents
    }
    for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3); b++) {
        a = a.substring(0, a.length - (4 * b + 3)) + "," + a.substring(a.length - (4 * b + 3))
    }
    return (((sign) ? "" : "-") + a + "." + cents)
};
$j(document).ready(function () {
    if (self.frameElement && self.frameElement.tagName == "IFRAME") {
        var c = self.location.href;
        if (c.indexOf("http:") != -1) {
            c = c.replace("http:", "https:")
        }
        top.location.href = c
    }
    $j.extend(CONVERSE.HEADER, {
        logoutEvent: function () {
            $j("body").on("click", ".logout-btn", function (d) {
                d.preventDefault();
                a();
                shopCartNumUtil.deleteCartNum()
            });
            $j("body").on("click", ".loginout-popup .closeBtn", function () {
                document.location.href = _contextPath + "/index.htm"
            })
        }
    });
    CONVERSE.HEADER.logoutEvent();

    function a() {
        loxia.asyncXhr(_contextPath + "/member/logout.json", {da: new Date().getTime()}, {
            success: function (f, h) {
                if (f && f.result) {
                    shopCartNumUtil.deleteCartNum();
                    var d = $j(".loginout-popup");
                    if (d.length == 0) {
                        d = $j('<div class="loginout-popup"></div>');
                        d.html('<div class="l-p-container"><p class="title">您已成功退出</p><p><a href="' + _contextPath + '/index.htm" class="button">继续购物</a></p><p>点击继续购物按钮将返回商城首页</p></div><div class="closeBtn"></div>');
                        d.appendTo($j("body"))
                    }
                    var e = $j(".popupbg");
                    if (e.length == 0) {
                        e = $j('<div class="popupbg"></div>');
                        $j("body").append(e)
                    }
                    var g = parseInt($j(document).scrollTop());
                    d.css({top: g + $j(window).height() / 2 + "px", "z-index": 1000});
                    e.height($j(document).height()).show()
                }
            }
        })
    }

    if (getCookie("register_pop") == "1") {
        showRegisterPop();
        var b = new Date();
        b.setTime(b.getTime() + (1000 * 60 * 60 * 24 * 365 * 10));
        document.cookie = "register_pop=-1;path=/;expires=" + b.toGMTString()
    }
    $j("#none-register").click(function () {
        if (gt) {
            GEETEST.register(GEETEST.heardRegisterCall)
        }
        if (!gt) {
            loadSecuritycode("p_r_w")
        }
    })
});

function showRegisterPop() {
    loxia.asyncXhrGet("/member/popregister.json", {}, {
        success: function (c) {
            var a = $j(c);
            var b = $j(".popupbg");
            if (b.length == 0) {
                b = $j('<div class="reg popupbg"></div>');
                $j("body").append(b)
            }
            $j("body").append(a);
            b.height($j(document).height()).show();
            $j(".registration-content").show();
            a.show();
            $j(".blackbg").hide();
            createBirthdaySelect();
            if (gt) {
                GEETEST.register(GEETEST.popupRegisterCall)
            }
            $j("#pop-register .send-mobile-desction").click(popSendSMS)
        }
    })
}

function popSendSMS() {
    if (!$j($j("#top-btn-send-mobile")[0]).data("btnClickFlag")) {
        if (!checkMobile($j("#pop-mobile-reg").val())) {
            $j("#pop-mobile-reg").siblings(".error").html("请输入11位有效中国手机号码！").show();
            return
        }
        if (!gt) {
            var a = $j("#pop-validateCode-reg").val();
            if (!a) {
                $j("#pop-validateCode-reg").siblings(".error").html("您填写的图片验证码有误，请重新输入！").show();
                detectImgReload("pc_popregister");
                return
            }
            if (!checkPopImgCode(a)) {
                $j("#pop-validateCode-reg").siblings(".error").html("您填写的图片验证码有误，请重新输入！").show();
                detectImgReload("pc_popregister");
                return
            }
        } else {
            var a = $j("#challenge").val();
            if (!a) {
                $j("#popup-regist-gt").children(".error").html("请先验证！");
                return
            }
        }
        countDown.apply($j("#top-btn-send-mobile")[0]);
        sendRegSmsCode.apply($j("#pop-register .send-mobile-desction")[0], [detectImgReload("pc_popregister")])
    }
}

function checkImgCode(b) {
    if (!b) {
        return false
    }
    var a = loxia.syncXhr("/member/getValidateCode.json", {validatecode: b, iId: $j("#LBD_VCID_pc_register").val()});
    return !!a.result
}

function checkPopImgCode(b) {
    if (!b) {
        return false
    }
    var a = loxia.syncXhr("/member/getPopValidateCode.json", {
        validatecode: b,
        iId: $j("#LBD_VCID_pc_popregister").val()
    });
    return !!a.result
}

function createBirthdaySelect() {
    $j("#pop-form").find(".selectbox select").selectEvent();
    var b = new Date();
    var d = b.getFullYear();
    var e = b.getMonth() + 1;
    var a = b.getDate();
    $j("#pop-birthday-year").change(function () {
        $j(".birthday-box .selectbox").css("border", "");
        if ($j(this).find("option:selected").val() == d) {
            for (var f = $j("#pop-birthday-month option").length + 1; f <= 12; f++) {
                $j("#pop-birthday-month").append('<option value="' + f + '">' + f + "</option>")
            }
            $j("#pop-birthday-month option:gt(" + (e - 1) + ")").remove()
        } else {
            if ($j("#pop-birthday-month option").length < 12) {
                for (var f = $j("#pop-birthday-month option").length + 1; f <= 12; f++) {
                    $j("#pop-birthday-month").append('<option value="' + f + '">' + f + "</option>")
                }
            }
        }
        $j("#pop-birthday-month").trigger("change");
        $j(this).add("#pop-birthday-month").add("#pop-birthday-date").prev(".selectindex").addClass("pop-block")
    });
    for (var c = 1954; c <= d; c++) {
        $j("#pop-form").find("#pop-birthday-year").append('<option value="' + c + '">' + c + "</option>")
    }
    $j("#pop-birthday-month").change(function () {
        var k = $j("#pop-birthday-year").find("option:selected").val();
        var j = $j(this).find("option:selected").val();
        var f = 31;
        if (k == d && j == e) {
            f = a
        } else {
            if (j == 4 || j == 6 || j == 9 || j == 11) {
                f = 30
            } else {
                if (j == 2 && k % 4 == 0) {
                    f = 29
                } else {
                    if (j == 2 && k % 4 != 0) {
                        f = 28
                    }
                }
            }
        }
        $j("#pop-birthday-date option:gt(" + (f - 1) + ")").remove();
        for (var h = $j("#pop-birthday-date option").length + 1; h <= f; h++) {
            $j("#pop-birthday-date").append('<option value="' + h + '">' + h + "</option>")
        }
        $j("#pop-birthday-date").trigger("change");
        var g = $j("#pop-birthday-date option:selected").val();
        $j("#pop-birthday-reg").val(k + "-" + ((j < 10) ? "0" : "") + j + "-" + ((g < 10) ? "0" : "") + g)
    });
    $j("#pop-birthday-date").change(function () {
        var f = $j("#pop-birthday-date option:selected").val();
        var h = $j("#pop-birthday-year").find("option:selected").val();
        var g = $j("#pop-birthday-month").find("option:selected").val();
        $j("#pop-birthday-reg").val(h + "-" + ((g < 10) ? "0" : "") + g + "-" + ((f < 10) ? "0" : "") + f)
    });
    $j("#pop-birthday-year option:eq(0)").attr("selected");
    $j("#pop-birthday-year").trigger("change")
}

function sendRegSmsCode(d) {
    var g = $j(this).parents().find("[id$=mobile-reg]");
    var e = g == undefined ? "" : g.eq(0).val();
    $j(this).parent().siblings(".error").html("");
    $j(this).parent().siblings("span").html("");
    var c = {way: "register", mobile: e};
    var a = "";
    if ($j(this).attr("id") == "btn-descption") {
        c.ins = "p_r_w";
        c.LBD_VCID_pc_register = $j("#LBD_VCID_pc_register").val();
        c.scode = $j("#validateCode-reg").val();
        a = "pc_register"
    } else {
        c.ins = "p_pr_w";
        c.LBD_VCID_pc_popregister = $j("#LBD_VCID_pc_popregister").val();
        a = "pc_popregister";
        c.scode = $j("#pop-validateCode-reg").val()
    }
    if (gt) {
        c.challenge = $j("#challenge").val();
        c.validate = $j("#validate").val();
        c.seccode = $j("#seccode").val()
    }
    var b = _contextPath + "/member/sendSMSCode.json";
    var f = loxia.syncXhrPost(b, c);
    if (f && f.result) {
        $j(this).parent().siblings(".error").html("发送短信成功").show();
        detectImgReload(a)
    } else {
        if (f.mess) {
            $j(this).parent().siblings(".error").html(f.mess).show()
        } else {
            $j(this).parent().siblings(".error").html("发送短信失败，请稍后重试").show()
        }
        if (!!d) {
            d.apply(this)
        }
        resetCountDown()
    }
    if (!gt) {
        detectImgReload(a)
    } else {
        if ("pc_popregister" == a) {
            GEETEST.register(GEETEST.popupRegisterCall)
        } else {
            if ("pc_register" == a) {
                GEETEST.register(GEETEST.heardRegisterCall)
            }
        }
    }
}

function checkRegHasErrors() {
    var a = true;
    $j(".registration input").each(function () {
        if ($j(this).hasClass("error")) {
            a = false
        }
    });
    return a
}

CONVERSE.HEADER.headerSlideEvent = function () {
    var a = this;
    $j(".log-sign-button").click(function (f) {
        var d = $j(f.target).attr("class"), h, i, c = f.target.nodeName, b, e;
        switch (d) {
            case"log":
                h = $j(".login-content"), i = $j(".registration-content");
                var g = getCookie("loginNameNew");
                if (g != null && g != "") {
                    g = g.replace(/\"/g, "");
                    $j("#loginName").val(g)
                }
                if (gt) {
                    GEETEST.register(GEETEST.heardLoginCall)
                }
                if (h.is(":visible") && $j(".forget-password").is(":visible")) {
                    $j(".forget-password").fadeOut().stop().fadeOut(300, function () {
                        $j(".forget-password").hide();
                        $j(".register-login-box").fadeIn(300)
                    });
                    if (!gt) {
                        loadSecuritycode("p_l_w")
                    }
                    return
                }
                if (!gt) {
                    loadSecuritycode("p_l_w")
                }
                break;
            case"register":
                if (gt) {
                    GEETEST.register(GEETEST.heardRegisterCall)
                }
                h = $j(".registration-content"), i = $j(".login-content"), b = $j(".register-login-box"), e = $j(".forget-password");
                if (!gt) {
                    loadSecuritycode("p_r_w")
                }
                break;
            default:
                h = h = $j(".login-content"), i = $j(".registration-content");
                if (gt) {
                    GEETEST.register(GEETEST.heardLoginCall)
                }
                if (!gt) {
                    loadSecuritycode("p_l_w")
                }
        }
        if (!$j(".header-expanded-content").is(":visible")) {
            $j("#header .active").removeClass("active");
            $j(this).addClass("active");
            CONVERSE.DEFAULTS.effect = "fade";
            a.dropDowncontent($j(".header-expanded-content"), h, i);
            return
        }
        if (c != "SPAN") {
            $j(this).removeClass("active");
            i.hide();
            h.fadeOut(300, function () {
                $j(".header-expanded-content").slideUp()
            });
            $j(".blackbg").fadeOut(400);
            return
        }
        i.fadeOut().stop().fadeOut(300, function () {
            h.fadeIn();
            if ("undefined" !== typeof b) {
                b.css("display", "inline-block");
                e.hide()
            }
        })
    });
    $j(".infolist").children().eq(0).click(function () {
        $j(".s-c-popup").hide();
        $j(".log-sign-button .register").trigger("click");
        if ($j("#n-buy").val() == "active") {
            $j("#registration-btn").data("n-b", "true")
        }
    })
};
var _checkHeaderStick = CONVERSE.HEADER.checkHeaderStick;
var _resizeSlide = CONVERSE.CONENTWRAPPER.resizeSlide;
$j.extend(CONVERSE.CONENTWRAPPER, {
    checkHeaderStick: function (b, a) {
        this.resizePopupBg();
        return _checkHeaderStick(b, a)
    }, resizeSlide: function () {
        this.resizePopupBg();
        _resizeSlide(arguments)
    }, resizePopupBg: function () {
        $j(".popupbg").height($j(document).height())
    }, pdlcolorHover: function () {
        var a = this;
        $j("body").on("mouseenter mouseleave", ".search-product-list dl, .product-list dl", function (d) {
            if (d.type == "mouseenter") {
                $j(this).find(".p-l-name").addClass("underline");
                var c = _contextPath + "/product/findSkuFavoriteCount.json";
                var b = loxia.syncXhr(loxia.encodeUrl(c, true), {skuId: $j(this).attr("skuid")});
                var f = b.skuFavorites;
                if (isNaN(f)) {
                } else {
                    $j(this).find(".collection-icon").html("<i></i>" + f + "收藏")
                }
                $j(this).find(".pdlcolor-content,.collection-icon").stop(true, true).fadeIn(150)
            } else {
                if (d.type == "mouseleave") {
                    $j(this).find(".p-l-name").removeClass("underline");
                    $j(this).find(".pdlcolor-content,.collection-icon").stop(true, true).fadeOut(150)
                }
            }
        })
    }
});

function detectImgReload(a) {
    var a = document.getElementById(a + "_CaptchaImage");
    if (a) {
        $j($j(a).parent()).trigger("click")
    }
}

function showMessage(b, e) {
    var a = $j("body > .message-popup");
    if (a.length == 0) {
        a = $j('<div class="message-popup"></div>');
        a.append('<div class="closeBtn close-message"></div>');
        a.append('<div class="l-p-content"><p class="title message"></p></div><div class="l-p-container"><p><a href="javascript:void(0);" class="button close-message">确定</a></p></div>');
        $j("body").append(a)
    }
    var c = $j(".popupbg");
    if (c.length == 0) {
        c = $j('<div class="popupbg"></div>');
        $j("body").append(c)
    }
    var d = parseInt($j(document).scrollTop());
    a.css("top", d + $j(window).height() / 2 + "px");
    a.find(".message").html(b);
    c.height($j(document).height()).show();
    a.show();
    $j(".blackbg").hide();
    a.find(".close-message").unbind().one("click", function () {
        c.hide();
        a.hide();
        if (typeof e == "function") {
            e()
        }
    })
}

function confirmMessage(j, g, i, e, f) {
    var a = $j("body > .confirm-popup");
    var h = "确定";
    var d = "取消";
    if (a.length == 0) {
        a = $j('<div class="confirm-popup"></div>');
        a.append('<div class="closeBtn cancel-message"></div>');
        if (null != e) {
            h = e
        }
        if (null != f) {
            d = f
        }
        a.append('<div class="l-p-container"><p class="title message"></p><p><a style="width:45%;float:left;" href="javascript:void(0);" class="button confirm-message">' + h + '</a><a style="width:45%;float:right;" href="javascript:void(0);" class="button cancel-message">' + d + "</a></p></div>");
        $j("body").append(a)
    }
    var c = $j(".popupbg");
    if (c.length == 0) {
        c = $j('<div class="popupbg"></div>');
        $j("body").append(c)
    }
    var b = parseInt($j(document).scrollTop());
    a.css("top", b + $j(window).height() / 2 + "px");
    a.find(".message").html(j);
    c.height($j(document).height()).show();
    a.show();
    $j(".blackbg").hide();
    a.find(".confirm-message").unbind().one("click", function () {
        c.hide();
        a.hide();
        if (typeof g == "function") {
            g()
        }
    });
    a.find(".cancel-message").unbind().one("click", function () {
        c.hide();
        a.hide();
        if (typeof i == "function") {
            i()
        }
    })
}

(function (a) {
    a.fn.extend({
        inputtext: function () {
            var b = $j(this);
            b.focus(function (e) {
                var d = $j(this);
                $j("body").find("input").each(function () {
                    $j(this).val() == "" && $j(this).siblings("span:first").show()
                });
                c(d)
            }).blur(function () {
                var d = $j(this);
                c(d)
            });
            a.each(b, function () {
                var d = $j(this);
                $j(this).siblings("span").click(function () {
                    $j(this).stop(true, true).fadeOut(200);
                    d.focus()
                })
            });

            function c(d) {
                d.val() == "" && (d.siblings("span:first").is(":visible") ? d.siblings("span:first").stop(true, true).fadeOut(200) : d.siblings("span:first").stop(true, true).fadeIn(200))
            }
        }, selectEvent: function () {
            var b = $j(this);
            var c = '<span class="selectindex"></span>';
            $j.each(b, function () {
                var d = $j(this).find("option:selected").text();
                if ($j(this).parent(".selectbox").find(".selectindex").length == 0) {
                    $j(this).parent(".selectbox").prepend(c)
                }
                $j(this).siblings(".selectindex").html(d);
                $j(this).focus(function () {
                }).blur(function () {
                }).change(function () {
                    var e = $j(this).find("option:selected").text();
                    $j(this).siblings(".selectindex").html(e)
                })
            })
        }
    })
})(jQuery);

function compate() {
    if (typeof Modernizr == "undefined") {
        return
    }
    var a = CONVERSE.DEFAULTS.contextpath();
    Modernizr.load([{
        test: Modernizr.flexbox && Modernizr.boxshadow,
        nope: [domain_js + "/js/IE9.js", domain_js + "/css/cssforie.css"]
    }])
}

var weixin_pop = '<div class="weixin-payment"><div class="weixin-logo">	<img src="' + domain_image + '/images/homepage/weixin-logo.jpg">	<span>手机微信扫描二维码支付</span></div><div class="qr-code">	<img id="QRimg" src=""></div><div class="closeBtn" id="QRclose" ></div></div><div class="popupbg the_block"></div>';
if (typeof (BotDetect) == "undefined") {
    BotDetect = function (a, v, s, m, n, i, f, u, d, c, j) {
        this.Id = a;
        this.InstanceId = v;
        var w = a + "_CaptchaImage";
        this.Image = document.getElementById(w);
        this.ImagePlaceholder = this.Image.parentNode;
        this.ControlsDisabled = false;
        var g = a + "_ReloadLink";
        var r = document.getElementById(g);
        if (r) {
            r.style.cssText = "display: inline-block !important";
            this.NewImage = null;
            this.ProgressIndicator = null;
            this.ReloadTimer = null;
            this.ReloadTimerTicks = 0;
            this.AutoReloadPeriod = Math.max((u - 10), 10) * 1000;
            this.AutoReloadTimeout = d * 1000;
            this.AutoReloadExpiredImage = f;
            this.AutoReloadPeriodSum = 0;
            this.AutoReloading = false;
            if (f) {
                if (this.AutoReloadTimer) {
                    clearTimeout(this.AutoReloadTimer)
                }
                var q = this;
                this.AutoReloadTimer = setTimeout(function () {
                    clearTimeout(q.AutoReloadTimer);
                    if (q.AutoReloadPeriodSum >= q.AutoReloadTimeout) {
                        q.DisableControls();
                        q.SessionExpired = true;
                        return
                    }
                    q.AutoReloading = true;
                    q.ReloadImage();
                    q.AutoReloading = false;
                    q.AutoReloadPeriodSum += q.AutoReloadPeriod;
                    q = null
                }, q.AutoReloadPeriod)
            }
        }
        var b = document.getElementById(this.Id + "_ReloadIcon");
        if (b) {
            this.ReloadIconSrc = document.getElementById(this.Id + "_ReloadIcon").src;
            this.DisabledReloadIconSrc = null;
            var e = document.createElement("img");
            var l = this;
            e.onload = function () {
                l.DisabledReloadIconSrc = this.src;
                l = null
            };
            e.src = this.ReloadIconSrc.replace("ReloadIcon", "DisabledReloadIcon")
        }
        this.SoundStartDelay = c;
        this.LimitSoundRegeneration = j;
        this.SoundPlayed = false;
        this.SoundPlayDelayed = false;
        var y = a + "_SoundLink";
        var x = document.getElementById(y);
        if (x) {
            this.SoundUrl = x.href
        }
        var k = a + "_AudioPlaceholder";
        this.SoundPlaceholder = document.getElementById(k);
        var o = document.getElementById(this.Id + "_SoundIcon");
        if (o) {
            this.SoundIconSrc = document.getElementById(this.Id + "_SoundIcon").src;
            this.DisabledSoundIconSrc = null;
            var t = document.createElement("img");
            var h = this;
            t.onload = function () {
                h.DisabledSoundIconSrc = this.src;
                h = null
            };
            t.src = this.SoundIconSrc.replace("SoundIcon", "DisabledSoundIcon")
        }
        this.ValidationUrl = this.Image.src.replace("get=image", "get=validationResult");
        this.FollowHelpLink = true;
        if (!s) {
            return
        }
        this.InputId = s;
        var p = document.getElementById(s);
        if (!p) {
            return
        }
        p.Captcha = this;
        this.ValidationResult = false;
        this.AutoFocusInput = m;
        this.AutoClearInput = n;
        if (i) {
            p.style.textTransform = "uppercase"
        }
    };
    BotDetect.Init = function (b, h, l, j, g, m, i, a, f, e, k) {
        var c = null;
        if (l) {
            c = "'" + l + "'"
        }
        var d = new Function("if (document.getElementById('" + b + "_CaptchaImage')) { window['" + b + "'] = new BotDetect('" + b + "', '" + h + "', " + c + ", " + j + ", " + g + ", " + m + ", " + i + ", " + a + ", " + f + ", " + e + ", " + k + "); window['" + b + "'].PostInit(); }");
        if ((typeof (Sys) != "undefined") && (typeof (Sys.Application) != "undefined")) {
            Sys.Application.add_load(d)
        } else {
            if (typeof (window.jQuery) != "undefined") {
                jQuery(d)
            } else {
                BotDetect.RegisterHandler(window, "domready", d, false)
            }
        }
        if (window.opera) {
            BotDetect.RegisterHandler(window, "popstate", function (n) {
                window[b].ReloadImage()
            }, false)
        } else {
            if (window.chrome) {
                BotDetect.RegisterHandler(window, "domready", function (o) {
                    var n = document.getElementById("LBD_BackWorkaround_" + b);
                    if (n) {
                        if (n.value == "0") {
                            n.value = "1"
                        } else {
                            n.value = "0";
                            window[b].ReloadImage()
                        }
                    }
                }, false)
            } else {
                BotDetect.RegisterHandler(window, "pageshow", function (o) {
                    var n = document.getElementById("LBD_BackWorkaround_" + b);
                    if (n) {
                        if (n.value == "0") {
                            n.value = "1"
                        } else {
                            window[b].ReloadImage()
                        }
                    }
                }, false)
            }
        }
    };
    BotDetect.ReloadTimerMaxTicks = 100;
    BotDetect.ReloadTimerDelay = 250;
    BotDetect.MillisecondsInAMinute = 60000;
    BotDetect.AjaxTimeout = 10000;
    BotDetect.MinSoundCooldown = 2000;
    BotDetect.prototype.ReloadImage = function () {
        if (this.Image && !this.ReloadInProgress && !this.SessionExpired && (!this.ControlsDisabled || this.SoundPlayDelayed)) {
            this.ReloadInProgress = true;
            this.DisableControls();
            this.ProgressIndicator = document.createElement("span");
            this.ProgressIndicator.className = "LBD_ProgressIndicator";
            this.ProgressIndicator.appendChild(document.createTextNode("."));
            this.PreReloadImage();
            var a = BotDetect.UpdateTimestamp(this.Image.src);
            this.InitNewImage(a);
            this.ImagePlaceholder.innerHTML = "";
            this.ImagePlaceholder.appendChild(this.ProgressIndicator);
            this.ShowProgress()
        }
    };
    BotDetect.prototype.InitNewImage = function (b) {
        this.NewImage = document.createElement("img");
        var a = this;
        this.NewImage.onload = function () {
            if (a.NewImage && a.ImagePlaceholder && a.ProgressIndicator) {
                a.ImagePlaceholder.innerHTML = "";
                a.ImagePlaceholder.appendChild(a.NewImage);
                a.Image = a.NewImage;
                a.ProgressIndicator = null;
                a.PostReloadImage();
                a = null
            }
        };
        this.NewImage.id = this.Image.id;
        this.NewImage.alt = this.Image.alt;
        this.NewImage.src = b
    };
    BotDetect.prototype.ShowProgress = function () {
        if (this.ProgressIndicator && (this.ReloadTimerTicks < BotDetect.ReloadTimerMaxTicks)) {
            this.ReloadTimerTicks = this.ReloadTimerTicks + 1;
            this.UpdateProgressIndicator();
            var a = this;
            this.ReloadTimer = setTimeout(function () {
                a.ShowProgress();
                a = null
            }, BotDetect.ReloadTimerDelay)
        } else {
            clearTimeout(this.ReloadTimer);
            this.ReloadTimerTicks = 0;
            this.ReloadInProgress = false
        }
    };
    BotDetect.prototype.UpdateProgressIndicator = function () {
        if (0 == this.ProgressIndicator.childNodes.length) {
            this.ProgressIndicator.appendChild(document.createTextNode("."));
            return
        }
        if (0 === this.ReloadTimerTicks % 5) {
            this.ProgressIndicator.firstChild.nodeValue = "."
        } else {
            this.ProgressIndicator.firstChild.nodeValue = this.ProgressIndicator.firstChild.nodeValue + "."
        }
    };
    BotDetect.prototype.PlaySound = function () {
        if (!document.getElementById || this.SoundPlayingInProgess || (this.ControlsDisabled && !this.SoundPlayDelayed)) {
            return
        }
        this.DisableControls();
        if (this.LimitSoundRegeneration && !BotDetect.SoundReplaySupported()) {
            if (this.SoundPlayed) {
                this.SoundPlayDelayed = true;
                this.ReloadImage();
                return
            }
        }
        this.SoundPlayingInProgess = true;
        if (BotDetect.UseHtml5Audio()) {
            var a = this;
            var c = document.getElementById("LBD_CaptchaSoundAudio_" + this.Id);
            if (c) {
                c.currentTime = 0;
                this.SoundStartDelayTimer = setTimeout(function () {
                    if (a) {
                        clearTimeout(a.SoundStartDelayTimer);
                        a.PrePlaySound();
                        var d = document.getElementById("LBD_CaptchaSoundAudio_" + a.Id);
                        d.play()
                    }
                }, this.SoundStartDelay)
            } else {
                this.SoundPlaceholder.innerHTML = "";
                var b = this.SoundUrl;
                b = BotDetect.UpdateTimestamp(b);
                b = BotDetect.DetectSsl(b);
                c = new Audio(b);
                c.id = "LBD_CaptchaSoundAudio_" + this.Id;
                c.type = "audio/wav";
                c.autobuffer = false;
                c.loop = false;
                c.autoplay = false;
                c.preload = "auto";
                this.SoundPlaceholder.appendChild(c);
                c.load();
                BotDetect.RegisterHandler(c, "canplay", function () {
                    if (a) {
                        a.SoundStartDelayTimer = setTimeout(function () {
                            clearTimeout(a.SoundStartDelayTimer);
                            a.PrePlaySound();
                            var d = document.getElementById("LBD_CaptchaSoundAudio_" + a.Id);
                            d.play()
                        }, this.SoundStartDelay)
                    }
                }, false)
            }
            BotDetect.RegisterHandler(c, "ended", function () {
                if (a) {
                    var d = document.getElementById("LBD_CaptchaSoundAudio_" + a.Id);
                    if (d.duration == 1) {
                        d.play()
                    } else {
                        a.SoundPlayingInProgess = false;
                        a.EnableControls();
                        a = null
                    }
                }
            }, false)
        } else {
            this.SoundPlaceholder.innerHTML = "";
            var a = this;
            this.SoundStartDelayTimer = setTimeout(function () {
                clearTimeout(a.SoundStartDelayTimer);
                a.PrePlaySound();
                a.StartXhtmlSoundPlayback()
            }, this.SoundStartDelay)
        }
        this.SoundPlayed = true
    };
    BotDetect.prototype.StartXhtmlSoundPlayback = function () {
        var b = this.SoundUrl;
        b = BotDetect.UpdateTimestamp(b);
        b = BotDetect.DetectSsl(b);
        var c = "<object id='LBD_CaptchaSoundObject_" + this.Id + "' classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95' height='0' width='0' style='width:0; height:0;'><param name='AutoStart' value='1' /><param name='Volume' value='0' /><param name='PlayCount' value='1' /><param name='FileName' value='" + b + "' /><embed id='LBD_CaptchaSoundEmbed' src='" + b + "' autoplay='true' hidden='true' volume='100' type='" + BotDetect.GetMimeType() + "' style='display:inline;' /></object>";
        this.SoundPlaceholder.innerHTML = c;
        var a = this;
        this.SoundCooldownTimer = setTimeout(function () {
            if (a) {
                clearTimeout(a.SoundCooldownTimer);
                a.SoundPlayingInProgess = false;
                a.EnableControls();
                a = null
            }
        }, BotDetect.MinSoundCooldown)
    };
    BotDetect.prototype.GetInputElement = function () {
        return document.getElementById(this.InputId)
    };
    BotDetect.prototype.Validate = function () {
        if (BotDetect.AjaxError) {
            return true
        }
        var a = this.GetInputElement();
        if (!a || !a.value || a.value.length < 0) {
            this.AjaxValidationFailed();
            return false
        }
        if (!this.ValidationResult) {
            this.PreAjaxValidate();
            this.StartValidation()
        }
        return this.ValidationResult
    };
    BotDetect.prototype.StartValidation = function () {
        var b = this.GetInputElement();
        var c = this.ValidationUrl + "&i=" + b.value;
        var a = this;
        var d = function (g) {
            clearTimeout(a.AjaxTimer);
            if (200 != g.status) {
                a.AjaxValidationError();
                a = null;
                return
            }
            var f = false;
            var e = BotDetect.ParseJson(g.responseText);
            if (e) {
                f = e
            }
            a.EndValidation(f);
            a = null
        };
        this.AjaxTimer = setTimeout(a.AjaxValidationError, BotDetect.AjaxTimeout);
        BotDetect.Get(c, d)
    };
    BotDetect.prototype.EndValidation = function (a) {
        if (a) {
            this.ValidationResult = true;
            this.AjaxValidationPassed()
        } else {
            this.AjaxValidationFailed()
        }
    };
    BotDetect.ParseJson = function (jsonString) {
        var resultObj = null;
        if ("undefined" != typeof (JSON) && "function" == typeof (JSON.parse)) {
            resultObj = JSON.parse(jsonString)
        }
        if (!resultObj) {
            resultObj = eval("(" + jsonString + ")")
        }
        return resultObj
    };
    BotDetect.prototype.PostInit = function () {
    };
    BotDetect.prototype.PreReloadImage = function () {
        this.ClearInput();
        this.FocusInput()
    };
    BotDetect.prototype.PostReloadImage = function () {
        this.ValidationUrl = this.Image.src.replace("get=image", "get=validationResult");
        if (this.AutoReloadExpiredImage) {
            if (this.AutoReloadTimer) {
                clearTimeout(this.AutoReloadTimer)
            }
            var a = this;
            this.AutoReloadTimer = setTimeout(function () {
                clearTimeout(a.AutoReloadTimer);
                if (a.AutoReloadPeriodSum >= a.AutoReloadTimeout) {
                    a.DisableControls();
                    a.SessionExpired = true;
                    return
                }
                a.AutoReloading = true;
                a.ReloadImage();
                a.AutoReloading = false;
                a.AutoReloadPeriodSum += a.AutoReloadPeriod;
                a = null
            }, a.AutoReloadPeriod)
        }
        if (this.SoundIconSrc) {
            this.SoundPlaceholder.innerHTML = "";
            this.SoundPlayed = false;
            if (this.SoundPlayDelayed) {
                this.PlaySound();
                this.SoundPlayDelayed = false
            } else {
                this.EnableControls()
            }
        } else {
            this.EnableControls()
        }
    };
    BotDetect.prototype.PrePlaySound = function () {
        this.FocusInput()
    };
    BotDetect.prototype.OnHelpLinkClick = function () {
    };
    BotDetect.prototype.PreAjaxValidate = function () {
    };
    BotDetect.prototype.AjaxValidationFailed = function () {
        this.ReloadImage()
    };
    BotDetect.prototype.AjaxValidationPassed = function () {
    };
    BotDetect.prototype.AjaxValidationError = function () {
        BotDetect.Xhr().abort();
        BotDetect.AjaxError = true
    };
    BotDetect.RegisterCustomHandler = function (b, a) {
        var c = BotDetect.prototype[b];
        BotDetect.prototype[b] = function () {
            c.call(this);
            a.call(this)
        }
    };
    BotDetect.prototype.FocusInput = function () {
        var a = this.GetInputElement();
        if (!this.AutoFocusInput || !a) {
            return
        }
        if (this.AutoReloading) {
            return
        }
        a.focus()
    };
    BotDetect.prototype.ClearInput = function () {
        var a = this.GetInputElement();
        if (!this.AutoClearInput || !a) {
            return
        }
        a.value = ""
    };
    BotDetect.UpdateTimestamp = function (a) {
        var b = a.indexOf("&d=");
        if (-1 !== b) {
            a = a.substring(0, b)
        }
        return a + "&d=" + BotDetect.GetTimestamp()
    };
    BotDetect.GetTimestamp = function () {
        var b = new Date();
        var a = b.getTime() + (b.getTimezoneOffset() * BotDetect.MillisecondsInAMinute);
        return a
    };
    BotDetect.DetectSsl = function (b) {
        var c = b.indexOf("&e=");
        if (-1 !== c) {
            var a = b.length;
            b = b.substring(0, c) + b.substring(c + 4, a)
        }
        if (document.location.protocol === "https:") {
            b = b + "&e=1"
        }
        return b
    };
    BotDetect.GetMimeType = function () {
        var a = "audio/x-wav";
        return a
    };
    BotDetect.UseHtml5Audio = function () {
        var a = false;
        if (BotDetect.DetectAndroid() || BotDetect.DetectIOS()) {
            a = true
        } else {
            var b = document.createElement("audio");
            a = (!!(b.canPlayType) && !!(b.canPlayType("audio/wav")) && !BotDetect.DetectIncompatibleAudio())
        }
        return a
    };
    BotDetect.DetectIncompatibleAudio = function () {
        return BotDetect.DetectFirefox3() || BotDetect.DetectSafariSsl()
    };
    BotDetect.DetectAndroid = function () {
        var a = false;
        if (navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Linux; U; Android/);
            if (b) {
                a = true
            }
        }
        return a
    };
    BotDetect.DetectIOS = function () {
        var a = false;
        if (navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/like Mac OS/);
            if (b) {
                a = true
            }
        }
        return a
    };
    BotDetect.DetectFirefox3 = function () {
        var a = false;
        if (navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/(Firefox)\/(3\.6\.[^;\+,\/\s]+)/);
            if (b) {
                a = true
            }
        }
        return a
    };
    BotDetect.DetectSafariSsl = function () {
        var a = false;
        if (navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Safari/);
            if (b) {
                b = navigator.userAgent.match(/Chrome/);
                if (!b && document.location.protocol === "https:") {
                    a = true
                }
            }
        }
        return a
    };
    BotDetect.DetectAndroidBelow41 = function () {
        var b = false;
        if (navigator && navigator.userAgent) {
            var c = navigator.userAgent.indexOf("Android");
            if (c >= 0) {
                var a = parseFloat(navigator.userAgent.slice(c + 8));
                if (a < 4.1) {
                    b = true
                }
            }
        }
        return b
    };
    BotDetect.SoundReplaySupported = function () {
        return (BotDetect.UseHtml5Audio() && !BotDetect.DetectAndroidBelow41())
    };
    BotDetect.prototype.DisableControls = function () {
        this.ControlsDisabled = true;
        this.DisableReloadIcon();
        this.DisableSoundIcon()
    };
    BotDetect.prototype.EnableControls = function () {
        this.ControlsDisabled = false;
        this.EnableReloadIcon();
        this.EnableSoundIcon()
    };
    BotDetect.prototype.DisableReloadIcon = function () {
        if (this.ReloadIconSrc) {
            if (this.DisabledReloadIconSrc) {
                document.getElementById(this.Id + "_ReloadIcon").src = this.DisabledReloadIconSrc
            }
        }
    };
    BotDetect.prototype.EnableReloadIcon = function () {
        if (this.ReloadIconSrc) {
            if (this.DisabledReloadIconSrc) {
                document.getElementById(this.Id + "_ReloadIcon").src = this.ReloadIconSrc
            }
        }
    };
    BotDetect.prototype.DisableSoundIcon = function () {
        if (this.SoundIconSrc) {
            if (this.DisabledSoundIconSrc) {
                document.getElementById(this.Id + "_SoundIcon").src = this.DisabledSoundIconSrc
            }
        }
    };
    BotDetect.prototype.EnableSoundIcon = function () {
        if (this.SoundIconSrc) {
            if (this.DisabledSoundIconSrc) {
                document.getElementById(this.Id + "_SoundIcon").src = this.SoundIconSrc
            }
        }
    };
    BotDetect.RegisterHandler = function (f, d, e, c) {
        if (d == "domready") {
            BotDetect.RegisterDomReadyHandler(e);
            return
        }
        if (typeof f.addEventListener != "undefined") {
            f.addEventListener(d, e, c)
        } else {
            if (typeof f.attachEvent != "undefined") {
                var a = d + e;
                f["e" + a] = e;
                f[a] = function (g) {
                    if (typeof g == "undefined") {
                        g = window.event
                    }
                    f["e" + a](g)
                };
                f.attachEvent("on" + d, f[a])
            } else {
                d = "on" + d;
                if (typeof f[d] == "function") {
                    var b = f[d];
                    f[d] = function () {
                        b();
                        return e()
                    }
                } else {
                    f[d] = e
                }
            }
        }
    };
    BotDetect.RegisterDomReadyHandler = function (b) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                b()
            }, false);
            return
        } else {
            if (document.attachEvent) {
                var a = false;
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        b();
                        a = true
                    }
                });
                if (document.documentElement.doScroll && window == window.top) {
                    (function () {
                        if (a) {
                            return
                        }
                        try {
                            document.documentElement.doScroll("left")
                        } catch (c) {
                            setTimeout(arguments.callee, 1);
                            return
                        }
                        b();
                        a = true
                    })()
                }
                return
            } else {
                BotDetect.RegisterHandler(window, "load", b, false)
            }
        }
    };
    BotDetect.Xhr = function () {
        var a = null;
        try {
            a = new XMLHttpRequest();
            return a
        } catch (b) {
        }
        try {
            a = new ActiveXObject("MSXML2.XMLHTTP.5.0");
            return a
        } catch (b) {
        }
        try {
            a = new ActiveXObject("MSXML2.XMLHTTP.4.0");
            return a
        } catch (b) {
        }
        try {
            a = new ActiveXObject("MSXML2.XMLHTTP.3.0");
            return a
        } catch (b) {
        }
        try {
            a = new ActiveXObject("MSXML2.XMLHTTP");
            return a
        } catch (b) {
        }
        try {
            a = new ActiveXObject("Microsoft.XMLHTTP");
            return a
        } catch (b) {
        }
        return a
    };
    BotDetect.Get = function (b, c) {
        BotDetect.AjaxError = false;
        var a = BotDetect.Xhr();
        if (a && 0 == a.readyState) {
            a.onreadystatechange = function () {
                if (4 == a.readyState) {
                    c(a)
                }
            };
            a.open("GET", b, true);
            a.send()
        }
    }
}
if ((typeof (Sys) != "undefined") && (typeof (Sys.Application) != "undefined")) {
    Sys.Application.notifyScriptLoaded()
}
;
$j(window).load(function () {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = (location.protocol == "https:" ? "https://ssl." : "http://static.") + "gridsumdissector.com/js/Clients/GWD-002595-F824C8/gs.js";
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a)
});

function registerGridsum(b, a, c, d) {
    if (window._gsTracker) {
        _gsTracker.setCustomProperty("1", b);
        _gsTracker.setCustomProperty("2", a);
        _gsTracker.setCustomProperty("3", c);
        _gsTracker.setCustomProperty("4", d);
        _gsTracker.track("/targetpage/regOk")
    }
}

function conversionRegGridsum(b, a, c, d) {
    if (window._gsTracker) {
        _gsTracker.setCustomProperty("1", b);
        _gsTracker.setCustomProperty("2", a);
        _gsTracker.setCustomProperty("3", c);
        _gsTracker.setCustomProperty("4", d);
        _gsTracker.track("/targetpage/isConversionReg")
    }
}

function loginGridsum(b, a) {
    if (window._gsTracker) {
        _gsTracker.setCustomProperty("1", b);
        _gsTracker.setCustomProperty("2", a);
        _gsTracker.track("/targetpage/loginOk")
    }
}

function addShopCartGridsum(a) {
    if (window._gsTracker) {
        _gsTracker.setPageProperty("1", a);
        _gsTracker.track("/targetpage/AddToCart-detail/" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000))
    }
}

function deliveryGridsum(a) {
    setTimeout(function () {
        if (window._gsTracker) {
            _gsTracker.track("/targetpage/" + a)
        }
    }, 2000)
}

function addFavoritesListGridsum(a) {
    if (window._gsTracker) {
        _gsTracker.trackEvent("click", "like-list", a)
    }
}

function addFavoritesPDPGridsum(a) {
    if (window._gsTracker) {
        _gsTracker.trackEvent("click", "like-detail", a)
    }
}

function searchGridsum(a) {
    var b = setInterval(function () {
        if (window._gsTracker) {
            _gsTracker.trackSiteSearch(a);
            var c = document.getElementById("sku-product-list");
            if (c) {
                _gsTracker.bindSearchResults(c)
            }
            clearInterval(b)
        }
    }, 1000)
}

function _gsCallback(a) {
    if (window._gsTracker && null != a) {
        _gsTracker.addOrder(a.soCode, a.soOrder.totalAfDiscount);
        $j(a.soOrderLines).each(function (b) {
            _gsTracker.addProduct(a.soCode, a.soOrderLines[b].skuName, a.soOrderLines[b].skuCode, a.soOrderLines[b].unitPrice, a.soOrderLines[b].requestedQty, "")
        });
        _gsTracker.trackECom()
    }
};
$j(window).load(function () {
    setTimeout(function () {
        var d = document.createElement("script");
        var c = document.getElementsByTagName("script")[0];
        d.src = document.location.protocol + "//script.crazyegg.com/pages/scripts/0044/1196.js?" + Math.floor(new Date().getTime() / 3600000);
        d.async = true;
        d.type = "text/javascript";
        c.parentNode.insertBefore(d, c)
    }, 1000)
});
$j(window).load(function () {
});
(function (b, a) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = b.document ? a(b, true) : function (c) {
            if (!c.document) {
                throw new Error("Geetest requires a window with a document")
            }
            return a(c)
        }
    } else {
        a(b)
    }
})(typeof window !== "undefined" ? window : this, function (g, t) {
    if (typeof g === "undefined") {
        throw new Error("Geetest requires browser environment")
    }
    var o = g.document;
    var i = g.Math;
    var d = o.getElementsByTagName("head")[0];

    function e(z) {
        this._obj = z
    }

    e.prototype = {
        _each: function (A) {
            var B = this._obj;
            for (var z in B) {
                if (B.hasOwnProperty(z)) {
                    A(z, B[z])
                }
            }
            return this
        }
    };

    function h(A) {
        var z = this;
        new e(A)._each(function (B, C) {
            z[B] = C
        })
    }

    h.prototype = {
        api_server: "api.geetest.com",
        protocol: "http://",
        type_path: "/gettype.php",
        fallback_config: {
            slide: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: "slide",
                slide: "/static/js/geetest.0.0.0.js"
            },
            fullpage: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: "fullpage",
                fullpage: "/static/js/fullpage.0.0.0.js"
            }
        },
        _get_fallback_config: function () {
            var z = this;
            if (m(z.type)) {
                return z.fallback_config[z.type]
            } else {
                if (z.new_captcha) {
                    return z.fallback_config.fullpage
                } else {
                    return z.fallback_config.slide
                }
            }
        },
        _extend: function (A) {
            var z = this;
            new e(A)._each(function (B, C) {
                z[B] = C
            })
        }
    };
    var n = function (z) {
        return (typeof z === "number")
    };
    var m = function (z) {
        return (typeof z === "string")
    };
    var j = function (z) {
        return (typeof z === "boolean")
    };
    var k = function (z) {
        return (typeof z === "object" && z !== null)
    };
    var c = function (z) {
        return (typeof z === "function")
    };
    var x = {};
    var q = {};
    var a = function () {
        return parseInt(i.random() * 10000) + (new Date()).valueOf()
    };
    var l = function (C, z) {
        var A = o.createElement("script");
        A.charset = "UTF-8";
        A.async = true;
        A.onerror = function () {
            z(true)
        };
        var B = false;
        A.onload = A.onreadystatechange = function () {
            if (!B && (!A.readyState || "loaded" === A.readyState || "complete" === A.readyState)) {
                B = true;
                setTimeout(function () {
                    z(false)
                }, 0)
            }
        };
        A.src = C;
        d.appendChild(A)
    };
    var r = function (z) {
        return z.replace(/^https?:\/\/|\/$/g, "")
    };
    var w = function (z) {
        z = z.replace(/\/+/g, "/");
        if (z.indexOf("/") !== 0) {
            z = "/" + z
        }
        return z
    };
    var v = function (A) {
        if (!A) {
            return ""
        }
        var z = "?";
        new e(A)._each(function (B, C) {
            if (m(C) || n(C) || j(C)) {
                z = z + encodeURIComponent(B) + "=" + encodeURIComponent(C) + "&"
            }
        });
        if (z === "?") {
            z = ""
        }
        return z.replace(/&$/, "")
    };
    var p = function (D, B, C, A) {
        B = r(B);
        var z = w(C) + v(A);
        if (B) {
            z = D + B + z
        }
        return z
    };
    var f = function (E, A, D, C, z) {
        var B = function (F) {
            var G = p(E, A[F], D, C);
            l(G, function (H) {
                if (H) {
                    if (F >= A.length - 1) {
                        z(true)
                    } else {
                        B(F + 1)
                    }
                } else {
                    z(false)
                }
            })
        };
        B(0)
    };
    var y = function (A, C, B, D) {
        if (k(B.getLib)) {
            B._extend(B.getLib);
            D(B);
            return
        }
        if (B.offline) {
            D(B._get_fallback_config());
            return
        }
        var z = "geetest_" + a();
        g[z] = function (E) {
            if (E.status === "success") {
                D(E.data)
            } else {
                if (!E.status) {
                    D(E)
                } else {
                    D(B._get_fallback_config())
                }
            }
            g[z] = undefined;
            try {
                delete g[z]
            } catch (F) {
            }
        };
        f(B.protocol, A, C, {gt: B.gt, callback: z}, function (E) {
            if (E) {
                D(B._get_fallback_config())
            }
        })
    };
    var s = function (A, z) {
        var B = {networkError: "网络错误"};
        if (typeof z.onError === "function") {
            z.onError(B[A])
        } else {
            throw new Error(B[A])
        }
    };
    var u = function () {
        return !!g.Geetest
    };
    if (u()) {
        q.slide = "loaded"
    }
    var b = function (A, B) {
        var z = new h(A);
        if (A.https) {
            z.protocol = "https://"
        } else {
            if (!A.protocol) {
                z.protocol = g.location.protocol + "//"
            }
        }
        y([z.api_server || z.apiserver], z.type_path, z, function (C) {
            var E = C.type;
            var F = function () {
                z._extend(C);
                B(new g.Geetest(z))
            };
            x[E] = x[E] || [];
            var D = q[E] || "init";
            if (D === "init") {
                q[E] = "loading";
                x[E].push(F);
                f(z.protocol, C.static_servers || C.domains, C[E] || C.path, null, function (K) {
                    if (K) {
                        q[E] = "fail";
                        s("networkError", z)
                    } else {
                        q[E] = "loaded";
                        var I = x[E];
                        for (var J = 0, H = I.length; J < H; J = J + 1) {
                            var G = I[J];
                            if (c(G)) {
                                G()
                            }
                        }
                        x[E] = []
                    }
                })
            } else {
                if (D === "loaded") {
                    F()
                } else {
                    if (D === "fail") {
                        s("networkError", z)
                    } else {
                        if (D === "loading") {
                            x[E].push(F)
                        }
                    }
                }
            }
        })
    };
    g.initGeetest = b;
    return b
});
var GEETEST = GEETEST || {};
GEETEST = {
    product: {"float": "float", popup: "popup", custom: "custom", bind: "bind"}, register: function (b, a) {
        if (!a) {
            a = "float"
        }
        GEETEST.setemptyToGt();
        loxia.asyncXhrPost(_contextPath + "/registergeetest.json", {}, {
            success: function (c) {
                var d = JSON.parse(c.result);
                initGeetest({
                    gt: d.gt,
                    challenge: d.challenge,
                    new_captcha: d.new_captcha,
                    offline: !d.success,
                    product: a,
                }, b)
            }
        });
        GEETEST.resterValiData()
    }, resterValiData: function () {
        $j("#challenge").val("");
        $j("#validate").val("");
        $j("#seccode").val("")
    }, setemptyToGt: function () {
        $j("#heard-regist-gt").empty();
        $j("#popup-regist-gt").empty();
        $j("#heard-login-gt").empty()
    }, setValiDate: function (a) {
        $j("#challenge").val(a.geetest_challenge);
        $j("#validate").val(a.geetest_validate);
        $j("#seccode").val(a.geetest_seccode)
    }, getValiDate: function () {
        var a = {};
        a.geetest_challenge = $j("#challenge").val();
        a.geetest_validate = $j("#validate").val();
        a.geetest_seccode = $j("#seccode").val();
        return a
    }, heardRegisterCall: function (a) {
        a.appendTo("#heard-regist-gt");
        a.onReady(function () {
            $j("#heard-regist-gt").append('<span class="error" style="margin-top:7px;"></span>')
        });
        a.onSuccess(function () {
            var b = a.getValidate();
            GEETEST.setValiDate(b);
            $j("#heard-regist-gt").find(".error").html("")
        })
    }, popupRegisterCall: function (a) {
        a.appendTo("#popup-regist-gt");
        a.onReady(function () {
            $j("#popup-regist-gt").append('<span class="error" style="margin-top:7px;"></span>')
        });
        a.onSuccess(function () {
            var b = a.getValidate();
            GEETEST.setValiDate(b);
            $j("#popup-regist-gt").find(".error").html("")
        })
    }, heardLoginCall: function (a) {
        a.appendTo("#heard-login-gt");
        a.onReady(function () {
        });
        a.onSuccess(function () {
            var b = a.getValidate();
            GEETEST.setValiDate(b);
            $j("#heard-login-gt").parent().find(".error").html("")
        })
    }, forgetPassWordCall: function (a) {
        a.appendTo("#heard-forget-gt");
        a.onReady(function () {
            $j("#heard-forget-gt").append('<span class="error" style="margin-top:7px;"></span>')
        });
        a.onSuccess(function () {
            var b = a.getValidate();
            GEETEST.setValiDate(b);
            $j("#heard-forget-gt").find(".error").html("")
        })
    }, orderCall: function (a) {
        a.onReady(function () {
            a.verify()
        }).onSuccess(function () {
            var b = a.getValidate();
            GEETEST.setValiDate(b);
            $j("#commit-order").click()
        }).onError(function () {
        })
    }
};