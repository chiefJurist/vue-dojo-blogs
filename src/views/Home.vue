<template>
    <div class="home">
        <h1>Home</h1>
        <PostList :posts="posts" />
    </div>
</template>

<script>
    import PostList from '../components/PostList.vue'
    import {  ref } from 'vue'
    export default {
        name: 'Home',
        components: { PostList },
        setup(){
            const posts = ref([
                {title: 'Welcome to the blog', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, autem exercitationem. Voluptate veniam repellendus quasi ullam similique dicta est quam culpa natus dolor pariatur earum consequatur officiis laudantium possimus, deserunt qui quisquam sapiente at voluptas expedita repudiandae, nisi commodi in! Quidem, aspernatur aliquam nulla, rerum, placeat dolor neque saepe alias in facilis deleniti! Dignissimos reiciendis autem quos molestiae facere, soluta culpa velit itaque, eligendi rerum nobis tempora, tempore officiis placeat voluptatem nesciunt! Fugiat quidem maiores, assumenda dolorum placeat est aliquam minus beatae voluptates corporis maxime, consequatur error. Commodi vitae alias nam veniam enim, molestiae dolorem esse, corrupti id ex nihil.', id: 1},
                {title: 'Top 5 CSS tips', body: 'Lorem ipsum', id: 2}
            ])

            return { posts }
        }
    }
</script>
