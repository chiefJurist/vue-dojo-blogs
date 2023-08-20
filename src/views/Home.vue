<template>
    <div class="home">
        <h1>Home</h1>
        <p>My name is {{ name }} and my age is {{ age }}</p>
        <button @click="handleClick">Click me</button><br>
        <button @click="age++">Click to add 1 to age</button><br>
        <input type="text" v-model="name">
    </div>
</template>

<script>
    //importing the ref from vue
    import { ref } from 'vue'
    export default {
        name: 'Home',
        setup(){
            const name = ref("Anthony")
            const age = ref(20)

            const handleClick = ()=> {
                name.value = "Luigi"
                age.value = 35
            }

            return{name, age, handleClick}
        }
    }
</script>
