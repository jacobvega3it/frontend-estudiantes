<template>
    <div>
      <h2>Contador de Estudiantes</h2>
      <p>La cantidad actual de estudiantes es: {{ contador }}</p>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const contador = ref(0)
  
      const incrementar = () => {
        contador.value++
      }
  
      const decrementar = () => {
        contador.value--
      }
  
      return {
        contador,
        incrementar,
        decrementar,
      }
    },
  }
  </script>
  
  <style scoped>
  h2 {
    color: #35495e;
  }
  button {
    margin: 5px;
    padding: 10px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>