import mgnPageOne from '../pages/activityMgn/mgnPageOne.vue'
import mgnPageTwo from '../pages/activityMgn/mgnPageTwo.vue'
import mgnPageThree from '../pages/activityMgn/mgnPageThree.vue'

export default {
    path: '/activityMgn',
    title: '策划活动',
    redirect: '/activityMgn/pageOne',
    children: [
        {
            path: 'mgnPageOne',
            name: 'mngPagOne',
            title: '策划活动页面1',
            component: mgnPageOne
        },
        {
            path: 'mgnPageTwo',
            name: 'pageTow',
            title: '策划活动页面2',
            component: mgnPageTwo
        },
        {
            path: 'mgnPageThree',
            name: 'mgnPageThree',
            title: '策划活动页面3',
            component: mgnPageThree
        },
    ],
}