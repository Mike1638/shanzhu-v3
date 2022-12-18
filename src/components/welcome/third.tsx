import { defineComponent } from "vue";
import s from '../../views/welcome.module.scss'
import logo from '../../assets/icons/chart.png'
import { welcomelayout } from "./welcomelayout";

export const Third = defineComponent({
    component: [welcomelayout],
    setup() {
        return () => (
            <welcomelayout>
                {{
                    logo: () => (
                        <img src={logo} />
                    ),
                    words: () => (
                        <>
                            <div class={s.money}>会挣钱</div>
                            <div>还要会省钱</div>
                        </>
                    ),
                    nextpage: () => (
                        <router-link class={s.nextpage} to='/welcome/fourth'>下一页</router-link>
                    )
                }}
            </welcomelayout>
        )
    }
})