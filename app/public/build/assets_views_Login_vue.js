(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_views_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/LoginForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicies/userServicies */ "./assets/servicies/userServicies.js");

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Login',
  data: function data() {
    return {
      getUsers: [],
      userInfo: [],
      teams: [],
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      localStorage.clear();
      var formData = new FormData();
      formData.append('email', this.input.email);
      formData.append('password', this.input.password);
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__.Login)(formData).then(function (data) {
        localStorage.setItem('validation_token', data);

        _this.$vToastify.success("Login con éxito");

        var token = localStorage.getItem('validation_token');
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__.getUserToken)(token).then(function (data) {
          _this.userInfo = data;
          (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__.getAllTeamsFromUser)(token, _this.userInfo.id).then(function (data) {
            _this.teams = data;

            _this.$router.push('/board/' + _this.teams[0].id + '/' + _this.teams[0].name);
          });
        });
      })["catch"](function (error) {
        _this.errorMessage = error;
        console.error('There was an error!', error);

        _this.$vToastify.error("Error");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoginForm */ "./assets/components/LoginForm.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicies/userServicies */ "./assets/servicies/userServicies.js");

//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Login',
  components: {
    LoginForm: _components_LoginForm__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      userInfo: [],
      teams: []
    };
  },
  created: function created() {
    var _this = this;

    if (localStorage.getItem('validation_token') !== null) {
      console.log('entra aqui');
      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_2__.getUserToken)(token).then(function (data) {
        _this.userInfo = data;
        console.log(_this.userInfo.id);
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_2__.getAllTeamsFromUser)(token, _this.userInfo.id).then(function (data) {
          return _this.teams = data;
        });

        _this.$router.push('/board/' + _this.teams[0].id + '/' + _this.teams[0].name);
      });
    }
  }
});

/***/ }),

/***/ "./assets/components/LoginForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./assets/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/LoginForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/views/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./assets/views/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/LoginForm.vue?vue&type=template&id=6679823c&":
/*!************************************************************************!*\
  !*** ./assets/components/LoginForm.vue?vue&type=template&id=6679823c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_6679823c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_6679823c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_6679823c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginForm.vue?vue&type=template&id=6679823c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/LoginForm.vue?vue&type=template&id=6679823c&");


/***/ }),

/***/ "./assets/views/Login.vue?vue&type=template&id=2a036bea&":
/*!***************************************************************!*\
  !*** ./assets/views/Login.vue?vue&type=template&id=2a036bea& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=2a036bea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/Login.vue?vue&type=template&id=2a036bea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/LoginForm.vue?vue&type=template&id=6679823c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/LoginForm.vue?vue&type=template&id=6679823c& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "w-full h-full flex flex-col justify-center items-center text-Barlow"
    },
    [
      _c("img", {
        staticClass: " sm:h-4/6 sm:w-10/12 xl:w-96 xl:h-96",
        attrs: { src: __webpack_require__(/*! ../media/LOGO/LOGO_Piña-01.png */ "./assets/media/LOGO/LOGO_Piña-01.png") }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full h-full flex flex-col font-Barlow text-fontColor-primary"
        },
        [
          _c("div", { staticClass: "flex pb-4" }, [
            _c(
              "label",
              {
                staticClass: "w-2/6 text-right mx-3 lg:text-3xl pr-4",
                attrs: { for: "email" }
              },
              [_vm._v("Email ")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.input.email,
                  expression: "input.email"
                }
              ],
              staticClass:
                "w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg",
              attrs: { type: "email", id: "email", name: "email" },
              domProps: { value: _vm.input.email },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.login($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.input, "email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-2" }, [
            _c(
              "label",
              {
                staticClass: " w-2/6 text-right mx-3 lg:text-3xl pr-4",
                attrs: { for: "password" }
              },
              [_vm._v(" Contraseña ")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.input.password,
                  expression: "input.password"
                }
              ],
              staticClass:
                "w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg",
              attrs: { type: "password", id: "password", name: "password" },
              domProps: { value: _vm.input.password },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.login($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.input, "password", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-col py-2 justify-center items-center" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "text-center italic text-lg font-medium text-sideBar-primary",
                  attrs: { to: "/passwordreset" }
                },
                [_vm._v("¿ Olvidaste la contraseña ?")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex  justify-center items-center mt-10" },
            [
              _c(
                "button",
                {
                  staticClass:
                    "w-4/12 lg:w-1/12 lg:h-5/6 my-3 inline-flex items-center justify-center bg-sideBar-primary hover:bg-block-working-primary lg:text-xl text-white rounded-lg",
                  attrs: { type: "button" },
                  on: { click: _vm.login }
                },
                [_vm._v("Entrar ")]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/Login.vue?vue&type=template&id=2a036bea&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/Login.vue?vue&type=template&id=2a036bea& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex flex-col h-screen justify-center items-center" },
    [_c("LoginForm")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./assets/components/LoginForm.vue":
/*!*****************************************!*\
  !*** ./assets/components/LoginForm.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginForm_vue_vue_type_template_id_6679823c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=6679823c& */ "./assets/components/LoginForm.vue?vue&type=template&id=6679823c&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./assets/components/LoginForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LoginForm_vue_vue_type_template_id_6679823c___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginForm_vue_vue_type_template_id_6679823c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/LoginForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/views/Login.vue":
/*!********************************!*\
  !*** ./assets/views/Login.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=2a036bea& */ "./assets/views/Login.vue?vue&type=template&id=2a036bea&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./assets/views/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvTG9naW5Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3ZpZXdzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbkZvcm0udnVlP2JlYzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xvZ2luLnZ1ZT80YzYxIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvZ2luRm9ybS52dWU/OTY3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvTG9naW4udnVlP2Y4ZmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9naW5Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvTG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBO0FBR0EsZUFIQTtBQUlBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBSkE7QUFTQSxHQVpBO0FBYUE7QUFDQSxTQURBLG1CQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxnRkFDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FIQTtBQUlBLFNBTkE7QUFPQSxPQVpBLFdBYUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsT0FqQkE7QUFrQkE7QUF6QkE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFBQTs7QUFDQSwyREFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxPQU5BO0FBT0E7QUFFQTtBQXpCQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjZNLENBQUMsaUVBQWUsMk1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhCLENBQUMsaUVBQWUsdU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU0sbUJBQU8sQ0FBQyw0RUFBZ0M7QUFDOUQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQTRDO0FBQ2xFLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFxRDtBQUMzRSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0VBQWdFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseURBQXlEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0MsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxvRUFBb0U7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p3RjtBQUMzQjtBQUNMOzs7QUFHeEQ7QUFDQSxDQUEwRjtBQUMxRixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FFO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNBLENBQTBGO0FBQzFGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLHdFQUFNO0FBQ1IsRUFBRSw2RUFBTTtBQUNSLEVBQUUsc0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUIiLCJmaWxlIjoiYXNzZXRzX3ZpZXdzX0xvZ2luX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtQmFybG93XCI+XG4gICAgPGltZyBjbGFzcz1cIiBzbTpoLTQvNiBzbTp3LTEwLzEyIHhsOnctOTYgeGw6aC05NlwiIDpzcmM9XCJyZXF1aXJlKCcuLi9tZWRpYS9MT0dPL0xPR09fUGnDsWEtMDEucG5nJylcIj5cbiAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBmb250LUJhcmxvdyB0ZXh0LWZvbnRDb2xvci1wcmltYXJ5XCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggcGItNFwiPlxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJ3LTIvNiB0ZXh0LXJpZ2h0IG14LTMgbGc6dGV4dC0zeGwgcHItNFwiPkVtYWlsIDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdi1vbjprZXl1cC5lbnRlcj1cImxvZ2luXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJpbnB1dC5lbWFpbFwiIGNsYXNzPVwidy0yLzYgbGc6dy00LzEyIGxnOmgtZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNjAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWxnXCIgPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHB5LTJcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiIHctMi82IHRleHQtcmlnaHQgbXgtMyBsZzp0ZXh0LTN4bCBwci00XCIgPiBDb250cmFzZcOxYSA8L2xhYmVsPlxuICAgICAgPGlucHV0IHYtb246a2V5dXAuZW50ZXI9XCJsb2dpblwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiaW5wdXQucGFzc3dvcmRcIiBjbGFzcz1cInctMi82IGxnOnctNC8xMiBsZzpoLWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTYwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1sZ1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHB5LTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+PHJvdXRlci1saW5rIGNsYXNzPVwidGV4dC1jZW50ZXIgaXRhbGljIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1zaWRlQmFyLXByaW1hcnlcIiB0bz0nL3Bhc3N3b3JkcmVzZXQnPsK/IE9sdmlkYXN0ZSBsYSBjb250cmFzZcOxYSA/PC9yb3V0ZXItbGluaz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEwXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB2LW9uOmNsaWNrPVwibG9naW5cIiBjbGFzcz1cInctNC8xMiBsZzp3LTEvMTIgbGc6aC01LzYgbXktMyBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctc2lkZUJhci1wcmltYXJ5IGhvdmVyOmJnLWJsb2NrLXdvcmtpbmctcHJpbWFyeSBsZzp0ZXh0LXhsIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiPkVudHJhciA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuPC9kaXY+IFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7TG9naW59IGZyb20gJy4uL3NlcnZpY2llcy91c2VyU2VydmljaWVzJ1xuaW1wb3J0IHsgZ2V0VXNlclRva2VuLCBnZXRBbGxUZWFtc0Zyb21Vc2VyfSBmcm9tICcuLi9zZXJ2aWNpZXMvdXNlclNlcnZpY2llcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTG9naW4nLFxuICAgIGRhdGEoKXtcbiAgICAgIHJldHVybntcbiAgICAgICAgZ2V0VXNlcnM6IFtdLFxuICAgICAgICB1c2VySW5mbzogW10sXG4gICAgICAgIHRlYW1zOltdLFxuICAgICAgICBpbnB1dDp7XG4gICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgbG9naW4oKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5pbnB1dC5lbWFpbCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLmlucHV0LnBhc3N3b3JkKTtcbiAgICAgICAgXG4gICAgICAgIExvZ2luKGZvcm1EYXRhKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nLCBkYXRhKVxuICAgICAgICAgICAgdGhpcy4kdlRvYXN0aWZ5LnN1Y2Nlc3MoXCJMb2dpbiBjb24gw6l4aXRvXCIpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpO1xuICAgICAgICAgICAgZ2V0VXNlclRva2VuKHRva2VuKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gZGF0YVxuICAgICAgICAgICAgICBnZXRBbGxUZWFtc0Zyb21Vc2VyKHRva2VuLCB0aGlzLnVzZXJJbmZvLmlkKS50aGVuKGRhdGEgPT57XG4gICAgICAgICAgICAgICAgKHRoaXMudGVhbXMgPSBkYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvYm9hcmQvJyArIHRoaXMudGVhbXNbMF0uaWQgKyAnLycgKyB0aGlzLnRlYW1zWzBdLm5hbWUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy4kdlRvYXN0aWZ5LmVycm9yKFwiRXJyb3JcIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPExvZ2luRm9ybS8+ICBcbiAgICA8L2Rpdj5cbiAgICAgICAgICAgICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJ1xuaW1wb3J0IHsgZ2V0VXNlclRva2VuLCBnZXRBbGxUZWFtc0Zyb21Vc2VyfSBmcm9tICcuLi9zZXJ2aWNpZXMvdXNlclNlcnZpY2llcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xvZ2luJyxcbiAgY29tcG9uZW50czoge1xuICAgIExvZ2luRm9ybVxuICB9LFxuICBkYXRhKCl7XG4gICAgcmV0dXJue1xuICAgICAgdXNlckluZm86IFtdLFxuICAgICAgdGVhbXM6IFtdLFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKSAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRyYSBhcXVpJylcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJyk7XG4gICAgICAgICAgZ2V0VXNlclRva2VuKHRva2VuKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMudXNlckluZm8gPSBkYXRhXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VySW5mby5pZClcbiAgICAgICAgICBnZXRBbGxUZWFtc0Zyb21Vc2VyKHRva2VuLCB0aGlzLnVzZXJJbmZvLmlkKS50aGVuKGRhdGEgPT4gKHRoaXMudGVhbXMgPSBkYXRhKSk7XG5cbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2JvYXJkLycgKyB0aGlzLnRlYW1zWzBdLmlkICsgJy8nICsgdGhpcy50ZWFtc1swXS5uYW1lKVxuICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAgXG4gIH0sXG5cbn1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LUJhcmxvd1wiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIiBzbTpoLTQvNiBzbTp3LTEwLzEyIHhsOnctOTYgeGw6aC05NlwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuLi9tZWRpYS9MT0dPL0xPR09fUGnDsWEtMDEucG5nXCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBmb250LUJhcmxvdyB0ZXh0LWZvbnRDb2xvci1wcmltYXJ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBwYi00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMi82IHRleHQtcmlnaHQgbXgtMyBsZzp0ZXh0LTN4bCBwci00XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImVtYWlsXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRW1haWwgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXQuZW1haWxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJ3LTIvNiBsZzp3LTQvMTIgbGc6aC1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby02MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBpZDogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5pbnB1dC5lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9naW4oJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmlucHV0LCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHB5LTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiIHctMi82IHRleHQtcmlnaHQgbXgtMyBsZzp0ZXh0LTN4bCBwci00XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInBhc3N3b3JkXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiIENvbnRyYXNlw7FhIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaW5wdXQucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0LnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidy0yLzYgbGc6dy00LzEyIGxnOmgtZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNjAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiwgaWQ6IFwicGFzc3dvcmRcIiwgbmFtZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaW5wdXQucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvZ2luKCRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pbnB1dCwgXCJwYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LWNvbCBweS0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWNlbnRlciBpdGFsaWMgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXNpZGVCYXItcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL3Bhc3N3b3JkcmVzZXRcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiwr8gT2x2aWRhc3RlIGxhIGNvbnRyYXNlw7FhID9cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ3LTQvMTIgbGc6dy0xLzEyIGxnOmgtNS82IG15LTMgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBob3ZlcjpiZy1ibG9jay13b3JraW5nLXByaW1hcnkgbGc6dGV4dC14bCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9naW4gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVudHJhciBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgW19jKFwiTG9naW5Gb3JtXCIpXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjY3OTgyM2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Njc5ODIzYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Njc5ODIzYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Njc5ODIzYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Njc5ODIzYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2Njc5ODIzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvTG9naW5Gb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhMDM2YmVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJhMDM2YmVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhMDM2YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhMDM2YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMzZiZWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmEwMzZiZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92aWV3cy9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9