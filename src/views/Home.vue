<template>
    <div class="home">
        <h1>Home</h1>
        <h2>Refs</h2>
        <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
        <button @click="updateNinjaOne">Update ninja one</button>
        <h2>Reactive</h2>
        <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
        <button @click="updateNinjaTwo">Update ninja two</button>
    </div>
</template>

<script>
    import { reactive, ref } from 'vue'
    export default {
        name: 'Home',
        setup(){
            //You can also use objects as refs
            const ninjaOne = ref({name: 'Mario', age: 30})
            const ninjaTwo = reactive({name: 'Luigi', age: 35})

            const updateNinjaOne = ()=> {
                ninjaOne.value.age = 40
            }

            //You do not need to use the ".value" when using reactive
            //Note that you can not use primitive data types with reactive. That is their limitation
            //You can only use objects with reactive
            const updateNinjaTwo = ()=> {
                ninjaTwo.age = 45
            }

            return{ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo}
        }
    }
</script>
