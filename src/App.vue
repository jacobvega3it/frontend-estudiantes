<template>
  <div>
    <h1>¡Hola, Bienvenido!</h1>
    <p>Sistema de Administración de Estudiantes</p>
    <ListadoEstudiantes /> <!-- Uso del componente hijo -->
    <MiComponente /> <!-- Uso del componente hijo -->
    <VariableReactiva /> <!-- Uso del componente hijo -->
    <ObjetoReactivo /> <!-- Uso del componente hijo -->
    <PropiedadesDerivadas /> <!-- Uso del componente hijo -->
  </div>
</template>

<script>
import MiComponente from './components/MiComponente.vue' // Importación del componente hijo
import VariableReactiva from './components/VariableReactiva.vue';
import ObjetoReactivo from './components/ObjetoReactivo.vue';
import PropiedadesDerivadas from './components/PropiedadesDerivadas.vue';
import ListadoEstudiantes from './components/ListadoEstudiantes.vue';

export default {
  name: 'App', // Opcional, útil para identificar el componente
  components: {
    MiComponente, //Registro del componente hijo
    VariableReactiva,
    ObjetoReactivo,
    PropiedadesDerivadas,
    ListadoEstudiantes,
  },
}
</script>