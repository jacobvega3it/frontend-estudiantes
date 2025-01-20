<template>
    <div>
        <ListadoEstudiantes />
    </div>
</template>

<script>

import ListadoEstudiantes from '../components/ListadoEstudiantes.vue';

export default {
    name: 'StudentsListView',
    components: {
        ListadoEstudiantes,
    },
};

</script>