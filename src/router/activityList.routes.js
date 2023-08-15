import pageOne from '../pages/activityList/pageOne.vue'
import pageTow from '../pages/activityList/pageTow.vue'
import pageThree from '../pages/activityList/pageThree.vue'

export default {
    path: '/activityList',
    title: '策划列表',
    redirect: '/activityList/pageOne',
    children: [
        {
            path: 'pageOne',
            name: 'pageOne',
            title: '策划列表页面1',
            component: pageOne
        },
        {
            path: 'pageTow',
            name: 'pageTow',
            title: '策划列表页面2',
            component: pageTow
        },
        {
            path: 'pageThree',
            name: 'pageThree',
            title: '策划列表页面3',
            component: pageThree
        },
    ],
}