webpackJsonp([6],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Search_vue__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Search_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Search_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Search_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_06e06439_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_Search_vue__ = __webpack_require__(537);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(536)
}
var normalizeComponent = __webpack_require__(156)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-06e06439"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Search_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_06e06439_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_Search_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tabbar/Search.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(107)
  hotAPI.install(__webpack_require__(45), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06e06439", Component.options)
  } else {
    hotAPI.reload("data-v-06e06439", Component.options)
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

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(72);
exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.searchBox[data-v-06e06439] {\n  padding: 0;\n  margin: 0;\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n}\n.searchBox .search[data-v-06e06439] {\n  width: 100%;\n  padding: 5px 5px;\n  background-color: #eee;\n  position: fixed;\n}\n.searchBox .search input[data-v-06e06439] {\n  width: 100%;\n  margin: 0;\n  border-radius: 30px;\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px;\n  padding: 5px 10px;\n  border: none;\n}\n.searchBox .search .btn[data-v-06e06439] {\n  height: 30px;\n  position: absolute;\n  right: 5px;\n  border-radius: 30px;\n}\n.searchBox .commodity-list[data-v-06e06439] {\n  list-style: none;\n  padding: 0 10px;\n  padding-top: 40px;\n  padding-bottom: 60px;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow-y: scroll;\n}\n.searchBox .commodity-list .commodity-box[data-v-06e06439] {\n  width: 49%;\n  display: inline-block;\n  border: 1px solid #eee;\n  box-shadow: 2px 2px 2px #ccc;\n  min-height: 298px;\n  margin-top: 5px;\n  vertical-align: middle;\n}\n.searchBox .commodity-list .commodity-box > div[data-v-06e06439] {\n  width: 100%;\n  min-height: 298px;\n  background-color: #fff;\n  padding: 1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.searchBox .commodity-list .commodity-box > div > img[data-v-06e06439] {\n  max-width: 100%;\n  border: none;\n  background-repeat: no-repeat;\n  background-image: url(" + escape(__webpack_require__(494)) + ");\n  background-size: 90% 90%;\n}\n.searchBox .commodity-list .commodity-box > div .details[data-v-06e06439] {\n  padding: 5px 10px;\n  background-color: #eee;\n}\n.searchBox .commodity-list .commodity-box > div .details .new-price[data-v-06e06439] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #FF0000;\n}\n.searchBox .commodity-list .commodity-box > div .details > h1[data-v-06e06439] {\n  font-size: 16px;\n  color: #000;\n  margin: 0;\n  margin-bottom: 10px;\n}\n.searchBox .commodity-list .commodity-box > div .details .old-price[data-v-06e06439] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #666;\n  text-decoration: line-through;\n}\n.searchBox .commodity-list .commodity-box > div .details > h1[data-v-06e06439] {\n  height: 14px;\n}\n.searchBox .commodity-list .commodity-box > div .details > div[data-v-06e06439] {\n  font-size: 14px;\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n}\n.searchBox .p[data-v-06e06439] {\n  padding-top: 50px;\n  font-size: 18px;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toast = __webpack_require__(157);

var _toast2 = _interopRequireDefault(_toast);

__webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			isShow: false,
			pIsShow: false,
			inputValue: ""
		};
	},
	created: function created() {
		if (this.$store.state.searchList.length == 0) {
			this.getData();
		}
	},

	methods: {
		inputFocus: function inputFocus() {
			this.isShow = true;
		},
		inputBlur: function inputBlur() {
			document.querySelector("#searchBox").blur();
			this.isShow = false;
		},
		searchs: function searchs() {
			var _this = this;

			this.pIsShow = false;
			document.querySelector("#searchBox").focus();
			if (this.inputValue.trim() == "") {
				(0, _toast2.default)({
					message: '不能搜索空气...',
					position: 'middle',
					duration: 700
				});
				return false;
			}
			var that = this;
			this.$store.commit('removeSearchSuccessfulList');
			var a = (0, _toast2.default)({
				message: '正在努力加载...',
				position: 'middle',
				duration: -1
			});
			setTimeout(function () {
				_this.$store.state.searchList.some(function (item) {
					if (item.name.indexOf(that.inputValue.trim()) != -1) {
						that.$store.commit('addSearchSuccessfulList', item);
					}
				});
				if (_this.$store.state.searchSuccessfulList.length == 0) {
					_this.pIsShow = true;
				} else {
					_this.pIsShow = false;
				}
				a.close();
			}, 500);
		},
		getData: function getData() {
			var that = this;
			this.$axios.get('./src/static/json/search.json').then(function (res) {
				res.data.forEach(function (value) {
					that.$store.commit('addToSearchList', value);
				});
			});
		}
	}
}; //
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
//
//
//
//
//

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(501);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(155)("9910cb08", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(501, function() {
     var newContent = __webpack_require__(501);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "searchBox" }, [
    _c(
      "div",
      { staticClass: "search" },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.inputValue,
              expression: "inputValue"
            }
          ],
          attrs: {
            autocomplete: "off",
            id: "searchBox",
            type: "text",
            placeholder: "搜索商品"
          },
          domProps: { value: _vm.inputValue },
          on: {
            focus: _vm.inputFocus,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.inputValue = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.isShow
          ? _c(
              "mt-button",
              {
                staticClass: "btn",
                attrs: { size: "small", type: "primary" },
                on: { click: _vm.searchs }
              },
              [_vm._v("搜索")]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    !_vm.pIsShow
      ? _c(
          "ul",
          { staticClass: "commodity-list", on: { touchstart: _vm.inputBlur } },
          _vm._l(_vm.$store.state.searchSuccessfulList, function(item) {
            return _c(
              "li",
              { staticClass: "commodity-box" },
              [
                _c(
                  "router-link",
                  { attrs: { tag: "div", to: "/home/shopping/" + item.id } },
                  [
                    _c("img", { attrs: { src: item.imgUrl, alt: "" } }),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _c("h1", [
                        _vm._v(
                          _vm._s(
                            item.name.length > 7
                              ? item.name.slice(0, 6) + "..."
                              : item.name
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "new-price" }, [
                        _vm._v("￥" + _vm._s(item.newPrice))
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "old-price" }, [
                        _vm._v("￥" + _vm._s(item.oldPrice))
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", [_vm._v("促销")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("已售" + _vm._s(item.sold))])
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.pIsShow
      ? _c("p", { staticClass: "p" }, [
          _vm._v("搜索不到相关商品..."),
          _c("br"),
          _vm._v("可以试试搜索：刀 包 电蚊拍 苹果")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(107)      .rerender("data-v-06e06439", esExports)
  }
}

/***/ })

});