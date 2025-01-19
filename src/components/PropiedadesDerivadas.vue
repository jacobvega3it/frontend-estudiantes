<template>
    <div>
        <h2>Propiedades Derivadas</h2>
        <p>Contador: {{ contador }}</p>
        <p>Contador al cuadrado: {{ contadorCuadrado }}</p>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const contador = ref(2);

        const incrementar = () => {
            contador.value++;
        };

        const contadorCuadrado = computed(() => contador.value ** 2);

        return {
            contador,
            incrementar,
            contadorCuadrado
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