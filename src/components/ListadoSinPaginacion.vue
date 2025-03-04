<template>
    <div class="home-container">
        <h1>Lista de Estudiantes</h1>
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
                <tr v-for="student in students" :key="student.studentId">
                    <td>{{ student.studentId }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.surname }}</td>
                    <td>{{ student.career.name }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
    name: 'ListadoConPaginacion',
    setup() {
        const students = ref([]);

        const token = ref(localStorage.getItem('jwt'));

        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        };

        const fetchStudents = async () => {
            try {
                //const response = await axios.get('http://localhost:8095/api/estudiantes', axiosConfig);
                const response = await axios.get('http://k8s-default-gateways-36999c9996-a865143757b14471.elb.us-west-1.amazonaws.com:8095/api/estudiantes', axiosConfig);
                students.value = response.data;
            } catch (error) {
                console.log("Error al obtener estudiantes: ", error);
            }
        };

        onMounted(async () => {
            await fetchStudents();
        });

        return {
            students,
            fetchStudents,
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
</style>