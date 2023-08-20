<template>
    <div class="home">
        home
        <p ref="para">
            My name is {{ name }} and my age is {{ age }}
        </p>
        <button @click="handleClick">Click me</button>
    </div>
</template>

<script>
    //importing the ref from vue
    import { ref } from 'vue'
    export default {
        name: 'Home',
        setup(){
            console.log('setup')

            //Using template refs in composition api
            //Don't use the refs before you return them
            const para = ref(null)
            let name = "Anthony"
            let age = 20

            const handleClick = ()=> {
                console.log(para, para.value)
                //Work with the value and not just the name of the ref
                para.value.classList.add('test')
                para.value.textContent = "Hello, Ninjas"
            }

            return{name, age, handleClick, para}
        }
    }
</script>
