<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
    import SinglePost from "./SinglePost.vue";
    export default {
        props: ['posts'],
        components: { SinglePost },
        setup(props){
            //If you want to use props with the setup(). Just remve the console.log
            console.log(props.posts)
        }
    }
</script>

<style>

</style>