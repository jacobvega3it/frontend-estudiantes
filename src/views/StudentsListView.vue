<template>
    <div>
        <!-- <ListadoEstudiantes /> -->
        <!-- <ListadoSinPaginacion /> -->
        <!-- <ListadoConPaginacion /> -->
        <ListadoPaginacionSlot />
    </div>
</template>

<script>

//import ListadoEstudiantes from '../components/ListadoEstudiantes.vue';
//import ListadoSinPaginacion from '../components/ListadoSinPaginacion.vue';
//import ListadoConPaginacion from '../components/ListadoConPaginacion.vue';
import ListadoPaginacionSlot from '@/components/ListadoPaginacionSlot.vue';

export default {
    name: 'StudentsListView',
    components: {
        //ListadoEstudiantes,
        //ListadoSinPaginacion,
        //ListadoConPaginacion,
        ListadoPaginacionSlot,
    },
};

</script>