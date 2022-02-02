import { createRouter, createWebHistory } from 'vue-router'
import HostelDetails from '../components/LandingPage/HostelDetails.vue'
import test from '../components/Test/test.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HostelDetails
        },
        {
            path: '/test',
            component: test
        }
    ]
})

export default router