//NOTE THAT THIS IS A JAVSCRIPT FILE AND NOT A VUE FILE

//Importing the refs
import {  ref } from 'vue'

//Creating the reusable com[posable function
const getPosts = () => {
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

    //Note that we are also returning the load function
    return {posts, error, load}
}

//Exporting getPost() so we can import it
export default getPosts