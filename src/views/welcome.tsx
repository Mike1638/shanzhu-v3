import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './welcome.module.scss';
import logo from '../assets/icons/logo.png'
export const Welcome = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.skip}>
                    <span>跳过</span>
                </div>
                <header>
                    <img src={logo} />
                    <div>山竹记账</div>
                </header>
                <RouterView />
            </div>
        )
    }
})