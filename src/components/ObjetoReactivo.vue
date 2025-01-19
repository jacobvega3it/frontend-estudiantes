<template>
    <div>
        <h2>Objeto Reactivo</h2>
        <p>Nombre: {{ persona.nombre }}</p>
        <p>Edad: {{ persona.edad }}</p>
        <button @click="cumplirAnios">Cumplir Años</button>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const persona = reactive({
            nombre: 'Juan',
            edad: 20,
        });

        const cumplirAnios = () => {
            persona.edad++;
        };

        return {
            persona,
            cumplirAnios,
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