(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/media/LOGO/LOGO_Piña-01.png":
/*!********************************************!*\
  !*** ./assets/media/LOGO/LOGO_Piña-01.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/LOGO_Piña-01.1c5ff16b.png";

/***/ }),

/***/ "./assets/media/users/avatar-loading.png":
/*!***********************************************!*\
  !*** ./assets/media/users/avatar-loading.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/avatar-loading.6559e259.png";

/***/ }),

/***/ "./assets/media/users sync recursive ^\\.\\/.*\\.png$":
/*!************************************************!*\
  !*** ./assets/media/users/ sync ^\.\/.*\.png$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./avatar-loading.png": "./assets/media/users/avatar-loading.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/media/users sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.js */ "./assets/routes.js");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/App */ "./assets/views/App.vue");
/* harmony import */ var vue_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastify */ "./node_modules/vue-toastify/dist/vue-toastify.umd.min.js");
/* harmony import */ var vue_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.min.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "./node_modules/vue-toast-notification/dist/theme-sugar.css");
/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-js-modal */ "./node_modules/vue-js-modal/dist/index.js");
/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_js_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_sliding_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-sliding-panel */ "./node_modules/vue-sliding-panel/dist/vue-sliding-panel.common.js");
/* harmony import */ var vue_sliding_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_sliding_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_tailwind_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-tailwind-picker */ "./node_modules/vue-tailwind-picker/dist/vue-tailwind-picker.esm.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)










 // for snow theme

vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_toastify__WEBPACK_IMPORTED_MODULE_2___default()));
vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default()));
vue__WEBPACK_IMPORTED_MODULE_10__.default.use(vue_tailwind_picker__WEBPACK_IMPORTED_MODULE_7__.default);
vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_sliding_panel__WEBPACK_IMPORTED_MODULE_6___default()));
vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_js_modal__WEBPACK_IMPORTED_MODULE_5___default()));
vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_toast_notification__WEBPACK_IMPORTED_MODULE_3___default()));
var app = new vue__WEBPACK_IMPORTED_MODULE_10__.default({
  router: _routes_js__WEBPACK_IMPORTED_MODULE_0__.default,
  render: function render(h) {
    return h(_views_App__WEBPACK_IMPORTED_MODULE_1__.default);
  }
}).$mount('#app');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./assets/event-bus.js":
/*!*****************************!*\
  !*** ./assets/event-bus.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBus": () => (/* binding */ EventBus)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0__.default();

/***/ }),

/***/ "./assets/routes.js":
/*!**************************!*\
  !*** ./assets/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_user_userNavBar_UserBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/userNavBar/UserBoard */ "./assets/components/user/userNavBar/UserBoard.vue");
/* harmony import */ var _components_user_userNavBar_Admin_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/userNavBar/Admin/Admin */ "./assets/components/user/userNavBar/Admin/Admin.vue");
/* harmony import */ var _components_user_userNavBar_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/userNavBar/UserProfile */ "./assets/components/user/userNavBar/UserProfile.vue");
/* harmony import */ var _components_user_userNavBar_UserDepartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/userNavBar/UserDepartment */ "./assets/components/user/userNavBar/UserDepartment.vue");
/* harmony import */ var _components_user_userNavBar_Department_Department__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/userNavBar/Department/Department */ "./assets/components/user/userNavBar/Department/Department.vue");
/* harmony import */ var _components_user_userNavBar_Department_Incidents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/userNavBar/Department/Incidents */ "./assets/components/user/userNavBar/Department/Incidents.vue");
/* harmony import */ var _components_user_userNavBar_Incidencias__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/userNavBar/Incidencias */ "./assets/components/user/userNavBar/Incidencias.vue");
/* harmony import */ var _components_login_PasswordReset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/PasswordReset */ "./assets/components/login/PasswordReset.vue");
/* harmony import */ var _components_login_PasswordChange__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/PasswordChange */ "./assets/components/login/PasswordChange.vue");
/* harmony import */ var _components_user_userNavBar_Welcome_Welcome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/userNavBar/Welcome/Welcome */ "./assets/components/user/userNavBar/Welcome/Welcome.vue");
/* harmony import */ var _components_user_userNavBar_Welcome_WelcomeTeams__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/userNavBar/Welcome/WelcomeTeams */ "./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue");
/* harmony import */ var _components_user_userNavBar_Board_store_StoreFiles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/userNavBar/Board/store/StoreFiles */ "./assets/components/user/userNavBar/Board/store/StoreFiles.vue");
/* harmony import */ var _components_Redirect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Redirect */ "./assets/components/Redirect.vue");




















vue__WEBPACK_IMPORTED_MODULE_18__.default.use(vue_router__WEBPACK_IMPORTED_MODULE_19__.default);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_19__.default({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Raiz',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_views_Login_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/Login.vue */ "./assets/views/Login.vue"));
    }
  }, {
    path: '/passwordreset',
    component: _components_login_PasswordReset__WEBPACK_IMPORTED_MODULE_12__.default
  }, {
    path: '/passwordchange',
    component: _components_login_PasswordChange__WEBPACK_IMPORTED_MODULE_13__.default
  }, {
    path: '/login',
    name: 'Login',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_views_Login_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/Login.vue */ "./assets/views/Login.vue"));
    }
  }, {
    path: '/user',
    name: 'User',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_views_User_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/User.vue */ "./assets/views/User.vue"));
    },
    children: [{
      path: 'welcome',
      component: _components_user_userNavBar_Welcome_Welcome__WEBPACK_IMPORTED_MODULE_14__.default
    }, {
      path: '',
      component: _components_user_userNavBar_Welcome_Welcome__WEBPACK_IMPORTED_MODULE_14__.default
    }, {
      path: '/department/:departmentName/:departmentID',
      component: _components_user_userNavBar_Welcome_WelcomeTeams__WEBPACK_IMPORTED_MODULE_15__.default,
      name: 'welcometeams',
      props: true
    }, {
      path: '/board/:boardTeamID/:boardName',
      component: _components_user_userNavBar_UserBoard__WEBPACK_IMPORTED_MODULE_5__.default,
      name: 'teams',
      props: true
    }, {
      path: 'profile',
      component: _components_user_userNavBar_UserProfile__WEBPACK_IMPORTED_MODULE_7__.default
    }, {
      path: '/storefile/:boardName/:boardId',
      component: _components_user_userNavBar_Board_store_StoreFiles__WEBPACK_IMPORTED_MODULE_16__.default,
      name: 'StoreFile',
      props: true
    }, {
      path: 'admin',
      component: _components_user_userNavBar_Admin_Admin__WEBPACK_IMPORTED_MODULE_6__.default
    }, {
      path: '/profile/:idUser',
      component: _components_user_userNavBar_UserProfile__WEBPACK_IMPORTED_MODULE_7__.default,
      name: 'profileUser',
      props: true
    }, {
      path: 'department',
      component: _components_user_userNavBar_UserDepartment__WEBPACK_IMPORTED_MODULE_8__.default
    }, {
      path: '/incidencias/:departmentName/:departmentID',
      component: _components_user_userNavBar_Incidencias__WEBPACK_IMPORTED_MODULE_11__.default,
      name: 'incidencias',
      props: true
    }, {
      path: '/incidents/:departmentName/:teamID/:teamName',
      component: _components_user_userNavBar_Department_Incidents__WEBPACK_IMPORTED_MODULE_10__.default,
      name: 'incidents',
      props: true
    }]
  }, {
    path: '/logout',
    name: 'Logout',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_views_Logout_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/Logout.vue */ "./assets/views/Logout.vue"));
    }
  }, {
    path: '/*',
    name: 'redirect',
    component: _components_Redirect__WEBPACK_IMPORTED_MODULE_17__.default
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./assets/servicies/userServicies.js":
/*!*******************************************!*\
  !*** ./assets/servicies/userServicies.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllUsers": () => (/* binding */ getAllUsers),
/* harmony export */   "getUsersInfo": () => (/* binding */ getUsersInfo),
/* harmony export */   "getUserToken": () => (/* binding */ getUserToken),
/* harmony export */   "getAllTeamsFromUser": () => (/* binding */ getAllTeamsFromUser),
/* harmony export */   "getUserDepartments": () => (/* binding */ getUserDepartments),
/* harmony export */   "getUserTeams": () => (/* binding */ getUserTeams),
/* harmony export */   "getNotifications": () => (/* binding */ getNotifications),
/* harmony export */   "getAllTeamsFromDepartment": () => (/* binding */ getAllTeamsFromDepartment),
/* harmony export */   "getAllUsersFromDepartment": () => (/* binding */ getAllUsersFromDepartment),
/* harmony export */   "getAllDepartments": () => (/* binding */ getAllDepartments),
/* harmony export */   "getAllTaskFromTeam": () => (/* binding */ getAllTaskFromTeam),
/* harmony export */   "getImages": () => (/* binding */ getImages),
/* harmony export */   "getOrganization": () => (/* binding */ getOrganization),
/* harmony export */   "getAllTags": () => (/* binding */ getAllTags),
/* harmony export */   "getAllSubTags": () => (/* binding */ getAllSubTags),
/* harmony export */   "getMessage": () => (/* binding */ getMessage),
/* harmony export */   "getSubtaskMessage": () => (/* binding */ getSubtaskMessage),
/* harmony export */   "getTaskStored": () => (/* binding */ getTaskStored),
/* harmony export */   "postDepartment": () => (/* binding */ postDepartment),
/* harmony export */   "postTeamToDepartment": () => (/* binding */ postTeamToDepartment),
/* harmony export */   "postUserToDepartment": () => (/* binding */ postUserToDepartment),
/* harmony export */   "postTime": () => (/* binding */ postTime),
/* harmony export */   "postEditName": () => (/* binding */ postEditName),
/* harmony export */   "postFilesUpload": () => (/* binding */ postFilesUpload),
/* harmony export */   "postFilesTask": () => (/* binding */ postFilesTask),
/* harmony export */   "postStoreTask": () => (/* binding */ postStoreTask),
/* harmony export */   "postMessage": () => (/* binding */ postMessage),
/* harmony export */   "setDate": () => (/* binding */ setDate),
/* harmony export */   "postAddUserToTask": () => (/* binding */ postAddUserToTask),
/* harmony export */   "postSubTask": () => (/* binding */ postSubTask),
/* harmony export */   "setTime": () => (/* binding */ setTime),
/* harmony export */   "putChangeTags": () => (/* binding */ putChangeTags),
/* harmony export */   "putChangeStatusTask": () => (/* binding */ putChangeStatusTask),
/* harmony export */   "postEditNameSubtask": () => (/* binding */ postEditNameSubtask),
/* harmony export */   "postTimeSubtask": () => (/* binding */ postTimeSubtask),
/* harmony export */   "postIncident": () => (/* binding */ postIncident),
/* harmony export */   "postSubtaskMessage": () => (/* binding */ postSubtaskMessage),
/* harmony export */   "ChangeSubTags": () => (/* binding */ ChangeSubTags),
/* harmony export */   "postAddUserToSubTask": () => (/* binding */ postAddUserToSubTask),
/* harmony export */   "setDateSubtask": () => (/* binding */ setDateSubtask),
/* harmony export */   "setTimeSubtask": () => (/* binding */ setTimeSubtask),
/* harmony export */   "createUserInTeam": () => (/* binding */ createUserInTeam),
/* harmony export */   "postTaskToTeam": () => (/* binding */ postTaskToTeam),
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "changeProfile": () => (/* binding */ changeProfile),
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "Login": () => (/* binding */ Login),
/* harmony export */   "readNotifications": () => (/* binding */ readNotifications),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "deleteSubTask": () => (/* binding */ deleteSubTask),
/* harmony export */   "deleteFiles": () => (/* binding */ deleteFiles),
/* harmony export */   "deleteMessage": () => (/* binding */ deleteMessage),
/* harmony export */   "deleteManager": () => (/* binding */ deleteManager)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


//ENDPOINTS 
//*********USERS************
//GET
function getAllUsers(token) {
  return fetch("/api/users?token=" + token).then(function (response) {
    return response.json();
  });
}
function getUsersInfo(token, id_user) {
  return fetch("/api/users/user/" + id_user + "?token=" + token).then(function (response) {
    return response.json();
  });
}
function getUserToken(token) {
  return fetch("/api/users/user?token=" + token).then(function (response) {
    return response.json();
  });
}
function getAllTeamsFromUser(token, userID) {
  return fetch("/api/users/user/" + userID + "/teams?token=" + token).then(function (response) {
    return response.json();
  });
}
function getUserDepartments(token, userID) {
  return fetch("/api/users/user/" + userID + "/departments?token=" + token).then(function (response) {
    return response.json();
  });
}
function getUserTeams(token, id_team) {
  return fetch("/api/teams/team/" + id_team + "/users?token=" + token).then(function (response) {
    return response.json();
  });
}
function getNotifications(token, id_user) {
  return fetch("/api/users/user/" + id_user + "/notifications?token=" + token).then(function (response) {
    return response.json();
  });
} //********DEPARTMENTS**************

function getAllTeamsFromDepartment(token, departmentID) {
  return fetch("/api/departments/" + departmentID + "/teams?token=" + token).then(function (response) {
    return response.json();
  });
}
function getAllUsersFromDepartment(token, departmentID) {
  return fetch("/api/departments/" + departmentID + "/users?token=" + token).then(function (response) {
    return response.json();
  });
}
function getAllDepartments(token) {
  return fetch("/api/departments?token=" + token).then(function (response) {
    return response.json();
  });
} //********TEAMS**********
//GET

function getAllTaskFromTeam(token, teamID) {
  return fetch("/api/teams/team/" + teamID + "/tasks?token=" + token).then(function (response) {
    return response.json();
  });
}
function getImages(type, ID) {
  return fetch("/assets/images/" + type + "/" + ID).then(function (res) {
    return res.blob();
  });
}
function getOrganization(token, id_team) {
  return fetch("/api/teams/team/" + id_team + "/org_chart?token=" + token).then(function (response) {
    return response.json();
  });
}
function getAllTags(token) {
  return fetch("/api/tags?token=" + token).then(function (response) {
    return response.json();
  });
}
function getAllSubTags(token) {
  return fetch("/api/subtags?token=" + token).then(function (response) {
    return response.json();
  });
}
function getMessage(token, id_task) {
  return fetch("/api/tasks/" + id_task + "/messages?token=" + token).then(function (response) {
    return response.json();
  });
}
function getSubtaskMessage(token, id_subtask) {
  return fetch("/api/subtasks/" + id_subtask + "/messages?token=" + token).then(function (response) {
    return response.json();
  });
}
function getTaskStored(token, id_team) {
  return fetch("/api/teams/team/" + id_team + "/tasks/stored?token=" + token).then(function (response) {
    return response.json();
  });
} //POST //departmens

function postDepartment(formData) {
  return fetch("/api/departments?token=" + token, {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postTeamToDepartment(formData, departmentID) {
  return fetch("/api/departments/" + departmentID + "/teams", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return Promise.resolve(resp);
    } else {
      return Promise.reject(new Error(resp.statusText));
    }
  }).then(function (resp) {
    return resp.json();
  });
}
function postUserToDepartment(formData, departmentID) {
  return fetch("/api/departments/" + departmentID + "/users", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json();
    }
  });
} //POST //tasks

function postTime(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/time_working", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postEditName(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/name", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postFilesUpload(formData) {
  return fetch("/api/upload", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 200) {
      return response.json();
    }
  });
}
function postFilesTask(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/file", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postStoreTask(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/store", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postMessage(formData, id_task) {
  fetch("/api/tasks/" + id_task + "/message", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function setDate(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/time_limit", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function postAddUserToTask(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/user", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function postSubTask(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/subtask", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function setTime(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/time_working/add", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
} ///PUT //task

function putChangeTags(formData, id_task) {
  return fetch("/api/tasks/" + id_task + "/tags", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function putChangeStatusTask(id_status, token, id_task) {
  return fetch("/api/tasks/" + id_task + "/status", {
    method: "PUT",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'id_status=' + id_status + '&token=' + token
  }).then(function (resp) {
    return resp.json();
  });
} //POST //subtasks

function postEditNameSubtask(formData, id_subtask) {
  return fetch("/api/subtasks/" + id_subtask + "/name", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postTimeSubtask(formData, id_subtask) {
  return fetch("/api/subtasks/" + id_subtask + "/time_working", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postIncident(formData, id_team) {
  return fetch("/api/incidents/" + id_team, {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function postSubtaskMessage(formData, id_subtask) {
  fetch("/api/subtasks/" + id_subtask + "/message", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function ChangeSubTags(formData, id_subtask) {
  return fetch("/api/subtasks/" + id_subtask + "/subtag", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function postAddUserToSubTask(formData, id_task) {
  return fetch("/api/subtasks/" + id_task + "/user", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function setDateSubtask(formData, id_subtask) {
  return fetch("/api/tasks/" + id_subtask + "/time_limit", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function setTimeSubtask(formData, id_task) {
  return fetch("/api/subtasks/" + id_task + "/time_working/add", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
} //POST //teams

function createUserInTeam(formData, teamID) {
  fetch("/api/teams/team/" + teamID + "/users", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error('No se ha podido crear elS usuario');
    }
  });
}
function postTaskToTeam(formData, teamID) {
  return fetch("/api/teams/team/" + teamID + "/tasks", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
} //POST users

function createUser(formData) {
  return fetch("/api/users", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error('No se ha podido crear el usuario');
    }
  });
}
function changeProfile(formData, userID) {
  return fetch("/api/users/user/" + userID, {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function changePassword(formData, userID) {
  return fetch("/api/users/user/" + userID, {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
}
function Login(formData) {
  return fetch("/api/auth/login", {
    method: "POST",
    body: formData
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function readNotifications(formData, id_user) {
  return fetch("/api/users/user/" + id_user + "/notifications", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 404) {
      return response.json();
    }
  });
} //DELETE

function deleteTask(token, id_task) {
  return fetch("/api/tasks/" + id_task, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'token=' + token
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function deleteSubTask(token, id_subtask) {
  return fetch("/api/subtasks/" + id_subtask, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'token=' + token
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function deleteFiles(token, file_name) {
  return fetch("/api/tasks/files/" + file_name, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'token=' + token
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function deleteMessage(token, id_message) {
  return fetch("/api/tasks/messages/" + id_message, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'token=' + token
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
function deleteManager(token, id_task, id_user) {
  return fetch("/api/tasks/" + id_task + "/user", {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'token=' + token + '&id_user=' + id_user
  }).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Redirect.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Redirect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.$router.push('/user/welcome'); //this.$route.params.pathMatch // '/non-existing'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconBase.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconBase.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
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
  props: {
    iconName: {
      type: String,
      "default": ''
    },
    width: {
      type: [Number, String],
      "default": 18
    },
    height: {
      type: [Number, String],
      "default": 18
    },
    iconColor: {
      type: String,
      "default": 'currentColor'
    },
    viewBox: {
      type: String,
      "default": '0 0 289.41 289.41'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordChange.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordChange.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);








//
//
//
//
//
//
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
  data: function data() {
    return {
      password: ""
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      var params = new URLSearchParams(document.location.search.substring(1));
      var formData = new FormData();
      var token = params.get("token");
      formData.append('password', this.password);
      formData.append('token', token);
      fetch("/api/auth/change_password", {
        method: "POST",
        body: formData
      }).then(function (resp) {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }

        _this.$vToastify.success("Contraseña actualizada con éxito");

        _this.$router.push('/login');

        return resp.json();
      })["catch"](function (error) {
        _this.errorMessage = error;
        console.error('There was an error!', error);

        _this.$vToastify.error("Error");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordReset.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordReset.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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


//
//
//
//
//
//
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
  name: 'passwordreset',
  data: function data() {
    return {
      email: ""
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      var formData = new FormData();
      formData.append('email', this.email);
      fetch("/api/auth/remember_password", {
        method: "POST",
        body: formData
      }).then(function (resp) {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }

        _this.$vToastify.success("Código enviado a su email");

        _this.$router.push('/login');

        return resp.json();
      })["catch"](function (error) {
        _this.errorMessage = error;
        console.error('There was an error!', error);

        _this.$vToastify.error("Ha habido un error");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      email: ''
    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__.VueEditor
  },
  methods: {
    show: function show() {
      this.$modal.show('my-first-modal');
    },
    hide: function hide() {
      this.$modal.hide('my-first-modal');
    },
    createUser: function createUser() {
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('email', this.email);
      formData.append('token', token);

      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__.createUser)(formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/Add */ "./assets/components/icons/Add.vue");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../event-bus */ "./assets/event-bus.js");
//
//
//
//
//
//
//
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
  props: {
    value: File,
    defaultSrc: String,
    id: String
  },
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Add: _icons_Add__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      src: this.defaultSrc,
      file: null,
      active: false
    };
  },
  methods: {
    browse: function browse() {
      this.$refs.file.click();
    },
    change: function change(e) {
      var _this = this;

      this.file = e.target.files[0];
      this.$emit('input', this.file);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = function (e) {
        _this.src = e.target.result;
        var token = localStorage.getItem('validation_token');
        var formData = new FormData();
        formData.append('image', _this.file);
        formData.append('token', token);
        _event_bus__WEBPACK_IMPORTED_MODULE_3__.EventBus.$emit('imgProfile', _this.src);
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.changeProfile)(formData, _this.id);
      };
    },
    defaultImg: function defaultImg(event) {
      event.target.src = __webpack_require__(/*! ../../../media/users/avatar-loading.png */ "./assets/media/users/avatar-loading.png");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../event-bus.js */ "./assets/event-bus.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-js-popover */ "./node_modules/vue-js-popover/dist/index.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vue_js_popover__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Add_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../icons/Add.vue */ "./assets/components/icons/Add.vue");
/* harmony import */ var _icons_Editar_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../icons/Editar.vue */ "./assets/components/icons/Editar.vue");
/* harmony import */ var _icons_File_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../icons/File.vue */ "./assets/components/icons/File.vue");
/* harmony import */ var _icons_Message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../icons/Message */ "./assets/components/icons/Message.vue");
/* harmony import */ var _icons_Trash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../icons/Trash */ "./assets/components/icons/Trash.vue");
/* harmony import */ var _icons_List__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../icons/List */ "./assets/components/icons/List.vue");
/* harmony import */ var _popover_Tag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./popover/Tag */ "./assets/components/user/userNavBar/Board/popover/Tag.vue");
/* harmony import */ var _popover_Popper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./popover/Popper */ "./assets/components/user/userNavBar/Board/popover/Popper.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _icons_Play_vue__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../icons/Play.vue */ "./assets/components/icons/Play.vue");
/* harmony import */ var _icons_Pause_vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../icons/Pause.vue */ "./assets/components/icons/Pause.vue");
/* harmony import */ var _subitems_DatePicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./subitems/DatePicker */ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue");
/* harmony import */ var _subitems_SubTask__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./subitems/SubTask */ "./assets/components/user/userNavBar/Board/subitems/SubTask.vue");
/* harmony import */ var _subitems_SubtaskList__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./subitems/SubtaskList */ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue");
/* harmony import */ var _subitems_SlidePanel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./subitems/SlidePanel */ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! vue2-daterange-picker */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.umd.min.js");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! vue2-daterange-picker/dist/vue2-daterange-picker.css */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




















 //you need to import the CSS manually


vue__WEBPACK_IMPORTED_MODULE_37__.default.use((vue_js_popover__WEBPACK_IMPORTED_MODULE_17___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_18___default()),
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_19__.default,
    Message: _icons_Message__WEBPACK_IMPORTED_MODULE_23__.default,
    List: _icons_List__WEBPACK_IMPORTED_MODULE_25__.default,
    Tag: _popover_Tag__WEBPACK_IMPORTED_MODULE_26__.default,
    Play: _icons_Play_vue__WEBPACK_IMPORTED_MODULE_29__.default,
    Pause: _icons_Pause_vue__WEBPACK_IMPORTED_MODULE_30__.default,
    Popper: _popover_Popper__WEBPACK_IMPORTED_MODULE_27__.default,
    Trash: _icons_Trash__WEBPACK_IMPORTED_MODULE_24__.default,
    SubTask: _subitems_SubTask__WEBPACK_IMPORTED_MODULE_32__.default,
    DatePicker: _subitems_DatePicker__WEBPACK_IMPORTED_MODULE_31__.default,
    DateRangePicker: (vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_35___default()),
    Add: _icons_Add_vue__WEBPACK_IMPORTED_MODULE_20__.default,
    SubtaskList: _subitems_SubtaskList__WEBPACK_IMPORTED_MODULE_33__.default,
    SlidePanel: _subitems_SlidePanel__WEBPACK_IMPORTED_MODULE_34__.default,
    File: _icons_File_vue__WEBPACK_IMPORTED_MODULE_22__.default,
    Editar: _icons_Editar_vue__WEBPACK_IMPORTED_MODULE_21__.default
  },
  props: {
    taskList: Object,
    color: String,
    colorSecondary: String,
    taskStatus: String,
    draggable: Boolean,
    id: String,
    teamid: String,
    progress: Number,
    tagsList: Object,
    usuarios: Array,
    responsable: Array,
    numberResponsable: Number,
    mentionList: Array
  },
  data: function data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      messages: [],
      setID: '',
      modal: false,
      numberSubtask: '',
      numbermessage: '',
      tiempo: null,
      act: false,
      deletebutton: false,
      file: null,
      parar: null,
      addUser: false,
      ID: '',
      deletemanager: false,
      showed: false,
      nameSubtask: '',
      editHidden: false,
      contentEdit: false,
      selected: [],
      opentab: false,
      size: 0,
      horas: 0,
      minutos: 0
    };
  },
  created: function created() {
    var _this = this;

    this.fetchData();
    if (this.taskList.pause == 0) var parar = setInterval(function () {
      _this.time();
    }, 1000);else {
      this.time();
      clearInterval(parar);
    }
  },
  mounted: function mounted() {
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('checkbox', this.select);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('deleteselected', this.deleteSelectedTask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('storeselected', this.storeSelectedTask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('reset', this.reset);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('closeslidepanel', this.closeSlide);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('updatemessage', this.fetchData);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('deletemessage', this.fetchData);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$on('confeti', this.start);
    this.date = this.taskList.time_limit;
    this.numberSubtask = this.taskList.subtasks.length;
    this.numbermessage = this.taskList.messages;
    this.ID = this.teamid;
  },
  watch: {
    '$route': 'fetchData',
    taskList: function taskList() {
      var _this2 = this;

      if (this.taskList.pause == 0) setInterval(function () {
        _this2.time();
      }, 1000);else this.time();
    }
  },
  methods: {
    fetchData: function fetchData() {
      this.getmessages();
    },
    getmessages: function getmessages() {
      var _this3 = this;

      var token = localStorage.getItem('validation_token');

      if (this.opentab) {
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_28__.getMessage)(token, this.taskList.id).then(function (data) {
          _this3.messages = data;
        });
      }
    },
    closeSlide: function closeSlide() {
      this.opentab = false;
    },
    deleteSelectedTask: function deleteSelectedTask(status) {
      var value = document.getElementsByName(this.taskList.id);

      var _iterator = _createForOfIteratorHelper(value),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (status == this.taskStatus) {
            if (i.checked) {
              _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('delete', i.value);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    storeSelectedTask: function storeSelectedTask(status) {
      var value = document.getElementsByName(this.taskList.id);

      var _iterator2 = _createForOfIteratorHelper(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;

          if (status == this.taskStatus) {
            if (i.checked) {
              _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('store', i.value);
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    setTime: function setTime() {
      var hours = this.horas * 3600;
      var minuts = this.minutos * 60;
      var totaltime = hours + minuts;
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('settime', totaltime, this.taskList.id);
    },
    select: function select(status) {
      var value = document.getElementsByName(this.taskList.id);

      var _iterator3 = _createForOfIteratorHelper(value),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var i = _step3.value;

          if (status == this.taskStatus) {
            i.checked = !i.checked;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },
    focusName: function focusName() {
      this.$refs.input.focus();
    },
    editName: function editName(id_task, task_name) {
      var _this4 = this;

      var valor = document.getElementById(task_name);
      var text = valor.textContent;
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('name', text);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_28__.postEditName)(formData, id_task));
      });
      promise.then(function (response) {
        _this4.fetchData();
      });
    },
    browse: function browse() {
      this.$refs.file.click();
    },
    reset: function reset() {
      this.setID = '';
    },
    createSubtask: function createSubtask(id_task) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('subtask', this.nameSubtask, id_task);
      this.nameSubtask = '';
    },
    deleteTask: function deleteTask() {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('delete', this.taskList.id);
      this.hide();
    },
    showSubtask: function showSubtask() {
      this.showed = !this.showed;
    },
    show: function show() {
      this.$modal.show(this.taskList.id);
    },
    hide: function hide() {
      this.$modal.hide(this.taskList.id);
    },
    closingTabsMessage: function closingTabsMessage() {
      this.opentab = false;
      this.opentab = !this.opentab;
    },
    play: function play(ID) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('play', ID);
      this.fetchData();
    },
    deleteFile: function deleteFile(filename) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('deleteFile', filename);
    },
    deleteManager: function deleteManager(id_manager, id_task) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('deletemanager', id_manager, id_task);
    },
    addManager: function addManager(ID, id_task) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('addmanager', ID, id_task);
    },
    update: function update(event) {
      this.file = event.target.files[0];
      _event_bus_js__WEBPACK_IMPORTED_MODULE_16__.EventBus.$emit('updateFiles', this.file, this.taskList.id);
    },
    time: function time() {
      if (this.taskList.pause == 0) {
        var date = new Date();
        var timezone = Math.abs(date.getTimezoneOffset() / 60);
        var last_play = new Date(this.taskList.last_play);
        last_play.setHours(last_play.getHours() + timezone);
        var diffDate = date - last_play;
        var timeWorking = this.taskList.time_working * 1000; //milisegundos

        var _final = diffDate + timeWorking;

        this.tiempo = this.secondsToString(_final);
      } else {
        var milisegundos = this.taskList.time_working * 1000;
        var segundos = Math.floor(milisegundos / 1000 % 60);
        segundos = segundos < 10 ? '0' + segundos : segundos;
        var minute = Math.floor(milisegundos / (1000 * 60) % 60);
        minute = minute < 10 ? '0' + minute : minute;
        var hour = Math.floor(milisegundos / (1000 * 60 * 60)) % 24;
        hour = hour < 10 ? '0' + hour : hour;
        this.tiempo = hour + ':' + minute + ':' + segundos;
      }
    },
    secondsToString: function secondsToString(milisegundos) {
      var segundos = Math.floor(milisegundos / 1000 % 60);
      segundos = segundos < 10 ? '0' + segundos : segundos;
      var minute = Math.floor(milisegundos / (1000 * 60) % 60);
      minute = minute < 10 ? '0' + minute : minute;
      var hour = Math.floor(milisegundos / (1000 * 60 * 60)) % 24;
      hour = hour < 10 ? '0' + hour : hour;
      return hour + ':' + minute + ':' + segundos;
    },
    searchForManager: function searchForManager(id_user) {
      for (var items in this.taskList.users) {
        if (id_user == this.taskList.users[items].id_user) return true;
      }

      return false;
    },
    searchForUsersName: function searchForUsersName(id_user) {
      var _iterator4 = _createForOfIteratorHelper(this.usuarios),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var items = _step4.value;
          if (id_user == items.id) if (items.name == null) return items.email;else return items.name;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../event-bus.js */ "./assets/event-bus.js");
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Expand_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../icons/Expand.vue */ "./assets/components/icons/Expand.vue");
/* harmony import */ var _icons_Trash_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../icons/Trash.vue */ "./assets/components/icons/Trash.vue");
/* harmony import */ var _icons_Play_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../icons/Play.vue */ "./assets/components/icons/Play.vue");
/* harmony import */ var _icons_Pause_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../icons/Pause.vue */ "./assets/components/icons/Pause.vue");
/* harmony import */ var _icons_Collap_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../icons/Collap.vue */ "./assets/components/icons/Collap.vue");
/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TaskList */ "./assets/components/user/userNavBar/Board/TaskList.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _subitems_SubTask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subitems/SubTask */ "./assets/components/user/userNavBar/Board/subitems/SubTask.vue");
/* harmony import */ var _popover_Tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./popover/Tag */ "./assets/components/user/userNavBar/Board/popover/Tag.vue");
/* harmony import */ var _popover_Popper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./popover/Popper */ "./assets/components/user/userNavBar/Board/popover/Popper.vue");
/* harmony import */ var _subitems_SubtaskList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./subitems/SubtaskList */ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue");
/* harmony import */ var _subitems_DatePicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./subitems/DatePicker */ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue");
/* harmony import */ var _servicies_userServicies_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../servicies/userServicies.js */ "./assets/servicies/userServicies.js");
var _components;











function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    status: String,
    taskStatus: String,
    id: String,
    boardTeamID: String,
    placeholder: String,
    color: String,
    colorSecondary: String,
    taskList: Array,
    ht: String,
    search: String,
    tagsList: Object,
    usuarios: Array,
    responsable: Array,
    mentionList: Array
  },
  components: (_components = {
    TaskList: _TaskList__WEBPACK_IMPORTED_MODULE_16__.default,
    Expand: _icons_Expand_vue__WEBPACK_IMPORTED_MODULE_11__.default,
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_10__.default,
    Collap: _icons_Collap_vue__WEBPACK_IMPORTED_MODULE_15__.default,
    Trash: _icons_Trash_vue__WEBPACK_IMPORTED_MODULE_12__.default,
    Draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_17___default()),
    Subtask: _subitems_SubTask__WEBPACK_IMPORTED_MODULE_18__.default,
    SubtaskList: _subitems_SubtaskList__WEBPACK_IMPORTED_MODULE_21__.default,
    Tag: _popover_Tag__WEBPACK_IMPORTED_MODULE_19__.default,
    Popper: _popover_Popper__WEBPACK_IMPORTED_MODULE_20__.default
  }, _defineProperty(_components, "Subtask", _subitems_SubTask__WEBPACK_IMPORTED_MODULE_18__.default), _defineProperty(_components, "DatePicker", _subitems_DatePicker__WEBPACK_IMPORTED_MODULE_22__.default), _defineProperty(_components, "Play", _icons_Play_vue__WEBPACK_IMPORTED_MODULE_13__.default), _defineProperty(_components, "Pause", _icons_Pause_vue__WEBPACK_IMPORTED_MODULE_14__.default), _components),
  data: function data() {
    return {
      content: "",
      active: true,
      show: false,
      filterRespon: '',
      filtro: false,
      openMenu: false,
      sortDirection: '',
      resp: [],
      orden: false,
      manager: '',
      dateFake: '',
      tarea: {
        "id": "1",
        "id_user_update": null,
        name: '',
        "store": "0",
        time_limit: "2021-14-02",
        time_limit_end: "2021-14-02",
        "messages": "0",
        "incident": "0",
        "email": null,
        "last_play": "0000-00-00 00:00:00",
        "time_working": "0",
        "pause": "1",
        "id_status": this.taskStatus,
        "id_team": this.boardTeamID,
        "created_at": "2021-06-30 11:33:48",
        "updated_at": "2021-06-30 11:33:48",
        "deleted_at": "0000-00-00 00:00:00",
        "deleted": "0",
        "status": "WORKING",
        "tags": [{
          "id": "3657",
          "id_task": "1",
          "id_tag": "1",
          "created_at": "2021-06-30 11:33:48",
          "updated_at": "2021-06-30 11:33:48",
          "deleted_at": "0000-00-00 00:00:00",
          "deleted": "0"
        }, {
          "id": "3658",
          "id_task": "1",
          "id_tag": "2",
          "created_at": "2021-06-30 11:33:48",
          "updated_at": "2021-06-30 11:33:48",
          "deleted_at": "0000-00-00 00:00:00",
          "deleted": "0"
        }, {
          "id": "3659",
          "id_task": "1",
          "id_tag": "3",
          "created_at": "2021-06-30 11:33:48",
          "updated_at": "2021-06-30 11:33:48",
          "deleted_at": "0000-00-00 00:00:00",
          "deleted": "0"
        }, {
          "id": "3660",
          "id_task": "1",
          "id_tag": "4",
          "created_at": "2021-06-30 11:33:48",
          "updated_at": "2021-06-30 11:33:48",
          "deleted_at": "0000-00-00 00:00:00",
          "deleted": "0"
        }],
        "subtasks": [],
        "users": [{
          "id": "1006",
          id_user: "",
          "id_task": "1",
          "created_at": "2021-06-30 11:33:48",
          "updated_at": "2021-06-30 11:33:48",
          "deleted_at": "0000-00-00 00:00:00",
          "deleted": "0"
        }],
        "files": [],
        "progress": 0
      }
    };
  },
  methods: {
    check: function check(status) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$emit('checkbox', status);
    },
    deleteSelectedTask: function deleteSelectedTask(status) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$emit('deleteselected', status);
      this.hide();
    },
    storeTask: function storeTask(status) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$emit('storeselected', status);
      this.hide();
    },
    showStore: function showStore() {
      this.$modal.show('store' + this.status);
    },
    showModal: function showModal() {
      this.$modal.show(this.status);
    },
    hide: function hide() {
      this.$modal.hide(this.status);
      this.$modal.hide('store' + this.status);
    },
    onUpdate: function onUpdate() {
      this.tarea.name = this.content;
      this.tarea.users[0].id_user = this.resp.team.id;
      this.tarea.time_limit = this.dateFake;
      this.tarea.time_limit_end = this.dateFake;
      this.taskList.push(this.tarea);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$emit('update', this.content, this.taskStatus);
      this.content = '';
    },
    onEnd: function onEnd(evt) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$emit('changeStatus', evt.to.id, evt.item.id);
    },
    sort: function sort() {
      this.orden = true;
      if (this.sortDirection == 'asc') this.sortDirection = 'desc';else this.sortDirection = 'asc';
    },
    managerFilter: function managerFilter(id_user) {
      if (id_user != 0) {
        this.filtro = true;
        this.filterRespon = id_user;
      } else this.filtro = false;
    },
    declareManager: function declareManager() {
      var _this = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies_js__WEBPACK_IMPORTED_MODULE_23__.getOrganization)(token, this.boardTeamID).then(function (data) {
        _this.resp = data;
        _this.manager = _this.resp.team.id;
      });
    }
  },
  created: function created() {
    _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$on('managerfilter', this.managerFilter);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_9__.EventBus.$on('focussearch', this.focusSearch);
    this.declareManager();
    if (this.taskStatus == 1) this.active = true;else if (this.taskStatus == 3) this.active = false;else this.active = false;
    var date1 = new Date();
    var daystart = date1.getDate();
    var monthstart = String(date1.getMonth() + 1);
    var yearstart = String(date1.getFullYear());
    this.dateFake = yearstart + '-' + monthstart + '-' + daystart;
  },
  computed: {
    filterTask: function filterTask() {
      var _this2 = this;

      return this.taskList.filter(function (task) {
        if (_this2.filtro) for (var items in task.users) {
          if (parseInt(task.users[items].id_user) == parseInt(_this2.filterRespon)) {
            return task.name.toUpperCase().match(_this2.search.toUpperCase());
          }

          return false;
        } else if (_this2.orden) {
          return _this2.taskList.sort(function (p1, p2) {
            var modifier = 1;
            if (_this2.sortDirection === 'desc') modifier = -1;else if (_this2.sortDirection === 'asc') modifier = 1;else modifier = 0;
            if (p1.time_limit_end < p2.time_limit_end) return -1 * modifier;
            if (p1.time_limit_end > p2.time_limit_end) return 1 * modifier;
            return 0;
          });
        } else if (_this2.filter) {
          return task.name.toUpperCase().match(_this2.search.toUpperCase());
        } else return task.name.toUpperCase().match(_this2.search.toUpperCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../event-bus.js */ "./assets/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    taskListId: String,
    name: String,
    subtaskID: String
  },
  methods: {
    tagChange: function tagChange(id) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('tagchange', id, this.taskListId);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('progreso');
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('reset');
    },
    subtagChange: function subtagChange(id_subtag) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('subtagchange', this.subtaskID, id_subtag);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('resetSubtask');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./assets/components/user/userNavBar/Board/popover/Popper.vue");
//
//
//
//
//
//
//
//
//
//
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
  props: {
    tagName: String
  },
  components: {
    Popper: _Popper__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Filtro_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../icons/Filtro.vue */ "./assets/components/icons/Filtro.vue");
/* harmony import */ var _icons_Search_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../icons/Search.vue */ "./assets/components/icons/Search.vue");
/* harmony import */ var _icons_Stored_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../icons/Stored.vue */ "./assets/components/icons/Stored.vue");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue-js-popover */ "./node_modules/vue-js-popover/dist/index.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vue_js_popover__WEBPACK_IMPORTED_MODULE_22__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







vue__WEBPACK_IMPORTED_MODULE_23__.default.use((vue_js_popover__WEBPACK_IMPORTED_MODULE_22___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'StoreFile',
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_18__.default,
    Filtro: _icons_Filtro_vue__WEBPACK_IMPORTED_MODULE_19__.default,
    Stored: _icons_Stored_vue__WEBPACK_IMPORTED_MODULE_21__.default,
    Search: _icons_Search_vue__WEBPACK_IMPORTED_MODULE_20__.default
  },
  props: {
    boardName: String,
    boardId: String
  },
  data: function data() {
    return {
      taskstored: [],
      usuarios: [],
      userfilter: [],
      search: '',
      date: '',
      filt: false,
      fecha: false,
      user: false,
      tarea: false
    };
  },
  created: function created() {
    var _this = this;

    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_17__.getTaskStored)(token, this.boardId).then(function (data) {
      return _this.taskstored = data;
    });
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_17__.getAllUsers)(token).then(function (data) {
      return _this.usuarios = data;
    });

    for (items in this.taskstored) {
      if (!userfilter.includes(this.taskstored.id_user_update)) userfilter.push(this.taskstored.id_user_update);
    }
  },
  methods: {
    searchForUsersName: function searchForUsersName(id_user) {
      var _iterator = _createForOfIteratorHelper(this.usuarios),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _items = _step.value;
          if (id_user == _items.id) if (_items.name == null) return _items.email;else return _items.name;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    },
    filterMembers: function filterMembers(id) {
      this.search = id;
    },
    setFilterDate: function setFilterDate() {
      this.fecha = true;
      this.user = false;
    },
    setFilterUser: function setFilterUser() {
      this.fecha = false;
      this.user = true;
    },
    setFilterName: function setFilterName() {
      this.fecha = false;
      this.user = false;
      this.tarea = true;
    },
    setAllfalse: function setAllfalse() {
      this.fecha = false;
      this.user = false;
      this.tarea = false;
    }
  },
  computed: {
    filteredTask: function filteredTask() {
      var _this2 = this;

      return this.taskstored.filter(function (task) {
        if (_this2.fecha) return task.time_limit.match(_this2.search);else if (_this2.user) return task.id_user_update.match(_this2.search);else return task.name.match(_this2.search);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  props: {
    boardName: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_IconBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/IconBase */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _icons_Schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/Schedule */ "./assets/components/icons/Schedule.vue");
/* harmony import */ var vue_time_date_range_picker_dist_vdprDatePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-time-date-range-picker/dist/vdprDatePicker */ "./node_modules/vue-time-date-range-picker/dist/vdprDatePicker.js");
/* harmony import */ var vue_time_date_range_picker_dist_vdprDatePicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_time_date_range_picker_dist_vdprDatePicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../event-bus.js */ "./assets/event-bus.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__.default,
    Schedule: _icons_Schedule__WEBPACK_IMPORTED_MODULE_4__.default,
    IconBase: _icons_IconBase__WEBPACK_IMPORTED_MODULE_2__.default,
    DatePicker: (vue_time_date_range_picker_dist_vdprDatePicker__WEBPACK_IMPORTED_MODULE_5___default()),
    CalendarDialog: vue_time_date_range_picker_dist_vdprDatePicker__WEBPACK_IMPORTED_MODULE_5__.CalendarDialog
  },
  props: {
    date: String,
    dateend: String,
    taskStatus: '',
    id_task: ''
  },
  data: function data() {
    return {
      dateLimitEnd: this.dateend,
      color: '',
      datestart: '',
      datefinal: '',
      today: '',
      finalDate: '',
      days: '',
      outDate: false,
      dates1: [new Date(this.date), new Date(this.dateend)],
      sameDateformat: {
        from: 'DD-MM-YY',
        to: 'DD-MM-YY'
      },
      format: 'DD-MM-YY',
      dateInput: {
        inputClass: 'hidden text-fontColor text-center placeholder-white placeholder-opacity-50 cursor-pointer bg-block-working-primary',
        refName: 'fecha',
        id: 'fecha' + this.id_task
      },
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agost", "Sep", "Oct", "Nov", "Dec"]
    };
  },
  methods: {
    focusDatepicker: function focusDatepicker() {
      document.getElementById("fecha" + this.id_task).click();
    },
    datepicked: function datepicked(date1, date2) {
      var daystart = date1.getDate();
      var monthstart = date1.getMonth() + 1;
      var yearstart = date1.getFullYear();
      this.datestart = yearstart + '-' + monthstart + '-' + daystart;
      var dayend = date2.getDate();
      var monthend = date2.getMonth() + 1;
      var yearend = date2.getFullYear();
      this.datefinal = yearend + '-' + monthend + '-' + dayend;
      _event_bus_js__WEBPACK_IMPORTED_MODULE_6__.EventBus.$emit('datelimit', this.id_task, this.datestart, this.datefinal);
    },
    fetchData: function fetchData() {
      var fecha = new Date(this.dateend);
      this.today = new Date();
      this.finalDate = this.today - fecha;
      if (this.finalDate / (60 * 60 * 24 * 1000) > 0) this.outDate = true;
      this.days = Math.abs(this.finalDate / (60 * 60 * 24 * 1000)).toFixed();
    }
  },
  mounted: function mounted() {
    if (this.taskStatus == '1') {
      this.color = 'bg-block-working-primary';
    } else if (this.taskStatus == '3') {
      this.color = 'bg-block-pending-primary';
    } else {
      this.color = 'bg-block-completed-primary';
    }

    _event_bus_js__WEBPACK_IMPORTED_MODULE_6__.EventBus.$on('changedate', this.fetchData);
    this.fetchData();
  },
  computed: {
    fechaInicioFormateada: function fechaInicioFormateada() {
      var fechaInicio = new Date(this.date);
      var mesformateadoInicio = fechaInicio.getMonth();
      var diaformateadoInicio = fechaInicio.getDate();
      return diaformateadoInicio + '-' + this.monthNames[mesformateadoInicio];
    },
    fechaFinalFormateada: function fechaFinalFormateada() {
      var fechafinal = new Date(this.dateend);
      var mesformateadoFinal = fechafinal.getMonth();
      var diaformateadoFinal = fechafinal.getDate();
      return diaformateadoFinal + '-' + this.monthNames[mesformateadoFinal];
    }
  },
  watch: {
    '$route': 'fetchData'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    items: {
      type: Array,
      required: true
    },
    command: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items: function items() {
      this.selectedIndex = 0;
    }
  },
  methods: {
    onKeyDown: function onKeyDown(_ref) {
      var event = _ref.event;

      if (event.key === 'ArrowUp') {
        this.upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        this.downHandler();
        return true;
      }

      if (event.key === 'Enter') {
        this.enterHandler();
        return true;
      }

      return false;
    },
    upHandler: function upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler: function downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler: function enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem: function selectItem(index) {
      var item = this.items[index];
      console.log(this.items[index]);

      if (item) {
        this.command({
          id: item
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../event-bus.js */ "./assets/event-bus.js");
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Trash_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icons/Trash.vue */ "./assets/components/icons/Trash.vue");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var vue_mention__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-mention */ "./node_modules/vue-mention/dist/vue-mention.esm.js");
/* harmony import */ var _TipTap_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TipTap.vue */ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue");
/* harmony import */ var vue_at__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-at */ "./node_modules/vue-at/dist/vue-at.js");
/* harmony import */ var vue_at__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_at__WEBPACK_IMPORTED_MODULE_11__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var uss = [{
  value: 'akryum',
  firstName: 'Guillaume'
}, {
  value: 'posva',
  firstName: 'Eduardo'
}, {
  value: 'atinux',
  firstName: 'Sébastien'
}];
var issues = [{
  value: 123,
  label: 'Error with foo bar',
  searchText: 'foo bar'
}, {
  value: 42,
  label: 'Cannot read line',
  searchText: 'foo bar line'
}, {
  value: 77,
  label: 'I have a feature suggestion',
  searchText: 'feature'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: String,
    name: String,
    task: Boolean,
    opentab: Boolean,
    message: Array,
    users: Array,
    mentionList: Array
  },
  data: function data() {
    return {
      text: '',
      open: true,
      openTab: 1,
      textContent: '',
      customToolbar: [[{
        header: [!1, 1, 2, 3, 4, 5, 6]
      }], ["bold", "italic", "underline", "strike"], [{
        align: ""
      }, {
        align: "center"
      }, {
        align: "right"
      }, {
        align: "justify"
      }], ["blockquote", "code-block"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }, {
        list: "check"
      }], [{
        indent: "-1"
      }, {
        indent: "+1"
      }], [{
        color: []
      }, {
        background: []
      }], ["image", "video"], ["clean"]],
      items: []
    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_7__.VueEditor,
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    Trash: _icons_Trash_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    Mentionable: vue_mention__WEBPACK_IMPORTED_MODULE_9__.Mentionable,
    At: (vue_at__WEBPACK_IMPORTED_MODULE_11___default()),
    Tiptap: _TipTap_vue__WEBPACK_IMPORTED_MODULE_10__.default
  },
  methods: {
    toggleTabs: function toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    submitMessage: function submitMessage(content, id) {
      if (this.task) _event_bus_js__WEBPACK_IMPORTED_MODULE_4__.EventBus.$emit('submitmessage', content, id);else _event_bus_js__WEBPACK_IMPORTED_MODULE_4__.EventBus.$emit('submitmessagesubtask', content, id);
      this.textContent = '';
    },
    closeSlidePanel: function closeSlidePanel() {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_4__.EventBus.$emit('closeslidepanel');
    },
    deleteMsg: function deleteMsg(id_message, id_task) {
      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_8__.deleteMessage)(token, id_message));
      });
      promise.then(function (response) {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_4__.EventBus.$emit('deletemessage');
      });
    },
    custom: function custom(text) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      this.textContent = text.replace(urlRegex, function (url) {
        return '<a href="' + url + '"  style="color:blue;" >' + url + '</a>';
      });
      var mentionRegex = /\B@[a-z]*[^\s]/g;

      if (mentionRegex.test(text)) {
        console.log('true');
        var ctl = document.getElementsByTagName('input');
        var startPos = ctl.selectionStart;
        var endPos = ctl.selectionEnd;
        console.log(startPos + ", " + endPos);
        this.$modal.show('mention' + this.id);
      }
    },
    onOpen: function onOpen(key) {
      this.items = key === '@' ? uss : issues;
    },
    method: function method() {
      console.log('@');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../event-bus */ "./assets/event-bus.js");
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Play_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../icons/Play.vue */ "./assets/components/icons/Play.vue");
/* harmony import */ var _icons_Add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../icons/Add */ "./assets/components/icons/Add.vue");
/* harmony import */ var _icons_Editar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../icons/Editar */ "./assets/components/icons/Editar.vue");
/* harmony import */ var _icons_Trash_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../icons/Trash.vue */ "./assets/components/icons/Trash.vue");
/* harmony import */ var _icons_Message_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../icons/Message.vue */ "./assets/components/icons/Message.vue");
/* harmony import */ var _icons_Pause_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../icons/Pause.vue */ "./assets/components/icons/Pause.vue");
/* harmony import */ var _subitems_DatePicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../subitems/DatePicker */ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue");
/* harmony import */ var _popover_Popper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../popover/Popper */ "./assets/components/user/userNavBar/Board/popover/Popper.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _popover_Tag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../popover/Tag */ "./assets/components/user/userNavBar/Board/popover/Tag.vue");
/* harmony import */ var _SlidePanel_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SlidePanel.vue */ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_15__.default,
    Play: _icons_Play_vue__WEBPACK_IMPORTED_MODULE_16__.default,
    Pause: _icons_Pause_vue__WEBPACK_IMPORTED_MODULE_21__.default,
    DatePicker: _subitems_DatePicker__WEBPACK_IMPORTED_MODULE_22__.default,
    Popper: _popover_Popper__WEBPACK_IMPORTED_MODULE_23__.default,
    Tag: _popover_Tag__WEBPACK_IMPORTED_MODULE_25__.default,
    Trash: _icons_Trash_vue__WEBPACK_IMPORTED_MODULE_19__.default,
    Add: _icons_Add__WEBPACK_IMPORTED_MODULE_17__.default,
    Message: _icons_Message_vue__WEBPACK_IMPORTED_MODULE_20__.default,
    SlidePanel: _SlidePanel_vue__WEBPACK_IMPORTED_MODULE_26__.default,
    Edit: _icons_Editar__WEBPACK_IMPORTED_MODULE_18__.default
  },
  props: {
    subtask: Object,
    color: String,
    colorSecondary: String,
    items: Object,
    teamid: String
  },
  data: function data() {
    return {
      subtagsList: [],
      responsable: [],
      usuarios: [],
      messages: [],
      setID: '',
      show: false,
      tiempo: null,
      addUser: false,
      opentab: false,
      horas: 0,
      minutos: 0
    };
  },
  mounted: function mounted() {
    _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$on('resetSubtask', this.reset);
    _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$on('updatemessagesubtask', this.fetchData);
  },
  watch: {
    '$route': 'fetchData',
    subtask: function subtask() {
      var _this = this;

      if (this.subtask.pause == 0) setInterval(function () {
        _this.time();
      }, 1000);else this.time();
    }
  },
  created: function created() {
    var _this2 = this;

    this.fetchData();
    if (this.subtask.pause == 0) var parar = setInterval(function () {
      _this2.time();
    }, 1000);else {
      this.time();
      clearInterval(parar);
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _this3 = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_24__.getAllSubTags)(token).then(function (data) {
        return _this3.subtagsList = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_24__.getUserTeams)(token, this.teamid).then(function (data) {
        return _this3.responsable = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_24__.getAllUsers)(token).then(function (data) {
        return _this3.usuarios = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_24__.getSubtaskMessage)(token, this.subtask.id).then(function (data) {
        _this3.messages = data;
      });
    },
    play: function play(ID) {
      _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$emit('playSubtask', ID);
    },
    showmodal: function showmodal() {
      this.$modal.show('deletesubTask' + this.subtask.id);
    },
    deletesubTask: function deletesubTask() {
      _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$emit('deletesubtask', this.subtask.id);
      this.hide();
    },
    editName: function editName(id_task) {
      var _this4 = this;

      var valor = document.getElementById('name' + this.subtask.id);
      var text = valor.textContent;
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('name', text);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_24__.postEditNameSubtask)(formData, id_task));
      });
      promise.then(function (response) {
        _this4.fetchData();

        _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$emit('editname');
      });
    },
    hide: function hide() {
      this.$modal.hide('deletesubTask');
    },
    toggle: function toggle(ID, name) {
      _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$emit('slidesubtask', ID, name);
    },
    reset: function reset() {
      this.setID = '';
    },
    checkImg: function checkImg(id_user) {
      try {
        __webpack_require__("./assets/media/users sync recursive ^\\.\\/.*\\.png$")("./".concat(id_user, ".png"));

        return true;
      } catch (e) {
        return false;
      }
    },
    addManager: function addManager(ID, id_task) {
      _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$emit('addmanagersubtask', ID, id_task);
    },
    time: function time() {
      if (this.subtask.pause == 0) {
        var date = new Date();
        var last_play = new Date(this.subtask.last_play);
        var timezone = Math.abs(date.getTimezoneOffset() / 60);
        last_play.setHours(last_play.getHours() + timezone);
        var diffDate = date - last_play;
        var timeWorking = this.subtask.time_working * 1000; //milisegundos

        var _final = diffDate + timeWorking;

        this.tiempo = this.secondsToString(_final);
      } else {
        var milisegundos = this.subtask.time_working * 1000;
        var segundos = Math.floor(milisegundos / 1000 % 60);
        segundos = segundos < 10 ? '0' + segundos : segundos;
        var minute = Math.floor(milisegundos / (1000 * 60) % 60);
        minute = minute < 10 ? '0' + minute : minute;
        var hour = Math.floor(milisegundos / (1000 * 60 * 60)) % 24;
        hour = hour < 10 ? '0' + hour : hour;
        this.tiempo = hour + ':' + minute + ':' + segundos;
      }
    },
    secondsToString: function secondsToString(milisegundos) {
      var segundos = Math.floor(milisegundos / 1000 % 60);
      segundos = segundos < 10 ? '0' + segundos : segundos;
      var minute = Math.floor(milisegundos / (1000 * 60) % 60);
      minute = minute < 10 ? '0' + minute : minute;
      var hour = Math.floor(milisegundos / (1000 * 60 * 60)) % 24;
      hour = hour < 10 ? '0' + hour : hour;
      return hour + ':' + minute + ':' + segundos;
    },
    searchForManager: function searchForManager(id_user) {
      for (var items in this.subtask.users) {
        if (id_user == this.subtask.users[items].id_user) return true;
      }

      return false;
    },
    searchForUsersName: function searchForUsersName(id_user) {
      var _iterator = _createForOfIteratorHelper(this.usuarios),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var items = _step.value;
          if (id_user == items.id) if (items.name == null) return items.email;else return items.name;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    },
    setTime: function setTime() {
      var hours = this.horas * 3600;
      var minuts = this.minutos * 60;
      var totaltime = hours + minuts;
      _event_bus__WEBPACK_IMPORTED_MODULE_14__.EventBus.$emit('settimesubtask', totaltime, this.subtask.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-document */ "./node_modules/@tiptap/extension-document/dist/tiptap-extension-document.esm.js");
/* harmony import */ var _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-paragraph */ "./node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js");
/* harmony import */ var _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-text */ "./node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js");
/* harmony import */ var _tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tiptap/extension-mention */ "./node_modules/@tiptap/extension-mention/dist/tiptap-extension-mention.esm.js");
/* harmony import */ var _MentionList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MentionList */ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue");
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tiptap/starter-kit */ "./node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js");
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tiptap/extension-heading */ "./node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js");
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tiptap/extension-bullet-list */ "./node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "./node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js");
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tiptap/extension-list-item */ "./node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js");
/* harmony import */ var _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tiptap/extension-image */ "./node_modules/@tiptap/extension-image/dist/tiptap-extension-image.esm.js");
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tiptap/extension-link */ "./node_modules/@tiptap/extension-link/dist/tiptap-extension-link.esm.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    EditorContent: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__.EditorContent
  },
  props: {
    mentionList: Array,
    value: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      editor: null
    };
  },
  methods: {
    browse: function browse() {
      this.$refs.file.click();
    },
    addImage: function addImage(e) {
      var _this = this;

      this.file = e.target.files[0];
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('image', this.file);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_5__.postFilesUpload)(formData));
      });
      promise.then(function (response) {
        console.log(response);
        var name = response;
        var url = '/assets/files/' + name;
        if (url) _this.editor.chain().focus().setImage({
          src: url
        }).run();
      });
    },
    setLink: function setLink() {
      var url = window.prompt('URL');
      this.editor.chain().focus().extendMarkRange('link').setLink({
        href: url
      }).run();
    }
  },
  watch: {
    value: function value(_value) {
      // HTML
      var isSame = this.editor.getHTML() === _value; // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()


      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.value, false);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.editor = new _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__.Editor({
      extensions: [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_12__.default, _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_14__.default, _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_16__.default, _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_7__.default, _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_8__.default, _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_9__.default, _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_15__.default, _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_17__.default, _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_18__.default, _tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_10__.default.configure({
        HTMLAttributes: {
          "class": 'mention text-blue-700 bg-blue-700 bg-opacity-25 rounded-t'
        },
        suggestion: {
          decorationTag: 'h1',
          items: function items(query) {
            return _this2.mentionList.filter(function (item) {
              return item.toLowerCase().startsWith(query.toLowerCase());
            }).slice(0, 5);
          },
          render: function render() {
            var component;
            var popup;
            return {
              onStart: function onStart(props) {
                component = new _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__.VueRenderer(_MentionList__WEBPACK_IMPORTED_MODULE_11__.default, {
                  parent: _this2,
                  propsData: props
                });
                popup = (0,tippy_js__WEBPACK_IMPORTED_MODULE_19__.default)('body', {
                  getReferenceClientRect: props.clientRect,
                  appendTo: function appendTo() {
                    return document.body;
                  },
                  content: component.element,
                  showOnCreate: true,
                  interactive: true,
                  trigger: 'manual',
                  placement: 'bottom-start'
                });
              },
              onUpdate: function onUpdate(props) {
                component.updateProps(props);
                popup[0].setProps({
                  getReferenceClientRect: props.clientRect
                });
              },
              onKeyDown: function onKeyDown(props) {
                var _component$ref;

                return (_component$ref = component.ref) === null || _component$ref === void 0 ? void 0 : _component$ref.onKeyDown(props);
              },
              onExit: function onExit() {
                popup[0].destroy();
                component.destroy();
              }
            };
          }
        }
      })],
      content: this.value,
      onUpdate: function onUpdate() {
        _this2.$emit('input', _this2.editor.getHTML());
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Department.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Department.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    departmentName: String,
    departmentID: String
  },
  data: function data() {
    return {
      teams: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllTeamsFromDepartment)(token, this.departmentID).then(function (data) {
      return _this.teams = data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../event-bus */ "./assets/event-bus.js");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    departmentName: String,
    departmentID: String,
    teamName: String,
    teamID: String
  },
  data: function data() {
    return {
      title: '',
      message: '',
      email: '',
      file: ''
    };
  },
  methods: {
    fakeClick: function fakeClick() {
      this.realClick();
    },
    realClick: function realClick() {
      document.getElementById('realclick').click();
    },
    fileIncident: function fileIncident(event) {
      this.file = event.target.files[0];
    },
    createIncident: function createIncident() {
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('title', this.title);
      formData.append('image', this.file);
      formData.append('message', this.message);
      formData.append('token', token);
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_1__.postIncident)(formData, this.teamID);
      _event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('route');
      this.$router.push('/board/' + this.teamID + '/' + this.teamName);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
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
  props: {
    id: String,
    teamName: String,
    departmentName: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Incidencias.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Incidencias.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _Department_InformationText_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Department/InformationText.vue */ "./assets/components/user/userNavBar/Department/InformationText.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    InformationText: _Department_InformationText_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    departmentID: String,
    departmentName: String
  },
  data: function data() {
    return {
      teamsDepartment: [],
      name: "",
      departmentname: ""
    };
  },
  methods: {
    createDepartment: function createDepartment() {
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('name', this.departmentname);
      formData.append('token', token);
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.postDepartment)(formData);
    }
  },
  mounted: function mounted() {
    var _this = this;

    //GET USER
    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllTeamsFromDepartment)(token, this.departmentID).then(function (data) {
      return _this.teamsDepartment = data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/InformationProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/InformationProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    id: String
  },
  data: function data() {
    return {
      users: [],
      departments: [],
      teams: []
    };
  },
  methods: {},
  created: function created() {
    var _this = this;

    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)(token).then(function (data) {
      return _this.users = data;
    });
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getUserDepartments)(token, this.id).then(function (data) {
      return _this.departments = data;
    });
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllTeamsFromUser)(token, this.id).then(function (data) {
      return _this.teams = data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    content: String,
    id: String
  },
  data: function data() {
    return {
      userInfo: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    //GET USER departments
    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getUserToken)(token).then(function (data) {
      _this.userInfo = data;
    });
  },
  methods: {
    onUpdate: function onUpdate() {
      var valor = document.getElementById(this.id);
      var text = valor.textContent;
      var formData = new FormData();
      formData.append(this.id, text);
      formData.append('token', localStorage.getItem('validation_token'));
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.changeProfile)(formData, this.userInfo.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserBoard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserBoard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-js-popover */ "./node_modules/vue-js-popover/dist/index.js");
/* harmony import */ var vue_js_popover__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_js_popover__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../event-bus.js */ "./assets/event-bus.js");
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_IconAddUser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../icons/IconAddUser */ "./assets/components/icons/IconAddUser.vue");
/* harmony import */ var _icons_FilterPerson__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../icons/FilterPerson */ "./assets/components/icons/FilterPerson.vue");
/* harmony import */ var _icons_Search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../icons/Search */ "./assets/components/icons/Search.vue");
/* harmony import */ var _icons_Settings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../icons/Settings */ "./assets/components/icons/Settings.vue");
/* harmony import */ var _icons_Add__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../icons/Add */ "./assets/components/icons/Add.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _Board_TaskStatus_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Board/TaskStatus.vue */ "./assets/components/user/userNavBar/Board/TaskStatus.vue");
/* harmony import */ var _Board_subitems_SlidePanel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Board/subitems/SlidePanel */ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue");
/* harmony import */ var _Board_subitems_DatePicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Board/subitems/DatePicker */ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue");
/* harmony import */ var _Board_subitems_BoardName_vue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Board/subitems/BoardName.vue */ "./assets/components/user/userNavBar/Board/subitems/BoardName.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../servicies/userServicies */ "./assets/servicies/userServicies.js");

















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















vue__WEBPACK_IMPORTED_MODULE_30__.default.use((vue_js_popover__WEBPACK_IMPORTED_MODULE_16___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_18__.default,
    IconAddUser: _icons_IconAddUser__WEBPACK_IMPORTED_MODULE_19__.default,
    Settings: _icons_Settings__WEBPACK_IMPORTED_MODULE_22__.default,
    Search: _icons_Search__WEBPACK_IMPORTED_MODULE_21__.default,
    Draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_24___default()),
    Add: _icons_Add__WEBPACK_IMPORTED_MODULE_23__.default,
    TaskStatus: _Board_TaskStatus_vue__WEBPACK_IMPORTED_MODULE_25__.default,
    SlidePanel: _Board_subitems_SlidePanel__WEBPACK_IMPORTED_MODULE_26__.default,
    DatePicker: _Board_subitems_DatePicker__WEBPACK_IMPORTED_MODULE_27__.default,
    FilterPerson: _icons_FilterPerson__WEBPACK_IMPORTED_MODULE_20__.default,
    BoardName: _Board_subitems_BoardName_vue__WEBPACK_IMPORTED_MODULE_28__.default
  },
  props: {
    boardName: String,
    boardTeamID: String
  },
  data: function data() {
    return {
      userInfo: [],
      responsable: [],
      email: "",
      name: this.boardTeamID,
      users: [],
      taskList: [],
      taskListCompleted: [],
      taskListWorking: [],
      taskListPending: [],
      mentionList: [],
      tagsList: {},
      open: false,
      state: 'collapse',
      dismissedState: 'dismissedState',
      search: '',
      overlay: '',
      showNotifications: false
    };
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.overlay = '';
      var token = localStorage.getItem('validation_token'); //obtenemos todas las tareas del equipo y le asignamos a un array dependiendo de su estado

      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.getAllTaskFromTeam)(token, this.boardTeamID).then(function (tasks) {
        var taskListCompleted = [];
        var taskListWorking = [];
        var taskListPending = [];

        var _iterator = _createForOfIteratorHelper(tasks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var task = _step.value;
            if (task.id_status == "1") taskListWorking.push(task);else if (task.id_status == "3") taskListPending.push(task);else taskListCompleted.push(task);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this.taskListWorking = taskListWorking;
        _this.taskListPending = taskListPending;
        _this.taskListCompleted = taskListCompleted;
        _this.overlay = 'hidden';
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.getUserTeams)(token, this.boardTeamID).then(function (data) {
        return _this.responsable = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.getUserToken)(token).then(function (data) {
        return _this.userInfo = data;
      });
      this.mentionList = [];
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.getAllUsers)(token).then(function (data) {
        _this.users = data;

        _this.users.forEach(function (element) {
          _this.mentionList.push(element.email.split('@')[0]);
        });
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.getAllTags)(token).then(function (data) {
        return _this.tagsList = data;
      });
    },
    createUserTeam: function createUserTeam(id_user) {
      var _this2 = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('id_user', id_user);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.createUserInTeam)(formData, _this2.boardTeamID));
      });
      promise.then(function (response) {
        _this2.fetchData();
      });
    },
    createTask: function createTask(content, taskStatus) {
      var _this3 = this;

      var formData = new FormData();
      formData.append('name', content);
      formData.append('status', taskStatus);
      formData.append('token', localStorage.getItem('validation_token'));
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postTaskToTeam)(formData, _this3.boardTeamID));
      });
      promise.then(function (response) {
        _this3.fetchData();
      });
    },
    createSubtask: function createSubtask(content, id_task) {
      var _this4 = this;

      if (content != '') {
        var formData = new FormData();
        formData.append('name', content);
        formData.append('token', localStorage.getItem('validation_token'));
        var promise = new Promise(function (resolve, reject) {
          resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postSubTask)(formData, id_task));
        });
        promise.then(function (response) {
          _this4.fetchData();
        });
      }
    },
    tagIdChange: function tagIdChange(id_tag, ID) {
      var _this5 = this;

      var formData = new FormData();
      formData.append('id_tag', id_tag);
      formData.append('token', localStorage.getItem('validation_token'));
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.putChangeTags)(formData, ID));
      });
      promise.then(function (response) {
        _this5.fetchData();
      });
    },
    subtagIdChange: function subtagIdChange(ID_subtask, id_subtag) {
      var _this6 = this;

      var formData = new FormData();
      formData.append('id_subtag', id_subtag);
      formData.append('token', localStorage.getItem('validation_token'));
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.ChangeSubTags)(formData, ID_subtask));
      });
      promise.then(function (response) {
        _this6.fetchData();
      });
    },
    tagStatusChange: function tagStatusChange(id_status, ID) {
      var _this7 = this;

      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.putChangeStatusTask)(id_status, token, ID));
      });
      promise.then(function (response) {
        _this7.fetchData();
      });
    },
    deleteTask: function deleteTask(id_task) {
      var _this8 = this;

      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.deleteTask)(token, id_task));
      });
      promise.then(function (response) {
        _this8.$vToastify.success("tareas eliminada con exito");

        _this8.fetchData();
      });
    },
    storeTask: function storeTask(id_task) {
      var _this9 = this;

      var formData = new FormData();
      formData.append('token', localStorage.getItem('validation_token'));
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postStoreTask)(formData, id_task));
      });
      promise.then(function (response) {
        _this9.fetchData();
      });
    },
    deleteSubtask: function deleteSubtask(id_subtask) {
      var _this10 = this;

      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.deleteSubTask)(token, id_subtask));
      });
      promise.then(function (response) {
        _this10.$vToastify.success("subtarea eliminada con exito");

        _this10.fetchData();
      });
    },
    addManager: function addManager(user_id, task_id) {
      var _this11 = this;

      var formData = new FormData();
      formData.append('id_user', user_id);
      formData.append('token', localStorage.getItem('validation_token'));
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postAddUserToTask)(formData, task_id));
      });
      promise.then(function (response) {
        _this11.$vToastify.success("Responsable añadido con éxito a la tarea");

        _this11.fetchData();
      });
    },
    addManagerSubtask: function addManagerSubtask(user_id, task_id) {
      var _this12 = this;

      var formData = new FormData();
      formData.append('id_user', user_id);
      formData.append('token', localStorage.getItem('validation_token'));
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postAddUserToSubTask)(formData, task_id));
      });
      promise.then(function (response) {
        _this12.$vToastify.success("Responsable añadido con éxito a la subtarea");

        _this12.fetchData();
      });
    },
    dateLimit: function dateLimit(id_task, dateSelected, dateend) {
      var _this13 = this;

      var formData = new FormData();
      var token = localStorage.getItem('validation_token');
      formData.append('time_limit', dateSelected);
      formData.append('time_limit_end', dateend);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.setDate)(formData, id_task));
      });
      promise.then(function (response) {
        _this13.fetchData();
      });
    },
    dateLimitSubtask: function dateLimitSubtask(id_task, dateSelected) {
      var _this14 = this;

      var formData = new FormData();
      var token = localStorage.getItem('validation_token');
      formData.append('time_limit', dateSelected);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.setDate)(formData, id_task));
      });
      promise.then(function (response) {
        _this14.fetchData();
      });
    },
    play: function play(ID) {
      var _this15 = this;

      var formData = new FormData();
      var token = localStorage.getItem('validation_token');
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postTime)(formData, ID));
      });
      promise.then(function (response) {
        _this15.fetchData();
      });
    },
    playSubtask: function playSubtask(ID) {
      var _this16 = this;

      var formData = new FormData();
      var token = localStorage.getItem('validation_token');
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postTimeSubtask)(formData, ID));
      });
      promise.then(function (response) {
        _this16.fetchData();
      });
    },
    submitMessage: function submitMessage(content, id) {
      var _this17 = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('message', content);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postMessage)(formData, id));
      });
      promise.then(function (response) {
        _this17.fetchData();

        _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$emit('updatemessage');
      });
    },
    submitMessageSubtask: function submitMessageSubtask(content, id) {
      var _this18 = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('message', content);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postSubtaskMessage)(formData, id));
      });
      promise.then(function (response) {
        _this18.fetchData();

        _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$emit('updatemessagesubtask');
      });
    },
    setTime: function setTime(totaltime, id_task) {
      var _this19 = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('time_working', totaltime);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.setTime)(formData, id_task));
      });
      promise.then(function (response) {
        _this19.fetchData();
      });
    },
    setTimeSubtask: function setTimeSubtask(totaltime, id_subtask) {
      var _this20 = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('time_working', totaltime);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.setTimeSubtask)(formData, id_subtask));
      });
      promise.then(function (response) {
        _this20.fetchData();
      });
    },
    typeStatus: function typeStatus(type) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$emit('type', type);
    },
    updateFiles: function updateFiles(file, ID) {
      var _this21 = this;

      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('image', file);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.postFilesTask)(formData, ID));
      });
      promise.then(function (response) {
        _this21.fetchData();
      });
    },
    deleteFile: function deleteFile(file) {
      var _this22 = this;

      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.deleteFiles)(token, file));
      });
      promise.then(function (response) {
        _this22.fetchData();
      });
    },
    deleteManager: function deleteManager(user_id, task_id) {
      var _this23 = this;

      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.deleteManager)(token, task_id, user_id));
      });
      promise.then(function (response) {
        _this23.fetchData();
      });
    },
    changeStatusDragg: function changeStatusDragg(id_status, id_task) {
      var _this24 = this;

      var token = localStorage.getItem('validation_token');
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_29__.putChangeStatusTask)(id_status, token, id_task));
      });
      promise.then(function (response) {
        _this24.fetchData();
      });
    },
    filterMember: function filterMember(id_user) {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$emit('managerfilter', id_user);
    },
    searchUserinTeam: function searchUserinTeam(id_user) {
      var _iterator2 = _createForOfIteratorHelper(this.responsable),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var items = _step2.value;
          if (id_user == items.id_user) return true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    },
    focusSearch: function focusSearch() {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$emit('focussearch');
    }
  },
  created: function created() {
    this.fetchData();
  },
  mounted: function mounted() {
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('changes', this.tagStatusChange);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('update', this.createTask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('delete', this.deleteTask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('store', this.storeTask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('deletesubtask', this.deleteSubtask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('tagchange', this.tagIdChange);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('datelimit', this.dateLimit);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('subtagchange', this.subtagIdChange);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('subtask', this.createSubtask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('status', this.tagStatusChange);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('play', this.play);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('playSubtask', this.playSubtask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('updateFiles', this.updateFiles);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('deleteFile', this.deleteFile);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('addmanager', this.addManager);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('addmanagersubtask', this.addManagerSubtask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('deletemanager', this.deleteManager);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('changeStatus', this.changeStatusDragg);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('submitmessage', this.submitMessage);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('submitmessagesubtask', this.submitMessageSubtask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('editname', this.fetchData);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('settime', this.setTime);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('settimesubtask', this.setTimeSubtask);
    _event_bus_js__WEBPACK_IMPORTED_MODULE_17__.EventBus.$on('router', this.fetchData);
  },
  watch: {
    '$route': 'fetchData'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserDepartment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserDepartment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      userDepartmentInfo: [],
      teamsDepartment: [],
      userInfo: [],
      name: "",
      departmentname: ""
    };
  },
  methods: {
    createDepartment: function createDepartment() {
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('name', this.departmentname);
      formData.append('token', token);
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.postDepartment)(formData);
    }
  },
  created: function created() {
    var _this = this;

    //GET USER
    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getUserToken)(token).then(function (data) {
      _this.userInfo = data;
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getUserDepartments)(token, _this.userInfo.id).then(function (data) {
        _this.userDepartmentInfo = data;
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllTeamsFromDepartment)(token, _this.userDepartmentInfo[0].id).then(function (data) {
          return _this.teamsDepartment = data;
        });
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/IconBase.vue */ "./assets/components/icons/IconBase.vue");
/* harmony import */ var _icons_Editar_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/Editar.vue */ "./assets/components/icons/Editar.vue");
/* harmony import */ var _Profile_Editable_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile/Editable.vue */ "./assets/components/user/userNavBar/Profile/Editable.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _InformationProfile_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InformationProfile.vue */ "./assets/components/user/userNavBar/InformationProfile.vue");
/* harmony import */ var _AvatarInpute_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AvatarInpute.vue */ "./assets/components/user/userNavBar/AvatarInpute.vue");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../event-bus */ "./assets/event-bus.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    IconBase: _icons_IconBase_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    Editar: _icons_Editar_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    Editable: _Profile_Editable_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    InformationProfile: _InformationProfile_vue__WEBPACK_IMPORTED_MODULE_10__.default,
    AvatarInpute: _AvatarInpute_vue__WEBPACK_IMPORTED_MODULE_11__.default
  },
  props: {
    idUser: String
  },
  data: function data() {
    return {
      userInfo: [],
      departments: [],
      teams: [],
      allusers: [],
      horario: "",
      selectedFile: null,
      passwordChange: false,
      currentPassword: "",
      newPassword: "",
      newRepeatedPassword: "",
      readytosend: false,
      exist: false,
      componentKey: 0,
      random: '',
      avatar: null,
      src: ''
    };
  },
  created: function created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getUserToken)(token).then(function (data) {
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
          return _this.departments = data;
        });
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getAllTeamsFromUser)(token, _this.userInfo.id).then(function (data) {
          return _this.teams = data;
        });
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getAllUsers)(token).then(function (data) {
        return _this.allusers = data;
      });

      if (this.userInfo.id) {
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getImages)('users', this.userInfo.id).then(function (blob) {
          _this.src = URL.createObjectURL(blob);
        });
      } else {
        (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.getImages)('users', this.idUser).then(function (blob) {
          _this.src = URL.createObjectURL(blob);
        });
      }
    },
    update: function update(event) {
      var _this2 = this;

      this.selectedFile = event.target.files[0];
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('token', token);
      var promise = new Promise(function (resolve, reject) {
        resolve((0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.changeProfile)(formData, _this2.userInfo.id));
      });
      promise.then(function (response) {
        _this2.fetchData();
      });
    },
    onFileSelected: function onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    repeatedPasswordReceived: function repeatedPasswordReceived() {
      if (this.newPassword === this.newRepeatedPassword) {
        this.readytosend = true;
      } else {
        this.readytosend = false;
      }
    },
    checkpassword: function checkpassword() {
      console.log('checkeando');
    },
    changePassword: function changePassword() {
      var token = localStorage.getItem('validation_token');
      var formData = new FormData();
      formData.append('password', this.newPassword);
      formData.append('token', token);
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_9__.changeProfile)(formData, this.userInfo.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      userDepartmentInfo: [],
      departments: [],
      userInfo: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    //GET USER
    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getUserToken)(token).then(function (data) {
      _this.userInfo = data;
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getUserDepartments)(token, _this.userInfo.id).then(function (data) {
        return _this.userDepartmentInfo = data;
      });
    });
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllDepartments)(token).then(function (data) {
      return _this.departments = data;
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs_TabComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/TabComponent.vue */ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue");
/* harmony import */ var _tabs_TabsComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/TabsComponent.vue */ "./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
//
//
//
//
//
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
  components: {
    TabComponent: _tabs_TabComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    TabsComponent: _tabs_TabsComponent_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    departmentName: String,
    departmentID: String
  },
  data: function data() {
    return {
      teams: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem('validation_token');
    (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_2__.getAllTeamsFromDepartment)(token, this.departmentID).then(function (data) {
      return _this.teams = data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    usersName: String,
    id: String
  },
  data: function data() {
    return {
      exist: false
    };
  },
  created: function created() {
    var _this = this;

    fetch("/assets/images/users/" + this.id).then(function (response) {
      if (response.ok) {
        _this.exist = true;
      } else {
        _this.exist = false;
      }
    })["catch"](function (error) {
      _this.exist = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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


//
//
//
//
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
  name: "MembersList",
  props: {
    userName: String,
    userSurname: String,
    userID: String
  },
  data: function data() {
    return {
      exist: false
    };
  },
  created: function created() {
    var _this = this;

    fetch("/assets/images/users/" + this.userID).then(function (response) {
      if (response.ok) {
        _this.exist = true;
      } else {
        _this.exist = false;
      }
    })["catch"](function (error) {
      _this.exist = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");
/* harmony import */ var _MembersChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersChart.vue */ "./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      teams: [],
      users: [],
      organization: [],
      department: [],
      team: [],
      user: []
    };
  },
  components: {
    MembersChart: _MembersChart_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    id_team: String
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)(token).then(function (data) {
        return _this.users = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_0__.getOrganization)(token, this.id_team).then(function (data) {
        _this.department = data.department;
        _this.team = data.team;
        _this.user = data.users;
      });
    }
  },
  created: function created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    tabName: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _MembersList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MembersList.vue */ "./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue");
/* harmony import */ var _Organization_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Organization.vue */ "./assets/components/user/userNavBar/Welcome/tabs/Organization.vue");
/* harmony import */ var _TabComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabComponent */ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue");
/* harmony import */ var _TeamsList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeamsList.vue */ "./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue");
/* harmony import */ var _servicies_userServicies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../servicies/userServicies */ "./assets/servicies/userServicies.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "blue-tabs",
  components: {
    TabComponent: _TabComponent__WEBPACK_IMPORTED_MODULE_4__.default,
    MembersList: _MembersList_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    TeamsList: _TeamsList_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    Organization: _Organization_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  props: {
    departmentID: String,
    departmentName: String
  },
  data: function data() {
    return {
      openTab: 1,
      teams: [],
      users: [],
      organization: [],
      usersDepartments: [],
      idUser: "",
      email: "",
      team: ""
    };
  },
  methods: {
    toggleTabs: function toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    exist: function exist(ID) {},
    addUserToDepartment: function addUserToDepartment() {
      var _this = this;

      var token = localStorage.getItem('validation_token');

      for (var user in this.users) {
        if (this.email == this.users[user].email) {
          this.idUser = this.users[user].id;
          break;
        }
      }

      var formData = new FormData();
      formData.append('id_user', this.idUser);
      formData.append('token', token);
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_6__.postUserToDepartment)(formData, this.departmentID)["catch"](function (error) {
        _this.errorMessage = error;
        console.error('There was an error!', error);
      });
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this2 = this;

      var token = localStorage.getItem('validation_token');
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_6__.getAllUsers)(token).then(function (data) {
        return _this2.users = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_6__.getAllTeamsFromDepartment)(token, this.departmentID).then(function (data) {
        return _this2.teams = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_6__.getAllUsersFromDepartment)(token, this.departmentID).then(function (data) {
        return _this2.usersDepartments = data;
      });
      (0,_servicies_userServicies__WEBPACK_IMPORTED_MODULE_6__.getOrganization)(token, this.departmentID).then(function (data) {
        _this2.organization = data;
        fetch("/assets/images/users/" + _this2.organization.team.id).then(function (response) {
          if (response.ok) {
            console.log('entra');
            _this2.exist = true;
          } else {
            _this2.exist = false;
          }
        })["catch"](function (error) {
          _this2.exist = false;
        });
      });
    }
  },
  created: function created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TeamsList",
  props: {
    teamName: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App"
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/components/Redirect.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./assets/components/Redirect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Redirect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Redirect.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/icons/IconBase.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/components/icons/IconBase.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconBase.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/login/PasswordChange.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./assets/components/login/PasswordChange.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordChange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordChange.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/login/PasswordReset.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./assets/components/login/PasswordReset.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordReset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordReset.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInpute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvatarInpute.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInpute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BoardName.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MentionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MentionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MentionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SlidePanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubtaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubtaskList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubtaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TipTap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TipTap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TipTap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Department/Department.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/Department.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Department.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incidents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformationText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Incidencias.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Incidencias.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incidencias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Incidencias.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/InformationProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/InformationProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformationProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/InformationProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Editable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/UserBoard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserBoard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserBoard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/UserDepartment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserDepartment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDepartment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserDepartment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/UserProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WelcomeTeams.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MembersChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MembersList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Organization.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TeamsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/views/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./assets/views/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MentionList_vue_vue_type_style_index_0_id_66a76e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TipTap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TipTap.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/components/Redirect.vue?vue&type=template&id=401761d7&":
/*!***********************************************************************!*\
  !*** ./assets/components/Redirect.vue?vue&type=template&id=401761d7& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirect_vue_vue_type_template_id_401761d7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirect_vue_vue_type_template_id_401761d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirect_vue_vue_type_template_id_401761d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Redirect.vue?vue&type=template&id=401761d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Redirect.vue?vue&type=template&id=401761d7&");


/***/ }),

/***/ "./assets/components/icons/Add.vue?vue&type=template&id=4f94507e&":
/*!************************************************************************!*\
  !*** ./assets/components/icons/Add.vue?vue&type=template&id=4f94507e& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4f94507e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4f94507e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4f94507e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=4f94507e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Add.vue?vue&type=template&id=4f94507e&");


/***/ }),

/***/ "./assets/components/icons/Collap.vue?vue&type=template&id=584b09aa&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Collap.vue?vue&type=template&id=584b09aa& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collap_vue_vue_type_template_id_584b09aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collap_vue_vue_type_template_id_584b09aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collap_vue_vue_type_template_id_584b09aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collap.vue?vue&type=template&id=584b09aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Collap.vue?vue&type=template&id=584b09aa&");


/***/ }),

/***/ "./assets/components/icons/Editar.vue?vue&type=template&id=65b1ca6a&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Editar.vue?vue&type=template&id=65b1ca6a& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_65b1ca6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_65b1ca6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_65b1ca6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Editar.vue?vue&type=template&id=65b1ca6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Editar.vue?vue&type=template&id=65b1ca6a&");


/***/ }),

/***/ "./assets/components/icons/Expand.vue?vue&type=template&id=61fb522a&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Expand.vue?vue&type=template&id=61fb522a& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expand_vue_vue_type_template_id_61fb522a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expand_vue_vue_type_template_id_61fb522a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expand_vue_vue_type_template_id_61fb522a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expand.vue?vue&type=template&id=61fb522a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Expand.vue?vue&type=template&id=61fb522a&");


/***/ }),

/***/ "./assets/components/icons/File.vue?vue&type=template&id=4ef7460c&":
/*!*************************************************************************!*\
  !*** ./assets/components/icons/File.vue?vue&type=template&id=4ef7460c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_4ef7460c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_4ef7460c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_4ef7460c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=template&id=4ef7460c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/File.vue?vue&type=template&id=4ef7460c&");


/***/ }),

/***/ "./assets/components/icons/FilterPerson.vue?vue&type=template&id=4d20de06&":
/*!*********************************************************************************!*\
  !*** ./assets/components/icons/FilterPerson.vue?vue&type=template&id=4d20de06& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterPerson_vue_vue_type_template_id_4d20de06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterPerson_vue_vue_type_template_id_4d20de06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterPerson_vue_vue_type_template_id_4d20de06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterPerson.vue?vue&type=template&id=4d20de06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/FilterPerson.vue?vue&type=template&id=4d20de06&");


/***/ }),

/***/ "./assets/components/icons/Filtro.vue?vue&type=template&id=097b4cd0&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Filtro.vue?vue&type=template&id=097b4cd0& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtro_vue_vue_type_template_id_097b4cd0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtro_vue_vue_type_template_id_097b4cd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtro_vue_vue_type_template_id_097b4cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Filtro.vue?vue&type=template&id=097b4cd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Filtro.vue?vue&type=template&id=097b4cd0&");


/***/ }),

/***/ "./assets/components/icons/IconAddUser.vue?vue&type=template&id=ff10411a&":
/*!********************************************************************************!*\
  !*** ./assets/components/icons/IconAddUser.vue?vue&type=template&id=ff10411a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconAddUser_vue_vue_type_template_id_ff10411a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconAddUser_vue_vue_type_template_id_ff10411a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconAddUser_vue_vue_type_template_id_ff10411a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconAddUser.vue?vue&type=template&id=ff10411a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconAddUser.vue?vue&type=template&id=ff10411a&");


/***/ }),

/***/ "./assets/components/icons/IconBase.vue?vue&type=template&id=46ec007a&":
/*!*****************************************************************************!*\
  !*** ./assets/components/icons/IconBase.vue?vue&type=template&id=46ec007a& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_template_id_46ec007a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_template_id_46ec007a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_template_id_46ec007a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconBase.vue?vue&type=template&id=46ec007a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconBase.vue?vue&type=template&id=46ec007a&");


/***/ }),

/***/ "./assets/components/icons/List.vue?vue&type=template&id=69f8bfa4&":
/*!*************************************************************************!*\
  !*** ./assets/components/icons/List.vue?vue&type=template&id=69f8bfa4& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_69f8bfa4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_69f8bfa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_69f8bfa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=69f8bfa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/List.vue?vue&type=template&id=69f8bfa4&");


/***/ }),

/***/ "./assets/components/icons/Message.vue?vue&type=template&id=73d10fb2&":
/*!****************************************************************************!*\
  !*** ./assets/components/icons/Message.vue?vue&type=template&id=73d10fb2& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_73d10fb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_73d10fb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_73d10fb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Message.vue?vue&type=template&id=73d10fb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Message.vue?vue&type=template&id=73d10fb2&");


/***/ }),

/***/ "./assets/components/icons/Pause.vue?vue&type=template&id=1276b096&":
/*!**************************************************************************!*\
  !*** ./assets/components/icons/Pause.vue?vue&type=template&id=1276b096& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_template_id_1276b096___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_template_id_1276b096___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_template_id_1276b096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pause.vue?vue&type=template&id=1276b096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Pause.vue?vue&type=template&id=1276b096&");


/***/ }),

/***/ "./assets/components/icons/Play.vue?vue&type=template&id=2a6b8078&":
/*!*************************************************************************!*\
  !*** ./assets/components/icons/Play.vue?vue&type=template&id=2a6b8078& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_template_id_2a6b8078___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_template_id_2a6b8078___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_template_id_2a6b8078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Play.vue?vue&type=template&id=2a6b8078& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Play.vue?vue&type=template&id=2a6b8078&");


/***/ }),

/***/ "./assets/components/icons/Schedule.vue?vue&type=template&id=dd35bcb2&":
/*!*****************************************************************************!*\
  !*** ./assets/components/icons/Schedule.vue?vue&type=template&id=dd35bcb2& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_dd35bcb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_dd35bcb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_dd35bcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Schedule.vue?vue&type=template&id=dd35bcb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Schedule.vue?vue&type=template&id=dd35bcb2&");


/***/ }),

/***/ "./assets/components/icons/Search.vue?vue&type=template&id=1776a238&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Search.vue?vue&type=template&id=1776a238& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_1776a238___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_1776a238___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_1776a238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Search.vue?vue&type=template&id=1776a238& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Search.vue?vue&type=template&id=1776a238&");


/***/ }),

/***/ "./assets/components/icons/Settings.vue?vue&type=template&id=6bf9a533&":
/*!*****************************************************************************!*\
  !*** ./assets/components/icons/Settings.vue?vue&type=template&id=6bf9a533& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_6bf9a533___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_6bf9a533___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_6bf9a533___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=6bf9a533& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Settings.vue?vue&type=template&id=6bf9a533&");


/***/ }),

/***/ "./assets/components/icons/Stored.vue?vue&type=template&id=78faeab3&":
/*!***************************************************************************!*\
  !*** ./assets/components/icons/Stored.vue?vue&type=template&id=78faeab3& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stored_vue_vue_type_template_id_78faeab3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stored_vue_vue_type_template_id_78faeab3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stored_vue_vue_type_template_id_78faeab3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stored.vue?vue&type=template&id=78faeab3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Stored.vue?vue&type=template&id=78faeab3&");


/***/ }),

/***/ "./assets/components/icons/Trash.vue?vue&type=template&id=27aa0cd8&":
/*!**************************************************************************!*\
  !*** ./assets/components/icons/Trash.vue?vue&type=template&id=27aa0cd8& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trash_vue_vue_type_template_id_27aa0cd8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trash_vue_vue_type_template_id_27aa0cd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trash_vue_vue_type_template_id_27aa0cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trash.vue?vue&type=template&id=27aa0cd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Trash.vue?vue&type=template&id=27aa0cd8&");


/***/ }),

/***/ "./assets/components/login/PasswordChange.vue?vue&type=template&id=aada1ee8&":
/*!***********************************************************************************!*\
  !*** ./assets/components/login/PasswordChange.vue?vue&type=template&id=aada1ee8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_aada1ee8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_aada1ee8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_aada1ee8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordChange.vue?vue&type=template&id=aada1ee8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordChange.vue?vue&type=template&id=aada1ee8&");


/***/ }),

/***/ "./assets/components/login/PasswordReset.vue?vue&type=template&id=509db5a3&":
/*!**********************************************************************************!*\
  !*** ./assets/components/login/PasswordReset.vue?vue&type=template&id=509db5a3& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_509db5a3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_509db5a3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_509db5a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordReset.vue?vue&type=template&id=509db5a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordReset.vue?vue&type=template&id=509db5a3&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=template&id=0bec70d8&":
/*!******************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=template&id=0bec70d8& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_0bec70d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_0bec70d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_0bec70d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=template&id=0bec70d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=template&id=0bec70d8&");


/***/ }),

/***/ "./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=template&id=023772bf&":
/*!*******************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=template&id=023772bf& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInpute_vue_vue_type_template_id_023772bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInpute_vue_vue_type_template_id_023772bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInpute_vue_vue_type_template_id_023772bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvatarInpute.vue?vue&type=template&id=023772bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=template&id=023772bf&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=template&id=4ccb8e57&":
/*!*********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=template&id=4ccb8e57& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_4ccb8e57___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_4ccb8e57___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_4ccb8e57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskList.vue?vue&type=template&id=4ccb8e57& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=template&id=4ccb8e57&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=template&id=ffc6412a&":
/*!***********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=template&id=ffc6412a& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_template_id_ffc6412a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_template_id_ffc6412a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_template_id_ffc6412a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskStatus.vue?vue&type=template&id=ffc6412a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=template&id=ffc6412a&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=template&id=23b68fea&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=template&id=23b68fea& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popper_vue_vue_type_template_id_23b68fea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popper_vue_vue_type_template_id_23b68fea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popper_vue_vue_type_template_id_23b68fea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popper.vue?vue&type=template&id=23b68fea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=template&id=23b68fea&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=template&id=09681668&":
/*!************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=template&id=09681668& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_09681668___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_09681668___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_09681668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag.vue?vue&type=template&id=09681668& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=template&id=09681668&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=template&id=d8198bd0&":
/*!*****************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=template&id=d8198bd0& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreFiles_vue_vue_type_template_id_d8198bd0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreFiles_vue_vue_type_template_id_d8198bd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreFiles_vue_vue_type_template_id_d8198bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreFiles.vue?vue&type=template&id=d8198bd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=template&id=d8198bd0&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=template&id=a76a9ed4&":
/*!*******************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=template&id=a76a9ed4& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardName_vue_vue_type_template_id_a76a9ed4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardName_vue_vue_type_template_id_a76a9ed4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardName_vue_vue_type_template_id_a76a9ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BoardName.vue?vue&type=template&id=a76a9ed4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=template&id=a76a9ed4&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=template&id=e185cfb2&":
/*!********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=template&id=e185cfb2& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_e185cfb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_e185cfb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_e185cfb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=template&id=e185cfb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=template&id=e185cfb2&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=template&id=66a76e26&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=template&id=66a76e26&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentionList_vue_vue_type_template_id_66a76e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentionList_vue_vue_type_template_id_66a76e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentionList_vue_vue_type_template_id_66a76e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MentionList.vue?vue&type=template&id=66a76e26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=template&id=66a76e26&scoped=true&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=template&id=7f499d9e&":
/*!********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=template&id=7f499d9e& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidePanel_vue_vue_type_template_id_7f499d9e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidePanel_vue_vue_type_template_id_7f499d9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidePanel_vue_vue_type_template_id_7f499d9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SlidePanel.vue?vue&type=template&id=7f499d9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=template&id=7f499d9e&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SubTask.vue?vue&type=template&id=dbbb69ac&":
/*!*****************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SubTask.vue?vue&type=template&id=dbbb69ac& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTask_vue_vue_type_template_id_dbbb69ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTask_vue_vue_type_template_id_dbbb69ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTask_vue_vue_type_template_id_dbbb69ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubTask.vue?vue&type=template&id=dbbb69ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubTask.vue?vue&type=template&id=dbbb69ac&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=template&id=44bbf3c8&":
/*!*********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=template&id=44bbf3c8& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubtaskList_vue_vue_type_template_id_44bbf3c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubtaskList_vue_vue_type_template_id_44bbf3c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubtaskList_vue_vue_type_template_id_44bbf3c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubtaskList.vue?vue&type=template&id=44bbf3c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=template&id=44bbf3c8&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=template&id=9852f25a&":
/*!****************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=template&id=9852f25a& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TipTap_vue_vue_type_template_id_9852f25a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TipTap_vue_vue_type_template_id_9852f25a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TipTap_vue_vue_type_template_id_9852f25a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TipTap.vue?vue&type=template&id=9852f25a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=template&id=9852f25a&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Department/Department.vue?vue&type=template&id=60a5cd34&":
/*!****************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/Department.vue?vue&type=template&id=60a5cd34& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_60a5cd34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_60a5cd34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_60a5cd34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Department.vue?vue&type=template&id=60a5cd34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Department.vue?vue&type=template&id=60a5cd34&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=template&id=016da322&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=template&id=016da322& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidents_vue_vue_type_template_id_016da322___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidents_vue_vue_type_template_id_016da322___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidents_vue_vue_type_template_id_016da322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incidents.vue?vue&type=template&id=016da322& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=template&id=016da322&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=template&id=0d7d5487&":
/*!*********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=template&id=0d7d5487& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationText_vue_vue_type_template_id_0d7d5487___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationText_vue_vue_type_template_id_0d7d5487___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationText_vue_vue_type_template_id_0d7d5487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformationText.vue?vue&type=template&id=0d7d5487& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=template&id=0d7d5487&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Incidencias.vue?vue&type=template&id=6fa698c2&":
/*!******************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Incidencias.vue?vue&type=template&id=6fa698c2& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_template_id_6fa698c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_template_id_6fa698c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incidencias_vue_vue_type_template_id_6fa698c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incidencias.vue?vue&type=template&id=6fa698c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Incidencias.vue?vue&type=template&id=6fa698c2&");


/***/ }),

/***/ "./assets/components/user/userNavBar/InformationProfile.vue?vue&type=template&id=6f780648&":
/*!*************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/InformationProfile.vue?vue&type=template&id=6f780648& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationProfile_vue_vue_type_template_id_6f780648___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationProfile_vue_vue_type_template_id_6f780648___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationProfile_vue_vue_type_template_id_6f780648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformationProfile.vue?vue&type=template&id=6f780648& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/InformationProfile.vue?vue&type=template&id=6f780648&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=template&id=eddef456&":
/*!***********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=template&id=eddef456& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editable_vue_vue_type_template_id_eddef456___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editable_vue_vue_type_template_id_eddef456___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editable_vue_vue_type_template_id_eddef456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Editable.vue?vue&type=template&id=eddef456& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=template&id=eddef456&");


/***/ }),

/***/ "./assets/components/user/userNavBar/UserBoard.vue?vue&type=template&id=cbcab380&":
/*!****************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserBoard.vue?vue&type=template&id=cbcab380& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBoard_vue_vue_type_template_id_cbcab380___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBoard_vue_vue_type_template_id_cbcab380___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBoard_vue_vue_type_template_id_cbcab380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBoard.vue?vue&type=template&id=cbcab380& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserBoard.vue?vue&type=template&id=cbcab380&");


/***/ }),

/***/ "./assets/components/user/userNavBar/UserDepartment.vue?vue&type=template&id=61ea9e68&":
/*!*********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserDepartment.vue?vue&type=template&id=61ea9e68& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDepartment_vue_vue_type_template_id_61ea9e68___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDepartment_vue_vue_type_template_id_61ea9e68___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDepartment_vue_vue_type_template_id_61ea9e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDepartment.vue?vue&type=template&id=61ea9e68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserDepartment.vue?vue&type=template&id=61ea9e68&");


/***/ }),

/***/ "./assets/components/user/userNavBar/UserProfile.vue?vue&type=template&id=2dd43f03&":
/*!******************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserProfile.vue?vue&type=template&id=2dd43f03& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_2dd43f03___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_2dd43f03___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_2dd43f03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserProfile.vue?vue&type=template&id=2dd43f03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserProfile.vue?vue&type=template&id=2dd43f03&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=template&id=448cc98c&":
/*!**********************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=template&id=448cc98c& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_448cc98c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_448cc98c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_448cc98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=template&id=448cc98c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=template&id=448cc98c&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=template&id=835b8468&":
/*!***************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=template&id=835b8468& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeTeams_vue_vue_type_template_id_835b8468___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeTeams_vue_vue_type_template_id_835b8468___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeTeams_vue_vue_type_template_id_835b8468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WelcomeTeams.vue?vue&type=template&id=835b8468& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=template&id=835b8468&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=template&id=4b8e1b4e&":
/*!********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=template&id=4b8e1b4e& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersChart_vue_vue_type_template_id_4b8e1b4e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersChart_vue_vue_type_template_id_4b8e1b4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersChart_vue_vue_type_template_id_4b8e1b4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MembersChart.vue?vue&type=template&id=4b8e1b4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=template&id=4b8e1b4e&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=template&id=36c3d95e&":
/*!*******************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=template&id=36c3d95e& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersList_vue_vue_type_template_id_36c3d95e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersList_vue_vue_type_template_id_36c3d95e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersList_vue_vue_type_template_id_36c3d95e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MembersList.vue?vue&type=template&id=36c3d95e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=template&id=36c3d95e&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=template&id=06ae0988&":
/*!********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=template&id=06ae0988& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_template_id_06ae0988___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_template_id_06ae0988___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_template_id_06ae0988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Organization.vue?vue&type=template&id=06ae0988& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=template&id=06ae0988&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=template&id=8fb73f1e&":
/*!********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=template&id=8fb73f1e& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_template_id_8fb73f1e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_template_id_8fb73f1e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_template_id_8fb73f1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabComponent.vue?vue&type=template&id=8fb73f1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=template&id=8fb73f1e&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=template&id=450a9366&":
/*!*********************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=template&id=450a9366& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_template_id_450a9366___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_template_id_450a9366___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_template_id_450a9366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabsComponent.vue?vue&type=template&id=450a9366& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=template&id=450a9366&");


/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=template&id=1f949cbb&":
/*!*****************************************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=template&id=1f949cbb& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsList_vue_vue_type_template_id_1f949cbb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsList_vue_vue_type_template_id_1f949cbb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsList_vue_vue_type_template_id_1f949cbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TeamsList.vue?vue&type=template&id=1f949cbb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=template&id=1f949cbb&");


/***/ }),

/***/ "./assets/views/App.vue?vue&type=template&id=2e4360e2&scoped=true&":
/*!*************************************************************************!*\
  !*** ./assets/views/App.vue?vue&type=template&id=2e4360e2&scoped=true& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2e4360e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2e4360e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2e4360e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=2e4360e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/App.vue?vue&type=template&id=2e4360e2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Redirect.vue?vue&type=template&id=401761d7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Redirect.vue?vue&type=template&id=401761d7& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Add.vue?vue&type=template&id=4f94507e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Add.vue?vue&type=template&id=4f94507e& ***!
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
  return _c("g", [
    _c("path", {
      attrs: {
        d:
          "M256,497.3C122.9,497.3,14.7,389.1,14.7,256S122.9,14.7,256,14.7S497.3,122.9,497.3,256S389.1,497.3,256,497.3\n\t\tz M256,44.8C139.6,44.8,44.8,139.6,44.8,256S139.6,467.2,256,467.2S467.2,372.4,467.2,256S372.4,44.8,256,44.8z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      attrs: {
        d:
          "M361.6,271.1H150.4c-8.3,0-15.1-6.8-15.1-15.1s6.8-15.1,15.1-15.1h211.2c8.3,0,15.1,6.8,15.1,15.1\n\t\tS369.9,271.1,361.6,271.1z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      attrs: {
        d:
          "M256,376.7c-8.3,0-15.1-6.8-15.1-15.1V150.4c0-8.3,6.8-15.1,15.1-15.1s15.1,6.8,15.1,15.1v211.2\n\t\tC271.1,369.9,264.3,376.7,256,376.7z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Collap.vue?vue&type=template&id=584b09aa&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Collap.vue?vue&type=template&id=584b09aa& ***!
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
  return _c("path", {
    attrs: { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Editar.vue?vue&type=template&id=65b1ca6a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Editar.vue?vue&type=template&id=65b1ca6a& ***!
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
          "M871.8,540c-20.4,0-36.9,16.5-36.9,36.9v368.7c0,20.4-16.5,36.9-36.9,36.9H134.4\n\t\t\t\t\t\tc-20.4,0-36.9-16.5-36.9-36.9V208.2c0-20.4,16.5-36.9,36.9-36.9h442.4c20.4,0,36.9-16.5,36.9-36.9s-16.5-36.9-36.9-36.9H134.4\n\t\t\t\t\t\tc-61.1,0-110.6,49.5-110.6,110.6v737.4c0,61.1,49.5,110.6,110.6,110.6h663.6c61.1,0,110.6-49.5,110.6-110.6V576.9\n\t\t\t\t\t\tC908.7,556.5,892.2,540,871.8,540z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      attrs: {
        d:
          "M1014.8,65.2c-26.5-26.5-62.4-41.3-99.8-41.3c-37.5-0.1-73.4,14.8-99.8,41.4L329.6,550.8\n\t\t\t\tc-4,4.1-7.1,9-8.9,14.4L247,786.4c-6.4,19.3,4,40.2,23.3,46.6c3.7,1.2,7.7,1.9,11.6,1.9c4,0,7.9-0.6,11.7-1.9l221.2-73.7\n\t\t\t\tc5.4-1.8,10.4-4.9,14.4-8.9l485.6-485.6C1069.9,209.7,1070,120.3,1014.8,65.2z M962.7,212.7L483.4,692l-143.2,47.8l47.7-143\n\t\t\t\tl479.5-479.3c26.4-26.3,69.1-26.3,95.4,0.1c12.6,12.6,19.6,29.6,19.7,47.4C982.5,182.9,975.4,200.1,962.7,212.7z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Expand.vue?vue&type=template&id=61fb522a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Expand.vue?vue&type=template&id=61fb522a& ***!
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
      staticClass: "st2",
      attrs: {
        id: "XMLID_225_",
        d:
          "M366.3,221.2c-4-4-10.5-4-14.6,0L256,317l-95.8-95.8c-4-4-10.5-4-14.6,0c-4,4-4,10.5,0,14.6\n\t\tl103,103c1.9,1.9,4.6,3,7.3,3c2.7,0,5.4-1.1,7.3-3l103-103C370.4,231.8,370.4,225.3,366.3,221.2z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/File.vue?vue&type=template&id=4ef7460c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/File.vue?vue&type=template&id=4ef7460c& ***!
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
      fill: "currentColor",
      d:
        "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/FilterPerson.vue?vue&type=template&id=4d20de06&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/FilterPerson.vue?vue&type=template&id=4d20de06& ***!
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
    staticClass: "st3",
    attrs: {
      d:
        "M608,98C547.1,37,466.1,3.5,380,3.5C293.9,3.5,212.9,37,152,98S57.5,239.9,57.5,326\n\t\tc0,86.1,33.5,167.1,94.5,228s141.9,94.5,228,94.5c86.1,0,167.1-33.5,228-94.5s94.5-141.9,94.5-228C702.5,239.9,669,158.9,608,98z\n\t\t M219.2,560.8C232.7,483.1,300,425.9,380,425.9c80,0,147.3,57.3,160.8,134.9C495,592.3,439.6,610.7,380,610.7\n\t\tS265,592.3,219.2,560.8z M277.5,285.5c0-56.5,46-102.5,102.5-102.5s102.5,46,102.5,102.5s-46,102.5-102.5,102.5\n\t\tS277.5,342.1,277.5,285.5z M573.6,534.6c-10.2-36.2-30.4-69-58.7-94.6c-17.4-15.7-37.1-28.1-58.4-36.9\n\t\tc38.4-25.1,63.9-68.4,63.9-117.6c0-77.4-63-140.3-140.3-140.3s-140.3,63-140.3,140.3c0,49.2,25.5,92.6,63.9,117.6\n\t\tc-21.3,8.7-41,21.1-58.4,36.9c-28.3,25.6-48.5,58.4-58.7,94.6c-56-52-91.2-126.3-91.2-208.6C95.3,169,223,41.3,380,41.3\n\t\tS664.7,169,664.7,326C664.7,408.3,629.6,482.6,573.6,534.6z"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Filtro.vue?vue&type=template&id=097b4cd0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Filtro.vue?vue&type=template&id=097b4cd0& ***!
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
          "M570.85,15.47H82.48A20.82,20.82,0,0,0,61.67,36.28v88.09a20.92,20.92,0,0,0,5.43,14L252.44,341.94V612.05a20.82,20.82,0,0,0,31.14,18.07l106.83-61A20.86,20.86,0,0,0,400.91,551V341.94L586.25,138.41a20.9,20.9,0,0,0,5.41-14V36.28a20.81,20.81,0,0,0-20.81-20.81M550,116.32,364.7,319.86a20.78,20.78,0,0,0-5.41,14V538.93l-65.23,37.26V333.86a20.72,20.72,0,0,0-5.43-14L103.31,116.32V57.09H550Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconAddUser.vue?vue&type=template&id=ff10411a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconAddUser.vue?vue&type=template&id=ff10411a& ***!
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
    _c("path", {
      attrs: {
        d:
          "M226,150a62.38,62.38,0,0,0-52.3,28.42,89.89,89.89,0,0,0-48.7-48.7,62.39,62.39,0,1,0-68,0A89.52,89.52,0,0,0,1.68,212.41v31.49a30.93,30.93,0,0,0,30.9,30.9h117A31,31,0,0,0,179,253.33,62.38,62.38,0,1,0,226,150ZM45.48,77.44A45.59,45.59,0,1,1,91.07,123,45.64,45.64,0,0,1,45.48,77.44ZM163.65,243.91A14.11,14.11,0,0,1,149.56,258h-117a14.11,14.11,0,0,1-14.09-14.09V212.41a72.58,72.58,0,1,1,145.17,0v31.49ZM226,258a45.59,45.59,0,1,1,45.59-45.59A45.64,45.64,0,0,1,226,258Zm0,0"
      }
    }),
    _vm._v(" "),
    _c("path", {
      attrs: {
        d:
          "M244,204h-9.59v-9.6a8.4,8.4,0,0,0-16.8,0V204H208a8.4,8.4,0,0,0,0,16.8h9.6v9.59a8.4,8.4,0,1,0,16.8,0v-9.59H244a8.4,8.4,0,1,0,0-16.8Zm0,0"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconBase.vue?vue&type=template&id=46ec007a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/IconBase.vue?vue&type=template&id=46ec007a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: _vm.width,
        height: _vm.height,
        viewBox: _vm.viewBox,
        "aria-labelledby": _vm.iconName,
        role: "presentation"
      }
    },
    [
      _c("title", { attrs: { id: _vm.iconName, lang: "en" } }, [
        _vm._v(_vm._s(_vm.iconName) + " icon")
      ]),
      _vm._v(" "),
      _c("g", { attrs: { fill: _vm.iconColor } }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/List.vue?vue&type=template&id=69f8bfa4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/List.vue?vue&type=template&id=69f8bfa4& ***!
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
    _c("path", {
      attrs: {
        d:
          "M275.07,241.47H159.25a9.66,9.66,0,0,0,0,19.32l115.82-.28a9.42,9.42,0,0,0,9.65-9.38A9.65,9.65,0,0,0,275.07,241.47ZM139.94,28.88l135.13,0a9.65,9.65,0,0,0,0-19.3H139.94a9.66,9.66,0,0,0,0,19.32Zm16.28,157.34a9.66,9.66,0,0,0-13.71,0l-50.84,58.5V9.56H72.38V245.07L21.23,186.22A9.71,9.71,0,1,0,7.53,200l67,77.11a9.55,9.55,0,0,0,7.34,2.75,9.53,9.53,0,0,0,7.34-2.75l67-77.11A9.73,9.73,0,0,0,156.22,186.22ZM275.07,67.54H139.94a9.62,9.62,0,1,0,0,19.24H275.07a9.62,9.62,0,1,0,0-19.24Zm0,58H139.94a9.66,9.66,0,0,0-9.65,9.66,9.53,9.53,0,0,0,9.65,9.51l135.13.15a9.66,9.66,0,0,0,0-19.32Zm0,58H197.85a9.66,9.66,0,0,0-9.65,9.66,9.48,9.48,0,0,0,9.65,9.45h77.22a9.48,9.48,0,0,0,9.65-9.45A9.65,9.65,0,0,0,275.07,183.49Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Message.vue?vue&type=template&id=73d10fb2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Message.vue?vue&type=template&id=73d10fb2& ***!
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
  return _c("path", {
    attrs: {
      d:
        "M274.26,103.06A100.21,100.21,0,0,0,174.31,3.12H115.09a100.21,100.21,0,0,0-99.94,99.95v46.55a99.05,99.05,0,0,0,18.17,57.3,100.28,100.28,0,0,0,41,33.91v26.74c0,13.82,7.74,18.73,14.37,18.73,4.74,0,9.47-2.34,14.08-6.95l29.79-29.79h41.72a100.21,100.21,0,0,0,99.95-99.95ZM174.32,233H129.16a8.29,8.29,0,0,0-5.87,2.43L91.07,267.61l-.13.12V235.29a8.3,8.3,0,0,0-5.34-7.75,84,84,0,0,1-53.86-77.92V103.06a83.62,83.62,0,0,1,83.35-83.35h59.22a83.62,83.62,0,0,1,83.35,83.35v46.55A83.45,83.45,0,0,1,174.32,233Zm0,0"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Pause.vue?vue&type=template&id=1276b096&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Pause.vue?vue&type=template&id=1276b096& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
          "M241.72,47.69a137.2,137.2,0,1,0,0,194A137.13,137.13,0,0,0,241.72,47.69Zm-97,211.68A114.66,114.66,0,1,1,259.37,144.71,114.79,114.79,0,0,1,144.7,259.37Z"
      }
    }),
    _c("path", {
      staticClass: "cls-1",
      attrs: {
        d:
          "M167.6,93.37a11.27,11.27,0,0,0-11.27,11.27v80.14a11.27,11.27,0,1,0,22.54,0V104.64A11.27,11.27,0,0,0,167.6,93.37Z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      attrs: {
        d:
          "M121.81,93.37a11.27,11.27,0,0,0-11.27,11.27v80.14a11.27,11.27,0,0,0,22.54,0V104.64a11.27,11.27,0,0,0-11.27-11.27Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Play.vue?vue&type=template&id=2a6b8078&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Play.vue?vue&type=template&id=2a6b8078& ***!
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
    _c("path", {
      attrs: {
        d:
          "M190,136.22,133,94.74A6.88,6.88,0,0,0,122,100.29v82.93a6.86,6.86,0,0,0,3.76,6.14,6.93,6.93,0,0,0,3.13.74,6.84,6.84,0,0,0,4-1.34L190,147.32a6.83,6.83,0,0,0,0-11.1Z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      attrs: {
        d:
          "M144.71,4.2a137.39,137.39,0,1,0,137.4,137.41A137.39,137.39,0,0,0,144.71,4.2Zm0,251.85A114.46,114.46,0,1,1,259.15,141.61,114.44,114.44,0,0,1,144.71,256.05Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Schedule.vue?vue&type=template&id=dd35bcb2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Schedule.vue?vue&type=template&id=dd35bcb2& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          "M258.4,31h-31V10.34a10.34,10.34,0,1,0-20.67,0V31h-124V10.34a10.34,10.34,0,1,0-20.67,0V31H31A31,31,0,0,0,0,62V258.4a31,31,0,0,0,31,31H258.4a31,31,0,0,0,31-31V62A31,31,0,0,0,258.4,31ZM268.74,258.4a10.34,10.34,0,0,1-10.34,10.34H31A10.34,10.34,0,0,1,20.67,258.4V124H268.74Zm0-155H20.67V62A10.34,10.34,0,0,1,31,51.68H62V72.35a10.34,10.34,0,0,0,20.67,0V51.68h124V72.35a10.34,10.34,0,1,0,20.67,0V51.68h31A10.34,10.34,0,0,1,268.74,62v41.34Z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "cls-1",
      attrs: {
        d:
          "M213.77,147.73a10.34,10.34,0,0,0-14.36,0L124,223.11l-34-34a10.34,10.34,0,0,0-14.62,14.62L116.73,245a10.34,10.34,0,0,0,14.62,0L214,162.35A10.34,10.34,0,0,0,213.77,147.73Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Search.vue?vue&type=template&id=1776a238&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Search.vue?vue&type=template&id=1776a238& ***!
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
      staticClass: "cls-1",
      attrs: {
        d:
          "M281,265.64l-68.06-68.06a117.55,117.55,0,1,0-15.34,15.33L265.64,281A10.84,10.84,0,1,0,281,265.64Zm-254-143a95.69,95.69,0,1,1,95.7,95.69A95.81,95.81,0,0,1,26.95,122.64Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Settings.vue?vue&type=template&id=6bf9a533&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Settings.vue?vue&type=template&id=6bf9a533& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      staticClass: "cls-1",
      attrs: {
        d:
          "M234.71,6.52H55.61A50,50,0,0,0,5.72,56.41v179.1a50,50,0,0,0,49.89,49.89h179.1a50,50,0,0,0,49.89-49.89V56.41A50,50,0,0,0,234.71,6.52Zm33.55,229a33.59,33.59,0,0,1-33.55,33.55H55.61a33.59,33.59,0,0,1-33.55-33.55V56.41A33.59,33.59,0,0,1,55.61,22.86h179.1a33.59,33.59,0,0,1,33.55,33.55Z"
      }
    }),
    _c("path", {
      staticClass: "cls-1",
      attrs: {
        d:
          "M241.43,67.78H117a25.67,25.67,0,0,0-48.67,0H48.89a8.17,8.17,0,1,0,0,16.34H68.32a25.67,25.67,0,0,0,48.67,0H241.43a8.17,8.17,0,1,0,0-16.34ZM92.65,85.28A9.33,9.33,0,1,1,102,75.95,9.34,9.34,0,0,1,92.65,85.28Z"
      }
    }),
    _c("path", {
      staticClass: "cls-1",
      attrs: {
        d:
          "M241.43,137.79H222a25.67,25.67,0,0,0-48.67,0H48.89a8.17,8.17,0,1,0,0,16.34H173.34a25.67,25.67,0,0,0,48.67,0h19.43a8.17,8.17,0,1,0,0-16.34Zm-43.76,17.5A9.33,9.33,0,1,1,207,146,9.34,9.34,0,0,1,197.67,155.29Z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "cls-1",
      attrs: {
        d:
          "M241.43,207.8H152a25.67,25.67,0,0,0-48.67,0H48.89a8.17,8.17,0,0,0,0,16.34h54.43a25.67,25.67,0,0,0,48.67,0h89.44a8.17,8.17,0,1,0,0-16.34Zm-113.77,17.5A9.33,9.33,0,1,1,137,216,9.34,9.34,0,0,1,127.66,225.31Z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Stored.vue?vue&type=template&id=78faeab3&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Stored.vue?vue&type=template&id=78faeab3& ***!
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
      staticClass: "cls-3",
      attrs: {
        d:
          "M620.64,273a50.42,50.42,0,0,0-38.21-17.52h-3.58V205.09a50.49,50.49,0,0,0-40.33-49.4V63.91a10.09,10.09,0,0,0-10.09-10.08H498.19V23.59A10.09,10.09,0,0,0,488.11,13.5H145.27a10.09,10.09,0,0,0-10.08,10.09v71.6a50.5,50.5,0,0,0-40.34,49.4v10.08H84.78a50.49,50.49,0,0,0-50.42,50.42V608.41a16.64,16.64,0,0,0,2.35,6.48,10.1,10.1,0,0,0,7.74,3.61H534a50,50,0,0,0,49.81-42.61L632.3,313.4A50.44,50.44,0,0,0,620.64,273m-62-67.93V255.5H538.53V176.69a30.23,30.23,0,0,1,20.16,28.39M518.36,255.5H195.69V74H518.36Zm-363-221.84H478V53.84H185.61a10.09,10.09,0,0,0-10.09,10.08V255.5H155.36ZM54.53,205.09a30.24,30.24,0,0,1,30.25-30.25h20.16A10.08,10.08,0,0,0,115,164.75V144.59a30.24,30.24,0,0,1,20.17-28.39V255.91a49.83,49.83,0,0,0-45.38,42.24l-35.29,197Zm557.89,105L564,572.58A30.45,30.45,0,0,1,534,598.34H56.54l53.22-296.91a30.45,30.45,0,0,1,29.92-25.76H582.44a30.25,30.25,0,0,1,30,34.41"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "cls-3",
      attrs: {
        d: "M484.52,141H235a9.6,9.6,0,1,0,0,19.19h249.5a9.6,9.6,0,1,0,0-19.19"
      }
    }),
    _c("path", {
      staticClass: "cls-3",
      attrs: {
        d: "M235,102.58a9.6,9.6,0,1,0,0,19.2h249.5a9.6,9.6,0,0,0,0-19.2Z"
      }
    }),
    _c("path", {
      staticClass: "cls-3",
      attrs: {
        d:
          "M484.52,179.35H235a9.6,9.6,0,1,0,0,19.19h249.5a9.6,9.6,0,1,0,0-19.19"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "cls-3",
      attrs: {
        d: "M484.52,217.73H235a9.6,9.6,0,0,0,0,19.2h249.5a9.6,9.6,0,0,0,0-19.2"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Trash.vue?vue&type=template&id=27aa0cd8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/icons/Trash.vue?vue&type=template&id=27aa0cd8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      staticClass: "st0",
      attrs: {
        d:
          "M443.8,128l-10.2-30.6c-3.9-11.7-14.8-19.5-27.1-19.5h-85.9v-28c0-14-11.4-25.3-25.3-25.3h-78.6\n\t\tc-14,0-25.3,11.4-25.3,25.3v28h-85.9c-12.3,0-23.2,7.8-27.1,19.5L68.2,128c-2.3,7-1.1,14.7,3.1,20.7c4.3,6,11.2,9.5,18.6,9.5h10.7\n\t\tl23.5,290.7c1.7,21.6,20.1,38.5,41.7,38.5H351c21.6,0,39.9-16.9,41.7-38.5l23.5-290.7h5.9c7.4,0,14.3-3.6,18.6-9.5\n\t\tC445,142.7,446.2,135,443.8,128z M218.5,51.7h75.1v26.2h-75.1V51.7z M365.6,446.7c-0.6,7.6-7,13.5-14.6,13.5H165.8\n\t\tc-7.6,0-14-5.9-14.6-13.5l-23.3-288.5H389L365.6,446.7z M95.7,131.1l8.4-25.1c0.2-0.6,0.7-1,1.3-1h301.1c0.6,0,1.1,0.4,1.3,1\n\t\tl8.4,25.1H95.7z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "st0",
      attrs: {
        d:
          "M322.4,445.8c0.2,0,0.5,0,0.7,0c7.2,0,13.2-5.6,13.5-12.9l12.7-244.4c0.4-7.5-5.4-13.9-12.8-14.2\n\t\tc-7.5-0.4-13.9,5.4-14.2,12.8l-12.7,244.4C309.2,439,314.9,445.4,322.4,445.8z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "st0",
      attrs: {
        d:
          "M176,433c0.4,7.2,6.4,12.8,13.5,12.8c0.2,0,0.5,0,0.8,0c7.5-0.4,13.2-6.8,12.8-14.3l-13.3-244.4\n\t\tc-0.4-7.5-6.8-13.2-14.3-12.8c-7.5,0.4-13.2,6.8-12.8,14.3L176,433z"
      }
    }),
    _vm._v(" "),
    _c("path", {
      staticClass: "st0",
      attrs: {
        d:
          "M256.2,445.8c7.5,0,13.6-6.1,13.6-13.6V187.8c0-7.5-6.1-13.6-13.6-13.6s-13.6,6.1-13.6,13.6v244.4\n\t\tC242.6,439.7,248.7,445.8,256.2,445.8z"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordChange.vue?vue&type=template&id=aada1ee8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordChange.vue?vue&type=template&id=aada1ee8& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        "w-full h-full flex flex-col justify-center items-center  text-Barlow"
    },
    [
      _c("img", {
        staticClass: "w-full h-full sm:h-4/6 sm:w-10/12 lg:w-3/12 lg:h-3/6",
        attrs: { src: __webpack_require__(/*! ../../media/LOGO/LOGO_Piña-01.png */ "./assets/media/LOGO/LOGO_Piña-01.png").default }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full h-full flex flex-col font-Barlow text-fontColor-primary"
        },
        [
          _c(
            "div",
            { staticClass: "flex flex-col justify-center items-center py-2" },
            [
              _c(
                "label",
                {
                  staticClass: "w-2/6 mx-3 lg:text-xl",
                  attrs: { for: "email" }
                },
                [_vm._v("Enter new password ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass:
                  "w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg",
                attrs: {
                  type: "password",
                  placeholder: "new password",
                  id: "password",
                  name: "password"
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center items-center mt-10" }, [
            _c(
              "button",
              {
                staticClass:
                  "w-4/12 lg:w-1/12 lg:h-5/6 my-3 inline-flex items-center justify-center bg-sideBar-primary hover:bg-block-working-primary lg:text-xl text-white rounded-lg",
                attrs: { type: "button" },
                on: { click: _vm.changePassword }
              },
              [_vm._v("Cambiar contraseña ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordReset.vue?vue&type=template&id=509db5a3&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/login/PasswordReset.vue?vue&type=template&id=509db5a3& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "w-full h-full flex flex-col justify-center items-center  text-Barlow"
    },
    [
      _c("img", {
        staticClass: "w-full h-full sm:h-4/6 sm:w-10/12 lg:w-3/12 lg:h-3/6",
        attrs: { src: __webpack_require__(/*! ../../media/LOGO/LOGO_Piña-01.png */ "./assets/media/LOGO/LOGO_Piña-01.png") }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full h-full flex flex-col font-Barlow text-fontColor-primary"
        },
        [
          _c(
            "div",
            { staticClass: "flex flex-col justify-center items-center py-2" },
            [
              _c(
                "label",
                {
                  staticClass: "w-2/6 mx-3 lg:text-xl",
                  attrs: { for: "email" }
                },
                [
                  _vm._v(
                    "Introduce su email y le enviaremos un código para resetear la contraseña  "
                  )
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass:
                  "w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg",
                attrs: {
                  type: "email",
                  placeholder: "Introduzca su correo electrónico",
                  id: "email",
                  name: "email"
                },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center items-center mt-10" }, [
            _c(
              "button",
              {
                staticClass:
                  "w-4/12 lg:w-1/12 lg:h-5/6 my-3 inline-flex items-center justify-center bg-sideBar-primary hover:bg-block-working-primary lg:text-xl text-white rounded-lg",
                attrs: { type: "button" },
                on: { click: _vm.changePassword }
              },
              [_vm._v("Entrar ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=template&id=0bec70d8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=template&id=0bec70d8& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("div", [
        _vm._v("\n        Crear usuario\n        "),
        _c(
          "button",
          {
            staticClass: "bg-sideBar-primary p-2 rounded-full text-white",
            on: { click: _vm.show }
          },
          [_vm._v("\n            CREAR\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "my-first-modal" } }, [
        _c("div", [
          _vm._v("\n        Crear usuarios\n        "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass:
              " w-11/12 bg-indigo-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded shadow",
            attrs: { type: "email", id: "email", name: "email" },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex justify-center items-center" }, [
          _c(
            "button",
            {
              staticClass:
                "w-4/12 sm:w-4/12 lg:w-2/12 my-3 justify-center inline-flex rounded-md bg-block-complete-primary shadow-xl hover:bg-block-working-primary text-white",
              attrs: { type: "button" },
              on: { click: _vm.createUser }
            },
            [_vm._v("create user ")]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=template&id=023772bf&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=template&id=023772bf& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("input", {
      ref: "file",
      staticClass: "hidden",
      attrs: { type: "file" },
      on: { change: _vm.change }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "relative inline-block" }, [
      _c("img", {
        staticClass: "h-28 w-28 rounded-full object-cover",
        attrs: { src: _vm.defaultSrc, alt: "avatar" },
        on: { error: _vm.defaultImg }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "absolute top-0 h-full w-full rounded-full hover:bg-black hover:bg-opacity-25 flex items-center group justify-center",
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
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.active,
                  expression: "active"
                }
              ],
              staticClass:
                " rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none transition duration-200",
              on: {
                click: function($event) {
                  return _vm.browse()
                }
              }
            },
            [
              _c(
                "icon-base",
                {
                  staticClass: "cursor-pointer",
                  attrs: {
                    width: "25",
                    height: "25",
                    viewBox: "0 0 512 512",
                    "icon-name": "add"
                  }
                },
                [_c("Add")],
                1
              )
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=template&id=4ccb8e57&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=template&id=4ccb8e57& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.taskList.store == "0",
          expression: "taskList.store == '0'"
        }
      ],
      attrs: { id: _vm.taskList.id }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "task-container flex flex-row mx-12 text-fontColor-primary hover:bg-gray-200 cursor-pointer",
          class: _vm.color,
          staticStyle: { width: "3000px" }
        },
        [
          _c("SlidePanel", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.opentab,
                expression: "opentab"
              }
            ],
            attrs: {
              name: _vm.taskList.name,
              mentionList: _vm.mentionList,
              id: _vm.taskList.id,
              message: _vm.messages,
              users: _vm.usuarios,
              task: true,
              opentab: _vm.opentab
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-80 hover:text-indigo-600 border border-white align-middle px-4"
            },
            [
              _c(
                "span",
                {
                  staticClass: "flex justify-between group pt-2",
                  on: {
                    mouseover: function($event) {
                      _vm.editHidden = true
                    },
                    mouseleave: function($event) {
                      _vm.editHidden = false
                    }
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selected,
                        expression: "selected"
                      }
                    ],
                    staticClass: "mx-2",
                    attrs: { type: "checkbox", name: _vm.taskList.id },
                    domProps: {
                      value: _vm.taskList.id,
                      checked: Array.isArray(_vm.selected)
                        ? _vm._i(_vm.selected, _vm.taskList.id) > -1
                        : _vm.selected
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.selected,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = _vm.taskList.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.selected = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.selected = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.selected = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      ref: "input",
                      staticClass: "truncate px-2",
                      attrs: {
                        contenteditable: true,
                        id: _vm.taskList.name,
                        title: _vm.taskList.name
                      },
                      on: {
                        blur: function($event) {
                          return _vm.editName(
                            _vm.taskList.id,
                            _vm.taskList.name
                          )
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.taskList.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "icon-base",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editHidden,
                          expression: "editHidden"
                        }
                      ],
                      staticClass: "cursor-pointer inline-block",
                      attrs: {
                        viewBox: "0 0 1080 1080",
                        width: "25",
                        height: "25",
                        "icon-name": "editar"
                      },
                      nativeOn: {
                        click: function($event) {
                          return _vm.focusName($event)
                        }
                      }
                    },
                    [_c("Editar")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "relative inline-block",
                      on: {
                        click: function($event) {
                          _vm.closingTabsMessage(), _vm.getmessages()
                        }
                      }
                    },
                    [
                      _c(
                        "icon-base",
                        {
                          attrs: {
                            iconColor: _vm.color,
                            width: "25",
                            height: "25",
                            "icon-name": "message"
                          }
                        },
                        [_c("Message")],
                        1
                      ),
                      _vm._v(" "),
                      _vm.numbermessage != 0
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.numbermessage) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-20  hover:text-indigo-600 border border-white align-middle px-2",
              on: { click: _vm.showSubtask }
            },
            [
              _c(
                "span",
                { staticClass: "flex justify-center pt-2" },
                [
                  _c(
                    "icon-base",
                    {
                      attrs: {
                        iconColor: _vm.color,
                        width: "25",
                        height: "25",
                        "icon-name": "message"
                      }
                    },
                    [_c("List")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.numberSubtask != 0
                    ? _c(
                        "span",
                        {
                          staticClass:
                            "inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
                        },
                        [_vm._v(_vm._s(_vm.numberSubtask))]
                      )
                    : _vm._e()
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-32 hover:text-indigo-600 border border-white group",
              on: {
                mouseover: function($event) {
                  _vm.addUser = true
                },
                mouseleave: function($event) {
                  _vm.addUser = false
                }
              }
            },
            [
              _c("div", { staticClass: "flex flex-row flew-nowrap" }, [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "popover",
                        rawName: "v-popover.bottom",
                        value: { name: _vm.taskList.id },
                        expression: "{name: taskList.id}",
                        modifiers: { bottom: true }
                      }
                    ],
                    staticClass:
                      "rounded-full p-2 focus:outline-none transition duration-200",
                    class: [_vm.addUser ? "visible" : "invisible"]
                  },
                  [
                    _c(
                      "icon-base",
                      {
                        staticClass: "cursor-pointer",
                        attrs: {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 512 512",
                          "icon-name": "add"
                        }
                      },
                      [_c("Add")],
                      1
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
                        rawName: "v-popover.bottom",
                        value: { name: "resp" + _vm.taskList.id },
                        expression: "{name: 'resp' + taskList.id}",
                        modifiers: { bottom: true }
                      }
                    ],
                    staticClass: "flex flex-row"
                  },
                  [
                    _vm._l(_vm.taskList.users, function(items, index) {
                      return _c(
                        "div",
                        { key: items.id, staticClass: "flex flex-row" },
                        [
                          index > 1
                            ? _c("div")
                            : _c("div", [
                                _c("img", {
                                  staticClass: "w-8 h-8 rounded-full ",
                                  attrs: {
                                    title: _vm.searchForUsersName(
                                      items.id_user
                                    ),
                                    src: "/assets/images/users/" + items.id_user
                                  }
                                })
                              ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.numberResponsable > 2
                      ? _c("div", { staticClass: "mx-2" }, [
                          _vm._v(
                            "\n                                    ...\n                                "
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-32 hover:text-indigo-600 border border-white align-middle",
              on: {
                mouseover: function($event) {
                  _vm.act = true
                },
                mouseleave: function($event) {
                  _vm.act = false
                }
              }
            },
            [
              _c("input", {
                ref: "file",
                staticClass: "hidden",
                attrs: { type: "file", id: "files", name: "files" },
                on: { change: _vm.update }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-center flex-col" },
                [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.act,
                          expression: "act"
                        }
                      ],
                      staticClass:
                        "rounded-full p-2 focus:outline-none transition duration-200",
                      on: {
                        click: function($event) {
                          return _vm.browse()
                        }
                      }
                    },
                    [
                      _c(
                        "icon-base",
                        {
                          staticClass: "cursor-pointer",
                          attrs: {
                            width: "25",
                            height: "25",
                            viewBox: "0 0 512 512",
                            "icon-name": "add"
                          }
                        },
                        [_c("Add")],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.taskList.files, function(items) {
                    return _c(
                      "div",
                      { key: items.id, staticClass: "flex flex-col" },
                      [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: items.name,
                                expression: "items.name"
                              }
                            ],
                            staticClass: "flex",
                            on: {
                              mouseover: function($event) {
                                _vm.deletebutton = true
                              },
                              mouseleave: function($event) {
                                _vm.deletebutton = false
                              }
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "/assets/files/" + items.name,
                                  download: "file"
                                }
                              },
                              [
                                _c(
                                  "icon-base",
                                  {
                                    attrs: {
                                      viewBox: "0 0 384 512",
                                      width: "25",
                                      "icon-name": items.name,
                                      height: "25"
                                    }
                                  },
                                  [_c("File")],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.deletebutton,
                                    expression: "deletebutton"
                                  }
                                ],
                                staticClass:
                                  "rounded-full w-5 h-5 bg-white text-black self-center",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteFile(items.name)
                                  }
                                }
                              },
                              [_vm._v("X")]
                            )
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "prioridad w-52 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _vm.taskList.tags[0].id_type == 1
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "popover",
                          rawName: "v-popover:prioridad.bottom",
                          arg: "prioridad",
                          modifiers: { bottom: true }
                        }
                      ],
                      staticClass: "h-full align-middle",
                      on: {
                        click: function($event) {
                          _vm.setID = _vm.taskList.id
                        }
                      }
                    },
                    [
                      _c("Tag", {
                        attrs: { tagName: _vm.taskList.tags[0].name }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-52 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _vm.taskList.tags[1].id_type == "2"
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "popover",
                          rawName: "v-popover:autorizacion.bottom",
                          arg: "autorizacion",
                          modifiers: { bottom: true }
                        }
                      ],
                      staticClass: "h-full align-middle",
                      on: {
                        click: function($event) {
                          _vm.setID = _vm.taskList.id
                        }
                      }
                    },
                    [
                      _c("Tag", {
                        attrs: { tagName: _vm.taskList.tags[1].name }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-52 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _vm.taskList.tags[2].id_type == "3"
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "popover",
                          rawName: "v-popover:haciendose.bottom",
                          arg: "haciendose",
                          modifiers: { bottom: true }
                        }
                      ],
                      staticClass: "h-full",
                      on: {
                        click: function($event) {
                          _vm.setID = _vm.taskList.id
                        }
                      }
                    },
                    [
                      _c("Tag", {
                        attrs: { tagName: _vm.taskList.tags[2].name }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-52 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _vm.taskList.tags[3].id_type == "4"
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "popover",
                          rawName: "v-popover:entregado.bottom",
                          arg: "entregado",
                          modifiers: { bottom: true }
                        }
                      ],
                      staticClass: "h-full",
                      on: {
                        click: function($event) {
                          _vm.setID = _vm.taskList.id
                        }
                      }
                    },
                    [
                      _c("Tag", {
                        attrs: { tagName: _vm.taskList.tags[3].name }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "w-80 border border-white items-center align-middle"
            },
            [
              _c(
                "div",
                { staticClass: "items-center align-middle pt-2" },
                [
                  _c("DatePicker", {
                    attrs: {
                      date: _vm.taskList.time_limit,
                      dateend: _vm.taskList.time_limit_end,
                      taskStatus: _vm.taskList.id_status,
                      id_task: _vm.taskList.id
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-32 hover:text-indigo-600 border border-white items-center align-middle"
            },
            [
              _vm.taskList.progress == "0"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-1 bg-white rounded inline-block"
                    }),
                    _vm._v("0%\n                        ")
                  ])
                : _vm.taskList.progress <= "10"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-1/5 bg-white rounded inline-block"
                    }),
                    _vm._v("10%\n                        ")
                  ])
                : _vm.taskList.progress <= "30"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-2/6 bg-white rounded inline-block"
                    }),
                    _vm._v("30%\n                        ")
                  ])
                : _vm.taskList.progress <= "40"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-2/5 bg-white rounded inline-block"
                    }),
                    _vm._v("40%\n                        ")
                  ])
                : _vm.taskList.progress <= "60"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-3/5 bg-white rounded inline-block"
                    }),
                    _vm._v("60%\n                        ")
                  ])
                : _vm.taskList.progress <= "70"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-4/6 bg-white rounded inline-block"
                    }),
                    _vm._v("70%\n                        ")
                  ])
                : _vm.taskList.progress <= "90"
                ? _c("div", { staticClass: "flex justify-between pt-2 pl-2" }, [
                    _c("div", {
                      staticClass: "w-11/12 bg-white rounded inline-block"
                    }),
                    _vm._v("90%\n                        ")
                  ])
                : _c("div", { staticClass: "flex pt-2 px-2" }, [
                    _c("div", {
                      staticClass: "w-full bg-white rounded inline-block mx-2"
                    }),
                    _vm._v("100%\n                        ")
                  ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-32 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _c(
                "span",
                {
                  staticClass: "flex justify-center pt-2",
                  on: {
                    click: function($event) {
                      return _vm.play(_vm.taskList.id)
                    }
                  }
                },
                [
                  _c(
                    "icon-base",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.taskList.pause == 1,
                          expression: "taskList.pause == 1"
                        }
                      ],
                      attrs: {
                        iconColor: _vm.color,
                        width: "25",
                        height: "25",
                        "icon-name": "Play"
                      }
                    },
                    [_c("Play")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "icon-base",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.taskList.pause == 0,
                          expression: "taskList.pause == 0"
                        }
                      ],
                      attrs: {
                        iconColor: _vm.color,
                        width: "25",
                        height: "25",
                        "icon-name": "Pause"
                      }
                    },
                    [_c("Pause")],
                    1
                  ),
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.tiempo) +
                      "\n                        "
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
                      rawName: "v-popover.bottom",
                      value: { name: "tiempo" + _vm.taskList.id },
                      expression: "{name: 'tiempo' + taskList.id}",
                      modifiers: { bottom: true }
                    }
                  ]
                },
                [
                  _c(
                    "icon-base",
                    {
                      staticClass: "cursor-pointer",
                      attrs: {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 512 512",
                        "icon-name": "add"
                      }
                    },
                    [_c("Add")],
                    1
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-80 hover:text-indigo-600 border border-white align-middle "
            },
            [
              _c(
                "span",
                { staticClass: "flex justify-center pt-2" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "profileUser",
                          params: { idUser: _vm.taskList.id_user_update }
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "rounded-full w-8 h-8 m-2",
                        attrs: {
                          src:
                            "/assets/images/users/" +
                            _vm.taskList.id_user_update
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "inline-block px-2" }, [
                    _vm._v(_vm._s(_vm.taskList.updated_at))
                  ])
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-32 pt-2 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _c("span", { staticClass: "flex justify-center" }, [
                _vm._v(_vm._s(_vm.taskList.id) + " ")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-52 hover:text-indigo-600 border border-white align-middle"
            },
            [
              _c("span", { staticClass: "flex justify-center" }),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.taskList.email) +
                  "             \n                    "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-32 flex justify-center items-center hover:text-indigo-600 border border-white align-middle",
              on: { click: _vm.show }
            },
            [
              _c(
                "icon-base",
                {
                  attrs: {
                    viewBox: "0 0 512 512",
                    width: "25",
                    height: "25",
                    "icon-name": "trash"
                  }
                },
                [_c("Trash")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.taskList.id == _vm.setID
            ? _c("Popper", {
                attrs: { name: "prioridad", taskListId: _vm.setID },
                on: { click: _vm.reset }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.taskList.id == _vm.setID
            ? _c("Popper", {
                attrs: { name: "autorizacion", taskListId: _vm.setID },
                on: { click: _vm.reset }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.taskList.id == _vm.setID
            ? _c("Popper", {
                attrs: { name: "haciendose", taskListId: _vm.setID },
                on: { click: _vm.reset }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.taskList.id == _vm.setID
            ? _c("Popper", {
                attrs: { name: "entregado", taskListId: _vm.setID },
                on: { click: _vm.reset }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("modal", { attrs: { name: _vm.taskList.id } }, [
            _c("div", [
              _vm._v(
                "\n                Desea Eliminar la tarea\n                "
              ),
              _c("div", { staticClass: "flex flex-row justify-evenly mt-10" }, [
                _c(
                  "button",
                  {
                    staticClass: "bg-green-500 text-white w-10",
                    on: { click: _vm.deleteTask }
                  },
                  [_vm._v("SI")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "bg-red-500 text-white w-10",
                    on: { click: _vm.hide }
                  },
                  [_vm._v("NO")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "popover",
            { attrs: { name: _vm.taskList.id, width: 450 } },
            _vm._l(_vm.responsable, function(user) {
              return _c("div", { key: user.id }, [
                !_vm.searchForManager(user.id_user)
                  ? _c("div", [
                      _vm.searchForUsersName(user.id_user)
                        ? _c(
                            "div",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.addManager(
                                    user.id_user,
                                    _vm.taskList.id
                                  )
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "rounded-full w-8 h-8",
                                attrs: {
                                  title: _vm.searchForUsersName(user.id_user),
                                  src: "/assets/images/users/" + user.id_user
                                }
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.searchForUsersName(user.id_user)) +
                                  "\n                       "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "popover",
            { attrs: { name: "resp" + _vm.taskList.id, width: 450 } },
            _vm._l(_vm.responsable, function(user) {
              return _c("div", { key: user.id }, [
                _vm.searchForManager(user.id_user)
                  ? _c("div", { staticClass: "flex flex-row" }, [
                      _c("img", {
                        staticClass: "rounded-full w-8 h-8",
                        attrs: {
                          title: _vm.searchForUsersName(user.id_user),
                          src: "/assets/images/users/" + user.id_user
                        }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.searchForUsersName(user.id_user)))
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "rounded-full w-5 h-5 bg-white text-black self-center",
                          on: {
                            click: function($event) {
                              return _vm.deleteManager(
                                user.id_user,
                                _vm.taskList.id
                              )
                            }
                          }
                        },
                        [_vm._v("X")]
                      )
                    ])
                  : _vm._e()
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "popover",
            { attrs: { name: "tiempo" + _vm.taskList.id, width: 150 } },
            [
              _c("div", { staticClass: "items-center" }, [
                _vm._v(
                  "\n               Añadir sesión manualmente\n               "
                ),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.horas,
                        expression: "horas"
                      }
                    ],
                    staticClass: "border border-dotted",
                    attrs: { type: "number", min: "00", max: "99" },
                    domProps: { value: _vm.horas },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.horas = $event.target.value
                      }
                    }
                  }),
                  _vm._v(":\n                   "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.minutos,
                        expression: "minutos"
                      }
                    ],
                    staticClass: "border border-dotted",
                    attrs: { type: "number", min: "00", max: "59" },
                    domProps: { value: _vm.minutos },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.minutos = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "rounded-lg bg-sideBar-primary text-white",
                    on: {
                      click: function($event) {
                        return _vm.setTime()
                      }
                    }
                  },
                  [_vm._v("ENVIAR")]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.showed
        ? _c(
            "div",
            { staticClass: "bg-white ml-16 mb-5" },
            [
              _c("SubTask"),
              _vm._v(" "),
              _vm._l(_vm.taskList.subtasks, function(subtask) {
                return _c("SubtaskList", {
                  key: subtask.id,
                  attrs: {
                    teamid: _vm.teamid,
                    subtask: subtask,
                    color: _vm.color,
                    colorSecondary: _vm.colorSecondary
                  }
                })
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showed,
                    expression: "showed"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nameSubtask,
                    expression: "nameSubtask"
                  }
                ],
                staticClass:
                  "border text-fontColor-primary bg-white w-full focus:outline-none focus:ring focus:border-blue-300",
                class: _vm.color,
                attrs: {
                  contenteditable: "true",
                  placeholder: "+ Nueva Subtarea"
                },
                domProps: { value: _vm.nameSubtask },
                on: {
                  change: function($event) {
                    return _vm.createSubtask(_vm.taskList.id)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nameSubtask = $event.target.value
                  }
                }
              })
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=template&id=ffc6412a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=template&id=ffc6412a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "board", staticStyle: { width: "3000px" } },
    [
      _c(
        "div",
        { staticClass: "w-full" },
        [
          _c(
            "div",
            { staticClass: "flex bg-white", staticStyle: { width: "3000px" } },
            [
              _c("div", { staticClass: "flex flex-row justify-around " }, [
                _c("div", { staticClass: "w-80" }, [
                  _c(
                    "h1",
                    { staticClass: "flex cursor-pointer font-semibold" },
                    [
                      _c(
                        "div",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.active = !_vm.active
                            }
                          }
                        },
                        [
                          _c(
                            "icon-base",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.active,
                                  expression: "active"
                                }
                              ],
                              attrs: {
                                viewBox: "0 0 512 512",
                                width: "25",
                                height: "25",
                                "icon-name": "expand"
                              }
                            },
                            [_c("Expand")],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "icon-base",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.active,
                                  expression: "!active"
                                }
                              ],
                              attrs: {
                                viewBox: "0 0 24 24",
                                width: "25",
                                height: "25",
                                "icon-name": "collapse"
                              }
                            },
                            [_c("Collap")],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-2xl" }, [
                        _vm._v(_vm._s(_vm.status))
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "mx-6",
                          on: {
                            click: function($event) {
                              _vm.openMenu = !_vm.openMenu
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                        ...\n                                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.openMenu
                        ? _c("div", [
                            _c("h1", { staticClass: "mx-2" }, [
                              _vm._v("Seleccionar todas "),
                              _c("input", {
                                staticClass: "mx-2",
                                attrs: { type: "checkbox" },
                                on: {
                                  click: function($event) {
                                    return _vm.check(_vm.status)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("button", { on: { click: _vm.showStore } }, [
                              _vm._v("Archivar Seleccionadas")
                            ]),
                            _vm._v(" "),
                            _c("button", { on: { click: _vm.showModal } }, [
                              _vm._v("Eliminar Seleccionadas")
                            ])
                          ])
                        : _vm._e()
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "w-20 text-black text-center text-fontColor font-semibold"
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-32 text-black text-center text-fontColor font-semibold"
                  },
                  [_vm._v("Responsable")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-32 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Archivos")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-52 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Prioridad")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-52 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Autorización")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-52 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Haciéndose")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-52 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Entregado")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-80 text-black text-center font-fontColor font-semibold cursor-pointer",
                    on: { click: _vm.sort }
                  },
                  [_vm._v(" \t↨ Plazo")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-32 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Progreso")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-32 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Tiempos")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-80 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Última actualización")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-32 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("ID")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-50 text-black text-center font-fontColor font-semibold"
                  },
                  [_vm._v("Correo para avisos")]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "w-32 text-black text-center font-fontColor font-semibold"
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "draggable",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.active,
                  expression: "active"
                }
              ],
              attrs: {
                list: _vm.filterTask,
                group: "task",
                id: _vm.taskStatus
              },
              on: { end: _vm.onEnd }
            },
            _vm._l(_vm.filterTask, function(items) {
              return _c("TaskList", {
                key: items.id,
                attrs: {
                  taskStatus: _vm.status,
                  id: items.id,
                  teamid: _vm.boardTeamID,
                  draggable: true,
                  taskList: items,
                  responsable: _vm.responsable,
                  tagsList: _vm.tagsList,
                  usuarios: _vm.usuarios,
                  mentionList: _vm.mentionList,
                  numberResponsable: items.users.length,
                  color: _vm.color,
                  colorSecondary: _vm.colorSecondary
                },
                on: {
                  change: function($event) {
                    return _vm.statuschange(items.id)
                  }
                }
              })
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { width: "2850px" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.content,
              expression: "content"
            }
          ],
          staticClass: "border text-fontColor-primary w-full",
          attrs: {
            contenteditable: "true",
            id: _vm.taskStatus,
            placeholder: _vm.placeholder
          },
          domProps: { value: _vm.content },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.onUpdate($event)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.content = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("button", { on: { click: _vm.onUpdate } }, [_vm._v("AGREGAR")])
      ]),
      _vm._v(" "),
      _c("modal", { staticClass: "h-30", attrs: { name: _vm.status } }, [
        _c("div", [
          _vm._v("\n               ¿ Desea "),
          _c("span", { staticClass: "font-bold" }, [_vm._v("eliminar")]),
          _vm._v(
            "\n                las tareas seleccionadas ?\n                "
          ),
          _c("div", { staticClass: "flex flex-row justify-evenly mt-10" }, [
            _c(
              "button",
              {
                staticClass: "bg-green-500 text-white w-10",
                on: {
                  click: function($event) {
                    return _vm.deleteSelectedTask(_vm.status)
                  }
                }
              },
              [_vm._v("SI")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "bg-red-500 text-white w-10",
                on: { click: _vm.hide }
              },
              [_vm._v("NO")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { staticClass: "h-24", attrs: { name: "store" + _vm.status } },
        [
          _c("div", [
            _vm._v("\n               ¿ Desea "),
            _c("span", { staticClass: "font-bold" }, [_vm._v("archivar")]),
            _vm._v(" las tareas seleccionadas ?\n                "),
            _c("div", { staticClass: "flex flex-row justify-evenly mt-10" }, [
              _c(
                "button",
                {
                  staticClass: "bg-green-500 text-white w-10",
                  on: {
                    click: function($event) {
                      return _vm.storeTask(_vm.status)
                    }
                  }
                },
                [_vm._v("SI")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "bg-red-500 text-white w-10",
                  on: { click: _vm.hide }
                },
                [_vm._v("NO")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=template&id=23b68fea&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=template&id=23b68fea& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-white text-center align-middle" },
    [
      _vm.name == "prioridad"
        ? _c(
            "popover",
            { attrs: { name: _vm.name, width: 400, id: _vm.taskListId } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "tags-container text-center w-96 max-h-96 flex flex-wrap items-center cursor-default"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-normal text-center w-24 h-12 m-4 align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("10")
                        }
                      }
                    },
                    [_vm._v("NORMAL ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-inminente text-center w-24 h-12 m-4 align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("12")
                        }
                      }
                    },
                    [_vm._v("INMINENTE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-paso w-24 text-center h-12 m-4 align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("1")
                        }
                      }
                    },
                    [_vm._v("PASO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-solicitadomanuel text-center w-24 h-12 m-4 align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("20")
                        }
                      }
                    },
                    [_vm._v("SOLICITADO MANUEL")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-urgente w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("106")
                        }
                      }
                    },
                    [_vm._v("URGENTE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-vidaomuerte w-24 h-12 text-center m-4 align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("5")
                        }
                      }
                    },
                    [_vm._v("VIDA O MUERTE")]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.name == "autorizacion"
        ? _c(
            "popover",
            { attrs: { name: _vm.name, width: 400, id: _vm.taskListId } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("2")
                        }
                      }
                    },
                    [_vm._v("PASO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("134")
                        }
                      }
                    },
                    [_vm._v("LISTO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-solicitada w-24 h-12 text-center m-4 align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("123")
                        }
                      }
                    },
                    [_vm._v("SOLICITADA")]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.name == "haciendose"
        ? _c(
            "popover",
            { attrs: { name: _vm.name, width: 400, id: _vm.taskListId } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("3")
                        }
                      }
                    },
                    [_vm._v("PASO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-estancado w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("120")
                        }
                      }
                    },
                    [_vm._v("ESTANCADO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-proceso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("116")
                        }
                      }
                    },
                    [_vm._v("EN PROCESO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("136")
                        }
                      }
                    },
                    [_vm._v("LISTO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-info w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("128")
                        }
                      }
                    },
                    [_vm._v("+INFO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-script w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("132")
                        }
                      }
                    },
                    [_vm._v("SCRIPT")]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.name == "entregado"
        ? _c(
            "popover",
            { attrs: { name: _vm.name, width: 400, id: _vm.taskListId } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("4")
                        }
                      }
                    },
                    [_vm._v("PASO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("135")
                        }
                      }
                    },
                    [_vm._v("LISTO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-proceso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.tagChange("117")
                        }
                      }
                    },
                    [_vm._v("EN PROCESO")]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.name == "subtag"
        ? _c(
            "popover",
            { attrs: { name: _vm.name, width: 400, id: _vm.subtaskID } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.subtagChange("1")
                        }
                      }
                    },
                    [_vm._v("PASO ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-info w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.subtagChange("2")
                        }
                      }
                    },
                    [_vm._v("+INFO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.subtagChange("3")
                        }
                      }
                    },
                    [_vm._v("LISTO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-proceso w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.subtagChange("4")
                        }
                      }
                    },
                    [_vm._v("EN PROCESO")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-tags-estancadi w-24 h-12 m-4 text-center align-middle cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.subtagChange("5")
                        }
                      }
                    },
                    [_vm._v("ESTANCADO")]
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=template&id=09681668&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=template&id=09681668& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "h-full align-middle items-center text-center text-fontColor-primary "
    },
    [
      _vm.tagName == "Paso"
        ? _c("h1", { staticClass: "h-full bg-tags-paso align-middle pt-4 " }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Normal"
        ? _c("h1", { staticClass: "h-full bg-tags-normal pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Urgente"
        ? _c("h1", { staticClass: "h-full bg-tags-urgente pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Inminente"
        ? _c("h1", { staticClass: "h-full bg-tags-inminente pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Bajo"
        ? _c("h1", { staticClass: "h-full bg-tags-proceso  pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Vida o muerte"
        ? _c(
            "h1",
            { staticClass: "h-full bg-tags-vidaomuerte text-white pt-4" },
            [_vm._v(_vm._s(_vm.tagName))]
          )
        : _vm.tagName == "Script"
        ? _c("h1", { staticClass: "h-full bg-tags-script  pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "+Info"
        ? _c("h1", { staticClass: "h-full bg-tags-info pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "En proceso"
        ? _c("h1", { staticClass: "h-full bg-tags-proceso  pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Estancado"
        ? _c("h1", { staticClass: "h-full bg-tags-estancado  pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Listo"
        ? _c("h1", { staticClass: "h-full bg-tags-normal  pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _vm.tagName == "Solicitada"
        ? _c("h1", { staticClass: "h-full bg-tags-solicitada  pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
        : _c("h1", { staticClass: "h-full bg-tags-solicitadomanuel pt-4" }, [
            _vm._v(_vm._s(_vm.tagName))
          ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=template&id=d8198bd0&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=template&id=d8198bd0& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex flex-col m-10 text-fontColor-primary" },
    [
      _c(
        "div",
        { staticClass: "header h-16 flex  justify-evenly items-center " },
        [
          _c("span", [
            _c(
              "span",
              { staticClass: "flex flex-row text-4xl" },
              [
                _c(
                  "icon-base",
                  {
                    attrs: {
                      iconColor: "#4D4D4D",
                      viewBox: "0 0 653.33 648.33",
                      width: "40",
                      height: "40",
                      "icon-name": "stored"
                    }
                  },
                  [_c("Stored")],
                  1
                ),
                _vm._v(" "),
                _c("h1", [_vm._v("Tareas archivadas")]),
                _vm._v(" "),
                _c("h1", { staticClass: "font-bold" }, [
                  _vm._v("/" + _vm._s(_vm.boardName))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("h2", { staticClass: "italic text-base mt-5" }, [
              _vm._v(
                "Las tareas que ya no uses se guardarán aquí hasta que las vuelvas a necesitar"
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex" }, [
            _c(
              "div",
              { staticClass: "class-icon flex px-4 cursor-pointer" },
              [
                _c(
                  "icon-base",
                  {
                    attrs: {
                      iconColor: "#4D4D4D",
                      viewBox: "0 0 653.33 648.33",
                      width: "25",
                      height: "25",
                      "icon-name": "filter"
                    }
                  },
                  [_c("Filtro")],
                  1
                ),
                _vm._v(" "),
                _vm.fecha
                  ? _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "popover",
                            rawName: "v-popover:filter.bottom",
                            arg: "filter",
                            modifiers: { bottom: true }
                          }
                        ]
                      },
                      [_vm._v("Fecha")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.fecha
                  ? _c("small", [
                      _vm._v(
                        "La búsqueda por fecha debe hacerse en formato yyyy-mm-dd"
                      )
                    ])
                  : _vm.user
                  ? _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "popover",
                            rawName: "v-popover:filter.bottom",
                            arg: "filter",
                            modifiers: { bottom: true }
                          }
                        ]
                      },
                      [_vm._v("Usuario")]
                    )
                  : _vm.tarea
                  ? _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "popover",
                            rawName: "v-popover:filter.bottom",
                            arg: "filter",
                            modifiers: { bottom: true }
                          }
                        ]
                      },
                      [_vm._v("Tarea")]
                    )
                  : _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "popover",
                            rawName: "v-popover:filter.bottom",
                            arg: "filter",
                            modifiers: { bottom: true }
                          }
                        ]
                      },
                      [_vm._v("Filtro ▼")]
                    )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  " relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "absolute inset-y-0 left-0 flex items-center pl-2"
                  },
                  [
                    _c(
                      "icon-base",
                      {
                        attrs: {
                          iconColor: "#4D4D4D",
                          width: "15",
                          height: "15",
                          "icon-name": "search"
                        }
                      },
                      [_c("Search")],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass:
                    "pl-10 rounded-lg z-0 focus:shadow focus:outline-none",
                  attrs: {
                    type: "search",
                    id: "search",
                    name: "email",
                    placeholder: "Buscar"
                  },
                  domProps: { value: _vm.search },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.filteredTask, function(items) {
        return _c(
          "div",
          {
            key: items.id,
            staticClass: "taskstored-content mt-10 flex flex-col "
          },
          [
            _c("div", {
              staticClass:
                "spacer bg-fontColor-primary justify-self-center self-center h-0.5 my-4 w-9/12"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-row justify-evenly p-5" }, [
              _c("div", [
                _c(
                  "div",
                  { staticClass: "flex flex-row justify-center items-center" },
                  [
                    _c("img", {
                      staticClass: "rounded-full w-14 h-14 mx-4",
                      attrs: {
                        title: _vm.searchForUsersName(items.id_user_update),
                        src: "/assets/images/users/" + items.id_user_update
                      }
                    }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.searchForUsersName(items.id_user_update)) +
                          "archivó el elemento \n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-bold" }, [
                      _vm._v(_vm._s(items.name))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n          " + _vm._s(items.updated_at) + "\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(0, true)
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c("popover", { attrs: { name: "filter", width: 250 } }, [
        _c(
          "div",
          {
            staticClass: "cursor-pointer hover:bg-blue-500 hover:text-white",
            on: { click: _vm.setFilterDate }
          },
          [_vm._v("\n            filtrar por fecha\n          ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "popover",
                rawName: "v-popover:users.bottom",
                arg: "users",
                modifiers: { bottom: true }
              }
            ],
            staticClass: "cursor-pointer hover:bg-blue-500 hover:text-white",
            on: { click: _vm.setFilterUser }
          },
          [_vm._v("\n            filtrar por usuario\n          ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "cursor-pointer hover:bg-blue-500 hover:text-white",
            on: { click: _vm.setFilterName }
          },
          [_vm._v("\n            filtrar por nombre de tarea\n          ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "cursor-pointer hover:bg-blue-500 hover:text-white",
            on: { click: _vm.setAllfalse }
          },
          [_vm._v("\n            X\n          ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "popover",
        { attrs: { name: "users", width: 150 } },
        [
          _vm._l(_vm.filteredTask, function(user) {
            return _c("div", { key: user.id, staticClass: "inline-block" }, [
              _c("img", {
                staticClass: "rounded-full cursor-pointer w-8 h-8 m-2",
                attrs: { src: "/assets/images/users/" + user.id_user_update },
                on: {
                  click: function($event) {
                    return _vm.filterMember(user.id_user_update)
                  }
                }
              }),
              _vm._v(
                "\n              " +
                  _vm._s(_vm.searchForUsersName(user.id_user_update)) +
                  "\n          "
              )
            ])
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "rounded-full w-5 h-5 bg-white text-black self-center",
              on: {
                click: function($event) {
                  return _vm.filterMember(0)
                }
              }
            },
            [_vm._v("\n            X\n          ")]
          )
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass:
            "border rounded-xl bg-sideBar-primary text-white self-end py-2 px-4"
        },
        [_vm._v(" Restaurar ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=template&id=a76a9ed4&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=template&id=a76a9ed4& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _vm.boardName == "Marketing"
      ? _c(
          "div",
          {
            staticClass:
              "flex fixed text-4xl text-boardNames-marketing capitalize ml-20 pt-10"
          },
          [_vm._v("\n      " + _vm._s(_vm.boardName) + "\n      ")]
        )
      : _vm.boardName == "Plataformas"
      ? _c(
          "div",
          {
            staticClass:
              "flex fixed text-4xl capitalize text-boardNames-plataformas ml-20 pt-10"
          },
          [_vm._v("\n          " + _vm._s(_vm.boardName) + "\n      ")]
        )
      : _vm.boardName == "Sistemas"
      ? _c(
          "div",
          {
            staticClass:
              "flex fixed text-4xl text-boardNames-sistemas capitalize ml-20 pt-10"
          },
          [_vm._v("\n          " + _vm._s(_vm.boardName) + "\n      ")]
        )
      : _c(
          "div",
          {
            staticClass:
              "flex fixed text-4xl text-boardNames-programacion capitalize ml-20 pt-10"
          },
          [_vm._v("\n          " + _vm._s(_vm.boardName) + "\n      ")]
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=template&id=e185cfb2&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=template&id=e185cfb2& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex flex-row mx-4 justify-center" },
    [
      _c(
        "div",
        {
          class: [
            _vm.taskStatus == 1
              ? "bg-block-working-secondary"
              : _vm.taskStatus == 3
              ? "bg-block-pending-secondary"
              : "bg-block-complete-secondary",
            " rounded-xl p-2 text-fontColor text-center placeholder-white placeholder-opacity-50 cursor-pointer"
          ],
          on: { click: _vm.focusDatepicker }
        },
        [
          _vm.fechaInicioFormateada == _vm.fechaFinalFormateada
            ? _c("div", [
                _vm._v(
                  "\n           " +
                    _vm._s(_vm.fechaFinalFormateada) +
                    "\n       "
                )
              ])
            : _c("div", [
                _vm._v(
                  "\n           " +
                    _vm._s(_vm.fechaInicioFormateada) +
                    " - " +
                    _vm._s(_vm.fechaFinalFormateada) +
                    "\n       "
                )
              ])
        ]
      ),
      _vm._v(" "),
      _c("date-picker", {
        directives: [
          {
            name: "popover",
            rawName: "v-popover.top",
            value: { name: "Plazo" + _vm.id_task },
            expression: "{name: 'Plazo' + id_task}",
            modifiers: { top: true }
          }
        ],
        attrs: {
          "same-date-format": _vm.sameDateformat,
          initialDates: _vm.dates1,
          format: _vm.format,
          language: "es",
          "switch-button-initial": true,
          "apply-button-label": "Añadir",
          "show-helper-buttons": false,
          "date-input": _vm.dateInput,
          "is-monday-first": true
        },
        on: { "date-applied": _vm.datepicked }
      }),
      _vm._v(" "),
      _c(
        "popover",
        { attrs: { event: "hover", name: "Plazo" + _vm.id_task, width: 150 } },
        [
          _vm.outDate
            ? _c("div", [_vm._v("Venció hace " + _vm._s(this.days) + " días")])
            : _c("div", [
                _vm._v(
                  "\n            Faltan " +
                    _vm._s(this.days) +
                    " días\n        "
                )
              ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=template&id=66a76e26&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=template&id=66a76e26&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
        "items relative rounded-t bg-white text-black overflow-hidden shadow"
    },
    _vm._l(_vm.items, function(item, index) {
      return _c(
        "button",
        {
          key: index,
          staticClass: "item block w-full text-left bg-transparent",
          class: {
            "is-selected hover:bg-blue-300": index === _vm.selectedIndex
          },
          on: {
            click: function($event) {
              return _vm.selectItem(index)
            }
          }
        },
        [_vm._v("\n    " + _vm._s(item) + "\n  ")]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=template&id=7f499d9e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=template&id=7f499d9e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "slidein max-w-screen-sm p-2 fixed z-50 top-0 h-screen bg-white transition-all duration-200 ease-in-out shadow-2xl",
        class: [_vm.open ? "right-0" : "-right-full"]
      },
      [
        _c("div", { staticClass: "pulse_container" }, [
          _c("div", { staticClass: "flexible-header" }, [
            _c(
              "div",
              {
                staticClass:
                  "pulse-tittle flex my-5 align-middle justify-center justify-evenly"
              },
              [_c("span", [_vm._v(_vm._s(_vm.name))])]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "items-views" }, [
              _c("div", { staticClass: "items-view-bar-component" }, [
                _c(
                  "div",
                  {
                    staticClass: "items-view-list flex flex-row justify-around"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "items-view-list-items cursor-pointer mx-5 mb-1",
                        class: {
                          "text-sideBar-primary font-thin": _vm.openTab !== 1,
                          "text-sideBar-primary font-bold ": _vm.openTab === 1
                        },
                        on: {
                          click: function($event) {
                            return _vm.toggleTabs(1)
                          }
                        }
                      },
                      [_c("span", [_vm._v("Actualizaciones")])]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pulse_content" }, [
          _c("div", { staticClass: "tab" }, [
            _c("div", { staticClass: "new-post" }, [
              _c(
                "div",
                {
                  class: { hidden: _vm.openTab !== 1, block: _vm.openTab === 1 }
                },
                [
                  _c("div", { staticClass: "w-full h-full" }, [
                    _c(
                      "div",
                      [
                        _c("tiptap", {
                          attrs: { mentionList: _vm.mentionList },
                          model: {
                            value: _vm.textContent,
                            callback: function($$v) {
                              _vm.textContent = $$v
                            },
                            expression: "textContent"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex justify-end" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "h-2/6 border rounded-xl py-2 px-4 bg-sideBar-primary text-white mb-5 text-base self-end ",
                          attrs: { type: "submit", value: "submit" },
                          on: {
                            click: function($event) {
                              return _vm.submitMessage(_vm.textContent, _vm.id)
                            }
                          }
                        },
                        [_vm._v("ENVIAR ")]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "comments-panel h-96 overflow-y-scroll mt-5" },
          [
            _c(
              "div",
              { staticClass: "comment-section " },
              [
                _c("div", {
                  staticClass: "spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"
                }),
                _vm._v(" "),
                _vm._l(_vm.message, function(item) {
                  return _c(
                    "div",
                    {
                      key: item.id,
                      staticClass:
                        "text-fontColor-primary min-h-1/5 border mx-2 my-2 rounded-xl "
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "head-message-section m-auto" },
                        _vm._l(_vm.users, function(user) {
                          return _c("div", { key: user.id }, [
                            user.id == item.id_user
                              ? _c(
                                  "div",
                                  { staticClass: "flex" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "profileUser",
                                            params: { idUser: item.id_user }
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "h-10 w-10 rounded mx-3 mt-2",
                                          attrs: {
                                            src:
                                              "/assets/images/users/" +
                                              item.id_user
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    user.name
                                      ? _c("span", [_vm._v(_vm._s(user.name))])
                                      : _c("span", [_vm._v(_vm._s(user.email))])
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { "user-select": "none" } }, [
                        _c("div", {
                          staticClass: "message-section mb-2 mx-2",
                          staticStyle: {
                            "user-select": "text",
                            cursor: "text"
                          },
                          domProps: { innerHTML: _vm._s(item.message) }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          on: {
                            click: function($event) {
                              return _vm.deleteMsg(item.id, _vm.ID)
                            }
                          }
                        },
                        [
                          _c(
                            "icon-base",
                            {
                              staticClass: "cursor-pointer ml-auto",
                              attrs: {
                                viewBox: "0 0 512 512",
                                width: "25",
                                height: "25",
                                "icon-name": "trash"
                              }
                            },
                            [_c("Trash")],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "spacer bg-sideBar-primary w-11/12 h-0.5 my-40"
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "close-btn absolute top-0 left-0 m-4 text-xl",
            staticStyle: { "user-select": "none" },
            on: { click: _vm.closeSlidePanel }
          },
          [_vm._v(" X ")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubTask.vue?vue&type=template&id=dbbb69ac&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubTask.vue?vue&type=template&id=dbbb69ac& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "flex flex-row bg-white" }, [
      _c("div", { staticClass: "w-80 text-center text-black" }, [
        _vm._v("Subitems")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-24 text-center text-black" }),
      _vm._v(" "),
      _c("div", { staticClass: "w-52 text-center text-black" }, [
        _vm._v("Estado")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-52 text-center text-black" }, [
        _vm._v("Plazo")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-52 text-center text-black" }, [
        _vm._v("Tiempos")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-52 text-center text-black" }, [
        _vm._v("Última actualización")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: " text-black" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=template&id=44bbf3c8&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=template&id=44bbf3c8& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex flex-row text-black", class: _vm.colorSecondary },
    [
      _c("SlidePanel", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.opentab,
            expression: "opentab"
          }
        ],
        attrs: {
          name: _vm.subtask.name,
          id: _vm.subtask.id,
          message: _vm.messages,
          users: _vm.usuarios,
          task: false,
          opentab: _vm.opentab
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-80 hover:text-indigo-600 border border-white align-middle "
        },
        [
          _c(
            "span",
            {
              staticClass: "flex w-full justify-between",
              on: {
                click: function($event) {
                  return _vm.toggle(_vm.subtask.id, _vm.subtask.name)
                }
              }
            },
            [
              _c(
                "p",
                {
                  ref: "input",
                  staticClass: "truncate px-2",
                  attrs: {
                    contenteditable: true,
                    title: _vm.subtask.name,
                    id: "name" + _vm.subtask.id
                  },
                  on: {
                    blur: function($event) {
                      return _vm.editName(_vm.subtask.id)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.subtask.name))]
              ),
              _vm._v(" "),
              _c(
                "icon-base",
                {
                  staticClass: "cursor-pointer inline-block",
                  attrs: {
                    viewBox: "0 0 1080 1080",
                    width: "25",
                    height: "25",
                    "icon-name": "editar"
                  },
                  nativeOn: {
                    click: function($event) {
                      return _vm.focusName($event)
                    }
                  }
                },
                [_c("Editar")],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "p-2 cursor-pointer",
                  on: {
                    click: function($event) {
                      _vm.opentab = !_vm.opentab
                    }
                  }
                },
                [
                  _c(
                    "icon-base",
                    {
                      attrs: {
                        iconColor: _vm.color,
                        width: "25",
                        height: "25",
                        "icon-name": "message"
                      }
                    },
                    [_c("Message")],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-24 flex flex-row justify-evenly hover:text-indigo-600 border border-white",
          on: {
            mouseover: function($event) {
              _vm.addUser = true
            },
            mouseleave: function($event) {
              _vm.addUser = false
            }
          }
        },
        [
          _c(
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.addUser,
                  expression: "addUser"
                },
                {
                  name: "popover",
                  rawName: "v-popover.bottom",
                  value: { name: "responsable" + _vm.subtask.id },
                  expression: "{name: 'responsable' + subtask.id}",
                  modifiers: { bottom: true }
                }
              ],
              staticClass:
                "rounded-full p-2 focus:outline-none transition duration-200"
            },
            [
              _c(
                "icon-base",
                {
                  staticClass: "cursor-pointer",
                  attrs: {
                    width: "25",
                    height: "25",
                    viewBox: "0 0 512 512",
                    "icon-name": "add"
                  }
                },
                [_c("Add")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.subtask.users, function(items) {
            return _c(
              "div",
              {
                key: items.id,
                staticClass: "flex flex-row",
                on: {
                  mouseover: function($event) {
                    _vm.deletemanager = true
                  },
                  mouseleave: function($event) {
                    _vm.deletemanager = false
                  }
                }
              },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "profileUser",
                        params: { idUser: items.id_user }
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "rounded-full w-8 h-8 m-2",
                      attrs: { src: "/assets/images/users/" + items.id_user }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.deletemanager,
                        expression: "deletemanager"
                      }
                    ],
                    staticClass:
                      "rounded-full w-5 h-5 bg-white text-black self-center",
                    on: {
                      click: function($event) {
                        return _vm.deleteManager(items.id_user, _vm.subtask.id)
                      }
                    }
                  },
                  [_vm._v("X")]
                )
              ],
              1
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-52 border border-white align-middle cursor-pointer" },
        _vm._l(_vm.subtagsList.tags, function(subtag) {
          return _c("div", { key: subtag.id }, [
            _vm.subtask.id_subtag == subtag.id
              ? _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "popover",
                        rawName: "v-popover:subtag.bottom",
                        arg: "subtag",
                        modifiers: { bottom: true }
                      }
                    ],
                    on: {
                      click: function($event) {
                        _vm.setID = _vm.subtask.id
                      }
                    }
                  },
                  [_c("Tag", { attrs: { tagName: subtag.name } })],
                  1
                )
              : _vm._e()
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-52 border border-white align-middle" },
        [
          _c("DatePicker", {
            attrs: {
              date: _vm.subtask.time_limit,
              dateend: _vm.subtask.time_limit_end,
              taskStatus: _vm.subtask.id_status,
              id_task: _vm.subtask.id
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-52 hover:text-indigo-600 border border-white align-middle cursor-pointer",
          on: {
            click: function($event) {
              return _vm.play(_vm.subtask.id)
            }
          }
        },
        [
          _c(
            "span",
            { staticClass: "flex" },
            [
              _c(
                "icon-base",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.subtask.pause == 1,
                      expression: "subtask.pause == 1"
                    }
                  ],
                  attrs: {
                    iconColor: _vm.color,
                    width: "25",
                    height: "25",
                    "icon-name": "Play"
                  }
                },
                [_c("Play")],
                1
              ),
              _vm._v(" "),
              _c(
                "icon-base",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.subtask.pause == 0,
                      expression: "subtask.pause == 0"
                    }
                  ],
                  attrs: {
                    iconColor: _vm.color,
                    width: "25",
                    height: "25",
                    "icon-name": "Pause"
                  }
                },
                [_c("Pause")],
                1
              ),
              _vm._v(
                "\n                                " +
                  _vm._s(_vm.tiempo) +
                  "\n                            "
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
                  rawName: "v-popover.bottom",
                  value: { name: "tiempo" + _vm.subtask.id },
                  expression: "{name: 'tiempo' + subtask.id}",
                  modifiers: { bottom: true }
                }
              ]
            },
            [
              _c(
                "icon-base",
                {
                  staticClass: "cursor-pointer",
                  attrs: {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 512 512",
                    "icon-name": "add"
                  }
                },
                [_c("Add")],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-52 border border-white align-middle" }, [
        _c(
          "span",
          { staticClass: "flex justify-center pt-2" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "profileUser",
                    params: { idUser: _vm.subtask.id_user_update }
                  }
                }
              },
              [
                _c("img", {
                  staticClass: "w-5 h-5 ml-2 pt-2 rounded-full",
                  attrs: {
                    src: "/assets/images/users/" + _vm.subtask.id_user_update
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "relative inline-block px-2" }, [
              _vm._v(" " + _vm._s(_vm.subtask.updated_at))
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "  border border-white align-middle cursor-pointer",
          on: { click: _vm.showmodal }
        },
        [
          _c(
            "icon-base",
            {
              attrs: {
                viewBox: "0 0 512 512",
                width: "25",
                height: "25",
                "icon-name": "trash"
              }
            },
            [_c("Trash")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.subtask.id == _vm.setID
        ? _c("Popper", { attrs: { name: "subtag", subtaskID: _vm.setID } })
        : _vm._e(),
      _vm._v(" "),
      _c("modal", { attrs: { name: "deletesubTask" + _vm.subtask.id } }, [
        _c("div", [
          _vm._v(
            "\n                        Desea Eliminar la subtarea\n                        "
          ),
          _c("div", [
            _c("button", { on: { click: _vm.deletesubTask } }, [_vm._v("Si")])
          ]),
          _vm._v(" "),
          _c("div", [_c("button", { on: { click: _vm.hide } }, [_vm._v("NO")])])
        ])
      ]),
      _vm._v(" "),
      _c(
        "popover",
        { attrs: { name: "responsable" + _vm.subtask.id, width: 250 } },
        _vm._l(_vm.responsable, function(user) {
          return _c("div", { key: user.id }, [
            !_vm.searchForManager(user.id_user)
              ? _c("div", [
                  _vm.searchForUsersName(user.id_user)
                    ? _c(
                        "div",
                        {
                          on: {
                            click: function($event) {
                              return _vm.addManager(
                                user.id_user,
                                _vm.subtask.id
                              )
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "rounded-full w-8 h-8",
                            attrs: {
                              src: "/assets/images/users/" + user.id_user
                            }
                          }),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.searchForUsersName(user.id_user)) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              : _vm._e()
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "popover",
        { attrs: { name: "tiempo" + _vm.subtask.id, width: 150 } },
        [
          _c("div", { staticClass: "items-center" }, [
            _vm._v(
              "\n                    Añadir sesión manualmente\n                    "
            ),
            _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.horas,
                    expression: "horas"
                  }
                ],
                staticClass: "border border-dotted",
                attrs: { type: "number", min: "00", max: "99" },
                domProps: { value: _vm.horas },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.horas = $event.target.value
                  }
                }
              }),
              _vm._v(":\n                        "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.minutos,
                    expression: "minutos"
                  }
                ],
                staticClass: "border border-dotted",
                attrs: { type: "number", min: "00", max: "59" },
                domProps: { value: _vm.minutos },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.minutos = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "rounded-lg bg-sideBar-primary text-white",
                on: {
                  click: function($event) {
                    return _vm.setTime()
                  }
                }
              },
              [_vm._v("ENVIAR")]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=template&id=9852f25a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=template&id=9852f25a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _vm.editor
      ? _c(
          "div",
          { staticClass: "border-2 border-black rounded my-2" },
          [
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive("bold")
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                    }
                  }
                },
                [_vm._v("\n        bold\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "italic"
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                    }
                  }
                },
                [_vm._v("\n        italic\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "strike"
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                    }
                  }
                },
                [_vm._v("\n        strike\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "heading",
                      { level: 1 }
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: 1 })
                        .run()
                    }
                  }
                },
                [_vm._v("\n        h1\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "heading",
                      { level: 2 }
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: 2 })
                        .run()
                    }
                  }
                },
                [_vm._v("\n        h2\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "heading",
                      { level: 3 }
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: 3 })
                        .run()
                    }
                  }
                },
                [_vm._v("\n        h3\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "bulletList"
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleBulletList()
                        .run()
                    }
                  }
                },
                [_vm._v("\n        bullet list\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive(
                      "codeBlock"
                    )
                  },
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .toggleCodeBlock()
                        .run()
                    }
                  }
                },
                [_vm._v("\n        code block\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  on: {
                    click: function($event) {
                      _vm.editor
                        .chain()
                        .focus()
                        .redo()
                        .run()
                    }
                  }
                },
                [_vm._v("\n        redo\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  on: { click: _vm.browse }
                },
                [
                  _vm._v("\n        image\n        "),
                  _c("input", {
                    ref: "file",
                    staticClass: "hidden",
                    attrs: { type: "file" },
                    on: { change: _vm.addImage }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "border-2 border-black  rounded m-2 p-2",
                  class: {
                    "is-active bg-black text-white": _vm.editor.isActive("link")
                  },
                  on: { click: _vm.setLink }
                },
                [_vm._v("\n        link\n      ")]
              )
            ]),
            _vm._v(" "),
            _c("editor-content", {
              staticClass:
                "p-5 flex-auto overflow-y-auto overflow-x-hidden cursor-text",
              attrs: { editor: _vm.editor }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Department.vue?vue&type=template&id=60a5cd34&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Department.vue?vue&type=template&id=60a5cd34& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "h-full" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "h-full flex flex-col justify-around items-center" },
      [
        _c(
          "div",
          { staticClass: "flex flex-col justify-around items-center" },
          [
            _vm._v("\n          SOLICITUD DE TAREAS\n          "),
            _c("div", [
              _vm._v(
                "\n              Departamento de " +
                  _vm._s(_vm.departmentName) +
                  "\n          "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.teams, function(index) {
          return _c("div", { key: index.id }, [
            _c(
              "div",
              {
                staticClass: "flex flex-col justify-around items-center mt-10 "
              },
              [
                _c("div", {
                  staticClass: "spacer bg-gray-100 w-3/6 h-0.5 m-auto "
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-xl" }, [
                  _vm._v(_vm._s(index.name))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex flex-col justify-content items-center" },
                  [
                    _c("div", {}, [
                      _vm._v(
                        "\n                      ¿Tienes algún problema? \n                  "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        { staticClass: "bg-sideBar-primary text-white m-auto" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "incidencias",
                                  params: {
                                    teamName: index.name,
                                    departmentName: _vm.departmentName,
                                    teamID: index.id
                                  }
                                }
                              }
                            },
                            [_vm._v(" HAZ CLICK AQUI ")]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "h-auto flex flex-row justify-around bg-block-working-secondary"
      },
      [
        _c("div", [_vm._v("logo")]),
        _vm._v(" "),
        _c("button", [_vm._v("crear una incidencia")]),
        _vm._v(" "),
        _c("button", [_vm._v("incidencias abiertas")]),
        _vm._v(" "),
        _c("button", [_vm._v("incidencias cerrradas")]),
        _vm._v(" "),
        _c("div", [_vm._v("has accedido como ")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=template&id=016da322&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=template&id=016da322& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "h-screen " }, [
    _c("div", { staticClass: "content ml-20 mr-20" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "body-content mt-10" }, [
        _c(
          "div",
          {
            staticClass:
              "body-content-head flex flex-col justify-center items-center"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "body-department-name text-3xl text-sideBar-primary font-semibold"
              },
              [
                _vm._v(
                  "\n                     Departamento de " +
                    _vm._s(_vm.departmentName) +
                    "\n                 "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "body-team-name text-2xl text-fontColor-primary italic"
              },
              [
                _vm._v(
                  "\n                     " +
                    _vm._s(_vm.teamName) +
                    "\n                 "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "body-content-general" }, [
          _c("div", { staticClass: "body-subject my-10" }, [
            _c("div", { staticClass: " text-2xl text-sideBar-primary" }, [
              _vm._v("Asunto:")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.title,
                  expression: "title"
                }
              ],
              staticClass:
                "border rounded-full w-full h-10 outline-none pl-2 border-2 border-sideBar-primary",
              attrs: { name: "Asunto" },
              domProps: { value: _vm.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.title = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("small", [_vm._v("Descripción breve de la solicitud")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "body-email my-10" }, [
            _c("div", { staticClass: " text-2xl text-sideBar-primary" }, [
              _vm._v("Correo electrónico: ")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass:
                "border rounded-full w-full h-10 outline-none pl-2 border-2 border-sideBar-primary",
              attrs: { name: "Asunto" },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("small", [
              _vm._v(
                "Correo electrónico para los avisos automáticos sobre esta tarea."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "body-message" }, [
            _c("div", { staticClass: " text-2xl text-sideBar-primary" }, [
              _vm._v("Mensaje: ")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.message,
                  expression: "message"
                }
              ],
              staticClass:
                "border rounded-3xl w-full h-32 outline-none pt-2 pl-3 border-2 border-sideBar-primary",
              attrs: { name: "Asunto" },
              domProps: { value: _vm.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.message = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("small", [_vm._v("Descripción detallada de la solicitud")])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { clasS: "body-adjunto my-10" } }, [
            _c("div", { staticClass: " text-2xl text-sideBar-primary" }, [
              _vm._v("Adjunto: ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "border flex flex-row rounded-full w-full h-10 align-middle",
                on: { click: _vm.fakeClick }
              },
              [
                _c("div", { staticClass: "px-4 pt-2 w-full" }, [
                  _vm._v("Seleccionar un archivo ..." + _vm._s(_vm.file))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "border float-right rounded-r-full bg-gray-300 text-sideBar-primary w-20 h-10"
                  },
                  [
                    _vm._v(
                      "\n                              Examinar\n                              "
                    ),
                    _c("input", {
                      staticClass: "hidden w-20 h-10",
                      attrs: { name: "Asunto", id: "realclick", type: "file" },
                      on: { change: _vm.fileIncident }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("small", [
              _vm._v(
                "Archivo adjunto relevante para la solicitud, si fuese necesario."
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-sideBar-primary text-white rounded-lg p-4 float-right",
            on: { click: _vm.createIncident }
          },
          [_vm._v("ENVIAR")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "head-content mt-5 mb-10" }, [
      _c(
        "div",
        {
          staticClass: "head tittle text-4xl text-sideBar-primary font-semibold"
        },
        [_vm._v("\n              Solicitud de tareas\n             ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spacer bg-sideBar-primary w-full h-0.5 mt-5" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=template&id=0d7d5487&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=template&id=0d7d5487& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      _vm.id == 3
        ? _c("div", [
            _vm._v("\n      ¿Tienes algún problema con las plataformas ? "),
            _c("br"),
            _vm._v(
              "\n      ¿Quieres solicitar la creación de una nueva plataforma ?\n      \n    "
            )
          ])
        : _vm.id == 2
        ? _c("div", [
            _vm._v(
              "\n      ¿Tienes problemas con sinergy, una web, una aplicación de la empresa, etc ?\n      \n  "
            )
          ])
        : _vm.id == 1
        ? _c("div", [
            _vm._v(
              "\n      ¿Tienes problemas con tu equipo o no tienes red ? "
            ),
            _c("br"),
            _vm._v(
              "\n      ¿Necesitas crear, modificar o solucionar problemas con cuentas corporativas de correo electrónico ?\n      \n  "
            )
          ])
        : _c("div", [
            _vm._v(
              "\n      ¿Quieres lanzar una campaña de marketing, redes sociales, etc ?\n  "
            )
          ]),
      _vm._v(" "),
      _c(
        "router-link",
        {
          attrs: {
            to: {
              name: "incidents",
              params: {
                teamName: _vm.teamName,
                teamID: _vm.id,
                departmentName: _vm.departmentName
              }
            }
          }
        },
        [
          _c(
            "button",
            {
              staticClass:
                "mt-4 bg-buttonColor-primary text-black p-2 rounded-xl"
            },
            [_vm._v(" << Haz click aqui")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Incidencias.vue?vue&type=template&id=6fa698c2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Incidencias.vue?vue&type=template&id=6fa698c2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "h-full w-full flex flex-col justify-around items-center text-4xl text-fontColor-primary font-semibold"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "department-content w-full h-full flex flex-wrap flex-row justify-center items-center"
        },
        _vm._l(_vm.teamsDepartment, function(index) {
          return _c(
            "div",
            {
              key: index.id,
              staticClass:
                "flex h-2/5 w-2/5 justify-center items-center align-middle",
              attrs: { value: index.id }
            },
            [
              _c("img", {
                staticClass: "w-60 h-60",
                attrs: { src: "/assets/images/teams/" + index.id + ".svg" }
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "text-center" }, [
                  _vm._v(" " + _vm._s(index.name))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-lg" },
                  [
                    _c("InformationText", {
                      attrs: {
                        id: index.id,
                        teamName: index.name,
                        deparmentName: _vm.departmentName
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-content-tittle w-full mt-4" }, [
      _c("div", { staticClass: "tittle-header ml-20 mb-4 " }, [
        _vm._v("\n        Solicitud de tareas\n    ")
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "spacer bg-fontColor-primary w-11/12 h-0.5 m-auto"
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/InformationProfile.vue?vue&type=template&id=6f780648&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/InformationProfile.vue?vue&type=template&id=6f780648& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.users, function(user) {
      return _c("div", { key: user.id }, [
        user.id == _vm.id
          ? _c("div", [
              _c(
                "section",
                { staticClass: "user-profile-middle-container block pt-4" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "user-inner-container w-10/12 flex flex-col items-center text-lg justify-center"
                    },
                    [
                      _c(
                        "h1",
                        {
                          staticClass: "text-sideBar-primary font-semibold pb-4"
                        },
                        [_vm._v("INFORMACION GENERAL")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "user-information-container w-6/12 h-full flex flex-col justify-around font-semibold text-sideBar-primary text-left"
                        },
                        [
                          _c("div", { staticClass: "flex flex-row p-2" }, [
                            _vm._v(
                              "\n                                Horario Normal:  " +
                                _vm._s(user.schedule) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex flex-row p-2" }, [
                            _vm._v(
                              "\n                                Guardia:  " +
                                _vm._s(user.duty_schedule) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex flex-row p-2" }, [
                            _vm._v(
                              "\n                            Horario Guardia: \n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex flex-row p-2" }, [
                            _vm._v(
                              "\n                                Correo electrónico:  " +
                                _vm._s(user.email) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex flex-row p-2" }, [
                            _vm._v(
                              "\n                                Teléfono:   " +
                                _vm._s(user.phone) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex flex-row p-2" },
                            [
                              _c("h1", [_vm._v(" Departamentos:  ")]),
                              _vm._v(" "),
                              _vm._l(_vm.departments, function(department) {
                                return _c("div", { key: department.id }, [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(department.name) +
                                      "\n                                    "
                                  )
                                ])
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex flex-row p-2" },
                            [
                              _c("h1", [_vm._v(" Teams:  ")]),
                              _vm._v(" "),
                              _vm._l(_vm.teams, function(team) {
                                return _c("div", { key: team.id }, [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(team.name) +
                                      "\n                                    "
                                  )
                                ])
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex flex-row p-2" }, [
                            _vm._v(
                              "\n                                Cumpleaños:  " +
                                _vm._s(user.birthday) +
                                "\n                            "
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=template&id=eddef456&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=template&id=eddef456& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "min-w-24",
      attrs: { contenteditable: "true", id: _vm.id },
      on: { blur: _vm.onUpdate }
    },
    [_vm._v("\n  " + _vm._s(_vm.content) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserBoard.vue?vue&type=template&id=cbcab380&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserBoard.vue?vue&type=template&id=cbcab380& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-full h-full" },
    [
      _c(
        "div",
        {
          class: _vm.overlay,
          staticStyle: {
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            "background-color": "rgba(120,120,120,0.1)",
            "z-index": "2",
            cursor: "progress"
          }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "fixed top-0 bg-white z-30",
          staticStyle: { width: "2850px" }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "h-16 justify-between items-center bg-opacity-100  mb-10"
            },
            [
              _c("BoardName", { attrs: { boardName: _vm.boardName } }),
              _vm._v(" "),
              _c("div", { staticClass: "flex fixed right-0 mr-20 pt-10" }, [
                _c(
                  "div",
                  { staticClass: "cursor-pointer mx-2" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "StoreFile",
                            params: {
                              boardName: _vm.boardName,
                              boardId: _vm.boardTeamID
                            }
                          }
                        }
                      },
                      [_vm._v("\n          Archivo\n          ")]
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
                        rawName: "v-popover:filterMembers.bottom",
                        arg: "filterMembers",
                        modifiers: { bottom: true }
                      }
                    ]
                  },
                  [
                    _c(
                      "icon-base",
                      {
                        staticClass: "cursor-pointer",
                        attrs: {
                          iconColor: "#4D4D4D",
                          width: "25",
                          height: "25",
                          viewBox: "0 0 760 652",
                          "icon-name": "filterperson"
                        }
                      },
                      [_c("FilterPerson")],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.userInfo.id_rol != 3
                  ? _c(
                      "div",
                      { staticClass: "class-icon px-4" },
                      [
                        _c(
                          "icon-base",
                          {
                            directives: [
                              {
                                name: "popover",
                                rawName: "v-popover:adduser.bottom",
                                arg: "adduser",
                                modifiers: { bottom: true }
                              }
                            ],
                            staticClass: "cursor-pointer",
                            attrs: {
                              iconColor: "#4D4D4D",
                              width: "25",
                              height: "25",
                              "icon-name": "iconadduser"
                            }
                          },
                          [_c("IconAddUser")],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      " relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "absolute inset-y-0 left-0 flex items-center pl-2"
                      },
                      [
                        _c(
                          "icon-base",
                          {
                            attrs: {
                              iconColor: "#4D4D4D",
                              width: "15",
                              height: "15",
                              "icon-name": "search"
                            }
                          },
                          [_c("Search")],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass:
                        "pl-10 rounded-lg z-0 focus:shadow focus:outline-none",
                      attrs: {
                        type: "search",
                        id: "search",
                        name: "email",
                        placeholder: "Buscar"
                      },
                      domProps: { value: _vm.search },
                      on: {
                        focus: _vm.focusSearch,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    })
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "spacer fixed bg-fontColor-primary h-0.5 mx-12 mt-12",
            staticStyle: { width: "2850px" }
          })
        ]
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "text-block-working-primary mx-12 my-16",
          staticStyle: { width: "2850px" },
          on: {
            mouseover: function($event) {
              return _vm.typeStatus(1)
            }
          }
        },
        [
          _vm.boardTeamID
            ? _c("TaskStatus", {
                staticClass: " col-3",
                attrs: {
                  id: "board-1",
                  boardTeamID: _vm.boardTeamID,
                  taskList: _vm.taskListWorking,
                  search: _vm.search,
                  responsable: _vm.responsable,
                  usuarios: _vm.users,
                  tagsList: _vm.tagsList,
                  mentionList: _vm.mentionList,
                  status: "Trabajando",
                  taskStatus: "1",
                  ht: "#000000",
                  color: "bg-block-working-primary",
                  colorSecondary: "bg-block-working-secondary",
                  placeholder: "+ Añadir nueva tarea"
                },
                on: { click: _vm.tagIdChange }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "text-block-pending-primary  mx-12 my-16",
          staticStyle: { width: "2850px" },
          on: {
            mouseover: function($event) {
              return _vm.typeStatus(3)
            }
          }
        },
        [
          _vm.boardTeamID
            ? _c("TaskStatus", {
                staticClass: "col-3",
                attrs: {
                  id: "board-2",
                  search: _vm.search,
                  boardTeamID: _vm.boardTeamID,
                  taskList: _vm.taskListPending,
                  responsable: _vm.responsable,
                  usuarios: _vm.users,
                  tagsList: _vm.tagsList,
                  mentionList: _vm.mentionList,
                  status: "Pendientes",
                  taskStatus: "3",
                  ht: "#000000",
                  color: "bg-block-pending-primary",
                  colorSecondary: "bg-block-pending-secondary",
                  placeholder: "+ Añadir nueva tarea"
                },
                on: { click: _vm.tagIdChange }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "text-block-complete-primary  mx-12 my-16",
          staticStyle: { width: "2850px" },
          on: {
            mouseover: function($event) {
              return _vm.typeStatus(4)
            }
          }
        },
        [
          _vm.boardTeamID
            ? _c("TaskStatus", {
                staticClass: " col-3",
                attrs: {
                  id: "board-3",
                  search: _vm.search,
                  boardTeamID: _vm.boardTeamID,
                  taskList: _vm.taskListCompleted,
                  responsable: _vm.responsable,
                  usuarios: _vm.users,
                  tagsList: _vm.tagsList,
                  mentionList: _vm.mentionList,
                  status: "Completadas",
                  taskStatus: "4",
                  ht: "#000000",
                  color: "bg-block-complete-primary",
                  colorSecondary: "bg-block-complete-secondary",
                  placeholder: "+ Añadir nueva tarea"
                },
                on: { click: _vm.tagIdChange }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "popover",
        { attrs: { name: "adduser", width: 400 } },
        _vm._l(_vm.users, function(user) {
          return _c(
            "div",
            {
              key: user.id,
              staticClass:
                "flex flex-wrap justify-center items-center w-96 max-h-96 "
            },
            [
              !_vm.searchUserinTeam(user.id)
                ? _c(
                    "div",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "profileUser",
                              params: { idUser: user.id }
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "rounded-full w-8 h-8 m-2",
                            attrs: { src: "/assets/images/users/" + user.id }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      user.name === null
                        ? _c("div", [
                            _vm._v(
                              "\n            " +
                                _vm._s(user.email) +
                                "\n          "
                            )
                          ])
                        : _c("div", [
                            _vm._v(
                              "\n              " +
                                _vm._s(user.name) +
                                "\n          "
                            )
                          ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "p-2 bg-sideBar-primary text-white",
                          on: {
                            click: function($event) {
                              return _vm.createUserTeam(user.id)
                            }
                          }
                        },
                        [_vm._v(" AÑADIR USUARIO")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "popover",
        { attrs: { name: "filterMembers", width: 150 } },
        [
          _vm._l(_vm.responsable, function(user) {
            return _c("div", { key: user.id, staticClass: "inline-block" }, [
              _c("img", {
                staticClass: "rounded-full cursor-pointer w-8 h-8 m-2",
                attrs: { src: "/assets/images/users/" + user.id_user },
                on: {
                  click: function($event) {
                    return _vm.filterMember(user.id_user)
                  }
                }
              })
            ])
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "rounded-full w-5 h-5 bg-white text-black self-center",
              on: {
                click: function($event) {
                  return _vm.filterMember(0)
                }
              }
            },
            [_vm._v("\n            X\n          ")]
          )
        ],
        2
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
          staticClass: "fixed right-44 w-54 h-54"
        },
        [_c("div", [_vm._v("\n            DIVVVVV\n          ")])]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          position: "absolute",
          top: "50%",
          left: "50%",
          "font-size": "50px",
          color: "white",
          transform: "translate(-50%,-50%)",
          "-ms-transform": "translate(-50%,-50%)"
        }
      },
      [_c("span")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("br"), _c("br"), _c("br")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserDepartment.vue?vue&type=template&id=61ea9e68&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserDepartment.vue?vue&type=template&id=61ea9e68& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        "h-full w-full flex flex-col justify-around items-center text-4xl text-fontColor-primary font-semibold"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "department-content w-full h-full flex flex-wrap flex-row justify-center items-center"
        },
        _vm._l(_vm.teamsDepartment, function(index) {
          return _c(
            "div",
            {
              key: index.id,
              staticClass:
                "flex h-2/5 w-2/5 justify-center items-center align-middle",
              attrs: { value: index.id }
            },
            [
              _c("img", {
                staticClass: "w-32 h-32",
                attrs: { src: "/assets/images/teams/" + index.id + ".svg" }
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "welcometeams",
                      params: {
                        departmentName: index.name,
                        departmentID: index.id
                      }
                    }
                  }
                },
                [
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(" " + _vm._s(index.name))
                  ])
                ]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-content-tittle w-full mt-4" }, [
      _c("div", { staticClass: "tittle-header ml-20 mb-4 " }, [
        _vm._v("\n        Equipos\n    ")
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "spacer bg-fontColor-primary w-11/12 h-0.5 m-auto"
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserProfile.vue?vue&type=template&id=2dd43f03&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/UserProfile.vue?vue&type=template&id=2dd43f03& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "h-full w-full " },
    [
      _c(
        "section",
        { staticClass: "justify-around items-center pt-10 pb-10" },
        [
          _c("div", { staticClass: "user-profile-top-component" }, [
            _c("div", { staticClass: "profile-image-component " }, [
              _vm.idUser && _vm.idUser != _vm.userInfo.id
                ? _c(
                    "div",
                    {
                      staticClass:
                        "profile-image group cursor-pointer flex flex-col justify-center items-center"
                    },
                    [
                      _c("img", {
                        staticClass: "w-28 h-28 opacity-1 rounded-full",
                        attrs: { src: _vm.src }
                      })
                    ]
                  )
                : _c(
                    "div",
                    {
                      staticClass:
                        "profile-image group cursor-pointer flex justify-center items-center"
                    },
                    [
                      _c("AvatarInpute", {
                        attrs: { "default-src": _vm.src, id: _vm.userInfo.id },
                        model: {
                          value: _vm.avatar,
                          callback: function($$v) {
                            _vm.avatar = $$v
                          },
                          expression: "avatar"
                        }
                      })
                    ],
                    1
                  )
            ]),
            _vm._v(" "),
            _vm.idUser && _vm.idUser != _vm.userInfo.id
              ? _c(
                  "div",
                  {
                    staticClass:
                      "user-name flex flex-row justify-center items-center text-3xl font-semibold text-sideBar-primary"
                  },
                  _vm._l(_vm.allusers, function(user) {
                    return _c("div", { key: user.id }, [
                      _vm.idUser == user.id
                        ? _c("div", [
                            _vm._v(
                              "\n                " +
                                _vm._s(user.name) +
                                " \n                " +
                                _vm._s(user.surname) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ])
                  }),
                  0
                )
              : _c(
                  "div",
                  {
                    staticClass:
                      "user-name flex flex-row justify-center items-center text-3xl font-semibold text-sideBar-primary"
                  },
                  [
                    _c("Editable", {
                      attrs: { id: "name", content: _vm.userInfo.name }
                    }),
                    _vm._v(" \n            "),
                    _c("Editable", {
                      attrs: { id: "surname", content: _vm.userInfo.surname }
                    })
                  ],
                  1
                )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass:
          "separation-between-sections spacer bg-sideBar-primary align middle w-10/12 h-px m-auto"
      }),
      _vm._v(" "),
      _vm.idUser && _vm.idUser != _vm.userInfo.id
        ? _c("InformationProfile", { attrs: { id: _vm.idUser } })
        : _c(
            "section",
            { staticClass: "user-profile-middle-container block pt-4" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "user-inner-container w-10/12 flex flex-col items-center text-lg justify-center"
                },
                [
                  _c(
                    "h1",
                    { staticClass: "text-sideBar-primary font-semibold pb-4" },
                    [_vm._v("INFORMACION GENERAL")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "user-information-container w-6/12 h-full flex flex-col justify-around font-semibold text-sideBar-primary text-left"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _vm._v("\n              Horario Normal:  "),
                          _c("Editable", {
                            staticClass:
                              "w-80 text-fontColor-primary font-normal border-dotted border-2 hover:border-black",
                            attrs: {
                              id: "schedule",
                              content: _vm.userInfo.schedule
                            }
                          }),
                          _c(
                            "icon-base",
                            {
                              attrs: {
                                viewBox: "0 0 1080 1080",
                                "icon-name": "editar"
                              }
                            },
                            [_c("Editar")],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _vm._v("\n              Guardia:  "),
                          _c("Editable", {
                            staticClass:
                              "text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black",
                            attrs: { id: "duty", content: _vm.userInfo.duty }
                          }),
                          _c(
                            "icon-base",
                            {
                              attrs: {
                                viewBox: "0 0 1080 1080",
                                "icon-name": "editar"
                              }
                            },
                            [_c("Editar")],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _vm._v("\n            Horario Guardia:  "),
                          _c("Editable", {
                            staticClass:
                              "text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black",
                            attrs: {
                              id: "duty_schedule",
                              content: _vm.userInfo.duty_schedule
                            }
                          }),
                          _c(
                            "icon-base",
                            {
                              attrs: {
                                viewBox: "0 0 1080 1080",
                                "icon-name": "editar"
                              }
                            },
                            [_c("Editar")],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row p-2" }, [
                        _vm._v("\n              Correo electrónico:  "),
                        _c("div", {
                          attrs: { id: "email", content: _vm.userInfo.email }
                        }),
                        _vm._v(_vm._s(_vm.userInfo.email)),
                        _c("div")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _vm._v("\n              Teléfono:   "),
                          _c("Editable", {
                            staticClass:
                              "text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black",
                            attrs: { id: "phone", content: _vm.userInfo.phone }
                          }),
                          _c(
                            "icon-base",
                            {
                              staticClass: "cursor-pointer",
                              attrs: {
                                viewBox: "0 0 1080 1080",
                                "icon-name": "editar"
                              }
                            },
                            [_c("Editar")],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _c("h1", [_vm._v(" Departamentos:  ")]),
                          _vm._v(" "),
                          _vm._l(_vm.departments, function(items) {
                            return _c("div", { key: items.id }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-fontColor-primary font-normal"
                                },
                                [_vm._v(_vm._s(items.name) + "; ")]
                              )
                            ])
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _c("h1", [_vm._v(" Teams:  ")]),
                          _vm._v(" "),
                          _vm._l(_vm.teams, function(items) {
                            return _c("div", { key: items.id }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-fontColor-primary font-normal"
                                },
                                [_vm._v(" " + _vm._s(items.name) + ";")]
                              )
                            ])
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-row p-2" },
                        [
                          _vm._v("\n              Cumpleaños:  "),
                          _c("Editable", {
                            staticClass:
                              "text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black",
                            attrs: {
                              id: "birthday",
                              content: _vm.userInfo.birthday
                            }
                          }),
                          _c(
                            "icon-base",
                            {
                              attrs: {
                                viewBox: "0 0 1080 1080",
                                "icon-name": "editar"
                              }
                            },
                            [_c("Editar")],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2" }, [
                        _c(
                          "button",
                          {
                            on: {
                              click: function($event) {
                                _vm.passwordChange = !_vm.passwordChange
                              }
                            }
                          },
                          [_vm._v("Gestionar contraseña")]
                        ),
                        _vm._v(" "),
                        _vm.passwordChange
                          ? _c("div", { staticClass: "flex flex-col " }, [
                              _c("div", {
                                on: {
                                  blur: function($event) {
                                    _vm.passwordChange = !_vm.passwordChange
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.currentPassword,
                                    expression: "currentPassword"
                                  }
                                ],
                                staticClass: "border m-1",
                                attrs: {
                                  type: "password",
                                  placeholder: "Current password"
                                },
                                domProps: { value: _vm.currentPassword },
                                on: {
                                  change: _vm.checkpassword,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.currentPassword = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newPassword,
                                    expression: "newPassword"
                                  }
                                ],
                                staticClass: "border m-1",
                                attrs: {
                                  type: "password",
                                  placeholder: "New password"
                                },
                                domProps: { value: _vm.newPassword },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newPassword = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newRepeatedPassword,
                                    expression: "newRepeatedPassword"
                                  }
                                ],
                                staticClass: "border m-1",
                                attrs: {
                                  type: "password",
                                  placeholder: "Repeat new password"
                                },
                                domProps: { value: _vm.newRepeatedPassword },
                                on: {
                                  change: _vm.repeatedPasswordReceived,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newRepeatedPassword =
                                      $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "bg-sideBar-primary text-white border rounded-full py-1 px-2",
                                  on: { click: _vm.changePassword }
                                },
                                [_vm._v("Cambiar contraseña")]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2" }, [
                        _c("input", { attrs: { type: "checkbox" } }),
                        _vm._v(
                          "Quiero recibir notificaciones por correo\n            "
                        )
                      ])
                    ]
                  )
                ]
              )
            ]
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=template&id=448cc98c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=template&id=448cc98c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        "h-full w-full flex flex-col justify-around items-center font-semibold text-4xl"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "department-container h-full flex flex-col justify-around "
        },
        _vm._l(_vm.departments, function(index) {
          return _c(
            "div",
            {
              key: index.id,
              staticClass: "flex flex-row",
              attrs: { value: index.id }
            },
            [
              _c("div", [
                _c("img", {
                  staticClass: "w-60 h-60 mx-4",
                  attrs: {
                    src: "/assets/images/departments/" + index.id + ".svg"
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "m-auto",
                  attrs: {
                    to: {
                      name: "incidencias",
                      params: {
                        departmentName: index.name,
                        departmentID: index.id
                      }
                    }
                  }
                },
                [_vm._v(" " + _vm._s(index.name) + " ")]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-content w-full mt-4" }, [
      _c("div", { staticClass: "tittle-header ml-20 mb-4 " }, [
        _vm._v(" Departamentos")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "spacer bg-black w-11/12 h-0.5 m-auto" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=template&id=835b8468&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=template&id=835b8468& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "h-full flex flex-col justify-around items-center" },
      [
        _c(
          "div",
          { staticClass: "flex flex-row w-full justify-evenly items-center" },
          [
            _c("img", {
              staticClass: "w-40 h-40",
              attrs: {
                src: "/assets/images/teams/" + _vm.departmentID + ".svg"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-5xl text-sideBar-primary uppercase italic" },
              [_vm._v("Equipo de " + _vm._s(_vm.departmentName))]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("TabsComponent", {
          attrs: {
            departmentID: _vm.departmentID,
            departmentName: _vm.departmentName
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=template&id=4b8e1b4e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=template&id=4b8e1b4e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("li", { staticClass: "relative p-6" }, [
    _c("div", {
      staticClass: "border-t-2 absolute h-8 border-gray-400 top-0",
      staticStyle: { left: "0px", right: "0px" }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "relative flex justify-center" }, [
      _c("div", {
        staticClass: "-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"
      }),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c(
          "div",
          { staticClass: "flex flex-col justify-center items-center" },
          [
            _c(
              "div",
              { staticClass: "w-16" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "profileUser", params: { idUser: _vm.id } }
                    }
                  },
                  [
                    _vm.exist
                      ? _c("div", [
                          _c("img", {
                            staticClass: "h-10 w-10 rounded mx-3 mt-2",
                            attrs: { src: "/assets/images/users/" + _vm.id }
                          })
                        ])
                      : _c("div", [
                          _c("img", {
                            staticClass: "w-12 h-12 rounded-full ",
                            attrs: { src: "/assets/images/users/avatar.svg" }
                          })
                        ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-gray-600" }, [
              _c("p", [_vm._v(_vm._s(_vm.usersName))])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=template&id=36c3d95e&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=template&id=36c3d95e& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "member-list flex flex-row" }, [
    _vm.exist
      ? _c("div", [
          _c("img", {
            staticClass: "h-10 w-10 rounded mx-3 mt-2",
            attrs: { src: "/assets/images/users/" + _vm.userID }
          })
        ])
      : _c("div", [
          _c("img", {
            staticClass: "w-12 h-12 rounded-full ",
            attrs: { src: "/assets/images/users/avatar.svg" }
          })
        ]),
    _vm._v(" "),
    _c("span", { staticClass: "text-xl" }, [
      _vm._v(_vm._s(_vm.userName) + _vm._s(_vm.userSurname))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=template&id=06ae0988&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=template&id=06ae0988& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex flex-col justify-center items-center" },
    [
      _c("div", { staticClass: "container mx-auto text-center pt-24" }, [
        _c("div", { staticClass: "items-center justify-center flex" }, [
          _c("div", { staticClass: "text-center" }, [
            _c(
              "div",
              { staticClass: "flex flex-col justify-center items-center" },
              [
                _c(
                  "div",
                  { staticClass: "w-16" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "profileUser",
                            params: { idUser: _vm.department.id }
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "h-10 w-10 rounded mx-3 mt-2",
                          attrs: {
                            src: "/assets/images/users/" + _vm.department.id
                          }
                        })
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-gray-600" }, [
                  _c("div", [
                    _c("p", [_vm._v(_vm._s(_vm.department.name))]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Encargado/a del departamento")])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "flex flex-row mt-10 justify-center" }, [
              _c("div", {
                staticClass: "-mt-10 border-l-2 absolute h-10 border-gray-400"
              }),
              _vm._v(" "),
              _c("li", { staticClass: "relative p-6" }, [
                _c("div", {
                  staticClass: "border-t-2 absolute h-8 border-gray-400 top-0",
                  staticStyle: { left: "50%", right: "50%" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "relative flex justify-center" }, [
                  _c("div", {
                    staticClass:
                      "-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass: "flex flex-col justify-center items-center"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-16" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "profileUser",
                                    params: { idUser: _vm.team.id }
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "h-10 w-10 rounded mx-3 mt-2",
                                  attrs: {
                                    src: "/assets/images/users/" + _vm.team.id
                                  }
                                })
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-gray-600" }, [
                          _c("p", [_vm._v(_vm._s(_vm.team.name))]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Encargado/a del equipo")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "flex flex-row mt-10 justify-center" },
                      [
                        _c("div", {
                          staticClass:
                            "-mt-10 border-l-2 absolute h-10 border-gray-400"
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.user, function(items) {
                          return _c("MembersChart", {
                            key: items.id,
                            attrs: { usersName: items.name, id: items.id }
                          })
                        })
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=template&id=8fb73f1e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=template&id=8fb73f1e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hover:font-bold" }, [
    _vm._v(_vm._s(_vm.tabName))
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=template&id=450a9366&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=template&id=450a9366& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-wrap" }, [
    _c("div", { staticClass: "w-full" }, [
      _c(
        "ul",
        { staticClass: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" },
        [
          _c(
            "li",
            { staticClass: "-mb-px mr-2 last:mr-0 flex-auto text-center" },
            [
              _c(
                "a",
                {
                  staticClass:
                    "text-xl uppercase px-5 py-3 rounded block leading-normal text-sideBar-primary cursor-pointer group",
                  class: {
                    "text-sideBar-primary": _vm.openTab !== 1,
                    "text-sideBar-primary": _vm.openTab === 1
                  },
                  on: {
                    click: function($event) {
                      return _vm.toggleTabs(1)
                    }
                  }
                },
                [
                  _c("TabComponent", { attrs: { tabName: "Equipos" } }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "spacer bg-sideBar-primary w-11/12 h-0.5 m-auto group-hover:bg-sideBar-primary",
                    class: {
                      "bg-gray-200": _vm.openTab !== 1,
                      "bg-sideBar-primary": _vm.openTab === 1
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "-mb-px mr-2 last:mr-0 flex-auto text-center" },
            [
              _c(
                "a",
                {
                  staticClass:
                    "text-xl uppercase px-5 py-3 rounded block leading-normal cursor-pointer group",
                  on: {
                    click: function($event) {
                      return _vm.toggleTabs(2)
                    }
                  }
                },
                [
                  _c("TabComponent", { attrs: { tabName: "Miembros" } }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "spacer w-11/12 h-0.5 m-auto group-hover:bg-sideBar-primary",
                    class: {
                      "bg-gray-200": _vm.openTab !== 2,
                      "bg-sideBar-primary": _vm.openTab === 2
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        },
        [
          _c("div", { staticClass: "px-4 py-5 flex-auto" }, [
            _c("div", { staticClass: "tab-content tab-space" }, [
              _c(
                "div",
                {
                  class: { hidden: _vm.openTab !== 1, block: _vm.openTab === 1 }
                },
                [_c("Organization", { attrs: { id_team: _vm.departmentID } })],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: { hidden: _vm.openTab !== 2, block: _vm.openTab === 2 }
                },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "profileUser",
                          params: { idUser: _vm.organization.team.id }
                        }
                      }
                    },
                    [
                      _vm.exist
                        ? _c("div", [
                            _c("img", {
                              staticClass: "h-10 w-10 rounded mx-3 mt-2",
                              attrs: {
                                src:
                                  "/assets/images/users/" +
                                  _vm.organization.team.id
                              }
                            })
                          ])
                        : _c("div", [
                            _c("img", {
                              staticClass: "w-12 h-12 rounded-full ",
                              attrs: { src: "/assets/images/users/avatar.svg" }
                            })
                          ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.organization.team.name))]),
                  _vm._v(" "),
                  _vm._l(_vm.organization.users, function(items) {
                    return _c(
                      "div",
                      { key: items.id },
                      [
                        _c("MembersList", {
                          attrs: {
                            userName: items.name,
                            userSurname: items.surname,
                            userID: items.id
                          }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=template&id=1f949cbb&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=template&id=1f949cbb& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("span", { staticClass: "text-xl" }, [_vm._v(_vm._s(_vm.teamName))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/App.vue?vue&type=template&id=2e4360e2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/views/App.vue?vue&type=template&id=2e4360e2&scoped=true& ***!
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
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./assets/components/Redirect.vue":
/*!****************************************!*\
  !*** ./assets/components/Redirect.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Redirect_vue_vue_type_template_id_401761d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Redirect.vue?vue&type=template&id=401761d7& */ "./assets/components/Redirect.vue?vue&type=template&id=401761d7&");
/* harmony import */ var _Redirect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Redirect.vue?vue&type=script&lang=js& */ "./assets/components/Redirect.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Redirect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Redirect_vue_vue_type_template_id_401761d7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Redirect_vue_vue_type_template_id_401761d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/Redirect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Add.vue":
/*!*****************************************!*\
  !*** ./assets/components/icons/Add.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_4f94507e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=4f94507e& */ "./assets/components/icons/Add.vue?vue&type=template&id=4f94507e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Add_vue_vue_type_template_id_4f94507e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_4f94507e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Collap.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Collap.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collap_vue_vue_type_template_id_584b09aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collap.vue?vue&type=template&id=584b09aa& */ "./assets/components/icons/Collap.vue?vue&type=template&id=584b09aa&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Collap_vue_vue_type_template_id_584b09aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _Collap_vue_vue_type_template_id_584b09aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Collap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Editar.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Editar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editar_vue_vue_type_template_id_65b1ca6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editar.vue?vue&type=template&id=65b1ca6a& */ "./assets/components/icons/Editar.vue?vue&type=template&id=65b1ca6a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Editar_vue_vue_type_template_id_65b1ca6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Editar_vue_vue_type_template_id_65b1ca6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Editar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Expand.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Expand.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Expand_vue_vue_type_template_id_61fb522a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expand.vue?vue&type=template&id=61fb522a& */ "./assets/components/icons/Expand.vue?vue&type=template&id=61fb522a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Expand_vue_vue_type_template_id_61fb522a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Expand_vue_vue_type_template_id_61fb522a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Expand.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/File.vue":
/*!******************************************!*\
  !*** ./assets/components/icons/File.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _File_vue_vue_type_template_id_4ef7460c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=4ef7460c& */ "./assets/components/icons/File.vue?vue&type=template&id=4ef7460c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _File_vue_vue_type_template_id_4ef7460c___WEBPACK_IMPORTED_MODULE_0__.render,
  _File_vue_vue_type_template_id_4ef7460c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/File.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/FilterPerson.vue":
/*!**************************************************!*\
  !*** ./assets/components/icons/FilterPerson.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterPerson_vue_vue_type_template_id_4d20de06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterPerson.vue?vue&type=template&id=4d20de06& */ "./assets/components/icons/FilterPerson.vue?vue&type=template&id=4d20de06&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _FilterPerson_vue_vue_type_template_id_4d20de06___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilterPerson_vue_vue_type_template_id_4d20de06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/FilterPerson.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Filtro.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Filtro.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filtro_vue_vue_type_template_id_097b4cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filtro.vue?vue&type=template&id=097b4cd0& */ "./assets/components/icons/Filtro.vue?vue&type=template&id=097b4cd0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Filtro_vue_vue_type_template_id_097b4cd0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Filtro_vue_vue_type_template_id_097b4cd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Filtro.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/IconAddUser.vue":
/*!*************************************************!*\
  !*** ./assets/components/icons/IconAddUser.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconAddUser_vue_vue_type_template_id_ff10411a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconAddUser.vue?vue&type=template&id=ff10411a& */ "./assets/components/icons/IconAddUser.vue?vue&type=template&id=ff10411a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _IconAddUser_vue_vue_type_template_id_ff10411a___WEBPACK_IMPORTED_MODULE_0__.render,
  _IconAddUser_vue_vue_type_template_id_ff10411a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/IconAddUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/IconBase.vue":
/*!**********************************************!*\
  !*** ./assets/components/icons/IconBase.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconBase_vue_vue_type_template_id_46ec007a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconBase.vue?vue&type=template&id=46ec007a& */ "./assets/components/icons/IconBase.vue?vue&type=template&id=46ec007a&");
/* harmony import */ var _IconBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconBase.vue?vue&type=script&lang=js& */ "./assets/components/icons/IconBase.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _IconBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _IconBase_vue_vue_type_template_id_46ec007a___WEBPACK_IMPORTED_MODULE_0__.render,
  _IconBase_vue_vue_type_template_id_46ec007a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/IconBase.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/List.vue":
/*!******************************************!*\
  !*** ./assets/components/icons/List.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_69f8bfa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=69f8bfa4& */ "./assets/components/icons/List.vue?vue&type=template&id=69f8bfa4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _List_vue_vue_type_template_id_69f8bfa4___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_69f8bfa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Message.vue":
/*!*********************************************!*\
  !*** ./assets/components/icons/Message.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Message_vue_vue_type_template_id_73d10fb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=73d10fb2& */ "./assets/components/icons/Message.vue?vue&type=template&id=73d10fb2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Message_vue_vue_type_template_id_73d10fb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Message_vue_vue_type_template_id_73d10fb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Message.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Pause.vue":
/*!*******************************************!*\
  !*** ./assets/components/icons/Pause.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pause_vue_vue_type_template_id_1276b096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pause.vue?vue&type=template&id=1276b096& */ "./assets/components/icons/Pause.vue?vue&type=template&id=1276b096&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Pause_vue_vue_type_template_id_1276b096___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pause_vue_vue_type_template_id_1276b096___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Pause.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Play.vue":
/*!******************************************!*\
  !*** ./assets/components/icons/Play.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Play_vue_vue_type_template_id_2a6b8078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Play.vue?vue&type=template&id=2a6b8078& */ "./assets/components/icons/Play.vue?vue&type=template&id=2a6b8078&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Play_vue_vue_type_template_id_2a6b8078___WEBPACK_IMPORTED_MODULE_0__.render,
  _Play_vue_vue_type_template_id_2a6b8078___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Play.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Schedule.vue":
/*!**********************************************!*\
  !*** ./assets/components/icons/Schedule.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Schedule_vue_vue_type_template_id_dd35bcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schedule.vue?vue&type=template&id=dd35bcb2& */ "./assets/components/icons/Schedule.vue?vue&type=template&id=dd35bcb2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Schedule_vue_vue_type_template_id_dd35bcb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Schedule_vue_vue_type_template_id_dd35bcb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Schedule.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Search.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Search.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_1776a238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=1776a238& */ "./assets/components/icons/Search.vue?vue&type=template&id=1776a238&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Search_vue_vue_type_template_id_1776a238___WEBPACK_IMPORTED_MODULE_0__.render,
  _Search_vue_vue_type_template_id_1776a238___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Settings.vue":
/*!**********************************************!*\
  !*** ./assets/components/icons/Settings.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_6bf9a533___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=6bf9a533& */ "./assets/components/icons/Settings.vue?vue&type=template&id=6bf9a533&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Settings_vue_vue_type_template_id_6bf9a533___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_6bf9a533___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Stored.vue":
/*!********************************************!*\
  !*** ./assets/components/icons/Stored.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stored_vue_vue_type_template_id_78faeab3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stored.vue?vue&type=template&id=78faeab3& */ "./assets/components/icons/Stored.vue?vue&type=template&id=78faeab3&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Stored_vue_vue_type_template_id_78faeab3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Stored_vue_vue_type_template_id_78faeab3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Stored.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/icons/Trash.vue":
/*!*******************************************!*\
  !*** ./assets/components/icons/Trash.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Trash_vue_vue_type_template_id_27aa0cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trash.vue?vue&type=template&id=27aa0cd8& */ "./assets/components/icons/Trash.vue?vue&type=template&id=27aa0cd8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Trash_vue_vue_type_template_id_27aa0cd8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Trash_vue_vue_type_template_id_27aa0cd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/icons/Trash.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/login/PasswordChange.vue":
/*!****************************************************!*\
  !*** ./assets/components/login/PasswordChange.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordChange_vue_vue_type_template_id_aada1ee8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=template&id=aada1ee8& */ "./assets/components/login/PasswordChange.vue?vue&type=template&id=aada1ee8&");
/* harmony import */ var _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=script&lang=js& */ "./assets/components/login/PasswordChange.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PasswordChange_vue_vue_type_template_id_aada1ee8___WEBPACK_IMPORTED_MODULE_0__.render,
  _PasswordChange_vue_vue_type_template_id_aada1ee8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/login/PasswordChange.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/login/PasswordReset.vue":
/*!***************************************************!*\
  !*** ./assets/components/login/PasswordReset.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordReset_vue_vue_type_template_id_509db5a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=template&id=509db5a3& */ "./assets/components/login/PasswordReset.vue?vue&type=template&id=509db5a3&");
/* harmony import */ var _PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=script&lang=js& */ "./assets/components/login/PasswordReset.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PasswordReset_vue_vue_type_template_id_509db5a3___WEBPACK_IMPORTED_MODULE_0__.render,
  _PasswordReset_vue_vue_type_template_id_509db5a3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/login/PasswordReset.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Admin/Admin.vue":
/*!***********************************************************!*\
  !*** ./assets/components/user/userNavBar/Admin/Admin.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_0bec70d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=0bec70d8& */ "./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=template&id=0bec70d8&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Admin/Admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Admin_vue_vue_type_template_id_0bec70d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admin_vue_vue_type_template_id_0bec70d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Admin/Admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/AvatarInpute.vue":
/*!************************************************************!*\
  !*** ./assets/components/user/userNavBar/AvatarInpute.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AvatarInpute_vue_vue_type_template_id_023772bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarInpute.vue?vue&type=template&id=023772bf& */ "./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=template&id=023772bf&");
/* harmony import */ var _AvatarInpute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarInpute.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/AvatarInpute.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AvatarInpute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AvatarInpute_vue_vue_type_template_id_023772bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _AvatarInpute_vue_vue_type_template_id_023772bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/AvatarInpute.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/TaskList.vue":
/*!**************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/TaskList.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskList_vue_vue_type_template_id_4ccb8e57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=4ccb8e57& */ "./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=template&id=4ccb8e57&");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/TaskList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskList_vue_vue_type_template_id_4ccb8e57___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskList_vue_vue_type_template_id_4ccb8e57___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/TaskList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/TaskStatus.vue":
/*!****************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/TaskStatus.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskStatus_vue_vue_type_template_id_ffc6412a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskStatus.vue?vue&type=template&id=ffc6412a& */ "./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=template&id=ffc6412a&");
/* harmony import */ var _TaskStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskStatus.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/TaskStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaskStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskStatus_vue_vue_type_template_id_ffc6412a___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskStatus_vue_vue_type_template_id_ffc6412a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/TaskStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/popover/Popper.vue":
/*!********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/popover/Popper.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popper_vue_vue_type_template_id_23b68fea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper.vue?vue&type=template&id=23b68fea& */ "./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=template&id=23b68fea&");
/* harmony import */ var _Popper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popper.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/popover/Popper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Popper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Popper_vue_vue_type_template_id_23b68fea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Popper_vue_vue_type_template_id_23b68fea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/popover/Popper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/popover/Tag.vue":
/*!*****************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/popover/Tag.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tag_vue_vue_type_template_id_09681668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.vue?vue&type=template&id=09681668& */ "./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=template&id=09681668&");
/* harmony import */ var _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/popover/Tag.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Tag_vue_vue_type_template_id_09681668___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tag_vue_vue_type_template_id_09681668___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/popover/Tag.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/store/StoreFiles.vue":
/*!**********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/store/StoreFiles.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoreFiles_vue_vue_type_template_id_d8198bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreFiles.vue?vue&type=template&id=d8198bd0& */ "./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=template&id=d8198bd0&");
/* harmony import */ var _StoreFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreFiles.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/store/StoreFiles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StoreFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StoreFiles_vue_vue_type_template_id_d8198bd0___WEBPACK_IMPORTED_MODULE_0__.render,
  _StoreFiles_vue_vue_type_template_id_d8198bd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/store/StoreFiles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/BoardName.vue":
/*!************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/BoardName.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BoardName_vue_vue_type_template_id_a76a9ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardName.vue?vue&type=template&id=a76a9ed4& */ "./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=template&id=a76a9ed4&");
/* harmony import */ var _BoardName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardName.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/subitems/BoardName.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BoardName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BoardName_vue_vue_type_template_id_a76a9ed4___WEBPACK_IMPORTED_MODULE_0__.render,
  _BoardName_vue_vue_type_template_id_a76a9ed4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/BoardName.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue":
/*!*************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/DatePicker.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatePicker_vue_vue_type_template_id_e185cfb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=template&id=e185cfb2& */ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=template&id=e185cfb2&");
/* harmony import */ var _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/subitems/DatePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DatePicker_vue_vue_type_template_id_e185cfb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatePicker_vue_vue_type_template_id_e185cfb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/DatePicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue":
/*!**************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/MentionList.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MentionList_vue_vue_type_template_id_66a76e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MentionList.vue?vue&type=template&id=66a76e26&scoped=true& */ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=template&id=66a76e26&scoped=true&");
/* harmony import */ var _MentionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MentionList.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=script&lang=js&");
/* harmony import */ var _MentionList_vue_vue_type_style_index_0_id_66a76e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true& */ "./assets/components/user/userNavBar/Board/subitems/MentionList.vue?vue&type=style&index=0&id=66a76e26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MentionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MentionList_vue_vue_type_template_id_66a76e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MentionList_vue_vue_type_template_id_66a76e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66a76e26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/MentionList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue":
/*!*************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SlidePanel_vue_vue_type_template_id_7f499d9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlidePanel.vue?vue&type=template&id=7f499d9e& */ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=template&id=7f499d9e&");
/* harmony import */ var _SlidePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlidePanel.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/subitems/SlidePanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SlidePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SlidePanel_vue_vue_type_template_id_7f499d9e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SlidePanel_vue_vue_type_template_id_7f499d9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/SlidePanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SubTask.vue":
/*!**********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SubTask.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubTask_vue_vue_type_template_id_dbbb69ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubTask.vue?vue&type=template&id=dbbb69ac& */ "./assets/components/user/userNavBar/Board/subitems/SubTask.vue?vue&type=template&id=dbbb69ac&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _SubTask_vue_vue_type_template_id_dbbb69ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubTask_vue_vue_type_template_id_dbbb69ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/SubTask.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue":
/*!**************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubtaskList_vue_vue_type_template_id_44bbf3c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubtaskList.vue?vue&type=template&id=44bbf3c8& */ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=template&id=44bbf3c8&");
/* harmony import */ var _SubtaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubtaskList.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/subitems/SubtaskList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubtaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubtaskList_vue_vue_type_template_id_44bbf3c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubtaskList_vue_vue_type_template_id_44bbf3c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/SubtaskList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue":
/*!*********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Board/subitems/TipTap.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TipTap_vue_vue_type_template_id_9852f25a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TipTap.vue?vue&type=template&id=9852f25a& */ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=template&id=9852f25a&");
/* harmony import */ var _TipTap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TipTap.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=script&lang=js&");
/* harmony import */ var _TipTap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TipTap.vue?vue&type=style&index=0&lang=scss& */ "./assets/components/user/userNavBar/Board/subitems/TipTap.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TipTap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TipTap_vue_vue_type_template_id_9852f25a___WEBPACK_IMPORTED_MODULE_0__.render,
  _TipTap_vue_vue_type_template_id_9852f25a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Board/subitems/TipTap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Department/Department.vue":
/*!*********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/Department.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Department_vue_vue_type_template_id_60a5cd34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Department.vue?vue&type=template&id=60a5cd34& */ "./assets/components/user/userNavBar/Department/Department.vue?vue&type=template&id=60a5cd34&");
/* harmony import */ var _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Department.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Department/Department.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Department_vue_vue_type_template_id_60a5cd34___WEBPACK_IMPORTED_MODULE_0__.render,
  _Department_vue_vue_type_template_id_60a5cd34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Department/Department.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Department/Incidents.vue":
/*!********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/Incidents.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Incidents_vue_vue_type_template_id_016da322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incidents.vue?vue&type=template&id=016da322& */ "./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=template&id=016da322&");
/* harmony import */ var _Incidents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Incidents.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Department/Incidents.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Incidents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Incidents_vue_vue_type_template_id_016da322___WEBPACK_IMPORTED_MODULE_0__.render,
  _Incidents_vue_vue_type_template_id_016da322___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Department/Incidents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Department/InformationText.vue":
/*!**************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Department/InformationText.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationText_vue_vue_type_template_id_0d7d5487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationText.vue?vue&type=template&id=0d7d5487& */ "./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=template&id=0d7d5487&");
/* harmony import */ var _InformationText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationText.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Department/InformationText.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InformationText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InformationText_vue_vue_type_template_id_0d7d5487___WEBPACK_IMPORTED_MODULE_0__.render,
  _InformationText_vue_vue_type_template_id_0d7d5487___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Department/InformationText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Incidencias.vue":
/*!***********************************************************!*\
  !*** ./assets/components/user/userNavBar/Incidencias.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Incidencias_vue_vue_type_template_id_6fa698c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incidencias.vue?vue&type=template&id=6fa698c2& */ "./assets/components/user/userNavBar/Incidencias.vue?vue&type=template&id=6fa698c2&");
/* harmony import */ var _Incidencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Incidencias.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Incidencias.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Incidencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Incidencias_vue_vue_type_template_id_6fa698c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Incidencias_vue_vue_type_template_id_6fa698c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Incidencias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/InformationProfile.vue":
/*!******************************************************************!*\
  !*** ./assets/components/user/userNavBar/InformationProfile.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationProfile_vue_vue_type_template_id_6f780648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationProfile.vue?vue&type=template&id=6f780648& */ "./assets/components/user/userNavBar/InformationProfile.vue?vue&type=template&id=6f780648&");
/* harmony import */ var _InformationProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationProfile.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/InformationProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InformationProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InformationProfile_vue_vue_type_template_id_6f780648___WEBPACK_IMPORTED_MODULE_0__.render,
  _InformationProfile_vue_vue_type_template_id_6f780648___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/InformationProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Profile/Editable.vue":
/*!****************************************************************!*\
  !*** ./assets/components/user/userNavBar/Profile/Editable.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editable_vue_vue_type_template_id_eddef456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editable.vue?vue&type=template&id=eddef456& */ "./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=template&id=eddef456&");
/* harmony import */ var _Editable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editable.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Profile/Editable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Editable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Editable_vue_vue_type_template_id_eddef456___WEBPACK_IMPORTED_MODULE_0__.render,
  _Editable_vue_vue_type_template_id_eddef456___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Profile/Editable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/UserBoard.vue":
/*!*********************************************************!*\
  !*** ./assets/components/user/userNavBar/UserBoard.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserBoard_vue_vue_type_template_id_cbcab380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBoard.vue?vue&type=template&id=cbcab380& */ "./assets/components/user/userNavBar/UserBoard.vue?vue&type=template&id=cbcab380&");
/* harmony import */ var _UserBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBoard.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/UserBoard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserBoard_vue_vue_type_template_id_cbcab380___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserBoard_vue_vue_type_template_id_cbcab380___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/UserBoard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/UserDepartment.vue":
/*!**************************************************************!*\
  !*** ./assets/components/user/userNavBar/UserDepartment.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDepartment_vue_vue_type_template_id_61ea9e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDepartment.vue?vue&type=template&id=61ea9e68& */ "./assets/components/user/userNavBar/UserDepartment.vue?vue&type=template&id=61ea9e68&");
/* harmony import */ var _UserDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDepartment.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/UserDepartment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserDepartment_vue_vue_type_template_id_61ea9e68___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDepartment_vue_vue_type_template_id_61ea9e68___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/UserDepartment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/UserProfile.vue":
/*!***********************************************************!*\
  !*** ./assets/components/user/userNavBar/UserProfile.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserProfile_vue_vue_type_template_id_2dd43f03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=2dd43f03& */ "./assets/components/user/userNavBar/UserProfile.vue?vue&type=template&id=2dd43f03&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/UserProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserProfile_vue_vue_type_template_id_2dd43f03___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserProfile_vue_vue_type_template_id_2dd43f03___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/UserProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/Welcome.vue":
/*!***************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/Welcome.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_448cc98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=448cc98c& */ "./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=template&id=448cc98c&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/Welcome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Welcome_vue_vue_type_template_id_448cc98c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Welcome_vue_vue_type_template_id_448cc98c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/Welcome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue":
/*!********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WelcomeTeams_vue_vue_type_template_id_835b8468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeTeams.vue?vue&type=template&id=835b8468& */ "./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=template&id=835b8468&");
/* harmony import */ var _WelcomeTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomeTeams.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/WelcomeTeams.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _WelcomeTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WelcomeTeams_vue_vue_type_template_id_835b8468___WEBPACK_IMPORTED_MODULE_0__.render,
  _WelcomeTeams_vue_vue_type_template_id_835b8468___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/WelcomeTeams.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue":
/*!*************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MembersChart_vue_vue_type_template_id_4b8e1b4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersChart.vue?vue&type=template&id=4b8e1b4e& */ "./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=template&id=4b8e1b4e&");
/* harmony import */ var _MembersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersChart.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MembersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MembersChart_vue_vue_type_template_id_4b8e1b4e___WEBPACK_IMPORTED_MODULE_0__.render,
  _MembersChart_vue_vue_type_template_id_4b8e1b4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/tabs/MembersChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue":
/*!************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MembersList_vue_vue_type_template_id_36c3d95e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersList.vue?vue&type=template&id=36c3d95e& */ "./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=template&id=36c3d95e&");
/* harmony import */ var _MembersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersList.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/tabs/MembersList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MembersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MembersList_vue_vue_type_template_id_36c3d95e___WEBPACK_IMPORTED_MODULE_0__.render,
  _MembersList_vue_vue_type_template_id_36c3d95e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/tabs/MembersList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/Organization.vue":
/*!*************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/Organization.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Organization_vue_vue_type_template_id_06ae0988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Organization.vue?vue&type=template&id=06ae0988& */ "./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=template&id=06ae0988&");
/* harmony import */ var _Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Organization.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/tabs/Organization.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Organization_vue_vue_type_template_id_06ae0988___WEBPACK_IMPORTED_MODULE_0__.render,
  _Organization_vue_vue_type_template_id_06ae0988___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/tabs/Organization.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue":
/*!*************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TabComponent_vue_vue_type_template_id_8fb73f1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabComponent.vue?vue&type=template&id=8fb73f1e& */ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=template&id=8fb73f1e&");
/* harmony import */ var _TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabComponent.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TabComponent_vue_vue_type_template_id_8fb73f1e___WEBPACK_IMPORTED_MODULE_0__.render,
  _TabComponent_vue_vue_type_template_id_8fb73f1e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/tabs/TabComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue":
/*!**************************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TabsComponent_vue_vue_type_template_id_450a9366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabsComponent.vue?vue&type=template&id=450a9366& */ "./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=template&id=450a9366&");
/* harmony import */ var _TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabsComponent.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TabsComponent_vue_vue_type_template_id_450a9366___WEBPACK_IMPORTED_MODULE_0__.render,
  _TabsComponent_vue_vue_type_template_id_450a9366___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/tabs/TabsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue":
/*!**********************************************************************!*\
  !*** ./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TeamsList_vue_vue_type_template_id_1f949cbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamsList.vue?vue&type=template&id=1f949cbb& */ "./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=template&id=1f949cbb&");
/* harmony import */ var _TeamsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamsList.vue?vue&type=script&lang=js& */ "./assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TeamsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TeamsList_vue_vue_type_template_id_1f949cbb___WEBPACK_IMPORTED_MODULE_0__.render,
  _TeamsList_vue_vue_type_template_id_1f949cbb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/user/userNavBar/Welcome/tabs/TeamsList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/views/App.vue":
/*!******************************!*\
  !*** ./assets/views/App.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_2e4360e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2e4360e2&scoped=true& */ "./assets/views/App.vue?vue&type=template&id=2e4360e2&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/views/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _App_vue_vue_type_template_id_2e4360e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_2e4360e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2e4360e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_tiptap_extension-image_dist_tiptap-extension-image_esm_js-node_modules_t-392db8"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);