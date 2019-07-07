<template>
    <div class="">
      <ul>
        <li><a href="/api-data">Api</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a class="active" href="/home">Home</a></li>
        <li style="float: left;"><a class="active" href="/home">NustApp</a></li>
      </ul>
      <nuxt/>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: right;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #4CAF50;
  }
</style>
