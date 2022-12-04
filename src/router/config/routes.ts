import { RouteRecordRaw } from "vue-router";
import { First } from "../../components/welcome/first";
import { Fourth } from "../../components/welcome/fourth";
import { Second } from "../../components/welcome/second";
import { Third } from "../../components/welcome/Third";
import { Bar } from "../../views/Bar";
import { Foo } from "../../views/Foo";
import { Welcome } from "../../views/welcome";

export const routes: RouteRecordRaw[] = [
    {
        path: '/foo', component: Foo
    },
    {
        path: '/bar', component: Bar
    },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            {
                path: 'first', component: First
            },
            {
                path: 'second', component: Second
            },
            {
                path: 'third', component: Third
            },
            {
                path: 'fourth', component: Fourth
            },
        ]
    }
]