<template>
    <div class="post">
        <router-link :to="{ name: 'Details', params: {id: post.id}}" class="none">
            <h3>{{ post.title}}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span><br><br>
    </div>
</template>

<script>
import { computed } from 'vue'
    export default {
        props: ['post'],
        setup(props){
            const snippet = computed(() => {
                return props.post.body.substring(0, 100) + '...'
            })

            return { snippet }
        }
    }
</script>

<style>
    .none{
        text-decoration: none;
        display: flex;
        justify-content: center;
    }
    .none h3{
        background: #444;
        color: white;
        border-radius: 5px;
        padding: 30px 20px;
        max-width: 600px;
    }
    .none h3:hover{
        background: grey;
    }
</style>