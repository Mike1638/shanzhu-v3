import { defineComponent } from "vue";
import s from '../../views/welcome.module.scss'

export const welcomelayout = defineComponent({
    setup(props, context) {
        const slots = context.slots
        return () => (
            <div class={s.card}>
                <div class={s.content}>
                    {slots.logo && slots.logo()}
                    {slots.words && slots.words()}
                    {slots.nextpage && slots.nextpage()}
                </div>
            </div>
        )
    }
})