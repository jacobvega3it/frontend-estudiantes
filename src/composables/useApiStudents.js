import axios from 'axios'
import { ref } from 'vue'

export default function useApiStudents() {
    const students = ref([]);
    const message = ref('');

    const token = ref(localStorage.getItem('jwt'));
    const messageType = ref('message-success');

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
            //message.value = '';
        } catch (error) {
            console.log("Error al obtener estudiantes: ", error);
            message.value = 'No se pudo obtener la lista de estudiantes';
            messageType.value = "message-error";
        }
    };

    // Función para eliminar un estudiante
    const deleteStudent = async (studentId) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este estudiante?");
        if (!confirmDelete) return;

        try {
            //await axios.delete(`http://localhost:8095/api/estudiantes/eliminar/${studentId}`, axiosConfig);
            await axios.delete(`http://k8s-default-gateways-36999c9996-a865143757b14471.elb.us-west-1.amazonaws.com:8095/api/estudiantes/eliminar/${studentId}`, axiosConfig);
            message.value = "Estudiante eliminado correctamente.";
            messageType.value = "message-success";
            console.log("Estudiante eliminado correctamente.");
            // Recargar la lista de estudiantes
            await fetchStudents();
        } catch (error) {
            message.value = "Error al eliminar el estudiante.";
            messageType.value = "message-error";
            console.error("Error al eliminar estudiante:", error);
        }
    };

    return {
        fetchStudents,
        deleteStudent,
        students,
        message,
        messageType
    }
}