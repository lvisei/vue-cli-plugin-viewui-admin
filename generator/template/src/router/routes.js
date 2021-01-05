import MainView from '@/layouts/MainView'
// import RouteView from '@/layouts/RouteView'

/**
 * configurable parameters under the routing '/'
 * hidden: true                        if `hidden:true` will not show in the sidebar, default is false
 * name:'router-name'                  must set and globally unique
 * meta : {
    auths: ['super_admin','admin']     set multiple roles, default is null
    title: 'title'                     the name show in submenu and breadcrumb, must set
    icon: 'icon-name'                  the icon show in the sidebar, must set
    href: 'url'                        redirect url
  }
**/

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login'),
    meta: { title: '登陆' },
    hidden: true
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "error-page-404" */ '@/pages/error-page/404'),
    meta: { title: '404' },
    hidden: true
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "error-page-401" */ '@/pages/error-page/401'),
    meta: { title: '无权限' },
    hidden: true
  },
  {
    path: '/500',
    component: () => import(/* webpackChunkName: "error-page-500" */ '@/pages/error-page/500'),
    meta: { title: '500' },
    hidden: true
  },
  {
    path: '/redirect',
    component: MainView,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import(/* webpackChunkName: "layouts-redirect" */ '@/layouts/Redirect')
      }
    ]
  }
]

const syncRoutes = [
  {
    path: '/',
    name: 'entrance',
    meta: { title: '主页', icon: 'md-home' },
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home'),
        meta: { title: '首页', icon: 'md-speedometer' }
      }
    ]
  },
  {
    path: '/system-management',
    name: 'SystemManagement',
    meta: { title: '系统管理', icon: 'md-settings' },
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: 'user-management',
        name: 'UserManagement',
        component: () =>
          import(
            /* webpackChunkName: "user-management" */ '@/pages/system-management/user-management'
          ),
        meta: { title: '用户管理', icon: 'md-person' }
      },
      {
        path: 'role-management',
        name: 'RoleManagement',
        component: () =>
          import(
            /* webpackChunkName: "role-management" */ '@/pages/system-management/role-management'
          ),
        meta: { title: '角色管理', icon: 'md-people' }
      },
      {
        path: 'menu-management',
        name: 'MenuManagement',
        component: () =>
          import(
            /* webpackChunkName: "menu-management" */ '@/pages/system-management/menu-management'
          ),
        meta: { title: '菜单管理', icon: 'md-menu' }
      }
    ]
  },
  {
    path: '/user-page',
    name: 'UserPage',
    component: MainView,
    meta: { title: '个人页', icon: 'md-person' },
    children: [
      {
        path: 'user-center',
        name: 'UserCenter',
        component: () =>
          import(/* webpackChunkName: "user-center" */ '@/pages/user-page/user-center'),
        meta: { title: '个人中心', icon: 'logo-octocat' }
      },
      {
        path: 'user-set',
        name: 'UserSet',
        component: () => import(/* webpackChunkName: "user-set" */ '@/pages/user-page/user-set'),
        meta: { title: '个人设置', icon: 'ios-settings' }
      }
    ]
  }
]

export const asyncRoutes = [
  ...syncRoutes,
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
