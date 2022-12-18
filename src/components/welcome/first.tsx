import { defineComponent } from "vue";
import logo from '../../assets/icons/saving-pot.png'
import s from '../../views/welcome.module.scss'
import { welcomelayout } from "./welcomelayout";
export const First = defineComponent({
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
                        <router-link class={s.nextpage} to='/welcome/second'>下一页</router-link>
                    )
                }}
            </welcomelayout>
        )
    }
})