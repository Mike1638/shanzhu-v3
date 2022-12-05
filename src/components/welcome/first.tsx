import { defineComponent } from "vue";
import logo from '../../assets/icons/saving-pot.png'
import s from '../../views/welcome.module.scss'

export const First = defineComponent({
    setup() {
        return () => (
            <div class={s.card}>
                <div class={s.content}>
                    <img src={logo} />
                    <div class={s.money}>会挣钱</div>
                    <div>还要会省钱</div>
                    <router-link class={s.nextpage} to='/welcome/second'>下一页</router-link>
                </div>
            </div>
        )
    }
})