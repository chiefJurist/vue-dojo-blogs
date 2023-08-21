<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
    import { onMounted, onUnmounted, onUpdated } from 'vue';
    import SinglePost from "./SinglePost.vue";
    export default {
        props: ['posts'],
        components: { SinglePost },

        //If you want to use lifecycle hooks inside setup(). There is a slight change in the name of the hooks.
        //All the hooks will have the "on" attached to the front of their name.
        setup(props){
            onMounted( ()=> console.log('component mounted'))
            onUnmounted( ()=> console.log('componenet unmounted'))
            onUpdated( () => console.log('component updated'))
        },
        //Outside the setup, you can still use options api
        mounted(){
            console.log('Mounted using options api')
        }
    }
</script>

<style>

</style>