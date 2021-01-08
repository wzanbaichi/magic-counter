import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
    onlyContent: false           if set true, the menu and the navbar will not show
    noAuthentication: false      if set true, means the route don`t need authentication 
    menuType: 'volunteer',
    parentRoute: ''              parent`s routeName
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 * 管理端路由name必须以M字母开头，志愿端路由name必须以非M字母开头
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: 'login',
    hidden: true
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true,
    meta: { noAuthentication: true }
  },

  {
    path: '/homepage',
    component: Layout,
    redirect: '/homepage',
    hidden: true,
    children: [
      {
        path: '/homepage',
        name: 'homepage',
        component: () => import('@/views/homepage'),
        meta: {
          title: '主页',
          icon: 'dashboard',
          onlyContent: true,
          menuType: 'volunteer',
          noAuthentication: true
        }
      }
    ]
  },

  {
    path: '/volunteer/system-management',
    component: Layout,
    name: 'SystemManagement',
    meta: {
      title: '系统管理',
      icon: 'dashboard',
      gnbh: 'sbgl',
      menuType: 'volunteer'
    },
    redirect: '/volunteer/system-management/organization-management',
    children: [
      {
        path: 'organization-management',
        name: 'OrganizationManagement',
        component: () =>
          import('@/views/volunteer/system-management/organization-management'),
        meta: {
          title: '单位管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      // {
      //   path: 'enrol-point-management',
      //   name: 'EnrolPointManagement',
      //   component: () =>
      //     import('@/views/volunteer/system-management/enrol-point-management'),
      //   meta: {
      //     title: '报名点管理',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // },
      {
        path: 'role-management',
        name: 'RoleManagement',
        component: () =>
          import('@/views/volunteer/system-management/role-management'),
        meta: {
          title: '角色管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'user-management',
        name: 'UserManagement',
        component: () =>
          import('@/views/volunteer/system-management/user-management'),
        meta: {
          title: '用户管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'dictionary-management',
        name: 'DictionaryManagement',
        component: () =>
          import('@/views/volunteer/system-management/dictionary-management'),
        meta: {
          title: '字典管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      }
    ]
  },

  {
    path: '/volunteer/project-management',
    component: Layout,
    name: 'ProjectManagement',
    redirect: '/project-management/batch-info-management',
    meta: {
      title: '项目管理',
      icon: 'dashboard',
      gnbh: 'sbgl',
      menuType: 'volunteer'
    },
    children: [
      {
        path: 'file-upload-management',
        name: 'FileUploadManagement',
        component: () =>
          import('@/views/volunteer/project-management/file-upload-management'),
        meta: {
          title: '文件上传管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'file-read-management',
        name: 'FileReadManagement',
        component: () =>
          import('@/views/volunteer/project-management/file-read-management'),
        meta: {
          title: '文件阅读管理',
          icon: 'dashboard',
          menuType: 'volunteer',
          activeMenu: '/volunteer/project-management/file-read-management'
        },
        children: [
          {
            path: '',
            name: 'FileReadManagement',
            component: () =>
              import('@/views/volunteer/project-management/file-read-management/table'),
            hidden: true,
            meta: {
              title: '文件阅读管理',
              icon: 'dashboard',
              menuType: 'volunteer',
              breadcrumb: false,
              activeMenu: '/volunteer/project-management/file-read-management'
            }
          },
          {
            path: 'file-edit',
            name: 'FileReadManagementEdit',
            component: () =>
              import('@/views/volunteer/project-management/file-read-management/file-edit'),
            hidden: true,
            meta: {
              title: '文件编辑',
              icon: 'dashboard',
              menuType: 'volunteer',
              activeMenu: '/volunteer/project-management/file-read-management',
              parentRoute: 'FileReadManagement'
            }
          }
        ]
      },
      {
        path: 'batch-info-management',
        name: 'BatchInfoManagement',
        component: () =>
          import('@/views/volunteer/project-management/batch-info-management'),
        meta: {
          title: '批次信息管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'compatibility-enrol-management',
        name: 'CompatibilityEnrolManagement',
        component: () =>
          import('@/views/volunteer/project-management/compatibility-enrol-management'),
        meta: {
          title: '兼报信息管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'plan-info-management',
        name: 'PlanInfoManagement',
        component: () =>
          import('@/views/volunteer/project-management/plan-info-management'),
        meta: {
          title: '计划信息管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      }
      // {
      //   path: 'over-year-admission-line',
      //   name: 'OverYearAdmissionLine',
      //   component: () =>
      //     import('@/views/volunteer/project-management/over-year-admission-line'),
      //   meta: {
      //     title: '历年录取控线',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // }
      // {
      //   path: 'student-ready-management',
      //   component: () =>
      //     import('@/views/volunteer/project-management/student-ready-management'),
      //   meta: {
      //     title: '考生必读管理',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   },
      //   children: [
      //     {
      //       path: '',
      //       name: 'StudentReadyManagementTable',
      //       component: () =>
      //         import('@/views/volunteer/project-management/student-ready-management/table'),
      //       meta: {
      //         title: '考生必读管理',
      //         icon: 'dashboard',
      //         menuType: 'volunteer',
      //         breadcrumb: false
      //       }
      //     },
      //     {
      //       path: 'file-edit',
      //       name: 'StudentReadyManagementFileEdit',
      //       component: () =>
      //         import('@/views/volunteer/project-management/student-ready-management/file-edit'),
      //       hidden: true,
      //       meta: {
      //         title: '文件编辑',
      //         icon: 'dashboard',
      //         menuType: 'volunteer'
      //       }
      //     }
      //   ]
      // }
    ]
  },

  {
    path: '/volunteer/volunteer-management',
    component: Layout,
    name: 'VolunteerManagement',
    // redirect: '/system-management/organization-management',
    meta: {
      title: '志愿管理',
      icon: 'dashboard',
      gnbh: 'sbgl',
      menuType: 'volunteer'
    },
    children: [
      {
        path: 'examinee-info-management',
        name: 'ExamineeInfoManagement',
        component: () =>
          import('@/views/volunteer/volunteer-management/examinee-info-management'),
        meta: {
          title: '考生信息管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'examinee-score-management',
        name: 'ExamineeScoreManagement',
        component: () =>
          import('@/views/volunteer/volunteer-management/examinee-score-management'),
        meta: {
          title: '考生成绩管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'enroll-list-management',
        name: 'EnrollListManagement',
        component: () =>
          import('@/views/volunteer/volunteer-management/enroll-list-management'),
        meta: {
          title: '录取名单管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'arts-qualified-examinee',
        name: 'ArtsQualifiedExaminee',
        component: () =>
          import('@/views/volunteer/volunteer-management/arts-qualified-examinee'),
        meta: {
          title: '资格名单管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'collect-qualification-management',
        name: 'CollectQualificationManagement',
        component: () =>
          import('@/views/volunteer/volunteer-management/collect-qualification-management'),
        meta: {
          title: '征集资格管理',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      },
      {
        path: 'overall-situation-statistics',
        name: 'OverallSituationStatistics',
        component: () =>
          import('@/views/volunteer/volunteer-management/overall-situation-statistics'),
        meta: {
          title: '总体情况统计',
          icon: 'dashboard',
          menuType: 'volunteer'
        }
      }
      // {
      //   path: 'independent-enrollment-qualification',
      //   name: 'IndependentEnrollmentQualification',
      //   component: () =>
      //     import('@/views/volunteer/volunteer-management/independent-enrollment-qualification'),
      //   meta: {
      //     title: '自主招生资格',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // },
      // {
      //   path: 'reporting-status-statistics',
      //   name: 'ReportingStatusStatistics',
      //   component: () =>
      //     import('@/views/volunteer/volunteer-management/reporting-status-statistics'),
      //   meta: {
      //     title: '填报状态统计',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // },
      // {
      //   path: 'batch-reporting-statistics',
      //   name: 'BatchReportingStatistics',
      //   component: () =>
      //     import('@/views/volunteer/volunteer-management/batch-reporting-statistics'),
      //   meta: {
      //     title: '批次填报统计',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // },
      // {
      //   path: 'volunteer-print-setting',
      //   name: 'VolunteerPrintSetting',
      //   component: () =>
      //     import('@/views/volunteer/volunteer-management/volunteer-print-setting'),
      //   meta: {
      //     title: '志愿表打印设置',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // }
      // {
      //   path: 'colleges-reporting-adjust',
      //   name: 'CollegesReportingAdjust',
      //   component: () =>
      //     import('@/views/volunteer/volunteer-management/colleges-reporting-adjust'),
      //   meta: {
      //     title: '院校填报调剂',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // },
      // {
      //   path: 'volunteer-whereabouts-statistics',
      //   name: 'VolunteerWhereaboutsStatistics',
      //   component: () =>
      //     import('@/views/volunteer/volunteer-management/volunteer-whereabouts-statistics'),
      //   meta: {
      //     title: '志愿去向统计',
      //     icon: 'dashboard',
      //     menuType: 'volunteer'
      //   }
      // }
    ]
  },

  //管理端路由
  {
    path: '/management/system-management',
    component: Layout,
    name: 'MSystemManagement',
    meta: {
      title: '基础管理',
      icon: 'dashboard',
      gnbh: 'sbgl',
      menuType: 'management'
    },
    redirect: '/management/system-management/project-control',
    children: [
      {
        path: 'project-control',
        name: 'MProjectControl',
        component: () =>
          import('@/views/management/system-management/project-control'),
        meta: {
          title: '项目管控',
          icon: 'dashboard',
          menuType: 'management',
          activeMenu: 'management/system-management/project-control'
        },
        children: [
          {
            path: '',
            name: 'MProjectControl',
            component: () =>
              import('@/views/management/system-management/project-control/components/table-data'),
            hidden: true,
            meta: {
              title: '项目管控',
              menuType: 'management',
              breadcrumb: false,
              activeMenu: '/management/system-management/project-control'
            }
          },
          {
            path: 'new-project',
            name: 'MProjectControlNewProject',
            component: () =>
              import('@/views/management/system-management/project-control/components/new-project'),
            hidden: true,
            meta: {
              title: '定制新项目',
              menuType: 'management',
              activeMenu: '/management/system-management/project-control',
              parentRoute: 'MProjectControl'
            }
          }
        ]
      },
      // {
      //   path: 'examinee-locus-management',
      //   name: 'MExamineeLocusManagement',
      //   component: () =>
      //     import('@/views/management/system-management/examinee-locus-management'),
      //   meta: {
      //     title: '考生轨迹管理',
      //     icon: 'dashboard',
      //     menuType: 'management'
      //   }
      // },
      // {
      //   path: 'examinee-account-management',
      //   name: 'MExamineeAccountManagement',
      //   component: () =>
      //     import('@/views/management/system-management/examinee-account-management'),
      //   meta: {
      //     title: '考生账户',
      //     icon: 'dashboard',
      //     menuType: 'management'
      //   }
      // },
      {
        path: 'student-log-management',
        name: 'MStudentLogManagement',
        component: () =>
          import('@/views/management/system-management/student-log-management'),
        meta: {
          title: '考生日志',
          icon: 'dashboard',
          menuType: 'management'
        }
      },
      {
        path: 'manager-log-management',
        name: 'MManagetLogManagement',
        component: () =>
          import('@/views/management/system-management/manager-log-management'),
        meta: {
          title: '系统日志',
          icon: 'dashboard',
          menuType: 'management'
        }
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
