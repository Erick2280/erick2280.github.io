(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{242:function(t,e,n){"use strict";n.r(e);n(36),n(72);var c=n(0).a.extend({computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(e){return e.code!==t.$i18n.locale}))},currentLocale:function(){var t=this;return this.$i18n.locales.find((function(e){return e.code===t.$i18n.locale}))}}}),l=n(52),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs lg:text-sm text-right -mx-2"},[n("i18n",{staticClass:"px-2",attrs:{path:"languageSwitcher.current"},scopedSlots:t._u([{key:"localeName",fn:function(){return[n("strong",[t._v(t._s(t.currentLocale.name))])]},proxy:!0}])}),t._v(" "),t._l(t.availableLocales,(function(e){return n("nuxt-link",{key:e.code,staticClass:"px-2 whitespace-nowrap",attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v("\n    "+t._s(t.$t("languageSwitcher.linkToSwitch",e.code,{localeName:e.name}))+"\n  ")])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);