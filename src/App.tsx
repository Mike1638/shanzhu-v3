import { defineComponent ,ref } from "vue";

export  const App =  defineComponent({
    setup(){
        const count = ref<number>(0)
        const onclick = ()=>{
            count.value++
        }
        return ()=>(
            <>
            <div>123123</div>
            <div>{count.value}</div>
            <button onClick={onclick}>add</button>
            </>
        )
    }
})