import axios from 'axios'
import { ref } from 'vue'

export default function useApiStudents() {
    const students = ref([]);
    const message = ref('');

    const token = ref(localStorage.getItem('jwt'));

    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    };

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8095/api/estudiantes', axiosConfig);
            students.value = response.data;
            message.value = '';
        } catch (error) {
            console.log("Error al obtener estudiantes: ", error);
            message.value = 'No se pudo obtener la lista de estudiantes';
        }
    };
    
    return {
        fetchStudents,
        students,
        message
    }
}