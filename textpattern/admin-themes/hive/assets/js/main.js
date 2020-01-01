/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(s){"use strict";function a(t){s(t).on("click.bs.dropdown",this.toggle)}var r='[data-toggle="dropdown"]';function l(t){var e=t.attr("data-target"),n="#"!==(e=e||(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""))?s(document).find(e):null;return n&&n.length?n:t.parent()}function o(a){a&&3===a.which||(s(".dropdown-backdrop").remove(),s(r).each(function(){var t=s(this),e=l(t),n={relatedTarget:this};e.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&s.contains(e[0],a.target)||(e.trigger(a=s.Event("hide.bs.dropdown",n)),a.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(s.Event("hidden.bs.dropdown",n)))))}))}a.VERSION="3.4.1",a.prototype.toggle=function(t){var e=s(this);if(!e.is(".disabled, :disabled")){var n=l(e),a=n.hasClass("open");if(o(),!a){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click",o);var i={relatedTarget:this};if(n.trigger(t=s.Event("show.bs.dropdown",i)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger(s.Event("shown.bs.dropdown",i))}return!1}},a.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=s(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var n=l(e),a=n.hasClass("open");if(!a&&27!=t.which||a&&27==t.which)return 27==t.which&&n.find(r).trigger("focus"),e.trigger("click");var i=n.find(".dropdown-menu li:not(.disabled):visible a");if(i.length){var o=i.index(t.target);38==t.which&&0<o&&o--,40==t.which&&o<i.length-1&&o++,~o||(o=0),i.eq(o).trigger("focus")}}}};var t=s.fn.dropdown;s.fn.dropdown=function(n){return this.each(function(){var t=s(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new a(this)),"string"==typeof n&&e[n].call(t)})},s.fn.dropdown.Constructor=a,s.fn.dropdown.noConflict=function(){return s.fn.dropdown=t,this},s(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,a.prototype.toggle).on("keydown.bs.dropdown.data-api",r,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),function(s){"use strict";var r=function(t,e){this.$element=s(t),this.options=s.extend({},r.DEFAULTS,e),this.$trigger=s('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function i(t){var e,n=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return s(document).find(n)}function l(a){return this.each(function(){var t=s(this),e=t.data("bs.collapse"),n=s.extend({},r.DEFAULTS,t.data(),"object"==typeof a&&a);!e&&n.toggle&&/show|hide/.test(a)&&(n.toggle=!1),e||t.data("bs.collapse",e=new r(this,n)),"string"==typeof a&&e[a]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var n=s.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var i=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!s.support.transition)return i.call(this);var o=s.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",s.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][o])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!s.support.transition)return n.call(this);this.$element[e](0).one("bsTransitionEnd",s.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return s(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(t,e){var n=s(e);this.addAriaAndCollapsedClass(i(n),n)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var t=s.fn.collapse;s.fn.collapse=l,s.fn.collapse.Constructor=r,s.fn.collapse.noConflict=function(){return s.fn.collapse=t,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=s(this);e.attr("data-target")||t.preventDefault();var n=i(e),a=n.data("bs.collapse")?"toggle":e.data();l.call(n,a)})}(jQuery),function(){"use strict";var e=document.body.classList;document.getElementById("lightswitch").addEventListener("click",function(t){e.contains("darkmode")?(e.remove("darkmode"),localStorage.setItem("prefers-color-scheme","light")):(e.add("darkmode"),localStorage.setItem("prefers-color-scheme","dark")),t.preventDefault()})}();