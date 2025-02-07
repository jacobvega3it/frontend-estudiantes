<template>
    <ListadoPaginacion>
        <template #detalle="{ estudianteSeleccionado, cerrar }">
            <div v-if="estudianteSeleccionado" class="student-detail">
                <h2>Detalle del Estudiante</h2>
                <p><strong>ID:</strong> {{ estudianteSeleccionado.studentId }}</p>
                <p><strong>Nombre:</strong> {{ estudianteSeleccionado.name }}</p>
                <p><strong>Apellido:</strong> {{ estudianteSeleccionado.surname }}</p>
                <p><strong>Carrera:</strong> {{ estudianteSeleccionado.career.name }}</p>
                <button class="close-btn" @click="cerrar()">❌ Cerrar Detalle</button>
            </div>
        </template>
    </ListadoPaginacion>
</template>

<script>
import ListadoPaginacion from './ListadoPaginacion.vue';

export default {
    name: 'ListadoPaginacionSlot',
    components: {
        ListadoPaginacion
    }
};
</script>

<style scoped>

    .student-detail {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        background-color: #f9f9f9;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }

    .student-detail h2 {
        margin-bottom: 10px;
    }

    .close-btn {
        background-color: #dc3545;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;
        display: block;
        margin: 10px auto 0;
    }

    .close-btn:hover {
        background-color: #a71d2a;
    }
</style>