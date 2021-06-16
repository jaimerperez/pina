(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_views_User_vue"],{

/***/ "./assets/media/LOGO/LOGO_Piña-02.png":
/*!********************************************!*\
  !*** ./assets/media/LOGO/LOGO_Piña-02.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/LOGO_Piña-02.69385b12.png";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/layout/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/layout/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/UserSideBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/UserSideBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_IconAddUser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/IconAddUser.vue */ "./assets/components/icons/IconAddUser.vue");
/* harmony import */ var _icons_Boards_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Boards.vue */ "./assets/components/icons/Boards.vue");
/* harmony import */ var _icons_List_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/List.vue */ "./assets/components/icons/List.vue");
/* harmony import */ var _icons_Mail_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Mail.vue */ "./assets/components/icons/Mail.vue");
/* harmony import */ var _icons_Notification_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/Notification.vue */ "./assets/components/icons/Notification.vue");
/* harmony import */ var _icons_Schedule_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/Schedule.vue */ "./assets/components/icons/Schedule.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../event-bus */ "./assets/event-bus.js");
/* harmony import */ var _icons_Incidencias_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/Incidencias.vue */ "./assets/components/icons/Incidencias.vue");


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










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserSideNav',
  props: {
    idRol: String
  },
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Boards: _icons_Boards_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    IconAddUser: _icons_IconAddUser_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    List: _icons_List_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    Mail: _icons_Mail_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    Notification: _icons_Notification_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    Schedule: _icons_Schedule_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    Incidencias: _icons_Incidencias_vue__WEBPACK_IMPORTED_MODULE_11__.default
  },
  data: function data() {
    return {
      open: false,
      teams: [],
      userInfo: [],
      departments: [],
      active: false,
      src: '',
      exist: false
    };
  },
  methods: {
    show: function show() {
      this.$modal.show('notificacion');
    },
    toggle: function toggle() {
      this.open = !this.open;
    },
    logout: function logout() {
      this.$router.push('/logout');
    },
    showBoard: function showBoard() {
      this.active = !this.active;
    },
    profileImg: function profileImg(file) {
      this.src = file;
    }
  },
  created: function created() {
    var _this = this;

    //GET USER departments
    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getUserToken)(token).then(function (data) {
      if (data == "ERROR: Token no valido") {
        localStorage.clear();
        location.reload();
        return;
      }

      _this.userInfo = data;
      fetch("http://10.10.244.230:8081/assets/images/users/" + _this.userInfo.id).then(function (response) {
        if (response.ok) {
          _this.exist = true;
        } else {
          _this.exist = false;
        }
      })["catch"](function (error) {
        _this.exist = false;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getUserDepartments)(token, _this.userInfo.id).then(function (data) {
        _this.departments = data;
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getAllTeamsFromDepartment)(token, _this.departments[0].id).then(function (data) {
          return _this.teams = data;
        });
      });
    });
    _event_bus__WEBPACK_IMPORTED_MODULE_10__.EventBus.$on('imgProfile', this.profileImg);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/User.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/User.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_user_UserSideBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user/UserSideBar.vue */ "./assets/components/user/UserSideBar.vue");
/* harmony import */ var _components_layout_Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Footer.vue */ "./assets/components/layout/Footer.vue");
/* harmony import */ var _components_user_userNavBar_Welcome_Welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user/userNavBar/Welcome/Welcome */ "./assets/components/user/userNavBar/Welcome/Welcome.vue");


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
  name: 'User',
  components: {
    UserSideBar: _components_user_UserSideBar_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Footer: _components_layout_Footer_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Welcome: _components_user_userNavBar_Welcome_Welcome__WEBPACK_IMPORTED_MODULE_4__.default
  },
  data: function data() {
    return {
      idRol: null,
      idRolName: ""
    };
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      var formData = new FormData();
      formData.append('token', localStorage.getItem('validation_token'));
      fetch("/api/user", {
        method: "POST",
        body: formData
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        _this.idRol = data.id_rol;

        _this.getRole(_this.idRol);
      })["catch"](function (error) {
        _this.errorMessage = error;
        console.error('There was an error!', error);
      });
    },
    getRole: function getRole(idRol) {
      var _this2 = this;

      fetch("/api/rol/" + idRol + "?token=" + localStorage.getItem('validation_token')).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        _this2.idRolName = data;
      })["catch"](function (error) {
        _this2.errorMessage = error;
        console.error('There was an error!', error);
      });
    }
  },
  mounted: function mounted() {
    if (localStorage.getItem('validation_token') === null) this.$router.push('/login');
    this.getUser();
  }
});

/***/ }),

/***/ "./assets/components/layout/Footer.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/components/layout/Footer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/layout/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/UserSideBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/components/user/UserSideBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/UserSideBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/views/User.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./assets/views/User.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/icons/Boards.vue?vue&type=template&id=a8db5f46&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Boards.vue?vue&type=template&id=a8db5f46& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boards_vue_vue_type_template_id_a8db5f46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boards_vue_vue_type_template_id_a8db5f46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boards_vue_vue_type_template_id_a8db5f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boards.vue?vue&type=template&id=a8db5f46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Boards.vue?vue&type=template&id=a8db5f46&");


/***/ }),

/***/ "./assets/components/icons/Incidencias.vue?vue&type=template&id=ddabdecc&":
/*!********************************************************************************!*\
  !*** ./assets/components/icons/Incidencias.vue?vue&type=template&id=ddabdecc& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_template_id_ddabdecc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_template_id_ddabdecc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_template_id_ddabdecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incidencias.vue?vue&type=template&id=ddabdecc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Incidencias.vue?vue&type=template&id=ddabdecc&");


/***/ }),

/***/ "./assets/components/icons/Mail.vue?vue&type=template&id=7a31c0c7&":
/*!*************************************************************************!*\
  !*** ./assets/components/icons/Mail.vue?vue&type=template&id=7a31c0c7& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mail_vue_vue_type_template_id_7a31c0c7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mail_vue_vue_type_template_id_7a31c0c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mail_vue_vue_type_template_id_7a31c0c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mail.vue?vue&type=template&id=7a31c0c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Mail.vue?vue&type=template&id=7a31c0c7&");


/***/ }),

/***/ "./assets/components/icons/Notification.vue?vue&type=template&id=2b3d11fb&":
/*!*********************************************************************************!*\
  !*** ./assets/components/icons/Notification.vue?vue&type=template&id=2b3d11fb& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_2b3d11fb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_2b3d11fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_2b3d11fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notification.vue?vue&type=template&id=2b3d11fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Notification.vue?vue&type=template&id=2b3d11fb&");


/***/ }),

/***/ "./assets/components/layout/Footer.vue?vue&type=template&id=3b64b775&":
/*!****************************************************************************!*\
  !*** ./assets/components/layout/Footer.vue?vue&type=template&id=3b64b775& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3b64b775___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3b64b775___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3b64b775___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=3b64b775& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/layout/Footer.vue?vue&type=template&id=3b64b775&");


/***/ }),

/***/ "./assets/components/user/UserSideBar.vue?vue&type=template&id=bb9b2230&":
/*!*******************************************************************************!*\
  !*** ./assets/components/user/UserSideBar.vue?vue&type=template&id=bb9b2230& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSideBar_vue_vue_type_template_id_bb9b2230___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSideBar_vue_vue_type_template_id_bb9b2230___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSideBar_vue_vue_type_template_id_bb9b2230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSideBar.vue?vue&type=template&id=bb9b2230& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/UserSideBar.vue?vue&type=template&id=bb9b2230&");


/***/ }),

/***/ "./assets/views/User.vue?vue&type=template&id=474b295a&":
/*!**************************************************************!*\
  !*** ./assets/views/User.vue?vue&type=template&id=474b295a& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_474b295a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_474b295a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_474b295a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=474b295a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/User.vue?vue&type=template&id=474b295a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Boards.vue?vue&type=template&id=a8db5f46&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Boards.vue?vue&type=template&id=a8db5f46& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("g", [
    _c("path", {
      attrs: {
        d:
          "M247,42.38A144.71,144.71,0,0,0,42.38,247,144.71,144.71,0,0,0,247,42.38ZM144.7,272.45A127.75,127.75,0,1,1,272.45,144.7,127.89,127.89,0,0,1,144.7,272.45Zm0,0"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "cls-1",
      attrs: {
        d:
          "M210.75,117.63l-74,74a14,14,0,0,1-19.86,0L78.67,153.43a14,14,0,0,1,19.86-19.86l28.28,28.28,64.08-64.08a14,14,0,0,1,19.86,19.86Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Incidencias.vue?vue&type=template&id=ddabdecc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Incidencias.vue?vue&type=template&id=ddabdecc& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("g", [
    _c("g", [
      _c("g", [
        _c("path", {
          staticClass: "st3",
          attrs: {
            d:
              "M741.6,544.1L437.1,39c-12-19.9-33.9-32.3-57.1-32.3S334.9,19.2,322.9,39l-304.5,505\n\t\t\t\t\tc-12.4,20.6-12.8,46.3-1,67.2c11.8,20.9,34.1,33.9,58.1,33.9h609c24,0,46.3-13,58.1-33.9C754.4,590.4,754,564.6,741.6,544.1z\n\t\t\t\t\t M700.5,587.5c-3.3,5.8-9.4,9.3-16,9.3h-609c-6.6,0-12.7-3.6-16-9.3c-3.3-5.8-3.1-12.8,0.3-18.5L364.3,64\n\t\t\t\t\tc3.3-5.5,9.3-8.9,15.7-8.9c6.4,0,12.4,3.4,15.7,8.9l304.5,505C703.7,574.7,703.8,581.8,700.5,587.5z"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("g", [
      _c("g", [
        _c("path", {
          staticClass: "st3",
          attrs: {
            d:
              "M380.2,205.7c-18.4,0-32.7,9.9-32.7,27.4c0,53.4,6.3,130,6.3,183.4c0,13.9,12.1,19.7,26.5,19.7\n\t\t\t\t\tc10.8,0,26-5.8,26-19.7c0-53.4,6.3-130,6.3-183.4C412.5,215.5,397.7,205.7,380.2,205.7z"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("g", [
      _c("g", [
        _c("path", {
          staticClass: "st3",
          attrs: {
            d:
              "M380.7,467.1c-19.7,0-34.5,15.7-34.5,34.5c0,18.4,14.8,34.5,34.5,34.5c18.4,0,34.1-16.1,34.1-34.5\n\t\t\t\t\tC414.8,482.8,399.1,467.1,380.7,467.1z"
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Mail.vue?vue&type=template&id=7a31c0c7&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Mail.vue?vue&type=template&id=7a31c0c7& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("path", {
    attrs: {
      d:
        "M295.29,0H35.66A35.7,35.7,0,0,0,0,35.66V253.75a35.7,35.7,0,0,0,35.66,35.66H295.29A35.7,35.7,0,0,0,331,253.75V35.66A35.7,35.7,0,0,0,295.29,0Zm0,19.39a16.15,16.15,0,0,1,2.38.18L177,140.26a16.29,16.29,0,0,1-23,0L33.28,19.57a16.16,16.16,0,0,1,2.38-.18Zm16.27,234.36A16.29,16.29,0,0,1,295.29,270H35.66a16.29,16.29,0,0,1-16.27-16.27V35.66a16.43,16.43,0,0,1,.17-2.38L140.26,154a35.7,35.7,0,0,0,50.43,0L311.38,33.28a16.45,16.45,0,0,1,.17,2.38Zm0,0"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Notification.vue?vue&type=template&id=2b3d11fb&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Notification.vue?vue&type=template&id=2b3d11fb& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("path", {
    attrs: {
      d:
        "M224.84,125.94A53.89,53.89,0,1,0,177,47.32a88.19,88.19,0,0,0-19.57-7.91,26.64,26.64,0,1,0-46.74,0,89.36,89.36,0,0,0-65.85,86.09v75.65a26.64,26.64,0,0,0,8.48,51.9H90a44.8,44.8,0,0,0,88,0h36.74a26.64,26.64,0,0,0,8.48-51.9V125.91l1.61,0Zm0-90.82a36.93,36.93,0,1,1-36.93,36.93,37,37,0,0,1,36.93-36.93ZM134,17a9.68,9.68,0,1,1-9.68,9.68A9.7,9.7,0,0,1,134,17Zm0,255.49a27.9,27.9,0,0,1-26.53-19.37h53.06A27.9,27.9,0,0,1,134,272.45Zm72.25-146.92v82.75a8.48,8.48,0,0,0,8.48,8.48,9.68,9.68,0,0,1,0,19.37H53.3a9.68,9.68,0,1,1,0-19.37,8.48,8.48,0,0,0,8.48-8.48V125.53A72.26,72.26,0,0,1,171.58,63.81a53.92,53.92,0,0,0,34.62,58.81c0,1,.07,1.95.07,2.92Zm0,0"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/layout/Footer.vue?vue&type=template&id=3b64b775&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/layout/Footer.vue?vue&type=template&id=3b64b775& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("footer", { staticClass: "bg-fontColor-primary" }, [
        _c("div", { staticClass: "text-white text-center" }, [
          _vm._v("© Copyright all rights reserved to Piña ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/UserSideBar.vue?vue&type=template&id=bb9b2230&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/UserSideBar.vue?vue&type=template&id=bb9b2230& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        "sideNavBar-container h-full flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "h-screen flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full"
        },
        [
          _c(
            "div",
            { staticClass: "flex" },
            [
              _c("router-link", { attrs: { to: "/user/department" } }, [
                _c("img", {
                  staticClass: "my-10 w-10 h-10 sm:w-24 sm:h-24 ",
                  attrs: { src: __webpack_require__(/*! ../../media/LOGO/LOGO_Piña-02.png */ "./assets/media/LOGO/LOGO_Piña-02.png") }
                })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "block sm:hidden" }, [
            _c(
              "button",
              {
                staticClass:
                  "flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white",
                on: { click: _vm.toggle }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current h-3 w-3",
                    attrs: {
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("title", [_vm._v("Menu")]),
                    _c("path", {
                      attrs: {
                        d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "sidenavBar-element-container flex-grow sm:flex sm:items-center",
              class: _vm.open ? "block" : "hidden"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-sm h-full flex flex-col items-start sm:flex-grow justify-between"
                },
                [
                  _c("div", { staticClass: "flex flex-col" }, [
                    _c(
                      "div",
                      { staticClass: "text-white  ml-3 flex flex-row m-2" },
                      [
                        _c(
                          "icon-base",
                          { attrs: { "icon-name": "boards" } },
                          [_c("Boards")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            on: {
                              mouseover: function($event) {
                                _vm.active = true
                              },
                              mouseleave: function($event) {
                                _vm.active = false
                              }
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "ml-3 mr-3 group cursor-pointer hover:text-block-working-primary"
                              },
                              [_vm._v("Mis tableros")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.teams, function(items) {
                              return _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.active,
                                      expression: "active"
                                    }
                                  ],
                                  key: items.id
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "hover:text-indigo-500",
                                      attrs: {
                                        to: {
                                          name: "teams",
                                          params: {
                                            boardName: items.name,
                                            boardTeamID: items.id
                                          }
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(items.name))]
                                  )
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "popover",
                            rawName: "v-popover:foo.right",
                            arg: "foo",
                            modifiers: { right: true }
                          }
                        ],
                        staticClass:
                          "text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
                      },
                      [
                        _c(
                          "icon-base",
                          { attrs: { "icon-name": "notification" } },
                          [_c("Notification")],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0)
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.idRol === "administrador" || "responsable"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
                          },
                          [
                            _c(
                              "icon-base",
                              { attrs: { "icon-name": "department" } },
                              [_c("Schedule")],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "a",
                                { staticClass: "ml-3 mr-3" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/user/department" } },
                                    [_vm._v("Departamentos")]
                                  )
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.idRol === "administrador" || "responsable"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
                          },
                          [
                            _c(
                              "icon-base",
                              {
                                attrs: {
                                  "icon-name": "department",
                                  viewBox: "0 0 760 652"
                                }
                              },
                              [_c("Incidencias")],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "a",
                                { staticClass: "ml-3 mr-3" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/user/welcome" } },
                                    [_vm._v("Incidencias")]
                                  )
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.idRol === "administrador" || "responsable"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
                          },
                          [
                            _c(
                              "icon-base",
                              {
                                attrs: {
                                  "icon-name": "department",
                                  viewBox: "0 0 760 652"
                                }
                              },
                              [_c("Incidencias")],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "a",
                                { staticClass: "ml-3 mr-3" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/user/admin" } },
                                    [_vm._v("Admin")]
                                  )
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "place-self-center" }, [
                    _vm.userInfo.id
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "w-12 h-12 place-self-center cursor-pointer m-2"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "profileUser",
                                    params: { idUser: _vm.userInfo.id }
                                  }
                                }
                              },
                              [
                                _vm.exist
                                  ? _c("div", [
                                      _c("img", {
                                        staticClass: "rounded-full",
                                        attrs: {
                                          src:
                                            "/assets/images/users/" +
                                            _vm.userInfo.id
                                        },
                                        on: {
                                          error: function($event) {
                                            return __webpack_require__(/*! ../../media/users/avatar-loading.png */ "./assets/media/users/avatar-loading.png")
                                          }
                                        }
                                      })
                                    ])
                                  : _c("div", [
                                      _c("img", {
                                        staticClass: "rounded-full",
                                        attrs: {
                                          src: __webpack_require__(/*! ../../media/users/avatar-loading.png */ "./assets/media/users/avatar-loading.png")
                                        },
                                        on: {
                                          error: function($event) {
                                            return __webpack_require__(/*! ../../media/users/avatar-loading.png */ "./assets/media/users/avatar-loading.png")
                                          }
                                        }
                                      })
                                    ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "place-self-center m-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "text-white rounded bg-red-500",
                          attrs: { type: "button" },
                          on: { click: _vm.logout }
                        },
                        [_vm._v("LOG OUT")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("popover", { attrs: { name: "foo", width: 500 } }, [
        _vm._v("\n    Notificaciones\n    "),
        _c("div", { staticClass: "flex flex-row justify-around" }, [
          _c(
            "div",
            { staticClass: "hover:text-sideBar-primary cursor-pointer" },
            [_vm._v("Todos")]
          ),
          _vm._v(" "),
          _c("div", [_vm._v("No leido")]),
          _vm._v(" "),
          _c("div", [_vm._v("Me mencionaron")]),
          _vm._v(" "),
          _c("div", [_vm._v("Me asignaron")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "spacer bg-sideBar-primary w-full h-0.5" })
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("a", { staticClass: "ml-3 mr-3" }, [_vm._v("Notificaciones")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/User.vue?vue&type=template&id=474b295a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/User.vue?vue&type=template&id=474b295a& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "flex w-screen h-full font-Barlow" }, [
        _c(
          "aside",
          [_c("UserSideBar", { attrs: { idRol: _vm.idRolName } })],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "w-full" },
          [_c("router-view", [_c("Welcome")], 1)],
          1
        )
      ]),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./assets/components/icons/Boards.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Boards.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Boards_vue_vue_type_template_id_a8db5f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boards.vue?vue&type=template&id=a8db5f46& */ "./assets/components/icons/Boards.vue?vue&type=template&id=a8db5f46&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Boards_vue_vue_type_template_id_a8db5f46___WEBPACK_IMPORTED_MODULE_0__.render,
  _Boards_vue_vue_type_template_id_a8db5f46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Boards.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Incidencias.vue":
/*!*************************************************!*\
  !*** ./assets/components/icons/Incidencias.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Incidencias_vue_vue_type_template_id_ddabdecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incidencias.vue?vue&type=template&id=ddabdecc& */ "./assets/components/icons/Incidencias.vue?vue&type=template&id=ddabdecc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Incidencias_vue_vue_type_template_id_ddabdecc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Incidencias_vue_vue_type_template_id_ddabdecc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Incidencias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Mail.vue":
/*!******************************************!*\
  !*** ./assets/components/icons/Mail.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mail_vue_vue_type_template_id_7a31c0c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mail.vue?vue&type=template&id=7a31c0c7& */ "./assets/components/icons/Mail.vue?vue&type=template&id=7a31c0c7&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Mail_vue_vue_type_template_id_7a31c0c7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Mail_vue_vue_type_template_id_7a31c0c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Mail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Notification.vue":
/*!**************************************************!*\
  !*** ./assets/components/icons/Notification.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_2b3d11fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=2b3d11fb& */ "./assets/components/icons/Notification.vue?vue&type=template&id=2b3d11fb&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Notification_vue_vue_type_template_id_2b3d11fb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notification_vue_vue_type_template_id_2b3d11fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Notification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/layout/Footer.vue":
/*!*********************************************!*\
  !*** ./assets/components/layout/Footer.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_3b64b775___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=3b64b775& */ "./assets/components/layout/Footer.vue?vue&type=template&id=3b64b775&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./assets/components/layout/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_3b64b775___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_3b64b775___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/layout/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/UserSideBar.vue":
/*!************************************************!*\
  !*** ./assets/components/user/UserSideBar.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserSideBar_vue_vue_type_template_id_bb9b2230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSideBar.vue?vue&type=template&id=bb9b2230& */ "./assets/components/user/UserSideBar.vue?vue&type=template&id=bb9b2230&");
/* harmony import */ var _UserSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSideBar.vue?vue&type=script&lang=js& */ "./assets/components/user/UserSideBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserSideBar_vue_vue_type_template_id_bb9b2230___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserSideBar_vue_vue_type_template_id_bb9b2230___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/UserSideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/views/User.vue":
/*!*******************************!*\
  !*** ./assets/views/User.vue ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_474b295a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=474b295a& */ "./assets/views/User.vue?vue&type=template&id=474b295a&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./assets/views/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _User_vue_vue_type_template_id_474b295a___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_474b295a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlIiwid2VicGFjazovLy9hc3NldHMvdmlld3MvVXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci52dWU/OGMyYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZT9mMDNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZT85Yjc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0JvYXJkcy52dWU/YmE5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWU/NTUzMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9NYWlsLnZ1ZT9mYjg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL05vdGlmaWNhdGlvbi52dWU/ZjNkMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZT9hNjQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlPzZiOTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1VzZXIudnVlPzQ1MjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvQm9hcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvVXNlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0E7QUFDQSxzRUFEQTtBQUVBLGtFQUZBO0FBR0EsNEVBSEE7QUFJQSw4REFKQTtBQUtBLDhEQUxBO0FBTUEsOEVBTkE7QUFPQSxzRUFQQTtBQVFBO0FBUkEsR0FMQTtBQWVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGVBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0EsbUJBTEE7QUFNQSxhQU5BO0FBT0E7QUFQQTtBQVNBLEdBekJBO0FBMEJBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFVBSkEsb0JBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxVQVBBLG9CQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsYUFWQSx1QkFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLGNBYkEsc0JBYUEsSUFiQSxFQWFBO0FBQ0E7QUFDQTtBQWZBLEdBMUJBO0FBNENBLFNBNUNBLHFCQTRDQTtBQUFBOztBQUNBO0FBRUE7QUFDQSxrRkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUEsa0ZBQ0EsSUFEQSxDQUNBO0FBRUE7QUFDQTtBQUNB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RUFBRSx5RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzJFO0FBQzNCO0FBQ0w7OztBQUcxRDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDb0U7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ0EsQ0FBMEY7QUFDMUYsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsdUVBQU07QUFDUixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxxRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQiIsImZpbGUiOiJhc3NldHNfdmlld3NfVXNlcl92dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cImJnLWZvbnRDb2xvci1wcmltYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+wqkgQ29weXJpZ2h0IGFsbCByaWdodHMgcmVzZXJ2ZWQgdG8gUGnDsWEgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaWRlTmF2QmFyLWNvbnRhaW5lciBoLWZ1bGwgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBtZDp3LWZ1bGxcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBtZDp3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi91c2VyL2RlcGFydG1lbnRcIj48aW1nIGNsYXNzPVwibXktMTAgdy0xMCBoLTEwIHNtOnctMjQgc206aC0yNCBcIiA6c3JjPVwicmVxdWlyZSgnLi4vLi4vbWVkaWEvTE9HTy9MT0dPX1Bpw7FhLTAyLnBuZycpXCI+PC9yb3V0ZXItbGluaz4gIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgc206aGlkZGVuXCI+XG4gICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInRvZ2dsZVwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC1saWdodGVyIGJvcmRlci10ZWFsLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIvPjwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgOmNsYXNzPVwib3BlbiA/ICdibG9jayc6ICdoaWRkZW4nXCIgY2xhc3M9XCJzaWRlbmF2QmFyLWVsZW1lbnQtY29udGFpbmVyIGZsZXgtZ3JvdyBzbTpmbGV4IHNtOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbSBoLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBzbTpmbGV4LWdyb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiYm9hcmRzXCI+PEJvYXJkcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2IEBtb3VzZW92ZXI9XCJhY3RpdmUgPSB0cnVlXCIgQG1vdXNlbGVhdmU9XCJhY3RpdmUgPSBmYWxzZVwiPiBcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtbC0zIG1yLTMgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibG9jay13b3JraW5nLXByaW1hcnlcIiA+TWlzIHRhYmxlcm9zPC9hPlxuICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImFjdGl2ZVwiIHYtZm9yPVwiaXRlbXMgaW4gdGVhbXNcIiA6a2V5PVwiaXRlbXMuaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd0ZWFtcycsIHBhcmFtczoge2JvYXJkTmFtZTogaXRlbXMubmFtZSwgYm9hcmRUZWFtSUQ6IGl0ZW1zLmlkIH19XCIgY2xhc3M9XCJob3Zlcjp0ZXh0LWluZGlnby01MDBcIj57e2l0ZW1zLm5hbWV9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCIgdi1wb3BvdmVyOmZvby5yaWdodD5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwibm90aWZpY2F0aW9uXCI+PE5vdGlmaWNhdGlvbi8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPk5vdGlmaWNhY2lvbmVzPC9hPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiaWRSb2wgPT09ICdhZG1pbmlzdHJhZG9yJ3x8ICdyZXNwb25zYWJsZSdcIiBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCI+XG4gICAgICAgICAgICA8aWNvbi1iYXNlIGljb24tbmFtZT1cImRlcGFydG1lbnRcIj48U2NoZWR1bGUvPjwvaWNvbi1iYXNlPlxuICAgICAgICAgICAgPGRpdj4gPGEgY2xhc3M9XCJtbC0zIG1yLTNcIj48cm91dGVyLWxpbmsgdG89XCIvdXNlci9kZXBhcnRtZW50XCI+RGVwYXJ0YW1lbnRvczwvcm91dGVyLWxpbms+PC9hPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImlkUm9sID09PSAnYWRtaW5pc3RyYWRvcicgfHwgJ3Jlc3BvbnNhYmxlJ1wiIGNsYXNzPVwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL3dlbGNvbWVcIj5JbmNpZGVuY2lhczwvcm91dGVyLWxpbms+PC9hPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImlkUm9sID09PSAnYWRtaW5pc3RyYWRvcicgfHwgJ3Jlc3BvbnNhYmxlJ1wiIGNsYXNzPVwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL2FkbWluXCI+QWRtaW48L3JvdXRlci1saW5rPjwvYT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VySW5mby5pZFwiIGNsYXNzPVwidy0xMiBoLTEyIHBsYWNlLXNlbGYtY2VudGVyIGN1cnNvci1wb2ludGVyIG0tMlwiPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncHJvZmlsZVVzZXInLCBwYXJhbXM6IHtpZFVzZXI6IHVzZXJJbmZvLmlkIH19XCI+ICBcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJgL2Fzc2V0cy9pbWFnZXMvdXNlcnMvJHt1c2VySW5mby5pZH1gXCIgQGVycm9yPVwicmVxdWlyZShgLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nYClcIiBjbGFzcz1cInJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwicmVxdWlyZShgLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nYClcIiBAZXJyb3I9XCJyZXF1aXJlKGAuLi8uLi9tZWRpYS91c2Vycy9hdmF0YXItbG9hZGluZy5wbmdgKVwiIGNsYXNzPVwicm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPiAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zZWxmLWNlbnRlciBtLTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIHJvdW5kZWQgYmctcmVkLTUwMFwiIHYtb246Y2xpY2s9XCJsb2dvdXRcIiA+TE9HIE9VVDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHBvcG92ZXIgbmFtZT1cImZvb1wiIDp3aWR0aD1cIjUwMFwiPlxuICAgICAgTm90aWZpY2FjaW9uZXNcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiPlRvZG9zPC9kaXY+XG4gICAgICAgIDxkaXY+Tm8gbGVpZG88L2Rpdj5cbiAgICAgICAgPGRpdj5NZSBtZW5jaW9uYXJvbjwvZGl2PlxuICAgICAgICA8ZGl2Pk1lIGFzaWduYXJvbjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyIGJnLXNpZGVCYXItcHJpbWFyeSB3LWZ1bGwgaC0wLjVcIj48L2Rpdj5cbiAgICA8L3BvcG92ZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9pY29ucy9JY29uQmFzZS52dWUnXG5pbXBvcnQgSWNvbkFkZFVzZXIgZnJvbSAnLi4vaWNvbnMvSWNvbkFkZFVzZXIudnVlJ1xuaW1wb3J0IEJvYXJkcyBmcm9tICcuLi9pY29ucy9Cb2FyZHMudnVlJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vaWNvbnMvTGlzdC52dWUnXG5pbXBvcnQgTWFpbCBmcm9tICcuLi9pY29ucy9NYWlsLnZ1ZSdcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZSdcbmltcG9ydCBTY2hlZHVsZSBmcm9tICcuLi9pY29ucy9TY2hlZHVsZS52dWUnXG5pbXBvcnQgeyBnZXRVc2VyVG9rZW4sIGdldFVzZXJEZXBhcnRtZW50cywgZ2V0QWxsVGVhbXNGcm9tRGVwYXJ0bWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2llcy91c2VyU2VydmljaWVzJ1xuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9ldmVudC1idXMnXG5pbXBvcnQgSW5jaWRlbmNpYXMgZnJvbSAnLi4vaWNvbnMvSW5jaWRlbmNpYXMudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VyU2lkZU5hdicsXG4gIHByb3BzOiB7XG4gICAgaWRSb2w6IFN0cmluZ1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgSWNvbkJhc2UsXG4gICAgQm9hcmRzLFxuICAgIEljb25BZGRVc2VyLFxuICAgIExpc3QsXG4gICAgTWFpbCxcbiAgICBOb3RpZmljYXRpb24sXG4gICAgU2NoZWR1bGUsXG4gICAgSW5jaWRlbmNpYXNcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHRlYW1zOiBbXSxcbiAgICB1c2VySW5mbzogW10sXG4gICAgZGVwYXJ0bWVudHM6IFtdLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgc3JjOiAnJyxcbiAgICBleGlzdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIHNob3cgKCkge1xuICAgICAgdGhpcy4kbW9kYWwuc2hvdygnbm90aWZpY2FjaW9uJyk7XG4gICAgfSxcbiAgICB0b2dnbGUoKXtcbiAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB9LFxuICAgIGxvZ291dCgpe1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dvdXQnKVxuICAgIH0sXG4gICAgc2hvd0JvYXJkKCl7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZVxuICAgIH0sXG4gICAgcHJvZmlsZUltZyhmaWxlKXtcbiAgICAgIHRoaXMuc3JjID0gZmlsZVxuICAgIH1cbiAgICBcbiAgfSxcbiAgY3JlYXRlZCgpe1xuICAgICAgIC8vR0VUIFVTRVIgZGVwYXJ0bWVudHNcbiAgICAgIFxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJyk7XG4gICAgICAgIGdldFVzZXJUb2tlbih0b2tlbilcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSA9PSBcIkVSUk9SOiBUb2tlbiBubyB2YWxpZG9cIiApe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IGRhdGFcblxuICAgICAgICAgIGZldGNoKFwiaHR0cDovLzEwLjEwLjI0NC4yMzA6ODA4MS9hc3NldHMvaW1hZ2VzL3VzZXJzL1wiICsgdGhpcy51c2VySW5mby5pZCApIFxuICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpc3QgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXN0ID0gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4aXN0ID0gZmFsc2VcbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICBnZXRVc2VyRGVwYXJ0bWVudHModG9rZW4sIHRoaXMudXNlckluZm8uaWQpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzID0gZGF0YVxuICAgICAgICAgICAgZ2V0QWxsVGVhbXNGcm9tRGVwYXJ0bWVudCh0b2tlbiwgdGhpcy5kZXBhcnRtZW50c1swXS5pZCkudGhlbihkYXRhID0+ICh0aGlzLnRlYW1zID0gZGF0YSkpXG4gICAgICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIEV2ZW50QnVzLiRvbignaW1nUHJvZmlsZScsIHRoaXMucHJvZmlsZUltZylcbiAgfSxcblxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LXNjcmVlbiBoLWZ1bGwgZm9udC1CYXJsb3dcIj5cbiAgICAgICAgPGFzaWRlPiBcbiAgICAgICAgICA8VXNlclNpZGVCYXIgOmlkUm9sPVwiaWRSb2xOYW1lXCIvPiBcbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8cm91dGVyLXZpZXc+PFdlbGNvbWUvPjwvcm91dGVyLXZpZXc+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9kaXY+XG4gICAgICAgICAgICAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFVzZXJTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci9Vc2VyU2lkZUJhci52dWUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXIudnVlJztcbmltcG9ydCBXZWxjb21lIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyTmF2QmFyL1dlbGNvbWUvV2VsY29tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXInLFxuICBjb21wb25lbnRzOiB7XG4gICAgVXNlclNpZGVCYXIsXG4gICAgRm9vdGVyLFxuICAgIFdlbGNvbWVcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRSb2w6IG51bGwsXG4gICAgICBpZFJvbE5hbWU6IFwiXCIsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBnZXRVc2VyKCl7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJykpO1xuICAgICAgICBmZXRjaChcIi9hcGkvdXNlclwiLHtcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXNwID0+ICByZXNwLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWRSb2wgPSBkYXRhLmlkX3JvbFxuICAgICAgICAgICAgdGhpcy5nZXRSb2xlKHRoaXMuaWRSb2wpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Um9sZShpZFJvbCl7XG4gICAgICAgIGZldGNoKFwiL2FwaS9yb2wvXCIraWRSb2wrXCI/dG9rZW49XCIrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKSlcbiAgICAgICAgICAudGhlbihyZXNwID0+ICByZXNwLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgdGhpcy5pZFJvbE5hbWUgPSBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKSA9PT0gbnVsbClcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJykgXG4gICAgICAgIHRoaXMuZ2V0VXNlcigpXG4gICAgfSxcbiAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImdcIiwgW1xuICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBkOlxuICAgICAgICAgIFwiTTI0Nyw0Mi4zOEExNDQuNzEsMTQ0LjcxLDAsMCwwLDQyLjM4LDI0NywxNDQuNzEsMTQ0LjcxLDAsMCwwLDI0Nyw0Mi4zOFpNMTQ0LjcsMjcyLjQ1QTEyNy43NSwxMjcuNzUsMCwxLDEsMjcyLjQ1LDE0NC43LDEyNy44OSwxMjcuODksMCwwLDEsMTQ0LjcsMjcyLjQ1Wm0wLDBcIlxuICAgICAgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNscy0xXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBkOlxuICAgICAgICAgIFwiTTIxMC43NSwxMTcuNjNsLTc0LDc0YTE0LDE0LDAsMCwxLTE5Ljg2LDBMNzguNjcsMTUzLjQzYTE0LDE0LDAsMCwxLDE5Ljg2LTE5Ljg2bDI4LjI4LDI4LjI4LDY0LjA4LTY0LjA4YTE0LDE0LDAsMCwxLDE5Ljg2LDE5Ljg2WlwiXG4gICAgICB9XG4gICAgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZ1wiLCBbXG4gICAgX2MoXCJnXCIsIFtcbiAgICAgIF9jKFwiZ1wiLCBbXG4gICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3QzXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgIFwiTTc0MS42LDU0NC4xTDQzNy4xLDM5Yy0xMi0xOS45LTMzLjktMzIuMy01Ny4xLTMyLjNTMzM0LjksMTkuMiwzMjIuOSwzOWwtMzA0LjUsNTA1XFxuXFx0XFx0XFx0XFx0XFx0Yy0xMi40LDIwLjYtMTIuOCw0Ni4zLTEsNjcuMmMxMS44LDIwLjksMzQuMSwzMy45LDU4LjEsMzMuOWg2MDljMjQsMCw0Ni4zLTEzLDU4LjEtMzMuOUM3NTQuNCw1OTAuNCw3NTQsNTY0LjYsNzQxLjYsNTQ0LjF6XFxuXFx0XFx0XFx0XFx0XFx0IE03MDAuNSw1ODcuNWMtMy4zLDUuOC05LjQsOS4zLTE2LDkuM2gtNjA5Yy02LjYsMC0xMi43LTMuNi0xNi05LjNjLTMuMy01LjgtMy4xLTEyLjgsMC4zLTE4LjVMMzY0LjMsNjRcXG5cXHRcXHRcXHRcXHRcXHRjMy4zLTUuNSw5LjMtOC45LDE1LjctOC45YzYuNCwwLDEyLjQsMy40LDE1LjcsOC45bDMwNC41LDUwNUM3MDMuNyw1NzQuNyw3MDMuOCw1ODEuOCw3MDAuNSw1ODcuNXpcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdDNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNMzgwLjIsMjA1LjdjLTE4LjQsMC0zMi43LDkuOS0zMi43LDI3LjRjMCw1My40LDYuMywxMzAsNi4zLDE4My40YzAsMTMuOSwxMi4xLDE5LjcsMjYuNSwxOS43XFxuXFx0XFx0XFx0XFx0XFx0YzEwLjgsMCwyNi01LjgsMjYtMTkuN2MwLTUzLjQsNi4zLTEzMCw2LjMtMTgzLjRDNDEyLjUsMjE1LjUsMzk3LjcsMjA1LjcsMzgwLjIsMjA1Ljd6XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJnXCIsIFtcbiAgICAgIF9jKFwiZ1wiLCBbXG4gICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3QzXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgIFwiTTM4MC43LDQ2Ny4xYy0xOS43LDAtMzQuNSwxNS43LTM0LjUsMzQuNWMwLDE4LjQsMTQuOCwzNC41LDM0LjUsMzQuNWMxOC40LDAsMzQuMS0xNi4xLDM0LjEtMzQuNVxcblxcdFxcdFxcdFxcdFxcdEM0MTQuOCw0ODIuOCwzOTkuMSw0NjcuMSwzODAuNyw0NjcuMXpcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwicGF0aFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGQ6XG4gICAgICAgIFwiTTI5NS4yOSwwSDM1LjY2QTM1LjcsMzUuNywwLDAsMCwwLDM1LjY2VjI1My43NWEzNS43LDM1LjcsMCwwLDAsMzUuNjYsMzUuNjZIMjk1LjI5QTM1LjcsMzUuNywwLDAsMCwzMzEsMjUzLjc1VjM1LjY2QTM1LjcsMzUuNywwLDAsMCwyOTUuMjksMFptMCwxOS4zOWExNi4xNSwxNi4xNSwwLDAsMSwyLjM4LjE4TDE3NywxNDAuMjZhMTYuMjksMTYuMjksMCwwLDEtMjMsMEwzMy4yOCwxOS41N2ExNi4xNiwxNi4xNiwwLDAsMSwyLjM4LS4xOFptMTYuMjcsMjM0LjM2QTE2LjI5LDE2LjI5LDAsMCwxLDI5NS4yOSwyNzBIMzUuNjZhMTYuMjksMTYuMjksMCwwLDEtMTYuMjctMTYuMjdWMzUuNjZhMTYuNDMsMTYuNDMsMCwwLDEsLjE3LTIuMzhMMTQwLjI2LDE1NGEzNS43LDM1LjcsMCwwLDAsNTAuNDMsMEwzMTEuMzgsMzMuMjhhMTYuNDUsMTYuNDUsMCwwLDEsLjE3LDIuMzhabTAsMFwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJwYXRoXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgZDpcbiAgICAgICAgXCJNMjI0Ljg0LDEyNS45NEE1My44OSw1My44OSwwLDEsMCwxNzcsNDcuMzJhODguMTksODguMTksMCwwLDAtMTkuNTctNy45MSwyNi42NCwyNi42NCwwLDEsMC00Ni43NCwwLDg5LjM2LDg5LjM2LDAsMCwwLTY1Ljg1LDg2LjA5djc1LjY1YTI2LjY0LDI2LjY0LDAsMCwwLDguNDgsNTEuOUg5MGE0NC44LDQ0LjgsMCwwLDAsODgsMGgzNi43NGEyNi42NCwyNi42NCwwLDAsMCw4LjQ4LTUxLjlWMTI1LjkxbDEuNjEsMFptMC05MC44MmEzNi45MywzNi45MywwLDEsMS0zNi45MywzNi45MywzNywzNywwLDAsMSwzNi45My0zNi45M1pNMTM0LDE3YTkuNjgsOS42OCwwLDEsMS05LjY4LDkuNjhBOS43LDkuNywwLDAsMSwxMzQsMTdabTAsMjU1LjQ5YTI3LjksMjcuOSwwLDAsMS0yNi41My0xOS4zN2g1My4wNkEyNy45LDI3LjksMCwwLDEsMTM0LDI3Mi40NVptNzIuMjUtMTQ2LjkydjgyLjc1YTguNDgsOC40OCwwLDAsMCw4LjQ4LDguNDgsOS42OCw5LjY4LDAsMCwxLDAsMTkuMzdINTMuM2E5LjY4LDkuNjgsMCwxLDEsMC0xOS4zNyw4LjQ4LDguNDgsMCwwLDAsOC40OC04LjQ4VjEyNS41M0E3Mi4yNiw3Mi4yNiwwLDAsMSwxNzEuNTgsNjMuODFhNTMuOTIsNTMuOTIsMCwwLDAsMzQuNjIsNTguODFjMCwxLC4wNywxLjk1LjA3LDIuOTJabTAsMFwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImZvb3RlclwiLCB7IHN0YXRpY0NsYXNzOiBcImJnLWZvbnRDb2xvci1wcmltYXJ5XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiwqkgQ29weXJpZ2h0IGFsbCByaWdodHMgcmVzZXJ2ZWQgdG8gUGnDsWEgXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcInNpZGVOYXZCYXItY29udGFpbmVyIGgtZnVsbCBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgYmctc2lkZUJhci1wcmltYXJ5IG1kOnctZnVsbFwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgYmctc2lkZUJhci1wcmltYXJ5IG1kOnctZnVsbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IFwiL3VzZXIvZGVwYXJ0bWVudFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm15LTEwIHctMTAgaC0xMCBzbTp3LTI0IHNtOmgtMjQgXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuLi8uLi9tZWRpYS9MT0dPL0xPR09fUGnDsWEtMDIucG5nXCIpIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBzbTpoaWRkZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgdGV4dC10ZWFsLWxpZ2h0ZXIgYm9yZGVyLXRlYWwtbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGwtY3VycmVudCBoLTMgdy0zXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGl0bGVcIiwgW192bS5fdihcIk1lbnVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZDogXCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwic2lkZW5hdkJhci1lbGVtZW50LWNvbnRhaW5lciBmbGV4LWdyb3cgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5vcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNtIGgtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHNtOmZsZXgtZ3JvdyBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZSAgbWwtMyBmbGV4IGZsZXgtcm93IG0tMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpY29uLW5hbWVcIjogXCJib2FyZHNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkJvYXJkc1wiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtbC0zIG1yLTMgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibG9jay13b3JraW5nLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNaXMgdGFibGVyb3NcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbXMsIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdmVyOnRleHQtaW5kaWdvLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmROYW1lOiBpdGVtcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZFRlYW1JRDogaXRlbXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtcy5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG9wb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1wb3BvdmVyOmZvby5yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmb29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgcmlnaHQ6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpY29uLW5hbWVcIjogXCJub3RpZmljYXRpb25cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIk5vdGlmaWNhdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pZFJvbCA9PT0gXCJhZG1pbmlzdHJhZG9yXCIgfHwgXCJyZXNwb25zYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiaWNvbi1uYW1lXCI6IFwiZGVwYXJ0bWVudFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIlNjaGVkdWxlXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTMgbXItM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL3VzZXIvZGVwYXJ0bWVudFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZXBhcnRhbWVudG9zXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaWRSb2wgPT09IFwiYWRtaW5pc3RyYWRvclwiIHx8IFwicmVzcG9uc2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1uYW1lXCI6IFwiZGVwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDc2MCA2NTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiSW5jaWRlbmNpYXNcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBtci0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvdXNlci93ZWxjb21lXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluY2lkZW5jaWFzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaWRSb2wgPT09IFwiYWRtaW5pc3RyYWRvclwiIHx8IFwicmVzcG9uc2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1uYW1lXCI6IFwiZGVwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDc2MCA2NTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiSW5jaWRlbmNpYXNcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBtci0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvdXNlci9hZG1pblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZG1pblwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwbGFjZS1zZWxmLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXJJbmZvLmlkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3LTEyIGgtMTIgcGxhY2Utc2VsZi1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2ZpbGVVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWRVc2VyOiBfdm0udXNlckluZm8uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL3VzZXJzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXJJbmZvLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4uLy4uL21lZGlhL3VzZXJzL2F2YXRhci1sb2FkaW5nLnBuZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4uLy4uL21lZGlhL3VzZXJzL2F2YXRhci1sb2FkaW5nLnBuZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwbGFjZS1zZWxmLWNlbnRlciBtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlIHJvdW5kZWQgYmctcmVkLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTE9HIE9VVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcG92ZXJcIiwgeyBhdHRyczogeyBuYW1lOiBcImZvb1wiLCB3aWR0aDogNTAwIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgTm90aWZpY2FjaW9uZXNcXG4gICAgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiVG9kb3NcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJObyBsZWlkb1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIk1lIG1lbmNpb25hcm9uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiTWUgYXNpZ25hcm9uXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3BhY2VyIGJnLXNpZGVCYXItcHJpbWFyeSB3LWZ1bGwgaC0wLjVcIiB9KVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBtci0zXCIgfSwgW192bS5fdihcIk5vdGlmaWNhY2lvbmVzXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggdy1zY3JlZW4gaC1mdWxsIGZvbnQtQmFybG93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFzaWRlXCIsXG4gICAgICAgICAgW19jKFwiVXNlclNpZGVCYXJcIiwgeyBhdHRyczogeyBpZFJvbDogX3ZtLmlkUm9sTmFtZSB9IH0pXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSxcbiAgICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiLCBbX2MoXCJXZWxjb21lXCIpXSwgMSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJGb290ZXJcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQm9hcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOGRiNWY0NiZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E4ZGI1ZjQ2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E4ZGI1ZjQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E4ZGI1ZjQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Cb2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4ZGI1ZjQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E4ZGI1ZjQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9pY29ucy9Cb2FyZHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmNpZGVuY2lhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGRhYmRlY2MmXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkZGFiZGVjYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkZGFiZGVjYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkZGFiZGVjYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5jaWRlbmNpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRkYWJkZWNjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2RkYWJkZWNjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhMzFjMGM3JlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2EzMWMwYzcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2EzMWMwYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2EzMWMwYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01haWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhMzFjMGM3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdhMzFjMGM3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9pY29ucy9NYWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjNkMTFmYiZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJiM2QxMWZiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiM2QxMWZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiM2QxMWZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RpZmljYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiM2QxMWZiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiM2QxMWZiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9pY29ucy9Ob3RpZmljYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNjRiNzc1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2I2NGI3NzUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2I2NGI3NzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2I2NGI3NzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Zvb3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2NGI3NzUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2I2NGI3NzUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmI5YjIyMzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmI5YjIyMzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmI5YjIyMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmI5YjIyMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYjliMjIzMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYjliMjIzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvdXNlci9Vc2VyU2lkZUJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3NGIyOTVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NzRiMjk1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzRiMjk1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzRiMjk1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc0YjI5NWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDc0YjI5NWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92aWV3cy9Vc2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=