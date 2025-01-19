<template>
    <div>
        <input v-model="nuevoEstudiante" placeholder="Nuevo estudiante" />
        <button @click="agregarEstudiante">Agregar</button>

        <ul>
            <li v-for="(estudiante, index) in estudiantes" :key="index">
                <input type="checkbox" v-model="estudiante.activo" />
                {{ estudiante.nombre }}
                <button @click="eliminarEstudiante(index)">Eliminar</button>
            </li>
        </ul>

        <p>Total estudiantes: {{ totalEstudiantes }}</p>
        <p>Estudiantes activos: {{ estudiantesActivos }}</p>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
    setup() {
        const nuevoEstudiante = ref('');
        const estudiantes = reactive([
            { nombre: 'Albertina Araya', activo: true },
            { nombre: 'Bastian Bustos', activo: false },
            { nombre: 'Carla Carmona', activo: true },
        ]);

        const agregarEstudiante = () => {
            if (nuevoEstudiante.value.trim() !== '') {
                estudiantes.push({ nombre: nuevoEstudiante.value, activo: true });
                nuevoEstudiante.value = '';
            }
        };

        const eliminarEstudiante = (index) => {
            estudiantes.splice(index, 1);
        };

        const totalEstudiantes = computed(() => estudiantes.length);
        const estudiantesActivos = computed(() => estudiantes.filter((estudiante) => estudiante.activo).length);

        return {
            nuevoEstudiante,
            estudiantes,
            agregarEstudiante,
            eliminarEstudiante,
            totalEstudiantes,
            estudiantesActivos,
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