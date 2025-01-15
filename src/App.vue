<template>
  <div>
    <h1>¡Hola, Bienvenido!</h1>
    <p>Sistema de Administración de Estudiantes</p>
    <MiComponente /> <!-- Uso del componente hijo -->
  </div>
</template>

<script>
import MiComponente from './components/MiComponente.vue' // Importación del componente hijo

export default {
  name: 'App', // Opcional, útil para identificar el componente
  components: {
    MiComponente, //Registro del componente hijo
  },
}
</script>