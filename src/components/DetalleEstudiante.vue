<template>
    <div>
        <h1>Detalle del estudiante</h1>
        <div v-if="estudiante">
            <p><strong>Nombre:</strong> {{ estudiante.nombre }}</p>
            <p><strong>Activo:</strong> {{ estudiante.activo ? 'Sí' : 'No' }}</p>
        </div>
        <div v-else>
            <p>Estudiante no encontrado.</p>
        </div>
        <RouterLink to="/students">Volver al listado</RouterLink>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const id = parseInt(route.params.id);

        const estudiantes = reactive([
            { nombre: 'Albertina Araya', activo: true },
            { nombre: 'Bastian Bustos', activo: false },
            { nombre: 'Carla Carmona', activo: true },
        ]);

        const estudiante = estudiantes[id];

        return {
            estudiantes,
            estudiante,
        };
    },
};

</script>