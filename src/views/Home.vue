<template>
    <div class="home">
        <h1>Home</h1>
        <input type="text" v-model="search">
        <p>search term - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div><br>
        <button @click="handleClick">Stop Watch</button>
    </div>
</template>

<script>
    import { computed, ref, watch, watchEffect } from 'vue'
    export default {
        name: 'Home',
        setup(){
            const search = ref('')
            const names = ref(['Mario', 'Yoshi', 'Luigi', 'Tony', 'Bowser', 'Koopa', 'Peach'])

            const stopWatch = watch(search, ()=>{
                console.log("Watch fuction ran")
            })

            //This runs at loading
            //Also you don't have to explicitly state the values you want to watch as you do in "watch()"
            //It watches any value placed inside of it
            const stopEffect = watchEffect(()=>{
                console.log("WatchEffect function ran", search.value)
            })

            const matchingNames = computed(() => {
                return names.value.filter((name)=> name.includes(search.value))
            })

            //for stopping the watch and the WatchEffect
            const handleClick = () => {
                stopWatch()
                stopEffect()
            }

            return { names,search,matchingNames, handleClick }
        }
    }
</script>
