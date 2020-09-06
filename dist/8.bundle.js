webpackJsonp([8],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_NewsList_vue__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_NewsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_NewsList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_NewsList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_NewsList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_13ec68e6_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_NewsList_vue__ = __webpack_require__(539);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(538)
}
var normalizeComponent = __webpack_require__(156)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13ec68e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_NewsList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_13ec68e6_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_NewsList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/news/NewsList.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(107)
  hotAPI.install(__webpack_require__(45), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13ec68e6", Component.options)
  } else {
    hotAPI.reload("data-v-13ec68e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ddb90f78-imgErr.jpeg";

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(72);
exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.newsBox[data-v-13ec68e6] {\n  padding-bottom: 51px;\n}\n.newsBox .mui-table-view .mui-table-view-cell img[data-v-13ec68e6] {\n  background-size: 42px 42px;\n  background-image: url(" + escape(__webpack_require__(494)) + ");\n  background-repeat: no-repeat;\n}\n.newsBox .mui-table-view .mui-table-view-cell .mui-media-body h4[data-v-13ec68e6] {\n  font-size: 14px;\n}\n.newsBox .mui-table-view .mui-table-view-cell .mui-media-body .mui-ellipsis[data-v-13ec68e6] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #5b6bff;\n}\n", ""]);

// exports


/***/ }),

/***/ 515:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			newslist: []
		};
	},
	created: function created() {
		this.getNewsData();
	},

	methods: {
		getNewsData: function getNewsData() {
			var that = this;
			this.$axios.get("./src/static/json/newsData.json").then(function (res) {
				res.data.forEach(function (v) {
					that.newslist.push(v);
				});
			}).catch(function (err) {
				return console.log(err);
			});
		}
	}
};

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(502);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(155)("17518436", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(502, function() {
     var newContent = __webpack_require__(502);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "newsBox" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "mui-table-view" },
        _vm._l(_vm.newslist, function(item) {
          return _c(
            "li",
            { staticClass: "mui-table-view-cell mui-media" },
            [
              _c("router-link", { attrs: { to: "/home/newsof/" + item.id } }, [
                _c("img", {
                  staticClass: "mui-media-object mui-pull-left",
                  attrs: { src: item.img }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mui-media-body" }, [
                  _c("h4", [_vm._v(_vm._s(item.title))]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mui-ellipsis" }, [
                    _c("span", [
                      _vm._v("发表时间：" + _vm._s(item.releaseTime))
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("阅读：" + _vm._s(item.tap))])
                  ])
                ])
              ])
            ],
            1
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(107)      .rerender("data-v-13ec68e6", esExports)
  }
}

/***/ })

});