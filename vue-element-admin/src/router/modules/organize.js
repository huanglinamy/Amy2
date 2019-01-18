/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/organize',
  component: Layout,
  redirect: '/organize/coding',
  name: 'Organize',
  meta: {
    title: 'Organize',
    icon: 'table'
  },
  children: [{
      path: 'index',
      component: () => import('@/views/organize/index'),
      name: 'Index',
      meta: {title: 'OrganizeList'}
    },{
      path: 'coding',
      component: () => import('@/views/organize/index'),
      name: 'Coding',
      meta: { title: 'Coding',roles: ['coding'] }
    },{
      path: 'review',
      component: () => import('@/views/organize/index'),
      name: 'Review',
      meta: { title: 'Review',roles: ['review'] }
    },{
      path: 'commit',
      // component: () => import('@/views/organize/index'),
      component: () => import('@/views/organize/commit'),
      name: 'Commit',
      meta: { title: 'Commit',roles: ['commit'] }
    },{
      path: 'prd',
      component: () => import('@/views/organize/index'),
      name: 'Prd',
      meta: { title: 'Prd',roles: ['prd'] }
    },{
      path: 'demand',
      component: () => import('@/views/organize/index'),
      name: 'Demand',
      meta: { title: 'Demand',roles: ['demand'] }
    },{
      path: 'activity',
      component: () => import('@/views/organize/index'),
      name: 'Activity',
      meta: { title: 'Activity',roles: ['activity'] }
    },{
      path: 'ui',
      component: () => import('@/views/organize/index'),
      name: 'UI',
      meta: { title: 'UI',roles: ['ui'] }
    }
  ]
}
export default userRouter