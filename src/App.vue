<template>
  <div>
    <nav>
      <router-link to="/">Acceso</router-link> |
      <router-link to="/home">Inicio</router-link> |
      <router-link to="/students">Estudiantes</router-link> |
      <router-link to="/about">Acerca de</router-link> |
      <router-link to="/close">Cerrar sesión</router-link>
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