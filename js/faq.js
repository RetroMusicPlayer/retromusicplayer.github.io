var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, c, b) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (c.call(b, f, e, a)) return {
            i: e,
            v: f
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, b) {
    a != Array.prototype && a != Object.prototype && (a[c] = b.value)
};
$jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, c, b, d) {
    if (c) {
        b = $jscomp.global;
        a = a.split(".");
        for (d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in b || (b[e] = {});
            b = b[e]
        }
        a = a[a.length - 1];
        d = b[a];
        c = c(d);
        c != d && null != c && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: c
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
    return a ? a : function (a, b) {
        return $jscomp.findInternal(this, a, b).v
    }
}, "es6", "es3");
var isBuilder = $("html").hasClass("is-builder");
isBuilder || "undefined" !== typeof window.initSwitchArrowPlugin || (window.initSwitchArrowPlugin = !0, $(document).ready(function () {
    0 != $(".accordionStyles").length && $('.accordionStyles .card-header a[role="button"]').each(function () {
        $(this).hasClass("collapsed") || $(this).addClass("collapsed")
    })
}), $('.accordionStyles .card-header a[role="button"]').click(function () {
    var a = $(this).closest(".accordionStyles").attr("id");
    $(this).closest(".card").find(".panel-collapse").hasClass("collapsing") || (-1 != a.indexOf("toggle") ?
        $(this).hasClass("collapsed") ? $(this).find("span.sign").removeClass("icon-chevron-down").addClass("icon-chevron-up") : $(this).find("span.sign").removeClass("icon-chevron-up").addClass("icon-chevron-down") : -1 != a.indexOf("accordion") && ($(this).closest(".accordionStyles ").children(".card").each(function () {
            $(this).find("span.sign").removeClass("icon-chevron-up").addClass("icon-chevron-down")
        }), $(this).hasClass("collapsed") && $(this).find("span.sign").removeClass("icon-chevron-down").addClass("icon-chevron-up")))
}));