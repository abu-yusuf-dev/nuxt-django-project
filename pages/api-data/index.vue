<template>
    <div>
      <h1>All the data from the open api calls:</h1>
      <h3>Got all the data from: <a href="https://jsonplaceholder.typicode.com/todos/9">Open Api</a> </h3><br>
      <h2>{{ data }}</h2>
    </div>
</template>

<script>
  import axios from 'axios'

    export default {
      layout: 'mylayout',
      name: "index",

      data () {
        return {
          title: 'Api-data Page'
        }
        },

      asyncData ({ params }) {
        return axios.get(`https://jsonplaceholder.typicode.com/todos/9`)
          .then(res => {
            return {data: res.data}

          })

      },
      head(){
          return {
            title: this.title,

          }
      }

    }
</script>

<style scoped>
  h1{
    text-align: center;
    text-decoration: underline;
    color: green;
  }

</style>
