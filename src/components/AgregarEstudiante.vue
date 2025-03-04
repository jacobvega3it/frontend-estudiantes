<template>
    <div class="home-container">
        <h1>Agregar estudiante</h1>
        <div class="form-container">
            <Form :validation-schema="schema" @submit="addStudent">
                <div class="form-field">
                    <label for="name">Nombre:</label>
                    <Field name="name" placeholder="Ingrese un nombre" />
                    <ErrorMessage name="name" class="error" />
                </div>
                <div class="form-field">
                    <label for="surname">Apellido:</label>
                    <Field name="surname" placeholder="Ingrese un apellido" />
                    <ErrorMessage name="surname" class="error" />
                </div>
                <div class="form-field">
                    <label for="career">Carrera:</label>
                    <Field name="careerId" as="select">
                        <option disabled value="">Selecciona una carrera:</option>
                        <option v-for="career in careers" :key="career.careerId" :value="career.careerId">
                            {{ career.name }}
                        </option>
                    </Field>
                    <ErrorMessage name="careerId" class="error" />
                </div>
                <div class="button-container">
                    <button type="submit">Agregar estudiante</button>
                </div>
                <div v-if="message" :class="message.includes('creado') ? 'message-success' : 'message-error'">
                    <p>{{ message }}</p>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import * as yup from 'yup';

export default {
    name: 'AgregarEstudiante',
    setup() {
        const careers = ref([]);

        const message = ref('');

        const schema = yup.object({
            name: yup.string().required('El nombre es obligatorio'),
            surname: yup.string().required('El apellido es obligatorio'),
            careerId: yup.number().required('La carrera es obligatoria'),
        });

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

        const addStudent = (values, { resetForm }) => {

            newStudent.value.careerId = parseInt(values.careerId);
            newStudent.value.name = values.name;
            newStudent.value.surname = values.surname;

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
            resetForm();
            message.value = "El estudiante ha sido creado";
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
            schema,
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
    flex-direction: column;
}

.button-container {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}

label {
    margin-bottom: 5px;
}

input, select {
    padding: 8px;
    width: 100%;
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

.error{
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
}

</style>