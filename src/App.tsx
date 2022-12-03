import { defineComponent, ref } from "vue";
import { RouterView, RouterLink } from "vue-router";

export const App = defineComponent({
    setup() {

        return () => (
            <>
                <div style='border:1px solid red'>
                    <RouterView></RouterView>
                </div >
                <router-link to="/bar">Go to bar</router-link>
            </>
        )
    }
})