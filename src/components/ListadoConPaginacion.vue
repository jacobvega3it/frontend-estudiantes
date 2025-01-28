<template>
    <div class="home-container">
        <h1>Lista de Estudiantes</h1>
        <div v-if="message" class="error">
            <p v-html="message"></p>
        </div>
        <table class="items-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Carrera</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in paginatedStudents" :key="student.studentId">
                    <td>{{ student.studentId }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.surname }}</td>
                    <td>{{ student.career.name }}</td>
                </tr>
            </tbody>
        </table>

        <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import useApiStudents from '@/composables/useApiStudents';

export default {
    name: 'ListadoConPaginacion',
    setup() {
        const { students, fetchStudents, message } = useApiStudents();
        const elementsPerPage = 4;
        const currentPage = ref(1);

        const totalPages = computed(() => 
            Math.ceil(students.value.length / elementsPerPage)
        );

        const paginatedStudents = computed(() => {
            const start = (currentPage.value - 1) * elementsPerPage;
            const end = start + elementsPerPage;
            return students.value.slice(start, end);
        });

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            }
        };

        const previousPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            }
        };

        onMounted(async () => {
            await fetchStudents();
        });

        return {
            fetchStudents,
            message,
            paginatedStudents,
            nextPage,
            previousPage,
            totalPages,
            currentPage,
            elementsPerPage,
        };
    },
};
</script>

<style scoped>
    .home-container {
        text-align: center;
        margin-top: 50px;
    }

    .items-table {
        margin: 20px auto;
        width: 40%;
        border-collapse: collapse;
        text-align: left;
    }

    .items-table th, .items-table td {
        border: 1px solid #ddd;
        padding: 10px;
    }

    .items-table th {
        background-color: #f4f4f4;
    }

    .pagination {
        margin-top: 20px;
    }

    .pagination button {
        margin: 0 10px;
        padding: 5px 10px;
    }

    .error {
        color: red;
        font-size: 12px;
    }
</style>