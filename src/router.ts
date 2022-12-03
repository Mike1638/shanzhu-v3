import { createRouter, createWebHashHistory } from 'vue-router'
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'
const routes = [
    {
        path: '/foo', component: Foo
    },
    {
        path: '/bar', component: Bar
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

