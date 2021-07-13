(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_views_User_vue"],{

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
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_IconAddUser_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/IconAddUser.vue */ "./assets/components/icons/IconAddUser.vue");
/* harmony import */ var _icons_Boards_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/Boards.vue */ "./assets/components/icons/Boards.vue");
/* harmony import */ var _icons_List_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/List.vue */ "./assets/components/icons/List.vue");
/* harmony import */ var _icons_Mail_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/Mail.vue */ "./assets/components/icons/Mail.vue");
/* harmony import */ var _icons_Notification_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/Notification.vue */ "./assets/components/icons/Notification.vue");
/* harmony import */ var _icons_Schedule_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/Schedule.vue */ "./assets/components/icons/Schedule.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../event-bus */ "./assets/event-bus.js");
/* harmony import */ var _icons_Incidencias_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/Incidencias.vue */ "./assets/components/icons/Incidencias.vue");



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
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Boards: _icons_Boards_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    IconAddUser: _icons_IconAddUser_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    List: _icons_List_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    Mail: _icons_Mail_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    Notification: _icons_Notification_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    Schedule: _icons_Schedule_vue__WEBPACK_IMPORTED_MODULE_9__.default,
    Incidencias: _icons_Incidencias_vue__WEBPACK_IMPORTED_MODULE_12__.default
  },
  data: function data() {
    return {
      open: false,
      teams: [],
      userInfo: [],
      departments: [],
      active: false,
      src: '',
      exist: false,
      content: [],
      all: [],
      assign: [],
      mention: [],
      no_read: [],
      notifications: {},
      numbernotifications: 0,
      showNotifications: false
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
    profileImg: function profileImg(file) {
      this.src = file;
    },
    readed: function readed(id_notification) {
      var _this = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('id_notification', id_notification);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_10__.readNotifications)(formData, _this.userInfo.id));
      });
      promise.then(function (response) {
        _this.fetchData();

        _this.openNotifications('notread');
      });
    },
    openNotifications: function openNotifications(text) {
      this.content = '';
      if (text == 'all') this.content = this.all;else if (text == 'notread') this.content = this.no_read;else if (text == 'asigned') this.content = this.assign;else this.content = this.mention;
    },
    getNotis: function getNotis() {
      var _this2 = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_10__.getNotifications)(token, this.userInfo.id).then(function (data) {
        _this2.notifications = data;
        _this2.all = data.all;
        if (_this2.content.length === 0) _this2.content = data.all;
        _this2.no_read = data.no_read;
        _this2.numbernotifications = _this2.no_read.length;
        _this2.mention = data.mension;
        _this2.assign = data.assign;
      });
    },
    fetchData: function fetchData() {
      var _this3 = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_10__.getUserToken)(token).then(function (data) {
        if (data == "ERROR: Token no valido") {
          localStorage.clear();
          location.reload();
          return;
        }

        _this3.userInfo = data;
        fetch("/assets/images/users/" + _this3.userInfo.id).then(function (response) {
          if (response.ok) {
            _this3.exist = true;
          } else {
            _this3.exist = false;
          }
        })["catch"](function (error) {
          _this3.exist = false;
        });

        _this3.getNotis();

        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_10__.getUserDepartments)(token, _this3.userInfo.id).then(function (data) {
          _this3.departments = data;
          (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_10__.getAllTeamsFromDepartment)(token, _this3.departments[0].id).then(function (data) {
            return _this3.teams = data;
          });
        });
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    setInterval(function () {
      _this4.getNotis();
    }, 100000);
  },
  created: function created() {
    //GET USER departments
    this.fetchData();
    _event_bus__WEBPACK_IMPORTED_MODULE_11__.EventBus.$on('imgProfile', this.profileImg);
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
    return _c("footer", { staticClass: "bg-fontColor-primary" }, [
      _c("div", { staticClass: "text-white text-center" }, [
        _vm._v("© Copyright all rights reserved to Piña ")
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
        "sideNavBar-container h-full flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full "
    },
    [
      _c(
        "div",
        {
          staticClass:
            "h-screen flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full "
        },
        [
          _c(
            "div",
            { staticClass: "flex" },
            [
              _c("router-link", { attrs: { to: "/user/department" } }, [
                _c("img", {
                  staticClass: "my-10 w-10 h-10 sm:w-24 sm:h-24",
                  attrs: { src: "/assets/images/build/LOGO_Piña-02.png" }
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
                        staticClass:
                          "text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2",
                        on: {
                          click: function($event) {
                            _vm.showNotifications = !_vm.showNotifications
                          }
                        }
                      },
                      [
                        _c(
                          "icon-base",
                          { attrs: { "icon-name": "notification" } },
                          [_c("Notification")],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c("a", { staticClass: " ml-3 mr-3" }, [
                            _vm._v("Notificaciones")
                          ]),
                          _vm._v(" "),
                          _vm.numbernotifications != 0
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    " items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.numbernotifications) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
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
                                        staticClass: "w-12 h-12 rounded-full ",
                                        attrs: {
                                          src:
                                            "/assets/images/users/" +
                                            _vm.userInfo.id
                                        }
                                      })
                                    ])
                                  : _c("div", [
                                      _c("img", {
                                        staticClass: "w-12 h-12 rounded-full ",
                                        attrs: {
                                          src:
                                            "/assets/images/avatar-loading.png"
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
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showNotifications,
              expression: "showNotifications"
            }
          ],
          staticClass:
            "fixed top-[200px] left-[200px] w-[500px] h-[300px] z-[51px] bg-white rounded-lg overflow-auto"
        },
        [
          _vm._v("\n    Notificaciones\n    "),
          _c("div", [
            _c("div", { staticClass: "flex flex-row justify-around" }, [
              _c(
                "div",
                {
                  staticClass: "hover:text-sideBar-primary cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.openNotifications("all")
                    }
                  }
                },
                [_vm._v("Todos")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "hover:text-sideBar-primary cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.openNotifications("notread")
                    }
                  }
                },
                [_vm._v("No leido")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "hover:text-sideBar-primary cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.openNotifications("mentioned")
                    }
                  }
                },
                [_vm._v("Me mencionaron")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "hover:text-sideBar-primary cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.openNotifications("asigned")
                    }
                  }
                },
                [_vm._v("Me asignaron")]
              )
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "spacer bg-sideBar-primary w-full h-0.5"
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-content" },
              _vm._l(_vm.content, function(items) {
                return _c("div", { key: items, attrs: { id: "sidebar" } }, [
                  _vm._v(
                    "\n          " + _vm._s(items["message"]) + "\n          "
                  ),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: items.readed == 0,
                          expression: "items.readed == 0"
                        }
                      ],
                      on: {
                        click: function($event) {
                          return _vm.readed(items.id)
                        }
                      }
                    },
                    [_vm._v("\n          read\n        ")]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "\n          " + _vm._s(items.created_at) + "\n        "
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
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
  return _c("div", [
    _c("div", { staticClass: "flex w-screen h-screen font-Barlow" }, [
      _c(
        "aside",
        { staticClass: "fixed w-48 top-0 left-0 z-50" },
        [_c("UserSideBar", { attrs: { idRol: _vm.idRolName } })],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "w-screen ml-40 py-0 px-5" },
        [_c("router-view", [_c("Welcome")], 1)],
        1
      )
    ])
  ])
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvdXNlci9Vc2VyU2lkZUJhci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZT9mMDNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZT85Yjc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0JvYXJkcy52dWU/YmE5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWU/NTUzMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9NYWlsLnZ1ZT9mYjg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL05vdGlmaWNhdGlvbi52dWU/ZjNkMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZT9hNjQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlPzZiOTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1VzZXIudnVlPzQ1MjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvQm9hcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9JbmNpZGVuY2lhcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvVXNlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0E7QUFDQSxzRUFEQTtBQUVBLGtFQUZBO0FBR0EsNEVBSEE7QUFJQSw4REFKQTtBQUtBLDhEQUxBO0FBTUEsOEVBTkE7QUFPQSxzRUFQQTtBQVFBO0FBUkEsR0FMQTtBQWVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGVBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0EsbUJBTEE7QUFNQSxhQU5BO0FBT0Esa0JBUEE7QUFRQSxpQkFSQTtBQVNBLGFBVEE7QUFVQSxnQkFWQTtBQVdBLGlCQVhBO0FBWUEsaUJBWkE7QUFhQSx1QkFiQTtBQWNBLDRCQWRBO0FBZUE7QUFmQTtBQWdCQSxHQWhDQTtBQWlDQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxVQUpBLG9CQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsVUFQQSxvQkFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLGNBVkEsc0JBVUEsSUFWQSxFQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUEsVUFiQSxrQkFhQSxlQWJBLEVBYUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFFQTs7QUFDQTtBQUNBLE9BSkE7QUFNQSxLQTNCQTtBQTRCQSxxQkE1QkEsNkJBNEJBLElBNUJBLEVBNEJBO0FBQ0E7QUFDQSx5QkFDQSx3QkFEQSxLQUVBLHVCQUNBLDRCQURBLEtBRUEsdUJBQ0EsMkJBREEsS0FHQTtBQUNBLEtBdENBO0FBdUNBLFlBdkNBLHNCQXVDQTtBQUFBOztBQUNBO0FBQ0EsMkdBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0EsS0FwREE7QUFxREEsYUFyREEsdUJBcURBO0FBQUE7O0FBQ0E7QUFDQSxxRkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUEsNERBQ0EsSUFEQSxDQUNBO0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxTQVRBLFdBU0E7QUFDQTtBQUNBLFNBWEE7O0FBYUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLFNBSEE7QUFJQSxPQTNCQTtBQTRCQTtBQW5GQSxHQWpDQTtBQXVIQSxTQXZIQSxxQkF1SEE7QUFBQTs7QUFDQTtBQUNBO0FBQUEsS0FEQSxFQUNBLE1BREE7QUFHQSxHQTNIQTtBQTRIQSxTQTVIQSxxQkE0SEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQWxJQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGNBREE7QUFFQTtBQUNBLHNGQURBO0FBRUEsOEVBRkE7QUFHQTtBQUhBLEdBRkE7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVpBO0FBYUE7QUFDQSxXQURBLHFCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBLFNBSUEsSUFKQSxDQUlBO0FBQUE7QUFBQSxPQUpBLEVBS0EsSUFMQSxDQUtBO0FBQ0E7O0FBQ0E7QUFDQSxPQVJBLFdBU0E7QUFDQTtBQUNBO0FBQ0EsT0FaQTtBQWFBLEtBakJBO0FBa0JBLFdBbEJBLG1CQWtCQSxLQWxCQSxFQWtCQTtBQUFBOztBQUNBLHdGQUNBLElBREEsQ0FDQTtBQUFBO0FBQUEsT0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0EsT0FKQSxXQUtBO0FBQ0E7QUFDQTtBQUNBLE9BUkE7QUFTQTtBQTVCQSxHQWJBO0FBMkNBO0FBQ0EsMkRBQ0E7QUFDQTtBQUNBO0FBL0NBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnFOLENBQUMsaUVBQWUsNk1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWpDLENBQUMsaUVBQWUsc01BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNB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QUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENvRTtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDQSxDQUEwRjtBQUMxRixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx1RUFBTTtBQUNSLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCIiwiZmlsZSI6ImFzc2V0c192aWV3c19Vc2VyX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNpZGVOYXZCYXItY29udGFpbmVyIGgtZnVsbCBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgYmctc2lkZUJhci1wcmltYXJ5IG1kOnctZnVsbCBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBtZDp3LWZ1bGwgXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvdXNlci9kZXBhcnRtZW50XCI+PGltZyBjbGFzcz1cIm15LTEwIHctMTAgaC0xMCBzbTp3LTI0IHNtOmgtMjRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9idWlsZC9MT0dPX1Bpw7FhLTAyLnBuZ1wiPjwvcm91dGVyLWxpbms+ICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIHNtOmhpZGRlblwiPlxuICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJ0b2dnbGVcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LXRlYWwtbGlnaHRlciBib3JkZXItdGVhbC1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IDpjbGFzcz1cIm9wZW4gPyAnYmxvY2snOiAnaGlkZGVuJ1wiIGNsYXNzPVwic2lkZW5hdkJhci1lbGVtZW50LWNvbnRhaW5lciBmbGV4LWdyb3cgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc20gaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgc206ZmxleC1ncm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiAgY2xhc3M9XCJ0ZXh0LXdoaXRlICBtbC0zIGZsZXggZmxleC1yb3cgbS0yXCI+XG4gICAgICAgICAgICA8aWNvbi1iYXNlIGljb24tbmFtZT1cImJvYXJkc1wiPjxCb2FyZHMvPjwvaWNvbi1iYXNlPlxuICAgICAgICAgICAgPGRpdiBAbW91c2VvdmVyPVwiYWN0aXZlID0gdHJ1ZVwiIEBtb3VzZWxlYXZlPVwiYWN0aXZlID0gZmFsc2VcIj4gXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibWwtMyBtci0zIGdyb3VwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmxvY2std29ya2luZy1wcmltYXJ5XCIgPk1pcyB0YWJsZXJvczwvYT5cbiAgICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJhY3RpdmVcIiB2LWZvcj1cIml0ZW1zIGluIHRlYW1zXCIgOmtleT1cIml0ZW1zLmlkXCI+XG4gICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndGVhbXMnLCBwYXJhbXM6IHtib2FyZE5hbWU6IGl0ZW1zLm5hbWUsIGJvYXJkVGVhbUlEOiBpdGVtcy5pZCB9fVwiIGNsYXNzPVwiaG92ZXI6dGV4dC1pbmRpZ28tNTAwXCI+e3tpdGVtcy5uYW1lfX08L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAgY2xhc3M9XCJ0ZXh0LXdoaXRlICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiIEBjbGljaz1cInNob3dOb3RpZmljYXRpb25zPSFzaG93Tm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgPGljb24tYmFzZSBpY29uLW5hbWU9XCJub3RpZmljYXRpb25cIj48Tm90aWZpY2F0aW9uLz48L2ljb24tYmFzZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiIG1sLTMgbXItM1wiPk5vdGlmaWNhY2lvbmVzPC9hPlxuICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwibnVtYmVybm90aWZpY2F0aW9ucyAhPSAwXCIgY2xhc3M9XCIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1yZWQtMTAwIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBiZy1yZWQtNjAwIHJvdW5kZWQtZnVsbFwiPnt7bnVtYmVybm90aWZpY2F0aW9uc319XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiaWRSb2wgPT09ICdhZG1pbmlzdHJhZG9yJ3x8ICdyZXNwb25zYWJsZSdcIiBjbGFzcz1cInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCI+XG4gICAgICAgICAgICA8aWNvbi1iYXNlIGljb24tbmFtZT1cImRlcGFydG1lbnRcIj48U2NoZWR1bGUvPjwvaWNvbi1iYXNlPlxuICAgICAgICAgICAgPGRpdj4gPGEgY2xhc3M9XCJtbC0zIG1yLTNcIj48cm91dGVyLWxpbmsgdG89XCIvdXNlci9kZXBhcnRtZW50XCI+RGVwYXJ0YW1lbnRvczwvcm91dGVyLWxpbms+PC9hPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImlkUm9sID09PSAnYWRtaW5pc3RyYWRvcicgfHwgJ3Jlc3BvbnNhYmxlJ1wiIGNsYXNzPVwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL3dlbGNvbWVcIj5JbmNpZGVuY2lhczwvcm91dGVyLWxpbms+PC9hPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImlkUm9sID09PSAnYWRtaW5pc3RyYWRvcicgfHwgJ3Jlc3BvbnNhYmxlJ1wiIGNsYXNzPVwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL2FkbWluXCI+QWRtaW48L3JvdXRlci1saW5rPjwvYT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VySW5mby5pZFwiIGNsYXNzPVwidy0xMiBoLTEyIHBsYWNlLXNlbGYtY2VudGVyIGN1cnNvci1wb2ludGVyIG0tMlwiPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncHJvZmlsZVVzZXInLCBwYXJhbXM6IHtpZFVzZXI6IHVzZXJJbmZvLmlkIH19XCI+ICBcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBcIiA6c3JjPVwiYC9hc3NldHMvaW1hZ2VzL3VzZXJzLyR7dXNlckluZm8uaWR9YFwiID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIFwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2F2YXRhci1sb2FkaW5nLnBuZ1wiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz4gICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Utc2VsZi1jZW50ZXIgbS0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC13aGl0ZSByb3VuZGVkIGJnLXJlZC01MDBcIiB2LW9uOmNsaWNrPVwibG9nb3V0XCIgPkxPRyBPVVQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaXhlZCB0b3AtWzIwMHB4XSBsZWZ0LVsyMDBweF0gdy1bNTAwcHhdIGgtWzMwMHB4XSB6LVs1MXB4XSBiZy13aGl0ZSByb3VuZGVkLWxnIG92ZXJmbG93LWF1dG9cIiB2LXNob3c9XCJzaG93Tm90aWZpY2F0aW9uc1wiPlxuICAgICAgTm90aWZpY2FjaW9uZXNcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdmVyOnRleHQtc2lkZUJhci1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwib3Blbk5vdGlmaWNhdGlvbnMoJ2FsbCcpXCI+VG9kb3M8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG92ZXI6dGV4dC1zaWRlQmFyLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9ucygnbm90cmVhZCcpXCI+Tm8gbGVpZG88L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG92ZXI6dGV4dC1zaWRlQmFyLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9ucygnbWVudGlvbmVkJylcIj5NZSBtZW5jaW9uYXJvbjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cIm9wZW5Ob3RpZmljYXRpb25zKCdhc2lnbmVkJylcIj5NZSBhc2lnbmFyb248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXIgYmctc2lkZUJhci1wcmltYXJ5IHctZnVsbCBoLTAuNVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIHYtZm9yPVwiaXRlbXMgaW4gY29udGVudFwiIDprZXk9XCJpdGVtc1wiPlxuICAgICAgICAgICAge3tpdGVtc1snbWVzc2FnZSddfX1cbiAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiaXRlbXMucmVhZGVkID09IDBcIiBAY2xpY2s9XCJyZWFkZWQoaXRlbXMuaWQpXCI+XG4gICAgICAgICAgICByZWFkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt7aXRlbXMuY3JlYXRlZF9hdH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vaWNvbnMvSWNvbkJhc2UudnVlJ1xuaW1wb3J0IEljb25BZGRVc2VyIGZyb20gJy4uL2ljb25zL0ljb25BZGRVc2VyLnZ1ZSdcbmltcG9ydCBCb2FyZHMgZnJvbSAnLi4vaWNvbnMvQm9hcmRzLnZ1ZSdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2ljb25zL0xpc3QudnVlJ1xuaW1wb3J0IE1haWwgZnJvbSAnLi4vaWNvbnMvTWFpbC52dWUnXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL2ljb25zL05vdGlmaWNhdGlvbi52dWUnXG5pbXBvcnQgU2NoZWR1bGUgZnJvbSAnLi4vaWNvbnMvU2NoZWR1bGUudnVlJ1xuaW1wb3J0IHsgZ2V0VXNlclRva2VuLCBnZXRVc2VyRGVwYXJ0bWVudHMsIGdldEFsbFRlYW1zRnJvbURlcGFydG1lbnQsIGdldE5vdGlmaWNhdGlvbnMsIHJlYWROb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vLi4vc2VydmljaWVzL3VzZXJTZXJ2aWNpZXMnXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uLy4uL2V2ZW50LWJ1cydcbmltcG9ydCBJbmNpZGVuY2lhcyBmcm9tICcuLi9pY29ucy9JbmNpZGVuY2lhcy52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXJTaWRlTmF2JyxcbiAgcHJvcHM6IHtcbiAgICBpZFJvbDogU3RyaW5nXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJY29uQmFzZSxcbiAgICBCb2FyZHMsXG4gICAgSWNvbkFkZFVzZXIsXG4gICAgTGlzdCxcbiAgICBNYWlsLFxuICAgIE5vdGlmaWNhdGlvbixcbiAgICBTY2hlZHVsZSxcbiAgICBJbmNpZGVuY2lhc1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgdGVhbXM6IFtdLFxuICAgIHVzZXJJbmZvOiBbXSxcbiAgICBkZXBhcnRtZW50czogW10sXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBzcmM6ICcnLFxuICAgIGV4aXN0OiBmYWxzZSxcbiAgICBjb250ZW50OiBbXSxcbiAgICBhbGw6IFtdLFxuICAgIGFzc2lnbjogW10sXG4gICAgbWVudGlvbjogW10sXG4gICAgbm9fcmVhZDpbXSxcbiAgICBub3RpZmljYXRpb25zOiB7fSxcbiAgICBudW1iZXJub3RpZmljYXRpb25zOiAwLFxuICAgIHNob3dOb3RpZmljYXRpb25zOiBmYWxzZSwgICAgfVxuICB9LFxuICBtZXRob2RzOntcbiAgICBzaG93ICgpIHtcbiAgICAgIHRoaXMuJG1vZGFsLnNob3coJ25vdGlmaWNhY2lvbicpO1xuICAgIH0sXG4gICAgdG9nZ2xlKCl7XG4gICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfSxcbiAgICBsb2dvdXQoKXtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9nb3V0JylcbiAgICB9LFxuICAgIHByb2ZpbGVJbWcoZmlsZSl7XG4gICAgICB0aGlzLnNyYyA9IGZpbGVcbiAgICB9LFxuICAgIHJlYWRlZChpZF9ub3RpZmljYXRpb24pe1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZF9ub3RpZmljYXRpb24nLCBpZF9ub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHRva2VuKTtcbiAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVhZE5vdGlmaWNhdGlvbnMoZm9ybURhdGEsIHRoaXMudXNlckluZm8uaWQpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTm90aWZpY2F0aW9ucygnbm90cmVhZCcpXG4gICAgICAgICAgICAgIH0pO1xuICAgICBcbiAgICB9LFxuICAgIG9wZW5Ob3RpZmljYXRpb25zKHRleHQpe1xuICAgICAgdGhpcy5jb250ZW50ID0gJydcbiAgICAgIGlmKHRleHQgPT0gJ2FsbCcpXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuYWxsICAgIFxuICAgICAgZWxzZSBpZih0ZXh0ID09ICdub3RyZWFkJylcbiAgICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMubm9fcmVhZFxuICAgICAgZWxzZSBpZih0ZXh0ID09ICdhc2lnbmVkJylcbiAgICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuYXNzaWduXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMubWVudGlvblxuICAgIH0sXG4gICAgZ2V0Tm90aXMoKXtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKTtcbiAgICAgIGdldE5vdGlmaWNhdGlvbnModG9rZW4sdGhpcy51c2VySW5mby5pZClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBkYXRhXG4gICAgICAgIHRoaXMuYWxsID0gZGF0YS5hbGxcbiAgICAgICAgaWYodGhpcy5jb250ZW50Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmFsbFxuICAgICAgICB0aGlzLm5vX3JlYWQgPSBkYXRhLm5vX3JlYWRcbiAgICAgICAgdGhpcy5udW1iZXJub3RpZmljYXRpb25zID0gdGhpcy5ub19yZWFkLmxlbmd0aFxuICAgICAgICB0aGlzLm1lbnRpb24gPSBkYXRhLm1lbnNpb25cbiAgICAgICAgdGhpcy5hc3NpZ24gPSBkYXRhLmFzc2lnblxuICAgICAgfSlcbiAgICB9LFxuICAgIGZldGNoRGF0YSgpe1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpO1xuICAgICAgICBnZXRVc2VyVG9rZW4odG9rZW4pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGlmKGRhdGEgPT0gXCJFUlJPUjogVG9rZW4gbm8gdmFsaWRvXCIgKXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXNlckluZm8gPSBkYXRhXG5cbiAgICAgICAgICBmZXRjaChcIi9hc3NldHMvaW1hZ2VzL3VzZXJzL1wiICsgdGhpcy51c2VySW5mby5pZCApIFxuICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpc3QgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXN0ID0gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4aXN0ID0gZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgXG4gICAgICB0aGlzLmdldE5vdGlzKClcbiAgICAgIGdldFVzZXJEZXBhcnRtZW50cyh0b2tlbiwgdGhpcy51c2VySW5mby5pZCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHMgPSBkYXRhXG4gICAgICAgICAgICBnZXRBbGxUZWFtc0Zyb21EZXBhcnRtZW50KHRva2VuLCB0aGlzLmRlcGFydG1lbnRzWzBdLmlkKS50aGVuKGRhdGEgPT4gKHRoaXMudGVhbXMgPSBkYXRhKSlcbiAgICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFxuICB9LFxuICBtb3VudGVkKCl7XG4gICAgc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgIHRoaXMuZ2V0Tm90aXMoKX0sIDEwMDAwMCk7XG4gICAgXG4gIH0sXG4gIGNyZWF0ZWQoKXtcbiAgICAgICAvL0dFVCBVU0VSIGRlcGFydG1lbnRzXG4gICAgICBcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKVxuICAgICAgICBcbiAgICAgIEV2ZW50QnVzLiRvbignaW1nUHJvZmlsZScsIHRoaXMucHJvZmlsZUltZylcbiAgfSxcblxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LXNjcmVlbiBoLXNjcmVlbiBmb250LUJhcmxvd1wiPlxuICAgICAgICA8YXNpZGUgY2xhc3M9XCJmaXhlZCB3LTQ4IHRvcC0wIGxlZnQtMCB6LTUwXCI+IFxuICAgICAgICAgIDxVc2VyU2lkZUJhciA6aWRSb2w9XCJpZFJvbE5hbWVcIi8+IFxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctc2NyZWVuIG1sLTQwIHB5LTAgcHgtNVwiPlxuICAgICAgICAgIDxyb3V0ZXItdmlldz48V2VsY29tZS8+PC9yb3V0ZXItdmlldz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgICAgICAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFVzZXJTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci9Vc2VyU2lkZUJhci52dWUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXIudnVlJztcbmltcG9ydCBXZWxjb21lIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyTmF2QmFyL1dlbGNvbWUvV2VsY29tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXInLFxuICBjb21wb25lbnRzOiB7XG4gICAgVXNlclNpZGVCYXIsXG4gICAgRm9vdGVyLFxuICAgIFdlbGNvbWVcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRSb2w6IG51bGwsXG4gICAgICBpZFJvbE5hbWU6IFwiXCIsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBnZXRVc2VyKCl7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJykpO1xuICAgICAgICBmZXRjaChcIi9hcGkvdXNlclwiLHtcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXNwID0+ICByZXNwLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWRSb2wgPSBkYXRhLmlkX3JvbFxuICAgICAgICAgICAgdGhpcy5nZXRSb2xlKHRoaXMuaWRSb2wpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Um9sZShpZFJvbCl7XG4gICAgICAgIGZldGNoKFwiL2FwaS9yb2wvXCIraWRSb2wrXCI/dG9rZW49XCIrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKSlcbiAgICAgICAgICAudGhlbihyZXNwID0+ICByZXNwLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgdGhpcy5pZFJvbE5hbWUgPSBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKSA9PT0gbnVsbClcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJykgXG4gICAgICAgIHRoaXMuZ2V0VXNlcigpXG4gICAgfSxcbiAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImdcIiwgW1xuICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBkOlxuICAgICAgICAgIFwiTTI0Nyw0Mi4zOEExNDQuNzEsMTQ0LjcxLDAsMCwwLDQyLjM4LDI0NywxNDQuNzEsMTQ0LjcxLDAsMCwwLDI0Nyw0Mi4zOFpNMTQ0LjcsMjcyLjQ1QTEyNy43NSwxMjcuNzUsMCwxLDEsMjcyLjQ1LDE0NC43LDEyNy44OSwxMjcuODksMCwwLDEsMTQ0LjcsMjcyLjQ1Wm0wLDBcIlxuICAgICAgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNscy0xXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBkOlxuICAgICAgICAgIFwiTTIxMC43NSwxMTcuNjNsLTc0LDc0YTE0LDE0LDAsMCwxLTE5Ljg2LDBMNzguNjcsMTUzLjQzYTE0LDE0LDAsMCwxLDE5Ljg2LTE5Ljg2bDI4LjI4LDI4LjI4LDY0LjA4LTY0LjA4YTE0LDE0LDAsMCwxLDE5Ljg2LDE5Ljg2WlwiXG4gICAgICB9XG4gICAgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZ1wiLCBbXG4gICAgX2MoXCJnXCIsIFtcbiAgICAgIF9jKFwiZ1wiLCBbXG4gICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3QzXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgIFwiTTc0MS42LDU0NC4xTDQzNy4xLDM5Yy0xMi0xOS45LTMzLjktMzIuMy01Ny4xLTMyLjNTMzM0LjksMTkuMiwzMjIuOSwzOWwtMzA0LjUsNTA1XFxuXFx0XFx0XFx0XFx0XFx0Yy0xMi40LDIwLjYtMTIuOCw0Ni4zLTEsNjcuMmMxMS44LDIwLjksMzQuMSwzMy45LDU4LjEsMzMuOWg2MDljMjQsMCw0Ni4zLTEzLDU4LjEtMzMuOUM3NTQuNCw1OTAuNCw3NTQsNTY0LjYsNzQxLjYsNTQ0LjF6XFxuXFx0XFx0XFx0XFx0XFx0IE03MDAuNSw1ODcuNWMtMy4zLDUuOC05LjQsOS4zLTE2LDkuM2gtNjA5Yy02LjYsMC0xMi43LTMuNi0xNi05LjNjLTMuMy01LjgtMy4xLTEyLjgsMC4zLTE4LjVMMzY0LjMsNjRcXG5cXHRcXHRcXHRcXHRcXHRjMy4zLTUuNSw5LjMtOC45LDE1LjctOC45YzYuNCwwLDEyLjQsMy40LDE1LjcsOC45bDMwNC41LDUwNUM3MDMuNyw1NzQuNyw3MDMuOCw1ODEuOCw3MDAuNSw1ODcuNXpcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdDNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNMzgwLjIsMjA1LjdjLTE4LjQsMC0zMi43LDkuOS0zMi43LDI3LjRjMCw1My40LDYuMywxMzAsNi4zLDE4My40YzAsMTMuOSwxMi4xLDE5LjcsMjYuNSwxOS43XFxuXFx0XFx0XFx0XFx0XFx0YzEwLjgsMCwyNi01LjgsMjYtMTkuN2MwLTUzLjQsNi4zLTEzMCw2LjMtMTgzLjRDNDEyLjUsMjE1LjUsMzk3LjcsMjA1LjcsMzgwLjIsMjA1Ljd6XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJnXCIsIFtcbiAgICAgIF9jKFwiZ1wiLCBbXG4gICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3QzXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgIFwiTTM4MC43LDQ2Ny4xYy0xOS43LDAtMzQuNSwxNS43LTM0LjUsMzQuNWMwLDE4LjQsMTQuOCwzNC41LDM0LjUsMzQuNWMxOC40LDAsMzQuMS0xNi4xLDM0LjEtMzQuNVxcblxcdFxcdFxcdFxcdFxcdEM0MTQuOCw0ODIuOCwzOTkuMSw0NjcuMSwzODAuNyw0NjcuMXpcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwicGF0aFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGQ6XG4gICAgICAgIFwiTTI5NS4yOSwwSDM1LjY2QTM1LjcsMzUuNywwLDAsMCwwLDM1LjY2VjI1My43NWEzNS43LDM1LjcsMCwwLDAsMzUuNjYsMzUuNjZIMjk1LjI5QTM1LjcsMzUuNywwLDAsMCwzMzEsMjUzLjc1VjM1LjY2QTM1LjcsMzUuNywwLDAsMCwyOTUuMjksMFptMCwxOS4zOWExNi4xNSwxNi4xNSwwLDAsMSwyLjM4LjE4TDE3NywxNDAuMjZhMTYuMjksMTYuMjksMCwwLDEtMjMsMEwzMy4yOCwxOS41N2ExNi4xNiwxNi4xNiwwLDAsMSwyLjM4LS4xOFptMTYuMjcsMjM0LjM2QTE2LjI5LDE2LjI5LDAsMCwxLDI5NS4yOSwyNzBIMzUuNjZhMTYuMjksMTYuMjksMCwwLDEtMTYuMjctMTYuMjdWMzUuNjZhMTYuNDMsMTYuNDMsMCwwLDEsLjE3LTIuMzhMMTQwLjI2LDE1NGEzNS43LDM1LjcsMCwwLDAsNTAuNDMsMEwzMTEuMzgsMzMuMjhhMTYuNDUsMTYuNDUsMCwwLDEsLjE3LDIuMzhabTAsMFwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJwYXRoXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgZDpcbiAgICAgICAgXCJNMjI0Ljg0LDEyNS45NEE1My44OSw1My44OSwwLDEsMCwxNzcsNDcuMzJhODguMTksODguMTksMCwwLDAtMTkuNTctNy45MSwyNi42NCwyNi42NCwwLDEsMC00Ni43NCwwLDg5LjM2LDg5LjM2LDAsMCwwLTY1Ljg1LDg2LjA5djc1LjY1YTI2LjY0LDI2LjY0LDAsMCwwLDguNDgsNTEuOUg5MGE0NC44LDQ0LjgsMCwwLDAsODgsMGgzNi43NGEyNi42NCwyNi42NCwwLDAsMCw4LjQ4LTUxLjlWMTI1LjkxbDEuNjEsMFptMC05MC44MmEzNi45MywzNi45MywwLDEsMS0zNi45MywzNi45MywzNywzNywwLDAsMSwzNi45My0zNi45M1pNMTM0LDE3YTkuNjgsOS42OCwwLDEsMS05LjY4LDkuNjhBOS43LDkuNywwLDAsMSwxMzQsMTdabTAsMjU1LjQ5YTI3LjksMjcuOSwwLDAsMS0yNi41My0xOS4zN2g1My4wNkEyNy45LDI3LjksMCwwLDEsMTM0LDI3Mi40NVptNzIuMjUtMTQ2LjkydjgyLjc1YTguNDgsOC40OCwwLDAsMCw4LjQ4LDguNDgsOS42OCw5LjY4LDAsMCwxLDAsMTkuMzdINTMuM2E5LjY4LDkuNjgsMCwxLDEsMC0xOS4zNyw4LjQ4LDguNDgsMCwwLDAsOC40OC04LjQ4VjEyNS41M0E3Mi4yNiw3Mi4yNiwwLDAsMSwxNzEuNTgsNjMuODFhNTMuOTIsNTMuOTIsMCwwLDAsMzQuNjIsNTguODFjMCwxLC4wNywxLjk1LjA3LDIuOTJabTAsMFwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImZvb3RlclwiLCB7IHN0YXRpY0NsYXNzOiBcImJnLWZvbnRDb2xvci1wcmltYXJ5XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCLCqSBDb3B5cmlnaHQgYWxsIHJpZ2h0cyByZXNlcnZlZCB0byBQacOxYSBcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwic2lkZU5hdkJhci1jb250YWluZXIgaC1mdWxsIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGl0ZW1zLWNlbnRlciBiZy1zaWRlQmFyLXByaW1hcnkgbWQ6dy1mdWxsIFwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgYmctc2lkZUJhci1wcmltYXJ5IG1kOnctZnVsbCBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi91c2VyL2RlcGFydG1lbnRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteS0xMCB3LTEwIGgtMTAgc206dy0yNCBzbTpoLTI0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2Fzc2V0cy9pbWFnZXMvYnVpbGQvTE9HT19QacOxYS0wMi5wbmdcIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgc206aGlkZGVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC1saWdodGVyIGJvcmRlci10ZWFsLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRpdGxlXCIsIFtfdm0uX3YoXCJNZW51XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IFwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInNpZGVuYXZCYXItZWxlbWVudC1jb250YWluZXIgZmxleC1ncm93IHNtOmZsZXggc206aXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0ub3BlbiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1zbSBoLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBzbTpmbGV4LWdyb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgIG1sLTMgZmxleCBmbGV4LXJvdyBtLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiaWNvbi1uYW1lXCI6IFwiYm9hcmRzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJCb2FyZHNcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWwtMyBtci0zIGdyb3VwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmxvY2std29ya2luZy1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWlzIHRhYmxlcm9zXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Zlcjp0ZXh0LWluZGlnby01MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkTmFtZTogaXRlbXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRUZWFtSUQ6IGl0ZW1zLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbXMubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93Tm90aWZpY2F0aW9ucyA9ICFfdm0uc2hvd05vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpY29uLW5hbWVcIjogXCJub3RpZmljYXRpb25cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIk5vdGlmaWNhdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCIgbWwtMyBtci0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vdGlmaWNhY2lvbmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubnVtYmVybm90aWZpY2F0aW9ucyAhPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0yIHB5LTEgdGV4dC14cyBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtcmVkLTEwMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgYmctcmVkLTYwMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5udW1iZXJub3RpZmljYXRpb25zKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaWRSb2wgPT09IFwiYWRtaW5pc3RyYWRvclwiIHx8IFwicmVzcG9uc2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImljb24tbmFtZVwiOiBcImRlcGFydG1lbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJTY2hlZHVsZVwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0zIG1yLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi91c2VyL2RlcGFydG1lbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVwYXJ0YW1lbnRvc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlkUm9sID09PSBcImFkbWluaXN0cmFkb3JcIiB8fCBcInJlc3BvbnNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tbmFtZVwiOiBcImRlcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA3NjAgNjUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkluY2lkZW5jaWFzXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTMgbXItM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL3VzZXIvd2VsY29tZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJJbmNpZGVuY2lhc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlkUm9sID09PSBcImFkbWluaXN0cmFkb3JcIiB8fCBcInJlc3BvbnNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tbmFtZVwiOiBcImRlcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA3NjAgNjUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkluY2lkZW5jaWFzXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTMgbXItM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL3VzZXIvYWRtaW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRtaW5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGxhY2Utc2VsZi1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS51c2VySW5mby5pZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidy0xMiBoLTEyIHBsYWNlLXNlbGYtY2VudGVyIGN1cnNvci1wb2ludGVyIG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9maWxlVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkVXNlcjogX3ZtLnVzZXJJbmZvLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL3VzZXJzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXJJbmZvLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9hdmF0YXItbG9hZGluZy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwbGFjZS1zZWxmLWNlbnRlciBtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlIHJvdW5kZWQgYmctcmVkLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTE9HIE9VVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd05vdGlmaWNhdGlvbnMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd05vdGlmaWNhdGlvbnNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImZpeGVkIHRvcC1bMjAwcHhdIGxlZnQtWzIwMHB4XSB3LVs1MDBweF0gaC1bMzAwcHhdIHotWzUxcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgb3ZlcmZsb3ctYXV0b1wiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgTm90aWZpY2FjaW9uZXNcXG4gICAgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3Blbk5vdGlmaWNhdGlvbnMoXCJhbGxcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlRvZG9zXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdmVyOnRleHQtc2lkZUJhci1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTm90aWZpY2F0aW9ucyhcIm5vdHJlYWRcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIk5vIGxlaWRvXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdmVyOnRleHQtc2lkZUJhci1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTm90aWZpY2F0aW9ucyhcIm1lbnRpb25lZFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWUgbWVuY2lvbmFyb25cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG92ZXI6dGV4dC1zaWRlQmFyLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5Ob3RpZmljYXRpb25zKFwiYXNpZ25lZFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWUgYXNpZ25hcm9uXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwYWNlciBiZy1zaWRlQmFyLXByaW1hcnkgdy1mdWxsIGgtMC41XCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb250ZW50LCBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaXRlbXMsIGF0dHJzOiB7IGlkOiBcInNpZGViYXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbXNbXCJtZXNzYWdlXCJdKSArIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbXMucmVhZGVkID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbXMucmVhZGVkID09IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWFkZWQoaXRlbXMuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIHJlYWRcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbXMuY3JlYXRlZF9hdCkgKyBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggdy1zY3JlZW4gaC1zY3JlZW4gZm9udC1CYXJsb3dcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhc2lkZVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpeGVkIHctNDggdG9wLTAgbGVmdC0wIHotNTBcIiB9LFxuICAgICAgICBbX2MoXCJVc2VyU2lkZUJhclwiLCB7IGF0dHJzOiB7IGlkUm9sOiBfdm0uaWRSb2xOYW1lIH0gfSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LXNjcmVlbiBtbC00MCBweS0wIHB4LTVcIiB9LFxuICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiLCBbX2MoXCJXZWxjb21lXCIpXSwgMSldLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JvYXJkcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YThkYjVmNDYmXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhOGRiNWY0NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhOGRiNWY0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhOGRiNWY0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9hcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOGRiNWY0NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhOGRiNWY0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvQm9hcmRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5jaWRlbmNpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRkYWJkZWNjJlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGRhYmRlY2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGRhYmRlY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGRhYmRlY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luY2lkZW5jaWFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZGFiZGVjYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZGFiZGVjYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvSW5jaWRlbmNpYXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTMxYzBjNyZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdhMzFjMGM3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdhMzFjMGM3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdhMzFjMGM3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTMxYzBjNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YTMxYzBjNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTWFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdGlmaWNhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIzZDExZmImXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYjNkMTFmYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYjNkMTFmYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYjNkMTFmYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm90aWZpY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjNkMTFmYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYjNkMTFmYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjY0Yjc3NSZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNiNjRiNzc1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNiNjRiNzc1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNiNjRiNzc1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNjRiNzc1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiNjRiNzc1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJiOWIyMjMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JiOWIyMjMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JiOWIyMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JiOWIyMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmI5YjIyMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmI5YjIyMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzRiMjk1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDc0YjI5NWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDc0YjI5NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDc0YjI5NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3NGIyOTVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3NGIyOTVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdmlld3MvVXNlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9