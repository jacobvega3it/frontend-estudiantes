<template>
    <div class="home-container">
        <h1>Agregar estudiante</h1>
        <div class="form-container">
            <form @submit.prevent="addStudent">
                <div class="form-field">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" v-model="newStudent.name" />
                </div>
                <div class="form-field">
                    <label for="surname">Apellido:</label>
                    <input type="text" id="surname" v-model="newStudent.surname" />
                </div>
                <div class="form-field">
                    <label for="career">Carrera:</label>
                    <select v-model="newStudent.careerId">
                        <option disabled value="">Selecciona una carrera:</option>
                        <option v-for="career in careers" :key="career.careerId" :value="career.careerId">
                            {{ career.name }}
                        </option>
                    </select>
                </div>
                <div class="button-container">
                    <button type="submit">Agregar estudiante</button>
                </div>
                <div v-if="message" :class="message.includes('creado') ? 'message-success' : 'message-error'">
                    <p>{{ message }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'AgregarEstudiante',
    setup() {
        const careers = ref([]);

        const message = ref('');

        const newStudent = ref({
            name: "",
            surname: "",
            careerId: "",
        });

        const token = ref(localStorage.getItem('jwt'));
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token.value}`,
            },
        };

        const addStudent = () => {

            if (!validateForm()) {
                return;
            }

            const response = axios.post(
               //'http://localhost:8095/api/estudiantes/agregar', 
                'http://k8s-default-gateways-36999c9996-a865143757b14471.elb.us-west-1.amazonaws.com:8095/api/estudiantes/agregar', 
                newStudent.value, 
                axiosConfig
            );
            console.log("Estudiante creado: ", response.data);
            newStudent.value = {
                name: "",
                surname: "",
                careerId: "",
            };
            message.value = "El estudiante ha sido creado";
        };

        //Función para validar el formulario
        const validateForm = () => {
            if (newStudent.value.name === "" || newStudent.value.surname === "" 
                || newStudent.value.careerId === "") {
                message.value = "Por favor, completa todos los campos";
                return false;
            }
            if (newStudent.value.name.length < 3 || newStudent.value.name.length > 10) {
                message.value = "El nombre debe tener entre 3 y 10 caracteres";
                return false;
            }
            if (newStudent.value.surname.length < 2 || newStudent.value.surname.length > 15) {
                message.value = "El apellido debe tener entre 2 y 15 caracteres";
                return false;
            }

            return true;
        };

        const fetchCareers = async () => {
            //const response = await axios.get('http://localhost:8095/api/carreras', axiosConfig);
            const response = await axios.get('http://k8s-default-gateways-36999c9996-a865143757b14471.elb.us-west-1.amazonaws.com:8095/api/carreras', axiosConfig);
            careers.value = response.data;
        };

        onMounted(async () => {
            await fetchCareers();
        });

        return {
            newStudent,
            careers,
            addStudent,
            message,
        };
    },
};

</script>

<style scoped>
.home-container {
    text-align: center;
    margin-top: 50px;
}

.form-container {
    margin-top: 20px;
    text-align: left;
    max-width: 400px;
    margin: 30px auto;
}

.form-field {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.form-container h2 {
    text-align: center;
}

.button-container {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}

label {
    margin-right: 15px;
    min-width: 150px;
}

input, select {
    padding: 8px;
    flex-grow: 1;
    box-sizing: border-box;
}

button{
    padding: 8px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
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
    border: 1px solid #c3e6cb;
    border-radius: 5px;
    text-align: center;
    color: #721c24;
    background-color: #f8d7da;
}

</style>