import Vue from 'vue'
import VueRouter from 'vue-router'
import UserBoard from './components/user/userNavBar/UserBoard'
import Admin from './components/user/userNavBar/Admin/Admin'
import UserProfile from './components/user/userNavBar/UserProfile'
import UserDepartment from './components/user/userNavBar/UserDepartment'
import Department from './components/user/userNavBar/Department/Department'
import Incidents from './components/user/userNavBar/Department/Incidents'
import Incidencias from './components/user/userNavBar/Incidencias'
import PasswordReset from './components/login/PasswordReset'
import PasswordChange from './components/login/PasswordChange'
import Welcome from './components/user/userNavBar/Welcome/Welcome'
import WelcomeTeams from './components/user/userNavBar/Welcome/WelcomeTeams'
import StoreFile from './components/user/userNavBar/Board/store/StoreFiles'
import Redirect from './components/Redirect'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/passwordreset', component: PasswordReset
    },
    {
      path: '/passwordchange', component: PasswordChange
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('./views/User.vue'),
      children: [
        {
          path: 'welcome', component: Welcome
        },
        {
          path: '', component: Welcome
        },
        {
          path: '/department/:departmentName/:departmentID', component: WelcomeTeams,
          name:'welcometeams',
          props: true
        },
        {
          path: '/board/:boardTeamID/:boardName', component: UserBoard,
          name:'teams',
          props: true
        },
        {
          path: 'profile', component: UserProfile
        },
        {
          path: '/storefile/:boardName/:boardId', component: StoreFile,
          name:'StoreFile',
          props: true
        },
        {
          path: 'admin', component: Admin
        },
        {
          path: '/profile/:idUser', component: UserProfile,
          name:'profileUser',
          props: true
        },
        {
          path: 'department', component: UserDepartment,
        },
        {
          path: '/incidencias/:departmentName/:departmentID', component:Incidencias,
          name:'incidencias',
          props: true
        },
        {
          path: '/incidents/:departmentName/:teamID/:teamName', component:Incidents,
          name:'incidents',
          props: true
        },
      ]
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('./views/Logout.vue')
    },
    {
      path: '/*',
      name: 'redirect',
      component: Redirect
    }
  ]
});

export default router;