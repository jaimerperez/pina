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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-js-popover */ "./node_modules/vue-js-popover/dist/index.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_js_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_IconAddUser_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/IconAddUser.vue */ "./assets/components/icons/IconAddUser.vue");
/* harmony import */ var _icons_Boards_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Boards.vue */ "./assets/components/icons/Boards.vue");
/* harmony import */ var _icons_List_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/List.vue */ "./assets/components/icons/List.vue");
/* harmony import */ var _icons_Mail_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/Mail.vue */ "./assets/components/icons/Mail.vue");
/* harmony import */ var _icons_Notification_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/Notification.vue */ "./assets/components/icons/Notification.vue");
/* harmony import */ var _icons_Depa_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/Depa.vue */ "./assets/components/icons/Depa.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../event-bus */ "./assets/event-bus.js");
/* harmony import */ var _icons_Incidencias_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/Incidencias.vue */ "./assets/components/icons/Incidencias.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












vue__WEBPACK_IMPORTED_MODULE_14__.default.use((vue_js_popover__WEBPACK_IMPORTED_MODULE_3___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserSideNav',
  props: {
    idRol: String
  },
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Boards: _icons_Boards_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    IconAddUser: _icons_IconAddUser_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    List: _icons_List_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    Mail: _icons_Mail_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    Notification: _icons_Notification_vue__WEBPACK_IMPORTED_MODULE_9__.default,
    Depa: _icons_Depa_vue__WEBPACK_IMPORTED_MODULE_10__.default,
    Incidencias: _icons_Incidencias_vue__WEBPACK_IMPORTED_MODULE_13__.default
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
      numbernotifications: '',
      activeTab: 'ALL',
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
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_11__.readNotifications)(formData, _this.userInfo.id));
      });
      promise.then(function (response) {
        _this.fetchData();

        _this.getNotifications();

        _this.openNotifications('all');
      });
    },
    openNotifications: function openNotifications(text) {
      this.content = '';
      if (text == 'all') this.content = this.all;else if (text == 'notread') this.content = this.no_read;else if (text == 'asigned') this.content = this.assign;else this.content = this.mention;
    },
    getNotis: function getNotis() {
      var _this2 = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_11__.getNotifications)(token, this.userInfo.id).then(function (data) {
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
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_11__.getUserToken)(token).then(function (data) {
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

        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_11__.getUserDepartments)(token, _this3.userInfo.id).then(function (data) {
          _this3.departments = data;
          (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_11__.getAllTeamsFromDepartment)(token, _this3.departments[0].id).then(function (data) {
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
    _event_bus__WEBPACK_IMPORTED_MODULE_12__.EventBus.$on('imgProfile', this.profileImg);
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

/***/ "./assets/components/icons/Depa.vue?vue&type=template&id=9b91f87c&":
/*!*************************************************************************!*\
  !*** ./assets/components/icons/Depa.vue?vue&type=template&id=9b91f87c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Depa_vue_vue_type_template_id_9b91f87c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Depa_vue_vue_type_template_id_9b91f87c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Depa_vue_vue_type_template_id_9b91f87c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Depa.vue?vue&type=template&id=9b91f87c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Depa.vue?vue&type=template&id=9b91f87c&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Depa.vue?vue&type=template&id=9b91f87c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Depa.vue?vue&type=template&id=9b91f87c& ***!
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
  return _c("g", [
    _c("g", [
      _c("g", [
        _c("path", {
          attrs: {
            d:
              "M879.03,126.53H173.05c-29.95,0-54.32,24.37-54.32,54.32v448.03c0,7.49,6.08,13.58,13.58,13.58h787.47\n\t\t\t\tc7.49,0,13.58-6.08,13.58-13.58V180.85C933.35,150.9,908.98,126.53,879.03,126.53z M906.2,615.3H145.88V180.85\n\t\t\t\tc0-14.99,12.19-27.17,27.17-27.17h705.98c14.97,0,27.17,12.18,27.17,27.17V615.3z"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("g", [
      _c("g", [
        _c("path", {
          attrs: {
            d:
              "M919.77,615.3H132.31c-7.49,0-13.58,6.08-13.58,13.58v67.87c0,29.95,24.37,54.32,54.32,54.32h705.98\n\t\t\t\tc29.95,0,54.32-24.37,54.32-54.32v-67.87C933.35,621.39,927.27,615.3,919.77,615.3z M906.2,696.75\n\t\t\t\tc0,14.99-12.19,27.17-27.17,27.17H173.05c-14.98,0-27.17-12.18-27.17-27.17v-54.29H906.2L906.2,696.75L906.2,696.75z"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("g", [
      _c("g", [
        _c("path", {
          attrs: {
            d:
              "M566.77,669.61h-81.46c-7.49,0-13.58,6.08-13.58,13.58c0,7.49,6.08,13.58,13.58,13.58h81.46\n\t\t\t\tc7.49,0,13.58-6.08,13.58-13.58C580.35,675.7,574.26,669.61,566.77,669.61z"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("g", [
      _c("g", [
        _c("path", {
          attrs: {
            d:
              "M702.54,832.54h-353c-22.46,0-40.73,18.27-40.73,40.73S327.08,914,349.54,914h353c22.46,0,40.73-18.27,40.73-40.73\n\t\t\t\tS725,832.54,702.54,832.54z M702.54,886.85h-353c-7.49,0-13.58-6.1-13.58-13.58s6.08-13.58,13.58-13.58h353\n\t\t\t\tc7.49,0,13.58,6.1,13.58,13.58S710.04,886.85,702.54,886.85z"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("g", [
      _c("g", [
        _c("path", {
          attrs: {
            d:
              "M675.39,832.54c-45.05,0-67.89-31.97-67.89-95.04c0-7.49-6.08-13.58-13.58-13.58H458.16c-7.49,0-13.58,6.08-13.58,13.58\n\t\t\t\tc0,63.06-22.84,95.04-67.89,95.04c-7.49,0-13.58,6.08-13.58,13.58s6.08,13.58,13.58,13.58h298.69c7.49,0,13.58-6.08,13.58-13.58\n\t\t\t\tS682.88,832.54,675.39,832.54z M442.83,832.54c16.71-18.52,26.56-46.09,28.54-81.46h109.36c1.97,35.37,11.81,62.94,28.54,81.46\n\t\t\t\tH442.83z"
          }
        })
      ])
    ])
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
        "sideNavBar-container h-full flex flex-col flex-wrap items-center text-fontColor  bg-sideBar-primary md:w-full "
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
                  attrs: { src: "/assets/images/build/LOGO_Piña-03.png" }
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
                      {
                        staticClass:
                          "  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
                      },
                      [
                        _c(
                          "icon-base",
                          {
                            attrs: {
                              width: 23,
                              height: 23,
                              viewBox: "0 0 1080 1080",
                              "icon-name": "department"
                            }
                          },
                          [_c("Depa")],
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
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tableros ml-3 flex flex-row m-2" },
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
                          "  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2",
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
                    _c(
                      "div",
                      {
                        staticClass:
                          "ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
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
                    ),
                    _vm._v(" "),
                    _vm.idRol != "3"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2"
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
                                          src: "/assets/images/users/avatar.svg"
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
                          staticClass: " rounded bg-red-500",
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
            "fixed top-[200px] left-[200px] w-[500px] h-[300px] z-[51px] shadow-2xl border bg-white rounded-lg overflow-auto p-2"
        },
        [
          _c("strong", [_vm._v("Notificaciones")]),
          _vm._v(" "),
          _c("div", [
            _c("div", { staticClass: "flex flex-row justify-around" }, [
              _c(
                "div",
                {
                  staticClass: "hover:text-blue-500 cursor-pointer",
                  class:
                    _vm.activeTab === "ALL"
                      ? "text-blue-500 border-blue-500"
                      : "",
                  on: {
                    click: function($event) {
                      _vm.openNotifications("all"), (_vm.activeTab = "ALL")
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
                  class:
                    _vm.activeTab === "NOTREAD"
                      ? "text-blue-500 border-blue-500"
                      : "",
                  on: {
                    click: function($event) {
                      _vm.openNotifications("notread"),
                        (_vm.activeTab = "NOTREAD")
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
                  class:
                    _vm.activeTab === "MENTION"
                      ? "text-blue-500 border-blue-500"
                      : "",
                  on: {
                    click: function($event) {
                      _vm.openNotifications("mentioned"),
                        (_vm.activeTab = "MENTION")
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
                  class:
                    _vm.activeTab === "ASSIGN"
                      ? "text-blue-500 border-blue-500"
                      : "",
                  on: {
                    click: function($event) {
                      _vm.openNotifications("asigned"),
                        (_vm.activeTab = "ASSIGN")
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
                return _c(
                  "div",
                  {
                    key: items,
                    staticClass: "h-24 flex flex-row justify-between py-4 px-2",
                    class:
                      items.readed == 0
                        ? "border shadow group bg-sideBar-primary text-white hover:bg-gray-400 hover:text-black hover:bg-opacity-50"
                        : "border shadow text-black hover:text-white hover:bg-sideBar-primary",
                    attrs: { id: "sidebar" }
                  },
                  [
                    _c("span", {
                      domProps: { innerHTML: _vm._s(items["message"]) }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: items.readed == 0,
                            expression: "items.readed == 0"
                          },
                          {
                            name: "popover",
                            rawName: "v-popover:readed.bottom",
                            arg: "readed",
                            modifiers: { bottom: true }
                          }
                        ],
                        staticClass:
                          "h-5 w-5 group-hover:border-green-500 group-hover:text-green-500 border rounded-full",
                        on: {
                          click: function($event) {
                            return _vm.readed(items.id)
                          }
                        }
                      },
                      [_vm._v("\n            ✔\n          ")]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "\n            " +
                          _vm._s(items.created_at) +
                          "\n          "
                      )
                    ])
                  ]
                )
              }),
              0
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("popover", { attrs: { name: "readed", event: "hover", width: 150 } }, [
        _c("div", { staticClass: "items-center" }, [
          _vm._v("\n             Marcar como leido\n          ")
        ])
      ])
    ],
    1
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
        [_c("UserSideBar", { attrs: { idRol: _vm.idRol } })],
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

/***/ "./assets/components/icons/Depa.vue":
/*!******************************************!*\
  !*** ./assets/components/icons/Depa.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Depa_vue_vue_type_template_id_9b91f87c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Depa.vue?vue&type=template&id=9b91f87c& */ "./assets/components/icons/Depa.vue?vue&type=template&id=9b91f87c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Depa_vue_vue_type_template_id_9b91f87c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Depa_vue_vue_type_template_id_9b91f87c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Depa.vue"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvdXNlci9Vc2VyU2lkZUJhci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyL1VzZXJTaWRlQmFyLnZ1ZT9mMDNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZT85Yjc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0JvYXJkcy52dWU/YmE5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9EZXBhLnZ1ZT8wN2ViIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0luY2lkZW5jaWFzLnZ1ZT81NTMzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL01haWwudnVlP2ZiODQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZT9mM2QxIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIudnVlP2E2NDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdXNlci9Vc2VyU2lkZUJhci52dWU/NmI5OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvVXNlci52dWU/NDUyMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9Cb2FyZHMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0RlcGEudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ljb25zL0luY2lkZW5jaWFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9NYWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pY29ucy9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Vc2VyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0E7QUFDQSxzRUFEQTtBQUVBLGtFQUZBO0FBR0EsNEVBSEE7QUFJQSw4REFKQTtBQUtBLDhEQUxBO0FBTUEsOEVBTkE7QUFPQSwrREFQQTtBQVFBO0FBUkEsR0FMQTtBQWVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGVBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0EsbUJBTEE7QUFNQSxhQU5BO0FBT0Esa0JBUEE7QUFRQSxpQkFSQTtBQVNBLGFBVEE7QUFVQSxnQkFWQTtBQVdBLGlCQVhBO0FBWUEsaUJBWkE7QUFhQSx1QkFiQTtBQWNBLDZCQWRBO0FBZUEsc0JBZkE7QUFnQkE7QUFoQkE7QUFpQkEsR0FqQ0E7QUFrQ0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsVUFKQSxvQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFVBUEEsb0JBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxjQVZBLHNCQVVBLElBVkEsRUFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLFVBYkEsa0JBYUEsZUFiQSxFQWFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQSxPQUxBO0FBT0EsS0E1QkE7QUE2QkEscUJBN0JBLDZCQTZCQSxJQTdCQSxFQTZCQTtBQUNBO0FBQ0EseUJBQ0Esd0JBREEsS0FFQSx1QkFDQSw0QkFEQSxLQUVBLHVCQUNBLDJCQURBLEtBR0E7QUFDQSxLQXZDQTtBQXdDQSxZQXhDQSxzQkF3Q0E7QUFBQTs7QUFDQTtBQUNBLDJHQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FWQTtBQVdBLEtBckRBO0FBc0RBLGFBdERBLHVCQXNEQTtBQUFBOztBQUNBO0FBQ0EscUZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBLDREQUNBLElBREEsQ0FDQTtBQUVBO0FBQ0E7QUFDQSxXQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsU0FUQSxXQVNBO0FBQ0E7QUFDQSxTQVhBOztBQWFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxTQUhBO0FBSUEsT0EzQkE7QUE0QkE7QUFwRkEsR0FsQ0E7QUF5SEEsU0F6SEEscUJBeUhBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBLEtBREEsRUFDQSxNQURBO0FBR0EsR0E3SEE7QUE4SEEsU0E5SEEscUJBOEhBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFwSUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxjQURBO0FBRUE7QUFDQSxzRkFEQTtBQUVBLDhFQUZBO0FBR0E7QUFIQSxHQUZBO0FBT0EsTUFQQSxrQkFPQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBSUEsR0FaQTtBQWFBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFGQSxTQUlBLElBSkEsQ0FJQTtBQUFBO0FBQUEsT0FKQSxFQUtBLElBTEEsQ0FLQTtBQUNBOztBQUNBO0FBQ0EsT0FSQSxXQVNBO0FBQ0E7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQWpCQTtBQWtCQSxXQWxCQSxtQkFrQkEsS0FsQkEsRUFrQkE7QUFBQTs7QUFDQSx3RkFDQSxJQURBLENBQ0E7QUFBQTtBQUFBLE9BREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBLE9BSkEsV0FLQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUE1QkEsR0FiQTtBQTJDQTtBQUNBLDJEQUNBO0FBQ0E7QUFDQTtBQS9DQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJxTixDQUFDLGlFQUFlLDZNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQyxDQUFDLGlFQUFlLHNNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9ELGlCQUFpQix3Q0FBd0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLGlDQUFpQyxTQUFTLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQkFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMseUJBQXlCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFpRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyx3QkFBd0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsOEJBQThCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJCQUEyQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJCQUEyQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUyxvQkFBb0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUNBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUNBQXVDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRCwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBOEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDZDQUE2QyxFQUFFO0FBQzdFLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFvRDtBQUNuRTtBQUNBO0FBQ0EsU0FBUyw4Q0FBOEM7QUFDdkQsNEJBQTRCLFNBQVMsbUJBQW1CLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMENBQTBDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnFGO0FBQ3JGOzs7QUFHQTtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQjtBQUNBLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDb0U7QUFDbkY7OztBQUdBO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCO0FBQ0EsRUFBRSw0RUFBTTtBQUNSLEVBQUUscUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckMyRTtBQUMxRjs7O0FBR0E7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUI7QUFDQSxFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ29FO0FBQ25GOzs7QUFHQTtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQjtBQUNBLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDNEU7QUFDM0Y7OztBQUdBO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCO0FBQ0EsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNzRTtBQUNyRjs7O0FBR0E7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUI7QUFDQSxFQUFFLDhFQUFNO0FBQ1IsRUFBRSx1RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckMyRTtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q29FO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNBLENBQTBGO0FBQzFGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLHVFQUFNO0FBQ1IsRUFBRSw0RUFBTTtBQUNSLEVBQUUscUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUIiLCJmaWxlIjoiYXNzZXRzX3ZpZXdzX1VzZXJfdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2lkZU5hdkJhci1jb250YWluZXIgaC1mdWxsIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGl0ZW1zLWNlbnRlciB0ZXh0LWZvbnRDb2xvciAgYmctc2lkZUJhci1wcmltYXJ5IG1kOnctZnVsbCBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXNpZGVCYXItcHJpbWFyeSBtZDp3LWZ1bGwgXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvdXNlci9kZXBhcnRtZW50XCI+PGltZyBjbGFzcz1cIm15LTEwIHctMTAgaC0xMCBzbTp3LTI0IHNtOmgtMjRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9idWlsZC9MT0dPX1Bpw7FhLTAzLnBuZ1wiPjwvcm91dGVyLWxpbms+ICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIHNtOmhpZGRlblwiPlxuICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJ0b2dnbGVcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LXRlYWwtbGlnaHRlciBib3JkZXItdGVhbC1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IDpjbGFzcz1cIm9wZW4gPyAnYmxvY2snOiAnaGlkZGVuJ1wiIGNsYXNzPVwic2lkZW5hdkJhci1lbGVtZW50LWNvbnRhaW5lciBmbGV4LWdyb3cgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc20gaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgc206ZmxleC1ncm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgIDwhLS0gRGVwYXJ0YW1lbnRvcyAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiICBtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiPlxuICAgICAgICAgICAgPGljb24tYmFzZSA6d2lkdGg9XCIyM1wiIDpoZWlnaHQ9XCIyM1wiIHZpZXdCb3g9XCIwIDAgMTA4MCAxMDgwXCIgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiPjxEZXBhLz48L2ljb24tYmFzZT5cbiAgICAgICAgICAgIDxkaXY+IDxhIGNsYXNzPVwibWwtMyBtci0zXCI+PHJvdXRlci1saW5rIHRvPVwiL3VzZXIvZGVwYXJ0bWVudFwiPkRlcGFydGFtZW50b3M8L3JvdXRlci1saW5rPjwvYT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gLy90YWJsZXJvcyAtLT5cbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRhYmxlcm9zIG1sLTMgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiYm9hcmRzXCI+PEJvYXJkcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2IEBtb3VzZW92ZXI9XCJhY3RpdmUgPSB0cnVlXCIgQG1vdXNlbGVhdmU9XCJhY3RpdmUgPSBmYWxzZVwiPiBcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtbC0zIG1yLTMgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibG9jay13b3JraW5nLXByaW1hcnlcIiA+TWlzIHRhYmxlcm9zPC9hPlxuICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImFjdGl2ZVwiIHYtZm9yPVwiaXRlbXMgaW4gdGVhbXNcIiA6a2V5PVwiaXRlbXMuaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd0ZWFtcycsIHBhcmFtczoge2JvYXJkTmFtZTogaXRlbXMubmFtZSwgYm9hcmRUZWFtSUQ6IGl0ZW1zLmlkIH19XCIgY2xhc3M9XCJob3Zlcjp0ZXh0LWluZGlnby01MDBcIj57e2l0ZW1zLm5hbWV9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPCEtLSBOb3RpZmljYWNpb25lcyAtLT5cbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cIiAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIiBAY2xpY2s9XCJzaG93Tm90aWZpY2F0aW9ucz0hc2hvd05vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwibm90aWZpY2F0aW9uXCI+PE5vdGlmaWNhdGlvbi8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cIiBtbC0zIG1yLTNcIj5Ob3RpZmljYWNpb25lczwvYT5cbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIm51bWJlcm5vdGlmaWNhdGlvbnMgIT0gMFwiIGNsYXNzPVwiIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0yIHB5LTEgdGV4dC14cyBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtcmVkLTEwMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgYmctcmVkLTYwMCByb3VuZGVkLWZ1bGxcIj57e251bWJlcm5vdGlmaWNhdGlvbnN9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gSW5jaWRlbmNpYXMgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCI+XG4gICAgICAgICAgICA8aWNvbi1iYXNlIGljb24tbmFtZT1cImRlcGFydG1lbnRcIiB2aWV3Qm94PVwiMCAwIDc2MCA2NTJcIj48SW5jaWRlbmNpYXMvPjwvaWNvbi1iYXNlPlxuICAgICAgICAgICAgPGRpdj4gPGEgY2xhc3M9XCJtbC0zIG1yLTNcIj48cm91dGVyLWxpbmsgdG89XCIvdXNlci93ZWxjb21lXCI+SW5jaWRlbmNpYXM8L3JvdXRlci1saW5rPjwvYT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBZG1pbiAtLT5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJpZFJvbCAhPSAnMydcIiBjbGFzcz1cIiAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIj5cbiAgICAgICAgICAgIDxpY29uLWJhc2UgaWNvbi1uYW1lPVwiZGVwYXJ0bWVudFwiIHZpZXdCb3g9XCIwIDAgNzYwIDY1MlwiPjxJbmNpZGVuY2lhcy8+PC9pY29uLWJhc2U+XG4gICAgICAgICAgICA8ZGl2PiA8YSBjbGFzcz1cIm1sLTMgbXItM1wiPjxyb3V0ZXItbGluayB0bz1cIi91c2VyL2FkbWluXCI+QWRtaW48L3JvdXRlci1saW5rPjwvYT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VySW5mby5pZFwiIGNsYXNzPVwidy0xMiBoLTEyIHBsYWNlLXNlbGYtY2VudGVyIGN1cnNvci1wb2ludGVyIG0tMlwiPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncHJvZmlsZVVzZXInLCBwYXJhbXM6IHtpZFVzZXI6IHVzZXJJbmZvLmlkIH19XCI+ICBcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBcIiA6c3JjPVwiYC9hc3NldHMvaW1hZ2VzL3VzZXJzLyR7dXNlckluZm8uaWR9YFwiID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIFwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3VzZXJzL2F2YXRhci5zdmdcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+ICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNlbGYtY2VudGVyIG0tMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiByb3VuZGVkIGJnLXJlZC01MDBcIiB2LW9uOmNsaWNrPVwibG9nb3V0XCIgPkxPRyBPVVQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaXhlZCB0b3AtWzIwMHB4XSBsZWZ0LVsyMDBweF0gdy1bNTAwcHhdIGgtWzMwMHB4XSB6LVs1MXB4XSBzaGFkb3ctMnhsIGJvcmRlciBiZy13aGl0ZSByb3VuZGVkLWxnIG92ZXJmbG93LWF1dG8gcC0yXCIgdi1zaG93PVwic2hvd05vdGlmaWNhdGlvbnNcIj5cbiAgICAgIDxzdHJvbmc+Tm90aWZpY2FjaW9uZXM8L3N0cm9uZz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdmVyOnRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9ucygnYWxsJyksIGFjdGl2ZVRhYiA9ICdBTEwnXCIgOmNsYXNzPVwiYWN0aXZlVGFiPT09ICdBTEwnID8gJ3RleHQtYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwJyA6ICcnXCI+VG9kb3M8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG92ZXI6dGV4dC1zaWRlQmFyLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9ucygnbm90cmVhZCcpLCBhY3RpdmVUYWI9ICdOT1RSRUFEJ1wiIDpjbGFzcz1cImFjdGl2ZVRhYj09PSAnTk9UUkVBRCcgPyAndGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAnIDogJydcIj5ObyBsZWlkbzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cIm9wZW5Ob3RpZmljYXRpb25zKCdtZW50aW9uZWQnKSxhY3RpdmVUYWI9ICdNRU5USU9OJ1wiIDpjbGFzcz1cImFjdGl2ZVRhYj09PSAnTUVOVElPTicgPyAndGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAnIDogJydcIj5NZSBtZW5jaW9uYXJvbjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cIm9wZW5Ob3RpZmljYXRpb25zKCdhc2lnbmVkJyksYWN0aXZlVGFiPSAnQVNTSUdOJ1wiIDpjbGFzcz1cImFjdGl2ZVRhYj09PSAnQVNTSUdOJyA/ICd0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMCcgOiAnJ1wiPk1lIGFzaWduYXJvbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlciBiZy1zaWRlQmFyLXByaW1hcnkgdy1mdWxsIGgtMC41XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCJcbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbXMgaW4gY29udGVudFwiIFxuICAgICAgICAgICAgOmtleT1cIml0ZW1zXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaC0yNCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTJcIlxuICAgICAgICAgICAgOmNsYXNzPVwiaXRlbXMucmVhZGVkID09IDAgPyAnYm9yZGVyIHNoYWRvdyBncm91cCBiZy1zaWRlQmFyLXByaW1hcnkgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTQwMCBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLW9wYWNpdHktNTAnIDogJ2JvcmRlciBzaGFkb3cgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNpZGVCYXItcHJpbWFyeSdcIiA+XG4gICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCJpdGVtc1snbWVzc2FnZSddXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJpdGVtcy5yZWFkZWQgPT0gMFwiIGNsYXNzPVwiaC01IHctNSBncm91cC1ob3Zlcjpib3JkZXItZ3JlZW4tNTAwIGdyb3VwLWhvdmVyOnRleHQtZ3JlZW4tNTAwIGJvcmRlciByb3VuZGVkLWZ1bGxcIiAgQGNsaWNrPVwicmVhZGVkKGl0ZW1zLmlkKVwiIHYtcG9wb3ZlcjpyZWFkZWQuYm90dG9tPlxuICAgICAgICAgICAgICDinJRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3tpdGVtcy5jcmVhdGVkX2F0fX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8cG9wb3ZlciA6bmFtZT1cIidyZWFkZWQnXCIgOmV2ZW50PVwiJ2hvdmVyJ1wiIDp3aWR0aD1cIjE1MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgTWFyY2FyIGNvbW8gbGVpZG9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcG92ZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAndnVlLWpzLXBvcG92ZXInXG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vaWNvbnMvSWNvbkJhc2UudnVlJ1xuaW1wb3J0IEljb25BZGRVc2VyIGZyb20gJy4uL2ljb25zL0ljb25BZGRVc2VyLnZ1ZSdcbmltcG9ydCBCb2FyZHMgZnJvbSAnLi4vaWNvbnMvQm9hcmRzLnZ1ZSdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2ljb25zL0xpc3QudnVlJ1xuaW1wb3J0IE1haWwgZnJvbSAnLi4vaWNvbnMvTWFpbC52dWUnXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL2ljb25zL05vdGlmaWNhdGlvbi52dWUnXG5pbXBvcnQgRGVwYSBmcm9tICcuLi9pY29ucy9EZXBhLnZ1ZSdcbmltcG9ydCB7IGdldFVzZXJUb2tlbiwgZ2V0VXNlckRlcGFydG1lbnRzLCBnZXRBbGxUZWFtc0Zyb21EZXBhcnRtZW50LCBnZXROb3RpZmljYXRpb25zLCByZWFkTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uLy4uL3NlcnZpY2llcy91c2VyU2VydmljaWVzJ1xuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9ldmVudC1idXMnXG5pbXBvcnQgSW5jaWRlbmNpYXMgZnJvbSAnLi4vaWNvbnMvSW5jaWRlbmNpYXMudnVlJ1xuVnVlLnVzZShQb3BvdmVyKVxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlclNpZGVOYXYnLFxuICBwcm9wczoge1xuICAgIGlkUm9sOiBTdHJpbmdcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEljb25CYXNlLFxuICAgIEJvYXJkcyxcbiAgICBJY29uQWRkVXNlcixcbiAgICBMaXN0LFxuICAgIE1haWwsXG4gICAgTm90aWZpY2F0aW9uLFxuICAgIERlcGEsXG4gICAgSW5jaWRlbmNpYXNcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHRlYW1zOiBbXSxcbiAgICB1c2VySW5mbzogW10sXG4gICAgZGVwYXJ0bWVudHM6IFtdLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgc3JjOiAnJyxcbiAgICBleGlzdDogZmFsc2UsXG4gICAgY29udGVudDogW10sXG4gICAgYWxsOiBbXSxcbiAgICBhc3NpZ246IFtdLFxuICAgIG1lbnRpb246IFtdLFxuICAgIG5vX3JlYWQ6W10sXG4gICAgbm90aWZpY2F0aW9uczoge30sXG4gICAgbnVtYmVybm90aWZpY2F0aW9uczogJycsXG4gICAgYWN0aXZlVGFiOiAnQUxMJyxcbiAgICBzaG93Tm90aWZpY2F0aW9uczogZmFsc2UsICAgIH1cbiAgfSxcbiAgbWV0aG9kczp7XG4gICAgc2hvdyAoKSB7XG4gICAgICB0aGlzLiRtb2RhbC5zaG93KCdub3RpZmljYWNpb24nKTtcbiAgICB9LFxuICAgIHRvZ2dsZSgpe1xuICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgIH0sXG4gICAgbG9nb3V0KCl7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ291dCcpXG4gICAgfSxcbiAgICBwcm9maWxlSW1nKGZpbGUpe1xuICAgICAgdGhpcy5zcmMgPSBmaWxlXG4gICAgfSxcbiAgICByZWFkZWQoaWRfbm90aWZpY2F0aW9uKXtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZhbGlkYXRpb25fdG9rZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRfbm90aWZpY2F0aW9uJywgaWRfbm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbik7XG4gICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlYWROb3RpZmljYXRpb25zKGZvcm1EYXRhLCB0aGlzLnVzZXJJbmZvLmlkKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9ucygpXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTm90aWZpY2F0aW9ucygnYWxsJylcbiAgICAgICAgICAgICAgfSk7XG4gICAgIFxuICAgIH0sXG4gICAgb3Blbk5vdGlmaWNhdGlvbnModGV4dCl7XG4gICAgICB0aGlzLmNvbnRlbnQgPSAnJ1xuICAgICAgaWYodGV4dCA9PSAnYWxsJylcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5hbGwgICAgXG4gICAgICBlbHNlIGlmKHRleHQgPT0gJ25vdHJlYWQnKVxuICAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5ub19yZWFkXG4gICAgICBlbHNlIGlmKHRleHQgPT0gJ2FzaWduZWQnKVxuICAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5hc3NpZ25cbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5tZW50aW9uXG4gICAgfSxcbiAgICBnZXROb3Rpcygpe1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9ucyh0b2tlbix0aGlzLnVzZXJJbmZvLmlkKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IGRhdGFcbiAgICAgICAgdGhpcy5hbGwgPSBkYXRhLmFsbFxuICAgICAgICBpZih0aGlzLmNvbnRlbnQubGVuZ3RoID09PSAwKVxuICAgICAgICAgIHRoaXMuY29udGVudCA9IGRhdGEuYWxsXG4gICAgICAgIHRoaXMubm9fcmVhZCA9IGRhdGEubm9fcmVhZFxuICAgICAgICB0aGlzLm51bWJlcm5vdGlmaWNhdGlvbnMgPSB0aGlzLm5vX3JlYWQubGVuZ3RoXG4gICAgICAgIHRoaXMubWVudGlvbiA9IGRhdGEubWVuc2lvblxuICAgICAgICB0aGlzLmFzc2lnbiA9IGRhdGEuYXNzaWduXG4gICAgICB9KVxuICAgIH0sXG4gICAgZmV0Y2hEYXRhKCl7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJyk7XG4gICAgICAgIGdldFVzZXJUb2tlbih0b2tlbilcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSA9PSBcIkVSUk9SOiBUb2tlbiBubyB2YWxpZG9cIiApe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IGRhdGFcblxuICAgICAgICAgIGZldGNoKFwiL2Fzc2V0cy9pbWFnZXMvdXNlcnMvXCIgKyB0aGlzLnVzZXJJbmZvLmlkICkgXG4gICAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XG4gICAgICAgICAgICAgICAgdGhpcy5leGlzdCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpc3QgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSApLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhpc3QgPSBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICBcbiAgICAgIHRoaXMuZ2V0Tm90aXMoKVxuICAgICAgZ2V0VXNlckRlcGFydG1lbnRzKHRva2VuLCB0aGlzLnVzZXJJbmZvLmlkKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50cyA9IGRhdGFcbiAgICAgICAgICAgIGdldEFsbFRlYW1zRnJvbURlcGFydG1lbnQodG9rZW4sIHRoaXMuZGVwYXJ0bWVudHNbMF0uaWQpLnRoZW4oZGF0YSA9PiAodGhpcy50ZWFtcyA9IGRhdGEpKVxuICAgICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgdGhpcy5nZXROb3RpcygpfSwgMTAwMDAwKTtcbiAgICBcbiAgfSxcbiAgY3JlYXRlZCgpe1xuICAgICAgIC8vR0VUIFVTRVIgZGVwYXJ0bWVudHNcbiAgICAgIFxuICAgICAgICB0aGlzLmZldGNoRGF0YSgpXG4gICAgICAgIFxuICAgICAgRXZlbnRCdXMuJG9uKCdpbWdQcm9maWxlJywgdGhpcy5wcm9maWxlSW1nKVxuICB9LFxuXG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctc2NyZWVuIGgtc2NyZWVuIGZvbnQtQmFybG93XCI+XG4gICAgICAgIDxhc2lkZSBjbGFzcz1cImZpeGVkIHctNDggdG9wLTAgbGVmdC0wIHotNTBcIj4gXG4gICAgICAgICAgPFVzZXJTaWRlQmFyIDppZFJvbD1cImlkUm9sXCIvPiBcbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LXNjcmVlbiBtbC00MCBweS0wIHB4LTVcIj5cbiAgICAgICAgICA8cm91dGVyLXZpZXc+PFdlbGNvbWUvPjwvcm91dGVyLXZpZXc+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICAgICAgIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBVc2VyU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZSc7XG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlck5hdkJhci9XZWxjb21lL1dlbGNvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VyJyxcbiAgY29tcG9uZW50czoge1xuICAgIFVzZXJTaWRlQmFyLFxuICAgIEZvb3RlcixcbiAgICBXZWxjb21lXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkUm9sOiBudWxsLFxuICAgICAgaWRSb2xOYW1lOiBcIlwiLFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICAgZ2V0VXNlcigpe1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsaWRhdGlvbl90b2tlbicpKTtcbiAgICAgICAgZmV0Y2goXCIvYXBpL3VzZXJcIix7XG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzcCA9PiAgcmVzcC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkUm9sID0gZGF0YS5pZF9yb2xcbiAgICAgICAgICAgIHRoaXMuZ2V0Um9sZSh0aGlzLmlkUm9sKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldFJvbGUoaWRSb2wpe1xuICAgICAgICBmZXRjaChcIi9hcGkvcm9sL1wiK2lkUm9sK1wiP3Rva2VuPVwiK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJykpXG4gICAgICAgICAgLnRoZW4ocmVzcCA9PiAgcmVzcC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgIHRoaXMuaWRSb2xOYW1lID0gZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWxpZGF0aW9uX3Rva2VuJykgPT09IG51bGwpXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpIFxuICAgICAgICB0aGlzLmdldFVzZXIoKVxuICAgIH0sXG4gIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJnXCIsIFtcbiAgICBfYyhcInBhdGhcIiwge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZDpcbiAgICAgICAgICBcIk0yNDcsNDIuMzhBMTQ0LjcxLDE0NC43MSwwLDAsMCw0Mi4zOCwyNDcsMTQ0LjcxLDE0NC43MSwwLDAsMCwyNDcsNDIuMzhaTTE0NC43LDI3Mi40NUExMjcuNzUsMTI3Ljc1LDAsMSwxLDI3Mi40NSwxNDQuNywxMjcuODksMTI3Ljg5LDAsMCwxLDE0NC43LDI3Mi40NVptMCwwXCJcbiAgICAgIH1cbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjbHMtMVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZDpcbiAgICAgICAgICBcIk0yMTAuNzUsMTE3LjYzbC03NCw3NGExNCwxNCwwLDAsMS0xOS44NiwwTDc4LjY3LDE1My40M2ExNCwxNCwwLDAsMSwxOS44Ni0xOS44NmwyOC4yOCwyOC4yOCw2NC4wOC02NC4wOGExNCwxNCwwLDAsMSwxOS44NiwxOS44NlpcIlxuICAgICAgfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImdcIiwgW1xuICAgIF9jKFwiZ1wiLCBbXG4gICAgICBfYyhcImdcIiwgW1xuICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkOlxuICAgICAgICAgICAgICBcIk04NzkuMDMsMTI2LjUzSDE3My4wNWMtMjkuOTUsMC01NC4zMiwyNC4zNy01NC4zMiw1NC4zMnY0NDguMDNjMCw3LjQ5LDYuMDgsMTMuNTgsMTMuNTgsMTMuNThoNzg3LjQ3XFxuXFx0XFx0XFx0XFx0YzcuNDksMCwxMy41OC02LjA4LDEzLjU4LTEzLjU4VjE4MC44NUM5MzMuMzUsMTUwLjksOTA4Ljk4LDEyNi41Myw4NzkuMDMsMTI2LjUzeiBNOTA2LjIsNjE1LjNIMTQ1Ljg4VjE4MC44NVxcblxcdFxcdFxcdFxcdGMwLTE0Ljk5LDEyLjE5LTI3LjE3LDI3LjE3LTI3LjE3aDcwNS45OGMxNC45NywwLDI3LjE3LDEyLjE4LDI3LjE3LDI3LjE3VjYxNS4zelwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZ1wiLCBbXG4gICAgICBfYyhcImdcIiwgW1xuICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkOlxuICAgICAgICAgICAgICBcIk05MTkuNzcsNjE1LjNIMTMyLjMxYy03LjQ5LDAtMTMuNTgsNi4wOC0xMy41OCwxMy41OHY2Ny44N2MwLDI5Ljk1LDI0LjM3LDU0LjMyLDU0LjMyLDU0LjMyaDcwNS45OFxcblxcdFxcdFxcdFxcdGMyOS45NSwwLDU0LjMyLTI0LjM3LDU0LjMyLTU0LjMydi02Ny44N0M5MzMuMzUsNjIxLjM5LDkyNy4yNyw2MTUuMyw5MTkuNzcsNjE1LjN6IE05MDYuMiw2OTYuNzVcXG5cXHRcXHRcXHRcXHRjMCwxNC45OS0xMi4xOSwyNy4xNy0yNy4xNywyNy4xN0gxNzMuMDVjLTE0Ljk4LDAtMjcuMTctMTIuMTgtMjcuMTctMjcuMTd2LTU0LjI5SDkwNi4yTDkwNi4yLDY5Ni43NUw5MDYuMiw2OTYuNzV6XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJnXCIsIFtcbiAgICAgIF9jKFwiZ1wiLCBbXG4gICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgIFwiTTU2Ni43Nyw2NjkuNjFoLTgxLjQ2Yy03LjQ5LDAtMTMuNTgsNi4wOC0xMy41OCwxMy41OGMwLDcuNDksNi4wOCwxMy41OCwxMy41OCwxMy41OGg4MS40NlxcblxcdFxcdFxcdFxcdGM3LjQ5LDAsMTMuNTgtNi4wOCwxMy41OC0xMy41OEM1ODAuMzUsNjc1LjcsNTc0LjI2LDY2OS42MSw1NjYuNzcsNjY5LjYxelwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZ1wiLCBbXG4gICAgICBfYyhcImdcIiwgW1xuICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkOlxuICAgICAgICAgICAgICBcIk03MDIuNTQsODMyLjU0aC0zNTNjLTIyLjQ2LDAtNDAuNzMsMTguMjctNDAuNzMsNDAuNzNTMzI3LjA4LDkxNCwzNDkuNTQsOTE0aDM1M2MyMi40NiwwLDQwLjczLTE4LjI3LDQwLjczLTQwLjczXFxuXFx0XFx0XFx0XFx0UzcyNSw4MzIuNTQsNzAyLjU0LDgzMi41NHogTTcwMi41NCw4ODYuODVoLTM1M2MtNy40OSwwLTEzLjU4LTYuMS0xMy41OC0xMy41OHM2LjA4LTEzLjU4LDEzLjU4LTEzLjU4aDM1M1xcblxcdFxcdFxcdFxcdGM3LjQ5LDAsMTMuNTgsNi4xLDEzLjU4LDEzLjU4UzcxMC4wNCw4ODYuODUsNzAyLjU0LDg4Ni44NXpcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNNjc1LjM5LDgzMi41NGMtNDUuMDUsMC02Ny44OS0zMS45Ny02Ny44OS05NS4wNGMwLTcuNDktNi4wOC0xMy41OC0xMy41OC0xMy41OEg0NTguMTZjLTcuNDksMC0xMy41OCw2LjA4LTEzLjU4LDEzLjU4XFxuXFx0XFx0XFx0XFx0YzAsNjMuMDYtMjIuODQsOTUuMDQtNjcuODksOTUuMDRjLTcuNDksMC0xMy41OCw2LjA4LTEzLjU4LDEzLjU4czYuMDgsMTMuNTgsMTMuNTgsMTMuNThoMjk4LjY5YzcuNDksMCwxMy41OC02LjA4LDEzLjU4LTEzLjU4XFxuXFx0XFx0XFx0XFx0UzY4Mi44OCw4MzIuNTQsNjc1LjM5LDgzMi41NHogTTQ0Mi44Myw4MzIuNTRjMTYuNzEtMTguNTIsMjYuNTYtNDYuMDksMjguNTQtODEuNDZoMTA5LjM2YzEuOTcsMzUuMzcsMTEuODEsNjIuOTQsMjguNTQsODEuNDZcXG5cXHRcXHRcXHRcXHRINDQyLjgzelwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJnXCIsIFtcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdDNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNNzQxLjYsNTQ0LjFMNDM3LjEsMzljLTEyLTE5LjktMzMuOS0zMi4zLTU3LjEtMzIuM1MzMzQuOSwxOS4yLDMyMi45LDM5bC0zMDQuNSw1MDVcXG5cXHRcXHRcXHRcXHRcXHRjLTEyLjQsMjAuNi0xMi44LDQ2LjMtMSw2Ny4yYzExLjgsMjAuOSwzNC4xLDMzLjksNTguMSwzMy45aDYwOWMyNCwwLDQ2LjMtMTMsNTguMS0zMy45Qzc1NC40LDU5MC40LDc1NCw1NjQuNiw3NDEuNiw1NDQuMXpcXG5cXHRcXHRcXHRcXHRcXHQgTTcwMC41LDU4Ny41Yy0zLjMsNS44LTkuNCw5LjMtMTYsOS4zaC02MDljLTYuNiwwLTEyLjctMy42LTE2LTkuM2MtMy4zLTUuOC0zLjEtMTIuOCwwLjMtMTguNUwzNjQuMyw2NFxcblxcdFxcdFxcdFxcdFxcdGMzLjMtNS41LDkuMy04LjksMTUuNy04LjljNi40LDAsMTIuNCwzLjQsMTUuNyw4LjlsMzA0LjUsNTA1QzcwMy43LDU3NC43LDcwMy44LDU4MS44LDcwMC41LDU4Ny41elwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZ1wiLCBbXG4gICAgICBfYyhcImdcIiwgW1xuICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0M1wiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkOlxuICAgICAgICAgICAgICBcIk0zODAuMiwyMDUuN2MtMTguNCwwLTMyLjcsOS45LTMyLjcsMjcuNGMwLDUzLjQsNi4zLDEzMCw2LjMsMTgzLjRjMCwxMy45LDEyLjEsMTkuNywyNi41LDE5LjdcXG5cXHRcXHRcXHRcXHRcXHRjMTAuOCwwLDI2LTUuOCwyNi0xOS43YzAtNTMuNCw2LjMtMTMwLDYuMy0xODMuNEM0MTIuNSwyMTUuNSwzOTcuNywyMDUuNywzODAuMiwyMDUuN3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImdcIiwgW1xuICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdDNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgXCJNMzgwLjcsNDY3LjFjLTE5LjcsMC0zNC41LDE1LjctMzQuNSwzNC41YzAsMTguNCwxNC44LDM0LjUsMzQuNSwzNC41YzE4LjQsMCwzNC4xLTE2LjEsMzQuMS0zNC41XFxuXFx0XFx0XFx0XFx0XFx0QzQxNC44LDQ4Mi44LDM5OS4xLDQ2Ny4xLDM4MC43LDQ2Ny4xelwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJwYXRoXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgZDpcbiAgICAgICAgXCJNMjk1LjI5LDBIMzUuNjZBMzUuNywzNS43LDAsMCwwLDAsMzUuNjZWMjUzLjc1YTM1LjcsMzUuNywwLDAsMCwzNS42NiwzNS42NkgyOTUuMjlBMzUuNywzNS43LDAsMCwwLDMzMSwyNTMuNzVWMzUuNjZBMzUuNywzNS43LDAsMCwwLDI5NS4yOSwwWm0wLDE5LjM5YTE2LjE1LDE2LjE1LDAsMCwxLDIuMzguMThMMTc3LDE0MC4yNmExNi4yOSwxNi4yOSwwLDAsMS0yMywwTDMzLjI4LDE5LjU3YTE2LjE2LDE2LjE2LDAsMCwxLDIuMzgtLjE4Wm0xNi4yNywyMzQuMzZBMTYuMjksMTYuMjksMCwwLDEsMjk1LjI5LDI3MEgzNS42NmExNi4yOSwxNi4yOSwwLDAsMS0xNi4yNy0xNi4yN1YzNS42NmExNi40MywxNi40MywwLDAsMSwuMTctMi4zOEwxNDAuMjYsMTU0YTM1LjcsMzUuNywwLDAsMCw1MC40MywwTDMxMS4zOCwzMy4yOGExNi40NSwxNi40NSwwLDAsMSwuMTcsMi4zOFptMCwwXCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInBhdGhcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBkOlxuICAgICAgICBcIk0yMjQuODQsMTI1Ljk0QTUzLjg5LDUzLjg5LDAsMSwwLDE3Nyw0Ny4zMmE4OC4xOSw4OC4xOSwwLDAsMC0xOS41Ny03LjkxLDI2LjY0LDI2LjY0LDAsMSwwLTQ2Ljc0LDAsODkuMzYsODkuMzYsMCwwLDAtNjUuODUsODYuMDl2NzUuNjVhMjYuNjQsMjYuNjQsMCwwLDAsOC40OCw1MS45SDkwYTQ0LjgsNDQuOCwwLDAsMCw4OCwwaDM2Ljc0YTI2LjY0LDI2LjY0LDAsMCwwLDguNDgtNTEuOVYxMjUuOTFsMS42MSwwWm0wLTkwLjgyYTM2LjkzLDM2LjkzLDAsMSwxLTM2LjkzLDM2LjkzLDM3LDM3LDAsMCwxLDM2LjkzLTM2LjkzWk0xMzQsMTdhOS42OCw5LjY4LDAsMSwxLTkuNjgsOS42OEE5LjcsOS43LDAsMCwxLDEzNCwxN1ptMCwyNTUuNDlhMjcuOSwyNy45LDAsMCwxLTI2LjUzLTE5LjM3aDUzLjA2QTI3LjksMjcuOSwwLDAsMSwxMzQsMjcyLjQ1Wm03Mi4yNS0xNDYuOTJ2ODIuNzVhOC40OCw4LjQ4LDAsMCwwLDguNDgsOC40OCw5LjY4LDkuNjgsMCwwLDEsMCwxOS4zN0g1My4zYTkuNjgsOS42OCwwLDEsMSwwLTE5LjM3LDguNDgsOC40OCwwLDAsMCw4LjQ4LTguNDhWMTI1LjUzQTcyLjI2LDcyLjI2LDAsMCwxLDE3MS41OCw2My44MWE1My45Miw1My45MiwwLDAsMCwzNC42Miw1OC44MWMwLDEsLjA3LDEuOTUuMDcsMi45MlptMCwwXCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZm9vdGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmctZm9udENvbG9yLXByaW1hcnlcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIsKpIENvcHlyaWdodCBhbGwgcmlnaHRzIHJlc2VydmVkIHRvIFBpw7FhIFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJzaWRlTmF2QmFyLWNvbnRhaW5lciBoLWZ1bGwgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHRleHQtZm9udENvbG9yICBiZy1zaWRlQmFyLXByaW1hcnkgbWQ6dy1mdWxsIFwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgYmctc2lkZUJhci1wcmltYXJ5IG1kOnctZnVsbCBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi91c2VyL2RlcGFydG1lbnRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteS0xMCB3LTEwIGgtMTAgc206dy0yNCBzbTpoLTI0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2Fzc2V0cy9pbWFnZXMvYnVpbGQvTE9HT19QacOxYS0wMy5wbmdcIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgc206aGlkZGVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC1saWdodGVyIGJvcmRlci10ZWFsLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRpdGxlXCIsIFtfdm0uX3YoXCJNZW51XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IFwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInNpZGVuYXZCYXItZWxlbWVudC1jb250YWluZXIgZmxleC1ncm93IHNtOmZsZXggc206aXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0ub3BlbiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1zbSBoLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBzbTpmbGV4LWdyb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIG1sLTMgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1yb3cgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDgwIDEwODBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1uYW1lXCI6IFwiZGVwYXJ0bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJEZXBhXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBtci0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi91c2VyL2RlcGFydG1lbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZXBhcnRhbWVudG9zXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVyb3MgbWwtMyBmbGV4IGZsZXgtcm93IG0tMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpY29uLW5hbWVcIjogXCJib2FyZHNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkJvYXJkc1wiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtbC0zIG1yLTMgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibG9jay13b3JraW5nLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNaXMgdGFibGVyb3NcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbXMsIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdmVyOnRleHQtaW5kaWdvLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmROYW1lOiBpdGVtcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZFRlYW1JRDogaXRlbXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtcy5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd05vdGlmaWNhdGlvbnMgPSAhX3ZtLnNob3dOb3RpZmljYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiaWNvbi1uYW1lXCI6IFwibm90aWZpY2F0aW9uXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJOb3RpZmljYXRpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiIG1sLTMgbXItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb3RpZmljYWNpb25lc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm51bWJlcm5vdGlmaWNhdGlvbnMgIT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LXJlZC0xMDAgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIGJnLXJlZC02MDAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubnVtYmVybm90aWZpY2F0aW9ucykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtbC0zIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4IGZsZXgtcm93IG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tbmFtZVwiOiBcImRlcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDc2MCA2NTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiSW5jaWRlbmNpYXNcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0zIG1yLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL3VzZXIvd2VsY29tZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluY2lkZW5jaWFzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaWRSb2wgIT0gXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgbWwtMyBob3Zlcjp0ZXh0LWluZGlnby01MDAgY3Vyc29yLXBvaW50ZXIgZmxleCBmbGV4LXJvdyBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1uYW1lXCI6IFwiZGVwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDc2MCA2NTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiSW5jaWRlbmNpYXNcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBtci0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvdXNlci9hZG1pblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZG1pblwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwbGFjZS1zZWxmLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXJJbmZvLmlkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3LTEyIGgtMTIgcGxhY2Utc2VsZi1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2ZpbGVVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWRVc2VyOiBfdm0udXNlckluZm8uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvdXNlcnMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlckluZm8uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaW1hZ2VzL3VzZXJzL2F2YXRhci5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwbGFjZS1zZWxmLWNlbnRlciBtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCIgcm91bmRlZCBiZy1yZWQtNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMT0cgT1VUXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93Tm90aWZpY2F0aW9ucyxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93Tm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZml4ZWQgdG9wLVsyMDBweF0gbGVmdC1bMjAwcHhdIHctWzUwMHB4XSBoLVszMDBweF0gei1bNTFweF0gc2hhZG93LTJ4bCBib3JkZXIgYmctd2hpdGUgcm91bmRlZC1sZyBvdmVyZmxvdy1hdXRvIHAtMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTm90aWZpY2FjaW9uZXNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Zlcjp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZVRhYiA9PT0gXCJBTExcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuTm90aWZpY2F0aW9ucyhcImFsbFwiKSwgKF92bS5hY3RpdmVUYWIgPSBcIkFMTFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVG9kb3NcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG92ZXI6dGV4dC1zaWRlQmFyLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID09PSBcIk5PVFJFQURcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuTm90aWZpY2F0aW9ucyhcIm5vdHJlYWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmFjdGl2ZVRhYiA9IFwiTk9UUkVBRFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm8gbGVpZG9cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG92ZXI6dGV4dC1zaWRlQmFyLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID09PSBcIk1FTlRJT05cIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuTm90aWZpY2F0aW9ucyhcIm1lbnRpb25lZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYWN0aXZlVGFiID0gXCJNRU5USU9OXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNZSBtZW5jaW9uYXJvblwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Zlcjp0ZXh0LXNpZGVCYXItcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVUYWIgPT09IFwiQVNTSUdOXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ub3Blbk5vdGlmaWNhdGlvbnMoXCJhc2lnbmVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5hY3RpdmVUYWIgPSBcIkFTU0lHTlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWUgYXNpZ25hcm9uXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwYWNlciBiZy1zaWRlQmFyLXByaW1hcnkgdy1mdWxsIGgtMC41XCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb250ZW50LCBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgtMjQgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHktNCBweC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnJlYWRlZCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyIHNoYWRvdyBncm91cCBiZy1zaWRlQmFyLXByaW1hcnkgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTQwMCBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlciBzaGFkb3cgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNpZGVCYXItcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJzaWRlYmFyXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhpdGVtc1tcIm1lc3NhZ2VcIl0pIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbXMucmVhZGVkID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtcy5yZWFkZWQgPT0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBvcG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtcG9wb3ZlcjpyZWFkZWQuYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlYWRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBib3R0b206IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaC01IHctNSBncm91cC1ob3Zlcjpib3JkZXItZ3JlZW4tNTAwIGdyb3VwLWhvdmVyOnRleHQtZ3JlZW4tNTAwIGJvcmRlciByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlYWRlZChpdGVtcy5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIOKclFxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW1zLmNyZWF0ZWRfYXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3BvdmVyXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJyZWFkZWRcIiwgZXZlbnQ6IFwiaG92ZXJcIiwgd2lkdGg6IDE1MCB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgIE1hcmNhciBjb21vIGxlaWRvXFxuICAgICAgICAgIFwiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCB3LXNjcmVlbiBoLXNjcmVlbiBmb250LUJhcmxvd1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFzaWRlXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZml4ZWQgdy00OCB0b3AtMCBsZWZ0LTAgei01MFwiIH0sXG4gICAgICAgIFtfYyhcIlVzZXJTaWRlQmFyXCIsIHsgYXR0cnM6IHsgaWRSb2w6IF92bS5pZFJvbCB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1zY3JlZW4gbWwtNDAgcHktMCBweC01XCIgfSxcbiAgICAgICAgW19jKFwicm91dGVyLXZpZXdcIiwgW19jKFwiV2VsY29tZVwiKV0sIDEpXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Cb2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4ZGI1ZjQ2JlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYThkYjVmNDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYThkYjVmNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYThkYjVmNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0JvYXJkcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YThkYjVmNDYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYThkYjVmNDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2ljb25zL0JvYXJkcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RlcGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTliOTFmODdjJlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWI5MWY4N2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWI5MWY4N2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWI5MWY4N2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RlcGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTliOTFmODdjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzliOTFmODdjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9pY29ucy9EZXBhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5jaWRlbmNpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRkYWJkZWNjJlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGRhYmRlY2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGRhYmRlY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGRhYmRlY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luY2lkZW5jaWFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZGFiZGVjYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZGFiZGVjYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvSW5jaWRlbmNpYXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTMxYzBjNyZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdhMzFjMGM3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdhMzFjMGM3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdhMzFjMGM3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTMxYzBjNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YTMxYzBjNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTWFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdGlmaWNhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIzZDExZmImXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYjNkMTFmYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYjNkMTFmYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYjNkMTFmYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm90aWZpY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjNkMTFmYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYjNkMTFmYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaWNvbnMvTm90aWZpY2F0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjY0Yjc3NSZcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNiNjRiNzc1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNiNjRiNzc1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNiNjRiNzc1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNjRiNzc1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiNjRiNzc1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJiOWIyMjMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclNpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JiOWIyMjMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JiOWIyMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JiOWIyMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmI5YjIyMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmI5YjIyMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL3VzZXIvVXNlclNpZGVCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzRiMjk1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDc0YjI5NWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDc0YjI5NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDc0YjI5NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3NGIyOTVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3NGIyOTVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdmlld3MvVXNlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9