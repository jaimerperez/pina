import Vue from 'vue'
import VueRouter from 'vue-router'
import UserBoard from './components/user/userNavBar/UserBoard'
import SlidePanel from './components/user/userNavBar/Board/subitems/SlidePanel'
import Views from './components/user/userNavBar/Board/subitems/Views'
import Admin from './components/user/userNavBar/Admin/Admin'
import UserProfile from './components/user/userNavBar/UserProfile'
import UserDepartment from './components/user/userNavBar/UserDepartment'
import Incidents from './components/user/userNavBar/Department/Incidents'
import Incidencias from './components/user/userNavBar/Incidencias'
import PasswordReset from './components/login/PasswordReset'
import PasswordChange from './components/login/PasswordChange'
import Welcome from './components/user/userNavBar/Welcome/Welcome'
import Mail from './components/user/userNavBar/Mail'
import WelcomeTeams from './components/user/userNavBar/Welcome/WelcomeTeams'
import StoreFile from './components/user/userNavBar/Board/store/StoreFiles'
import Redirect from './components/Redirect'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
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
          path: '', component: UserProfile
        },
        {
          path: '/mail', component: Mail
        },
        {
          path: '/department/:departmentName/:departmentID', component: WelcomeTeams,
          name:'welcometeams',
          props: true
        },
        {
          path: '/board/:boardTeamID/:boardName', component: UserBoard,
          name:'teams',
          props: true,
          children: [
            {
              path: 'slidepanel/:id',  component: SlidePanel,
              name: 'slidepanel',
              props: true
            },
            {
              path: 'views',  component: Views,
              name: 'views',
              props: true
            }
          ]
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
          path: '/incidents/:teamID/:teamName', component:Incidents,
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