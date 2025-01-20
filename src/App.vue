<template>
  <div>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/students">Students</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  nav {
    margin-bottom: 20px;
  }
  nav a {
    margin-right: 15px;
    text-decoration: none;
    color: blue;
  }
</style>