<template>
    <div class="home">
        home
        <p>My name is {{ name }} and my age is {{ age }}</p>
        <button @click="handleClick">Click me</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        setup(){
            console.log('setup')

            //These are not reactive values
            //That means they don't update in the template when changed
            let name = "Anthony"
            let age = 20

            const handleClick = ()=> {
                console.log('You clicked me')
            }

            //Any data you want out side, you just have to return it
            //return{name: name, age: age}

            //Note that as the name of the property and the value is the same as seen above, you can just remove the prop name
            return{name, age, handleClick}
        }
    }
</script>
