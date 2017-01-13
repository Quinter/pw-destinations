function toggleAccordionSection(t) {
    var e = t.closest(".dk-accordion-section"),
        n = e.find(".dk-accordion-body"),
        i = $(".dk-accordion-body").hasClass("clicked"),
        o = 63;
    if (i) {
        var a = $(".dk-accordion-body.clicked"),
            s = a.siblings(".dk-accordion-head");
        a.removeClass("clicked"), s.is(t) ? toggleHeadInfo(t) : (toggleHeadInfo(t), s.find(".expand-icon").hasClass("expanded") && (toggleHeadInfo(s), t.offset().top > s.offset().top && (o = a.height())))
    } else toggleHeadInfo(t);
    n.addClass("clicked");
    var r = $(".dk-accordion-body").not(".clicked");
    n.slideToggle("fast"), r.slideUp("fast"), scrollToTop(t, o), $(window).width() < 768 && lockAccordionSection(e)
}

function toggleHeadInfo(t) {
    t.find("span.expand-icon").toggleClass("expanded"), $(window).width() >= 768 && t.find("span.expand-text").fadeToggle()
}

function scrollToTop(t, e) {
    $("body,html").animate({
        scrollTop: t.offset().top - e
    })
}

function startVideo() {
    var t = $(".dk-video-overlay");
    t.click(function() {
        var e = $(this).siblings(".dk-video-holder").children("#dk-video"),
            n = e.attr("src");
        n += "&autoplay=1", e.attr("src", n), window.setTimeout(function() {
            t.addClass("hidden")
        }, 300)
    })
}

function lockAccordionSection(t) {
    function e() {
        var t = $(window).scrollTop();
        i > t ? $(document).scrollTop(i) : t > a && $(document).scrollTop(a)
    }
    if (t.toggleClass("dk-locked"), t.hasClass("dk-locked")) {
        var n = $(".dk-locked"),
            i = n.offset().top;
        $(document).scrollTop(i);
        var o = n.height(),
            a = i + o - $(window).height();
        $(document).on("scroll", e)
    } else $(document).off("scroll")
}

function addGATags(t, e, n) {
    var i = [{
        prevLabel: "sliderPrev_02_simply_perfect",
        nextLabel: "sliderNext_02_simply_perfect"
    }, {
        prevLabel: "sliderPrev_03_you_do_you",
        nextLabel: "sliderNext_03_you_do_you"
    }, {
        prevLabel: "sliderPrev_01_comfort_zone",
        nextLabel: "sliderNext_01_comfort_zone"
    }, {
        prevLabel: "sliderPrev_04_good_company",
        nextLabel: "sliderNext_04_good_company"
    }];
    t.attr({
        "data-gae-track": "event",
        "data-gae-category": "incontent",
        "data-gae-action": "click"
    }), "prev" === e ? t.attr({
        "data-gae-label": i[n].prevLabel
    }) : t.attr({
        "data-gae-label": i[n].nextLabel
    })
}

function unsliderArrowGATags(t, e) {
    var n = $("#" + t).parent(".unslider"),
        i = n.find(".unslider-arrow.dk-prev"),
        o = n.find(".unslider-arrow.dk-next");
    i.length > 0 && o.length > 0 ? (console.log("Unslider has loaded!"), addGATags(i, "prev", e), addGATags(o, "next", e)) : (console.log("Unslider hasn't loaded yet..."), window.setTimeout(unsliderArrowGATags, 1e3))
}! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && null !== module && module.exports ? module.exports = t : t(jQuery)
}(function(t, e) {
    function n(t) {
        function e(t) {
            i ? (n(), D(e), o = !0, i = !1) : o = !1
        }
        var n = t,
            i = !1,
            o = !1;
        this.kick = function(t) {
            i = !0, o || e()
        }, this.end = function(t) {
            var e = n;
            t && (o ? (n = i ? function() {
                e(), t()
            } : t, i = !0) : t())
        }
    }

    function i() {
        return !0
    }

    function o() {
        return !1
    }

    function a(t) {
        t.preventDefault()
    }

    function s(t) {
        U[t.target.tagName.toLowerCase()] || t.preventDefault()
    }

    function r(t) {
        return 1 === t.which && !t.ctrlKey && !t.altKey
    }

    function c(t, e) {
        var n, i;
        if (t.identifiedTouch) return t.identifiedTouch(e);
        for (n = -1, i = t.length; ++n < i;)
            if (t[n].identifier === e) return t[n]
    }

    function d(t, e) {
        var n = c(t.changedTouches, e.identifier);
        if (n && (n.pageX !== e.pageX || n.pageY !== e.pageY)) return n
    }

    function u(t) {
        var e;
        r(t) && (e = {
            target: t.target,
            startX: t.pageX,
            startY: t.pageY,
            timeStamp: t.timeStamp
        }, N(document, G.move, l, e), N(document, G.cancel, f, e))
    }

    function l(t) {
        var e = t.data;
        w(t, e, t, v)
    }

    function f(t) {
        v()
    }

    function v() {
        I(document, G.move, l), I(document, G.cancel, f)
    }

    function p(t) {
        var e, n;
        U[t.target.tagName.toLowerCase()] || (e = t.changedTouches[0], n = {
            target: e.target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: t.timeStamp,
            identifier: e.identifier
        }, N(document, z.move + "." + e.identifier, m, n), N(document, z.cancel + "." + e.identifier, g, n))
    }

    function m(t) {
        var e = t.data,
            n = d(t, e);
        n && w(t, e, n, h)
    }

    function g(t) {
        var e = t.data,
            n = c(t.changedTouches, e.identifier);
        n && h(e.identifier)
    }

    function h(t) {
        I(document, "." + t, m), I(document, "." + t, g)
    }

    function w(t, e, n, i) {
        var o = n.pageX - e.startX,
            a = n.pageY - e.startY;
        F * F > o * o + a * a || x(t, e, n, o, a, i)
    }

    function y() {
        return this._handled = i, !1
    }

    function $(t) {
        t._handled()
    }

    function x(t, e, n, i, o, a) {
        var s, r;
        e.target;
        s = t.targetTouches, r = t.timeStamp - e.timeStamp, e.type = "movestart", e.distX = i, e.distY = o, e.deltaX = i, e.deltaY = o, e.pageX = n.pageX, e.pageY = n.pageY, e.velocityX = i / r, e.velocityY = o / r, e.targetTouches = s, e.finger = s ? s.length : 1, e._handled = y, e._preventTouchmoveDefault = function() {
            t.preventDefault()
        }, j(e.target, e), a(e.identifier)
    }

    function _(t) {
        var e = t.data.timer;
        t.data.touch = t, t.data.timeStamp = t.timeStamp, e.kick()
    }

    function X(t) {
        var e = t.data.event,
            n = t.data.timer;
        Y(), S(e, n, function() {
            setTimeout(function() {
                I(e.target, "click", o)
            }, 0)
        })
    }

    function Y(t) {
        I(document, G.move, _), I(document, G.end, X)
    }

    function T(t) {
        var e = t.data.event,
            n = t.data.timer,
            i = d(t, e);
        i && (t.preventDefault(), e.targetTouches = t.targetTouches, t.data.touch = i, t.data.timeStamp = t.timeStamp, n.kick())
    }

    function k(t) {
        var e = t.data.event,
            n = t.data.timer,
            i = c(t.changedTouches, e.identifier);
        i && (C(e), S(e, n))
    }

    function C(t) {
        I(document, "." + t.identifier, T), I(document, "." + t.identifier, k)
    }

    function b(t, e, n, i) {
        var o = n - t.timeStamp;
        t.type = "move", t.distX = e.pageX - t.startX, t.distY = e.pageY - t.startY, t.deltaX = e.pageX - t.pageX, t.deltaY = e.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / o, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / o, t.pageX = e.pageX, t.pageY = e.pageY
    }

    function S(t, e, n) {
        e.end(function() {
            return t.type = "moveend", j(t.target, t), n && n()
        })
    }

    function A(t, e, n) {
        return N(this, "movestart.move", $), !0
    }

    function q(t) {
        return I(this, "dragstart drag", a), I(this, "mousedown touchstart", s), I(this, "movestart", $), !0
    }

    function L(t) {
        "move" !== t.namespace && "moveend" !== t.namespace && (N(this, "dragstart." + t.guid + " drag." + t.guid, a, e, t.selector), N(this, "mousedown." + t.guid, s, e, t.selector))
    }

    function H(t) {
        "move" !== t.namespace && "moveend" !== t.namespace && (I(this, "dragstart." + t.guid + " drag." + t.guid), I(this, "mousedown." + t.guid))
    }
    var F = 6,
        N = t.event.add,
        I = t.event.remove,
        j = function(e, n, i) {
            t.event.trigger(n, i, e)
        },
        D = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
                return window.setTimeout(function() {
                    t()
                }, 25)
            }
        }(),
        U = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        G = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        z = {
            move: "touchmove",
            cancel: "touchend",
            end: "touchend"
        };
    t.event.special.movestart = {
        setup: A,
        teardown: q,
        add: L,
        remove: H,
        _default: function(t) {
            function i(e) {
                b(a, s.touch, s.timeStamp), j(t.target, a)
            }
            var a, s;
            t._handled() && (a = {
                target: t.target,
                startX: t.startX,
                startY: t.startY,
                pageX: t.pageX,
                pageY: t.pageY,
                distX: t.distX,
                distY: t.distY,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                velocityX: t.velocityX,
                velocityY: t.velocityY,
                timeStamp: t.timeStamp,
                identifier: t.identifier,
                targetTouches: t.targetTouches,
                finger: t.finger
            }, s = {
                event: a,
                timer: new n(i),
                touch: e,
                timeStamp: e
            }, t.identifier === e ? (N(t.target, "click", o), N(document, G.move, _, s), N(document, G.end, X, s)) : (t._preventTouchmoveDefault(), N(document, z.move + "." + t.identifier, T, s), N(document, z.end + "." + t.identifier, k, s)))
        }
    }, t.event.special.move = {
        setup: function() {
            N(this, "movestart.move", t.noop)
        },
        teardown: function() {
            I(this, "movestart.move", t.noop)
        }
    }, t.event.special.moveend = {
        setup: function() {
            N(this, "movestart.moveend", t.noop)
        },
        teardown: function() {
            I(this, "movestart.moveend", t.noop)
        }
    }, N(document, "mousedown.move", u), N(document, "touchstart.move", p), "function" == typeof Array.prototype.indexOf && ! function(t, e) {
        for (var n = ["changedTouches", "targetTouches"], i = n.length; i--;) - 1 === t.event.props.indexOf(n[i]) && t.event.props.push(n[i])
    }(t)
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", void 0, "jquery.event.move"], t) : "undefined" != typeof module && null !== module && module.exports ? module.exports = t : t(jQuery)
}(function(t, e) {
    function n(t) {
        var e, n, i;
        e = t.currentTarget.offsetWidth, n = t.currentTarget.offsetHeight, i = {
            distX: t.distX,
            distY: t.distY,
            velocityX: t.velocityX,
            velocityY: t.velocityY,
            finger: t.finger
        }, t.distX > t.distY ? t.distX > -t.distY ? (t.distX / e > r.threshold || t.velocityX * t.distX / e * r.sensitivity > 1) && (i.type = "swiperight", s(t.currentTarget, i)) : (-t.distY / n > r.threshold || t.velocityY * t.distY / e * r.sensitivity > 1) && (i.type = "swipeup", s(t.currentTarget, i)) : t.distX > -t.distY ? (t.distY / n > r.threshold || t.velocityY * t.distY / e * r.sensitivity > 1) && (i.type = "swipedown", s(t.currentTarget, i)) : (-t.distX / e > r.threshold || t.velocityX * t.distX / e * r.sensitivity > 1) && (i.type = "swipeleft", s(t.currentTarget, i))
    }

    function i(e) {
        var n = t.data(e, "event_swipe");
        return n || (n = {
            count: 0
        }, t.data(e, "event_swipe", n)), n
    }
    var o = t.event.add,
        a = t.event.remove,
        s = function(e, n, i) {
            t.event.trigger(n, i, e)
        },
        r = {
            threshold: .4,
            sensitivity: 6
        };
    t.event.special.swipe = t.event.special.swipeleft = t.event.special.swiperight = t.event.special.swipeup = t.event.special.swipedown = {
        setup: function(t, e, a) {
            var t = i(this);
            if (!(t.count++ > 0)) return o(this, "moveend", n), !0
        },
        teardown: function() {
            var t = i(this);
            if (!(--t.count > 0)) return a(this, "moveend", n), !0
        },
        settings: r
    }
}), ! function(t) {
    return t ? (t.Unslider = function(e, n) {
        var i = this;
        return i._ = "unslider", i.defaults = {
            autoplay: !1,
            delay: 3e3,
            speed: 750,
            easing: "swing",
            keys: {
                prev: 37,
                next: 39
            },
            nav: !0,
            arrows: {
                prev: '<a class="' + i._ + '-arrow prev">Prev</a>',
                next: '<a class="' + i._ + '-arrow next">Next</a>'
            },
            animation: "horizontal",
            selectors: {
                container: "ul:first",
                slides: "li"
            },
            animateHeight: !1,
            activeClass: i._ + "-active",
            swipe: !0,
            swipeThreshold: .2
        }, i.$context = e, i.options = {}, i.$parent = null, i.$container = null, i.$slides = null, i.$nav = null, i.$arrows = [], i.total = 0, i.current = 0, i.prefix = i._ + "-", i.eventSuffix = "." + i.prefix + ~~(2e3 * Math.random()), i.interval = null, i.init = function(e) {
            return i.options = t.extend({}, i.defaults, e), i.$container = i.$context.find(i.options.selectors.container).addClass(i.prefix + "wrap"), i.$slides = i.$container.children(i.options.selectors.slides), i.setup(), t.each(["nav", "arrows", "keys", "infinite"], function(e, n) {
                i.options[n] && i["init" + t._ucfirst(n)]()
            }), jQuery.event.special.swipe && i.options.swipe && i.initSwipe(), i.options.autoplay && i.start(), i.calculateSlides(), i.$context.trigger(i._ + ".ready"), i.animate(i.options.index || i.current, "init")
        }, i.setup = function() {
            i.$context.addClass(i.prefix + i.options.animation).wrap('<div class="' + i._ + '" />'), i.$parent = i.$context.parent("." + i._);
            var t = i.$context.css("position");
            "static" === t && i.$context.css("position", "relative"), i.$context.css("overflow", "hidden")
        }, i.calculateSlides = function() {
            if (i.total = i.$slides.length, "fade" !== i.options.animation) {
                var t = "width";
                "vertical" === i.options.animation && (t = "height"), i.$container.css(t, 100 * i.total + "%").addClass(i.prefix + "carousel"), i.$slides.css(t, 100 / i.total + "%")
            }
        }, i.start = function() {
            return i.interval = setTimeout(function() {
                i.next()
            }, i.options.delay), i
        }, i.stop = function() {
            return clearTimeout(i.interval), i
        }, i.initNav = function() {
            var e = t('<nav class="' + i.prefix + 'nav"><ol /></nav>');
            i.$slides.each(function(n) {
                var o = this.getAttribute("data-nav") || n + 1;
                t.isFunction(i.options.nav) && (o = i.options.nav.call(i.$slides.eq(n), n, o)), e.children("ol").append('<li data-slide="' + n + '">' + o + "</li>")
            }), i.$nav = e.insertAfter(i.$context), i.$nav.find("li").on("click" + i.eventSuffix, function() {
                var e = t(this).addClass(i.options.activeClass);
                e.siblings().removeClass(i.options.activeClass), i.animate(e.attr("data-slide"))
            })
        }, i.initArrows = function() {
            i.options.arrows === !0 && (i.options.arrows = i.defaults.arrows), t.each(i.options.arrows, function(e, n) {
                i.$arrows.push(t(n).insertAfter(i.$context).on("click" + i.eventSuffix, i[e]))
            })
        }, i.initKeys = function() {
            i.options.keys === !0 && (i.options.keys = i.defaults.keys), t(document).on("keyup" + i.eventSuffix, function(e) {
                t.each(i.options.keys, function(n, o) {
                    e.which === o && t.isFunction(i[n]) && i[n].call(i)
                })
            })
        }, i.initSwipe = function() {
            var t = i.$slides.width();
            "fade" !== i.options.animation && i.$container.on({
                movestart: function(t) {
                    return t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY ? !!t.preventDefault() : void i.$container.css("position", "relative")
                },
                move: function(e) {
                    i.$container.css("left", -(100 * i.current) + 100 * e.distX / t + "%")
                },
                moveend: function(e) {
                    Math.abs(e.distX) / t > i.options.swipeThreshold ? i[e.distX < 0 ? "next" : "prev"]() : i.$container.animate({
                        left: -(100 * i.current) + "%"
                    }, i.options.speed / 2)
                }
            })
        }, i.initInfinite = function() {
            var e = ["first", "last"];
            t.each(e, function(t, n) {
                i.$slides.push.apply(i.$slides, i.$slides.filter(':not(".' + i._ + '-clone")')[n]().clone().addClass(i._ + "-clone")["insert" + (0 === t ? "After" : "Before")](i.$slides[e[~~!t]]()))
            })
        }, i.destroyArrows = function() {
            t.each(i.$arrows, function(t, e) {
                e.remove()
            })
        }, i.destroySwipe = function() {
            i.$container.off("movestart move moveend")
        }, i.destroyKeys = function() {
            t(document).off("keyup" + i.eventSuffix)
        }, i.setIndex = function(t) {
            return 0 > t && (t = i.total - 1), i.current = Math.min(Math.max(0, t), i.total - 1), i.options.nav && i.$nav.find('[data-slide="' + i.current + '"]')._active(i.options.activeClass), i.$slides.eq(i.current)._active(i.options.activeClass), i
        }, i.animate = function(e, n) {
            if ("first" === e && (e = 0), "last" === e && (e = i.total), isNaN(e)) return i;
            i.options.autoplay && i.stop().start(), i.setIndex(e), i.$context.trigger(i._ + ".change", [e, i.$slides.eq(e)]);
            var o = "animate" + t._ucfirst(i.options.animation);
            return t.isFunction(i[o]) && i[o](i.current, n), i
        }, i.next = function() {
            var t = i.current + 1;
            return t >= i.total && (t = 0), i.animate(t, "next")
        }, i.prev = function() {
            return i.animate(i.current - 1, "prev")
        }, i.animateHorizontal = function(t) {
            var e = "left";
            return "rtl" === i.$context.attr("dir") && (e = "right"), i.options.infinite && i.$container.css("margin-" + e, "-100%"), i.slide(e, t)
        }, i.animateVertical = function(t) {
            return i.options.animateHeight = !0, i.options.infinite && i.$container.css("margin-top", -i.$slides.outerHeight()), i.slide("top", t)
        }, i.slide = function(t, e) {
            if (i.options.animateHeight && i._move(i.$context, {
                    height: i.$slides.eq(e).outerHeight()
                }, !1), i.options.infinite) {
                var n;
                e === i.total - 1 && (n = i.total - 3, e = -1), e === i.total - 2 && (n = 0, e = i.total - 2), "number" == typeof n && (i.setIndex(n), i.$context.on(i._ + ".moved", function() {
                    i.current === n && i.$container.css(t, -(100 * n) + "%").off(i._ + ".moved")
                }))
            }
            var o = {};
            return o[t] = -(100 * e) + "%", i._move(i.$container, o)
        }, i.animateFade = function(t) {
            var e = i.$slides.eq(t).addClass(i.options.activeClass);
            i._move(e.siblings().removeClass(i.options.activeClass), {
                opacity: 0
            }), i._move(e, {
                opacity: 1
            }, !1)
        }, i._move = function(t, e, n, o) {
            return n !== !1 && (n = function() {
                i.$context.trigger(i._ + ".moved")
            }), t._move(e, o || i.options.speed, i.options.easing, n)
        }, i.init(n)
    }, t.fn._active = function(t) {
        return this.addClass(t).siblings().removeClass(t)
    }, t._ucfirst = function(t) {
        return (t + "").toLowerCase().replace(/^./, function(t) {
            return t.toUpperCase()
        })
    }, t.fn._move = function() {
        return this.stop(!0, !0), t.fn[t.fn.velocity ? "velocity" : "animate"].apply(this, arguments)
    }, void(t.fn.unslider = function(e) {
        return this.each(function() {
            var n = t(this);
            if ("string" == typeof e && n.data("unslider")) {
                e = e.split(":");
                var i = n.data("unslider")[e[0]];
                if (t.isFunction(i)) return i.apply(n, e[1] ? e[1].split(",") : null)
            }
            return n.data("unslider", new t.Unslider(n, e))
        })
    })) : console.warn("Unslider needs jQuery")
}(window.jQuery), $(document).ready(function() {
    $(window).width() >= 768 && $(".dk-slideshow").each(function(t) {
        var e = $(this).attr("id");
        $(this).unslider({
            nav: !1,
            arrows: {
                prev: '<a class="unslider-arrow icon-thin-arrow dk-prev"></a>',
                next: '<a class="unslider-arrow icon-thin-arrow dk-next"></a>'
            }
        });
        unsliderArrowGATags(e, t)
    }), $(window).width() <= 991 && $(".dk-color-text").each(function(t, e) {
        if (!$(this).hasClass("dk-color-text-slide")) {
            var n = $(e).parent(".dk-color-text-box"),
                i = n.siblings(".dk-color");
            $(e).detach().appendTo(i), n.remove()
        }
    }), startVideo(), $(".dk-scroll").click(function() {
        scrollToTop($("#dk-accordion"), 0)
    }), $(".dk-accordion-head").click(function() {
        toggleAccordionSection($(this))
    })
});