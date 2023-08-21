<template>
    <div class="home">
        <h1>Home</h1>

        <!--Outputting error-->
        <div v-if="error">{{ error }}</div>

        <!--For outputing the array only when it has been populated-->
        <div v-if="posts.length">
            <PostList :posts="posts" />
        </div>

        <div v-else>Loading...</div>
    </div>
</template>


<script>
    import PostList from '../components/PostList.vue'
    import {  ref } from 'vue'

    export default {
        name: 'Home',
        components: { PostList },
        setup(){
            const posts = ref([])
            const error = ref(null)

            //Using Asynchronous JavaScript
            const load = async () => {
                try {
                    let data = await fetch('http://localhost:3000/posts')
                    //For when the data is not okay
                    //".ok" can be seen in the console if we log "data" to the console
                    if (!data.ok) {
                        throw Error('No data available')
                    }
                    //Updating the post array
                    posts.value = await data.json()
                } catch (err) {
                    error.value = err.message
                    console.log(error.value)
                }
            }

            //Calling the function
            load()

            return { posts,error }
        }
    }
</script>
