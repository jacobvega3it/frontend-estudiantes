<template>
    <div>
        <!-- <ListadoEstudiantes /> -->
        <!-- <ListadoSinPaginacion /> -->
        <ListadoConPaginacion />
    </div>
</template>

<script>

//import ListadoEstudiantes from '../components/ListadoEstudiantes.vue';
//import ListadoSinPaginacion from '../components/ListadoSinPaginacion.vue';
import ListadoConPaginacion from '../components/ListadoConPaginacion.vue';

export default {
    name: 'StudentsListView',
    components: {
        //ListadoEstudiantes,
        //ListadoSinPaginacion,
        ListadoConPaginacion,
    },
};

</script>