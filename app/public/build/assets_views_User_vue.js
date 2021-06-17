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
      fetch("/assets/images/users/" + _this.userInfo.id).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlIiwid2VicGFjazovLy9hc3NldHMvdmlld3MvVXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci52dWU/OGMyYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZT9mMDNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZT85Yjc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0JvYXJkcy52dWU/YmE5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWU/NTUzMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9NYWlsLnZ1ZT9mYjg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL05vdGlmaWNhdGlvbi52dWU/ZjNkMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZT9hNjQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlPzZiOTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1VzZXIudnVlPzQ1MjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvQm9hcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvVXNlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0E7QUFDQSxzRUFEQTtBQUVBLGtFQUZBO0FBR0EsNEVBSEE7QUFJQSw4REFKQTtBQUtBLDhEQUxBO0FBTUEsOEVBTkE7QUFPQSxzRUFQQTtBQVFBO0FBUkEsR0FMQTtBQWVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGVBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0EsbUJBTEE7QUFNQSxhQU5BO0FBT0E7QUFQQTtBQVNBLEdBekJBO0FBMEJBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFVBSkEsb0JBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxVQVBBLG9CQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsYUFWQSx1QkFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLGNBYkEsc0JBYUEsSUFiQSxFQWFBO0FBQ0E7QUFDQTtBQWZBLEdBMUJBO0FBNENBLFNBNUNBLHFCQTRDQTtBQUFBOztBQUNBO0FBRUE7QUFDQSxrRkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUEseURBQ0EsSUFEQSxDQUNBO0FBRUE7QUFDQTtBQUNB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RUFBRSx5RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzJFO0FBQzNCO0FBQ0w7OztBQUcxRDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDb0U7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ0EsQ0FBMEY7QUFDMUYsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsdUVBQU07QUFDUixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxxRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQiIsImZpbGUiOiJhc3NldHNfdmlld3NfVXNlcl92dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cImJnLWZvbnRDb2xvci1wcmltYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+wqkgQ29weXJpZ2h0IGFsbCByaWdodHMgcmVzZXJ2ZWQgdG8gUGnDsWEgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaWRlTmF2QmFyLWNvbnRhaW5lciBoLWZ1bGwgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBtZDp3LWZ1bGxcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBtZDp3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi91c2VyL2RlcGFydG1lbnRcIj48aW1nIGNsYXNzPVwibXktMTAgdy0xMCBoLTEwIHNtOnctMjQgc206aC0yNCBcIiA6c3JjPVwicmVxdWlyZSgnLi4vLi4vbWVkaWEvTE9HTy9MT0dPX1Bpw7FhLTAyLnBuZycpXCI+PC9yb3V0ZXItbGluaz4gIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgc206aGlkZGVuXCI+XG4gICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInRvZ2dsZVwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC1saWdodGVyIGJvcmRlci10ZWFsLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIvPjwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgOmNsYXNzPVwib3BlbiA/ICdibG9jayc6ICdoaWRkZW4nXCIgY2xhc3M9XCJzaWRlbmF2QmFyLWVsZW1lbnQtY29udGFpbmVyIGZsZXgtZ3JvdyBzbTpmbGV4IHNtOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbSBoLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBzbTpmbGV4LWdyb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiYm9hcmRzXCI+PEJvYXJkcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2IEBtb3VzZW92ZXI9XCJhY3RpdmUgPSB0cnVlXCIgQG1vdXNlbGVhdmU9XCJhY3RpdmUgPSBmYWxzZVwiPiBcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtbC0zIG1yLTMgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibG9jay13b3JraW5nLXByaW1hcnlcIiA+TWlzIHRhYmxlcm9zPC9hPlxuICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImFjdGl2ZVwiIHYtZm9yPVwiaXRlbXMgaW4gdGVhbXNcIiA6a2V5PVwiaXRlbXMuaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd0ZWFtcycsIHBhcmFtczoge2JvYXJkTmFtZTogaXRlbXMubmFtZSwgYm9hcmRUZWFtSUQ6IGl0ZW1zLmlkIH19XCIgY2xhc3M9XCJob3Zlcjp0ZXh0LWluZGlnby01MDBcIj57e2l0ZW1zLm5hbWV9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCIgdi1wb3BvdmVyOmZvby5yaWdodD5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwibm90aWZpY2F0aW9uXCI+PE5vdGlmaWNhdGlvbi8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPk5vdGlmaWNhY2lvbmVzPC9hPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiaWRSb2wgPT09ICdhZG1pbmlzdHJhZG9yJ3x8ICdyZXNwb25zYWJsZSdcIiBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCI+XG4gICAgICAgICAgICA8aWNvbi1iYXNlIGljb24tbmFtZT1cImRlcGFydG1lbnRcIj48U2NoZWR1bGUvPjwvaWNvbi1iYXNlPlxuICAgICAgICAgICAgPGRpdj4gPGEgY2xhc3M9XCJtbC0zIG1yLTNcIj48cm91dGVyLWxpbmsgdG89XCIvdXNlci9kZXBhcnRtZW50XCI+RGVwYXJ0YW1lbnRvczwvcm91dGVyLWxpbms+PC9hPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImlkUm9sID09PSAnYWRtaW5pc3RyYWRvcicgfHwgJ3Jlc3BvbnNhYmxlJ1wiIGNsYXNzPVwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL3dlbGNvbWVcIj5JbmNpZGVuY2lhczwvcm91dGVyLWxpbms+PC9hPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImlkUm9sID09PSAnYWRtaW5pc3RyYWRvcicgfHwgJ3Jlc3BvbnNhYmxlJ1wiIGNsYXNzPVwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL2FkbWluXCI+QWRtaW48L3JvdXRlci1saW5rPjwvYT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VySW5mby5pZFwiIGNsYXNzPVwidy0xMiBoLTEyIHBsYWNlLXNlbGYtY2VudGVyIGN1cnNvci1wb2ludGVyIG0tMlwiPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncHJvZmlsZVVzZXInLCBwYXJhbXM6IHtpZFVzZXI6IHVzZXJJbmZvLmlkIH19XCI+ICBcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJgL2Fzc2V0cy9pbWFnZXMvdXNlcnMvJHt1c2VySW5mby5pZH1gXCIgQGVycm9yPVwicmVxdWlyZShgLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nYClcIiBjbGFzcz1cInJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwicmVxdWlyZShgLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nYClcIiBAZXJyb3I9XCJyZXF1aXJlKGAuLi8uLi9tZWRpYS91c2Vycy9hdmF0YXItbG9hZGluZy5wbmdgKVwiIGNsYXNzPVwicm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPiAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zZWxmLWNlbnRlciBtLTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIHJvdW5kZWQgYmctcmVkLTUwMFwiIHYtb246Y2xpY2s9XCJsb2dvdXRcIiA+TE9HIE9VVDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHBvcG92ZXIgbmFtZT1cImZvb1wiIDp3aWR0aD1cIjUwMFwiPlxuICAgICAgTm90aWZpY2FjaW9uZXNcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiPlRvZG9zPC9kaXY+XG4gICAgICAgIDxkaXY+Tm8gbGVpZG88L2Rpdj5cbiAgICAgICAgPGRpdj5NZSBtZW5jaW9uYXJvbjwvZGl2PlxuICAgICAgICA8ZGl2Pk1lIGFzaWduYXJvbjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyIGJnLXNpZGVCYXItcHJpbWFyeSB3LWZ1bGwgaC0wLjVcIj48L2Rpdj5cbiAgICA8L3BvcG92ZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9pY29ucy9JY29uQmFzZS52dWUnXG5pbXBvcnQgSWNvbkFkZFVzZXIgZnJvbSAnLi4vaWNvbnMvSWNvbkFkZFVzZXIudnVlJ1xuaW1wb3J0IEJvYXJkcyBmcm9tICcuLi9pY29ucy9Cb2FyZHMudnVlJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vaWNvbnMvTGlzdC52dWUnXG5pbXBvcnQgTWFpbCBmcm9tICcuLi9pY29ucy9NYWlsLnZ1ZSdcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZSdcbmltcG9ydCBTY2hlZHVsZSBmcm9tICcuLi9pY29ucy9TY2hlZHVsZS52dWUnXG5pbXBvcnQgeyBnZXRVc2VyVG9rZW4sIGdldFVzZXJEZXBhcnRtZW50cywgZ2V0QWxsVGVhbXNGcm9tRGVwYXJ0bWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2llcy91c2VyU2VydmljaWVzJ1xuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9ldmVudC1idXMnXG5pbXBvcnQgSW5jaWRlbmNpYXMgZnJvbSAnLi4vaWNvbnMvSW5jaWRlbmNpYXMudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VyU2lkZU5hdicsXG4gIHByb3BzOiB7XG4gICAgaWRSb2w6IFN0cmluZ1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgSWNvbkJhc2UsXG4gICAgQm9hcmRzLFxuICAgIEljb25BZGRVc2VyLFxuICAgIExpc3QsXG4gICAgTWFpbCxcbiAgICBOb3RpZmljYXRpb24sXG4gICAgU2NoZWR1bGUsXG4gICAgSW5jaWRlbmNpYXNcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHRlYW1zOiBbXSxcbiAgICB1c2VySW5mbzogW10sXG4gICAgZGVwYXJ0bWVudHM6IFtdLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgc3JjOiAnJyxcbiAgICBleGlzdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIHNob3cgKCkge1xuICAgICAgdGhpcy4kbW9kYWwuc2hvdygnbm90aWZpY2FjaW9uJyk7XG4gICAgfSxcbiAgICB0b2dnbGUoKXtcbiAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB9LFxuICAgIGxvZ291dCgpe1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dvdXQnKVxuICAgIH0sXG4gICAgc2hvd0JvYXJkKCl7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZVxuICAgIH0sXG4gICAgcHJvZmlsZUltZyhmaWxlKXtcbiAgICAgIHRoaXMuc3JjID0gZmlsZVxuICAgIH1cbiAgICBcbiAgfSxcbiAgY3JlYXRlZCgpe1xuICAgICAgIC8vR0VUIFVTRVIgZGVwYXJ0bWVudHNcbiAgICAgIFxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJyk7XG4gICAgICAgIGdldFVzZXJUb2tlbih0b2tlbilcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSA9PSBcIkVSUk9SOiBUb2tlbiBubyB2YWxpZG9cIiApe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IGRhdGFcblxuICAgICAgICAgIGZldGNoKFwiL2Fzc2V0cy9pbWFnZXMvdXNlcnMvXCIgKyB0aGlzLnVzZXJJbmZvLmlkICkgXG4gICAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XG4gICAgICAgICAgICAgICAgdGhpcy5leGlzdCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpc3QgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSApLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhpc3QgPSBmYWxzZVxuICAgICAgICAgIH0pXG5cblxuICAgICAgICAgIGdldFVzZXJEZXBhcnRtZW50cyh0b2tlbiwgdGhpcy51c2VySW5mby5pZCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHMgPSBkYXRhXG4gICAgICAgICAgICBnZXRBbGxUZWFtc0Zyb21EZXBhcnRtZW50KHRva2VuLCB0aGlzLmRlcGFydG1lbnRzWzBdLmlkKS50aGVuKGRhdGEgPT4gKHRoaXMudGVhbXMgPSBkYXRhKSlcbiAgICAgICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgRXZlbnRCdXMuJG9uKCdpbWdQcm9maWxlJywgdGhpcy5wcm9maWxlSW1nKVxuICB9LFxuXG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctc2NyZWVuIGgtZnVsbCBmb250LUJhcmxvd1wiPlxuICAgICAgICA8YXNpZGU+IFxuICAgICAgICAgIDxVc2VyU2lkZUJhciA6aWRSb2w9XCJpZFJvbE5hbWVcIi8+IFxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgIDxyb3V0ZXItdmlldz48V2VsY29tZS8+PC9yb3V0ZXItdmlldz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVXNlclNpZGVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci52dWUnO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXJOYXZCYXIvV2VsY29tZS9XZWxjb21lJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlcicsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBVc2VyU2lkZUJhcixcbiAgICBGb290ZXIsXG4gICAgV2VsY29tZVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZFJvbDogbnVsbCxcbiAgICAgIGlkUm9sTmFtZTogXCJcIixcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAgIGdldFVzZXIoKXtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKSk7XG4gICAgICAgIGZldGNoKFwiL2FwaS91c2VyXCIse1xuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3AgPT4gIHJlc3AuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZFJvbCA9IGRhdGEuaWRfcm9sXG4gICAgICAgICAgICB0aGlzLmdldFJvbGUodGhpcy5pZFJvbClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRSb2xlKGlkUm9sKXtcbiAgICAgICAgZmV0Y2goXCIvYXBpL3JvbC9cIitpZFJvbCtcIj90b2tlbj1cIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpKVxuICAgICAgICAgIC50aGVuKHJlc3AgPT4gIHJlc3AuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICB0aGlzLmlkUm9sTmFtZSA9IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbigpe1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpID09PSBudWxsKVxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKSBcbiAgICAgICAgdGhpcy5nZXRVc2VyKClcbiAgICB9LFxuICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZ1wiLCBbXG4gICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGQ6XG4gICAgICAgICAgXCJNMjQ3LDQyLjM4QTE0NC43MSwxNDQuNzEsMCwwLDAsNDIuMzgsMjQ3LDE0NC43MSwxNDQuNzEsMCwwLDAsMjQ3LDQyLjM4Wk0xNDQuNywyNzIuNDVBMTI3Ljc1LDEyNy43NSwwLDEsMSwyNzIuNDUsMTQ0LjcsMTI3Ljg5LDEyNy44OSwwLDAsMSwxNDQuNywyNzIuNDVabTAsMFwiXG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBhdGhcIiwge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xzLTFcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGQ6XG4gICAgICAgICAgXCJNMjEwLjc1LDExNy42M2wtNzQsNzRhMTQsMTQsMCwwLDEtMTkuODYsMEw3OC42NywxNTMuNDNhMTQsMTQsMCwwLDEsMTkuODYtMTkuODZsMjguMjgsMjguMjgsNjQuMDgtNjQuMDhhMTQsMTQsMCwwLDEsMTkuODYsMTkuODZaXCJcbiAgICAgIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJnXCIsIFtcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdDNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNNzQxLjYsNTQ0LjFMNDM3LjEsMzljLTEyLTE5LjktMzMuOS0zMi4zLTU3LjEtMzIuM1MzMzQuOSwxOS4yLDMyMi45LDM5bC0zMDQuNSw1MDVcXG5cXHRcXHRcXHRcXHRcXHRjLTEyLjQsMjAuNi0xMi44LDQ2LjMtMSw2Ny4yYzExLjgsMjAuOSwzNC4xLDMzLjksNTguMSwzMy45aDYwOWMyNCwwLDQ2LjMtMTMsNTguMS0zMy45Qzc1NC40LDU5MC40LDc1NCw1NjQuNiw3NDEuNiw1NDQuMXpcXG5cXHRcXHRcXHRcXHRcXHQgTTcwMC41LDU4Ny41Yy0zLjMsNS44LTkuNCw5LjMtMTYsOS4zaC02MDljLTYuNiwwLTEyLjctMy42LTE2LTkuM2MtMy4zLTUuOC0zLjEtMTIuOCwwLjMtMTguNUwzNjQuMyw2NFxcblxcdFxcdFxcdFxcdFxcdGMzLjMtNS41LDkuMy04LjksMTUuNy04LjljNi40LDAsMTIuNCwzLjQsMTUuNyw4LjlsMzA0LjUsNTA1QzcwMy43LDU3NC43LDcwMy44LDU4MS44LDcwMC41LDU4Ny41elwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZ1wiLCBbXG4gICAgICBfYyhcImdcIiwgW1xuICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0M1wiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkOlxuICAgICAgICAgICAgICBcIk0zODAuMiwyMDUuN2MtMTguNCwwLTMyLjcsOS45LTMyLjcsMjcuNGMwLDUzLjQsNi4zLDEzMCw2LjMsMTgzLjRjMCwxMy45LDEyLjEsMTkuNywyNi41LDE5LjdcXG5cXHRcXHRcXHRcXHRcXHRjMTAuOCwwLDI2LTUuOCwyNi0xOS43YzAtNTMuNCw2LjMtMTMwLDYuMy0xODMuNEM0MTIuNSwyMTUuNSwzOTcuNywyMDUuNywzODAuMiwyMDUuN3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdDNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNMzgwLjcsNDY3LjFjLTE5LjcsMC0zNC41LDE1LjctMzQuNSwzNC41YzAsMTguNCwxNC44LDM0LjUsMzQuNSwzNC41YzE4LjQsMCwzNC4xLTE2LjEsMzQuMS0zNC41XFxuXFx0XFx0XFx0XFx0XFx0QzQxNC44LDQ4Mi44LDM5OS4xLDQ2Ny4xLDM4MC43LDQ2Ny4xelwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJwYXRoXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgZDpcbiAgICAgICAgXCJNMjk1LjI5LDBIMzUuNjZBMzUuNywzNS43LDAsMCwwLDAsMzUuNjZWMjUzLjc1YTM1LjcsMzUuNywwLDAsMCwzNS42NiwzNS42NkgyOTUuMjlBMzUuNywzNS43LDAsMCwwLDMzMSwyNTMuNzVWMzUuNjZBMzUuNywzNS43LDAsMCwwLDI5NS4yOSwwWm0wLDE5LjM5YTE2LjE1LDE2LjE1LDAsMCwxLDIuMzguMThMMTc3LDE0MC4yNmExNi4yOSwxNi4yOSwwLDAsMS0yMywwTDMzLjI4LDE5LjU3YTE2LjE2LDE2LjE2LDAsMCwxLDIuMzgtLjE4Wm0xNi4yNywyMzQuMzZBMTYuMjksMTYuMjksMCwwLDEsMjk1LjI5LDI3MEgzNS42NmExNi4yOSwxNi4yOSwwLDAsMS0xNi4yNy0xNi4yN1YzNS42NmExNi40MywxNi40MywwLDAsMSwuMTctMi4zOEwxNDAuMjYsMTU0YTM1LjcsMzUuNywwLDAsMCw1MC40MywwTDMxMS4zOCwzMy4yOGExNi40NSwxNi40NSwwLDAsMSwuMTcsMi4zOFptMCwwXCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInBhdGhcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBkOlxuICAgICAgICBcIk0yMjQuODQsMTI1Ljk0QTUzLjg5LDUzLjg5LDAsMSwwLDE3Nyw0Ny4zMmE4OC4xOSw4OC4xOSwwLDAsMC0xOS41Ny03LjkxLDI2LjY0LDI2LjY0LDAsMSwwLTQ2Ljc0LDAsODkuMzYsODkuMzYsMCwwLDAtNjUuODUsODYuMDl2NzUuNjVhMjYuNjQsMjYuNjQsMCwwLDAsOC40OCw1MS45SDkwYTQ0LjgsNDQuOCwwLDAsMCw4OCwwaDM2Ljc0YTI2LjY0LDI2LjY0LDAsMCwwLDguNDgtNTEuOVYxMjUuOTFsMS42MSwwWm0wLTkwLjgyYTM2LjkzLDM2LjkzLDAsMSwxLTM2LjkzLDM2LjkzLDM3LDM3LDAsMCwxLDM2LjkzLTM2LjkzWk0xMzQsMTdhOS42OCw5LjY4LDAsMSwxLTkuNjgsOS42OEE5LjcsOS43LDAsMCwxLDEzNCwxN1ptMCwyNTUuNDlhMjcuOSwyNy45LDAsMCwxLTI2LjUzLTE5LjM3aDUzLjA2QTI3LjksMjcuOSwwLDAsMSwxMzQsMjcyLjQ1Wm03Mi4yNS0xNDYuOTJ2ODIuNzVhOC40OCw4LjQ4LDAsMCwwLDguNDgsOC40OCw5LjY4LDkuNjgsMCwwLDEsMCwxOS4zN0g1My4zYTkuNjgsOS42OCwwLDEsMSwwLTE5LjM3LDguNDgsOC40OCwwLDAsMCw4LjQ4LTguNDhWMTI1LjUzQTcyLjI2LDcyLjI2LDAsMCwxLDE3MS41OCw2My44MWE1My45Miw1My45MiwwLDAsMCwzNC42Miw1OC44MWMwLDEsLjA3LDEuOTUuMDcsMi45MlptMCwwXCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZm9vdGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmctZm9udENvbG9yLXByaW1hcnlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLCqSBDb3B5cmlnaHQgYWxsIHJpZ2h0cyByZXNlcnZlZCB0byBQacOxYSBcIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwic2lkZU5hdkJhci1jb250YWluZXIgaC1mdWxsIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGl0ZW1zLWNlbnRlciBiZy1zaWRlQmFyLXByaW1hcnkgbWQ6dy1mdWxsXCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImgtc2NyZWVuIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGl0ZW1zLWNlbnRlciBiZy1zaWRlQmFyLXByaW1hcnkgbWQ6dy1mdWxsXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvdXNlci9kZXBhcnRtZW50XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXktMTAgdy0xMCBoLTEwIHNtOnctMjQgc206aC0yNCBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uL21lZGlhL0xPR08vTE9HT19QacOxYS0wMi5wbmdcIikgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHNtOmhpZGRlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LXRlYWwtbGlnaHRlciBib3JkZXItdGVhbC1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aXRsZVwiLCBbX3ZtLl92KFwiTWVudVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkOiBcIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJzaWRlbmF2QmFyLWVsZW1lbnQtY29udGFpbmVyIGZsZXgtZ3JvdyBzbTpmbGV4IHNtOml0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLm9wZW4gPyBcImJsb2NrXCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInRleHQtc20gaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgc206ZmxleC1ncm93IGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlICBtbC0zIGZsZXggZmxleC1yb3cgbS0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImljb24tbmFtZVwiOiBcImJvYXJkc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiQm9hcmRzXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1sLTMgbXItMyBncm91cCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsb2NrLXdvcmtpbmctcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1pcyB0YWJsZXJvc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtcywgZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1zLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG92ZXI6dGV4dC1pbmRpZ28tNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGVhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZE5hbWU6IGl0ZW1zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkVGVhbUlEOiBpdGVtcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW1zLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwb3BvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXBvcG92ZXI6Zm9vLnJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImZvb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyByaWdodDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImljb24tbmFtZVwiOiBcIm5vdGlmaWNhdGlvblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiTm90aWZpY2F0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlkUm9sID09PSBcImFkbWluaXN0cmFkb3JcIiB8fCBcInJlc3BvbnNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpY29uLW5hbWVcIjogXCJkZXBhcnRtZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiU2NoZWR1bGVcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBtci0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvdXNlci9kZXBhcnRtZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlcGFydGFtZW50b3NcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pZFJvbCA9PT0gXCJhZG1pbmlzdHJhZG9yXCIgfHwgXCJyZXNwb25zYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLW5hbWVcIjogXCJkZXBhcnRtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNzYwIDY1MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJJbmNpZGVuY2lhc1wiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0zIG1yLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi91c2VyL3dlbGNvbWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSW5jaWRlbmNpYXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pZFJvbCA9PT0gXCJhZG1pbmlzdHJhZG9yXCIgfHwgXCJyZXNwb25zYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLW5hbWVcIjogXCJkZXBhcnRtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNzYwIDY1MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJJbmNpZGVuY2lhc1wiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0zIG1yLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi91c2VyL2FkbWluXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFkbWluXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBsYWNlLXNlbGYtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0udXNlckluZm8uaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInctMTIgaC0xMiBwbGFjZS1zZWxmLWNlbnRlciBjdXJzb3ItcG9pbnRlciBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZmlsZVVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZFVzZXI6IF92bS51c2VySW5mby5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvdXNlcnMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlckluZm8uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9tZWRpYS91c2Vycy9hdmF0YXItbG9hZGluZy5wbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiLi4vLi4vbWVkaWEvdXNlcnMvYXZhdGFyLWxvYWRpbmcucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBsYWNlLXNlbGYtY2VudGVyIG0tMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgcm91bmRlZCBiZy1yZWQtNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMT0cgT1VUXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9wb3ZlclwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiZm9vXCIsIHdpZHRoOiA1MDAgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICBOb3RpZmljYWNpb25lc1xcbiAgICBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvdmVyOnRleHQtc2lkZUJhci1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJUb2Rvc1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIk5vIGxlaWRvXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiTWUgbWVuY2lvbmFyb25cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJNZSBhc2lnbmFyb25cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGFjZXIgYmctc2lkZUJhci1wcmltYXJ5IHctZnVsbCBoLTAuNVwiIH0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJtbC0zIG1yLTNcIiB9LCBbX3ZtLl92KFwiTm90aWZpY2FjaW9uZXNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCB3LXNjcmVlbiBoLWZ1bGwgZm9udC1CYXJsb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYXNpZGVcIixcbiAgICAgICAgICBbX2MoXCJVc2VyU2lkZUJhclwiLCB7IGF0dHJzOiB7IGlkUm9sOiBfdm0uaWRSb2xOYW1lIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LFxuICAgICAgICAgIFtfYyhcInJvdXRlci12aWV3XCIsIFtfYyhcIldlbGNvbWVcIildLCAxKV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIkZvb3RlclwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Cb2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4ZGI1ZjQ2JlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYThkYjVmNDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYThkYjVmNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYThkYjVmNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0JvYXJkcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YThkYjVmNDYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYThkYjVmNDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2ljb25zL0JvYXJkcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luY2lkZW5jaWFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZGFiZGVjYyZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RkYWJkZWNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RkYWJkZWNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RkYWJkZWNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmNpZGVuY2lhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGRhYmRlY2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGRhYmRlY2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2ljb25zL0luY2lkZW5jaWFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2EzMWMwYzcmXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YTMxYzBjNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YTMxYzBjNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YTMxYzBjNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2EzMWMwYzcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2EzMWMwYzcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2ljb25zL01haWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiM2QxMWZiJlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmIzZDExZmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmIzZDExZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmIzZDExZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vdGlmaWNhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIzZDExZmImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmIzZDExZmInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2ljb25zL05vdGlmaWNhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Zvb3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2NGI3NzUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYjY0Yjc3NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYjY0Yjc3NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYjY0Yjc3NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjY0Yjc3NSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYjY0Yjc3NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYjliMjIzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiYjliMjIzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYjliMjIzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYjliMjIzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJiOWIyMjMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JiOWIyMjMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc0YjI5NWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3NGIyOTVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3NGIyOTVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3NGIyOTVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzRiMjk1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzRiMjk1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3ZpZXdzL1VzZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==