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
    //Importing the reusuable composable function
    import getPosts from "../composables/getPosts";

    export default {
        name: 'Home',
        components: { PostList },
        setup(){
            //extracting data from getpost
            const { posts, error, load} = getPosts()

            //calling the load function
            load()

            return { posts,error }
        }
    }
</script>
