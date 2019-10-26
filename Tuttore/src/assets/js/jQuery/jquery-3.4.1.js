! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) { "use strict";

    function n(e, t, n) { var r, i, o = (n = n || se).createElement("script"); if (o.text = e, t)
            for (r in we)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function r(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[he.call(e)] || "object" : typeof e }

    function i(e) { var t = !!e && "length" in e && e.length,
            n = r(e); return !xe(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

    function o(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

    function a(e, t, n) { return xe(t) ? Te.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? Te.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? Te.grep(e, function(e) { return pe.call(t, e) > -1 !== n }) : Te.filter(t, e, n) }

    function s(e, t) { for (;
            (e = e[t]) && 1 !== e.nodeType;); return e }

    function u(e) { var t = {}; return Te.each(e.match(He) || [], function(e, n) { t[n] = !0 }), t }

    function l(e) { return e }

    function c(e) { throw e }

    function f(e, t, n, r) { var i; try { e && xe(i = e.promise) ? i.call(e).done(t).fail(n) : e && xe(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }

    function p() { se.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Te.ready() }

    function d(e, t) { return t.toUpperCase() }

    function h(e) { return e.replace(Me, "ms-").replace(Ie, d) }

    function g() { this.expando = Te.expando + g.uid++ }

    function v(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e) }

    function y(e, t, n) { var r; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(_e, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = v(n) } catch (e) {}
                Fe.set(e, t, n) } else n = void 0;
        return n }

    function m(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return Te.css(e, t, "") },
            u = s(),
            l = n && n[3] || (Te.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (Te.cssNumber[t] || "px" !== l && +u) && Ue.exec(Te.css(e, t)); if (c && c[3] !== l) { for (u /= 2, l = l || c[3], c = +u || 1; a--;) Te.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, Te.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i }

    function x(e) { var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Ke[r]; return i || (t = n.body.appendChild(n.createElement(r)), i = Te.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ke[r] = i, i) }

    function b(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = $e.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Qe(r) && (i[o] = x(r))) : "none" !== n && (i[o] = "none", $e.set(r, "display", n))); for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e }

    function w(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? Te.merge([e], n) : n }

    function T(e, t) { for (var n = 0, r = e.length; n < r; n++) $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval")) }

    function C(e, t, n, i, o) { for (var a, s, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; h < g; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === r(a)) Te.merge(d, a.nodeType ? [a] : a);
                else if (rt.test(a)) { for (s = s || p.appendChild(t.createElement("div")), u = (et.exec(a) || ["", ""])[1].toLowerCase(), l = nt[u] || nt._default, s.innerHTML = l[1] + Te.htmlPrefilter(a) + l[2], f = l[0]; f--;) s = s.lastChild;
            Te.merge(d, s.childNodes), (s = p.firstChild).textContent = "" } else d.push(t.createTextNode(a)); for (p.textContent = "", h = 0; a = d[h++];)
            if (i && Te.inArray(a, i) > -1) o && o.push(a);
            else if (c = Ge(a), s = w(p.appendChild(a), "script"), c && T(s), n)
            for (f = 0; a = s[f++];) tt.test(a.type || "") && n.push(a); return p }

    function E() { return !0 }

    function k() { return !1 }

    function S(e, t) { return e === N() == ("focus" === t) }

    function N() { try { return se.activeElement } catch (e) {} }

    function A(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) A(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = k;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return Te().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = Te.guid++)), e.each(function() { Te.event.add(this, t, i, r, n) }) }

    function D(e, t, n) { n ? ($e.set(e, t, !1), Te.event.add(e, t, { namespace: !1, handler: function(e) { var r, i, o = $e.get(this, t); if (1 & e.isTrigger && this[t]) { if (o.length)(Te.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (o = le.call(arguments), $e.set(this, t, o), r = n(this, t), this[t](), i = $e.get(this, t), o !== i || r ? $e.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value } else o.length && ($e.set(this, t, { value: Te.event.trigger(Te.extend(o[0], Te.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === $e.get(e, t) && Te.event.add(e, t, E) }

    function j(e, t) { return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Te(e).children("tbody")[0] || e : e }

    function q(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function L(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function H(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if ($e.hasData(e) && (o = $e.access(e), a = $e.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) Te.event.add(t, i, l[i][n]) }
            Fe.hasData(e) && (s = Fe.access(e), u = Te.extend({}, s), Fe.set(t, u)) } }

    function O(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && Ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function P(e, t, r, i) { t = ce.apply([], t); var o, a, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = xe(h); if (g || p > 1 && "string" == typeof h && !me.checkClone && lt.test(h)) return e.each(function(n) { var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), P(o, t, r, i) }); if (p && (o = C(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) { for (u = (s = Te.map(w(o, "script"), q)).length; f < p; f++) l = o, f !== d && (l = Te.clone(l, !0, !0), u && Te.merge(s, w(l, "script"))), r.call(e[f], l, f); if (u)
                for (c = s[s.length - 1].ownerDocument, Te.map(s, L), f = 0; f < u; f++) l = s[f], tt.test(l.type || "") && !$e.access(l, "globalEval") && Te.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Te._evalUrl && !l.noModule && Te._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : n(l.textContent.replace(ct, ""), l, c)) } return e }

    function R(e, t, n) { for (var r, i = t ? Te.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Te.cleanData(w(r)), r.parentNode && (n && Ge(r) && T(w(r, "script")), r.parentNode.removeChild(r)); return e }

    function M(e, t, n) { var r, i, o, a, s = e.style; return (n = n || pt(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || Ge(e) || (a = Te.style(e, t)), !me.pixelBoxStyles() && ft.test(a) && dt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function I(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }

    function W(e) { for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;)
            if ((e = ht[n] + t) in gt) return e }

    function $(e) { var t = Te.cssProps[e] || vt[e]; return t || (e in gt ? e : vt[e] = W(e) || e) }

    function F(e, t, n) { var r = Ue.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function B(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += Te.css(e, n + Xe[a], !0, i)), r ? ("content" === n && (u -= Te.css(e, "padding" + Xe[a], !0, i)), "margin" !== n && (u -= Te.css(e, "border" + Xe[a] + "Width", !0, i))) : (u += Te.css(e, "padding" + Xe[a], !0, i), "padding" !== n ? u += Te.css(e, "border" + Xe[a] + "Width", !0, i) : s += Te.css(e, "border" + Xe[a] + "Width", !0, i)); return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function _(e, t, n) { var r = pt(e),
            i = (!me.boxSizingReliable() || n) && "border-box" === Te.css(e, "boxSizing", !1, r),
            o = i,
            a = M(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (ft.test(a)) { if (!n) return a;
            a = "auto" } return (!me.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === Te.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === Te.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + B(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function z(e, t, n, r, i) { return new z.prototype.init(e, t, n, r, i) }

    function U() { Tt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, Te.fx.interval), Te.fx.tick()) }

    function X() { return e.setTimeout(function() { wt = void 0 }), wt = Date.now() }

    function V(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Xe[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function G(e, t, n) { for (var r, i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function Y(e, t) { var n, r, i, o, a; for (n in e)
            if (r = h(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Te.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i }

    function Q(e, t, n) { var r, i, o = 0,
            a = Q.prefilters.length,
            s = Te.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = wt || X(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
            l = s.promise({ elem: e, props: Te.extend({}, t), opts: Te.extend(!0, { specialEasing: {}, easing: Te.easing._default }, n), originalProperties: t, originalOptions: n, startTime: wt || X(), duration: n.duration, tweens: [], createTween: function(t, n) { var r = Te.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function(t) { var n = 0,
                        r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; n < r; n++) l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }),
            c = l.props; for (Y(c, l.opts.specialEasing); o < a; o++)
            if (r = Q.prefilters[o].call(l, e, c, l.opts)) return xe(r.stop) && (Te._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return Te.map(c, G, l), xe(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Te.fx.timer(Te.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l }

    function J(e) { return (e.match(He) || []).join(" ") }

    function K(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function Z(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(He) || [] : [] }

    function ee(e, t, n, i) { var o; if (Array.isArray(t)) Te.each(t, function(t, r) { n || Pt.test(e) ? i(e, r) : ee(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== r(t)) i(e, t);
        else
            for (o in t) ee(e + "[" + o + "]", t[o], n, i) }

    function te(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0,
                o = t.toLowerCase().match(He) || []; if (xe(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } }

    function ne(e, t, n, r) {
        function i(s) { var u; return o[s] = !0, Te.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u } var o = {},
            a = e === Vt; return i(t.dataTypes[0]) || !o["*"] && i("*") }

    function re(e, t) { var n, r, i = Te.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && Te.extend(!0, e, r), e }

    function ie(e, t, n) { for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) { u.unshift(i); break }
        if (u[0] in n) o = u[0];
        else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                a || (a = i) }
            o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }

    function oe(e, t, n, r) { var i, o, a, s, u, l = {},
            c = e.dataTypes.slice(); if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } var ae = [],
        se = e.document,
        ue = Object.getPrototypeOf,
        le = ae.slice,
        ce = ae.concat,
        fe = ae.push,
        pe = ae.indexOf,
        de = {},
        he = de.toString,
        ge = de.hasOwnProperty,
        ve = ge.toString,
        ye = ve.call(Object),
        me = {},
        xe = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        be = function(e) { return null != e && e === e.window },
        we = { type: !0, src: !0, nonce: !0, noModule: !0 },
        Te = function(e, t) { return new Te.fn.init(e, t) },
        Ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Te.fn = Te.prototype = { jquery: "3.4.1", constructor: Te, length: 0, toArray: function() { return le.call(this) }, get: function(e) { return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = Te.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return Te.each(this, e) }, map: function(e) { return this.pushStack(Te.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(le.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: fe, sort: ae.sort, splice: ae.splice }, Te.extend = Te.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || xe(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (Te.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || Te.isPlainObject(n) ? n : {}, i = !1, a[t] = Te.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, Te.extend({ expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== he.call(e)) && (!(t = ue(e)) || "function" == typeof(n = ge.call(t, "constructor") && t.constructor) && ve.call(n) === ye) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t) { n(e, { nonce: t && t.nonce }) }, each: function(e, t) { var n, r = 0; if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(Ce, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? Te.merge(n, "string" == typeof e ? [e] : e) : fe.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : pe.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, o, a = 0,
                s = []; if (i(e))
                for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o); return ce.apply([], s) }, guid: 1, support: me }), "function" == typeof Symbol && (Te.fn[Symbol.iterator] = ae[Symbol.iterator]), Te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { de["[object " + t + "]"] = t.toLowerCase() }); var Ee = function(e) {
        function t(e, t, n, r) { var i, o, a, s, u, c, p, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n; if (!r && ((t ? t.ownerDocument || t : W) !== q && j(t), t = t || q, H)) { if (11 !== h && (u = ye.exec(e)))
                    if (i = u[1]) { if (9 === h) { if (!(a = t.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (d && (a = d.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), n } else { if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n; if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n }
                if (b.qsa && !U[e + " "] && (!O || !O.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) { if (p = e, d = t, 1 === h && le.test(e)) { for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = I), o = (c = E(e)).length; o--;) c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","), d = me.test(e) && l(t.parentNode) || t } try { return J.apply(n, d.querySelectorAll(p)), n } catch (t) { U(e, !0) } finally { s === I && t.removeAttribute("id") } } } return S(e.replace(ae, "$1"), t, n, r) }

        function n() {
            function e(n, r) { return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r } var t = []; return e }

        function r(e) { return e[I] = !0, e }

        function i(e) { var t = q.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t }

        function a(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function s(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function u(e) { return r(function(t) { return t = +t, r(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function l(e) { return e && void 0 !== e.getElementsByTagName && e }

        function c() {}

        function f(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function p(e, t, n) { var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = F++; return t.first ? function(t, n, i) { for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1 } : function(t, n, u) { var l, c, f, p = [$, s]; if (u) { for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[I] || (t[I] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((l = c[o]) && l[0] === $ && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1 } }

        function d(e) { return e.length > 1 ? function(t, n, r) { for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0 } : e[0] }

        function h(e, n, r) { for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r); return r }

        function g(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function v(e, t, n, i, o, a) { return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, a)), r(function(r, a, s, u) { var l, c, f, p = [],
                    d = [],
                    v = a.length,
                    y = r || h(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !r && t ? y : g(y, p, e, s, u),
                    x = n ? o || (r ? e : v || i) ? [] : a : m; if (n && n(m, x, s, u), i)
                    for (l = g(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(m[d[c]] = f)); if (r) { if (o || e) { if (o) { for (l = [], c = x.length; c--;)(f = x[c]) && l.push(m[c] = f);
                            o(null, x = [], l, u) } for (c = x.length; c--;)(f = x[c]) && (l = o ? Z(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f)) } } else x = g(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, u) : J.apply(a, x) }) }

        function y(e) { for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function(e) { return e === t }, a, !0), l = p(function(e) { return Z(t, e) > -1 }, a, !0), c = [function(e, n, r) { var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i }]; s < i; s++)
                if (n = w.relative[e[s].type]) c = [p(d(c), n)];
                else { if ((n = w.filter[e[s].type].apply(null, e[s].matches))[I]) { for (r = ++s; r < i && !w.relative[e[r].type]; r++); return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ae, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && f(e)) }
                    c.push(n) }
            return d(c) }

        function m(e, n) { var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) { var c, f, p, d = 0,
                        h = "0",
                        v = r && [],
                        y = [],
                        m = N,
                        x = r || o && w.find.TAG("*", l),
                        b = $ += null == m ? 1 : Math.random() || .1,
                        T = x.length; for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) { if (o && c) { for (f = 0, a || c.ownerDocument === q || (j(c), s = !H); p = e[f++];)
                                if (p(c, a || q, s)) { u.push(c); break }
                            l && ($ = b) }
                        i && ((c = !p && c) && d--, r && v.push(c)) } if (d += h, i && h !== d) { for (f = 0; p = n[f++];) p(v, y, a, s); if (r) { if (d > 0)
                                for (; h--;) v[h] || y[h] || (y[h] = Y.call(u));
                            y = g(y) }
                        J.apply(u, y), l && !r && y.length > 0 && d + n.length > 1 && t.uniqueSort(u) } return l && ($ = b, N = m), v }; return i ? r(a) : a } var x, b, w, T, C, E, k, S, N, A, D, j, q, L, H, O, P, R, M, I = "sizzle" + 1 * new Date,
            W = e.document,
            $ = 0,
            F = 0,
            B = n(),
            _ = n(),
            z = n(),
            U = n(),
            X = function(e, t) { return e === t && (D = !0), 0 },
            V = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            Q = G.push,
            J = G.push,
            K = G.slice,
            Z = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            te = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
            ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            oe = new RegExp(te + "+", "g"),
            ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
            se = new RegExp("^" + te + "*," + te + "*"),
            ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
            le = new RegExp(te + "|>"),
            ce = new RegExp(ie),
            fe = new RegExp("^" + ne + "$"),
            pe = { ID: new RegExp("^#(" + ne + ")"), CLASS: new RegExp("^\\.(" + ne + ")"), TAG: new RegExp("^(" + ne + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"), bool: new RegExp("^(?:" + ee + ")$", "i"), needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i") },
            de = /HTML$/i,
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
            be = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            Ce = function() { j() },
            Ee = p(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { J.apply(G = K.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType } catch (e) { J = { apply: G.length ? function(e, t) { Q.apply(e, K.call(t)) } : function(e, t) { for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1 } } }
        b = t.support = {}, C = t.isXML = function(e) { var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement; return !de.test(t || n && n.nodeName || "HTML") }, j = t.setDocument = function(e) { var t, n, r = e ? e.ownerDocument || e : W; return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), W !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), b.attributes = i(function(e) { return e.className = "i", !e.getAttribute("className") }), b.getElementsByTagName = i(function(e) { return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length }), b.getElementsByClassName = ve.test(q.getElementsByClassName), b.getById = i(function(e) { return L.appendChild(e).id = I, !q.getElementsByName || !q.getElementsByName(I).length }), b.getById ? (w.filter.ID = function(e) { var t = e.replace(xe, be); return function(e) { return e.getAttribute("id") === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && H) { var n = t.getElementById(e); return n ? [n] : [] } }) : (w.filter.ID = function(e) { var t = e.replace(xe, be); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && H) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), w.find.TAG = b.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r } return o }, w.find.CLASS = b.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e) }, P = [], O = [], (b.qsa = ve.test(q.querySelectorAll)) && (i(function(e) { L.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll("[id~=" + I + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || O.push(".#.+[+~]") }), i(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:") })), (b.matchesSelector = ve.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) { b.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), P.push("!=", ie) }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(L.compareDocumentPosition), M = t || ve.test(L.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, X = t ? function(e, t) { if (e === t) return D = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === W && M(W, e) ? -1 : t === q || t.ownerDocument === W && M(W, t) ? 1 : A ? Z(A, e) - Z(A, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return D = !0, 0; var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t]; if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : A ? Z(A, e) - Z(A, t) : 0; if (i === o) return a(e, t); for (n = e; n = n.parentNode;) s.unshift(n); for (n = t; n = n.parentNode;) u.unshift(n); for (; s[r] === u[r];) r++; return r ? a(s[r], u[r]) : s[r] === W ? -1 : u[r] === W ? 1 : 0 }, q) : q }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) { if ((e.ownerDocument || e) !== q && j(e), b.matchesSelector && H && !U[n + " "] && (!P || !P.test(n)) && (!O || !O.test(n))) try { var r = R.call(e, n); if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { U(n, !0) }
            return t(n, q, null, [e]).length > 0 }, t.contains = function(e, t) { return (e.ownerDocument || e) !== q && j(e), M(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && j(e); var n = w.attrHandle[t.toLowerCase()],
                r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0; return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, t.escape = function(e) { return (e + "").replace(we, Te) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) { var t, n = [],
                r = 0,
                i = 0; if (D = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(X), D) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) } return A = null, e }, T = t.getText = function(e) { var t, n = "",
                r = 0,
                i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += T(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                for (; t = e[r++];) n += T(t); return n }, (w = t.selectors = { cacheLength: 50, createPseudo: r, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(xe, be).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = B[e + " "]; return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && B(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, r) { return function(i) { var o = t.attr(i, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-")) } }, CHILD: function(e, t, n, r, i) { var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t; return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) { var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1; if (v) { if (o) { for (; g;) { for (p = t; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? v.firstChild : v.lastChild], a && m) { for (x = (d = (l = (c = (f = (p = v)[I] || (p[I] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === $ && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) { c[e] = [$, d, x]; break } } else if (m && (x = d = (l = (c = (f = (p = t)[I] || (p[I] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === $ && l[1]), !1 === x)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[I] || (p[I] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [$, x]), p !== t));); return (x -= i) === r || x % r == 0 && x / r >= 0 } } }, PSEUDO: function(e, n) { var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) { for (var r, i = o(e, n), a = i.length; a--;) e[r = Z(e, i[a])] = !(t[r] = i[a]) }) : function(e) { return o(e, 0, i) }) : o } }, pseudos: { not: r(function(e) { var t = [],
                        n = [],
                        i = k(e.replace(ae, "$1")); return i[I] ? r(function(e, t, n, r) { for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) { return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() } }), has: r(function(e) { return function(n) { return t(e, n).length > 0 } }), contains: r(function(e) { return e = e.replace(xe, be),
                        function(t) { return (t.textContent || T(t)).indexOf(e) > -1 } }), lang: r(function(e) { return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
                        function(t) { var n;
                            do { if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === L }, focus: function(e) { return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: s(!1), disabled: s(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) { return !w.pseudos.empty(e) }, header: function(e) { return ge.test(e.nodeName) }, input: function(e) { return he.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: u(function() { return [0] }), last: u(function(e, t) { return [t - 1] }), eq: u(function(e, t, n) { return [n < 0 ? n + t : n] }), even: u(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: u(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: u(function(e, t, n) { for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r); return e }), gt: u(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = w.pseudos.eq; for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[x] = function(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }(x); for (x in { submit: !0, reset: !0 }) w.pseudos[x] = function(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }(x); return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function(e, n) { var r, i, o, a, s, u, l, c = _[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = w.preFilter; s;) { r && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ae, " ") }), s = s.slice(r.length)); for (a in w.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length)); if (!r) break } return n ? s.length : s ? t.error(e) : _(e, u).slice(0) }, k = t.compile = function(e, t) { var n, r = [],
                i = [],
                o = z[e + " "]; if (!o) { for (t || (t = E(e)), n = t.length; n--;)(o = y(t[n]))[I] ? r.push(o) : i.push(o);
                (o = z(e, m(i, r))).selector = e } return o }, S = t.select = function(e, t, n, r) { var i, o, a, s, u, c = "function" == typeof e && e,
                p = !r && E(e = c.selector || e); if (n = n || [], 1 === p.length) { if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) { if (!(t = (w.find.ID(a.matches[0].replace(xe, be), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((u = w.find[s]) && (r = u(a.matches[0].replace(xe, be), me.test(o[0].type) && l(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && f(o))) return J.apply(n, r), n; break } } return (c || k(e, p))(r, t, !H, n, !t || me.test(e) && l(t.parentNode) || t), n }, b.sortStable = I.split("").sort(X).join("") === I, b.detectDuplicates = !!D, j(), b.sortDetached = i(function(e) { return 1 & e.compareDocumentPosition(q.createElement("fieldset")) }), i(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), b.attributes && i(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), i(function(e) { return null == e.getAttribute("disabled") }) || o(ee, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t }(e);
    Te.find = Ee, Te.expr = Ee.selectors, Te.expr[":"] = Te.expr.pseudos, Te.uniqueSort = Te.unique = Ee.uniqueSort, Te.text = Ee.getText, Te.isXMLDoc = Ee.isXML, Te.contains = Ee.contains, Te.escapeSelector = Ee.escape; var ke = function(e, t, n) { for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) { if (i && Te(e).is(n)) break;
                    r.push(e) }
            return r },
        Se = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Ne = Te.expr.match.needsContext,
        Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Te.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Te.find.matchesSelector(r, e) ? [r] : [] : Te.find.matches(e, Te.grep(t, function(e) { return 1 === e.nodeType })) }, Te.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(Te(e).filter(function() { for (t = 0; t < r; t++)
                    if (Te.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) Te.find(e, i[t], n); return r > 1 ? Te.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(a(this, e || [], !1)) }, not: function(e) { return this.pushStack(a(this, e || [], !0)) }, is: function(e) { return !!a(this, "string" == typeof e && Ne.test(e) ? Te(e) : e || [], !1).length } }); var De, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Te.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || De, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : je.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof Te ? t[0] : t, Te.merge(this, Te.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ae.test(r[1]) && Te.isPlainObject(t))
                    for (r in t) xe(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = se.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : xe(e) ? void 0 !== n.ready ? n.ready(e) : e(Te) : Te.makeArray(e, this) }).prototype = Te.fn, De = Te(se); var qe = /^(?:parents|prev(?:Until|All))/,
        Le = { children: !0, contents: !0, next: !0, prev: !0 };
    Te.fn.extend({ has: function(e) { var t = Te(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (Te.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && Te(e); if (!Ne.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Te.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? Te.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? pe.call(Te(e), this[0]) : pe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), Te.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return ke(e, "parentNode") }, parentsUntil: function(e, t, n) { return ke(e, "parentNode", n) }, next: function(e) { return s(e, "nextSibling") }, prev: function(e) { return s(e, "previousSibling") }, nextAll: function(e) { return ke(e, "nextSibling") }, prevAll: function(e) { return ke(e, "previousSibling") }, nextUntil: function(e, t, n) { return ke(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return ke(e, "previousSibling", n) }, siblings: function(e) { return Se((e.parentNode || {}).firstChild, e) }, children: function(e) { return Se(e.firstChild) }, contents: function(e) { return void 0 !== e.contentDocument ? e.contentDocument : (o(e, "template") && (e = e.content || e), Te.merge([], e.childNodes)) } }, function(e, t) { Te.fn[e] = function(n, r) { var i = Te.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Te.filter(r, i)), this.length > 1 && (Le[e] || Te.uniqueSort(i), qe.test(e) && i.reverse()), this.pushStack(i) } }); var He = /[^\x20\t\r\n\f]+/g;
    Te.Callbacks = function(e) { e = "string" == typeof e ? u(e) : Te.extend({}, e); var t, n, i, o, a = [],
            s = [],
            l = -1,
            c = function() { for (o = o || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "") },
            f = { add: function() { return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) { Te.each(n, function(n, i) { xe(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== r(i) && t(i) }) }(arguments), n && !t && c()), this }, remove: function() { return Te.each(arguments, function(e, t) { for (var n;
                            (n = Te.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? Te.inArray(e, a) > -1 : a.length > 0 }, empty: function() { return a && (a = []), this }, disable: function() { return o = s = [], a = n = "", this }, disabled: function() { return !a }, lock: function() { return o = s = [], n || t || (a = n = ""), this }, locked: function() { return !!o }, fireWith: function(e, n) { return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!i } }; return f }, Te.extend({ Deferred: function(t) { var n = [
                    ["notify", "progress", Te.Callbacks("memory"), Te.Callbacks("memory"), 2],
                    ["resolve", "done", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = { state: function() { return r }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(e) { return i.then(null, e) }, pipe: function() { var e = arguments; return Te.Deferred(function(t) { Te.each(n, function(n, r) { var i = xe(e[r[4]]) && e[r[4]];
                                o[r[1]](function() { var e = i && i.apply(this, arguments);
                                    e && xe(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments) }) }), e = null }).promise() }, then: function(t, r, i) {
                        function o(t, n, r, i) { return function() { var s = this,
                                    u = arguments,
                                    f = function() { var e, f; if (!(t < a)) { if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, xe(f) ? i ? f.call(e, o(a, n, l, i), o(a, n, c, i)) : (a++, f.call(e, o(a, n, l, i), o(a, n, c, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, u = [e]), (i || n.resolveWith)(s, u)) } },
                                    p = i ? f : function() { try { f() } catch (e) { Te.Deferred.exceptionHook && Te.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== c && (s = void 0, u = [e]), n.rejectWith(s, u)) } };
                                t ? p() : (Te.Deferred.getStackHook && (p.stackTrace = Te.Deferred.getStackHook()), e.setTimeout(p)) } } var a = 0; return Te.Deferred(function(e) { n[0][3].add(o(0, e, xe(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, xe(t) ? t : l)), n[2][3].add(o(0, e, xe(r) ? r : c)) }).promise() }, promise: function(e) { return null != e ? Te.extend(e, i) : i } },
                o = {}; return Te.each(n, function(e, t) { var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), i.promise(o), t && t.call(o, o), o }, when: function(e) { var t = arguments.length,
                n = t,
                r = Array(n),
                i = le.call(arguments),
                o = Te.Deferred(),
                a = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(r, i) } }; if (t <= 1 && (f(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || xe(i[n] && i[n].then))) return o.then(); for (; n--;) f(i[n], a(n), o.reject); return o.promise() } }); var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Te.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && Oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, Te.readyException = function(t) { e.setTimeout(function() { throw t }) }; var Pe = Te.Deferred();
    Te.fn.ready = function(e) { return Pe.then(e).catch(function(e) { Te.readyException(e) }), this }, Te.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --Te.readyWait : Te.isReady) || (Te.isReady = !0, !0 !== e && --Te.readyWait > 0 || Pe.resolveWith(se, [Te])) } }), Te.ready.then = Pe.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(Te.ready) : (se.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p)); var Re = function(e, t, n, i, o, a, s) { var u = 0,
                l = e.length,
                c = null == n; if ("object" === r(n)) { o = !0; for (u in n) Re(e, t, u, n[u], !0, a, s) } else if (void 0 !== i && (o = !0, xe(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(Te(e), n) })), t))
                for (; u < l; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n))); return o ? e : c ? t.call(e) : l ? t(e[0], n) : a },
        Me = /^-ms-/,
        Ie = /-([a-z])/g,
        We = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    g.uid = 1, g.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, We(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[h(t)] = n;
            else
                for (r in t) i[h(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in r ? [t] : t.match(He) || []).length; for (; n--;) delete r[t[n]] }(void 0 === t || Te.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !Te.isEmptyObject(t) } }; var $e = new g,
        Fe = new g,
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /[A-Z]/g;
    Te.extend({ hasData: function(e) { return Fe.hasData(e) || $e.hasData(e) }, data: function(e, t, n) { return Fe.access(e, t, n) }, removeData: function(e, t) { Fe.remove(e, t) }, _data: function(e, t, n) { return $e.access(e, t, n) }, _removeData: function(e, t) { $e.remove(e, t) } }), Te.fn.extend({ data: function(e, t) { var n, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === e) { if (this.length && (i = Fe.get(o), 1 === o.nodeType && !$e.get(o, "hasDataAttrs"))) { for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = h(r.slice(5)), y(o, r, i[r]));
                    $e.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof e ? this.each(function() { Fe.set(this, e) }) : Re(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = Fe.get(o, e))) return n; if (void 0 !== (n = y(o, e))) return n } else this.each(function() { Fe.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { Fe.remove(this, e) }) } }), Te.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = $e.get(e, t), n && (!r || Array.isArray(n) ? r = $e.access(e, t, Te.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = Te.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Te._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { Te.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return $e.get(e, n) || $e.access(e, n, { empty: Te.Callbacks("once memory").add(function() { $e.remove(e, [t + "queue", n]) }) }) } }), Te.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Te.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = Te.queue(this, e, t);
                Te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { Te.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = Te.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = $e.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ue = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
        Xe = ["Top", "Right", "Bottom", "Left"],
        Ve = se.documentElement,
        Ge = function(e) { return Te.contains(e.ownerDocument, e) },
        Ye = { composed: !0 };
    Ve.getRootNode && (Ge = function(e) { return Te.contains(e.ownerDocument, e) || e.getRootNode(Ye) === e.ownerDocument }); var Qe = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && Ge(e) && "none" === Te.css(e, "display") },
        Je = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i },
        Ke = {};
    Te.fn.extend({ show: function() { return b(this, !0) }, hide: function() { return b(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Qe(this) ? Te(this).show() : Te(this).hide() }) } }); var Ze = /^(?:checkbox|radio)$/i,
        et = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        tt = /^$|^module$|\/(?:java|ecma)script/i,
        nt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    nt.optgroup = nt.option, nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead, nt.th = nt.td; var rt = /<|&#?\w+;/;! function() { var e = se.createDocumentFragment().appendChild(se.createElement("div")),
            t = se.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }(); var it = /^key/,
        ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        at = /^([^.]*)(?:\.(.+)|)/;
    Te.event = { global: {}, add: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = $e.get(e); if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && Te.find.matchesSelector(Ve, i), n.guid || (n.guid = Te.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) { return void 0 !== Te && Te.event.triggered !== t.type ? Te.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(He) || [""]).length; l--;) d = g = (s = at.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = Te.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Te.event.special[d] || {}, c = Te.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && Te.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Te.event.global[d] = !0) }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = $e.hasData(e) && $e.get(e); if (v && (u = v.events)) { for (l = (t = (t || "").match(He) || [""]).length; l--;)
                    if (s = at.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { for (f = Te.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || Te.removeEvent(e, d, v.handle), delete u[d]) } else
                        for (d in u) Te.event.remove(e, d + t[l], n, r, !0);
                Te.isEmptyObject(u) && $e.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = Te.event.fix(e),
                u = new Array(arguments.length),
                l = ($e.get(this, "events") || {})[s.type] || [],
                c = Te.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { for (a = Te.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((Te.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? Te(i, this).index(l) > -1 : Te.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(e, t) { Object.defineProperty(Te.Event.prototype, e, { enumerable: !0, configurable: !0, get: xe(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[Te.expando] ? e : new Te.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return Ze.test(t.type) && t.click && o(t, "input") && D(t, "click", E), !1 }, trigger: function(e) { var t = this || e; return Ze.test(t.type) && t.click && o(t, "input") && D(t, "click"), !0 }, _default: function(e) { var t = e.target; return Ze.test(t.type) && t.click && o(t, "input") && $e.get(t, "click") || o(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, Te.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, Te.Event = function(e, t) { if (!(this instanceof Te.Event)) return new Te.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? E : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Te.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Te.expando] = !0 }, Te.Event.prototype = { constructor: Te.Event, isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, Te.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && it.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, Te.event.addProp), Te.each({ focus: "focusin", blur: "focusout" }, function(e, t) { Te.event.special[e] = { setup: function() { return D(this, e, S), !1 }, trigger: function() { return D(this, e), !0 }, delegateType: t } }), Te.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { Te.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj; return i && (i === r || Te.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), Te.fn.extend({ on: function(e, t, n, r) { return A(this, e, t, n, r) }, one: function(e, t, n, r) { return A(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Te(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function() { Te.event.remove(this, e, n, t) }) } }); var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ut = /<script|<style|<link/i,
        lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Te.extend({ htmlPrefilter: function(e) { return e.replace(st, "<$1></$2>") }, clone: function(e, t, n) { var r, i, o, a, s = e.cloneNode(!0),
                u = Ge(e); if (!(me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Te.isXMLDoc(e)))
                for (a = w(s), r = 0, i = (o = w(e)).length; r < i; r++) O(o[r], a[r]); if (t)
                if (n)
                    for (o = o || w(e), a = a || w(s), r = 0, i = o.length; r < i; r++) H(o[r], a[r]);
                else H(e, s);
            return (a = w(s, "script")).length > 0 && T(a, !u && w(e, "script")), s }, cleanData: function(e) { for (var t, n, r, i = Te.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (We(n)) { if (t = n[$e.expando]) { if (t.events)
                            for (r in t.events) i[r] ? Te.event.remove(n, r) : Te.removeEvent(n, r, t.handle);
                        n[$e.expando] = void 0 }
                    n[Fe.expando] && (n[Fe.expando] = void 0) } } }), Te.fn.extend({ detach: function(e) { return R(this, e, !0) }, remove: function(e) { return R(this, e) }, text: function(e) { return Re(this, function(e) { return void 0 === e ? Te.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return P(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || j(this, e).appendChild(e) }) }, prepend: function() { return P(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = j(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return P(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return P(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Te.cleanData(w(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return Te.clone(this, e, t) }) }, html: function(e) { return Re(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ut.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) { e = Te.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Te.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return P(this, arguments, function(t) { var n = this.parentNode;
                Te.inArray(this, e) < 0 && (Te.cleanData(w(this)), n && n.replaceChild(t, this)) }, e) } }), Te.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { Te.fn[e] = function(e) { for (var n, r = [], i = Te(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Te(i[a])[t](n), fe.apply(r, n.get()); return this.pushStack(r) } }); var ft = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
        pt = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
        dt = new RegExp(Xe.join("|"), "i");! function() {
        function t() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ve.appendChild(u).appendChild(l); var t = e.getComputedStyle(l);
                r = "1%" !== t.top, s = 12 === n(t.marginLeft), l.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), l.style.position = "absolute", o = 12 === n(l.offsetWidth / 3), Ve.removeChild(u), l = null } }

        function n(e) { return Math.round(parseFloat(e)) } var r, i, o, a, s, u = se.createElement("div"),
            l = se.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === l.style.backgroundClip, Te.extend(me, { boxSizingReliable: function() { return t(), i }, pixelBoxStyles: function() { return t(), a }, pixelPosition: function() { return t(), r }, reliableMarginLeft: function() { return t(), s }, scrollboxSize: function() { return t(), o } })) }(); var ht = ["Webkit", "Moz", "ms"],
        gt = se.createElement("div").style,
        vt = {},
        yt = /^(none|table(?!-c[ea]).+)/,
        mt = /^--/,
        xt = { position: "absolute", visibility: "hidden", display: "block" },
        bt = { letterSpacing: "0", fontWeight: "400" };
    Te.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = M(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = h(t),
                    u = mt.test(t),
                    l = e.style; if (u || (t = $(s)), a = Te.cssHooks[t] || Te.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" == (o = typeof n) && (i = Ue.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), null != n && n === n && ("number" !== o || u || (n += i && i[3] || (Te.cssNumber[s] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = h(t); return mt.test(t) || (t = $(s)), (a = Te.cssHooks[t] || Te.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = M(e, t, r)), "normal" === i && t in bt && (i = bt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), Te.each(["height", "width"], function(e, t) { Te.cssHooks[t] = { get: function(e, n, r) { if (n) return !yt.test(Te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? _(e, t, r) : Je(e, xt, function() { return _(e, t, r) }) }, set: function(e, n, r) { var i, o = pt(e),
                    a = !me.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === Te.css(e, "boxSizing", !1, o),
                    u = r ? B(e, t, r, s, o) : 0; return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - B(e, t, "border", !1, o) - .5)), u && (i = Ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Te.css(e, t)), F(0, n, u) } } }), Te.cssHooks.marginLeft = I(me.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), Te.each({ margin: "", padding: "", border: "Width" }, function(e, t) { Te.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Xe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (Te.cssHooks[e + t].set = F) }), Te.fn.extend({ css: function(e, t) { return Re(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = pt(e), i = t.length; a < i; a++) o[t[a]] = Te.css(e, t[a], !1, r); return o } return void 0 !== n ? Te.style(e, t, n) : Te.css(e, t) }, e, t, arguments.length > 1) } }), Te.Tween = z, z.prototype = { constructor: z, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || Te.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Te.cssNumber[n] ? "" : "px") }, cur: function() { var e = z.propHooks[this.prop]; return e && e.get ? e.get(this) : z.propHooks._default.get(this) }, run: function(e) { var t, n = z.propHooks[this.prop]; return this.options.duration ? this.pos = t = Te.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this } }, z.prototype.init.prototype = z.prototype, z.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Te.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { Te.fx.step[e.prop] ? Te.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Te.cssHooks[e.prop] && null == e.elem.style[$(e.prop)] ? e.elem[e.prop] = e.now : Te.style(e.elem, e.prop, e.now + e.unit) } } }, z.propHooks.scrollTop = z.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, Te.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, Te.fx = z.prototype.init, Te.fx.step = {}; var wt, Tt, Ct = /^(?:toggle|show|hide)$/,
        Et = /queueHooks$/;
    Te.Animation = Te.extend(Q, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return m(n.elem, e, Ue.exec(t), n), n }] }, tweener: function(e, t) { xe(e) ? (t = e, e = ["*"]) : e = e.match(He); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && Qe(e),
                    v = $e.get(e, "fxshow");
                n.queue || (null == (a = Te._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, Te.queue(e, "fx").length || a.empty.fire() }) })); for (r in t)
                    if (i = t[r], Ct.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0 }
                        d[r] = v && v[r] || Te.style(e, r) }
                if ((u = !Te.isEmptyObject(t)) || !Te.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = $e.get(e, "display")), "none" === (c = Te.css(e, "display")) && (l ? c = l : (b([e], !0), l = e.style.display || l, c = Te.css(e, "display"), b([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Te.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = $e.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && b([e], !0), p.done(function() { g || b([e]), $e.remove(e, "fxshow"); for (r in d) Te.style(e, r, d[r]) })), u = G(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) } }], prefilter: function(e, t) { t ? Q.prefilters.unshift(e) : Q.prefilters.push(e) } }), Te.speed = function(e, t, n) { var r = e && "object" == typeof e ? Te.extend({}, e) : { complete: n || !n && t || xe(e) && e, duration: e, easing: n && t || t && !xe(t) && t }; return Te.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Te.fx.speeds ? r.duration = Te.fx.speeds[r.duration] : r.duration = Te.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { xe(r.old) && r.old.call(this), r.queue && Te.dequeue(this, r.queue) }, r }, Te.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(Qe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) { var i = Te.isEmptyObject(e),
                    o = Te.speed(t, n, r),
                    a = function() { var t = Q(this, Te.extend({}, e), o);
                        (i || $e.get(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) { var r = function(e) { var t = e.stop;
                    delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() { var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Te.timers,
                        a = $e.get(this); if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Et.test(i) && r(a[i]); for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));!t && n || Te.dequeue(this, e) }) }, finish: function(e) { return !1 !== e && (e = e || "fx"), this.each(function() { var t, n = $e.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Te.timers,
                        a = r ? r.length : 0; for (n.finish = !0, Te.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish }) } }), Te.each(["toggle", "show", "hide"], function(e, t) { var n = Te.fn[t];
            Te.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, r, i) } }), Te.each({ slideDown: V("show"), slideUp: V("hide"), slideToggle: V("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { Te.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), Te.timers = [], Te.fx.tick = function() { var e, t = 0,
                n = Te.timers; for (wt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Te.fx.stop(), wt = void 0 }, Te.fx.timer = function(e) { Te.timers.push(e), Te.fx.start() }, Te.fx.interval = 13, Te.fx.start = function() { Tt || (Tt = !0, U()) }, Te.fx.stop = function() { Tt = null }, Te.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Te.fn.delay = function(t, n) { return t = Te.fx ? Te.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) { var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) } }) },
        function() { var e = se.createElement("input"),
                t = se.createElement("select").appendChild(se.createElement("option"));
            e.type = "checkbox", me.checkOn = "" !== e.value, me.optSelected = t.selected, (e = se.createElement("input")).value = "t", e.type = "radio", me.radioValue = "t" === e.value }(); var kt, St = Te.expr.attrHandle;
    Te.fn.extend({ attr: function(e, t) { return Re(this, Te.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { Te.removeAttr(this, e) }) } }), Te.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Te.prop(e, t, n) : (1 === o && Te.isXMLDoc(e) || (i = Te.attrHooks[t.toLowerCase()] || (Te.expr.match.bool.test(t) ? kt : void 0)), void 0 !== n ? null === n ? void Te.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = Te.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!me.radioValue && "radio" === t && o(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(He); if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n) } }), kt = { set: function(e, t, n) { return !1 === t ? Te.removeAttr(e, n) : e.setAttribute(n, n), n } }, Te.each(Te.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = St[t] || Te.find.attr;
        St[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = St[a], St[a] = i, i = null != n(e, t, r) ? a : null, St[a] = o), i } }); var Nt = /^(?:input|select|textarea|button)$/i,
        At = /^(?:a|area)$/i;
    Te.fn.extend({ prop: function(e, t) { return Re(this, Te.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[Te.propFix[e] || e] }) } }), Te.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Te.isXMLDoc(e) || (t = Te.propFix[t] || t, i = Te.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = Te.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Nt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), me.optSelected || (Te.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), Te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { Te.propFix[this.toLowerCase()] = this }), Te.fn.extend({ addClass: function(e) { var t, n, r, i, o, a, s, u = 0; if (xe(e)) return this.each(function(t) { Te(this).addClass(e.call(this, t, K(this))) }); if ((t = Z(e)).length)
                for (; n = this[u++];)
                    if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") { for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = J(r)) && n.setAttribute("class", s) }
            return this }, removeClass: function(e) { var t, n, r, i, o, a, s, u = 0; if (xe(e)) return this.each(function(t) { Te(this).removeClass(e.call(this, t, K(this))) }); if (!arguments.length) return this.attr("class", ""); if ((t = Z(e)).length)
                for (; n = this[u++];)
                    if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") { for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = J(r)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(e, t) { var n = typeof e,
                r = "string" === n || Array.isArray(e); return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : xe(e) ? this.each(function(n) { Te(this).toggleClass(e.call(this, n, K(this), t), t) }) : this.each(function() { var t, i, o, a; if (r)
                    for (i = 0, o = Te(this), a = Z(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = K(this)) && $e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $e.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, r = 0; for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1) return !0;
            return !1 } }); var Dt = /\r/g;
    Te.fn.extend({ val: function(e) { var t, n, r, i = this[0]; { if (arguments.length) return r = xe(e), this.each(function(n) { var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, Te(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Te.map(i, function(e) { return null == e ? "" : e + "" })), (t = Te.valHooks[this.type] || Te.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) }); if (i) return (t = Te.valHooks[i.type] || Te.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Dt, "") : null == n ? "" : n } } }), Te.extend({ valHooks: { option: { get: function(e) { var t = Te.find.attr(e, "value"); return null != t ? t : J(Te.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : i.length; for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) { if (t = Te(n).val(), s) return t;
                            u.push(t) }
                    return u }, set: function(e, t) { for (var n, r, i = e.options, o = Te.makeArray(t), a = i.length; a--;)((r = i[a]).selected = Te.inArray(Te.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), Te.each(["radio", "checkbox"], function() { Te.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = Te.inArray(Te(e).val(), t) > -1 } }, me.checkOn || (Te.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), me.focusin = "onfocusin" in e; var jt = /^(?:focusinfocus|focusoutblur)$/,
        qt = function(e) { e.stopPropagation() };
    Te.extend(Te.event, { trigger: function(t, n, r, i) { var o, a, s, u, l, c, f, p, d = [r || se],
                h = ge.call(t, "type") ? t.type : t,
                g = ge.call(t, "namespace") ? t.namespace.split(".") : []; if (a = p = s = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(h + Te.event.triggered) && (h.indexOf(".") > -1 && (h = (g = h.split(".")).shift(), g.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Te.expando] ? t : new Te.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Te.makeArray(n, [t]), f = Te.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) { if (!i && !f.noBubble && !be(r)) { for (u = f.delegateType || h, jt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || se) && d.push(s.defaultView || s.parentWindow || e) } for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) p = a, t.type = o > 1 ? u : f.bindType || h, (c = ($e.get(a, "events") || {})[t.type] && $e.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && We(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault()); return t.type = h, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !We(r) || l && xe(r[h]) && !be(r) && ((s = r[l]) && (r[l] = null), Te.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, qt), r[h](), t.isPropagationStopped() && p.removeEventListener(h, qt), Te.event.triggered = void 0, s && (r[l] = s)), t.result } }, simulate: function(e, t, n) { var r = Te.extend(new Te.Event, n, { type: e, isSimulated: !0 });
            Te.event.trigger(r, null, t) } }), Te.fn.extend({ trigger: function(e, t) { return this.each(function() { Te.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return Te.event.trigger(e, t, n, !0) } }), me.focusin || Te.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { Te.event.simulate(t, e.target, Te.event.fix(e)) };
        Te.event.special[t] = { setup: function() { var r = this.ownerDocument || this,
                    i = $e.access(r, t);
                i || r.addEventListener(e, n, !0), $e.access(r, t, (i || 0) + 1) }, teardown: function() { var r = this.ownerDocument || this,
                    i = $e.access(r, t) - 1;
                i ? $e.access(r, t, i) : (r.removeEventListener(e, n, !0), $e.remove(r, t)) } } }); var Lt = e.location,
        Ht = Date.now(),
        Ot = /\?/;
    Te.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || Te.error("Invalid XML: " + t), n }; var Pt = /\[\]$/,
        Rt = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
    Te.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = xe(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !Te.isPlainObject(e)) Te.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) ee(n, e[n], t, i); return r.join("&") }, Te.fn.extend({ serialize: function() { return Te.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = Te.prop(this, "elements"); return e ? Te.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !Te(this).is(":disabled") && It.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ze.test(e)) }).map(function(e, t) { var n = Te(this).val(); return null == n ? null : Array.isArray(n) ? Te.map(n, function(e) { return { name: t.name, value: e.replace(Rt, "\r\n") } }) : { name: t.name, value: n.replace(Rt, "\r\n") } }).get() } }); var Wt = /%20/g,
        $t = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        Ut = /^\/\//,
        Xt = {},
        Vt = {},
        Gt = "*/".concat("*"),
        Yt = se.createElement("a");
    Yt.href = Lt.href, Te.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Lt.href, type: "GET", isLocal: _t.test(Lt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Gt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Te.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? re(re(e, Te.ajaxSettings), t) : re(Te.ajaxSettings, e) }, ajaxPrefilter: te(Xt), ajaxTransport: te(Vt), ajax: function(t, n) {
            function r(t, n, r, s) { var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = ie(h, C, r)), b = oe(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (Te.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (Te.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? y.resolveWith(g, [p, T, C]) : y.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), m.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --Te.active || Te.event.trigger("ajaxStop"))) } "object" == typeof t && (n = t, t = void 0), n = n || {}; var i, o, a, s, u, l, c, f, p, d, h = Te.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? Te(g) : Te.event,
                y = Te.Deferred(),
                m = Te.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = { readyState: 0, getResponseHeader: function(e) { var t; if (c) { if (!s)
                                for (s = {}; t = Bt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return c ? a : null }, setRequestHeader: function(e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this }, overrideMimeType: function(e) { return null == c && (h.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this }, abort: function(e) { var t = e || T; return i && i.abort(t), r(0, t), this } }; if (y.promise(C), h.url = ((t || h.url || Lt.href) + "").replace(Ut, Lt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(He) || [""], null == h.crossDomain) { l = se.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = Te.param(h.data, h.traditional)), ne(Xt, h, n, C), c) return C;
            (f = Te.event && h.global) && 0 == Te.active++ && Te.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), o = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Wt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ot.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ft, "$1"), d = (Ot.test(o) ? "&" : "?") + "_=" + Ht++ + d), h.url = o + d), h.ifModified && (Te.lastModified[o] && C.setRequestHeader("If-Modified-Since", Te.lastModified[o]), Te.etag[o] && C.setRequestHeader("If-None-Match", Te.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : h.accepts["*"]); for (p in h.headers) C.setRequestHeader(p, h.headers[p]); if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort(); if (T = "abort", m.add(h.complete), C.done(h.success), C.fail(h.error), i = ne(Vt, h, n, C)) { if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { C.abort("timeout") }, h.timeout)); try { c = !1, i.send(b, r) } catch (e) { if (c) throw e;
                    r(-1, e) } } else r(-1, "No Transport"); return C }, getJSON: function(e, t, n) { return Te.get(e, t, n, "json") }, getScript: function(e, t) { return Te.get(e, void 0, t, "script") } }), Te.each(["get", "post"], function(e, t) { Te[t] = function(e, n, r, i) { return xe(n) && (i = i || r, r = n, n = void 0), Te.ajax(Te.extend({ url: e, type: t, dataType: i, data: n, success: r }, Te.isPlainObject(e) && e)) } }), Te._evalUrl = function(e, t) { return Te.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { Te.globalEval(e, t) } }) }, Te.fn.extend({ wrapAll: function(e) { var t; return this[0] && (xe(e) && (e = e.call(this[0])), t = Te(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return xe(e) ? this.each(function(t) { Te(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = Te(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = xe(e); return this.each(function(n) { Te(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { Te(this).replaceWith(this.childNodes) }), this } }), Te.expr.pseudos.hidden = function(e) { return !Te.expr.pseudos.visible(e) }, Te.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, Te.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} }; var Qt = { 0: 200, 1223: 204 },
        Jt = Te.ajaxSettings.xhr();
    me.cors = !!Jt && "withCredentials" in Jt, me.ajax = Jt = !!Jt, Te.ajaxTransport(function(t) { var n, r; if (me.cors || Jt && !t.crossDomain) return { send: function(i, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Qt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e } }, abort: function() { n && n() } } }), Te.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), Te.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return Te.globalEval(e), e } } }), Te.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), Te.ajaxTransport("script", function(e) { if (e.crossDomain || e.scriptAttrs) { var t, n; return { send: function(r, i) { t = Te("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type) }), se.head.appendChild(t[0]) }, abort: function() { n && n() } } } }); var Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    Te.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Kt.pop() || Te.expando + "_" + Ht++; return this[e] = !0, e } }), Te.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = xe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Zt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ot.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || Te.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? Te(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Kt.push(i)), a && xe(o) && o(a[0]), a = o = void 0 }), "script" }), me.createHTMLDocument = function() { var e = se.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), Te.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var r, i, o; return t || (me.createHTMLDocument ? ((r = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(r)) : t = se), i = Ae.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = C([e], t, o), o && o.length && Te(o).remove(), Te.merge([], i.childNodes)) }, Te.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return s > -1 && (r = J(e.slice(s)), e = e.slice(0, s)), xe(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Te.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? Te("<div>").append(Te.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, Te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { Te.fn[t] = function(e) { return this.on(t, e) } }), Te.expr.pseudos.animated = function(e) { return Te.grep(Te.timers, function(t) { return e === t.elem }).length }, Te.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = Te.css(e, "position"),
                c = Te(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = Te.css(e, "top"), u = Te.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), xe(t) && (t = t.call(e, n, Te.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, Te.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { Te.offset.setOffset(this, e, t) }); var t, n, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === Te.css(r, "position")) t = r.getBoundingClientRect();
                else { for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Te.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = Te(e).offset()).top += Te.css(e, "borderTopWidth", !0), i.left += Te.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - Te.css(r, "marginTop", !0), left: t.left - i.left - Te.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === Te.css(e, "position");) e = e.offsetParent; return e || Ve }) } }), Te.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
        Te.fn[e] = function(r) { return Re(this, function(e, r, i) { var o; if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i }, e, r, arguments.length) } }), Te.each(["top", "left"], function(e, t) { Te.cssHooks[t] = I(me.pixelPosition, function(e, n) { if (n) return n = M(e, t), ft.test(n) ? Te(e).position()[t] + "px" : n }) }), Te.each({ Height: "height", Width: "width" }, function(e, t) { Te.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) { Te.fn[r] = function(i, o) { var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border"); return Re(this, function(t, n, i) { var o; return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Te.css(t, n, s) : Te.style(t, n, i, s) }, t, a ? i : void 0, a) } }) }), Te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { Te.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), Te.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), Te.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), Te.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), xe(e)) return r = le.call(arguments, 2), i = function() { return e.apply(t || this, r.concat(le.call(arguments))) }, i.guid = e.guid = e.guid || Te.guid++, i }, Te.holdReady = function(e) { e ? Te.readyWait++ : Te.ready(!0) }, Te.isArray = Array.isArray, Te.parseJSON = JSON.parse, Te.nodeName = o, Te.isFunction = xe, Te.isWindow = be, Te.camelCase = h, Te.type = r, Te.now = Date.now, Te.isNumeric = function(e) { var t = Te.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return Te }); var en = e.jQuery,
        tn = e.$; return Te.noConflict = function(t) { return e.$ === Te && (e.$ = tn), t && e.jQuery === Te && (e.jQuery = en), Te }, t || (e.jQuery = e.$ = Te), Te });