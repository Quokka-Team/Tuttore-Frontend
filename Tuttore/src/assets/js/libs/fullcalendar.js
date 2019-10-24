! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e = e || self, t(e.FullCalendar = {})) }(this, function(e) {
    "use strict";

    function t(e, t, n) {
        var r = document.createElement(e);
        if (t)
            for (var i in t) "style" === i ? h(r, t[i]) : kr[i] ? r[i] = t[i] : r.setAttribute(i, t[i]);
        return "string" == typeof n ? r.innerHTML = n : null != n && s(r, n), r
    }

    function n(e) { e = e.trim(); var t = document.createElement(o(e)); return t.innerHTML = e, t.firstChild }

    function r(e) { return Array.prototype.slice.call(i(e)) }

    function i(e) { e = e.trim(); var t = document.createElement(o(e)); return t.innerHTML = e, t.childNodes }

    function o(e) { return _r[e.substr(0, 3)] || "div" }

    function s(e, t) { for (var n = l(t), r = 0; r < n.length; r++) e.appendChild(n[r]) }

    function a(e, t) { for (var n = l(t), r = e.firstChild || null, i = 0; i < n.length; i++) e.insertBefore(n[i], r) }

    function l(e) { return "string" == typeof e ? r(e) : e instanceof Node ? [e] : Array.prototype.slice.call(e) }

    function c(e) { e.parentNode && e.parentNode.removeChild(e) }

    function u(e, t) { return xr.call(e, t) }

    function d(e, t) { return Or.call(e, t) }

    function p(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0; i < n.length; i++)
            for (var o = n[i].querySelectorAll(t), s = 0; s < o.length; s++) r.push(o[s]);
        return r
    }

    function h(e, t) { for (var n in t) f(e, n, t[n]) }

    function f(e, t, n) { null == n ? e.style[t] = "" : "number" == typeof n && Nr.test(t) ? e.style[t] = n + "px" : e.style[t] = n }

    function g(e, t) { var n = { left: Math.max(e.left, t.left), right: Math.min(e.right, t.right), top: Math.max(e.top, t.top), bottom: Math.min(e.bottom, t.bottom) }; return n.left < n.right && n.top < n.bottom && n }

    function v() { return null === zr && (zr = m()), zr }

    function m() {
        var e = t("div", { style: { position: "absolute", top: -1e3, left: 0, border: 0, padding: 0, overflow: "scroll", direction: "rtl" } }, "<div></div>");
        document.body.appendChild(e);
        var n = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
        return c(e), n
    }

    function y(e) { return e = Math.max(0, e), e = Math.round(e) }

    function E(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            i = parseInt(n.borderRightWidth, 10) || 0,
            o = parseInt(n.borderTopWidth, 10) || 0,
            s = parseInt(n.borderBottomWidth, 10) || 0,
            a = y(e.offsetWidth - e.clientWidth - r - i),
            l = { borderLeft: r, borderRight: i, borderTop: o, borderBottom: s, scrollbarBottom: y(e.offsetHeight - e.clientHeight - o - s), scrollbarLeft: 0, scrollbarRight: 0 };
        return v() && "rtl" === n.direction ? l.scrollbarLeft = a : l.scrollbarRight = a, t && (l.paddingLeft = parseInt(n.paddingLeft, 10) || 0, l.paddingRight = parseInt(n.paddingRight, 10) || 0, l.paddingTop = parseInt(n.paddingTop, 10) || 0, l.paddingBottom = parseInt(n.paddingBottom, 10) || 0), l
    }

    function S(e, t) {
        void 0 === t && (t = !1);
        var n = b(e),
            r = E(e, t),
            i = { left: n.left + r.borderLeft + r.scrollbarLeft, right: n.right - r.borderRight - r.scrollbarRight, top: n.top + r.borderTop, bottom: n.bottom - r.borderBottom - r.scrollbarBottom };
        return t && (i.left += r.paddingLeft, i.right -= r.paddingRight, i.top += r.paddingTop, i.bottom -= r.paddingBottom), i
    }

    function b(e) { var t = e.getBoundingClientRect(); return { left: t.left + window.pageXOffset, top: t.top + window.pageYOffset, right: t.right + window.pageXOffset, bottom: t.bottom + window.pageYOffset } }

    function D() { return { left: window.pageXOffset, right: window.pageXOffset + document.documentElement.clientWidth, top: window.pageYOffset, bottom: window.pageYOffset + document.documentElement.clientHeight } }

    function w(e) { var t = window.getComputedStyle(e); return e.getBoundingClientRect().height + parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10) }

    function T(e) { for (var t = []; e instanceof HTMLElement;) { var n = window.getComputedStyle(e); if ("fixed" === n.position) break; /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode } return t }

    function C(e) { e.preventDefault() }

    function R(e, t, n, r) {
        function i(e) {
            var t = u(e.target, n);
            t && r.call(t, e, t)
        }
        return e.addEventListener(t, i),
            function() { e.removeEventListener(t, i) }
    }

    function I(e, t, n, r) {
        var i;
        return R(e, "mouseover", t, function(e, t) {
            if (t !== i) {
                i = t, n(e, t);
                var o = function(e) { i = null, r(e, t), t.removeEventListener("mouseleave", o) };
                t.addEventListener("mouseleave", o)
            }
        })
    }

    function M(e, t) { var n = Y(e); return n[2] += t, Z(n) }

    function P(e, t) { var n = Y(e); return n[6] += t, Z(n) }

    function H(e, t) { return (t.valueOf() - e.valueOf()) / 864e5 }

    function k(e, t) { return (t.valueOf() - e.valueOf()) / 36e5 }

    function _(e, t) { return (t.valueOf() - e.valueOf()) / 6e4 }

    function O(e, t) { return (t.valueOf() - e.valueOf()) / 1e3 }

    function x(e, t) {
        var n = L(e),
            r = L(t);
        return { years: 0, months: 0, days: Math.round(H(n, r)), milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()) }
    }

    function N(e, t) { var n = z(e, t); return null !== n && n % 7 == 0 ? n / 7 : null }

    function z(e, t) { return X(e) === X(t) ? Math.round(H(e, t)) : null }

    function L(e) { return Z([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]) }

    function V(e) { return Z([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]) }

    function A(e) { return Z([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()]) }

    function B(e) { return Z([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]) }

    function U(e, t, n) {
        var r = e.getUTCFullYear(),
            i = G(e, r, t, n);
        if (i < 1) return G(e, r - 1, t, n);
        var o = G(e, r + 1, t, n);
        return o >= 1 ? Math.min(i, o) : i
    }

    function G(e, t, n, r) {
        var i = Z([t, 0, 1 + F(t, n, r)]),
            o = L(e),
            s = Math.round(H(i, o));
        return Math.floor(s / 7) + 1
    }

    function F(e, t, n) { var r = 7 + t - n; return -(7 + Z([e, 0, r]).getUTCDay() - t) % 7 + r - 1 }

    function W(e) { return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()] }

    function j(e) { return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0) }

    function Y(e) { return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()] }

    function Z(e) { return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e)) }

    function q(e) { return !isNaN(e.valueOf()) }

    function X(e) { return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds() }

    function K(e, t) { var n; return "string" == typeof e ? J(e) : "object" == typeof e && e ? Q(e) : "number" == typeof e ? Q((n = {}, n[t || "milliseconds"] = e, n)) : null }

    function J(e) { var t = Br.exec(e); if (t) { var n = t[1] ? -1 : 1; return { years: 0, months: 0, days: n * (t[2] ? parseInt(t[2], 10) : 0), milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0)) } } return null }

    function Q(e) { return { years: e.years || e.year || 0, months: e.months || e.month || 0, days: (e.days || e.day || 0) + 7 * $(e), milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0) } }

    function $(e) { return e.weeks || e.week || 0 }

    function ee(e, t) { return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds }

    function te(e, t) { return { years: e.years - t.years, months: e.months - t.months, days: e.days - t.days, milliseconds: e.milliseconds - t.milliseconds } }

    function ne(e) { return ie(e) / 365 }

    function re(e) { return ie(e) / 30 }

    function ie(e) { return oe(e) / 864e5 }

    function oe(e) { return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds }

    function se(e, t) { var n = e.milliseconds; if (n) { if (n % 1e3 != 0) return { unit: "millisecond", value: n }; if (n % 6e4 != 0) return { unit: "second", value: n / 1e3 }; if (n % 36e5 != 0) return { unit: "minute", value: n / 6e4 }; if (n) return { unit: "hour", value: n / 36e5 } } return e.days ? t || e.days % 7 != 0 ? { unit: "day", value: e.days } : { unit: "week", value: e.days / 7 } : e.months ? { unit: "month", value: e.months } : e.years ? { unit: "year", value: e.years } : { unit: "millisecond", value: 0 } }

    function ae(e) { e.forEach(function(e) { e.style.height = "" }) }

    function le(e) {
        var t, n, r = [],
            i = [];
        for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e), t = 0; t < i.length; t++) "string" == typeof(n = i[t]) ? r.push("-" === n.charAt(0) ? { field: n.substring(1), order: -1 } : { field: n, order: 1 }) : "function" == typeof n && r.push({ func: n });
        return r
    }

    function ce(e, t, n) {
        var r, i;
        for (r = 0; r < n.length; r++)
            if (i = ue(e, t, n[r])) return i;
        return 0
    }

    function ue(e, t, n) { return n.func ? n.func(e, t) : de(e[n.field], t[n.field]) * (n.order || 1) }

    function de(e, t) { return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0 }

    function pe(e) { return e.charAt(0).toUpperCase() + e.slice(1) }

    function he(e, t) { var n = String(e); return "000".substr(0, t - n.length) + n }

    function fe(e) { return e % 1 == 0 }

    function ge(e, t, n) {
        if ("function" == typeof e && (e = [e]), e) {
            var r = void 0,
                i = void 0;
            for (r = 0; r < e.length; r++) i = e[r].apply(t, n) || i;
            return i
        }
    }

    function ve() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = 0; n < e.length; n++)
            if (void 0 !== e[n]) return e[n]
    }

    function me(e, t) {
        var n, r, i, o, s, a = function() {
            var l = (new Date).valueOf() - o;
            l < t ? n = setTimeout(a, t - l) : (n = null, s = e.apply(i, r), i = r = null)
        };
        return function() { return i = this, r = arguments, o = (new Date).valueOf(), n || (n = setTimeout(a, t)), s }
    }

    function ye(e, t, n, r) {
        void 0 === n && (n = {});
        var i = {};
        for (var o in t) {
            var s = t[o];
            void 0 !== e[o] ? s === Function ? i[o] = "function" == typeof e[o] ? e[o] : null : i[o] = s ? s(e[o]) : e[o] : void 0 !== n[o] ? i[o] = n[o] : s === String ? i[o] = "" : s && s !== Number && s !== Boolean && s !== Function ? i[o] = s(null) : i[o] = null
        }
        if (r)
            for (var o in e) void 0 === t[o] && (r[o] = e[o]);
        return i
    }

    function Ee(e) { return Array.isArray(e) ? Array.prototype.slice.call(e) : e }

    function Se(e) {
        var t = Math.floor(H(e.start, e.end)) || 1,
            n = L(e.start);
        return { start: n, end: M(n, t) }
    }

    function be(e, t) {
        void 0 === t && (t = K(0));
        var n = null,
            r = null;
        if (e.end) {
            r = L(e.end);
            var i = e.end.valueOf() - r.valueOf();
            i && i >= oe(t) && (r = M(r, 1))
        }
        return e.start && (n = L(e.start), r && r <= n && (r = M(n, 1))), { start: n, end: r }
    }

    function De(e, t, n, r) { return "year" === r ? K(n.diffWholeYears(e, t), "year") : "month" === r ? K(n.diffWholeMonths(e, t), "month") : x(e, t) }

    function we(e, t) {
        function n() { this.constructor = e }
        Ur(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function Te(e, t, n, r, i) {
        for (var o = 0; o < r.length; o++) {
            var s = {},
                a = r[o].parse(e, s, n);
            if (a) { var l = s.allDay; return delete s.allDay, null == l && null == (l = t) && null == (l = a.allDayGuess) && (l = !1), Gr(i, s), { allDay: l, duration: a.duration, typeData: a.typeData, typeId: o } }
        }
        return null
    }

    function Ce(e, t, n, r) { var i = r[e.recurringDef.typeId].expand(e.recurringDef.typeData, t, n); return e.allDay && (i = i.map(L)), i }

    function Re(e, t) {
        var n, r, i, o, s, a, l = {};
        if (t)
            for (n = 0; n < t.length; n++) {
                for (r = t[n], i = [], o = e.length - 1; o >= 0; o--)
                    if ("object" == typeof(s = e[o][r]) && s) i.unshift(s);
                    else if (void 0 !== s) { l[r] = s; break }
                i.length && (l[r] = Re(i))
            }
        for (n = e.length - 1; n >= 0; n--) { a = e[n]; for (r in a) r in l || (l[r] = a[r]) }
        return l
    }

    function Ie(e, t) { var n = {}; for (var r in e) t(e[r], r) && (n[r] = e[r]); return n }

    function Me(e, t) { var n = {}; for (var r in e) n[r] = t(e[r], r); return n }

    function Pe(e) { for (var t = {}, n = 0, r = e; n < r.length; n++) t[r[n]] = !0; return t }

    function He(e) { var t = []; for (var n in e) t.push(e[n]); return t }

    function ke(e, t, n, r) {
        for (var i = Ve(), o = 0, s = e; o < s.length; o++) {
            var a = Xt(s[o], t, n, r);
            a && _e(a, i)
        }
        return i
    }

    function _e(e, t) { return void 0 === t && (t = Ve()), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t }

    function Oe(e, t, n) {
        var r = n.dateEnv,
            i = e.defs,
            o = e.instances;
        o = Ie(o, function(e) { return !i[e.defId].recurringDef });
        for (var s in i) {
            var a = i[s];
            if (a.recurringDef) {
                var l = Ce(a, t, n.dateEnv, n.pluginSystem.hooks.recurringTypes),
                    c = a.recurringDef.duration;
                c || (c = a.allDay ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration);
                for (var u = 0, d = l; u < d.length; u++) {
                    var p = d[u],
                        h = Jt(s, { start: p, end: r.add(p, c) });
                    o[h.instanceId] = h
                }
            }
        }
        return { defs: i, instances: o }
    }

    function xe(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                i = Be(e, function(e) { return Ne(r, e) });
            return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i
        }
        return Ve()
    }

    function Ne(e, t) { return Boolean(e.groupId && e.groupId === t.groupId) }

    function ze(e, t, n) {
        var r = n.opt("eventDataTransform"),
            i = t ? t.eventDataTransform : null;
        return i && (e = Le(e, i)), r && (e = Le(e, r)), e
    }

    function Le(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r],
                    s = t(o);
                s ? n.push(s) : null == s && n.push(o)
            }
        } else n = e;
        return n
    }

    function Ve() { return { defs: {}, instances: {} } }

    function Ae(e, t) { return { defs: Gr({}, e.defs, t.defs), instances: Gr({}, e.instances, t.instances) } }

    function Be(e, t) {
        var n = Ie(e.defs, t),
            r = Ie(e.instances, function(e) { return n[e.defId] });
        return { defs: n, instances: r }
    }

    function Ue(e, t) {
        var n = null,
            r = null;
        return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), n || r ? n && r && r < n ? null : { start: n, end: r } : null
    }

    function Ge(e, t) {
        var n, r, i = [],
            o = t.start;
        for (e.sort(Fe), n = 0; n < e.length; n++)(r = e[n]).start > o && i.push({ start: o, end: r.start }), r.end > o && (o = r.end);
        return o < t.end && i.push({ start: o, end: t.end }), i
    }

    function Fe(e, t) { return e.start.valueOf() - t.start.valueOf() }

    function We(e, t) {
        var n = e.start,
            r = e.end,
            i = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (i = { start: n, end: r }), i
    }

    function je(e, t) { return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf()) }

    function Ye(e, t) { return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end) }

    function Ze(e, t) { return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end) }

    function qe(e, t) { return (null === e.start || t >= e.start) && (null === e.end || t < e.end) }

    function Xe(e, t) { return null != t.start && e < t.start ? t.start : null != t.end && e >= t.end ? new Date(t.end.valueOf() - 1) : e }

    function Ke(e, t) {
        var n, r = e.length;
        if (r !== t.length) return !1;
        for (n = 0; n < r; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }

    function Je(e) { var t, n; return function() { return t && Ke(t, arguments) || (t = arguments, n = e.apply(this, arguments)), n } }

    function Qe(e, t) { var n = null; return function() { var r = e.apply(this, arguments); return (null === n || n !== r && !t(n, r)) && (n = r), n } }

    function $e(e, t, n) { var r = Object.keys(e).length; return 1 === r && "short" === e.timeZoneName ? function(e) { return ut(e.timeZoneOffset) } : 0 === r && t.week ? function(e) { return it(n.computeWeekNumber(e.marker), n.weekLabel, n.locale, t.week) } : et(e, t, n) }

    function et(e, t, n) {
        e = Gr({}, e), t = Gr({}, t), tt(e, t), e.timeZone = "UTC";
        var r, i = new Intl.DateTimeFormat(n.locale.codes, e);
        if (t.omitZeroMinute) {
            var o = Gr({}, e);
            delete o.minute, r = new Intl.DateTimeFormat(n.locale.codes, o)
        }
        return function(o) { var s, a = o.marker; return s = r && !a.getUTCMinutes() ? r : i, nt(s.format(a), o, e, t, n) }
    }

    function tt(e, t) { e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")), "long" === e.timeZoneName && (e.timeZoneName = "short"), t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute }

    function nt(e, t, n, r, i) { return e = e.replace(qr, ""), "short" === n.timeZoneName && (e = rt(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : ut(t.timeZoneOffset))), r.omitCommas && (e = e.replace(Yr, "").trim()), r.omitZeroMinute && (e = e.replace(":00", "")), !1 === r.meridiem ? e = e.replace(jr, "").trim() : "narrow" === r.meridiem ? e = e.replace(jr, function(e, t) { return t.toLocaleLowerCase() }) : "short" === r.meridiem ? e = e.replace(jr, function(e, t) { return t.toLocaleLowerCase() + "m" }) : "lowercase" === r.meridiem && (e = e.replace(jr, function(e) { return e.toLocaleLowerCase() })), e = e.replace(Zr, " "), e = e.trim() }

    function rt(e, t) { var n = !1; return e = e.replace(Xr, function() { return n = !0, t }), n || (e += " " + t), e }

    function it(e, t, n, r) { var i = []; return "narrow" === r ? i.push(t) : "short" === r && i.push(t, " "), i.push(n.simpleNumberFormat.format(e)), n.options.isRtl && i.reverse(), i.join("") }

    function ot(e, t, n) { return n.getMarkerYear(e) !== n.getMarkerYear(t) ? 5 : n.getMarkerMonth(e) !== n.getMarkerMonth(t) ? 4 : n.getMarkerDay(e) !== n.getMarkerDay(t) ? 2 : X(e) !== X(t) ? 1 : 0 }

    function st(e, t) { var n = {}; for (var r in e) r in Wr && !(Wr[r] <= t) || (n[r] = e[r]); return n }

    function at(e, t, n, r) {
        for (var i = 0; i < e.length;) {
            var o = e.indexOf(t, i);
            if (-1 === o) break;
            var s = e.substr(0, o);
            i = o + t.length;
            for (var a = e.substr(i), l = 0; l < n.length;) {
                var c = n.indexOf(r, l);
                if (-1 === c) break;
                var u = n.substr(0, c);
                l = c + r.length;
                var d = n.substr(l);
                if (s === u && a === d) return { before: s, after: a }
            }
        }
        return null
    }

    function lt(e, t) { return "object" == typeof e && e ? ("string" == typeof t && (e = Gr({ separator: t }, e)), new Kr(e)) : "string" == typeof e ? new Jr(e, t) : "function" == typeof e ? new Qr(e) : void 0 }

    function ct(e, t, n) { void 0 === n && (n = !1); var r = e.toISOString(); return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", ut(t, !0)))), r }

    function ut(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            i = Math.floor(r / 60),
            o = Math.round(r % 60);
        return t ? n + he(i, 2) + ":" + he(o, 2) : "GMT" + n + i + (o ? ":" + he(o, 2) : "")
    }

    function dt(e, t, n, r) { var i = pt(e, n.calendarSystem); return { date: i, start: i, end: t ? pt(t, n.calendarSystem) : null, timeZone: n.timeZone, localeCodes: n.locale.codes, separator: r } }

    function pt(e, t) { var n = t.markerToArray(e.marker); return { marker: e.marker, timeZoneOffset: e.timeZoneOffset, array: n, year: n[0], month: n[1], day: n[2], hour: n[3], minute: n[4], second: n[5], millisecond: n[6] } }

    function ht(e, t, n, r) {
        var i = {},
            o = {},
            s = {},
            a = [],
            l = [],
            c = mt(e.defs, t);
        for (var u in e.defs) "inverse-background" === (w = e.defs[u]).rendering && (w.groupId ? (i[w.groupId] = [], s[w.groupId] || (s[w.groupId] = w)) : o[u] = []);
        for (var d in e.instances) {
            var p = e.instances[d],
                h = c[(w = e.defs[p.defId]).defId],
                f = p.range,
                g = !w.allDay && r ? be(f, r) : f,
                v = We(g, n);
            v && ("inverse-background" === w.rendering ? w.groupId ? i[w.groupId].push(v) : o[p.defId].push(v) : ("background" === w.rendering ? a : l).push({ def: w, ui: h, instance: p, range: v, isStart: g.start && g.start.valueOf() === v.start.valueOf(), isEnd: g.end && g.end.valueOf() === v.end.valueOf() }))
        }
        for (var m in i)
            for (var y = i[m], E = Ge(y, n), S = 0, b = E; S < b.length; S++) {
                var D = b[S],
                    w = s[m],
                    h = c[w.defId];
                a.push({ def: w, ui: h, instance: null, range: D, isStart: !1, isEnd: !1 })
            }
        for (var u in o)
            for (var y = o[u], E = Ge(y, n), T = 0, C = E; T < C.length; T++) {
                D = C[T];
                a.push({ def: e.defs[u], ui: c[u], instance: null, range: D, isStart: !1, isEnd: !1 })
            }
        return { bg: a, fg: l }
    }

    function ft(e, t, n) {
        e.hasPublicHandlers("eventRender") && (t = t.filter(function(t) { var r = e.publiclyTrigger("eventRender", [{ event: new ei(e.calendar, t.eventRange.def, t.eventRange.instance), isMirror: n, isStart: t.isStart, isEnd: t.isEnd, el: t.el, view: e }]); return !1 !== r && (r && !0 !== r && (t.el = r), !0) }));
        for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            gt(o.el, o)
        }
        return t
    }

    function gt(e, t) { e.fcSeg = t }

    function vt(e) { return e.fcSeg || null }

    function mt(e, t) { return Me(e, function(e) { return yt(e, t) }) }

    function yt(e, t) { var n = []; return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Zt(n) }

    function Et(e, t, n, r) {
        var i = mt(e.defs, t),
            o = Ve();
        for (var s in e.defs) {
            c = e.defs[s];
            o.defs[s] = St(c, i[s], n, r.pluginSystem.hooks.eventDefMutationAppliers, r)
        }
        for (var a in e.instances) {
            var l = e.instances[a],
                c = o.defs[l.defId];
            o.instances[a] = Dt(l, c, i[l.defId], n, r)
        }
        return o
    }

    function St(e, t, n, r, i) {
        var o = n.standardProps || {};
        null == o.hasEnd && t.durationEditable && bt(t.startEditable ? n.startDelta : null, n.endDelta || null) && (o.hasEnd = !0);
        var s = Gr({}, e, o, { ui: Gr({}, e.ui, o.ui) });
        n.extendedProps && (s.extendedProps = Gr({}, s.extendedProps, n.extendedProps));
        for (var a = 0, l = r; a < l.length; a++)(0, l[a])(s, n, i);
        return !s.hasEnd && i.opt("forceEventDuration") && (s.hasEnd = !0), s
    }

    function bt(e, t) { return e && !oe(e) && (e = null), t && !oe(t) && (t = null), !(!e && !t || Boolean(e) === Boolean(t) && ee(e, t)) }

    function Dt(e, t, n, r, i) {
        var o = i.dateEnv,
            s = r.standardProps && !0 === r.standardProps.allDay,
            a = r.standardProps && !1 === r.standardProps.hasEnd,
            l = Gr({}, e);
        return s && (l.range = Se(l.range)), r.startDelta && n.startEditable && (l.range = { start: o.add(l.range.start, r.startDelta), end: l.range.end }), a ? l.range = { start: l.range.start, end: i.getDefaultEventEnd(t.allDay, l.range.start) } : !r.endDelta || !n.durationEditable && bt(n.startEditable ? r.startDelta : null, r.endDelta) || (l.range = { start: l.range.start, end: o.add(l.range.end, r.endDelta) }), t.allDay && (l.range = { start: L(l.range.start), end: L(l.range.end) }), l.range.end < l.range.start && (l.range.end = i.getDefaultEventEnd(t.allDay, l.range.start)), l
    }

    function wt(e, t, n, r, i) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return Tt(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
            case "ADD_EVENTS":
                return Ct(e, t.eventStore, r ? r.activeRange : null, i);
            case "MERGE_EVENTS":
                return Ae(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                return r ? Oe(e, r.activeRange, i) : e;
            case "CHANGE_TIMEZONE":
                return Rt(e, t.oldDateEnv, i.dateEnv);
            case "MUTATE_EVENTS":
                return It(e, t.instanceId, t.mutation, t.fromApi, i);
            case "REMOVE_EVENT_INSTANCES":
                return Pt(e, t.instances);
            case "REMOVE_EVENT_DEF":
                return Be(e, function(e) { return e.defId !== t.defId });
            case "REMOVE_EVENT_SOURCE":
                return Mt(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return Be(e, function(e) { return !e.sourceId });
            case "REMOVE_ALL_EVENTS":
                return Ve();
            case "RESET_EVENTS":
                return { defs: e.defs, instances: e.instances };
            default:
                return e
        }
    }

    function Tt(e, t, n, r, i, o) { if (t && n === t.latestFetchId) { var s = ke(ze(i, t, o), t.sourceId, o); return r && (s = Oe(s, r, o)), Ae(Mt(e, t.sourceId), s) } return e }

    function Ct(e, t, n, r) { return n && (t = Oe(t, n, r)), Ae(e, t) }

    function Rt(e, t, n) {
        var r = e.defs,
            i = Me(e.instances, function(e) { var i = r[e.defId]; return i.allDay || i.recurringDef ? e : Gr({}, e, { range: { start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)), end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo)) }, forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo }) });
        return { defs: r, instances: i }
    }

    function It(e, t, n, r, i) { var o = xe(e, t); return o = Et(o, r ? { "": { startEditable: !0, durationEditable: !0, constraints: [], overlap: null, allows: [], backgroundColor: "", borderColor: "", textColor: "", classNames: [] } } : i.eventUiBases, n, i), Ae(e, o) }

    function Mt(e, t) { return Be(e, function(e) { return e.sourceId !== t }) }

    function Pt(e, t) { return { defs: e.defs, instances: Ie(e.instances, function(e) { return !t[e.instanceId] }) } }

    function Ht(e, t) { return _t({ eventDrag: e }, t) }

    function kt(e, t) { return _t({ dateSelection: e }, t) }

    function _t(e, t) {
        var n = t.view,
            r = Gr({ businessHours: n ? n.props.businessHours : Ve(), dateSelection: "", eventStore: t.state.eventStore, eventUiBases: t.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, e);
        return (t.pluginSystem.hooks.isPropsValid || Ot)(r, t)
    }

    function Ot(e, t, n, r) { return void 0 === n && (n = {}), !(e.eventDrag && !xt(e, t, n, r) || e.dateSelection && !Nt(e, t, n, r)) }

    function xt(e, t, n, r) {
        var i = e.eventDrag,
            o = i.mutatedEvents,
            s = o.defs,
            a = o.instances,
            l = mt(s, i.isEvent ? e.eventUiBases : { "": t.selectionConfig });
        r && (l = Me(l, r));
        var c = Pt(e.eventStore, i.affectedEvents.instances),
            u = c.defs,
            d = c.instances,
            p = mt(u, e.eventUiBases);
        for (var h in a) {
            var f = a[h],
                g = f.range,
                v = l[f.defId],
                m = s[f.defId];
            if (!zt(v.constraints, g, c, e.businessHours, t)) return !1;
            var y = t.opt("eventOverlap");
            "function" != typeof y && (y = null);
            for (var E in d) { var S = d[E]; if (Ye(g, S.range)) { if (!1 === p[S.defId].overlap && i.isEvent) return !1; if (!1 === v.overlap) return !1; if (y && !y(new ei(t, u[S.defId], S), new ei(t, m, f))) return !1 } }
            for (var b = 0, D = v.allows; b < D.length; b++) {
                var w = D[b],
                    T = Gr({}, n, { range: f.range, allDay: m.allDay }),
                    C = e.eventStore.defs[m.defId],
                    R = e.eventStore.instances[h],
                    I = void 0;
                if (I = C ? new ei(t, C, R) : new ei(t, m), !w(t.buildDateSpanApi(T), I)) return !1
            }
        }
        return !0
    }

    function Nt(e, t, n, r) {
        var i = e.eventStore,
            o = i.defs,
            s = i.instances,
            a = e.dateSelection,
            l = a.range,
            c = t.selectionConfig;
        if (r && (c = r(c)), !zt(c.constraints, l, i, e.businessHours, t)) return !1;
        var u = t.opt("selectOverlap");
        "function" != typeof u && (u = null);
        for (var d in s) { var p = s[d]; if (Ye(l, p.range)) { if (!1 === c.overlap) return !1; if (u && !u(new ei(t, o[p.defId], p))) return !1 } }
        for (var h = 0, f = c.allows; h < f.length; h++) {
            var g = f[h],
                v = Gr({}, n, a);
            if (!g(t.buildDateSpanApi(v), null)) return !1
        }
        return !0
    }

    function zt(e, t, n, r, i) {
        for (var o = 0, s = e; o < s.length; o++)
            if (!At(Lt(s[o], t, n, r, i), t)) return !1;
        return !0
    }

    function Lt(e, t, n, r, i) { return "businessHours" === e ? Vt(Oe(r, t, i)) : "string" == typeof e ? Vt(Be(n, function(t) { return t.groupId === e })) : "object" == typeof e && e ? Vt(Oe(e, t, i)) : [] }

    function Vt(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n
    }

    function At(e, t) {
        for (var n = 0, r = e; n < r.length; n++)
            if (Ze(r[n], t)) return !0;
        return !1
    }

    function Bt(e, t) { return Array.isArray(e) ? ke(e, "", t, !0) : "object" == typeof e && e ? ke([e], "", t, !0) : null != e ? String(e) : null }

    function Ut(e) { return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />") }

    function Gt(e) {
        var t = [];
        for (var n in e) {
            var r = e[n];
            null != r && "" !== r && t.push(n + ":" + r)
        }
        return t.join(";")
    }

    function Ft(e) {
        var t = [];
        for (var n in e) {
            var r = e[n];
            null != r && t.push(n + '="' + Ut(r) + '"')
        }
        return t.join(" ")
    }

    function Wt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [] }

    function jt(e, t, n) {
        var r = ye(e, ti, {}, n),
            i = Bt(r.constraint, t);
        return { startEditable: null != r.startEditable ? r.startEditable : r.editable, durationEditable: null != r.durationEditable ? r.durationEditable : r.editable, constraints: null != i ? [i] : [], overlap: r.overlap, allows: null != r.allow ? [r.allow] : [], backgroundColor: r.backgroundColor || r.color, borderColor: r.borderColor || r.color, textColor: r.textColor, classNames: r.classNames.concat(r.className) }
    }

    function Yt(e, t, n, r) {
        var i = {},
            o = {};
        for (var s in ti) {
            var a = e + pe(s);
            i[s] = t[a], o[a] = !0
        }
        if ("event" === e && (i.editable = t.editable), r)
            for (var s in t) o[s] || (r[s] = t[s]);
        return jt(i, n)
    }

    function Zt(e) { return e.reduce(qt, ni) }

    function qt(e, t) { return { startEditable: null != t.startEditable ? t.startEditable : e.startEditable, durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable, constraints: e.constraints.concat(t.constraints), overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap, allows: e.allows.concat(t.allows), backgroundColor: t.backgroundColor || e.backgroundColor, borderColor: t.borderColor || e.borderColor, textColor: t.textColor || e.textColor, classNames: e.classNames.concat(t.classNames) } }

    function Xt(e, t, n, r) {
        var i = tn(t, n),
            o = {},
            s = Te(e, i, n.dateEnv, n.pluginSystem.hooks.recurringTypes, o);
        if (s) return (c = Kt(o, t, s.allDay, Boolean(s.duration), n)).recurringDef = { typeId: s.typeId, typeData: s.typeData, duration: s.duration }, { def: c, instance: null };
        var a = {},
            l = Qt(e, i, n, a, r);
        if (l) { var c = Kt(a, t, l.allDay, l.hasEnd, n); return { def: c, instance: Jt(c.defId, l.range, l.forcedStartTzo, l.forcedEndTzo) } }
        return null
    }

    function Kt(e, t, n, r, i) {
        var o = {},
            s = en(e, i, o);
        s.defId = String(oi++), s.sourceId = t, s.allDay = n, s.hasEnd = r;
        for (var a = 0, l = i.pluginSystem.hooks.eventDefParsers; a < l.length; a++) {
            var c = {};
            (0, l[a])(s, o, c), o = c
        }
        return s.extendedProps = Gr(o, s.extendedProps || {}), Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
    }

    function Jt(e, t, n, r) { return { instanceId: String(oi++), defId: e, range: t, forcedStartTzo: null == n ? null : n, forcedEndTzo: null == r ? null : r } }

    function Qt(e, t, n, r, i) {
        var o, s, a = $t(e, r),
            l = a.allDay,
            c = null,
            u = !1,
            d = null;
        if (o = n.dateEnv.createMarkerMeta(a.start)) c = o.marker;
        else if (!i) return null;
        return null != a.end && (s = n.dateEnv.createMarkerMeta(a.end)), null == l && (l = null != t ? t : (!o || o.isTimeUnspecified) && (!s || s.isTimeUnspecified)), l && c && (c = L(c)), s && (d = s.marker, l && (d = L(d)), c && d <= c && (d = null)), d ? u = !0 : i || (u = n.opt("forceEventDuration") || !1, d = n.dateEnv.add(c, l ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration)), { allDay: l, hasEnd: u, range: { start: c, end: d }, forcedStartTzo: o ? o.forcedTzo : null, forcedEndTzo: s ? s.forcedTzo : null }
    }

    function $t(e, t) { var n = ye(e, ii, {}, t); return n.start = null !== n.start ? n.start : n.date, delete n.date, n }

    function en(e, t, n) {
        var r = {},
            i = ye(e, ri, {}, r),
            o = jt(r, t, n);
        return i.publicId = i.id, delete i.id, i.ui = o, i
    }

    function tn(e, t) { var n = null; return e && (n = t.state.eventSources[e].allDayDefault), null == n && (n = t.opt("allDayDefault")), n }

    function nn(e, t) { return ke(rn(e), "", t) }

    function rn(e) { var t; return t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function(e) { return e.daysOfWeek }) : "object" == typeof e && e ? [e] : [], t = t.map(function(e) { return Gr({}, si, e) }) }

    function on(e, t, n) {
        function r() {
            if (s) {
                for (var e = 0, n = a; e < n.length; e++) n[e].unrender();
                t && t.apply(o, s), s = null
            }
        }

        function i() { s && Ke(s, arguments) || (r(), o = this, s = arguments, e.apply(this, arguments)) }
        void 0 === n && (n = []);
        var o, s, a = [];
        i.dependents = a, i.unrender = r;
        for (var l = 0, c = n; l < c.length; l++) c[l].dependents.push(i);
        return i
    }

    function sn(e, t, n) { return void 0 === n && (n = 1), e === t || (Array.isArray(e) && Array.isArray(t) ? an(e, t, n) : !("object" != typeof e || !e || "object" != typeof t || !t) && ln(e, t, n)) }

    function an(e, t, n) {
        if (void 0 === n && (n = 1), e === t) return !0;
        if (n > 0) {
            if (e.length !== t.length) return !1;
            for (var r = 0; r < e.length; r++)
                if (!sn(e[r], t[r], n - 1)) return !1;
            return !0
        }
        return !1
    }

    function ln(e, t, n) {
        if (void 0 === n && (n = 1), e === t) return !0;
        if (n > 0) {
            for (var r in e)
                if (!(r in t)) return !1;
            for (var r in t) { if (!(r in e)) return !1; if (!sn(e[r], t[r], n - 1)) return !1 }
            return !0
        }
        return !1
    }

    function cn(e, t, n) { void 0 === n && (n = 1); var r = {}; for (var i in t) i in e && sn(e[i], t[i], n - 1) || (r[i] = t[i]); return r }

    function un(e, t) {
        for (var n in e)
            if (!(n in t)) return !0;
        return !1
    }

    function dn(e, t, n) {
        var r = [];
        e && r.push(e), t && r.push(t);
        var i = { "": Zt(r) };
        return n && Gr(i, n), i
    }

    function pn(e, t, n, r) { var i, o, s, a, l = e.dateEnv; return t instanceof Date ? i = t : (i = t.date, o = t.type, s = t.forceOff), a = { date: l.formatIso(i, { omitTime: !0 }), type: o || "day" }, "string" == typeof n && (r = n, n = null), n = n ? " " + Ft(n) : "", r = r || "", !s && e.opt("navLinks") ? "<a" + n + ' data-goto="' + Ut(JSON.stringify(a)) + '">' + r + "</a>" : "<span" + n + ">" + r + "</span>" }

    function hn(e, t, n, r) {
        var i, o, s = n.calendar,
            a = n.view,
            l = n.theme,
            c = n.dateEnv,
            u = [];
        return qe(t.activeRange, e) ? (u.push("fc-" + Vr[e.getUTCDay()]), a.opt("monthMode") && c.getMonth(e) !== c.getMonth(t.currentRange.start) && u.push("fc-other-month"), i = L(s.getNow()), o = M(i, 1), e < i ? u.push("fc-past") : e >= o ? u.push("fc-future") : (u.push("fc-today"), !0 !== r && u.push(l.getClass("today")))) : u.push("fc-disabled-day"), u
    }

    function fn(e, t, n) {
        var r = !1,
            i = function() { r || (r = !0, t.apply(this, arguments)) },
            o = function() { r || (r = !0, n && n.apply(this, arguments)) },
            s = e(i, o);
        s && "function" == typeof s.then && s.then(i, o)
    }

    function gn(e, t, n) {
        (e[t] || (e[t] = [])).push(n)
    }

    function vn(e, t, n) { n ? e[t] && (e[t] = e[t].filter(function(e) { return e !== n })) : delete e[t] }

    function mn(e, t, n) {
        var r = {},
            i = !1;
        for (var o in t) o in e && (e[o] === t[o] || n[o] && n[o](e[o], t[o])) ? r[o] = e[o] : (r[o] = t[o], i = !0);
        for (var o in e)
            if (!(o in t)) { i = !0; break }
        return { anyChanges: i, comboProps: r }
    }

    function yn(e) { return { id: String(Si++), deps: e.deps || [], reducers: e.reducers || [], eventDefParsers: e.eventDefParsers || [], eventDragMutationMassagers: e.eventDragMutationMassagers || [], eventDefMutationAppliers: e.eventDefMutationAppliers || [], dateSelectionTransformers: e.dateSelectionTransformers || [], datePointTransforms: e.datePointTransforms || [], dateSpanTransforms: e.dateSpanTransforms || [], views: e.views || {}, viewPropsTransformers: e.viewPropsTransformers || [], isPropsValid: e.isPropsValid || null, externalDefTransforms: e.externalDefTransforms || [], eventResizeJoinTransforms: e.eventResizeJoinTransforms || [], viewContainerModifiers: e.viewContainerModifiers || [], eventDropTransformers: e.eventDropTransformers || [], componentInteractions: e.componentInteractions || [], calendarInteractions: e.calendarInteractions || [], themeClasses: e.themeClasses || {}, eventSourceDefs: e.eventSourceDefs || [], cmdFormatter: e.cmdFormatter, recurringTypes: e.recurringTypes || [], namedTimeZonedImpl: e.namedTimeZonedImpl, defaultView: e.defaultView || "", elementDraggingImpl: e.elementDraggingImpl, optionChangeHandlers: e.optionChangeHandlers || {} } }

    function En(e, t) { return { reducers: e.reducers.concat(t.reducers), eventDefParsers: e.eventDefParsers.concat(t.eventDefParsers), eventDragMutationMassagers: e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers), eventDefMutationAppliers: e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers), dateSelectionTransformers: e.dateSelectionTransformers.concat(t.dateSelectionTransformers), datePointTransforms: e.datePointTransforms.concat(t.datePointTransforms), dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms), views: Gr({}, e.views, t.views), viewPropsTransformers: e.viewPropsTransformers.concat(t.viewPropsTransformers), isPropsValid: t.isPropsValid || e.isPropsValid, externalDefTransforms: e.externalDefTransforms.concat(t.externalDefTransforms), eventResizeJoinTransforms: e.eventResizeJoinTransforms.concat(t.eventResizeJoinTransforms), viewContainerModifiers: e.viewContainerModifiers.concat(t.viewContainerModifiers), eventDropTransformers: e.eventDropTransformers.concat(t.eventDropTransformers), calendarInteractions: e.calendarInteractions.concat(t.calendarInteractions), componentInteractions: e.componentInteractions.concat(t.componentInteractions), themeClasses: Gr({}, e.themeClasses, t.themeClasses), eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs), cmdFormatter: t.cmdFormatter || e.cmdFormatter, recurringTypes: e.recurringTypes.concat(t.recurringTypes), namedTimeZonedImpl: t.namedTimeZonedImpl || e.namedTimeZonedImpl, defaultView: e.defaultView || t.defaultView, elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl, optionChangeHandlers: Gr({}, e.optionChangeHandlers, t.optionChangeHandlers) } }

    function Sn(e, t, n, r, i) {
        var o = null;
        "GET" === (e = e.toUpperCase()) ? t = bn(t, n): o = Dn(n);
        var s = new XMLHttpRequest;
        s.open(e, t, !0), "GET" !== e && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onload = function() {
            if (s.status >= 200 && s.status < 400) try {
                var e = JSON.parse(s.responseText);
                r(e, s)
            } catch (e) { i("Failure parsing JSON", s) } else i("Request failed", s)
        }, s.onerror = function() { i("Request failed", s) }, s.send(o)
    }

    function bn(e, t) { return e + (-1 === e.indexOf("?") ? "?" : "&") + Dn(t) }

    function Dn(e) { var t = []; for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n])); return t.join("&") }

    function wn(e, t, n) {
        var r, i, o, s, a = n.dateEnv,
            l = {};
        return null == (r = e.startParam) && (r = n.opt("startParam")), null == (i = e.endParam) && (i = n.opt("endParam")), null == (o = e.timeZoneParam) && (o = n.opt("timeZoneParam")), s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {}, Gr(l, s), l[r] = a.formatIso(t.start), l[i] = a.formatIso(t.end), "local" !== a.timeZone && (l[o] = a.timeZone), l
    }

    function Tn(e, t, n, r) {
        for (var i = e ? Pe(e) : null, o = L(n.start), s = n.end, a = []; o < s;) {
            var l = void 0;
            i && !i[o.getUTCDay()] || (l = t ? r.add(o, t) : o, a.push(l)), o = M(o, 1)
        }
        return a
    }

    function Cn(e, t) {
        for (var n = He(t.state.eventSources), r = [], i = 0, o = e; i < o.length; i++) {
            for (var s = o[i], a = !1, l = 0; l < n.length; l++)
                if (sn(n[l]._raw, s, 2)) { n.splice(l, 1), a = !0; break }
            a || r.push(s)
        }
        for (var c = 0, u = n; c < u.length; c++) {
            var d = u[c];
            t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId })
        }
        for (var p = 0, h = r; p < h.length; p++) {
            var f = h[p];
            t.addEventSource(f)
        }
    }

    function Rn(e) { return Re(e, Ci) }

    function In(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            if ("string" == typeof i) {
                var o = "FullCalendar" + pe(i);
                window[o] ? t.push(window[o].default) : console.warn("Plugin file not loaded for " + i)
            } else t.push(i)
        }
        return Ri.concat(t)
    }

    function Mn(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = window.FullCalendarLocalesAll || [], r = window.FullCalendarLocales || {}, i = n.concat(He(r), e), o = { en: Ii }, s = 0, a = i; s < a.length; s++) {
            var l = a[s];
            o[l.code] = l
        }
        return { map: o, defaultCode: t }
    }

    function Pn(e, t) { return "object" != typeof e || Array.isArray(e) ? Hn(e, t) : _n(e.code, [e.code], e) }

    function Hn(e, t) { var n = [].concat(e || []); return _n(e, n, kn(n, t) || Ii) }

    function kn(e, t) {
        for (var n = 0; n < e.length; n++)
            for (var r = e[n].toLocaleLowerCase().split("-"), i = r.length; i > 0; i--) { var o = r.slice(0, i).join("-"); if (t[o]) return t[o] }
        return null
    }

    function _n(e, t, n) {
        var r = Re([Ii, n], ["buttonText"]);
        delete r.code;
        var i = r.week;
        return delete r.week, { codeArg: e, codes: t, week: i, simpleNumberFormat: new Intl.NumberFormat(e), options: r }
    }

    function On(e) { return new Pi[e] }

    function xn(e) { var t = Hi.exec(e); if (t) { var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0)); if (q(n)) { var r = null; return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r } } } return null }

    function Nn(e, t) { return !t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange }

    function zn(e, t) { for (var n = t.pluginSystem.hooks.eventSourceDefs, r = n.length - 1; r >= 0; r--) { var i = n[r].parseMeta(e); if (i) { var o = Ln("object" == typeof e ? e : {}, i, r, t); return o._raw = Ee(e), o } } return null }

    function Ln(e, t, n, r) {
        var i = {},
            o = ye(e, _i, {}, i),
            s = {},
            a = jt(i, r, s);
        return o.isFetching = !1, o.latestFetchId = "", o.fetchRange = null, o.publicId = String(e.id || ""), o.sourceId = String(Oi++), o.sourceDefId = n, o.meta = t, o.ui = a, o.extendedProps = s, o
    }

    function Vn(e, t, n, r) {
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return An(e, t.sources, n ? n.activeRange : null, r);
            case "REMOVE_EVENT_SOURCE":
                return Bn(e, t.sourceId);
            case "PREV":
            case "NEXT":
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                return n ? Un(e, n.activeRange, r) : e;
            case "FETCH_EVENT_SOURCES":
            case "CHANGE_TIMEZONE":
                return Fn(e, t.sourceIds ? Pe(t.sourceIds) : Yn(e, r), n ? n.activeRange : null, r);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return jn(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }

    function An(e, t, n, r) {
        for (var i = {}, o = 0, s = t; o < s.length; o++) {
            var a = s[o];
            i[a.sourceId] = a
        }
        return n && (i = Un(i, n, r)), Gr({}, e, i)
    }

    function Bn(e, t) { return Ie(e, function(e) { return e.sourceId !== t }) }

    function Un(e, t, n) { return Fn(e, Ie(e, function(e) { return Gn(e, t, n) }), t, n) }

    function Gn(e, t, n) { return Nn(e, n) ? !n.opt("lazyFetching") || !e.fetchRange || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId }

    function Fn(e, t, n, r) {
        var i = {};
        for (var o in e) {
            var s = e[o];
            t[o] ? i[o] = Wn(s, n, r) : i[o] = s
        }
        return i
    }

    function Wn(e, t, n) {
        var r = n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],
            i = String(xi++);
        return r.fetch({ eventSource: e, calendar: n, range: t }, function(r) {
            var o, s, a = r.rawEvents,
                l = n.opt("eventSourceSuccess");
            e.success && (s = e.success(a, r.xhr)), l && (o = l(a, r.xhr)), a = s || o || a, n.dispatch({ type: "RECEIVE_EVENTS", sourceId: e.sourceId, fetchId: i, fetchRange: t, rawEvents: a })
        }, function(r) {
            var o = n.opt("eventSourceFailure");
            console.warn(r.message, r), e.failure && e.failure(r), o && o(r), n.dispatch({ type: "RECEIVE_EVENT_ERROR", sourceId: e.sourceId, fetchId: i, fetchRange: t, error: r })
        }), Gr({}, e, { isFetching: !0, latestFetchId: i })
    }

    function jn(e, t, n, r) { var i, o = e[t]; return o && n === o.latestFetchId ? Gr({}, e, (i = {}, i[t] = Gr({}, o, { isFetching: !1, fetchRange: r }), i)) : e }

    function Yn(e, t) { return Ie(e, function(e) { return Nn(e, t) }) }

    function Zn(e, t) { return je(e.activeRange, t.activeRange) && je(e.validRange, t.validRange) && ee(e.minTime, t.minTime) && ee(e.maxTime, t.maxTime) }

    function qn(e, t, n) { for (var r = Xn(e.viewType, t), i = Kn(e.dateProfile, t, e.currentDate, r, n), o = Vn(e.eventSources, t, i, n), s = Gr({}, e, { viewType: r, dateProfile: i, currentDate: Jn(e.currentDate, t, i), eventSources: o, eventStore: wt(e.eventStore, t, o, i, n), dateSelection: Qn(e.dateSelection, t, n), eventSelection: $n(e.eventSelection, t), eventDrag: er(e.eventDrag, t, o, n), eventResize: tr(e.eventResize, t, o, n), eventSourceLoadingLevel: nr(o), loadingLevel: nr(o) }), a = 0, l = n.pluginSystem.hooks.reducers; a < l.length; a++) s = (0, l[a])(s, t, n); return s }

    function Xn(e, t) {
        switch (t.type) {
            case "SET_VIEW_TYPE":
                return t.viewType;
            default:
                return e
        }
    }

    function Kn(e, t, n, r, i) {
        var o;
        switch (t.type) {
            case "PREV":
                o = i.dateProfileGenerators[r].buildPrev(e, n);
                break;
            case "NEXT":
                o = i.dateProfileGenerators[r].buildNext(e, n);
                break;
            case "SET_DATE":
                e.activeRange && qe(e.currentRange, t.dateMarker) || (o = i.dateProfileGenerators[r].build(t.dateMarker, void 0, !0));
                break;
            case "SET_VIEW_TYPE":
                var s = i.dateProfileGenerators[r];
                if (!s) throw new Error(r ? 'The FullCalendar view "' + r + '" does not exist. Make sure your plugins are loaded correctly.' : "No available FullCalendar view plugins.");
                o = s.build(t.dateMarker || n, void 0, !0)
        }
        return !o || !o.isValid || e && Zn(e, o) ? e : o
    }

    function Jn(e, t, n) {
        switch (t.type) {
            case "PREV":
            case "NEXT":
                return qe(n.currentRange, e) ? e : n.currentRange.start;
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                var r = t.dateMarker || e;
                return n.activeRange && !qe(n.activeRange, r) ? n.currentRange.start : r;
            default:
                return e
        }
    }

    function Qn(e, t, n) {
        switch (t.type) {
            case "SELECT_DATES":
                return t.selection;
            case "UNSELECT_DATES":
                return null;
            default:
                return e
        }
    }

    function $n(e, t) {
        switch (t.type) {
            case "SELECT_EVENT":
                return t.eventInstanceId;
            case "UNSELECT_EVENT":
                return "";
            default:
                return e
        }
    }

    function er(e, t, n, r) {
        switch (t.type) {
            case "SET_EVENT_DRAG":
                var i = t.state;
                return { affectedEvents: i.affectedEvents, mutatedEvents: i.mutatedEvents, isEvent: i.isEvent, origSeg: i.origSeg };
            case "UNSET_EVENT_DRAG":
                return null;
            default:
                return e
        }
    }

    function tr(e, t, n, r) {
        switch (t.type) {
            case "SET_EVENT_RESIZE":
                var i = t.state;
                return { affectedEvents: i.affectedEvents, mutatedEvents: i.mutatedEvents, isEvent: i.isEvent, origSeg: i.origSeg };
            case "UNSET_EVENT_RESIZE":
                return null;
            default:
                return e
        }
    }

    function nr(e) { var t = 0; for (var n in e) e[n].isFetching && t++; return t }

    function rr(e, t, n) {
        var r = ir(e, t),
            i = r.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n)
        }
        return r
    }

    function ir(e, t) {
        var n = {},
            r = ye(e, zi, {}, n),
            i = r.start ? t.createMarkerMeta(r.start) : null,
            o = r.end ? t.createMarkerMeta(r.end) : null,
            s = r.allDay;
        return null == s && (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)), n.range = { start: i ? i.marker : null, end: o ? o.marker : null }, n.allDay = s, n
    }

    function or(e, t) {
        for (var n in t)
            if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
        for (var n in e)
            if (!(n in t)) return !1;
        return !0
    }

    function sr(e, t) { return { start: t.toDate(e.range.start), end: t.toDate(e.range.end), startStr: t.formatIso(e.range.start, { omitTime: e.allDay }), endStr: t.formatIso(e.range.end, { omitTime: e.allDay }), allDay: e.allDay } }

    function ar(e, t) { return { date: t.toDate(e.range.start), dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }), allDay: e.allDay } }

    function lr(e, t, n) { var r = Kt({ editable: !1 }, "", e.allDay, !0, n); return { def: r, ui: yt(r, t), instance: Jt(r.defId, e.range), range: e.range, isStart: !0, isEnd: !0 } }

    function cr(e, t) { var n, r = {}; for (n in e) ur(n, r, e, t); for (n in t) ur(n, r, e, t); return r }

    function ur(e, t, n, r) { if (t[e]) return t[e]; var i = dr(e, t, n, r); return i && (t[e] = i), i }

    function dr(e, t, n, r) {
        var i = n[e],
            o = r[e],
            s = function(e) { return i && null !== i[e] ? i[e] : o && null !== o[e] ? o[e] : null },
            a = s("class"),
            l = s("superType");
        !l && a && (l = pr(a, r) || pr(a, n));
        var c = l ? ur(l, t, n, r) : null;
        return !a && c && (a = c.class), a ? { type: e, class: a, defaults: Gr({}, c ? c.defaults : {}, i ? i.options : {}), overrides: Gr({}, c ? c.overrides : {}, o ? o.options : {}) } : null
    }

    function pr(e, t) { var n = Object.getPrototypeOf(e.prototype); for (var r in t) { var i = t[r]; if (i.class && i.class.prototype === n) return r } return "" }

    function hr(e) { return Me(e, fr) }

    function fr(e) {
        "function" == typeof e && (e = { class: e });
        var t = {},
            n = ye(e, Li, {}, t);
        return { superType: n.type, class: n.class, options: t }
    }

    function gr(e, t) {
        var n = hr(e),
            r = hr(t.overrides.views);
        return Me(cr(n, r), function(e) { return vr(e, r, t) })
    }

    function vr(e, t, n) {
        var r = e.overrides.duration || e.defaults.duration || n.dynamicOverrides.duration || n.overrides.duration,
            i = null,
            o = "",
            s = "",
            a = {};
        if (r && (i = K(r))) {
            var l = se(i, !$(r));
            o = l.unit, 1 === l.value && (s = o, a = t[o] ? t[o].options : {})
        }
        var c = function(t) {
            var n = t.buttonText || {},
                r = e.defaults.buttonTextKey;
            return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[s] ? n[s] : void 0
        };
        return { type: e.type, class: e.class, duration: i, durationUnit: o, singleUnit: s, options: Gr({}, wi, e.defaults, n.dirDefaults, n.localeDefaults, n.overrides, a, e.overrides, n.dynamicOverrides), buttonTextOverride: c(n.dynamicOverrides) || c(n.overrides) || e.overrides.buttonText, buttonTextDefault: c(n.localeDefaults) || c(n.dirDefaults) || e.defaults.buttonText || c(wi) || e.type }
    }

    function mr(e, t) { var n; return n = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, this.dateEnv.formatRange(n.start, n.end, lt(t.titleFormat || yr(e), t.titleRangeSeparator), { isEndExclusive: e.isRangeAllDay }) }

    function yr(e) { var t = e.currentRangeUnit; if ("year" === t) return { year: "numeric" }; if ("month" === t) return { year: "numeric", month: "long" }; var n = z(e.currentRange.start, e.currentRange.end); return null !== n && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" } }

    function Er(e) { return e.map(function(e) { return new e }) }

    function Sr(e, t) { return { component: e, el: t.el, useEventCenter: null == t.useEventCenter || t.useEventCenter } }

    function br(e, t, n, r, i, o, s) { return new ki({ calendarSystem: "gregory", timeZone: t, namedTimeZoneImpl: n, locale: e, weekNumberCalculation: i, firstDay: r, weekLabel: o, cmdFormatter: s }) }

    function Dr(e) { return new(this.pluginSystem.hooks.themeClasses[e.themeSystem] || Wi)(e) }

    function wr(e) { var t = this.tryRerender.bind(this); return null != e && (t = me(t, e)), t }

    function Tr(e) { return Me(e, function(e) { return e.ui }) }

    function Cr(e, t, n) {
        var r = { "": t };
        for (var i in e) {
            var o = e[i];
            o.sourceId && n[o.sourceId] && (r[i] = n[o.sourceId])
        }
        return r
    }

    function Rr(e) {
        var t = e.eventRange.def,
            n = e.eventRange.instance.range,
            r = n.start ? n.start.valueOf() : 0,
            i = n.end ? n.end.valueOf() : 0;
        return Gr({}, t.extendedProps, t, { id: t.publicId, start: r, end: i, duration: i - r, allDay: Number(t.allDay), _seg: e })
    }

    function Ir(e) { var t = Pn(e.locale || "en", Mn([]).map); return e = Gr({ timeZone: wi.timeZone, calendarSystem: "gregory" }, e, { locale: t }), new ki(e) }

    function Mr(e, t) { return !e || t > 10 ? { weekday: "short" } : t > 1 ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 } : { weekday: "long" } }

    function Pr(e, t, n, r, i, o, s, a) {
        var l, c = o.view,
            u = o.dateEnv,
            d = o.theme,
            p = o.options,
            h = qe(t.activeRange, e),
            f = ["fc-day-header", d.getClass("widgetHeader")];
        return l = "function" == typeof p.columnHeaderHtml ? p.columnHeaderHtml(u.toDate(e)) : Ut("function" == typeof p.columnHeaderText ? p.columnHeaderText(u.toDate(e)) : u.format(e, i)), n ? f = f.concat(hn(e, t, o, !0)) : f.push("fc-" + Vr[e.getUTCDay()]), '<th class="' + f.join(" ") + '"' + (h && n ? ' data-date="' + u.formatIso(e, { omitTime: !0 }) + '"' : "") + (s > 1 ? ' colspan="' + s + '"' : "") + (a ? " " + a : "") + ">" + (h ? pn(c, { date: e, forceOff: !n || 1 === r }, l) : l) + "</th>"
    }

    function Hr(e, t) { var n = e.activeRange; return t ? n : { start: P(n.start, e.minTime.milliseconds), end: P(n.end, e.maxTime.milliseconds - 864e5) } }
    var kr = { className: !0, colSpan: !0, rowSpan: !0 },
        _r = { "<tr": "tbody", "<td": "tr" },
        Or = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector,
        xr = Element.prototype.closest || function(e) {
            var t = this;
            if (!document.documentElement.contains(t)) return null;
            do {
                if (d(t, e)) return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        },
        Nr = /(top|left|right|bottom|width|height)$/i,
        zr = null,
        Lr = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"],
        Vr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        Ar = ["years", "months", "days", "milliseconds"],
        Br = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/,
        Ur = function(e, t) {
            return (Ur = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
        },
        Gr = function() { return (Gr = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++) { t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }).apply(this, arguments) },
        Fr = { week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0 },
        Wr = { timeZoneName: 7, era: 6, year: 5, month: 4, day: 2, weekday: 2, hour: 1, minute: 1, second: 1 },
        jr = /\s*([ap])\.?m\.?/i,
        Yr = /,/g,
        Zr = /\s+/g,
        qr = /\u200e/g,
        Xr = /UTC|GMT/,
        Kr = function() {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var i in e) i in Fr ? (n[i] = e[i], r = Math.max(Fr[i], r)) : (t[i] = e[i], i in Wr && (r = Math.max(Wr[i], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = Je($e)
            }
            return e.prototype.format = function(e, t) { return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e) }, e.prototype.formatRange = function(e, t, n) {
                var r = this,
                    i = r.standardDateProps,
                    o = r.extendedSettings,
                    s = ot(e.marker, t.marker, n.calendarSystem);
                if (!s) return this.format(e, n);
                var a = s;
                !(a > 1) || "numeric" !== i.year && "2-digit" !== i.year || "numeric" !== i.month && "2-digit" !== i.month || "numeric" !== i.day && "2-digit" !== i.day || (a = 1);
                var l = this.format(e, n),
                    c = this.format(t, n);
                if (l === c) return l;
                var u = $e(st(i, a), o, n),
                    d = u(e),
                    p = u(t),
                    h = at(l, d, c, p),
                    f = o.separator || "";
                return h ? h.before + d + f + p + h.after : l + f + c
            }, e.prototype.getLargestUnit = function() {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    default:
                        return "day"
                }
            }, e
        }(),
        Jr = function() {
            function e(e, t) { this.cmdStr = e, this.separator = t }
            return e.prototype.format = function(e, t) { return t.cmdFormatter(this.cmdStr, dt(e, null, t, this.separator)) }, e.prototype.formatRange = function(e, t, n) { return n.cmdFormatter(this.cmdStr, dt(e, t, n, this.separator)) }, e
        }(),
        Qr = function() {
            function e(e) { this.func = e }
            return e.prototype.format = function(e, t) { return this.func(dt(e, null, t)) }, e.prototype.formatRange = function(e, t, n) { return this.func(dt(e, t, n)) }, e
        }(),
        $r = function() {
            function e(e, t) { this.calendar = e, this.internalEventSource = t }
            return e.prototype.remove = function() { this.calendar.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId }) }, e.prototype.refetch = function() { this.calendar.dispatch({ type: "FETCH_EVENT_SOURCES", sourceIds: [this.internalEventSource.sourceId] }) }, Object.defineProperty(e.prototype, "id", { get: function() { return this.internalEventSource.publicId }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "url", { get: function() { return this.internalEventSource.meta.url }, enumerable: !0, configurable: !0 }), e
        }(),
        ei = function() {
            function e(e, t, n) { this._calendar = e, this._def = t, this._instance = n || null }
            return e.prototype.setProp = function(e, t) {
                var n, r;
                if (e in ii);
                else if (e in ri) "function" == typeof ri[e] && (t = ri[e](t)), this.mutate({ standardProps: (n = {}, n[e] = t, n) });
                else if (e in ti) { var i = void 0; "function" == typeof ti[e] && (t = ti[e](t)), "color" === e ? i = { backgroundColor: t, borderColor: t } : "editable" === e ? i = { startEditable: t, durationEditable: t } : (r = {}, r[e] = t, i = r), this.mutate({ standardProps: { ui: i } }) }
            }, e.prototype.setExtendedProp = function(e, t) {
                var n;
                this.mutate({ extendedProps: (n = {}, n[e] = t, n) })
            }, e.prototype.setStart = function(e, t) {
                void 0 === t && (t = {});
                var n = this._calendar.dateEnv,
                    r = n.createMarker(e);
                if (r && this._instance) {
                    var i = this._instance.range,
                        o = De(i.start, r, n, t.granularity),
                        s = null;
                    t.maintainDuration && (s = te(De(i.start, i.end, n, t.granularity), De(r, i.end, n, t.granularity))), this.mutate({ startDelta: o, endDelta: s })
                }
            }, e.prototype.setEnd = function(e, t) {
                void 0 === t && (t = {});
                var n, r = this._calendar.dateEnv;
                if ((null == e || (n = r.createMarker(e))) && this._instance)
                    if (n) {
                        var i = De(this._instance.range.end, n, r, t.granularity);
                        this.mutate({ endDelta: i })
                    } else this.mutate({ standardProps: { hasEnd: !1 } })
            }, e.prototype.setDates = function(e, t, n) {
                void 0 === n && (n = {});
                var r, i = this._calendar.dateEnv,
                    o = { allDay: n.allDay },
                    s = i.createMarker(e);
                if (s && (null == t || (r = i.createMarker(t))) && this._instance) {
                    var a = this._instance.range;
                    !0 === n.allDay && (a = Se(a));
                    var l = De(a.start, s, i, n.granularity);
                    if (r) {
                        var c = De(a.end, r, i, n.granularity);
                        this.mutate({ startDelta: l, endDelta: c, standardProps: o })
                    } else o.hasEnd = !1, this.mutate({ startDelta: l, standardProps: o })
                }
            }, e.prototype.moveStart = function(e) {
                var t = K(e);
                t && this.mutate({ startDelta: t })
            }, e.prototype.moveEnd = function(e) {
                var t = K(e);
                t && this.mutate({ endDelta: t })
            }, e.prototype.moveDates = function(e) {
                var t = K(e);
                t && this.mutate({ startDelta: t, endDelta: t })
            }, e.prototype.setAllDay = function(e, t) {
                void 0 === t && (t = {});
                var n = { allDay: e },
                    r = t.maintainDuration;
                null == r && (r = this._calendar.opt("allDayMaintainDuration")), this._def.allDay !== e && (n.hasEnd = r), this.mutate({ standardProps: n })
            }, e.prototype.formatRange = function(e) {
                var t = this._calendar.dateEnv,
                    n = this._instance,
                    r = lt(e, this._calendar.opt("defaultRangeSeparator"));
                return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, { forcedStartTzo: n.forcedStartTzo, forcedEndTzo: n.forcedEndTzo }) : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo })
            }, e.prototype.mutate = function(e) {
                var t = this._def,
                    n = this._instance;
                if (n) {
                    this._calendar.dispatch({ type: "MUTATE_EVENTS", instanceId: n.instanceId, mutation: e, fromApi: !0 });
                    var r = this._calendar.state.eventStore;
                    this._def = r.defs[t.defId], this._instance = r.instances[n.instanceId]
                }
            }, e.prototype.remove = function() { this._calendar.dispatch({ type: "REMOVE_EVENT_DEF", defId: this._def.defId }) }, Object.defineProperty(e.prototype, "source", { get: function() { var e = this._def.sourceId; return e ? new $r(this._calendar, this._calendar.state.eventSources[e]) : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "start", { get: function() { return this._instance ? this._calendar.dateEnv.toDate(this._instance.range.start) : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "end", { get: function() { return this._instance && this._def.hasEnd ? this._calendar.dateEnv.toDate(this._instance.range.end) : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "id", { get: function() { return this._def.publicId }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "groupId", { get: function() { return this._def.groupId }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allDay", { get: function() { return this._def.allDay }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "title", { get: function() { return this._def.title }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "url", { get: function() { return this._def.url }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "rendering", { get: function() { return this._def.rendering }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "startEditable", { get: function() { return this._def.ui.startEditable }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "durationEditable", { get: function() { return this._def.ui.durationEditable }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "constraint", { get: function() { return this._def.ui.constraints[0] || null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "overlap", { get: function() { return this._def.ui.overlap }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allow", { get: function() { return this._def.ui.allows[0] || null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "backgroundColor", { get: function() { return this._def.ui.backgroundColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "borderColor", { get: function() { return this._def.ui.borderColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "textColor", { get: function() { return this._def.ui.textColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "classNames", { get: function() { return this._def.ui.classNames }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "extendedProps", { get: function() { return this._def.extendedProps }, enumerable: !0, configurable: !0 }), e
        }(),
        ti = { editable: Boolean, startEditable: Boolean, durationEditable: Boolean, constraint: null, overlap: null, allow: null, className: Wt, classNames: Wt, color: String, backgroundColor: String, borderColor: String, textColor: String },
        ni = { startEditable: null, durationEditable: null, constraints: [], overlap: null, allows: [], backgroundColor: "", borderColor: "", textColor: "", classNames: [] },
        ri = { id: String, groupId: String, title: String, url: String, rendering: String, extendedProps: null },
        ii = { start: null, date: null, end: null, allDay: null },
        oi = 0,
        si = { startTime: "09:00", endTime: "17:00", daysOfWeek: [1, 2, 3, 4, 5], rendering: "inverse-background", classNames: "fc-nonbusiness", groupId: "_businessHours" },
        ai = Ve(),
        li = function() {
            function e() { this.getKeysForEventDefs = Je(this._getKeysForEventDefs), this.splitDateSelection = Je(this._splitDateSpan), this.splitEventStore = Je(this._splitEventStore), this.splitIndividualUi = Je(this._splitIndividualUi), this.splitEventDrag = Je(this._splitInteraction), this.splitEventResize = Je(this._splitInteraction), this.eventUiBuilders = {} }
            return e.prototype.splitProps = function(e) {
                var t = this,
                    n = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    i = this.splitDateSelection(e.dateSelection),
                    o = this.splitIndividualUi(e.eventUiBases, r),
                    s = this.splitEventStore(e.eventStore, r),
                    a = this.splitEventDrag(e.eventDrag),
                    l = this.splitEventResize(e.eventResize),
                    c = {};
                this.eventUiBuilders = Me(n, function(e, n) { return t.eventUiBuilders[n] || Je(dn) });
                for (var u in n) {
                    var d = n[u],
                        p = s[u] || ai,
                        h = this.eventUiBuilders[u];
                    c[u] = { businessHours: d.businessHours || e.businessHours, dateSelection: i[u] || null, eventStore: p, eventUiBases: h(e.eventUiBases[""], d.ui, o[u]), eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "", eventDrag: a[u] || null, eventResize: l[u] || null }
                }
                return c
            }, e.prototype._splitDateSpan = function(e) {
                var t = {};
                if (e)
                    for (var n = this.getKeysForDateSpan(e), r = 0, i = n; r < i.length; r++) t[i[r]] = e;
                return t
            }, e.prototype._getKeysForEventDefs = function(e) { var t = this; return Me(e.defs, function(e) { return t.getKeysForEventDef(e) }) }, e.prototype._splitEventStore = function(e, t) {
                var n = e.defs,
                    r = e.instances,
                    i = {};
                for (var o in n)
                    for (var s = 0, a = t[o]; s < a.length; s++) i[p = a[s]] || (i[p] = Ve()), i[p].defs[o] = n[o];
                for (var l in r)
                    for (var c = r[l], u = 0, d = t[c.defId]; u < d.length; u++) {
                        var p = d[u];
                        i[p] && (i[p].instances[l] = c)
                    }
                return i
            }, e.prototype._splitIndividualUi = function(e, t) {
                var n = {};
                for (var r in e)
                    if (r)
                        for (var i = 0, o = t[r]; i < o.length; i++) {
                            var s = o[i];
                            n[s] || (n[s] = {}), n[s][r] = e[r]
                        }
                return n
            }, e.prototype._splitInteraction = function(e) {
                var t = {};
                if (e) {
                    var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                        r = this._getKeysForEventDefs(e.mutatedEvents),
                        i = this._splitEventStore(e.mutatedEvents, r),
                        o = function(r) { t[r] || (t[r] = { affectedEvents: n[r] || ai, mutatedEvents: i[r] || ai, isEvent: e.isEvent, origSeg: e.origSeg }) };
                    for (var s in n) o(s);
                    for (var s in i) o(s)
                }
                return t
            }, e
        }(),
        ci = function() {
            function e() {}
            return e.mixInto = function(e) { this.mixIntoObj(e.prototype) }, e.mixIntoObj = function(e) {
                var t = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) { e[n] || (e[n] = t.prototype[n]) })
            }, e.mixOver = function(e) {
                var t = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) { e.prototype[n] = t.prototype[n] })
            }, e
        }(),
        ui = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return we(t, e), t.prototype.on = function(e, t) { return gn(this._handlers || (this._handlers = {}), e, t), this }, t.prototype.one = function(e, t) { return gn(this._oneHandlers || (this._oneHandlers = {}), e, t), this }, t.prototype.off = function(e, t) { return this._handlers && vn(this._handlers, e, t), this._oneHandlers && vn(this._oneHandlers, e, t), this }, t.prototype.trigger = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; return this.triggerWith(e, this, t), this }, t.prototype.triggerWith = function(e, t, n) { return this._handlers && ge(this._handlers[e], t, n), this._oneHandlers && (ge(this._oneHandlers[e], t, n), delete this._oneHandlers[e]), this }, t.prototype.hasHandlers = function(e) { return this._handlers && this._handlers[e] && this._handlers[e].length || this._oneHandlers && this._oneHandlers[e] && this._oneHandlers[e].length }, t
        }(ci),
        di = function() {
            function e(e, t, n, r) { this.originEl = e, this.els = t, this.isHorizontal = n, this.isVertical = r }
            return e.prototype.build = function() {
                var e = this.originEl,
                    t = this.originClientRect = e.getBoundingClientRect();
                this.isHorizontal && this.buildElHorizontals(t.left), this.isVertical && this.buildElVerticals(t.top)
            }, e.prototype.buildElHorizontals = function(e) {
                for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
                    var o = i[r].getBoundingClientRect();
                    t.push(o.left - e), n.push(o.right - e)
                }
                this.lefts = t, this.rights = n
            }, e.prototype.buildElVerticals = function(e) {
                for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
                    var o = i[r].getBoundingClientRect();
                    t.push(o.top - e), n.push(o.bottom - e)
                }
                this.tops = t, this.bottoms = n
            }, e.prototype.leftToIndex = function(e) {
                var t, n = this.lefts,
                    r = this.rights,
                    i = n.length;
                for (t = 0; t < i; t++)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.topToIndex = function(e) {
                var t, n = this.tops,
                    r = this.bottoms,
                    i = n.length;
                for (t = 0; t < i; t++)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.getWidth = function(e) { return this.rights[e] - this.lefts[e] }, e.prototype.getHeight = function(e) { return this.bottoms[e] - this.tops[e] }, e
        }(),
        pi = function() {
            function e() {}
            return e.prototype.getMaxScrollTop = function() { return this.getScrollHeight() - this.getClientHeight() }, e.prototype.getMaxScrollLeft = function() { return this.getScrollWidth() - this.getClientWidth() }, e.prototype.canScrollVertically = function() { return this.getMaxScrollTop() > 0 }, e.prototype.canScrollHorizontally = function() { return this.getMaxScrollLeft() > 0 }, e.prototype.canScrollUp = function() { return this.getScrollTop() > 0 }, e.prototype.canScrollDown = function() { return this.getScrollTop() < this.getMaxScrollTop() }, e.prototype.canScrollLeft = function() { return this.getScrollLeft() > 0 }, e.prototype.canScrollRight = function() { return this.getScrollLeft() < this.getMaxScrollLeft() }, e
        }(),
        hi = function(e) {
            function t(t) { var n = e.call(this) || this; return n.el = t, n }
            return we(t, e), t.prototype.getScrollTop = function() { return this.el.scrollTop }, t.prototype.getScrollLeft = function() { return this.el.scrollLeft }, t.prototype.setScrollTop = function(e) { this.el.scrollTop = e }, t.prototype.setScrollLeft = function(e) { this.el.scrollLeft = e }, t.prototype.getScrollWidth = function() { return this.el.scrollWidth }, t.prototype.getScrollHeight = function() { return this.el.scrollHeight }, t.prototype.getClientHeight = function() { return this.el.clientHeight }, t.prototype.getClientWidth = function() { return this.el.clientWidth }, t
        }(pi),
        fi = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return we(t, e), t.prototype.getScrollTop = function() { return window.pageYOffset }, t.prototype.getScrollLeft = function() { return window.pageXOffset }, t.prototype.setScrollTop = function(e) { window.scroll(window.pageXOffset, e) }, t.prototype.setScrollLeft = function(e) { window.scroll(e, window.pageYOffset) }, t.prototype.getScrollWidth = function() { return document.documentElement.scrollWidth }, t.prototype.getScrollHeight = function() { return document.documentElement.scrollHeight }, t.prototype.getClientHeight = function() { return document.documentElement.clientHeight }, t.prototype.getClientWidth = function() { return document.documentElement.clientWidth }, t
        }(pi),
        gi = function(e) {
            function n(n, r) { var i = e.call(this, t("div", { className: "fc-scroller" })) || this; return i.overflowX = n, i.overflowY = r, i.applyOverflow(), i }
            return we(n, e), n.prototype.clear = function() { this.setHeight("auto"), this.applyOverflow() }, n.prototype.destroy = function() { c(this.el) }, n.prototype.applyOverflow = function() { h(this.el, { overflowX: this.overflowX, overflowY: this.overflowY }) }, n.prototype.lockOverflow = function(e) {
                var t = this.overflowX,
                    n = this.overflowY;
                e = e || this.getScrollbarWidths(), "auto" === t && (t = e.bottom || this.canScrollHorizontally() ? "scroll" : "hidden"), "auto" === n && (n = e.left || e.right || this.canScrollVertically() ? "scroll" : "hidden"), h(this.el, { overflowX: t, overflowY: n })
            }, n.prototype.setHeight = function(e) { f(this.el, "height", e) }, n.prototype.getScrollbarWidths = function() { var e = E(this.el); return { left: e.scrollbarLeft, right: e.scrollbarRight, bottom: e.scrollbarBottom } }, n
        }(hi),
        vi = function() {
            function e(e) { this.calendarOptions = e, this.processIconOverride() }
            return e.prototype.processIconOverride = function() { this.iconOverrideOption && this.setIconOverride(this.calendarOptions[this.iconOverrideOption]) }, e.prototype.setIconOverride = function(e) {
                var t, n;
                if ("object" == typeof e && e) {
                    t = Gr({}, this.iconClasses);
                    for (n in e) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t
                } else !1 === e && (this.iconClasses = {})
            }, e.prototype.applyIconOverridePrefix = function(e) { var t = this.iconOverridePrefix; return t && 0 !== e.indexOf(t) && (e = t + e), e }, e.prototype.getClass = function(e) { return this.classes[e] || "" }, e.prototype.getIconClass = function(e) { var t = this.iconClasses[e]; return t ? this.baseIconClass + " " + t : "" }, e.prototype.getCustomButtonIconClass = function(e) { var t; return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : "" }, e
        }();
    vi.prototype.classes = {}, vi.prototype.iconClasses = {}, vi.prototype.baseIconClass = "", vi.prototype.iconOverridePrefix = "";
    var mi = 0,
        yi = function() {
            function e(e, t) { t && (e.view = this), this.uid = String(mi++), this.context = e, this.dateEnv = e.dateEnv, this.theme = e.theme, this.view = e.view, this.calendar = e.calendar, this.isRtl = "rtl" === this.opt("dir") }
            return e.addEqualityFuncs = function(e) { this.prototype.equalityFuncs = Gr({}, this.prototype.equalityFuncs, e) }, e.prototype.opt = function(e) { return this.context.options[e] }, e.prototype.receiveProps = function(e) {
                var t = mn(this.props || {}, e, this.equalityFuncs),
                    n = t.anyChanges,
                    r = t.comboProps;
                this.props = r, n && this.render(r)
            }, e.prototype.render = function(e) {}, e.prototype.destroy = function() {}, e
        }();
    yi.prototype.equalityFuncs = {};
    var Ei = function(e) {
        function t(t, n, r) { var i = e.call(this, t, r) || this; return i.el = n, i }
        return we(t, e), t.prototype.destroy = function() { e.prototype.destroy.call(this), c(this.el) }, t.prototype.buildPositionCaches = function() {}, t.prototype.queryHit = function(e, t, n, r) { return null }, t.prototype.isInteractionValid = function(e) {
            var t = this.calendar,
                n = this.props.dateProfile,
                r = e.mutatedEvents.instances;
            if (n)
                for (var i in r)
                    if (!Ze(n.validRange, r[i].range)) return !1;
            return Ht(e, t)
        }, t.prototype.isDateSelectionValid = function(e) { var t = this.props.dateProfile; return !(t && !Ze(t.validRange, e.range)) && kt(e, this.calendar) }, t.prototype.publiclyTrigger = function(e, t) { return this.calendar.publiclyTrigger(e, t) }, t.prototype.publiclyTriggerAfterSizing = function(e, t) { return this.calendar.publiclyTriggerAfterSizing(e, t) }, t.prototype.hasPublicHandlers = function(e) { return this.calendar.hasPublicHandlers(e) }, t.prototype.triggerRenderedSegs = function(e, t) {
            var n = this.calendar;
            if (this.hasPublicHandlers("eventPositioned"))
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    this.publiclyTriggerAfterSizing("eventPositioned", [{ event: new ei(n, o.eventRange.def, o.eventRange.instance), isMirror: t, isStart: o.isStart, isEnd: o.isEnd, el: o.el, view: this }])
                }
            n.state.loadingLevel || (n.afterSizingTriggers._eventsPositioned = [null])
        }, t.prototype.triggerWillRemoveSegs = function(e, t) {
            for (var n = this.calendar, r = 0, i = e; r < i.length; r++) {
                a = i[r];
                n.trigger("eventElRemove", a.el)
            }
            if (this.hasPublicHandlers("eventDestroy"))
                for (var o = 0, s = e; o < s.length; o++) {
                    var a = s[o];
                    this.publiclyTrigger("eventDestroy", [{ event: new ei(n, a.eventRange.def, a.eventRange.instance), isMirror: t, el: a.el, view: this }])
                }
        }, t.prototype.isValidSegDownEl = function(e) { return !this.props.eventDrag && !this.props.eventResize && !u(e, ".fc-mirror") && (this.isPopover() || !this.isInPopover(e)) }, t.prototype.isValidDateDownEl = function(e) { var t = u(e, this.fgSegSelector); return (!t || t.classList.contains("fc-mirror")) && !u(e, ".fc-more") && !u(e, "a[data-goto]") && !this.isInPopover(e) }, t.prototype.isPopover = function() { return this.el.classList.contains("fc-popover") }, t.prototype.isInPopover = function(e) { return Boolean(u(e, ".fc-popover")) }, t
    }(yi);
    Ei.prototype.fgSegSelector = ".fc-event-container > *", Ei.prototype.bgSegSelector = ".fc-bgevent:not(.fc-nonbusiness)";
    var Si = 0,
        bi = function() {
            function e() { this.hooks = { reducers: [], eventDefParsers: [], eventDragMutationMassagers: [], eventDefMutationAppliers: [], dateSelectionTransformers: [], datePointTransforms: [], dateSpanTransforms: [], views: {}, viewPropsTransformers: [], isPropsValid: null, externalDefTransforms: [], eventResizeJoinTransforms: [], viewContainerModifiers: [], eventDropTransformers: [], componentInteractions: [], calendarInteractions: [], themeClasses: {}, eventSourceDefs: [], cmdFormatter: null, recurringTypes: [], namedTimeZonedImpl: null, defaultView: "", elementDraggingImpl: null, optionChangeHandlers: {} }, this.addedHash = {} }
            return e.prototype.add = function(e) {
                if (!this.addedHash[e.id]) {
                    this.addedHash[e.id] = !0;
                    for (var t = 0, n = e.deps; t < n.length; t++) {
                        var r = n[t];
                        this.add(r)
                    }
                    this.hooks = En(this.hooks, e)
                }
            }, e
        }(),
        Di = {},
        wi = { defaultRangeSeparator: " - ", titleRangeSeparator: " – ", defaultTimedEventDuration: "01:00:00", defaultAllDayEventDuration: { day: 1 }, forceEventDuration: !1, nextDayThreshold: "00:00:00", columnHeader: !0, defaultView: "", aspectRatio: 1.35, header: { left: "title", center: "", right: "today prev,next" }, weekends: !0, weekNumbers: !1, weekNumberCalculation: "local", editable: !1, scrollTime: "06:00:00", minTime: "00:00:00", maxTime: "24:00:00", showNonCurrentDates: !0, lazyFetching: !0, startParam: "start", endParam: "end", timeZoneParam: "timeZone", timeZone: "local", locales: [], locale: "", timeGridEventMinHeight: 0, themeSystem: "standard", dragRevertDuration: 500, dragScroll: !0, allDayMaintainDuration: !1, unselectAuto: !0, dropAccept: "*", eventOrder: "start,-duration,allDay,title", eventLimit: !1, eventLimitClick: "popover", dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" }, handleWindowResize: !0, windowResizeDelay: 100, longPressDelay: 1e3, eventDragMinDistance: 5 },
        Ti = { header: { left: "next,prev today", center: "", right: "title" }, buttonIcons: { prev: "fc-icon-chevron-right", next: "fc-icon-chevron-left", prevYear: "fc-icon-chevrons-right", nextYear: "fc-icon-chevrons-left" } },
        Ci = ["header", "footer", "buttonText", "buttonIcons"],
        Ri = [yn({ eventSourceDefs: [{ ignoreRange: !0, parseMeta: function(e) { return Array.isArray(e) ? e : Array.isArray(e.events) ? e.events : null }, fetch: function(e, t) { t({ rawEvents: e.eventSource.meta }) } }] }), yn({
            eventSourceDefs: [{
                parseMeta: function(e) { return "function" == typeof e ? e : "function" == typeof e.events ? e.events : null },
                fetch: function(e, t, n) {
                    var r = e.calendar.dateEnv;
                    fn(e.eventSource.meta.bind(null, { start: r.toDate(e.range.start), end: r.toDate(e.range.end), startStr: r.formatIso(e.range.start), endStr: r.formatIso(e.range.end), timeZone: r.timeZone }), function(e) { t({ rawEvents: e }) }, n)
                }
            }]
        }), yn({
            eventSourceDefs: [{
                parseMeta: function(e) {
                    if ("string" == typeof e) e = { url: e };
                    else if (!e || "object" != typeof e || !e.url) return null;
                    return { url: e.url, method: (e.method || "GET").toUpperCase(), extraParams: e.extraParams, startParam: e.startParam, endParam: e.endParam, timeZoneParam: e.timeZoneParam }
                },
                fetch: function(e, t, n) {
                    var r = e.eventSource.meta,
                        i = wn(r, e.range, e.calendar);
                    Sn(r.method, r.url, i, function(e, n) { t({ rawEvents: e, xhr: n }) }, function(e, t) { n({ message: e, xhr: t }) })
                }
            }]
        }), yn({
            recurringTypes: [{
                parse: function(e, t, n) {
                    var r = n.createMarker.bind(n),
                        i = ye(e, { daysOfWeek: null, startTime: K, endTime: K, startRecur: r, endRecur: r }, {}, t),
                        o = !1;
                    for (var s in i)
                        if (null != i[s]) { o = !0; break }
                    return o ? { allDayGuess: Boolean(!i.startTime && !i.endTime), duration: i.startTime && i.endTime ? te(i.endTime, i.startTime) : null, typeData: i } : null
                },
                expand: function(e, t, n) { var r = We(t, { start: e.startRecur, end: e.endRecur }); return r ? Tn(e.daysOfWeek, e.startTime, r, n) : [] }
            }]
        }), yn({ optionChangeHandlers: { events: function(e, t) { Cn([e], t) }, eventSources: Cn, plugins: function(e, t) { t.addPluginInputs(e) } } })],
        Ii = { code: "en", week: { dow: 0, doy: 4 }, dir: "ltr", buttonText: { prev: "prev", next: "next", prevYear: "prev year", nextYear: "next year", year: "year", today: "today", month: "month", week: "week", day: "day", list: "list" }, weekLabel: "W", allDayText: "all-day", eventLimitText: "more", noEventsMessage: "No events to display" },
        Mi = function() {
            function e(e) { this.overrides = Gr({}, e), this.dynamicOverrides = {}, this.compute() }
            return e.prototype.add = function(e) { Gr(this.overrides, e), this.compute() }, e.prototype.addDynamic = function(e) { Gr(this.dynamicOverrides, e), this.compute() }, e.prototype.reset = function(e) { this.overrides = e, this.compute() }, e.prototype.compute = function() {
                var e = ve(this.dynamicOverrides.locales, this.overrides.locales, wi.locales),
                    t = ve(this.dynamicOverrides.locale, this.overrides.locale, wi.locale),
                    n = Mn(e),
                    r = Pn(t || n.defaultCode, n.map).options,
                    i = "rtl" === ve(this.dynamicOverrides.dir, this.overrides.dir, r.dir) ? Ti : {};
                this.dirDefaults = i, this.localeDefaults = r, this.computed = Rn([wi, i, r, this.overrides, this.dynamicOverrides])
            }, e
        }(),
        Pi = {};
    ! function(e, t) { Pi.gregory = t }(0, function() {
        function e() {}
        return e.prototype.getMarkerYear = function(e) { return e.getUTCFullYear() }, e.prototype.getMarkerMonth = function(e) { return e.getUTCMonth() }, e.prototype.getMarkerDay = function(e) { return e.getUTCDate() }, e.prototype.arrayToMarker = function(e) { return Z(e) }, e.prototype.markerToArray = function(e) { return Y(e) }, e
    }());
    var Hi = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/,
        ki = function() {
            function e(e) {
                var t = this.timeZone = e.timeZone,
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = On(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation ? (this.weekDow = 1, this.weekDoy = 4) : "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekLabel = null != e.weekLabel ? e.weekLabel : e.locale.options.weekLabel, this.cmdFormatter = e.cmdFormatter
            }
            return e.prototype.createMarker = function(e) { var t = this.createMarkerMeta(e); return null === t ? null : t.marker }, e.prototype.createNowMarker = function() { return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : Z(W(new Date)) }, e.prototype.createMarkerMeta = function(e) { if ("string" == typeof e) return this.parse(e); var t = null; return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = Z(e)), null !== t && q(t) ? { marker: t, isTimeUnspecified: !1, forcedTzo: null } : null }, e.prototype.parse = function(e) {
                var t = xn(e);
                if (null === t) return null;
                var n = t.marker,
                    r = null;
                return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), { marker: n, isTimeUnspecified: t.isTimeUnspecified, forcedTzo: r }
            }, e.prototype.getYear = function(e) { return this.calendarSystem.getMarkerYear(e) }, e.prototype.getMonth = function(e) { return this.calendarSystem.getMarkerMonth(e) }, e.prototype.add = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n) }, e.prototype.subtract = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n) }, e.prototype.addYears = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[0] += t, this.calendarSystem.arrayToMarker(n) }, e.prototype.addMonths = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[1] += t, this.calendarSystem.arrayToMarker(n) }, e.prototype.diffWholeYears = function(e, t) { var n = this.calendarSystem; return X(e) === X(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null }, e.prototype.diffWholeMonths = function(e, t) { var n = this.calendarSystem; return X(e) === X(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null }, e.prototype.greatestWholeUnit = function(e, t) { var n = this.diffWholeYears(e, t); return null !== n ? { unit: "year", value: n } : null !== (n = this.diffWholeMonths(e, t)) ? { unit: "month", value: n } : null !== (n = N(e, t)) ? { unit: "week", value: n } : null !== (n = z(e, t)) ? { unit: "day", value: n } : (n = k(e, t), fe(n) ? { unit: "hour", value: n } : (n = _(e, t), fe(n) ? { unit: "minute", value: n } : (n = O(e, t), fe(n) ? { unit: "second", value: n } : { unit: "millisecond", value: t.valueOf() - e.valueOf() }))) }, e.prototype.countDurationsBetween = function(e, t, n) { var r; return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / ne(n) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / re(n) : n.days && null !== (r = z(e, t)) ? r / ie(n) : (t.valueOf() - e.valueOf()) / oe(n) }, e.prototype.startOf = function(e, t) { return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? L(e) : "hour" === t ? V(e) : "minute" === t ? A(e) : "second" === t ? B(e) : void 0 }, e.prototype.startOfYear = function(e) { return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]) }, e.prototype.startOfMonth = function(e) { return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]) }, e.prototype.startOfWeek = function(e) { return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7]) }, e.prototype.computeWeekNumber = function(e) { return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : U(e, this.weekDow, this.weekDoy) }, e.prototype.format = function(e, t, n) { return void 0 === n && (n = {}), t.format({ marker: e, timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e) }, this) }, e.prototype.formatRange = function(e, t, n, r) { return void 0 === r && (r = {}), r.isEndExclusive && (t = P(t, -1)), n.formatRange({ marker: e, timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e) }, { marker: t, timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t) }, this) }, e.prototype.formatIso = function(e, t) { void 0 === t && (t = {}); var n = null; return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), ct(e, n, t.omitTime) }, e.prototype.timestampToMarker = function(e) { return "local" === this.timeZone ? Z(W(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? Z(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e) }, e.prototype.offsetForMarker = function(e) { return "local" === this.timeZone ? -j(Y(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Y(e)) : null }, e.prototype.toDate = function(e, t) { return "local" === this.timeZone ? j(Y(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(Y(e)) * 60) : new Date(e.valueOf() - (t || 0)) }, e
        }(),
        _i = { id: String, allDayDefault: Boolean, eventDataTransform: Function, success: Function, failure: Function },
        Oi = 0,
        xi = 0,
        Ni = function() {
            function e(e, t) { this.viewSpec = e, this.options = e.options, this.dateEnv = t.dateEnv, this.calendar = t, this.initHiddenDays() }
            return e.prototype.buildPrev = function(e, t) {
                var n = this.dateEnv,
                    r = n.subtract(n.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(r, -1)
            }, e.prototype.buildNext = function(e, t) {
                var n = this.dateEnv,
                    r = n.add(n.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(r, 1)
            }, e.prototype.build = function(e, t, n) {
                void 0 === n && (n = !1);
                var r, i, o, s, a, l, c = null,
                    u = null;
                return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (e = Xe(e, r)), i = this.buildCurrentRangeInfo(e, t), o = /^(year|month|week|day)$/.test(i.unit), s = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, o), s = this.trimHiddenDays(s), a = s, this.options.showNonCurrentDates || (a = We(a, i.range)), c = K(this.options.minTime), u = K(this.options.maxTime), a = this.adjustActiveRange(a, c, u), a = We(a, r), l = Ye(i.range, r), { validRange: r, currentRange: i.range, currentRangeUnit: i.unit, isRangeAllDay: o, activeRange: a, renderRange: s, minTime: c, maxTime: u, isValid: l, dateIncrement: this.buildDateIncrement(i.duration) }
            }, e.prototype.buildValidRange = function() { return this.getRangeOption("validRange", this.calendar.getNow()) || { start: null, end: null } }, e.prototype.buildCurrentRangeInfo = function(e, t) {
                var n, r = this,
                    i = r.viewSpec,
                    o = r.dateEnv,
                    s = null,
                    a = null,
                    l = null;
                return i.duration ? (s = i.duration, a = i.durationUnit, l = this.buildRangeFromDuration(e, t, s, a)) : (n = this.options.dayCount) ? (a = "day", l = this.buildRangeFromDayCount(e, t, n)) : (l = this.buildCustomVisibleRange(e)) ? a = o.greatestWholeUnit(l.start, l.end).unit : (s = this.getFallbackDuration(), a = se(s).unit, l = this.buildRangeFromDuration(e, t, s, a)), { duration: s, unit: a, range: l }
            }, e.prototype.getFallbackDuration = function() { return K({ day: 1 }) }, e.prototype.adjustActiveRange = function(e, t, n) {
                var r = this.dateEnv,
                    i = e.start,
                    o = e.end;
                return this.viewSpec.class.prototype.usesMinMaxTime && (ie(t) < 0 && (i = L(i), i = r.add(i, t)), ie(n) > 1 && (o = L(o), o = M(o, -1), o = r.add(o, n))), { start: i, end: o }
            }, e.prototype.buildRangeFromDuration = function(e, t, n, r) {
                function i() { a = u.startOf(e, d), l = u.add(a, n), c = { start: a, end: l } }
                var o, s, a, l, c, u = this.dateEnv,
                    d = this.options.dateAlignment;
                return d || ((o = this.options.dateIncrement) ? (s = K(o), d = oe(s) < oe(n) ? se(s, !$(o)).unit : r) : d = r), ie(n) <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, t), a = L(a)), i(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, t), i()), c
            }, e.prototype.buildRangeFromDayCount = function(e, t, n) {
                var r, i = this.dateEnv,
                    o = this.options.dateAlignment,
                    s = 0,
                    a = e;
                o && (a = i.startOf(a, o)), a = L(a), r = a = this.skipHiddenDays(a, t);
                do { r = M(r, 1), this.isHiddenDay(r) || s++ } while (s < n);
                return { start: a, end: r }
            }, e.prototype.buildCustomVisibleRange = function(e) {
                var t = this.dateEnv,
                    n = this.getRangeOption("visibleRange", t.toDate(e));
                return !n || null != n.start && null != n.end ? n : null
            }, e.prototype.buildRenderRange = function(e, t, n) { return e }, e.prototype.buildDateIncrement = function(e) { var t, n = this.options.dateIncrement; return n ? K(n) : (t = this.options.dateAlignment) ? K(1, t) : e || K({ days: 1 }) }, e.prototype.getRangeOption = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r = this.options[e]; return "function" == typeof r && (r = r.apply(null, t)), r && (r = Ue(r, this.dateEnv)), r && (r = be(r)), r }, e.prototype.initHiddenDays = function() {
                var e, t = this.options.hiddenDays || [],
                    n = [],
                    r = 0;
                for (!1 === this.options.weekends && t.push(0, 6), e = 0; e < 7; e++)(n[e] = -1 !== t.indexOf(e)) || r++;
                if (!r) throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n
            }, e.prototype.trimHiddenDays = function(e) {
                var t = e.start,
                    n = e.end;
                return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? { start: t, end: n } : null
            }, e.prototype.isHiddenDay = function(e) { return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e] }, e.prototype.skipHiddenDays = function(e, t, n) { for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = M(e, t); return e }, e
        }(),
        zi = { start: null, end: null, allDay: Boolean },
        Li = { type: String, class: null },
        Vi = function(e) {
            function r(n, r) { var i = e.call(this, n) || this; return i._renderLayout = on(i.renderLayout, i.unrenderLayout), i._updateTitle = on(i.updateTitle, null, [i._renderLayout]), i._updateActiveButton = on(i.updateActiveButton, null, [i._renderLayout]), i._updateToday = on(i.updateToday, null, [i._renderLayout]), i._updatePrev = on(i.updatePrev, null, [i._renderLayout]), i._updateNext = on(i.updateNext, null, [i._renderLayout]), i.el = t("div", { className: "fc-toolbar " + r }), i }
            return we(r, e), r.prototype.destroy = function() { e.prototype.destroy.call(this), this._renderLayout.unrender(), c(this.el) }, r.prototype.render = function(e) { this._renderLayout(e.layout), this._updateTitle(e.title), this._updateActiveButton(e.activeButton), this._updateToday(e.isTodayEnabled), this._updatePrev(e.isPrevEnabled), this._updateNext(e.isNextEnabled) }, r.prototype.renderLayout = function(e) {
                var t = this.el;
                this.viewsWithButtons = [], s(t, this.renderSection("left", e.left)), s(t, this.renderSection("center", e.center)), s(t, this.renderSection("right", e.right))
            }, r.prototype.unrenderLayout = function() { this.el.innerHTML = "" }, r.prototype.renderSection = function(e, r) {
                var i = this,
                    o = this,
                    a = o.theme,
                    l = o.calendar,
                    c = l.optionsManager,
                    u = l.viewSpecs,
                    d = t("div", { className: "fc-" + e }),
                    p = c.computed.customButtons || {},
                    h = c.overrides.buttonText || {},
                    f = c.computed.buttonText || {};
                return r && r.split(" ").forEach(function(e, t) {
                    var r, o = [],
                        c = !0;
                    if (e.split(",").forEach(function(e, t) { var r, s, d, g, v, m, y, E, S; "title" === e ? (o.push(n("<h2>&nbsp;</h2>")), c = !1) : ((r = p[e]) ? (d = function(e) { r.click && r.click.call(E, e) }, (g = a.getCustomButtonIconClass(r)) || (g = a.getIconClass(e)) || (v = r.text)) : (s = u[e]) ? (i.viewsWithButtons.push(e), d = function() { l.changeView(e) }, (v = s.buttonTextOverride) || (g = a.getIconClass(e)) || (v = s.buttonTextDefault)) : l[e] && (d = function() { l[e]() }, (v = h[e]) || (g = a.getIconClass(e)) || (v = f[e])), d && (y = ["fc-" + e + "-button", a.getClass("button")], v ? (m = Ut(v), S = "") : g && (m = "<span class='" + g + "'></span>", S = ' aria-label="' + e + '"'), (E = n('<button type="button" class="' + y.join(" ") + '"' + S + ">" + m + "</button>")).addEventListener("click", d), o.push(E))) }), o.length > 1) {
                        r = document.createElement("div");
                        var g = a.getClass("buttonGroup");
                        c && g && r.classList.add(g), s(r, o), d.appendChild(r)
                    } else s(d, o)
                }), d
            }, r.prototype.updateToday = function(e) { this.toggleButtonEnabled("today", e) }, r.prototype.updatePrev = function(e) { this.toggleButtonEnabled("prev", e) }, r.prototype.updateNext = function(e) { this.toggleButtonEnabled("next", e) }, r.prototype.updateTitle = function(e) { p(this.el, "h2").forEach(function(t) { t.innerText = e }) }, r.prototype.updateActiveButton = function(e) {
                var t = this.theme.getClass("buttonActive");
                p(this.el, "button").forEach(function(n) { e && n.classList.contains("fc-" + e + "-button") ? n.classList.add(t) : n.classList.remove(t) })
            }, r.prototype.toggleButtonEnabled = function(e, t) { p(this.el, ".fc-" + e + "-button").forEach(function(e) { e.disabled = !t }) }, r
        }(yi),
        Ai = function(e) {
            function n(n, r) {
                var i = e.call(this, n) || this;
                i._renderToolbars = on(i.renderToolbars), i.buildViewPropTransformers = Je(Er), i.el = r, a(r, i.contentEl = t("div", { className: "fc-view-container" }));
                for (var o = i.calendar, s = 0, l = o.pluginSystem.hooks.viewContainerModifiers; s < l.length; s++)(0, l[s])(i.contentEl, o);
                return i.toggleElClassNames(!0), i.computeTitle = Je(mr), i.parseBusinessHours = Je(function(e) { return nn(e, i.calendar) }), i
            }
            return we(n, e), n.prototype.destroy = function() { this.header && this.header.destroy(), this.footer && this.footer.destroy(), this.view && this.view.destroy(), c(this.contentEl), this.toggleElClassNames(!1), e.prototype.destroy.call(this) }, n.prototype.toggleElClassNames = function(e) {
                var t = this.el.classList,
                    n = "fc-" + this.opt("dir"),
                    r = this.theme.getClass("widget");
                e ? (t.add("fc"), t.add(n), t.add(r)) : (t.remove("fc"), t.remove(n), t.remove(r))
            }, n.prototype.render = function(e) {
                this.freezeHeight();
                var t = this.computeTitle(e.dateProfile, e.viewSpec.options);
                this._renderToolbars(e.viewSpec, e.dateProfile, e.currentDate, e.dateProfileGenerator, t), this.renderView(e, t), this.updateSize(), this.thawHeight()
            }, n.prototype.renderToolbars = function(e, t, n, r, i) {
                var o = this.opt("header"),
                    l = this.opt("footer"),
                    c = this.calendar.getNow(),
                    u = r.build(c),
                    d = r.buildPrev(t, n),
                    p = r.buildNext(t, n),
                    h = { title: i, activeButton: e.type, isTodayEnabled: u.isValid && !qe(t.currentRange, c), isPrevEnabled: d.isValid, isNextEnabled: p.isValid };
                o ? (this.header || (this.header = new Vi(this.context, "fc-header-toolbar"), a(this.el, this.header.el)), this.header.receiveProps(Gr({ layout: o }, h))) : this.header && (this.header.destroy(), this.header = null), l ? (this.footer || (this.footer = new Vi(this.context, "fc-footer-toolbar"), s(this.el, this.footer.el)), this.footer.receiveProps(Gr({ layout: l }, h))) : this.footer && (this.footer.destroy(), this.footer = null)
            }, n.prototype.renderView = function(e, t) {
                var n = this.view,
                    r = e.viewSpec,
                    i = e.dateProfileGenerator;
                n && n.viewSpec === r ? n.addScroll(n.queryScroll()) : (n && n.destroy(), n = this.view = new r.class({ calendar: this.calendar, view: null, dateEnv: this.dateEnv, theme: this.theme, options: r.options }, r, i, this.contentEl)), n.title = t;
                for (var o = { dateProfile: e.dateProfile, businessHours: this.parseBusinessHours(r.options.businessHours), eventStore: e.eventStore, eventUiBases: e.eventUiBases, dateSelection: e.dateSelection, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize }, s = 0, a = this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers); s < a.length; s++) {
                    var l = a[s];
                    Gr(o, l.transform(o, r, e, n))
                }
                n.receiveProps(o)
            }, n.prototype.updateSize = function(e) {
                void 0 === e && (e = !1);
                var t = this.view;
                e && t.addScroll(t.queryScroll()), (e || null == this.isHeightAuto) && this.computeHeightVars(), t.updateSize(e, this.viewHeight, this.isHeightAuto), t.updateNowIndicator(), t.popScroll(e)
            }, n.prototype.computeHeightVars = function() {
                var e = this.calendar,
                    t = e.opt("height"),
                    n = e.opt("contentHeight");
                this.isHeightAuto = "auto" === t || "auto" === n, this.viewHeight = "number" == typeof n ? n : "function" == typeof n ? n() : "number" == typeof t ? t - this.queryToolbarsHeight() : "function" == typeof t ? t() - this.queryToolbarsHeight() : "parent" === t ? this.el.parentNode.offsetHeight - this.queryToolbarsHeight() : Math.round(this.contentEl.offsetWidth / Math.max(e.opt("aspectRatio"), .5))
            }, n.prototype.queryToolbarsHeight = function() { var e = 0; return this.header && (e += w(this.header.el)), this.footer && (e += w(this.footer.el)), e }, n.prototype.freezeHeight = function() { h(this.el, { height: this.el.offsetHeight, overflow: "hidden" }) }, n.prototype.thawHeight = function() { h(this.el, { height: "", overflow: "" }) }, n
        }(yi),
        Bi = function() {
            function e(e) { this.component = e.component }
            return e.prototype.destroy = function() {}, e
        }(),
        Ui = {},
        Gi = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleSegClick = function(e, t) {
                    var r = n.component,
                        i = vt(t);
                    if (i && r.isValidSegDownEl(e.target)) {
                        var o = u(e.target, ".fc-has-url"),
                            s = o ? o.querySelector("a[href]").href : "";
                        r.publiclyTrigger("eventClick", [{ el: t, event: new ei(r.calendar, i.eventRange.def, i.eventRange.instance), jsEvent: e, view: r.view }]), s && !e.defaultPrevented && (window.location.href = s)
                    }
                };
                var r = t.component;
                return n.destroy = R(r.el, "click", r.fgSegSelector + "," + r.bgSegSelector, n.handleSegClick), n
            }
            return we(t, e), t
        }(Bi),
        Fi = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleEventElRemove = function(e) { e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl) }, n.handleSegEnter = function(e, t) { vt(t) && (t.classList.add("fc-allow-mouse-resize"), n.currentSegEl = t, n.triggerEvent("eventMouseEnter", e, t)) }, n.handleSegLeave = function(e, t) { n.currentSegEl && (t.classList.remove("fc-allow-mouse-resize"), n.currentSegEl = null, n.triggerEvent("eventMouseLeave", e, t)) };
                var r = t.component;
                return n.removeHoverListeners = I(r.el, r.fgSegSelector + "," + r.bgSegSelector, n.handleSegEnter, n.handleSegLeave), r.calendar.on("eventElRemove", n.handleEventElRemove), n
            }
            return we(t, e), t.prototype.destroy = function() { this.removeHoverListeners(), this.component.calendar.off("eventElRemove", this.handleEventElRemove) }, t.prototype.triggerEvent = function(e, t, n) {
                var r = this.component,
                    i = vt(n);
                t && !r.isValidSegDownEl(t.target) || r.publiclyTrigger(e, [{ el: n, event: new ei(this.component.calendar, i.eventRange.def, i.eventRange.instance), jsEvent: t, view: r.view }])
            }, t
        }(Bi),
        Wi = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return we(t, e), t
        }(vi);
    Wi.prototype.classes = { widget: "fc-unthemed", widgetHeader: "fc-widget-header", widgetContent: "fc-widget-content", buttonGroup: "fc-button-group", button: "fc-button fc-button-primary", buttonActive: "fc-button-active", popoverHeader: "fc-widget-header", popoverContent: "fc-widget-content", headerRow: "fc-widget-header", dayRow: "fc-widget-content", listView: "fc-widget-content" }, Wi.prototype.baseIconClass = "fc-icon", Wi.prototype.iconClasses = { close: "fc-icon-x", prev: "fc-icon-chevron-left", next: "fc-icon-chevron-right", prevYear: "fc-icon-chevrons-left", nextYear: "fc-icon-chevrons-right" }, Wi.prototype.iconOverrideOption = "buttonIcons", Wi.prototype.iconOverrideCustomButtonOption = "icon", Wi.prototype.iconOverridePrefix = "fc-icon-";
    var ji = function() {
        function e(e, t) {
            var n = this;
            this.parseRawLocales = Je(Mn), this.buildLocale = Je(Pn), this.buildDateEnv = Je(br), this.buildTheme = Je(Dr), this.buildEventUiSingleBase = Je(this._buildEventUiSingleBase), this.buildSelectionConfig = Je(this._buildSelectionConfig), this.buildEventUiBySource = Qe(Tr, ln), this.buildEventUiBases = Je(Cr), this.interactionsStore = {}, this.actionQueue = [], this.isReducing = !1, this.needsRerender = !1, this.needsFullRerender = !1, this.isRendering = !1, this.renderingPauseDepth = 0, this.buildDelayedRerender = Je(wr), this.afterSizingTriggers = {}, this.isViewUpdated = !1, this.isDatesUpdated = !1, this.isEventsUpdated = !1, this.el = e, this.optionsManager = new Mi(t || {}), this.pluginSystem = new bi, this.addPluginInputs(this.optionsManager.computed.plugins || []), this.handleOptions(this.optionsManager.computed), this.publiclyTrigger("_init"), this.hydrate(), this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions.map(function(e) { return new e(n) })
        }
        return e.prototype.addPluginInputs = function(e) {
            for (var t = 0, n = In(e); t < n.length; t++) {
                var r = n[t];
                this.pluginSystem.add(r)
            }
        }, Object.defineProperty(e.prototype, "view", { get: function() { return this.component ? this.component.view : null }, enumerable: !0, configurable: !0 }), e.prototype.render = function() { this.component ? this.requestRerender(!0) : (this.renderableEventStore = Ve(), this.bindHandlers(), this.executeRender()) }, e.prototype.destroy = function() {
            if (this.component) {
                this.unbindHandlers(), this.component.destroy(), this.component = null;
                for (var e = 0, t = this.calendarInteractions; e < t.length; e++) t[e].destroy();
                this.publiclyTrigger("_destroyed")
            }
        }, e.prototype.bindHandlers = function() {
            var e = this;
            this.removeNavLinkListener = R(this.el, "click", "a[data-goto]", function(t, n) {
                var r = n.getAttribute("data-goto");
                r = r ? JSON.parse(r) : {};
                var i = e.dateEnv,
                    o = i.createMarker(r.date),
                    s = r.type,
                    a = e.viewOpt("navLink" + pe(s) + "Click");
                "function" == typeof a ? a(i.toDate(o), t) : ("string" == typeof a && (s = a), e.zoomTo(o, s))
            }), this.opt("handleWindowResize") && window.addEventListener("resize", this.windowResizeProxy = me(this.windowResize.bind(this), this.opt("windowResizeDelay")))
        }, e.prototype.unbindHandlers = function() { this.removeNavLinkListener(), this.windowResizeProxy && (window.removeEventListener("resize", this.windowResizeProxy), this.windowResizeProxy = null) }, e.prototype.hydrate = function() {
            var e = this;
            this.state = this.buildInitialState();
            var t = this.opt("eventSources") || [],
                n = this.opt("events"),
                r = [];
            n && t.unshift(n);
            for (var i = 0, o = t; i < o.length; i++) {
                var s = zn(o[i], this);
                s && r.push(s)
            }
            this.batchRendering(function() { e.dispatch({ type: "INIT" }), e.dispatch({ type: "ADD_EVENT_SOURCES", sources: r }), e.dispatch({ type: "SET_VIEW_TYPE", viewType: e.opt("defaultView") || e.pluginSystem.hooks.defaultView }) })
        }, e.prototype.buildInitialState = function() { return { viewType: null, loadingLevel: 0, eventSourceLoadingLevel: 0, currentDate: this.getInitialDate(), dateProfile: null, eventSources: {}, eventStore: Ve(), dateSelection: null, eventSelection: "", eventDrag: null, eventResize: null } }, e.prototype.dispatch = function(e) {
            if (this.actionQueue.push(e), !this.isReducing) {
                this.isReducing = !0;
                for (var t = this.state; this.actionQueue.length;) this.state = this.reduce(this.state, this.actionQueue.shift(), this);
                var n = this.state;
                this.isReducing = !1, !t.loadingLevel && n.loadingLevel ? this.publiclyTrigger("loading", [!0]) : t.loadingLevel && !n.loadingLevel && this.publiclyTrigger("loading", [!1]);
                var r = this.component && this.component.view;
                (t.eventStore !== n.eventStore || this.needsFullRerender) && t.eventStore && (this.isEventsUpdated = !0), (t.dateProfile !== n.dateProfile || this.needsFullRerender) && (t.dateProfile && r && this.publiclyTrigger("datesDestroy", [{ view: r, el: r.el }]), this.isDatesUpdated = !0), (t.viewType !== n.viewType || this.needsFullRerender) && (t.viewType && r && this.publiclyTrigger("viewSkeletonDestroy", [{ view: r, el: r.el }]), this.isViewUpdated = !0), this.requestRerender()
            }
        }, e.prototype.reduce = function(e, t, n) { return qn(e, t, n) }, e.prototype.requestRerender = function(e) { void 0 === e && (e = !1), this.needsRerender = !0, this.needsFullRerender = this.needsFullRerender || e, this.delayedRerender() }, e.prototype.tryRerender = function() { this.component && this.needsRerender && !this.renderingPauseDepth && !this.isRendering && this.executeRender() }, e.prototype.batchRendering = function(e) { this.renderingPauseDepth++, e(), this.renderingPauseDepth--, this.needsRerender && this.requestRerender() }, e.prototype.executeRender = function() {
            var e = this.needsFullRerender;
            this.needsRerender = !1, this.needsFullRerender = !1, this.isRendering = !0, this.renderComponent(e), this.isRendering = !1, this.needsRerender && this.delayedRerender()
        }, e.prototype.renderComponent = function(e) {
            var t = this,
                n = t.state,
                r = t.component,
                i = n.viewType,
                o = this.viewSpecs[i],
                s = e && r ? r.view.queryScroll() : null;
            if (!o) throw new Error('View type "' + i + '" is not valid');
            var a = this.renderableEventStore = n.eventSourceLoadingLevel && !this.opt("progressiveEventRendering") ? this.renderableEventStore : n.eventStore,
                l = this.buildEventUiSingleBase(o.options),
                c = this.buildEventUiBySource(n.eventSources),
                u = this.eventUiBases = this.buildEventUiBases(a.defs, l, c);
            !e && r || (r && (r.freezeHeight(), r.destroy()), r = this.component = new Ai({ calendar: this, view: null, dateEnv: this.dateEnv, theme: this.theme, options: this.optionsManager.computed }, this.el)), r.receiveProps(Gr({}, n, { viewSpec: o, dateProfile: n.dateProfile, dateProfileGenerator: this.dateProfileGenerators[i], eventStore: a, eventUiBases: u, dateSelection: n.dateSelection, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize })), s && r.view.applyScroll(s, !1), this.isViewUpdated && (this.isViewUpdated = !1, this.publiclyTrigger("viewSkeletonRender", [{ view: r.view, el: r.view.el }])), this.isDatesUpdated && (this.isDatesUpdated = !1, this.publiclyTrigger("datesRender", [{ view: r.view, el: r.view.el }])), this.isEventsUpdated && (this.isEventsUpdated = !1), this.releaseAfterSizingTriggers()
        }, e.prototype.resetOptions = function(e) {
            var t = this,
                n = this.pluginSystem.hooks.optionChangeHandlers,
                r = this.optionsManager.overrides,
                i = {},
                o = {},
                s = {};
            for (var a in r) n[a] || (i[a] = r[a]);
            for (var l in e) n[l] ? s[l] = e[l] : o[l] = e[l];
            this.batchRendering(function() { un(i, o) ? t.processOptions(e, "reset") : t.processOptions(cn(i, o)); for (var r in s) n[r](s[r], t) })
        }, e.prototype.setOptions = function(e) {
            var t = this,
                n = this.pluginSystem.hooks.optionChangeHandlers,
                r = {},
                i = {};
            for (var o in e) n[o] ? i[o] = e[o] : r[o] = e[o];
            this.batchRendering(function() { t.processOptions(r); for (var e in i) n[e](i[e], t) })
        }, e.prototype.processOptions = function(e, t) {
            var n = this,
                r = this.dateEnv,
                i = !1,
                o = !1,
                s = !1;
            for (var a in e) /^(height|contentHeight|aspectRatio)$/.test(a) ? o = !0 : /^(defaultDate|defaultView)$/.test(a) || (s = !0, "timeZone" === a && (i = !0));
            "reset" === t ? (s = !0, this.optionsManager.reset(e)) : "dynamic" === t ? this.optionsManager.addDynamic(e) : this.optionsManager.add(e), s && (this.handleOptions(this.optionsManager.computed), this.needsFullRerender = !0, this.batchRendering(function() { i && n.dispatch({ type: "CHANGE_TIMEZONE", oldDateEnv: r }), n.dispatch({ type: "SET_VIEW_TYPE", viewType: n.state.viewType }) })), o && this.updateSize()
        }, e.prototype.setOption = function(e, t) {
            var n;
            this.processOptions((n = {}, n[e] = t, n), "dynamic")
        }, e.prototype.getOption = function(e) { return this.optionsManager.computed[e] }, e.prototype.opt = function(e) { return this.optionsManager.computed[e] }, e.prototype.viewOpt = function(e) { return this.viewOpts()[e] }, e.prototype.viewOpts = function() { return this.viewSpecs[this.state.viewType].options }, e.prototype.handleOptions = function(e) {
            var t = this,
                n = this.pluginSystem.hooks;
            this.defaultAllDayEventDuration = K(e.defaultAllDayEventDuration), this.defaultTimedEventDuration = K(e.defaultTimedEventDuration), this.delayedRerender = this.buildDelayedRerender(e.rerenderDelay), this.theme = this.buildTheme(e);
            var r = this.parseRawLocales(e.locales);
            this.availableRawLocales = r.map;
            var i = this.buildLocale(e.locale || r.defaultCode, r.map);
            this.dateEnv = this.buildDateEnv(i, e.timeZone, n.namedTimeZonedImpl, e.firstDay, e.weekNumberCalculation, e.weekLabel, n.cmdFormatter), this.selectionConfig = this.buildSelectionConfig(e), this.viewSpecs = gr(n.views, this.optionsManager), this.dateProfileGenerators = Me(this.viewSpecs, function(e) { return new e.class.prototype.dateProfileGeneratorClass(e, t) })
        }, e.prototype.getAvailableLocaleCodes = function() { return Object.keys(this.availableRawLocales) }, e.prototype._buildSelectionConfig = function(e) { return Yt("select", e, this) }, e.prototype._buildEventUiSingleBase = function(e) { return e.editable && (e = Gr({}, e, { eventEditable: !0 })), Yt("event", e, this) }, e.prototype.hasPublicHandlers = function(e) { return this.hasHandlers(e) || this.opt(e) }, e.prototype.publiclyTrigger = function(e, t) { var n = this.opt(e); if (this.triggerWith(e, this, t), n) return n.apply(this, t) }, e.prototype.publiclyTriggerAfterSizing = function(e, t) {
            var n = this.afterSizingTriggers;
            (n[e] || (n[e] = [])).push(t)
        }, e.prototype.releaseAfterSizingTriggers = function() {
            var e = this.afterSizingTriggers;
            for (var t in e)
                for (var n = 0, r = e[t]; n < r.length; n++) {
                    var i = r[n];
                    this.publiclyTrigger(t, i)
                }
            this.afterSizingTriggers = {}
        }, e.prototype.isValidViewType = function(e) { return Boolean(this.viewSpecs[e]) }, e.prototype.changeView = function(e, t) {
            var n = null;
            t && (t.start && t.end ? (this.optionsManager.addDynamic({ visibleRange: t }), this.handleOptions(this.optionsManager.computed)) : n = this.dateEnv.createMarker(t)), this.unselect(), this.dispatch({ type: "SET_VIEW_TYPE", viewType: e, dateMarker: n })
        }, e.prototype.zoomTo = function(e, t) {
            var n;
            t = t || "day", n = this.viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({ type: "SET_VIEW_TYPE", viewType: n.type, dateMarker: e }) : this.dispatch({ type: "SET_DATE", dateMarker: e })
        }, e.prototype.getUnitViewSpec = function(e) {
            var t, n, r = this.component,
                i = [];
            r.header && i.push.apply(i, r.header.viewsWithButtons), r.footer && i.push.apply(i, r.footer.viewsWithButtons);
            for (var o in this.viewSpecs) i.push(o);
            for (t = 0; t < i.length; t++)
                if ((n = this.viewSpecs[i[t]]) && n.singleUnit === e) return n
        }, e.prototype.getInitialDate = function() { var e = this.opt("defaultDate"); return null != e ? this.dateEnv.createMarker(e) : this.getNow() }, e.prototype.prev = function() { this.unselect(), this.dispatch({ type: "PREV" }) }, e.prototype.next = function() { this.unselect(), this.dispatch({ type: "NEXT" }) }, e.prototype.prevYear = function() { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.addYears(this.state.currentDate, -1) }) }, e.prototype.nextYear = function() { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.addYears(this.state.currentDate, 1) }) }, e.prototype.today = function() { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.getNow() }) }, e.prototype.gotoDate = function(e) { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.createMarker(e) }) }, e.prototype.incrementDate = function(e) {
            var t = K(e);
            t && (this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.add(this.state.currentDate, t) }))
        }, e.prototype.getDate = function() { return this.dateEnv.toDate(this.state.currentDate) }, e.prototype.formatDate = function(e, t) { var n = this.dateEnv; return n.format(n.createMarker(e), lt(t)) }, e.prototype.formatRange = function(e, t, n) { var r = this.dateEnv; return r.formatRange(r.createMarker(e), r.createMarker(t), lt(n, this.opt("defaultRangeSeparator")), n) }, e.prototype.formatIso = function(e, t) { var n = this.dateEnv; return n.formatIso(n.createMarker(e), { omitTime: t }) }, e.prototype.windowResize = function(e) {!this.isHandlingWindowResize && this.component && e.target === window && (this.isHandlingWindowResize = !0, this.updateSize(), this.publiclyTrigger("windowResize", [this.view]), this.isHandlingWindowResize = !1) }, e.prototype.updateSize = function() { this.component && this.component.updateSize(!0) }, e.prototype.registerInteractiveComponent = function(e, t) {
            var n = Sr(e, t),
                r = [Gi, Fi].concat(this.pluginSystem.hooks.componentInteractions).map(function(e) { return new e(n) });
            this.interactionsStore[e.uid] = r, Ui[e.uid] = n
        }, e.prototype.unregisterInteractiveComponent = function(e) {
            for (var t = 0, n = this.interactionsStore[e.uid]; t < n.length; t++) n[t].destroy();
            delete this.interactionsStore[e.uid], delete Ui[e.uid]
        }, e.prototype.select = function(e, t) {
            var n, r = rr(n = null == t ? null != e.start ? e : { start: e, end: null } : { start: e, end: t }, this.dateEnv, K({ days: 1 }));
            r && (this.dispatch({ type: "SELECT_DATES", selection: r }), this.triggerDateSelect(r))
        }, e.prototype.unselect = function(e) { this.state.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), this.triggerDateUnselect(e)) }, e.prototype.triggerDateSelect = function(e, t) {
            var n = this.buildDateSpanApi(e);
            n.jsEvent = t ? t.origEvent : null, n.view = this.view, this.publiclyTrigger("select", [n])
        }, e.prototype.triggerDateUnselect = function(e) { this.publiclyTrigger("unselect", [{ jsEvent: e ? e.origEvent : null, view: this.view }]) }, e.prototype.triggerDateClick = function(e, t, n, r) {
            var i = this.buildDatePointApi(e);
            i.dayEl = t, i.jsEvent = r, i.view = n, this.publiclyTrigger("dateClick", [i])
        }, e.prototype.buildDatePointApi = function(e) {
            for (var t = {}, n = 0, r = this.pluginSystem.hooks.datePointTransforms; n < r.length; n++) {
                var i = r[n];
                Gr(t, i(e, this))
            }
            return Gr(t, ar(e, this.dateEnv)), t
        }, e.prototype.buildDateSpanApi = function(e) {
            for (var t = {}, n = 0, r = this.pluginSystem.hooks.dateSpanTransforms; n < r.length; n++) {
                var i = r[n];
                Gr(t, i(e, this))
            }
            return Gr(t, sr(e, this.dateEnv)), t
        }, e.prototype.getNow = function() { var e = this.opt("now"); return "function" == typeof e && (e = e()), null == e ? this.dateEnv.createNowMarker() : this.dateEnv.createMarker(e) }, e.prototype.getDefaultEventEnd = function(e, t) { var n = t; return e ? (n = L(n), n = this.dateEnv.add(n, this.defaultAllDayEventDuration)) : n = this.dateEnv.add(n, this.defaultTimedEventDuration), n }, e.prototype.addEvent = function(e, t) {
            if (e instanceof ei) {
                var n = e._def,
                    r = e._instance;
                return this.state.eventStore.defs[n.defId] || this.dispatch({ type: "ADD_EVENTS", eventStore: _e({ def: n, instance: r }) }), e
            }
            var i;
            if (t instanceof $r) i = t.internalEventSource.sourceId;
            else if (null != t) {
                var o = this.getEventSourceById(t);
                if (!o) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                i = o.internalEventSource.sourceId
            }
            var s = Xt(e, i, this);
            return s ? (this.dispatch({ type: "ADD_EVENTS", eventStore: _e(s) }), new ei(this, s.def, s.def.recurringDef ? null : s.instance)) : null
        }, e.prototype.getEventById = function(e) {
            var t = this.state.eventStore,
                n = t.defs,
                r = t.instances;
            e = String(e);
            for (var i in n) { var o = n[i]; if (o.publicId === e) { if (o.recurringDef) return new ei(this, o, null); for (var s in r) { var a = r[s]; if (a.defId === o.defId) return new ei(this, o, a) } } }
            return null
        }, e.prototype.getEvents = function() {
            var e = this.state.eventStore,
                t = e.defs,
                n = e.instances,
                r = [];
            for (var i in n) {
                var o = n[i],
                    s = t[o.defId];
                r.push(new ei(this, s, o))
            }
            return r
        }, e.prototype.removeAllEvents = function() { this.dispatch({ type: "REMOVE_ALL_EVENTS" }) }, e.prototype.rerenderEvents = function() { this.dispatch({ type: "RESET_EVENTS" }) }, e.prototype.getEventSources = function() {
            var e = this.state.eventSources,
                t = [];
            for (var n in e) t.push(new $r(this, e[n]));
            return t
        }, e.prototype.getEventSourceById = function(e) {
            var t = this.state.eventSources;
            e = String(e);
            for (var n in t)
                if (t[n].publicId === e) return new $r(this, t[n]);
            return null
        }, e.prototype.addEventSource = function(e) { if (e instanceof $r) return this.state.eventSources[e.internalEventSource.sourceId] || this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [e.internalEventSource] }), e; var t = zn(e, this); return t ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [t] }), new $r(this, t)) : null }, e.prototype.removeAllEventSources = function() { this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" }) }, e.prototype.refetchEvents = function() { this.dispatch({ type: "FETCH_EVENT_SOURCES" }) }, e.prototype.scrollToTime = function(e) {
            var t = K(e);
            t && this.component.view.scrollToTime(t)
        }, e
    }();
    ui.mixInto(ji);
    var Yi = function(e) {
        function n(n, r, i, o) { var s = e.call(this, n, t("div", { className: "fc-view fc-" + r.type + "-view" }), !0) || this; return s.renderDatesMem = on(s.renderDatesWrap, s.unrenderDatesWrap), s.renderBusinessHoursMem = on(s.renderBusinessHours, s.unrenderBusinessHours, [s.renderDatesMem]), s.renderDateSelectionMem = on(s.renderDateSelectionWrap, s.unrenderDateSelectionWrap, [s.renderDatesMem]), s.renderEventsMem = on(s.renderEvents, s.unrenderEvents, [s.renderDatesMem]), s.renderEventSelectionMem = on(s.renderEventSelectionWrap, s.unrenderEventSelectionWrap, [s.renderEventsMem]), s.renderEventDragMem = on(s.renderEventDragWrap, s.unrenderEventDragWrap, [s.renderDatesMem]), s.renderEventResizeMem = on(s.renderEventResizeWrap, s.unrenderEventResizeWrap, [s.renderDatesMem]), s.viewSpec = r, s.dateProfileGenerator = i, s.type = r.type, s.eventOrderSpecs = le(s.opt("eventOrder")), s.nextDayThreshold = K(s.opt("nextDayThreshold")), o.appendChild(s.el), s.initialize(), s }
        return we(n, e), n.prototype.initialize = function() {}, Object.defineProperty(n.prototype, "activeStart", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.activeRange.start) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "activeEnd", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.activeRange.end) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "currentStart", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.currentRange.start) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "currentEnd", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.currentRange.end) }, enumerable: !0, configurable: !0 }), n.prototype.render = function(e) { this.renderDatesMem(e.dateProfile), this.renderBusinessHoursMem(e.businessHours), this.renderDateSelectionMem(e.dateSelection), this.renderEventsMem(e.eventStore), this.renderEventSelectionMem(e.eventSelection), this.renderEventDragMem(e.eventDrag), this.renderEventResizeMem(e.eventResize) }, n.prototype.destroy = function() { e.prototype.destroy.call(this), this.renderDatesMem.unrender() }, n.prototype.updateSize = function(e, t, n) {
            var r = this.calendar;
            (e || r.isViewUpdated || r.isDatesUpdated || r.isEventsUpdated) && this.updateBaseSize(e, t, n)
        }, n.prototype.updateBaseSize = function(e, t, n) {}, n.prototype.renderDatesWrap = function(e) { this.renderDates(e), this.addScroll({ timeMs: K(this.opt("scrollTime")).milliseconds }), this.startNowIndicator(e) }, n.prototype.unrenderDatesWrap = function() { this.stopNowIndicator(), this.unrenderDates() }, n.prototype.renderDates = function(e) {}, n.prototype.unrenderDates = function() {}, n.prototype.renderBusinessHours = function(e) {}, n.prototype.unrenderBusinessHours = function() {}, n.prototype.renderDateSelectionWrap = function(e) { e && this.renderDateSelection(e) }, n.prototype.unrenderDateSelectionWrap = function(e) { e && this.unrenderDateSelection(e) }, n.prototype.renderDateSelection = function(e) {}, n.prototype.unrenderDateSelection = function(e) {}, n.prototype.renderEvents = function(e) {}, n.prototype.unrenderEvents = function() {}, n.prototype.sliceEvents = function(e, t) { var n = this.props; return ht(e, n.eventUiBases, n.dateProfile.activeRange, t ? this.nextDayThreshold : null).fg }, n.prototype.renderEventSelectionWrap = function(e) { e && this.renderEventSelection(e) }, n.prototype.unrenderEventSelectionWrap = function(e) { e && this.unrenderEventSelection(e) }, n.prototype.renderEventSelection = function(e) {}, n.prototype.unrenderEventSelection = function(e) {}, n.prototype.renderEventDragWrap = function(e) { e && this.renderEventDrag(e) }, n.prototype.unrenderEventDragWrap = function(e) { e && this.unrenderEventDrag(e) }, n.prototype.renderEventDrag = function(e) {}, n.prototype.unrenderEventDrag = function(e) {}, n.prototype.renderEventResizeWrap = function(e) { e && this.renderEventResize(e) }, n.prototype.unrenderEventResizeWrap = function(e) { e && this.unrenderEventResize(e) }, n.prototype.renderEventResize = function(e) {}, n.prototype.unrenderEventResize = function(e) {}, n.prototype.startNowIndicator = function(e) {
            var t, n, r, i = this,
                o = this.dateEnv;
            this.opt("nowIndicator") && (t = this.getNowIndicatorUnit(e)) && (n = this.updateNowIndicator.bind(this), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = (new Date).valueOf(), r = o.add(o.startOf(this.initialNowDate, t), K(1, t)).valueOf() - this.initialNowDate.valueOf(), this.nowIndicatorTimeoutID = setTimeout(function() { i.nowIndicatorTimeoutID = null, n(), r = "second" === t ? 1e3 : 6e4, i.nowIndicatorIntervalID = setInterval(n, r) }, r))
        }, n.prototype.updateNowIndicator = function() { this.props.dateProfile && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(P(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0) }, n.prototype.stopNowIndicator = function() { this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1) }, n.prototype.getNowIndicatorUnit = function(e) {}, n.prototype.renderNowIndicator = function(e) {}, n.prototype.unrenderNowIndicator = function() {}, n.prototype.addScroll = function(e) {
            var t = this.queuedScroll || (this.queuedScroll = {});
            Gr(t, e)
        }, n.prototype.popScroll = function(e) { this.applyQueuedScroll(e), this.queuedScroll = null }, n.prototype.applyQueuedScroll = function(e) { this.applyScroll(this.queuedScroll || {}, e) }, n.prototype.queryScroll = function() { var e = {}; return this.props.dateProfile && Gr(e, this.queryDateScroll()), e }, n.prototype.applyScroll = function(e, t) {
            var n = e.timeMs;
            null != n && (delete e.timeMs, this.props.dateProfile && Gr(e, this.computeDateScroll(n))), this.props.dateProfile && this.applyDateScroll(e)
        }, n.prototype.computeDateScroll = function(e) { return {} }, n.prototype.queryDateScroll = function() { return {} }, n.prototype.applyDateScroll = function(e) {}, n.prototype.scrollToTime = function(e) { this.applyScroll({ timeMs: e.milliseconds }, !1) }, n
    }(Ei);
    ui.mixInto(Yi), Yi.prototype.usesMinMaxTime = !1, Yi.prototype.dateProfileGeneratorClass = Ni;
    var Zi = function() {
            function e(e) { this.segs = [], this.isSizeDirty = !1, this.context = e }
            return e.prototype.renderSegs = function(e, t) { this.rangeUpdated(), e = this.renderSegEls(e, t), this.segs = e, this.attachSegs(e, t), this.isSizeDirty = !0, this.context.view.triggerRenderedSegs(this.segs, Boolean(t)) }, e.prototype.unrender = function(e, t) { this.context.view.triggerWillRemoveSegs(this.segs, Boolean(t)), this.detachSegs(this.segs), this.segs = [] }, e.prototype.rangeUpdated = function() {
                var e, t, n = this.context.options;
                this.eventTimeFormat = lt(n.eventTimeFormat || this.computeEventTimeFormat(), n.defaultRangeSeparator), null == (e = n.displayEventTime) && (e = this.computeDisplayEventTime()), null == (t = n.displayEventEnd) && (t = this.computeDisplayEventEnd()), this.displayEventTime = e, this.displayEventEnd = t
            }, e.prototype.renderSegEls = function(e, t) {
                var n, i = "";
                if (e.length) {
                    for (n = 0; n < e.length; n++) i += this.renderSegHtml(e[n], t);
                    r(i).forEach(function(t, n) {
                        var r = e[n];
                        t && (r.el = t)
                    }), e = ft(this.context.view, e, Boolean(t))
                }
                return e
            }, e.prototype.getSegClasses = function(e, t, n, r) { var i = ["fc-event", e.isStart ? "fc-start" : "fc-not-start", e.isEnd ? "fc-end" : "fc-not-end"].concat(e.eventRange.ui.classNames); return t && i.push("fc-draggable"), n && i.push("fc-resizable"), r && (i.push("fc-mirror"), r.isDragging && i.push("fc-dragging"), r.isResizing && i.push("fc-resizing")), i }, e.prototype.getTimeText = function(e, t, n) {
                var r = e.def,
                    i = e.instance;
                return this._getTimeText(i.range.start, r.hasEnd ? i.range.end : null, r.allDay, t, n, i.forcedStartTzo, i.forcedEndTzo)
            }, e.prototype._getTimeText = function(e, t, n, r, i, o, s) { var a = this.context.dateEnv; return null == r && (r = this.eventTimeFormat), null == i && (i = this.displayEventEnd), this.displayEventTime && !n ? i && t ? a.formatRange(e, t, r, { forcedStartTzo: o, forcedEndTzo: s }) : a.format(e, r, { forcedTzo: o }) : "" }, e.prototype.computeEventTimeFormat = function() { return { hour: "numeric", minute: "2-digit", omitZeroMinute: !0 } }, e.prototype.computeDisplayEventTime = function() { return !0 }, e.prototype.computeDisplayEventEnd = function() { return !0 }, e.prototype.getSkinCss = function(e) { return { "background-color": e.backgroundColor, "border-color": e.borderColor, color: e.textColor } }, e.prototype.sortEventSegs = function(e) {
                var t = this.context.view.eventOrderSpecs,
                    n = e.map(Rr);
                return n.sort(function(e, n) { return ce(e, n, t) }), n.map(function(e) { return e._seg })
            }, e.prototype.computeSizes = function(e) {
                (e || this.isSizeDirty) && this.computeSegSizes(this.segs)
            }, e.prototype.assignSizes = function(e) {
                (e || this.isSizeDirty) && (this.assignSegSizes(this.segs), this.isSizeDirty = !1)
            }, e.prototype.computeSegSizes = function(e) {}, e.prototype.assignSegSizes = function(e) {}, e.prototype.hideByHash = function(e) {
                if (e)
                    for (var t = 0, n = this.segs; t < n.length; t++) {
                        var r = n[t];
                        e[r.eventRange.instance.instanceId] && (r.el.style.visibility = "hidden")
                    }
            }, e.prototype.showByHash = function(e) {
                if (e)
                    for (var t = 0, n = this.segs; t < n.length; t++) {
                        var r = n[t];
                        e[r.eventRange.instance.instanceId] && (r.el.style.visibility = "")
                    }
            }, e.prototype.selectByInstanceId = function(e) {
                if (e)
                    for (var t = 0, n = this.segs; t < n.length; t++) {
                        var r = n[t],
                            i = r.eventRange.instance;
                        i && i.instanceId === e && r.el && r.el.classList.add("fc-selected")
                    }
            }, e.prototype.unselectByInstanceId = function(e) {
                if (e)
                    for (var t = 0, n = this.segs; t < n.length; t++) {
                        var r = n[t];
                        r.el && r.el.classList.remove("fc-selected")
                    }
            }, e
        }(),
        qi = function() {
            function e(e) { this.fillSegTag = "div", this.dirtySizeFlags = {}, this.context = e, this.containerElsByType = {}, this.segsByType = {} }
            return e.prototype.getSegsByType = function(e) { return this.segsByType[e] || [] }, e.prototype.renderSegs = function(e, t) {
                var n, r = this.renderSegEls(e, t),
                    i = this.attachSegs(e, r);
                i && (n = this.containerElsByType[e] || (this.containerElsByType[e] = [])).push.apply(n, i), this.segsByType[e] = r, "bgEvent" === e && this.context.view.triggerRenderedSegs(r, !1), this.dirtySizeFlags[e] = !0
            }, e.prototype.unrender = function(e) {
                var t = this.segsByType[e];
                t && ("bgEvent" === e && this.context.view.triggerWillRemoveSegs(t, !1), this.detachSegs(e, t))
            }, e.prototype.renderSegEls = function(e, t) {
                var n, i = this,
                    o = "";
                if (t.length) {
                    for (n = 0; n < t.length; n++) o += this.renderSegHtml(e, t[n]);
                    r(o).forEach(function(e, n) {
                        var r = t[n];
                        e && (r.el = e)
                    }), "bgEvent" === e && (t = ft(this.context.view, t, !1)), t = t.filter(function(e) { return d(e.el, i.fillSegTag) })
                }
                return t
            }, e.prototype.renderSegHtml = function(e, t) {
                var n = null,
                    r = [];
                return "highlight" !== e && "businessHours" !== e && (n = { "background-color": t.eventRange.ui.backgroundColor }), "highlight" !== e && (r = r.concat(t.eventRange.ui.classNames)), "businessHours" === e ? r.push("fc-bgevent") : r.push("fc-" + e.toLowerCase()), "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (n ? ' style="' + Gt(n) + '"' : "") + "></" + this.fillSegTag + ">"
            }, e.prototype.detachSegs = function(e, t) {
                var n = this.containerElsByType[e];
                n && (n.forEach(c), delete this.containerElsByType[e])
            }, e.prototype.computeSizes = function(e) { for (var t in this.segsByType)(e || this.dirtySizeFlags[t]) && this.computeSegSizes(this.segsByType[t]) }, e.prototype.assignSizes = function(e) {
                for (var t in this.segsByType)(e || this.dirtySizeFlags[t]) && this.assignSegSizes(this.segsByType[t]);
                this.dirtySizeFlags = {}
            }, e.prototype.computeSegSizes = function(e) {}, e.prototype.assignSegSizes = function(e) {}, e
        }(),
        Xi = function() { return function(e) { this.timeZoneName = e } }(),
        Ki = function() {
            function e(e) { this.emitter = new ui }
            return e.prototype.destroy = function() {}, e.prototype.setMirrorIsVisible = function(e) {}, e.prototype.setMirrorNeedsRevert = function(e) {}, e.prototype.setAutoScrollEnabled = function(e) {}, e
        }(),
        Ji = { startTime: K, duration: K, create: Boolean, sourceId: String },
        Qi = { create: !0 },
        $i = function(e) {
            function t(t, r) { var i = e.call(this, t) || this; return r.innerHTML = "", r.appendChild(i.el = n('<div class="fc-row ' + i.theme.getClass("headerRow") + '"><table class="' + i.theme.getClass("tableGrid") + '"><thead></thead></table></div>')), i.thead = i.el.querySelector("thead"), i }
            return we(t, e), t.prototype.destroy = function() { c(this.el) }, t.prototype.render = function(e) {
                var t = e.dates,
                    n = e.datesRepDistinctDays,
                    r = [];
                e.renderIntroHtml && r.push(e.renderIntroHtml());
                for (var i = lt(this.opt("columnHeaderFormat") || Mr(n, t.length)), o = 0, s = t; o < s.length; o++) {
                    var a = s[o];
                    r.push(Pr(a, e.dateProfile, n, t.length, i, this.context))
                }
                this.isRtl && r.reverse(), this.thead.innerHTML = "<tr>" + r.join("") + "</tr>"
            }, t
        }(yi),
        eo = function() {
            function e(e, t) {
                for (var n = e.start, r = e.end, i = [], o = [], s = -1; n < r;) t.isHiddenDay(n) ? i.push(s + .5) : (s++, i.push(s), o.push(n)), n = M(n, 1);
                this.dates = o, this.indices = i, this.cnt = o.length
            }
            return e.prototype.sliceRange = function(e) {
                var t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex(M(e.end, -1)),
                    r = Math.max(0, t),
                    i = Math.min(this.cnt - 1, n);
                return r = Math.ceil(r), i = Math.floor(i), r <= i ? { firstIndex: r, lastIndex: i, isStart: t === r, isEnd: n === i } : null
            }, e.prototype.getDateDayIndex = function(e) {
                var t = this.indices,
                    n = Math.floor(H(this.dates[0], e));
                return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
            }, e
        }(),
        to = function() {
            function e(e, t) {
                var n, r, i, o = e.dates;
                if (t) {
                    for (r = o[0].getUTCDay(), n = 1; n < o.length && o[n].getUTCDay() !== r; n++);
                    i = Math.ceil(o.length / n)
                } else i = 1, n = o.length;
                this.rowCnt = i, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
            }
            return e.prototype.buildCells = function() {
                for (var e = [], t = 0; t < this.rowCnt; t++) {
                    for (var n = [], r = 0; r < this.colCnt; r++) n.push(this.buildCell(t, r));
                    e.push(n)
                }
                return e
            }, e.prototype.buildCell = function(e, t) { return { date: this.daySeries.dates[e * this.colCnt + t] } }, e.prototype.buildHeaderDates = function() { for (var e = [], t = 0; t < this.colCnt; t++) e.push(this.cells[0][t].date); return e }, e.prototype.sliceRange = function(e) {
                var t = this.colCnt,
                    n = this.daySeries.sliceRange(e),
                    r = [];
                if (n)
                    for (var i = n.firstIndex, o = n.lastIndex, s = i; s <= o;) {
                        var a = Math.floor(s / t),
                            l = Math.min((a + 1) * t, o + 1);
                        r.push({ row: a, firstCol: s % t, lastCol: (l - 1) % t, isStart: n.isStart && s === i, isEnd: n.isEnd && l - 1 === o }), s = l
                    }
                return r
            }, e
        }(),
        no = function() {
            function e() { this.sliceBusinessHours = Je(this._sliceBusinessHours), this.sliceDateSelection = Je(this._sliceDateSpan), this.sliceEventStore = Je(this._sliceEventStore), this.sliceEventDrag = Je(this._sliceInteraction), this.sliceEventResize = Je(this._sliceInteraction) }
            return e.prototype.sliceProps = function(e, t, n, r) {
                for (var i = [], o = 4; o < arguments.length; o++) i[o - 4] = arguments[o];
                var s = e.eventUiBases,
                    a = this.sliceEventStore.apply(this, [e.eventStore, s, t, n, r].concat(i));
                return { dateSelectionSegs: this.sliceDateSelection.apply(this, [e.dateSelection, s, r].concat(i)), businessHourSegs: this.sliceBusinessHours.apply(this, [e.businessHours, t, n, r].concat(i)), fgEventSegs: a.fg, bgEventSegs: a.bg, eventDrag: this.sliceEventDrag.apply(this, [e.eventDrag, s, t, n, r].concat(i)), eventResize: this.sliceEventResize.apply(this, [e.eventResize, s, t, n, r].concat(i)), eventSelection: e.eventSelection }
            }, e.prototype.sliceNowDate = function(e, t) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; return this._sliceDateSpan.apply(this, [{ range: { start: e, end: P(e, 1) }, allDay: !1 }, {}, t].concat(n)) }, e.prototype._sliceBusinessHours = function(e, t, n, r) { for (var i = [], o = 4; o < arguments.length; o++) i[o - 4] = arguments[o]; return e ? this._sliceEventStore.apply(this, [Oe(e, Hr(t, Boolean(n)), r.calendar), {}, t, n, r].concat(i)).bg : [] }, e.prototype._sliceEventStore = function(e, t, n, r, i) { for (var o = [], s = 5; s < arguments.length; s++) o[s - 5] = arguments[s]; if (e) { var a = ht(e, t, Hr(n, Boolean(r)), r); return { bg: this.sliceEventRanges(a.bg, i, o), fg: this.sliceEventRanges(a.fg, i, o) } } return { bg: [], fg: [] } }, e.prototype._sliceInteraction = function(e, t, n, r, i) { for (var o = [], s = 5; s < arguments.length; s++) o[s - 5] = arguments[s]; if (!e) return null; var a = ht(e.mutatedEvents, t, Hr(n, Boolean(r)), r); return { segs: this.sliceEventRanges(a.fg, i, o), affectedInstances: e.affectedEvents.instances, isEvent: e.isEvent, sourceSeg: e.origSeg } }, e.prototype._sliceDateSpan = function(e, t, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                if (!e) return [];
                for (var o = lr(e, t, n.calendar), s = this.sliceRange.apply(this, [e.range].concat(r)), a = 0, l = s; a < l.length; a++) {
                    var c = l[a];
                    c.component = n, c.eventRange = o
                }
                return s
            }, e.prototype.sliceEventRanges = function(e, t, n) {
                for (var r = [], i = 0, o = e; i < o.length; i++) {
                    var s = o[i];
                    r.push.apply(r, this.sliceEventRange(s, t, n))
                }
                return r
            }, e.prototype.sliceEventRange = function(e, t, n) {
                for (var r = this.sliceRange.apply(this, [e.range].concat(n)), i = 0, o = r; i < o.length; i++) {
                    var s = o[i];
                    s.component = t, s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd
                }
                return r
            }, e
        }();
    e.Calendar = ji, e.Component = yi, e.DateComponent = Ei, e.DateEnv = ki, e.DateProfileGenerator = Ni, e.DayHeader = $i, e.DaySeries = eo, e.DayTable = to, e.ElementDragging = Ki, e.ElementScrollController = hi, e.EmitterMixin = ui, e.EventApi = ei, e.FgEventRenderer = Zi, e.FillRenderer = qi, e.Interaction = Bi, e.Mixin = ci, e.NamedTimeZoneImpl = Xi, e.PositionCache = di, e.ScrollComponent = gi, e.ScrollController = pi, e.Slicer = no, e.Splitter = li, e.Theme = vi, e.View = Yi, e.WindowScrollController = fi, e.addDays = M, e.addDurations = function(e, t) { return { years: e.years + t.years, months: e.months + t.months, days: e.days + t.days, milliseconds: e.milliseconds + t.milliseconds } }, e.addMs = P, e.addWeeks = function(e, t) { var n = Y(e); return n[2] += 7 * t, Z(n) }, e.allowContextMenu = function(e) { e.removeEventListener("contextmenu", C) }, e.allowSelection = function(e) { e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", C) }, e.appendToElement = s, e.applyAll = ge, e.applyMutationToEventStore = Et, e.applyStyle = h, e.applyStyleProp = f, e.asRoughMinutes = function(e) { return oe(e) / 6e4 }, e.asRoughMs = oe, e.asRoughSeconds = function(e) { return oe(e) / 1e3 }, e.buildGotoAnchorHtml = pn, e.buildSegCompareObj = Rr, e.capitaliseFirstLetter = pe, e.combineEventUis = Zt, e.compareByFieldSpec = ue, e.compareByFieldSpecs = ce, e.compareNumbers = function(e, t) { return e - t }, e.compensateScroll = function(e, t) { t.left && h(e, { borderLeftWidth: 1, marginLeft: t.left - 1 }), t.right && h(e, { borderRightWidth: 1, marginRight: t.right - 1 }) }, e.computeClippingRect = function(e) { return T(e).map(function(e) { return S(e) }).concat(D()).reduce(function(e, t) { return g(e, t) || t }) }, e.computeEdges = E, e.computeFallbackHeaderFormat = Mr, e.computeHeightAndMargins = w, e.computeInnerRect = S, e.computeRect = b, e.computeVisibleDayRange = be, e.config = Di, e.constrainPoint = function(e, t) { return { left: Math.min(Math.max(e.left, t.left), t.right), top: Math.min(Math.max(e.top, t.top), t.bottom) } }, e.createDuration = K, e.createElement = t, e.createEmptyEventStore = Ve, e.createEventInstance = Jt, e.createFormatter = lt, e.createPlugin = yn, e.cssToStr = Gt, e.debounce = me, e.diffDates = De, e.diffDayAndTime = x, e.diffDays = H, e.diffPoints = function(e, t) { return { left: e.left - t.left, top: e.top - t.top } }, e.diffWeeks = function(e, t) { return H(e, t) / 7 }, e.diffWholeDays = z, e.diffWholeWeeks = N, e.disableCursor = function() { document.body.classList.add("fc-not-allowed") }, e.distributeHeight = function(e, t, n) {
        var r = Math.floor(t / e.length),
            i = Math.floor(t - r * (e.length - 1)),
            o = [],
            s = [],
            a = [],
            l = 0;
        ae(e), e.forEach(function(t, n) {
            var c = n === e.length - 1 ? i : r,
                u = w(t);
            u < c ? (o.push(t), s.push(u), a.push(t.offsetHeight)) : l += u
        }), n && (t -= l, r = Math.floor(t / o.length), i = Math.floor(t - r * (o.length - 1))), o.forEach(function(e, t) {
            var n = t === o.length - 1 ? i : r,
                l = s[t],
                c = n - (l - a[t]);
            l < n && (e.style.height = c + "px")
        })
    }, e.elementClosest = u, e.elementMatches = d, e.enableCursor = function() { document.body.classList.remove("fc-not-allowed") }, e.eventTupleToStore = _e, e.filterEventStoreDefs = Be, e.filterHash = Ie, e.findChildren = function(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0; i < n.length; i++)
            for (var o = n[i].children, s = 0; s < o.length; s++) {
                var a = o[s];
                t && !d(a, t) || r.push(a)
            }
        return r
    }, e.findElements = p, e.flexibleCompare = de, e.forceClassName = function(e, t, n) { n ? e.classList.add(t) : e.classList.remove(t) }, e.formatDate = function(e, t) {
        void 0 === t && (t = {});
        var n = Ir(t),
            r = lt(t),
            i = n.createMarkerMeta(e);
        return i ? n.format(i.marker, r, { forcedTzo: i.forcedTzo }) : ""
    }, e.formatIsoTimeString = function(e) { return he(e.getUTCHours(), 2) + ":" + he(e.getUTCMinutes(), 2) + ":" + he(e.getUTCSeconds(), 2) }, e.formatRange = function(e, t, n) {
        var r = Ir("object" == typeof n && n ? n : {}),
            i = lt(n, wi.defaultRangeSeparator),
            o = r.createMarkerMeta(e),
            s = r.createMarkerMeta(t);
        return o && s ? r.formatRange(o.marker, s.marker, i, { forcedStartTzo: o.forcedTzo, forcedEndTzo: s.forcedTzo, isEndExclusive: n.isEndExclusive }) : ""
    }, e.freezeRaw = Ee, e.getAllDayHtml = function(e) { return e.opt("allDayHtml") || Ut(e.opt("allDayText")) }, e.getClippingParents = T, e.getDayClasses = hn, e.getElSeg = vt, e.getRectCenter = function(e) { return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 } }, e.getRelevantEvents = xe, e.globalDefaults = wi, e.greatestDurationDenominator = se, e.hasBgRendering = function(e) { return "background" === e.rendering || "inverse-background" === e.rendering }, e.htmlEscape = Ut, e.htmlToElement = n, e.insertAfterElement = function(e, t) { for (var n = l(t), r = e.nextSibling || null, i = 0; i < n.length; i++) e.parentNode.insertBefore(n[i], r) }, e.interactionSettingsStore = Ui, e.interactionSettingsToStore = function(e) { var t; return t = {}, t[e.component.uid] = e, t }, e.intersectRanges = We, e.intersectRects = g, e.isArraysEqual = Ke, e.isDateSpansEqual = function(e, t) { return je(e.range, t.range) && e.allDay === t.allDay && or(e, t) }, e.isInt = fe, e.isInteractionValid = Ht, e.isMultiDayRange = function(e) { var t = be(e); return H(t.start, t.end) > 1 }, e.isObjectsSimilar = ln, e.isPropsValid = Ot, e.isSingleDay = function(e) { return 0 === e.years && 0 === e.months && 1 === e.days && 0 === e.milliseconds }, e.isValidDate = q, e.isValuesSimilar = sn, e.listenBySelector = R, e.mapHash = Me, e.matchCellWidths = function(e) {
        var t = 0;
        return e.forEach(function(e) {
            var n = e.firstChild;
            if (n instanceof HTMLElement) {
                var r = n.offsetWidth;
                r > t && (t = r)
            }
        }), t++, e.forEach(function(e) { e.style.width = t + "px" }), t
    }, e.memoize = Je, e.memoizeOutput = Qe, e.memoizeRendering = on, e.mergeEventStores = Ae, e.multiplyDuration = function(e, t) { return { years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t } }, e.padStart = he, e.parseBusinessHours = nn, e.parseDragMeta = function(e) {
        var t = {},
            n = ye(e, Ji, Qi, t);
        return n.leftoverProps = t, n
    }, e.parseEventDef = Kt, e.parseFieldSpecs = le, e.parseMarker = xn, e.pointInsideRect = function(e, t) { return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom }, e.prependToElement = a, e.preventContextMenu = function(e) { e.addEventListener("contextmenu", C) }, e.preventDefault = C, e.preventSelection = function(e) { e.classList.add("fc-unselectable"), e.addEventListener("selectstart", C) }, e.processScopedUiProps = Yt, e.rangeContainsMarker = qe, e.rangeContainsRange = Ze, e.rangesEqual = je, e.rangesIntersect = Ye, e.refineProps = ye, e.removeElement = c, e.removeExact = function(e, t) { for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n++) : r++; return n }, e.renderDateCell = Pr, e.requestJson = Sn, e.sliceEventStore = ht, e.startOfDay = L, e.subtractInnerElHeight = function(e, t) {
        var n = { position: "relative", left: -1 };
        h(e, n), h(t, n);
        var r = e.offsetHeight - t.offsetHeight,
            i = { position: "", left: "" };
        return h(e, i), h(t, i), r
    }, e.translateRect = function(e, t, n) { return { left: e.left + t, right: e.right + t, top: e.top + n, bottom: e.bottom + n } }, e.uncompensateScroll = function(e) { h(e, { marginLeft: "", marginRight: "", borderLeftWidth: "", borderRightWidth: "" }) }, e.undistributeHeight = ae, e.unpromisify = fn, e.version = "4.1.0", e.whenTransitionDone = function(e, t) {
        var n = function(r) { t(r), Lr.forEach(function(t) { e.removeEventListener(t, n) }) };
        Lr.forEach(function(t) { e.addEventListener(t, n) })
    }, e.wholeDivideDurations = function(e, t) {
        for (var n = null, r = 0; r < Ar.length; r++) {
            var i = Ar[r];
            if (t[i]) {
                var o = e[i] / t[i];
                if (!fe(o) || null !== n && n !== o) return null;
                n = o
            } else if (e[i]) return null
        }
        return n
    }, Object.defineProperty(e, "__esModule", { value: !0 })
}),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : (e = e || self, t(e.FullCalendarDayGrid = {}, e.FullCalendar)) }(this, function(e, t) {
    "use strict";

    function n(e, t) {
        function n() { this.constructor = e }
        a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function r(e, t) {
        var n, r;
        for (n = 0; n < t.length; n++)
            if ((r = t[n]).firstCol <= e.lastCol && r.lastCol >= e.firstCol) return !0;
        return !1
    }

    function i(e, t) { return e.leftCol - t.leftCol }

    function o(e, n, r, i) {
        var o = r.dateEnv,
            s = r.theme,
            a = t.rangeContainsMarker(n.activeRange, e),
            l = t.getDayClasses(e, n, r);
        return l.unshift("fc-day", s.getClass("widgetContent")), '<td class="' + l.join(" ") + '"' + (a ? ' data-date="' + o.formatIso(e, { omitTime: !0 }) + '"' : "") + (i ? " " + i : "") + "></td>"
    }

    function s(e, n) { var r = new t.DaySeries(e.renderRange, n); return new t.DayTable(r, /year|month|week/.test(e.currentRangeUnit)) }
    var a = function(e, t) {
            return (a = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
        },
        l = function() { return (l = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++) { t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }).apply(this, arguments) },
        c = function(e) {
            function r() { return null !== e && e.apply(this, arguments) || this }
            return n(r, e), r.prototype.buildRenderRange = function(n, r, i) {
                var o, s = this.dateEnv,
                    a = e.prototype.buildRenderRange.call(this, n, r, i),
                    l = a.start,
                    c = a.end;
                if (/^(year|month)$/.test(r) && (l = s.startOfWeek(l), (o = s.startOfWeek(c)).valueOf() !== c.valueOf() && (c = t.addWeeks(o, 1))), this.options.monthMode && this.options.fixedWeekCount) {
                    var u = Math.ceil(t.diffWeeks(l, c));
                    c = t.addWeeks(c, 6 - u)
                }
                return { start: l, end: c }
            }, r
        }(t.DateProfileGenerator),
        u = function() {
            function e(e) {
                var t = this;
                this.isHidden = !0, this.margin = 10, this.documentMousedown = function(e) { t.el && !t.el.contains(e.target) && t.hide() }, this.options = e
            }
            return e.prototype.show = function() { this.isHidden && (this.el || this.render(), this.el.style.display = "", this.position(), this.isHidden = !1, this.trigger("show")) }, e.prototype.hide = function() { this.isHidden || (this.el.style.display = "none", this.isHidden = !0, this.trigger("hide")) }, e.prototype.render = function() {
                var e = this,
                    n = this.options,
                    r = this.el = t.createElement("div", { className: "fc-popover " + (n.className || ""), style: { top: "0", left: "0" } });
                "function" == typeof n.content && n.content(r), n.parentEl.appendChild(r), t.listenBySelector(r, "click", ".fc-close", function(t) { e.hide() }), n.autoHide && document.addEventListener("mousedown", this.documentMousedown)
            }, e.prototype.destroy = function() { this.hide(), this.el && (t.removeElement(this.el), this.el = null), document.removeEventListener("mousedown", this.documentMousedown) }, e.prototype.position = function() {
                var e, n, r = this.options,
                    i = this.el,
                    o = i.getBoundingClientRect(),
                    s = t.computeRect(i.offsetParent),
                    a = t.computeClippingRect(r.parentEl);
                e = r.top || 0, n = void 0 !== r.left ? r.left : void 0 !== r.right ? r.right - o.width : 0, e = Math.min(e, a.bottom - o.height - this.margin), e = Math.max(e, a.top + this.margin), n = Math.min(n, a.right - o.width - this.margin), n = Math.max(n, a.left + this.margin), t.applyStyle(i, { top: e - s.top, left: n - s.left })
            }, e.prototype.trigger = function(e) { this.options[e] && this.options[e].apply(this, Array.prototype.slice.call(arguments, 1)) }, e
        }(),
        d = function(e) {
            function r() { return null !== e && e.apply(this, arguments) || this }
            return n(r, e), r.prototype.renderSegHtml = function(e, n) {
                var r, i, o = this.context.options,
                    s = e.eventRange,
                    a = s.def,
                    l = s.ui,
                    c = a.allDay,
                    u = l.startEditable,
                    d = c && e.isStart && l.durationEditable && o.eventResizableFromStart,
                    p = c && e.isEnd && l.durationEditable,
                    h = this.getSegClasses(e, u, d || p, n),
                    f = t.cssToStr(this.getSkinCss(l)),
                    g = "";
                return h.unshift("fc-day-grid-event", "fc-h-event"), e.isStart && (r = this.getTimeText(s)) && (g = '<span class="fc-time">' + t.htmlEscape(r) + "</span>"), i = '<span class="fc-title">' + (t.htmlEscape(a.title || "") || "&nbsp;") + "</span>", '<a class="' + h.join(" ") + '"' + (a.url ? ' href="' + t.htmlEscape(a.url) + '"' : "") + (f ? ' style="' + f + '"' : "") + '><div class="fc-content">' + ("rtl" === o.dir ? i + " " + g : g + " " + i) + "</div>" + (d ? '<div class="fc-resizer fc-start-resizer"></div>' : "") + (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") + "</a>"
            }, r.prototype.computeEventTimeFormat = function() { return { hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "narrow" } }, r.prototype.computeDisplayEventEnd = function() { return !1 }, r
        }(t.FgEventRenderer),
        p = function(e) {
            function o(t) { var n = e.call(this, t.context) || this; return n.dayGrid = t, n }
            return n(o, e), o.prototype.attachSegs = function(e, t) {
                var n = this.rowStructs = this.renderSegRows(e);
                this.dayGrid.rowEls.forEach(function(e, t) { e.querySelector(".fc-content-skeleton > table").appendChild(n[t].tbodyEl) }), t || this.dayGrid.removeSegPopover()
            }, o.prototype.detachSegs = function() {
                for (var e, n = this.rowStructs || []; e = n.pop();) t.removeElement(e.tbodyEl);
                this.rowStructs = null
            }, o.prototype.renderSegRows = function(e) { var t, n, r = []; for (t = this.groupSegRows(e), n = 0; n < t.length; n++) r.push(this.renderSegRow(n, t[n])); return r }, o.prototype.renderSegRow = function(e, n) {
                function r(e) { for (; s < e;)(u = (E[i - 1] || [])[s]) ? u.rowSpan = (u.rowSpan || 1) + 1 : (u = document.createElement("td"), a.appendChild(u)), y[i][s] = u, E[i][s] = u, s++ }
                var i, o, s, a, l, c, u, d = this.dayGrid,
                    p = d.colCnt,
                    h = d.isRtl,
                    f = this.buildSegLevels(n),
                    g = Math.max(1, f.length),
                    v = document.createElement("tbody"),
                    m = [],
                    y = [],
                    E = [];
                for (i = 0; i < g; i++) {
                    if (o = f[i], s = 0, a = document.createElement("tr"), m.push([]), y.push([]), E.push([]), o)
                        for (l = 0; l < o.length; l++) {
                            c = o[l];
                            var S = h ? p - 1 - c.lastCol : c.firstCol,
                                b = h ? p - 1 - c.firstCol : c.lastCol;
                            for (r(S), u = t.createElement("td", { className: "fc-event-container" }, c.el), S !== b ? u.colSpan = b - S + 1 : E[i][s] = u; s <= b;) y[i][s] = u, m[i][s] = c, s++;
                            a.appendChild(u)
                        }
                    r(p);
                    var D = d.renderProps.renderIntroHtml();
                    D && (d.isRtl ? t.appendToElement(a, D) : t.prependToElement(a, D)), v.appendChild(a)
                }
                return { row: e, tbodyEl: v, cellMatrix: y, segMatrix: m, segLevels: f, segs: n }
            }, o.prototype.buildSegLevels = function(e) {
                var t, n, o, s = this.dayGrid,
                    a = s.isRtl,
                    l = s.colCnt,
                    c = [];
                for (e = this.sortEventSegs(e), t = 0; t < e.length; t++) {
                    for (n = e[t], o = 0; o < c.length && r(n, c[o]); o++);
                    n.level = o, n.leftCol = a ? l - 1 - n.lastCol : n.firstCol, n.rightCol = a ? l - 1 - n.firstCol : n.lastCol, (c[o] || (c[o] = [])).push(n)
                }
                for (o = 0; o < c.length; o++) c[o].sort(i);
                return c
            }, o.prototype.groupSegRows = function(e) { var t, n = []; for (t = 0; t < this.dayGrid.rowCnt; t++) n.push([]); for (t = 0; t < e.length; t++) n[e[t].row].push(e[t]); return n }, o.prototype.computeDisplayEventEnd = function() { return 1 === this.dayGrid.colCnt }, o
        }(d),
        h = function(e) {
            function r() { return null !== e && e.apply(this, arguments) || this }
            return n(r, e), r.prototype.attachSegs = function(e, n) {
                var r = n.sourceSeg,
                    i = this.rowStructs = this.renderSegRows(e);
                this.dayGrid.rowEls.forEach(function(e, n) {
                    var o, s, a = t.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>');
                    r && r.row === n ? o = r.el : (o = e.querySelector(".fc-content-skeleton tbody")) || (o = e.querySelector(".fc-content-skeleton table")), s = o.getBoundingClientRect().top - e.getBoundingClientRect().top, a.style.top = s + "px", a.querySelector("table").appendChild(i[n].tbodyEl), e.appendChild(a)
                })
            }, r
        }(p),
        f = function(e) {
            function r(t) { var n = e.call(this, t.context) || this; return n.fillSegTag = "td", n.dayGrid = t, n }
            return n(r, e), r.prototype.renderSegs = function(t, n) { "bgEvent" === t && (n = n.filter(function(e) { return e.eventRange.def.allDay })), e.prototype.renderSegs.call(this, t, n) }, r.prototype.attachSegs = function(e, t) { var n, r, i, o = []; for (n = 0; n < t.length; n++) r = t[n], i = this.renderFillRow(e, r), this.dayGrid.rowEls[r.row].appendChild(i), o.push(i); return o }, r.prototype.renderFillRow = function(e, n) {
                var r, i, o, s = this.dayGrid,
                    a = s.colCnt,
                    l = s.isRtl,
                    c = l ? a - 1 - n.lastCol : n.firstCol,
                    u = (l ? a - 1 - n.firstCol : n.lastCol) + 1;
                r = "businessHours" === e ? "bgevent" : e.toLowerCase(), o = (i = t.htmlToElement('<div class="fc-' + r + '-skeleton"><table><tr></tr></table></div>')).getElementsByTagName("tr")[0], c > 0 && t.appendToElement(o, new Array(c + 1).join("<td></td>")), n.el.colSpan = u - c, o.appendChild(n.el), u < a && t.appendToElement(o, new Array(a - u + 1).join("<td></td>"));
                var d = s.renderProps.renderIntroHtml();
                return d && (s.isRtl ? t.appendToElement(o, d) : t.prependToElement(o, d)), i
            }, r
        }(t.FillRenderer),
        g = function(e) {
            function r(n, r) {
                var i = e.call(this, n, r) || this,
                    o = i.eventRenderer = new v(i),
                    s = i.renderFrame = t.memoizeRendering(i._renderFrame);
                return i.renderFgEvents = t.memoizeRendering(o.renderSegs.bind(o), o.unrender.bind(o), [s]), i.renderEventSelection = t.memoizeRendering(o.selectByInstanceId.bind(o), o.unselectByInstanceId.bind(o), [i.renderFgEvents]), i.renderEventDrag = t.memoizeRendering(o.hideByHash.bind(o), o.showByHash.bind(o), [s]), i.renderEventResize = t.memoizeRendering(o.hideByHash.bind(o), o.showByHash.bind(o), [s]), n.calendar.registerInteractiveComponent(i, { el: i.el, useEventCenter: !1 }), i
            }
            return n(r, e), r.prototype.render = function(e) { this.renderFrame(e.date), this.renderFgEvents(e.fgSegs), this.renderEventSelection(e.eventSelection), this.renderEventDrag(e.eventDragInstances), this.renderEventResize(e.eventResizeInstances) }, r.prototype.destroy = function() { e.prototype.destroy.call(this), this.renderFrame.unrender(), this.calendar.unregisterInteractiveComponent(this) }, r.prototype._renderFrame = function(e) {
                var n = this,
                    r = n.theme,
                    i = n.dateEnv.format(e, t.createFormatter(this.opt("dayPopoverFormat")));
                this.el.innerHTML = '<div class="fc-header ' + r.getClass("popoverHeader") + '"><span class="fc-title">' + t.htmlEscape(i) + '</span><span class="fc-close ' + r.getIconClass("close") + '"></span></div><div class="fc-body ' + r.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>', this.segContainerEl = this.el.querySelector(".fc-event-container")
            }, r.prototype.queryHit = function(e, n, r, i) { var o = this.props.date; if (e < r && n < i) return { component: this, dateSpan: { allDay: !0, range: { start: o, end: t.addDays(o, 1) } }, dayEl: this.el, rect: { left: 0, top: 0, right: r, bottom: i }, layer: 1 } }, r
        }(t.DateComponent),
        v = function(e) {
            function r(t) { var n = e.call(this, t.context) || this; return n.dayTile = t, n }
            return n(r, e), r.prototype.attachSegs = function(e) {
                for (var t = 0, n = e; t < n.length; t++) {
                    var r = n[t];
                    this.dayTile.segContainerEl.appendChild(r.el)
                }
            }, r.prototype.detachSegs = function(e) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    t.removeElement(i.el)
                }
            }, r
        }(d),
        m = function() {
            function e(e) { this.context = e }
            return e.prototype.renderHtml = function(e) {
                var t = [];
                e.renderIntroHtml && t.push(e.renderIntroHtml());
                for (var n = 0, r = e.cells; n < r.length; n++) {
                    var i = r[n];
                    t.push(o(i.date, e.dateProfile, this.context, i.htmlAttrs))
                }
                return e.cells.length || t.push('<td class="fc-day ' + this.context.theme.getClass("widgetContent") + '"></td>'), "rtl" === this.context.options.dir && t.reverse(), "<tr>" + t.join("") + "</tr>"
            }, e
        }(),
        y = t.createFormatter({ day: "numeric" }),
        E = t.createFormatter({ week: "numeric" }),
        S = function(e) {
            function r(n, r, i) {
                var o = e.call(this, n, r) || this;
                o.bottomCoordPadding = 0, o.isCellSizesDirty = !1;
                var s = o.eventRenderer = new p(o),
                    a = o.fillRenderer = new f(o);
                o.mirrorRenderer = new h(o);
                var l = o.renderCells = t.memoizeRendering(o._renderCells, o._unrenderCells);
                return o.renderBusinessHours = t.memoizeRendering(a.renderSegs.bind(a, "businessHours"), a.unrender.bind(a, "businessHours"), [l]), o.renderDateSelection = t.memoizeRendering(a.renderSegs.bind(a, "highlight"), a.unrender.bind(a, "highlight"), [l]), o.renderBgEvents = t.memoizeRendering(a.renderSegs.bind(a, "bgEvent"), a.unrender.bind(a, "bgEvent"), [l]), o.renderFgEvents = t.memoizeRendering(s.renderSegs.bind(s), s.unrender.bind(s), [l]), o.renderEventSelection = t.memoizeRendering(s.selectByInstanceId.bind(s), s.unselectByInstanceId.bind(s), [o.renderFgEvents]), o.renderEventDrag = t.memoizeRendering(o._renderEventDrag, o._unrenderEventDrag, [l]), o.renderEventResize = t.memoizeRendering(o._renderEventResize, o._unrenderEventResize, [l]), o.renderProps = i, o
            }
            return n(r, e), r.prototype.render = function(e) {
                var t = e.cells;
                this.rowCnt = t.length, this.colCnt = t[0].length, this.renderCells(t, e.isRigid), this.renderBusinessHours(e.businessHourSegs), this.renderDateSelection(e.dateSelectionSegs), this.renderBgEvents(e.bgEventSegs), this.renderFgEvents(e.fgEventSegs), this.renderEventSelection(e.eventSelection), this.renderEventDrag(e.eventDrag), this.renderEventResize(e.eventResize), this.segPopoverTile && this.updateSegPopoverTile()
            }, r.prototype.destroy = function() { e.prototype.destroy.call(this), this.renderCells.unrender() }, r.prototype.getCellRange = function(e, n) { var r = this.props.cells[e][n].date; return { start: r, end: t.addDays(r, 1) } }, r.prototype.updateSegPopoverTile = function(e, t) {
                var n = this.props;
                this.segPopoverTile.receiveProps({ date: e || this.segPopoverTile.props.date, fgSegs: t || this.segPopoverTile.props.fgSegs, eventSelection: n.eventSelection, eventDragInstances: n.eventDrag ? n.eventDrag.affectedInstances : null, eventResizeInstances: n.eventResize ? n.eventResize.affectedInstances : null })
            }, r.prototype._renderCells = function(e, n) {
                var r, i, o = this,
                    s = o.view,
                    a = o.dateEnv,
                    l = this,
                    c = l.rowCnt,
                    u = l.colCnt,
                    d = "";
                for (r = 0; r < c; r++) d += this.renderDayRowHtml(r, n);
                for (this.el.innerHTML = d, this.rowEls = t.findElements(this.el, ".fc-row"), this.cellEls = t.findElements(this.el, ".fc-day, .fc-disabled-day"), this.isRtl && this.cellEls.reverse(), this.rowPositions = new t.PositionCache(this.el, this.rowEls, !1, !0), this.colPositions = new t.PositionCache(this.el, this.cellEls.slice(0, u), !0, !1), r = 0; r < c; r++)
                    for (i = 0; i < u; i++) this.publiclyTrigger("dayRender", [{ date: a.toDate(e[r][i].date), el: this.getCellEl(r, i), view: s }]);
                this.isCellSizesDirty = !0
            }, r.prototype._unrenderCells = function() { this.removeSegPopover() }, r.prototype.renderDayRowHtml = function(e, t) {
                var n = this.theme,
                    r = ["fc-row", "fc-week", n.getClass("dayRow")];
                t && r.push("fc-rigid");
                var i = new m(this.context);
                return '<div class="' + r.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + i.renderHtml({ cells: this.props.cells[e], dateProfile: this.props.dateProfile, renderIntroHtml: this.renderProps.renderBgIntroHtml }) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(e) + "</thead>" : "") + "</table></div></div>"
            }, r.prototype.getIsNumbersVisible = function() { return this.getIsDayNumbersVisible() || this.renderProps.cellWeekNumbersVisible || this.renderProps.colWeekNumbersVisible }, r.prototype.getIsDayNumbersVisible = function() { return this.rowCnt > 1 }, r.prototype.renderNumberTrHtml = function(e) { var t = this.renderProps.renderNumberIntroHtml(e, this); return "<tr>" + (this.isRtl ? "" : t) + this.renderNumberCellsHtml(e) + (this.isRtl ? t : "") + "</tr>" }, r.prototype.renderNumberCellsHtml = function(e) { var t, n, r = []; for (t = 0; t < this.colCnt; t++) n = this.props.cells[e][t].date, r.push(this.renderNumberCellHtml(n)); return this.isRtl && r.reverse(), r.join("") }, r.prototype.renderNumberCellHtml = function(e) {
                var n, r, i = this,
                    o = i.view,
                    s = i.dateEnv,
                    a = "",
                    l = t.rangeContainsMarker(this.props.dateProfile.activeRange, e),
                    c = this.getIsDayNumbersVisible() && l;
                return c || this.renderProps.cellWeekNumbersVisible ? ((n = t.getDayClasses(e, this.props.dateProfile, this.context)).unshift("fc-day-top"), this.renderProps.cellWeekNumbersVisible && (r = s.weekDow), a += '<td class="' + n.join(" ") + '"' + (l ? ' data-date="' + s.formatIso(e, { omitTime: !0 }) + '"' : "") + ">", this.renderProps.cellWeekNumbersVisible && e.getUTCDay() === r && (a += t.buildGotoAnchorHtml(o, { date: e, type: "week" }, { class: "fc-week-number" }, s.format(e, E))), c && (a += t.buildGotoAnchorHtml(o, e, { class: "fc-day-number" }, s.format(e, y))), a += "</td>") : "<td></td>"
            }, r.prototype.updateSize = function(e) {
                var t = this,
                    n = t.fillRenderer,
                    r = t.eventRenderer,
                    i = t.mirrorRenderer;
                (e || this.isCellSizesDirty || this.view.calendar.isEventsUpdated) && (this.buildPositionCaches(), this.isCellSizesDirty = !1), n.computeSizes(e), r.computeSizes(e), i.computeSizes(e), n.assignSizes(e), r.assignSizes(e), i.assignSizes(e)
            }, r.prototype.buildPositionCaches = function() { this.buildColPositions(), this.buildRowPositions() }, r.prototype.buildColPositions = function() { this.colPositions.build() }, r.prototype.buildRowPositions = function() { this.rowPositions.build(), this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding }, r.prototype.positionToHit = function(e, t) {
                var n = this,
                    r = n.colPositions,
                    i = n.rowPositions,
                    o = r.leftToIndex(e),
                    s = i.topToIndex(t);
                if (null != s && null != o) return { row: s, col: o, dateSpan: { range: this.getCellRange(s, o), allDay: !0 }, dayEl: this.getCellEl(s, o), relativeRect: { left: r.lefts[o], right: r.rights[o], top: i.tops[s], bottom: i.bottoms[s] } }
            }, r.prototype.getCellEl = function(e, t) { return this.cellEls[e * this.colCnt + t] }, r.prototype._renderEventDrag = function(e) { e && (this.eventRenderer.hideByHash(e.affectedInstances), this.fillRenderer.renderSegs("highlight", e.segs)) }, r.prototype._unrenderEventDrag = function(e) { e && (this.eventRenderer.showByHash(e.affectedInstances), this.fillRenderer.unrender("highlight")) }, r.prototype._renderEventResize = function(e) { e && (this.eventRenderer.hideByHash(e.affectedInstances), this.fillRenderer.renderSegs("highlight", e.segs), this.mirrorRenderer.renderSegs(e.segs, { isResizing: !0, sourceSeg: e.sourceSeg })) }, r.prototype._unrenderEventResize = function(e) { e && (this.eventRenderer.showByHash(e.affectedInstances), this.fillRenderer.unrender("highlight"), this.mirrorRenderer.unrender(e.segs, { isResizing: !0, sourceSeg: e.sourceSeg })) }, r.prototype.removeSegPopover = function() { this.segPopover && this.segPopover.hide() }, r.prototype.limitRows = function(e) { var t, n, r = this.eventRenderer.rowStructs || []; for (t = 0; t < r.length; t++) this.unlimitRow(t), !1 !== (n = !!e && ("number" == typeof e ? e : this.computeRowLevelLimit(t))) && this.limitRow(t, n) }, r.prototype.computeRowLevelLimit = function(e) {
                var n, r, i = this.rowEls[e].getBoundingClientRect().bottom,
                    o = t.findChildren(this.eventRenderer.rowStructs[e].tbodyEl);
                for (n = 0; n < o.length; n++)
                    if ((r = o[n]).classList.remove("fc-limited"), r.getBoundingClientRect().bottom > i) return n;
                return !1
            }, r.prototype.limitRow = function(e, n) {
                var r, i, o, s, a, l, c, u, d, p, h, f, g, v, m, y = this,
                    E = this,
                    S = E.colCnt,
                    b = E.isRtl,
                    D = this.eventRenderer.rowStructs[e],
                    w = [],
                    T = 0,
                    C = function(r) { for (; T < r;)(l = y.getCellSegs(e, T, n)).length && (d = i[n - 1][T], m = y.renderMoreLink(e, T, l), v = t.createElement("div", null, m), d.appendChild(v), w.push(v)), T++ };
                if (n && n < D.segLevels.length) {
                    for (r = D.segLevels[n - 1], i = D.cellMatrix, (o = t.findChildren(D.tbodyEl).slice(n)).forEach(function(e) { e.classList.add("fc-limited") }), s = 0; s < r.length; s++) {
                        a = r[s];
                        var R = b ? S - 1 - a.lastCol : a.firstCol,
                            I = b ? S - 1 - a.firstCol : a.lastCol;
                        for (C(R), u = [], c = 0; T <= I;) l = this.getCellSegs(e, T, n), u.push(l), c += l.length, T++;
                        if (c) {
                            for (p = (d = i[n - 1][R]).rowSpan || 1, h = [], f = 0; f < u.length; f++) g = t.createElement("td", { className: "fc-more-cell", rowSpan: p }), l = u[f], m = this.renderMoreLink(e, R + f, [a].concat(l)), v = t.createElement("div", null, m), g.appendChild(v), h.push(g), w.push(g);
                            d.classList.add("fc-limited"), t.insertAfterElement(d, h), o.push(d)
                        }
                    }
                    C(this.colCnt), D.moreEls = w, D.limitedEls = o
                }
            }, r.prototype.unlimitRow = function(e) {
                var n = this.eventRenderer.rowStructs[e];
                n.moreEls && (n.moreEls.forEach(t.removeElement), n.moreEls = null), n.limitedEls && (n.limitedEls.forEach(function(e) { e.classList.remove("fc-limited") }), n.limitedEls = null)
            }, r.prototype.renderMoreLink = function(e, n, r) {
                var i = this,
                    o = this,
                    s = o.view,
                    a = o.dateEnv,
                    l = t.createElement("a", { className: "fc-more" });
                return l.innerText = this.getMoreLinkText(r.length), l.addEventListener("click", function(t) {
                    var o = i.opt("eventLimitClick"),
                        l = i.isRtl ? i.colCnt - n - 1 : n,
                        c = i.props.cells[e][l].date,
                        u = t.currentTarget,
                        d = i.getCellEl(e, n),
                        p = i.getCellSegs(e, n),
                        h = i.resliceDaySegs(p, c),
                        f = i.resliceDaySegs(r, c);
                    "function" == typeof o && (o = i.publiclyTrigger("eventLimitClick", [{ date: a.toDate(c), allDay: !0, dayEl: d, moreEl: u, segs: h, hiddenSegs: f, jsEvent: t, view: s }])), "popover" === o ? i.showSegPopover(e, n, u, h) : "string" == typeof o && s.calendar.zoomTo(c, o)
                }), l
            }, r.prototype.showSegPopover = function(e, n, r, i) {
                var o, s, a = this,
                    l = this,
                    c = l.calendar,
                    d = l.view,
                    p = l.theme,
                    h = this.isRtl ? this.colCnt - n - 1 : n,
                    f = r.parentNode;
                o = 1 === this.rowCnt ? d.el : this.rowEls[e], s = { className: "fc-more-popover " + p.getClass("popover"), parentEl: d.el, top: t.computeRect(o).top, autoHide: !0, content: function(t) { a.segPopoverTile = new g(a.context, t), a.updateSegPopoverTile(a.props.cells[e][h].date, i) }, hide: function() { a.segPopoverTile.destroy(), a.segPopoverTile = null, a.segPopover.destroy(), a.segPopover = null } }, this.isRtl ? s.right = t.computeRect(f).right + 1 : s.left = t.computeRect(f).left - 1, this.segPopover = new u(s), this.segPopover.show(), c.releaseAfterSizingTriggers()
            }, r.prototype.resliceDaySegs = function(e, n) {
                for (var r = n, i = { start: r, end: t.addDays(r, 1) }, o = [], s = 0, a = e; s < a.length; s++) {
                    var c = a[s],
                        u = c.eventRange,
                        d = u.range,
                        p = t.intersectRanges(d, i);
                    p && o.push(l({}, c, { eventRange: { def: u.def, ui: l({}, u.ui, { durationEditable: !1 }), instance: u.instance, range: p }, isStart: c.isStart && p.start.valueOf() === d.start.valueOf(), isEnd: c.isEnd && p.end.valueOf() === d.end.valueOf() }))
                }
                return o
            }, r.prototype.getMoreLinkText = function(e) { var t = this.opt("eventLimitText"); return "function" == typeof t ? t(e) : "+" + e + " " + t }, r.prototype.getCellSegs = function(e, t, n) { for (var r, i = this.eventRenderer.rowStructs[e].segMatrix, o = n || 0, s = []; o < i.length;)(r = i[o][t]) && s.push(r), o++; return s }, r
        }(t.DateComponent),
        b = t.createFormatter({ week: "numeric" }),
        D = function(e) {
            function r(n, r, i, o) {
                var s = e.call(this, n, r, i, o) || this;
                s.renderHeadIntroHtml = function() { var e = s.theme; return s.colWeekNumbersVisible ? '<th class="fc-week-number ' + e.getClass("widgetHeader") + '" ' + s.weekNumberStyleAttr() + "><span>" + t.htmlEscape(s.opt("weekLabel")) + "</span></th>" : "" }, s.renderDayGridNumberIntroHtml = function(e, n) {
                    var r = s.dateEnv,
                        i = n.props.cells[e][0].date;
                    return s.colWeekNumbersVisible ? '<td class="fc-week-number" ' + s.weekNumberStyleAttr() + ">" + t.buildGotoAnchorHtml(s, { date: i, type: "week", forceOff: 1 === n.colCnt }, r.format(i, b)) + "</td>" : ""
                }, s.renderDayGridBgIntroHtml = function() { var e = s.theme; return s.colWeekNumbersVisible ? '<td class="fc-week-number ' + e.getClass("widgetContent") + '" ' + s.weekNumberStyleAttr() + "></td>" : "" }, s.renderDayGridIntroHtml = function() { return s.colWeekNumbersVisible ? '<td class="fc-week-number" ' + s.weekNumberStyleAttr() + "></td>" : "" }, s.el.classList.add("fc-dayGrid-view"), s.el.innerHTML = s.renderSkeletonHtml(), s.scroller = new t.ScrollComponent("hidden", "auto");
                var a = s.scroller.el;
                s.el.querySelector(".fc-body > tr > td").appendChild(a), a.classList.add("fc-day-grid-container");
                var l = t.createElement("div", { className: "fc-day-grid" });
                a.appendChild(l);
                var c;
                return s.opt("weekNumbers") ? s.opt("weekNumbersWithinDays") ? (c = !0, s.colWeekNumbersVisible = !1) : (c = !1, s.colWeekNumbersVisible = !0) : (s.colWeekNumbersVisible = !1, c = !1), s.dayGrid = new S(s.context, l, { renderNumberIntroHtml: s.renderDayGridNumberIntroHtml, renderBgIntroHtml: s.renderDayGridBgIntroHtml, renderIntroHtml: s.renderDayGridIntroHtml, colWeekNumbersVisible: s.colWeekNumbersVisible, cellWeekNumbersVisible: c }), s
            }
            return n(r, e), r.prototype.destroy = function() { e.prototype.destroy.call(this), this.dayGrid.destroy(), this.scroller.destroy() }, r.prototype.renderSkeletonHtml = function() { var e = this.theme; return '<table class="' + e.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + e.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + e.getClass("widgetContent") + '"></td></tr></tbody></table>' }, r.prototype.weekNumberStyleAttr = function() { return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : "" }, r.prototype.hasRigidRows = function() { var e = this.opt("eventLimit"); return e && "number" != typeof e }, r.prototype.updateSize = function(t, n, r) { e.prototype.updateSize.call(this, t, n, r), this.dayGrid.updateSize(t) }, r.prototype.updateBaseSize = function(e, n, r) {
                var i, o, s = this.dayGrid,
                    a = this.opt("eventLimit"),
                    l = this.header ? this.header.el : null;
                s.rowEls ? (this.colWeekNumbersVisible && (this.weekNumberWidth = t.matchCellWidths(t.findElements(this.el, ".fc-week-number"))), this.scroller.clear(), l && t.uncompensateScroll(l), s.removeSegPopover(), a && "number" == typeof a && s.limitRows(a), i = this.computeScrollerHeight(n), this.setGridHeight(i, r), a && "number" != typeof a && s.limitRows(a), r || (this.scroller.setHeight(i), ((o = this.scroller.getScrollbarWidths()).left || o.right) && (l && t.compensateScroll(l, o), i = this.computeScrollerHeight(n), this.scroller.setHeight(i)), this.scroller.lockOverflow(o))) : r || (i = this.computeScrollerHeight(n), this.scroller.setHeight(i))
            }, r.prototype.computeScrollerHeight = function(e) { return e - t.subtractInnerElHeight(this.el, this.scroller.el) }, r.prototype.setGridHeight = function(e, n) { this.opt("monthMode") ? (n && (e *= this.dayGrid.rowCnt / 6), t.distributeHeight(this.dayGrid.rowEls, e, !n)) : n ? t.undistributeHeight(this.dayGrid.rowEls) : t.distributeHeight(this.dayGrid.rowEls, e, !0) }, r.prototype.computeDateScroll = function(e) { return { top: 0 } }, r.prototype.queryDateScroll = function() { return { top: this.scroller.getScrollTop() } }, r.prototype.applyDateScroll = function(e) { void 0 !== e.top && this.scroller.setScrollTop(e.top) }, r
        }(t.View);
    D.prototype.dateProfileGeneratorClass = c;
    var w = function(e) {
            function t(t, n) { var r = e.call(this, t, n.el) || this; return r.slicer = new T, r.dayGrid = n, t.calendar.registerInteractiveComponent(r, { el: r.dayGrid.el }), r }
            return n(t, e), t.prototype.destroy = function() { e.prototype.destroy.call(this), this.calendar.unregisterInteractiveComponent(this) }, t.prototype.render = function(e) {
                var t = this.dayGrid,
                    n = e.dateProfile,
                    r = e.dayTable;
                t.receiveProps(l({}, this.slicer.sliceProps(e, n, e.nextDayThreshold, t, r), { dateProfile: n, cells: r.cells, isRigid: e.isRigid }))
            }, t.prototype.buildPositionCaches = function() { this.dayGrid.buildPositionCaches() }, t.prototype.queryHit = function(e, t) { var n = this.dayGrid.positionToHit(e, t); if (n) return { component: this.dayGrid, dateSpan: n.dateSpan, dayEl: n.dayEl, rect: { left: n.relativeRect.left, right: n.relativeRect.right, top: n.relativeRect.top, bottom: n.relativeRect.bottom }, layer: 0 } }, t
        }(t.DateComponent),
        T = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return n(t, e), t.prototype.sliceRange = function(e, t) { return t.sliceRange(e) }, t
        }(t.Slicer),
        C = function(e) {
            function r(n, r, i, o) { var a = e.call(this, n, r, i, o) || this; return a.buildDayTable = t.memoize(s), a.opt("columnHeader") && (a.header = new t.DayHeader(a.context, a.el.querySelector(".fc-head-container"))), a.simpleDayGrid = new w(a.context, a.dayGrid), a }
            return n(r, e), r.prototype.destroy = function() { e.prototype.destroy.call(this), this.header && this.header.destroy(), this.simpleDayGrid.destroy() }, r.prototype.render = function(t) {
                e.prototype.render.call(this, t);
                var n = this.props.dateProfile,
                    r = this.dayTable = this.buildDayTable(n, this.dateProfileGenerator);
                this.header && this.header.receiveProps({ dateProfile: n, dates: r.headerDates, datesRepDistinctDays: 1 === r.rowCnt, renderIntroHtml: this.renderHeadIntroHtml }), this.simpleDayGrid.receiveProps({ dateProfile: n, dayTable: r, businessHours: t.businessHours, dateSelection: t.dateSelection, eventStore: t.eventStore, eventUiBases: t.eventUiBases, eventSelection: t.eventSelection, eventDrag: t.eventDrag, eventResize: t.eventResize, isRigid: this.hasRigidRows(), nextDayThreshold: this.nextDayThreshold })
            }, r
        }(D),
        R = t.createPlugin({ defaultView: "dayGridMonth", views: { dayGrid: C, dayGridDay: { type: "dayGrid", duration: { days: 1 } }, dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } }, dayGridMonth: { type: "dayGrid", duration: { months: 1 }, monthMode: !0, fixedWeekCount: !0 } } });
    e.AbstractDayGridView = D, e.DayBgRow = m, e.DayGrid = S, e.DayGridSlicer = T, e.DayGridView = C, e.SimpleDayGrid = w, e.buildBasicDayTable = s, e.default = R, Object.defineProperty(e, "__esModule", { value: !0 })
}),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : (e = e || self, t(e.FullCalendarInteraction = {}, e.FullCalendar)) }(this, function(e, t) {
    "use strict";

    function n(e, t) {
        function n() { this.constructor = e }
        y(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function r(e) { return 0 === e.button && !e.ctrlKey }

    function i() { S++, setTimeout(function() { S-- }, t.config.touchMouseIgnoreWait) }

    function o() { b++ || window.addEventListener("touchmove", a, { passive: !1 }) }

    function s() {--b || window.removeEventListener("touchmove", a, { passive: !1 }) }

    function a(e) { D && e.preventDefault() }

    function l(e) { var t = e.tagName; return "HTML" === t || "BODY" === t }

    function c(e, n) { return !e && !n || Boolean(e) === Boolean(n) && t.isDateSpansEqual(e.dateSpan, n.dateSpan) }

    function u(e) { var t = e.opt("selectLongPressDelay"); return null == t && (t = e.opt("longPressDelay")), t }

    function d(e, n, r) {
        var i = e.dateSpan,
            o = n.dateSpan,
            s = [i.range.start, i.range.end, o.range.start, o.range.end];
        s.sort(t.compareNumbers);
        for (var a = {}, l = 0, c = r; l < c.length; l++) {
            var u = (0, c[l])(e, n);
            if (!1 === u) return null;
            u && E(a, u)
        }
        return a.range = { start: s[0], end: s[3] }, a.allDay = i.allDay, a
    }

    function p(e, n, r) {
        var i = e.dateSpan,
            o = n.dateSpan,
            s = i.range.start,
            a = o.range.start,
            l = {};
        i.allDay !== o.allDay && (l.allDay = o.allDay, l.hasEnd = n.component.opt("allDayMaintainDuration"), o.allDay && (s = t.startOfDay(s)));
        var c = t.diffDates(s, a, e.component.dateEnv, e.component === n.component ? e.component.largeUnit : null);
        c.milliseconds && (l.allDay = !1);
        for (var u = { startDelta: c, endDelta: c, standardProps: l }, d = 0, p = r; d < p.length; d++)(0, p[d])(u, e, n);
        return u
    }

    function h(e) { var t = e.opt("eventLongPressDelay"); return null == t && (t = e.opt("longPressDelay")), t }

    function f(e, n, r, i, o) {
        for (var s = e.component.dateEnv, a = e.dateSpan.range.start, l = n.dateSpan.range.start, c = t.diffDates(a, l, s, e.component.largeUnit), u = {}, d = 0, p = o; d < p.length; d++) {
            var h = (0, p[d])(e, n);
            if (!1 === h) return null;
            h && E(u, h)
        }
        if (r) { if (s.add(i.start, c) < i.end) return u.startDelta = c, u } else if (s.add(i.end, c) > i.start) return u.endDelta = c, u;
        return null
    }

    function g(e, n, r) {
        for (var i = E({}, n.leftoverProps), o = 0, s = r.pluginSystem.hooks.externalDefTransforms; o < s.length; o++) {
            var a = s[o];
            E(i, a(e, n))
        }
        var l = t.parseEventDef(i, n.sourceId, e.allDay, r.opt("forceEventDuration") || Boolean(n.duration), r),
            c = e.range.start;
        e.allDay && n.startTime && (c = r.dateEnv.add(c, n.startTime));
        var u = n.duration ? r.dateEnv.add(c, n.duration) : r.getDefaultEventEnd(e.allDay, c);
        return { def: l, instance: t.createEventInstance(l.defId, { start: c, end: u }) }
    }

    function v(e) {
        var n = m(e, "event"),
            r = n ? JSON.parse(n) : { create: !1 };
        return t.parseDragMeta(r)
    }

    function m(e, n) {
        var r = t.config.dataAttrPrefix,
            i = (r ? r + "-" : "") + n;
        return e.getAttribute("data-" + i) || ""
    }
    var y = function(e, t) {
            return (y = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
        },
        E = function() { return (E = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++) { t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }).apply(this, arguments) };
    t.config.touchMouseIgnoreWait = 500;
    var S = 0,
        b = 0,
        D = !1,
        w = function() {
            function e(e) {
                var n = this;
                this.subjectEl = null, this.downEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(e) {
                    if (!n.shouldIgnoreMouse() && r(e) && n.tryStart(e)) {
                        var t = n.createEventFromMouse(e, !0);
                        n.emitter.trigger("pointerdown", t), n.initScrollWatch(t), n.shouldIgnoreMove || document.addEventListener("mousemove", n.handleMouseMove), document.addEventListener("mouseup", n.handleMouseUp)
                    }
                }, this.handleMouseMove = function(e) {
                    var t = n.createEventFromMouse(e);
                    n.recordCoords(t), n.emitter.trigger("pointermove", t)
                }, this.handleMouseUp = function(e) { document.removeEventListener("mousemove", n.handleMouseMove), document.removeEventListener("mouseup", n.handleMouseUp), n.emitter.trigger("pointerup", n.createEventFromMouse(e)), n.cleanup() }, this.handleTouchStart = function(e) {
                    if (n.tryStart(e)) {
                        n.isTouchDragging = !0;
                        var t = n.createEventFromTouch(e, !0);
                        n.emitter.trigger("pointerdown", t), n.initScrollWatch(t);
                        var r = e.target;
                        n.shouldIgnoreMove || r.addEventListener("touchmove", n.handleTouchMove), r.addEventListener("touchend", n.handleTouchEnd), r.addEventListener("touchcancel", n.handleTouchEnd), window.addEventListener("scroll", n.handleTouchScroll, !0)
                    }
                }, this.handleTouchMove = function(e) {
                    var t = n.createEventFromTouch(e);
                    n.recordCoords(t), n.emitter.trigger("pointermove", t)
                }, this.handleTouchEnd = function(e) {
                    if (n.isDragging) {
                        var t = e.target;
                        t.removeEventListener("touchmove", n.handleTouchMove), t.removeEventListener("touchend", n.handleTouchEnd), t.removeEventListener("touchcancel", n.handleTouchEnd), window.removeEventListener("scroll", n.handleTouchScroll, !0), n.emitter.trigger("pointerup", n.createEventFromTouch(e)), n.cleanup(), n.isTouchDragging = !1, i()
                    }
                }, this.handleTouchScroll = function() { n.wasTouchScroll = !0 }, this.handleScroll = function(e) {
                    if (!n.shouldIgnoreMove) {
                        var t = window.pageXOffset - n.prevScrollX + n.prevPageX,
                            r = window.pageYOffset - n.prevScrollY + n.prevPageY;
                        n.emitter.trigger("pointermove", { origEvent: e, isTouch: n.isTouchDragging, subjectEl: n.subjectEl, pageX: t, pageY: r, deltaX: t - n.origPageX, deltaY: r - n.origPageY })
                    }
                }, this.containerEl = e, this.emitter = new t.EmitterMixin, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), o()
            }
            return e.prototype.destroy = function() { this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), s() }, e.prototype.tryStart = function(e) {
                var n = this.querySubjectEl(e),
                    r = e.target;
                return !(!n || this.handleSelector && !t.elementClosest(r, this.handleSelector) || (this.subjectEl = n, this.downEl = r, this.isDragging = !0, this.wasTouchScroll = !1, 0))
            }, e.prototype.cleanup = function() { D = !1, this.isDragging = !1, this.subjectEl = null, this.downEl = null, this.destroyScrollWatch() }, e.prototype.querySubjectEl = function(e) { return this.selector ? t.elementClosest(e.target, this.selector) : this.containerEl }, e.prototype.shouldIgnoreMouse = function() { return S || this.isTouchDragging }, e.prototype.cancelTouchScroll = function() { this.isDragging && (D = !0) }, e.prototype.initScrollWatch = function(e) { this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0)) }, e.prototype.recordCoords = function(e) { this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset) }, e.prototype.destroyScrollWatch = function() { this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0) }, e.prototype.createEventFromMouse = function(e, t) {
                var n = 0,
                    r = 0;
                return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), { origEvent: e, isTouch: !1, subjectEl: this.subjectEl, pageX: e.pageX, pageY: e.pageY, deltaX: n, deltaY: r }
            }, e.prototype.createEventFromTouch = function(e, t) {
                var n, r, i = e.touches,
                    o = 0,
                    s = 0;
                return i && i.length ? (n = i[0].pageX, r = i[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (o = n - this.origPageX, s = r - this.origPageY), { origEvent: e, isTouch: !0, subjectEl: this.subjectEl, pageX: n, pageY: r, deltaX: o, deltaY: s }
            }, e
        }(),
        T = function() {
            function e() { this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0 }
            return e.prototype.start = function(e, t, n) { this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition() }, e.prototype.handleMove = function(e, t) { this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition() }, e.prototype.setIsVisible = function(e) { e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e) }, e.prototype.stop = function(e, t) {
                var n = this,
                    r = function() { n.cleanup(), t() };
                e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
            }, e.prototype.doRevertAnimation = function(e, n) {
                var r = this.mirrorEl,
                    i = this.sourceEl.getBoundingClientRect();
                r.style.transition = "top " + n + "ms,left " + n + "ms", t.applyStyle(r, { left: i.left, top: i.top }), t.whenTransitionDone(r, function() { r.style.transition = "", e() })
            }, e.prototype.cleanup = function() { this.mirrorEl && (t.removeElement(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null }, e.prototype.updateElPosition = function() { this.sourceEl && this.isVisible && t.applyStyle(this.getMirrorEl(), { left: this.sourceElRect.left + this.deltaX, top: this.sourceElRect.top + this.deltaY }) }, e.prototype.getMirrorEl = function() {
                var e = this.sourceElRect,
                    n = this.mirrorEl;
                return n || ((n = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), n.classList.add("fc-dragging"), t.applyStyle(n, { position: "fixed", zIndex: this.zIndex, visibility: "", boxSizing: "border-box", width: e.right - e.left, height: e.bottom - e.top, right: "auto", bottom: "auto", margin: 0 }), this.parentNode.appendChild(n)), n
            }, e
        }(),
        C = function(e) {
            function t(t, n) { var r = e.call(this) || this; return r.handleScroll = function() { r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange() }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r }
            return n(t, e), t.prototype.destroy = function() { this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll) }, t.prototype.getScrollTop = function() { return this.scrollTop }, t.prototype.getScrollLeft = function() { return this.scrollLeft }, t.prototype.setScrollTop = function(e) { this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange()) }, t.prototype.setScrollLeft = function(e) { this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange()) }, t.prototype.getClientWidth = function() { return this.clientWidth }, t.prototype.getClientHeight = function() { return this.clientHeight }, t.prototype.getScrollWidth = function() { return this.scrollWidth }, t.prototype.getScrollHeight = function() { return this.scrollHeight }, t.prototype.handleScrollChange = function() {}, t
        }(t.ScrollController),
        R = function(e) {
            function r(n, r) { return e.call(this, new t.ElementScrollController(n), r) || this }
            return n(r, e), r.prototype.getEventTarget = function() { return this.scrollController.el }, r.prototype.computeClientRect = function() { return t.computeInnerRect(this.scrollController.el) }, r
        }(C),
        I = function(e) {
            function r(n) { return e.call(this, new t.WindowScrollController, n) || this }
            return n(r, e), r.prototype.getEventTarget = function() { return window }, r.prototype.computeClientRect = function() { return { left: this.scrollLeft, right: this.scrollLeft + this.clientWidth, top: this.scrollTop, bottom: this.scrollTop + this.clientHeight } }, r.prototype.handleScrollChange = function() { this.clientRect = this.computeClientRect() }, r
        }(C),
        M = "function" == typeof performance ? performance.now : Date.now,
        P = function() {
            function e() {
                var e = this;
                this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
                    if (e.isAnimating) {
                        var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                        if (t) {
                            var n = M();
                            e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n)
                        } else e.isAnimating = !1
                    }
                }
            }
            return e.prototype.start = function(e, t) { this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t)) }, e.prototype.handleMove = function(e, t) {
                if (this.isEnabled) {
                    var n = e - window.pageXOffset,
                        r = t - window.pageYOffset,
                        i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                        o = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                    i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(M()))
                }
            }, e.prototype.stop = function() {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy();
                    this.scrollCaches = null
                }
            }, e.prototype.requestAnimation = function(e) { this.msSinceRequest = e, requestAnimationFrame(this.animate) }, e.prototype.handleSide = function(e, t) {
                var n = e.scrollCache,
                    r = this.edgeThreshold,
                    i = r - e.distance,
                    o = i * i / (r * r) * this.maxVelocity * t,
                    s = 1;
                switch (e.name) {
                    case "left":
                        s = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + o * s);
                        break;
                    case "top":
                        s = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + o * s)
                }
            }, e.prototype.computeBestEdge = function(e, t) {
                for (var n = this.edgeThreshold, r = null, i = 0, o = this.scrollCaches; i < o.length; i++) {
                    var s = o[i],
                        a = s.clientRect,
                        l = e - a.left,
                        c = a.right - e,
                        u = t - a.top,
                        d = a.bottom - t;
                    l >= 0 && c >= 0 && u >= 0 && d >= 0 && (u <= n && this.everMovedUp && s.canScrollUp() && (!r || r.distance > u) && (r = { scrollCache: s, name: "top", distance: u }), d <= n && this.everMovedDown && s.canScrollDown() && (!r || r.distance > d) && (r = { scrollCache: s, name: "bottom", distance: d }), l <= n && this.everMovedLeft && s.canScrollLeft() && (!r || r.distance > l) && (r = { scrollCache: s, name: "left", distance: l }), c <= n && this.everMovedRight && s.canScrollRight() && (!r || r.distance > c) && (r = { scrollCache: s, name: "right", distance: c }))
                }
                return r
            }, e.prototype.buildCaches = function() { return this.queryScrollEls().map(function(e) { return e === window ? new I(!1) : new R(e, !1) }) }, e.prototype.queryScrollEls = function() { for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) { var r = n[t]; "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r))) } return e }, e
        }(),
        H = function(e) {
            function r(n) {
                var r = e.call(this, n) || this;
                r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function(e) { r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, t.preventSelection(document.body), t.preventContextMenu(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.pointer.shouldIgnoreMove || (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e))) }, r.onPointerMove = function(e) {
                    if (r.isInteracting) {
                        if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                            var t = r.minDistance,
                                n = e.deltaX,
                                i = e.deltaY;
                            n * n + i * i >= t * t && r.handleDistanceSurpassed(e)
                        }
                        r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e))
                    }
                }, r.onPointerUp = function(e) { r.isInteracting && (r.isInteracting = !1, t.allowSelection(document.body), t.allowContextMenu(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null)) };
                var i = r.pointer = new w(n);
                return i.emitter.on("pointerdown", r.onPointerDown), i.emitter.on("pointermove", r.onPointerMove), i.emitter.on("pointerup", r.onPointerUp), r.mirror = new T, r.autoScroller = new P, r
            }
            return n(r, e), r.prototype.destroy = function() { this.pointer.destroy() }, r.prototype.startDelay = function(e) { var t = this; "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function() { t.delayTimeoutId = null, t.handleDelayEnd(e) }, this.delay) : this.handleDelayEnd(e) }, r.prototype.handleDelayEnd = function(e) { this.isDelayEnded = !0, this.tryStartDrag(e) }, r.prototype.handleDistanceSurpassed = function(e) { this.isDistanceSurpassed = !0, this.tryStartDrag(e) }, r.prototype.tryStartDrag = function(e) { this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll())) }, r.prototype.tryStopDrag = function(e) { this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e)) }, r.prototype.stopDrag = function(e) { this.isDragging = !1, this.emitter.trigger("dragend", e) }, r.prototype.setIgnoreMove = function(e) { this.pointer.shouldIgnoreMove = e }, r.prototype.setMirrorIsVisible = function(e) { this.mirror.setIsVisible(e) }, r.prototype.setMirrorNeedsRevert = function(e) { this.mirrorNeedsRevert = e }, r.prototype.setAutoScrollEnabled = function(e) { this.autoScroller.isEnabled = e }, r
        }(t.ElementDragging),
        k = function() {
            function e(e) { this.origRect = t.computeRect(e), this.scrollCaches = t.getClippingParents(e).map(function(e) { return new R(e, !0) }) }
            return e.prototype.destroy = function() { for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy() }, e.prototype.computeLeft = function() {
                for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft()
                }
                return e
            }, e.prototype.computeTop = function() {
                for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop()
                }
                return e
            }, e.prototype.isWithinClipping = function(e, n) { for (var r = { left: e, top: n }, i = 0, o = this.scrollCaches; i < o.length; i++) { var s = o[i]; if (!l(s.getEventTarget()) && !t.pointInsideRect(r, s.clientRect)) return !1 } return !0 }, e
        }(),
        _ = function() {
            function e(e, n) {
                var r = this;
                this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(e) {
                    var t = r.dragging;
                    r.initialHit = null, r.movingHit = null, r.finalHit = null, r.prepareHits(), r.processFirstCoord(e), r.initialHit || !r.requireInitial ? (t.setIgnoreMove(!1), r.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
                }, this.handleDragStart = function(e) { r.emitter.trigger("dragstart", e), r.handleMove(e, !0) }, this.handleDragMove = function(e) { r.emitter.trigger("dragmove", e), r.handleMove(e) }, this.handlePointerUp = function(e) { r.releaseHits(), r.emitter.trigger("pointerup", e) }, this.handleDragEnd = function(e) { r.movingHit && r.emitter.trigger("hitupdate", null, !0, e), r.finalHit = r.movingHit, r.movingHit = null, r.emitter.trigger("dragend", e) }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new t.EmitterMixin
            }
            return e.prototype.processFirstCoord = function(e) {
                var n, r = { left: e.pageX, top: e.pageY },
                    i = r,
                    o = e.subjectEl;
                o !== document && (n = t.computeRect(o), i = t.constrainPoint(i, n));
                var s = this.initialHit = this.queryHitForOffset(i.left, i.top);
                if (s) {
                    if (this.useSubjectCenter && n) {
                        var a = t.intersectRects(n, s.rect);
                        a && (i = t.getRectCenter(a))
                    }
                    this.coordAdjust = t.diffPoints(i, r)
                } else this.coordAdjust = { left: 0, top: 0 }
            }, e.prototype.handleMove = function(e, t) { var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);!t && c(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e)) }, e.prototype.prepareHits = function() { this.offsetTrackers = t.mapHash(this.droppableStore, function(e) { return e.component.buildPositionCaches(), new k(e.el) }) }, e.prototype.releaseHits = function() {
                var e = this.offsetTrackers;
                for (var t in e) e[t].destroy();
                this.offsetTrackers = {}
            }, e.prototype.queryHitForOffset = function(e, n) {
                var r = this,
                    i = r.droppableStore,
                    o = r.offsetTrackers,
                    s = null;
                for (var a in i) {
                    var l = i[a].component,
                        c = o[a];
                    if (c.isWithinClipping(e, n)) {
                        var u = c.computeLeft(),
                            d = c.computeTop(),
                            p = e - u,
                            h = n - d,
                            f = c.origRect,
                            g = f.right - f.left,
                            v = f.bottom - f.top;
                        if (p >= 0 && p < g && h >= 0 && h < v) { var m = l.queryHit(p, h, g, v);!m || l.props.dateProfile && !t.rangeContainsRange(l.props.dateProfile.activeRange, m.dateSpan.range) || s && !(m.layer > s.layer) || (m.rect.left += u, m.rect.right += u, m.rect.top += d, m.rect.bottom += d, s = m) }
                    }
                }
                return s
            }, e
        }(),
        O = function(e) {
            function r(n) {
                var r = e.call(this, n) || this;
                r.handlePointerDown = function(e) {
                    var t = r.dragging;
                    t.setIgnoreMove(!r.component.isValidDateDownEl(t.pointer.downEl))
                }, r.handleDragEnd = function(e) {
                    var t = r.component;
                    if (!r.dragging.pointer.wasTouchScroll) {
                        var n = r.hitDragging,
                            i = n.initialHit,
                            o = n.finalHit;
                        i && o && c(i, o) && t.calendar.triggerDateClick(i.dateSpan, i.dayEl, t.view, e.origEvent)
                    }
                };
                var i = n.component;
                r.dragging = new H(i.el), r.dragging.autoScroller.isEnabled = !1;
                var o = r.hitDragging = new _(r.dragging, t.interactionSettingsToStore(n));
                return o.emitter.on("pointerdown", r.handlePointerDown), o.emitter.on("dragend", r.handleDragEnd), r
            }
            return n(r, e), r.prototype.destroy = function() { this.dragging.destroy() }, r
        }(t.Interaction),
        x = function(e) {
            function r(n) {
                var r = e.call(this, n) || this;
                r.dragSelection = null, r.handlePointerDown = function(e) {
                    var t = r,
                        n = t.component,
                        i = t.dragging,
                        o = n.opt("selectable") && n.isValidDateDownEl(e.origEvent.target);
                    i.setIgnoreMove(!o), i.delay = e.isTouch ? u(n) : null
                }, r.handleDragStart = function(e) { r.component.calendar.unselect(e) }, r.handleHitUpdate = function(e, n) {
                    var i = r.component.calendar,
                        o = null,
                        s = !1;
                    e && ((o = d(r.hitDragging.initialHit, e, i.pluginSystem.hooks.dateSelectionTransformers)) && r.component.isDateSelectionValid(o) || (s = !0, o = null)), o ? i.dispatch({ type: "SELECT_DATES", selection: o }) : n || i.dispatch({ type: "UNSELECT_DATES" }), s ? t.disableCursor() : t.enableCursor(), n || (r.dragSelection = o)
                }, r.handlePointerUp = function(e) { r.dragSelection && (r.component.calendar.triggerDateSelect(r.dragSelection, e), r.dragSelection = null) };
                var i = n.component,
                    o = r.dragging = new H(i.el);
                o.touchScrollAllowed = !1, o.minDistance = i.opt("selectMinDistance") || 0, o.autoScroller.isEnabled = i.opt("dragScroll");
                var s = r.hitDragging = new _(r.dragging, t.interactionSettingsToStore(n));
                return s.emitter.on("pointerdown", r.handlePointerDown), s.emitter.on("dragstart", r.handleDragStart), s.emitter.on("hitupdate", r.handleHitUpdate), s.emitter.on("pointerup", r.handlePointerUp), r
            }
            return n(r, e), r.prototype.destroy = function() { this.dragging.destroy() }, r
        }(t.Interaction),
        N = function(e) {
            function r(n) {
                var i = e.call(this, n) || this;
                i.subjectSeg = null, i.isDragging = !1, i.eventRange = null, i.relevantEvents = null, i.receivingCalendar = null, i.validMutation = null, i.mutatedRelevantEvents = null, i.handlePointerDown = function(e) {
                    var n = e.origEvent.target,
                        r = i,
                        o = r.component,
                        s = r.dragging,
                        a = s.mirror,
                        l = o.calendar,
                        c = i.subjectSeg = t.getElSeg(e.subjectEl),
                        u = (i.eventRange = c.eventRange).instance.instanceId;
                    i.relevantEvents = t.getRelevantEvents(l.state.eventStore, u), s.minDistance = e.isTouch ? 0 : o.opt("eventDragMinDistance"), s.delay = e.isTouch && u !== o.props.eventSelection ? h(o) : null, a.parentNode = l.el, a.revertDuration = o.opt("dragRevertDuration");
                    var d = o.isValidSegDownEl(n) && !t.elementClosest(n, ".fc-resizer");
                    s.setIgnoreMove(!d), i.isDragging = d && e.subjectEl.classList.contains("fc-draggable")
                }, i.handleDragStart = function(e) {
                    var n = i.component.calendar,
                        r = i.eventRange,
                        o = r.instance.instanceId;
                    e.isTouch ? o !== i.component.props.eventSelection && n.dispatch({ type: "SELECT_EVENT", eventInstanceId: o }) : n.dispatch({ type: "UNSELECT_EVENT" }), i.isDragging && (n.unselect(e), n.publiclyTrigger("eventDragStart", [{ el: i.subjectSeg.el, event: new t.EventApi(n, r.def, r.instance), jsEvent: e.origEvent, view: i.component.view }]))
                }, i.handleHitUpdate = function(e, n) {
                    if (i.isDragging) {
                        var r = i.relevantEvents,
                            o = i.hitDragging.initialHit,
                            s = i.component.calendar,
                            a = null,
                            l = null,
                            u = null,
                            d = !1,
                            h = { affectedEvents: r, mutatedEvents: t.createEmptyEventStore(), isEvent: !0, origSeg: i.subjectSeg };
                        if (e) {
                            var f = e.component;
                            s === (a = f.calendar) || f.opt("editable") && f.opt("droppable") ? (l = p(o, e, a.pluginSystem.hooks.eventDragMutationMassagers)) && (u = t.applyMutationToEventStore(r, a.eventUiBases, l, a), h.mutatedEvents = u, f.isInteractionValid(h) || (d = !0, l = null, u = null, h.mutatedEvents = t.createEmptyEventStore())) : a = null
                        }
                        i.displayDrag(a, h), d ? t.disableCursor() : t.enableCursor(), n || (s === a && c(o, e) && (l = null), i.dragging.setMirrorNeedsRevert(!l), i.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-mirror")), i.receivingCalendar = a, i.validMutation = l, i.mutatedRelevantEvents = u)
                    }
                }, i.handlePointerUp = function() { i.isDragging || i.cleanup() }, i.handleDragEnd = function(e) {
                    if (i.isDragging) {
                        var n = i.component.calendar,
                            r = i.component.view,
                            o = i.receivingCalendar,
                            s = i.eventRange.def,
                            a = i.eventRange.instance,
                            l = new t.EventApi(n, s, a),
                            c = i.relevantEvents,
                            u = i.mutatedRelevantEvents,
                            d = i.hitDragging.finalHit;
                        if (i.clearDrag(), n.publiclyTrigger("eventDragStop", [{ el: i.subjectSeg.el, event: l, jsEvent: e.origEvent, view: r }]), i.validMutation) {
                            if (o === n) {
                                n.dispatch({ type: "MERGE_EVENTS", eventStore: u });
                                for (var p = {}, h = 0, f = n.pluginSystem.hooks.eventDropTransformers; h < f.length; h++) {
                                    var g = f[h];
                                    E(p, g(i.validMutation, n))
                                }
                                E(p, { el: e.subjectEl, delta: i.validMutation.startDelta, oldEvent: l, event: new t.EventApi(n, u.defs[s.defId], a ? u.instances[a.instanceId] : null), revert: function() { n.dispatch({ type: "MERGE_EVENTS", eventStore: c }) }, jsEvent: e.origEvent, view: r }), n.publiclyTrigger("eventDrop", [p])
                            } else if (o) {
                                n.publiclyTrigger("eventLeave", [{ draggedEl: e.subjectEl, event: l, view: r }]), n.dispatch({ type: "REMOVE_EVENT_INSTANCES", instances: i.mutatedRelevantEvents.instances }), o.dispatch({ type: "MERGE_EVENTS", eventStore: i.mutatedRelevantEvents }), e.isTouch && o.dispatch({ type: "SELECT_EVENT", eventInstanceId: a.instanceId });
                                var v = o.buildDatePointApi(d.dateSpan);
                                v.draggedEl = e.subjectEl, v.jsEvent = e.origEvent, v.view = d.component, o.publiclyTrigger("drop", [v]), o.publiclyTrigger("eventReceive", [{ draggedEl: e.subjectEl, event: new t.EventApi(o, u.defs[s.defId], u.instances[a.instanceId]), view: d.component }])
                            }
                        } else n.publiclyTrigger("_noEventDrop")
                    }
                    i.cleanup()
                };
                var o = i.component,
                    s = i.dragging = new H(o.el);
                s.pointer.selector = r.SELECTOR, s.touchScrollAllowed = !1, s.autoScroller.isEnabled = o.opt("dragScroll");
                var a = i.hitDragging = new _(i.dragging, t.interactionSettingsStore);
                return a.useSubjectCenter = n.useEventCenter, a.emitter.on("pointerdown", i.handlePointerDown), a.emitter.on("dragstart", i.handleDragStart), a.emitter.on("hitupdate", i.handleHitUpdate), a.emitter.on("pointerup", i.handlePointerUp), a.emitter.on("dragend", i.handleDragEnd), i
            }
            return n(r, e), r.prototype.destroy = function() { this.dragging.destroy() }, r.prototype.displayDrag = function(e, n) {
                var r = this.component.calendar,
                    i = this.receivingCalendar;
                i && i !== e && (i === r ? i.dispatch({ type: "SET_EVENT_DRAG", state: { affectedEvents: n.affectedEvents, mutatedEvents: t.createEmptyEventStore(), isEvent: !0, origSeg: n.origSeg } }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: n })
            }, r.prototype.clearDrag = function() {
                var e = this.component.calendar,
                    t = this.receivingCalendar;
                t && t.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" })
            }, r.prototype.cleanup = function() { this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingCalendar = null, this.validMutation = null, this.mutatedRelevantEvents = null }, r.SELECTOR = ".fc-draggable, .fc-resizable", r
        }(t.Interaction),
        z = function(e) {
            function r(n) {
                var r = e.call(this, n) || this;
                r.draggingSeg = null, r.eventRange = null, r.relevantEvents = null, r.validMutation = null, r.mutatedRelevantEvents = null, r.handlePointerDown = function(e) {
                    var t = r.component,
                        n = r.querySeg(e),
                        i = r.eventRange = n.eventRange;
                    r.dragging.minDistance = t.opt("eventDragMinDistance"), r.dragging.setIgnoreMove(!r.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && r.component.props.eventSelection !== i.instance.instanceId)
                }, r.handleDragStart = function(e) {
                    var n = r.component.calendar,
                        i = r.eventRange;
                    r.relevantEvents = t.getRelevantEvents(n.state.eventStore, r.eventRange.instance.instanceId), r.draggingSeg = r.querySeg(e), n.unselect(), n.publiclyTrigger("eventResizeStart", [{ el: r.draggingSeg.el, event: new t.EventApi(n, i.def, i.instance), jsEvent: e.origEvent, view: r.component.view }])
                }, r.handleHitUpdate = function(e, n, i) {
                    var o = r.component.calendar,
                        s = r.relevantEvents,
                        a = r.hitDragging.initialHit,
                        l = r.eventRange.instance,
                        u = null,
                        d = null,
                        p = !1,
                        h = { affectedEvents: s, mutatedEvents: t.createEmptyEventStore(), isEvent: !0, origSeg: r.draggingSeg };
                    e && (u = f(a, e, i.subjectEl.classList.contains("fc-start-resizer"), l.range, o.pluginSystem.hooks.eventResizeJoinTransforms)), u && (d = t.applyMutationToEventStore(s, o.eventUiBases, u, o), h.mutatedEvents = d, r.component.isInteractionValid(h) || (p = !0, u = null, d = null, h.mutatedEvents = null)), d ? o.dispatch({ type: "SET_EVENT_RESIZE", state: h }) : o.dispatch({ type: "UNSET_EVENT_RESIZE" }), p ? t.disableCursor() : t.enableCursor(), n || (u && c(a, e) && (u = null), r.validMutation = u, r.mutatedRelevantEvents = d)
                }, r.handleDragEnd = function(e) {
                    var n = r.component.calendar,
                        i = r.component.view,
                        o = r.eventRange.def,
                        s = r.eventRange.instance,
                        a = new t.EventApi(n, o, s),
                        l = r.relevantEvents,
                        c = r.mutatedRelevantEvents;
                    n.publiclyTrigger("eventResizeStop", [{ el: r.draggingSeg.el, event: a, jsEvent: e.origEvent, view: i }]), r.validMutation ? (n.dispatch({ type: "MERGE_EVENTS", eventStore: c }), n.publiclyTrigger("eventResize", [{ el: r.draggingSeg.el, startDelta: r.validMutation.startDelta || t.createDuration(0), endDelta: r.validMutation.endDelta || t.createDuration(0), prevEvent: a, event: new t.EventApi(n, c.defs[o.defId], s ? c.instances[s.instanceId] : null), revert: function() { n.dispatch({ type: "MERGE_EVENTS", eventStore: l }) }, jsEvent: e.origEvent, view: i }])) : n.publiclyTrigger("_noEventResize"), r.draggingSeg = null, r.relevantEvents = null, r.validMutation = null
                };
                var i = n.component,
                    o = r.dragging = new H(i.el);
                o.pointer.selector = ".fc-resizer", o.touchScrollAllowed = !1, o.autoScroller.isEnabled = i.opt("dragScroll");
                var s = r.hitDragging = new _(r.dragging, t.interactionSettingsToStore(n));
                return s.emitter.on("pointerdown", r.handlePointerDown), s.emitter.on("dragstart", r.handleDragStart), s.emitter.on("hitupdate", r.handleHitUpdate), s.emitter.on("dragend", r.handleDragEnd), r
            }
            return n(r, e), r.prototype.destroy = function() { this.dragging.destroy() }, r.prototype.querySeg = function(e) { return t.getElSeg(t.elementClosest(e.subjectEl, this.component.fgSegSelector)) }, r
        }(t.Interaction),
        L = function() {
            function e(e) {
                var n = this;
                this.isRecentPointerDateSelect = !1, this.onSelect = function(e) { e.jsEvent && (n.isRecentPointerDateSelect = !0) }, this.onDocumentPointerUp = function(e) {
                    var r = n,
                        i = r.calendar,
                        o = r.documentPointer,
                        s = i.state;
                    if (!o.wasTouchScroll) {
                        if (s.dateSelection && !n.isRecentPointerDateSelect) {
                            var a = i.viewOpt("unselectAuto"),
                                l = i.viewOpt("unselectCancel");
                            !a || a && t.elementClosest(o.downEl, l) || i.unselect(e)
                        }
                        s.eventSelection && !t.elementClosest(o.downEl, N.SELECTOR) && i.dispatch({ type: "UNSELECT_EVENT" })
                    }
                    n.isRecentPointerDateSelect = !1
                }, this.calendar = e;
                var r = this.documentPointer = new w(document);
                r.shouldIgnoreMove = !0, r.shouldWatchScroll = !1, r.emitter.on("pointerup", this.onDocumentPointerUp), e.on("select", this.onSelect)
            }
            return e.prototype.destroy = function() { this.calendar.off("select", this.onSelect), this.documentPointer.destroy() }, e
        }(),
        V = function() {
            function e(e, n) {
                var r = this;
                this.receivingCalendar = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function(e) { r.dragMeta = r.buildDragMeta(e.subjectEl) }, this.handleHitUpdate = function(e, n, i) {
                    var o = r.hitDragging.dragging,
                        s = null,
                        a = null,
                        l = !1,
                        c = { affectedEvents: t.createEmptyEventStore(), mutatedEvents: t.createEmptyEventStore(), isEvent: r.dragMeta.create, origSeg: null };
                    e && (s = e.component.calendar, r.canDropElOnCalendar(i.subjectEl, s) && (a = g(e.dateSpan, r.dragMeta, s), c.mutatedEvents = t.eventTupleToStore(a), (l = !t.isInteractionValid(c, s)) && (c.mutatedEvents = t.createEmptyEventStore(), a = null))), r.displayDrag(s, c), o.setMirrorIsVisible(n || !a || !document.querySelector(".fc-mirror")), l ? t.disableCursor() : t.enableCursor(), n || (o.setMirrorNeedsRevert(!a), r.receivingCalendar = s, r.droppableEvent = a)
                }, this.handleDragEnd = function(e) {
                    var n = r,
                        i = n.receivingCalendar,
                        o = n.droppableEvent;
                    if (r.clearDrag(), i && o) {
                        var s = r.hitDragging.finalHit,
                            a = s.component.view,
                            l = r.dragMeta,
                            c = i.buildDatePointApi(s.dateSpan);
                        c.draggedEl = e.subjectEl, c.jsEvent = e.origEvent, c.view = a, i.publiclyTrigger("drop", [c]), l.create && (i.dispatch({ type: "MERGE_EVENTS", eventStore: t.eventTupleToStore(o) }), e.isTouch && i.dispatch({ type: "SELECT_EVENT", eventInstanceId: o.instance.instanceId }), i.publiclyTrigger("eventReceive", [{ draggedEl: e.subjectEl, event: new t.EventApi(i, o.def, o.instance), view: a }]))
                    }
                    r.receivingCalendar = null, r.droppableEvent = null
                };
                var i = this.hitDragging = new _(e, t.interactionSettingsStore);
                i.requireInitial = !1, i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = n
            }
            return e.prototype.buildDragMeta = function(e) { return "object" == typeof this.suppliedDragMeta ? t.parseDragMeta(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? t.parseDragMeta(this.suppliedDragMeta(e)) : v(e) }, e.prototype.displayDrag = function(e, t) {
                var n = this.receivingCalendar;
                n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e && e.dispatch({ type: "SET_EVENT_DRAG", state: t })
            }, e.prototype.clearDrag = function() { this.receivingCalendar && this.receivingCalendar.dispatch({ type: "UNSET_EVENT_DRAG" }) }, e.prototype.canDropElOnCalendar = function(e, n) { var r = n.opt("dropAccept"); return "function" == typeof r ? r(e) : "string" != typeof r || !r || Boolean(t.elementMatches(e, r)) }, e
        }();
    t.config.dataAttrPrefix = "";
    var A = function() {
            function e(e, n) {
                var r = this;
                void 0 === n && (n = {}), this.handlePointerDown = function(e) {
                    var n = r.dragging,
                        i = r.settings,
                        o = i.minDistance,
                        s = i.longPressDelay;
                    n.minDistance = null != o ? o : e.isTouch ? 0 : t.globalDefaults.eventDragMinDistance, n.delay = e.isTouch ? null != s ? s : t.globalDefaults.longPressDelay : 0
                }, this.handleDragStart = function(e) { e.isTouch && r.dragging.delay && e.subjectEl.classList.contains("fc-event") && r.dragging.mirror.getMirrorEl().classList.add("fc-selected") }, this.settings = n;
                var i = this.dragging = new H(e);
                i.touchScrollAllowed = !1, null != n.itemSelector && (i.pointer.selector = n.itemSelector), null != n.appendTo && (i.mirror.parentNode = n.appendTo), i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), new V(i, n.eventData)
            }
            return e.prototype.destroy = function() { this.dragging.destroy() }, e
        }(),
        B = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(e) { n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e) }, n.handlePointerMove = function(e) { n.shouldIgnoreMove || n.emitter.trigger("dragmove", e) }, n.handlePointerUp = function(e) { n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e) };
                var r = n.pointer = new w(t);
                return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n
            }
            return n(t, e), t.prototype.destroy = function() { this.pointer.destroy() }, t.prototype.setIgnoreMove = function(e) { this.shouldIgnoreMove = e }, t.prototype.setMirrorIsVisible = function(e) {
                if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
                else {
                    var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                    t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
                }
            }, t
        }(t.ElementDragging),
        U = function() {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
                var r = this.dragging = new B(n);
                "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new V(r, t.eventData)
            }
            return e.prototype.destroy = function() { this.dragging.destroy() }, e
        }(),
        G = t.createPlugin({ componentInteractions: [O, x, N, z], calendarInteractions: [L], elementDraggingImpl: H });
    e.Draggable = A, e.FeaturefulElementDragging = H, e.PointerDragging = w, e.ThirdPartyDraggable = U, e.default = G, Object.defineProperty(e, "__esModule", { value: !0 })
}),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core"), require("@fullcalendar/daygrid")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core", "@fullcalendar/daygrid"], t) : (e = e || self, t(e.FullCalendarTimeGrid = {}, e.FullCalendar, e.FullCalendarDayGrid)) }(this, function(e, t, n) {
    "use strict";

    function r(e, t) {
        function n() { this.constructor = e }
        p(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function i(e) {
        var t, n, r, i = [];
        for (t = 0; t < e.length; t++) {
            for (n = e[t], r = 0; r < i.length && a(n, i[r]).length; r++);
            n.level = r, (i[r] || (i[r] = [])).push(n)
        }
        return i
    }

    function o(e) {
        var t, n, r, i, o;
        for (t = 0; t < e.length; t++)
            for (n = e[t], r = 0; r < n.length; r++)
                for (i = n[r], i.forwardSegs = [], o = t + 1; o < e.length; o++) a(i, e[o], i.forwardSegs)
    }

    function s(e) {
        var t, n, r = e.forwardSegs,
            i = 0;
        if (void 0 === e.forwardPressure) {
            for (t = 0; t < r.length; t++) n = r[t], s(n), i = Math.max(i, 1 + n.forwardPressure);
            e.forwardPressure = i
        }
    }

    function a(e, t, n) { void 0 === n && (n = []); for (var r = 0; r < t.length; r++) l(e, t[r]) && n.push(t[r]); return n }

    function l(e, t) { return e.bottom > t.top && e.top < t.bottom }

    function c(e) { var n = t.buildSegCompareObj(e); return n.forwardPressure = e.forwardPressure, n.backwardCoord = e.backwardCoord, n }

    function u(e, t, n) {
        for (var r = [], i = 0, o = e.headerDates; i < o.length; i++) {
            var s = o[i];
            r.push({ start: n.add(s, t.minTime), end: n.add(s, t.maxTime) })
        }
        return r
    }

    function d(e, n) { var r = new t.DaySeries(e.renderRange, n); return new t.DayTable(r, !1) }
    var p = function(e, t) {
            return (p = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
        },
        h = function() { return (h = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++) { t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }).apply(this, arguments) },
        f = function(e) {
            function n(n) { var r = e.call(this, n.context) || this; return r.timeGrid = n, r.fullTimeFormat = t.createFormatter({ hour: "numeric", minute: "2-digit", separator: r.context.options.defaultRangeSeparator }), r }
            return r(n, e), n.prototype.attachSegs = function(e, t) {
                for (var n = this.timeGrid.groupSegsByCol(e), r = 0; r < n.length; r++) n[r] = this.sortEventSegs(n[r]);
                this.segsByCol = n, this.timeGrid.attachSegsByCol(n, this.timeGrid.fgContainerEls)
            }, n.prototype.detachSegs = function(e) { e.forEach(function(e) { t.removeElement(e.el) }), this.segsByCol = null }, n.prototype.computeSegSizes = function(e) {
                var t = this,
                    n = t.timeGrid,
                    r = t.segsByCol,
                    i = n.colCnt;
                if (n.computeSegVerticals(e), r)
                    for (var o = 0; o < i; o++) this.computeSegHorizontals(r[o])
            }, n.prototype.assignSegSizes = function(e) {
                var t = this,
                    n = t.timeGrid,
                    r = t.segsByCol,
                    i = n.colCnt;
                if (n.assignSegVerticals(e), r)
                    for (var o = 0; o < i; o++) this.assignSegCss(r[o])
            }, n.prototype.computeEventTimeFormat = function() { return { hour: "numeric", minute: "2-digit", meridiem: !1 } }, n.prototype.computeDisplayEventEnd = function() { return !0 }, n.prototype.renderSegHtml = function(e, n) {
                var r, i, o, s = e.eventRange,
                    a = s.def,
                    l = s.ui,
                    c = a.allDay,
                    u = l.startEditable,
                    d = e.isStart && l.durationEditable && this.context.options.eventResizableFromStart,
                    p = e.isEnd && l.durationEditable,
                    h = this.getSegClasses(e, u, d || p, n),
                    f = t.cssToStr(this.getSkinCss(l));
                if (h.unshift("fc-time-grid-event"), t.isMultiDayRange(s.range)) {
                    if (e.isStart || e.isEnd) {
                        var g = e.start,
                            v = e.end;
                        r = this._getTimeText(g, v, c), i = this._getTimeText(g, v, c, this.fullTimeFormat), o = this._getTimeText(g, v, c, null, !1)
                    }
                } else r = this.getTimeText(s), i = this.getTimeText(s, this.fullTimeFormat), o = this.getTimeText(s, null, !1);
                return '<a class="' + h.join(" ") + '"' + (a.url ? ' href="' + t.htmlEscape(a.url) + '"' : "") + (f ? ' style="' + f + '"' : "") + '><div class="fc-content">' + (r ? '<div class="fc-time" data-start="' + t.htmlEscape(o) + '" data-full="' + t.htmlEscape(i) + '"><span>' + t.htmlEscape(r) + "</span></div>" : "") + (a.title ? '<div class="fc-title">' + t.htmlEscape(a.title) + "</div>" : "") + "</div>" + (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") + "</a>"
            }, n.prototype.computeSegHorizontals = function(e) { var t, n, r; if (t = i(e), o(t), n = t[0]) { for (r = 0; r < n.length; r++) s(n[r]); for (r = 0; r < n.length; r++) this.computeSegForwardBack(n[r], 0, 0) } }, n.prototype.computeSegForwardBack = function(e, t, n) {
                var r, i = e.forwardSegs;
                if (void 0 === e.forwardCoord)
                    for (i.length ? (this.sortForwardSegs(i), this.computeSegForwardBack(i[0], t + 1, n), e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1, e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1), r = 0; r < i.length; r++) this.computeSegForwardBack(i[r], 0, e.forwardCoord)
            }, n.prototype.sortForwardSegs = function(e) {
                var n = e.map(c),
                    r = [{ field: "forwardPressure", order: -1 }, { field: "backwardCoord", order: 1 }].concat(this.context.view.eventOrderSpecs);
                return n.sort(function(e, n) { return t.compareByFieldSpecs(e, n, r) }), n.map(function(e) { return e._seg })
            }, n.prototype.assignSegCss = function(e) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    t.applyStyle(i.el, this.generateSegCss(i)), i.level > 0 && i.el.classList.add("fc-time-grid-event-inset"), i.eventRange.def.title && i.bottom - i.top < 30 && i.el.classList.add("fc-short")
                }
            }, n.prototype.generateSegCss = function(e) {
                var t, n, r = this.context.options.slotEventOverlap,
                    i = e.backwardCoord,
                    o = e.forwardCoord,
                    s = this.timeGrid.generateSegVerticalCss(e),
                    a = this.timeGrid.isRtl;
                return r && (o = Math.min(1, i + 2 * (o - i))), a ? (t = 1 - o, n = i) : (t = i, n = 1 - o), s.zIndex = e.level + 1, s.left = 100 * t + "%", s.right = 100 * n + "%", r && e.forwardPressure && (s[a ? "marginLeft" : "marginRight"] = 20), s
            }, n
        }(t.FgEventRenderer),
        g = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return r(t, e), t.prototype.attachSegs = function(e, t) { this.segsByCol = this.timeGrid.groupSegsByCol(e), this.timeGrid.attachSegsByCol(this.segsByCol, this.timeGrid.mirrorContainerEls), this.sourceSeg = t.sourceSeg }, t.prototype.generateSegCss = function(t) {
                var n = e.prototype.generateSegCss.call(this, t),
                    r = this.sourceSeg;
                if (r && r.col === t.col) {
                    var i = e.prototype.generateSegCss.call(this, r);
                    n.left = i.left, n.right = i.right, n.marginLeft = i.marginLeft, n.marginRight = i.marginRight
                }
                return n
            }, t
        }(f),
        v = function(e) {
            function t(t) { var n = e.call(this, t.context) || this; return n.timeGrid = t, n }
            return r(t, e), t.prototype.attachSegs = function(e, t) { var n, r = this.timeGrid; return "bgEvent" === e ? n = r.bgContainerEls : "businessHours" === e ? n = r.businessContainerEls : "highlight" === e && (n = r.highlightContainerEls), r.attachSegsByCol(r.groupSegsByCol(t), n), t.map(function(e) { return e.el }) }, t.prototype.computeSegSizes = function(e) { this.timeGrid.computeSegVerticals(e) }, t.prototype.assignSegSizes = function(e) { this.timeGrid.assignSegVerticals(e) }, t
        }(t.FillRenderer),
        m = [{ hours: 1 }, { minutes: 30 }, { minutes: 15 }, { seconds: 30 }, { seconds: 15 }],
        y = function(e) {
            function i(n, r, i) {
                var o = e.call(this, n, r) || this;
                o.isSlatSizesDirty = !1, o.isColSizesDirty = !1, o.renderSlats = t.memoizeRendering(o._renderSlats);
                var s = o.eventRenderer = new f(o),
                    a = o.fillRenderer = new v(o);
                o.mirrorRenderer = new g(o);
                var l = o.renderColumns = t.memoizeRendering(o._renderColumns, o._unrenderColumns);
                return o.renderBusinessHours = t.memoizeRendering(a.renderSegs.bind(a, "businessHours"), a.unrender.bind(a, "businessHours"), [l]), o.renderDateSelection = t.memoizeRendering(o._renderDateSelection, o._unrenderDateSelection, [l]), o.renderFgEvents = t.memoizeRendering(s.renderSegs.bind(s), s.unrender.bind(s), [l]), o.renderBgEvents = t.memoizeRendering(a.renderSegs.bind(a, "bgEvent"), a.unrender.bind(a, "bgEvent"), [l]), o.renderEventSelection = t.memoizeRendering(s.selectByInstanceId.bind(s), s.unselectByInstanceId.bind(s), [o.renderFgEvents]), o.renderEventDrag = t.memoizeRendering(o._renderEventDrag, o._unrenderEventDrag, [l]), o.renderEventResize = t.memoizeRendering(o._renderEventResize, o._unrenderEventResize, [l]), o.processOptions(), r.innerHTML = '<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + o.theme.getClass("widgetHeader") + '" style="display:none" />', o.rootBgContainerEl = r.querySelector(".fc-bg"), o.slatContainerEl = r.querySelector(".fc-slats"), o.bottomRuleEl = r.querySelector(".fc-divider"), o.renderProps = i, o
            }
            return r(i, e), i.prototype.processOptions = function() {
                var e, n, r = this.opt("slotDuration"),
                    i = this.opt("snapDuration");
                r = t.createDuration(r), i = i ? t.createDuration(i) : r, null === (e = t.wholeDivideDurations(r, i)) && (i = r, e = 1), this.slotDuration = r, this.snapDuration = i, this.snapsPerSlot = e, n = this.opt("slotLabelFormat"), Array.isArray(n) && (n = n[n.length - 1]), this.labelFormat = t.createFormatter(n || { hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "short" }), n = this.opt("slotLabelInterval"), this.labelInterval = n ? t.createDuration(n) : this.computeLabelInterval(r)
            }, i.prototype.computeLabelInterval = function(e) {
                var n, r, i;
                for (n = m.length - 1; n >= 0; n--)
                    if (r = t.createDuration(m[n]), null !== (i = t.wholeDivideDurations(r, e)) && i > 1) return r;
                return e
            }, i.prototype.render = function(e) {
                var t = e.cells;
                this.colCnt = t.length, this.renderSlats(e.dateProfile), this.renderColumns(e.cells, e.dateProfile), this.renderBusinessHours(e.businessHourSegs), this.renderDateSelection(e.dateSelectionSegs), this.renderFgEvents(e.fgEventSegs), this.renderBgEvents(e.bgEventSegs), this.renderEventSelection(e.eventSelection), this.renderEventDrag(e.eventDrag), this.renderEventResize(e.eventResize)
            }, i.prototype.destroy = function() { e.prototype.destroy.call(this), this.renderSlats.unrender(), this.renderColumns.unrender() }, i.prototype.updateSize = function(e) {
                var t = this,
                    n = t.fillRenderer,
                    r = t.eventRenderer,
                    i = t.mirrorRenderer;
                (e || this.isSlatSizesDirty) && (this.buildSlatPositions(), this.isSlatSizesDirty = !1), (e || this.isColSizesDirty) && (this.buildColPositions(), this.isColSizesDirty = !1), n.computeSizes(e), r.computeSizes(e), i.computeSizes(e), n.assignSizes(e), r.assignSizes(e), i.assignSizes(e)
            }, i.prototype._renderSlats = function(e) {
                var n = this.theme;
                this.slatContainerEl.innerHTML = '<table class="' + n.getClass("tableGrid") + '">' + this.renderSlatRowHtml(e) + "</table>", this.slatEls = t.findElements(this.slatContainerEl, "tr"), this.slatPositions = new t.PositionCache(this.el, this.slatEls, !1, !0), this.isSlatSizesDirty = !0
            }, i.prototype.renderSlatRowHtml = function(e) { for (var n, r, i, o = this, s = o.dateEnv, a = o.theme, l = o.isRtl, c = "", u = t.startOfDay(e.renderRange.start), d = e.minTime, p = t.createDuration(0); t.asRoughMs(d) < t.asRoughMs(e.maxTime);) n = s.add(u, d), r = null !== t.wholeDivideDurations(p, this.labelInterval), i = '<td class="fc-axis fc-time ' + a.getClass("widgetContent") + '">' + (r ? "<span>" + t.htmlEscape(s.format(n, this.labelFormat)) + "</span>" : "") + "</td>", c += '<tr data-time="' + t.formatIsoTimeString(n) + '"' + (r ? "" : ' class="fc-minor"') + ">" + (l ? "" : i) + '<td class="' + a.getClass("widgetContent") + '"></td>' + (l ? i : "") + "</tr>", d = t.addDurations(d, this.slotDuration), p = t.addDurations(p, this.slotDuration); return c }, i.prototype._renderColumns = function(e, r) {
                var i = this,
                    o = i.theme,
                    s = i.dateEnv,
                    a = i.view,
                    l = new n.DayBgRow(this.context);
                this.rootBgContainerEl.innerHTML = '<table class="' + o.getClass("tableGrid") + '">' + l.renderHtml({ cells: e, dateProfile: r, renderIntroHtml: this.renderProps.renderBgIntroHtml }) + "</table>", this.colEls = t.findElements(this.el, ".fc-day, .fc-disabled-day");
                for (var c = 0; c < this.colCnt; c++) this.publiclyTrigger("dayRender", [{ date: s.toDate(e[c].date), el: this.colEls[c], view: a }]);
                this.isRtl && this.colEls.reverse(), this.colPositions = new t.PositionCache(this.el, this.colEls, !0, !1), this.renderContentSkeleton(), this.isColSizesDirty = !0
            }, i.prototype._unrenderColumns = function() { this.unrenderContentSkeleton() }, i.prototype.renderContentSkeleton = function() {
                var e, n = [];
                n.push(this.renderProps.renderIntroHtml());
                for (var r = 0; r < this.colCnt; r++) n.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');
                this.isRtl && n.reverse(), e = this.contentSkeletonEl = t.htmlToElement('<div class="fc-content-skeleton"><table><tr>' + n.join("") + "</tr></table></div>"), this.colContainerEls = t.findElements(e, ".fc-content-col"), this.mirrorContainerEls = t.findElements(e, ".fc-mirror-container"), this.fgContainerEls = t.findElements(e, ".fc-event-container:not(.fc-mirror-container)"), this.bgContainerEls = t.findElements(e, ".fc-bgevent-container"), this.highlightContainerEls = t.findElements(e, ".fc-highlight-container"), this.businessContainerEls = t.findElements(e, ".fc-business-container"), this.isRtl && (this.colContainerEls.reverse(), this.mirrorContainerEls.reverse(), this.fgContainerEls.reverse(), this.bgContainerEls.reverse(), this.highlightContainerEls.reverse(), this.businessContainerEls.reverse()), this.el.appendChild(e)
            }, i.prototype.unrenderContentSkeleton = function() { t.removeElement(this.contentSkeletonEl) }, i.prototype.groupSegsByCol = function(e) { var t, n = []; for (t = 0; t < this.colCnt; t++) n.push([]); for (t = 0; t < e.length; t++) n[e[t].col].push(e[t]); return n }, i.prototype.attachSegsByCol = function(e, t) {
                var n, r, i;
                for (n = 0; n < this.colCnt; n++)
                    for (r = e[n], i = 0; i < r.length; i++) t[n].appendChild(r[i].el)
            }, i.prototype.getNowIndicatorUnit = function() { return "minute" }, i.prototype.renderNowIndicator = function(e, n) {
                if (this.colContainerEls) {
                    var r, i = this.computeDateTop(n),
                        o = [];
                    for (r = 0; r < e.length; r++) {
                        var s = t.createElement("div", { className: "fc-now-indicator fc-now-indicator-line" });
                        s.style.top = i + "px", this.colContainerEls[e[r].col].appendChild(s), o.push(s)
                    }
                    if (e.length > 0) {
                        var a = t.createElement("div", { className: "fc-now-indicator fc-now-indicator-arrow" });
                        a.style.top = i + "px", this.contentSkeletonEl.appendChild(a), o.push(a)
                    }
                    this.nowIndicatorEls = o
                }
            }, i.prototype.unrenderNowIndicator = function() { this.nowIndicatorEls && (this.nowIndicatorEls.forEach(t.removeElement), this.nowIndicatorEls = null) }, i.prototype.getTotalSlatHeight = function() { return this.slatContainerEl.offsetHeight }, i.prototype.computeDateTop = function(e, n) { return n || (n = t.startOfDay(e)), this.computeTimeTop(e.valueOf() - n.valueOf()) }, i.prototype.computeTimeTop = function(e) {
                var n, r, i = this.slatEls.length,
                    o = this.props.dateProfile,
                    s = (e - t.asRoughMs(o.minTime)) / t.asRoughMs(this.slotDuration);
                return s = Math.max(0, s), s = Math.min(i, s), n = Math.floor(s), n = Math.min(n, i - 1), r = s - n, this.slatPositions.tops[n] + this.slatPositions.getHeight(n) * r
            }, i.prototype.computeSegVerticals = function(e) { var t, n, r, i = this.opt("timeGridEventMinHeight"); for (t = 0; t < e.length; t++) n = e[t], r = this.props.cells[n.col].date, n.top = this.computeDateTop(n.start, r), n.bottom = Math.max(n.top + i, this.computeDateTop(n.end, r)) }, i.prototype.assignSegVerticals = function(e) { var n, r; for (n = 0; n < e.length; n++) r = e[n], t.applyStyle(r.el, this.generateSegVerticalCss(r)) }, i.prototype.generateSegVerticalCss = function(e) { return { top: e.top, bottom: -e.bottom } }, i.prototype.buildPositionCaches = function() { this.buildColPositions(), this.buildSlatPositions() }, i.prototype.buildColPositions = function() { this.colPositions.build() }, i.prototype.buildSlatPositions = function() { this.slatPositions.build() }, i.prototype.positionToHit = function(e, n) {
                var r = this,
                    i = r.dateEnv,
                    o = r.snapsPerSlot,
                    s = r.slatPositions,
                    a = r.colPositions,
                    l = a.leftToIndex(e),
                    c = s.topToIndex(n);
                if (null != l && null != c) {
                    var u = s.tops[c],
                        d = s.getHeight(c),
                        p = (n - u) / d,
                        h = c * o + Math.floor(p * o),
                        f = this.props.cells[l].date,
                        g = t.addDurations(this.props.dateProfile.minTime, t.multiplyDuration(this.snapDuration, h)),
                        v = i.add(f, g);
                    return { col: l, dateSpan: { range: { start: v, end: i.add(v, this.snapDuration) }, allDay: !1 }, dayEl: this.colEls[l], relativeRect: { left: a.lefts[l], right: a.rights[l], top: u, bottom: u + d } }
                }
            }, i.prototype._renderEventDrag = function(e) { e && (this.eventRenderer.hideByHash(e.affectedInstances), e.isEvent ? this.mirrorRenderer.renderSegs(e.segs, { isDragging: !0, sourceSeg: e.sourceSeg }) : this.fillRenderer.renderSegs("highlight", e.segs)) }, i.prototype._unrenderEventDrag = function(e) { e && (this.eventRenderer.showByHash(e.affectedInstances), this.mirrorRenderer.unrender(e.segs, { isDragging: !0, sourceSeg: e.sourceSeg }), this.fillRenderer.unrender("highlight")) }, i.prototype._renderEventResize = function(e) { e && (this.eventRenderer.hideByHash(e.affectedInstances), this.mirrorRenderer.renderSegs(e.segs, { isResizing: !0, sourceSeg: e.sourceSeg })) }, i.prototype._unrenderEventResize = function(e) { e && (this.eventRenderer.showByHash(e.affectedInstances), this.mirrorRenderer.unrender(e.segs, { isResizing: !0, sourceSeg: e.sourceSeg })) }, i.prototype._renderDateSelection = function(e) { e && (this.opt("selectMirror") ? this.mirrorRenderer.renderSegs(e, { isSelecting: !0 }) : this.fillRenderer.renderSegs("highlight", e)) }, i.prototype._unrenderDateSelection = function(e) { this.mirrorRenderer.unrender(e, { isSelecting: !0 }), this.fillRenderer.unrender("highlight") }, i
        }(t.DateComponent),
        E = function(e) {
            function n() { return null !== e && e.apply(this, arguments) || this }
            return r(n, e), n.prototype.getKeyInfo = function() { return { allDay: {}, timed: {} } }, n.prototype.getKeysForDateSpan = function(e) { return e.allDay ? ["allDay"] : ["timed"] }, n.prototype.getKeysForEventDef = function(e) { return e.allDay ? t.hasBgRendering(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"] }, n
        }(t.Splitter),
        S = t.createFormatter({ week: "short" }),
        b = function(e) {
            function i(r, i, o, s) {
                var a = e.call(this, r, i, o, s) || this;
                a.splitter = new E, a.renderHeadIntroHtml = function() {
                    var e, n = a,
                        r = n.theme,
                        i = n.dateEnv,
                        o = a.props.dateProfile.renderRange,
                        s = t.diffDays(o.start, o.end);
                    return a.opt("weekNumbers") ? (e = i.format(o.start, S), '<th class="fc-axis fc-week-number ' + r.getClass("widgetHeader") + '" ' + a.axisStyleAttr() + ">" + t.buildGotoAnchorHtml(a, { date: o.start, type: "week", forceOff: s > 1 }, t.htmlEscape(e)) + "</th>") : '<th class="fc-axis ' + r.getClass("widgetHeader") + '" ' + a.axisStyleAttr() + "></th>"
                }, a.renderTimeGridBgIntroHtml = function() { return '<td class="fc-axis ' + a.theme.getClass("widgetContent") + '" ' + a.axisStyleAttr() + "></td>" }, a.renderTimeGridIntroHtml = function() { return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>" }, a.renderDayGridBgIntroHtml = function() { return '<td class="fc-axis ' + a.theme.getClass("widgetContent") + '" ' + a.axisStyleAttr() + "><span>" + t.getAllDayHtml(a) + "</span></td>" }, a.renderDayGridIntroHtml = function() { return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>" }, a.el.classList.add("fc-timeGrid-view"), a.el.innerHTML = a.renderSkeletonHtml(), a.scroller = new t.ScrollComponent("hidden", "auto");
                var l = a.scroller.el;
                a.el.querySelector(".fc-body > tr > td").appendChild(l), l.classList.add("fc-time-grid-container");
                var c = t.createElement("div", { className: "fc-time-grid" });
                return l.appendChild(c), a.timeGrid = new y(a.context, c, { renderBgIntroHtml: a.renderTimeGridBgIntroHtml, renderIntroHtml: a.renderTimeGridIntroHtml }), a.opt("allDaySlot") && (a.dayGrid = new n.DayGrid(a.context, a.el.querySelector(".fc-day-grid"), { renderNumberIntroHtml: a.renderDayGridIntroHtml, renderBgIntroHtml: a.renderDayGridBgIntroHtml, renderIntroHtml: a.renderDayGridIntroHtml, colWeekNumbersVisible: !1, cellWeekNumbersVisible: !1 }), a.dayGrid.bottomCoordPadding = a.el.querySelector(".fc-divider").offsetHeight), a
            }
            return r(i, e), i.prototype.destroy = function() { e.prototype.destroy.call(this), this.timeGrid.destroy(), this.dayGrid && this.dayGrid.destroy(), this.scroller.destroy() }, i.prototype.renderSkeletonHtml = function() { var e = this.theme; return '<table class="' + e.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + e.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + e.getClass("widgetContent") + '">' + (this.opt("allDaySlot") ? '<div class="fc-day-grid"></div><hr class="fc-divider ' + e.getClass("widgetHeader") + '" />' : "") + "</td></tr></tbody></table>" }, i.prototype.getNowIndicatorUnit = function() { return this.timeGrid.getNowIndicatorUnit() }, i.prototype.unrenderNowIndicator = function() { this.timeGrid.unrenderNowIndicator() }, i.prototype.updateSize = function(t, n, r) { e.prototype.updateSize.call(this, t, n, r), this.timeGrid.updateSize(t), this.dayGrid && this.dayGrid.updateSize(t) }, i.prototype.updateBaseSize = function(e, n, r) {
                var i, o, s, a = this;
                if (this.axisWidth = t.matchCellWidths(t.findElements(this.el, ".fc-axis")), this.timeGrid.colEls) {
                    var l = t.findElements(this.el, ".fc-row").filter(function(e) { return !a.scroller.el.contains(e) });
                    this.timeGrid.bottomRuleEl.style.display = "none", this.scroller.clear(), l.forEach(t.uncompensateScroll), this.dayGrid && (this.dayGrid.removeSegPopover(), (i = this.opt("eventLimit")) && "number" != typeof i && (i = 5), i && this.dayGrid.limitRows(i)), r || (o = this.computeScrollerHeight(n), this.scroller.setHeight(o), ((s = this.scroller.getScrollbarWidths()).left || s.right) && (l.forEach(function(e) { t.compensateScroll(e, s) }), o = this.computeScrollerHeight(n), this.scroller.setHeight(o)), this.scroller.lockOverflow(s), this.timeGrid.getTotalSlatHeight() < o && (this.timeGrid.bottomRuleEl.style.display = ""))
                } else r || (o = this.computeScrollerHeight(n), this.scroller.setHeight(o))
            }, i.prototype.computeScrollerHeight = function(e) { return e - t.subtractInnerElHeight(this.el, this.scroller.el) }, i.prototype.computeDateScroll = function(e) { var t = this.timeGrid.computeTimeTop(e); return (t = Math.ceil(t)) && t++, { top: t } }, i.prototype.queryDateScroll = function() { return { top: this.scroller.getScrollTop() } }, i.prototype.applyDateScroll = function(e) { void 0 !== e.top && this.scroller.setScrollTop(e.top) }, i.prototype.axisStyleAttr = function() { return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : "" }, i
        }(t.View);
    b.prototype.usesMinMaxTime = !0;
    var D = function(e) {
            function n(n, r) { var i = e.call(this, n, r.el) || this; return i.buildDayRanges = t.memoize(u), i.slicer = new w, i.timeGrid = r, n.calendar.registerInteractiveComponent(i, { el: i.timeGrid.el }), i }
            return r(n, e), n.prototype.destroy = function() { e.prototype.destroy.call(this), this.calendar.unregisterInteractiveComponent(this) }, n.prototype.render = function(e) {
                var t = e.dateProfile,
                    n = e.dayTable,
                    r = this.dayRanges = this.buildDayRanges(n, t, this.dateEnv);
                this.timeGrid.receiveProps(h({}, this.slicer.sliceProps(e, t, null, this.timeGrid, r), { dateProfile: t, cells: n.cells[0] }))
            }, n.prototype.renderNowIndicator = function(e) { this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e, this.timeGrid, this.dayRanges), e) }, n.prototype.buildPositionCaches = function() { this.timeGrid.buildPositionCaches() }, n.prototype.queryHit = function(e, t) { var n = this.timeGrid.positionToHit(e, t); if (n) return { component: this.timeGrid, dateSpan: n.dateSpan, dayEl: n.dayEl, rect: { left: n.relativeRect.left, right: n.relativeRect.right, top: n.relativeRect.top, bottom: n.relativeRect.bottom }, layer: 0 } }, n
        }(t.DateComponent),
        w = function(e) {
            function n() { return null !== e && e.apply(this, arguments) || this }
            return r(n, e), n.prototype.sliceRange = function(e, n) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var o = t.intersectRanges(e, n[i]);
                    o && r.push({ start: o.start, end: o.end, isStart: o.start.valueOf() === e.start.valueOf(), isEnd: o.end.valueOf() === e.end.valueOf(), col: i })
                }
                return r
            }, n
        }(t.Slicer),
        T = function(e) {
            function i(r, i, o, s) { var a = e.call(this, r, i, o, s) || this; return a.buildDayTable = t.memoize(d), a.opt("columnHeader") && (a.header = new t.DayHeader(a.context, a.el.querySelector(".fc-head-container"))), a.simpleTimeGrid = new D(a.context, a.timeGrid), a.dayGrid && (a.simpleDayGrid = new n.SimpleDayGrid(a.context, a.dayGrid)), a }
            return r(i, e), i.prototype.destroy = function() { e.prototype.destroy.call(this), this.header && this.header.destroy(), this.simpleTimeGrid.destroy(), this.simpleDayGrid && this.simpleDayGrid.destroy() }, i.prototype.render = function(t) {
                e.prototype.render.call(this, t);
                var n = this.props.dateProfile,
                    r = this.buildDayTable(n, this.dateProfileGenerator),
                    i = this.splitter.splitProps(t);
                this.header && this.header.receiveProps({ dateProfile: n, dates: r.headerDates, datesRepDistinctDays: !0, renderIntroHtml: this.renderHeadIntroHtml }), this.simpleTimeGrid.receiveProps(h({}, i.timed, { dateProfile: n, dayTable: r })), this.simpleDayGrid && this.simpleDayGrid.receiveProps(h({}, i.allDay, { dateProfile: n, dayTable: r, nextDayThreshold: this.nextDayThreshold, isRigid: !1 }))
            }, i.prototype.renderNowIndicator = function(e) { this.simpleTimeGrid.renderNowIndicator(e) }, i
        }(b),
        C = t.createPlugin({ defaultView: "timeGridWeek", views: { timeGrid: { class: T, allDaySlot: !0, slotDuration: "00:30:00", slotEventOverlap: !0 }, timeGridDay: { type: "timeGrid", duration: { days: 1 } }, timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } } } });
    e.AbstractTimeGridView = b, e.TimeGrid = y, e.TimeGridSlicer = w, e.TimeGridView = T, e.buildDayRanges = u, e.buildDayTable = d, e.default = C, Object.defineProperty(e, "__esModule", { value: !0 })
});