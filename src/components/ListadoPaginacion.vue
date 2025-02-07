<template>
    <div class="home-container">
        <h1>Lista de Estudiantes</h1>
        <div v-if="message" :class="messageType">
            <p v-html="message"></p>
        </div>

        <table class="items-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Carrera</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in paginatedStudents" :key="student.studentId">
                    <td>{{ student.studentId }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.surname }}</td>
                    <td>{{ student.career.name }}</td>
                    <td>
                        <button class="detail-btn" @click="selectStudent(student)">👁 Ver Detalle</button>
                        <button class="delete-btn" @click="deleteStudent(student.studentId)">🗑 Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
        </div>

        <slot
            name="detalle"
            :estudianteSeleccionado="selectedStudent"
            :cerrar="closeDetail">
        </slot>
    </div>
</template>

<script>

import { ref, computed, onMounted } from 'vue';
import useApiStudents from '@/composables/useApiStudents';

export default {
    name: 'ListadoPaginacion',
    setup() {
        const { students, fetchStudents, deleteStudent, message, messageType } = useApiStudents();
        const elementsPerPage = 4;
        const currentPage = ref(1);
        const selectedStudent = ref(null);
        
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

        const selectStudent = (student) => {
            selectedStudent.value = student;
        };

        const closeDetail = () => {
            selectedStudent.value = null;
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
            deleteStudent,
            messageType,
            selectStudent,
            selectedStudent,
            closeDetail
        };
    }
}
</script>

<style scoped>
    .home-container {
        text-align: center;
        margin-top: 50px;
    }

    .items-table {
        margin: 20px auto;
        width: 50%;
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

    .delete-btn {
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;
    }

    .delete-btn:hover {
        background-color: darkred;
    }

    .message-success {
        margin-top: 15px;
        padding: 5px;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        border-radius: 5px;
        color: #155724;
        text-align: center;
    }

    .message-error {
        margin-top: 15px;
        padding: 5px;
        border: 1px solid #f5c6cb;
        border-radius: 5px;
        text-align: center;
        color: #721c24;
        background-color: #f8d7da;
    }

    .detail-btn {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;
        margin-right: 5px;
    }

    .detail-btn:hover {
        background-color: #0056b3;
    }

</style>