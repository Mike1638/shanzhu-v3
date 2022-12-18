import { defineComponent } from "vue";
import s from '../../views/welcome.module.scss';
import logo from '../../assets/icons/cloudy.png'
import { welcomelayout } from "./welcomelayout";
export const Fourth = defineComponent({
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
                }}
            </welcomelayout>
        )
    }
})