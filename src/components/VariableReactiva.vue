<template>
    <div>
      <h2>Variable Reactiva</h2>
      <p>Contador de estudiantes: {{ contador }}</p>
      <button @click="incrementar">Incrementar</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const contador = ref(0);

    const incrementar = () => {
      contador.value++;
    };

    return {
      contador,
      incrementar,
    };
  },
};
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