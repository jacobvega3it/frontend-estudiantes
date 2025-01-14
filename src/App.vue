<template>
  <div>
    <h1>¡Hola, Bienvenido!</h1>
    <p>Sistema de Administración de Estudiantes</p>
    <MiComponente />
  </div>
</template>

<script>
import MiComponente from './components/MiComponente.vue'

export default {
  components: {
    MiComponente,
  },
}
</script>