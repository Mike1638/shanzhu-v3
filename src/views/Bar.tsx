import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export const Bar = defineComponent({
    setup() {
        return () => (
            <>
                <div>bar</div>
                <router-link to="/foo">Go to foo</router-link>
            </>
        )
    }
})