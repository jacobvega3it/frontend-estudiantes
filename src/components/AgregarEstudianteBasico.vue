<template>
    <div class="home-container">
        <h1>Agregar estudiante</h1>
        <div class="form-container">
            <form @submit.prevent="addStudent">
                <div class="form-field">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" v-model="newStudent.name" required minlength="3" maxlength="10" />
                </div>
                <div class="form-field">
                    <label for="surname">Apellido:</label>
                    <input type="text" id="surname" v-model="newStudent.surname" required minlength="2" maxlength="15" />
                </div>
                <div class="form-field">
                    <label for="career">Carrera:</label>
                    <select v-model="newStudent.careerName" required>
                        <option disabled value="">Selecciona una carrera:</option>
                        <option v-for="career in careers" :key="career.careerId" :value="career.name">
                            {{ career.name }}
                        </option>
                    </select>
                </div>
                <div class="button-container">
                    <button type="submit">Agregar estudiante</button>
                </div>
                <div v-if="showStudent">
                    <p>Nombre: {{ newStudent.name }}</p>
                    <p>Apellido: {{ newStudent.surname }}</p>
                    <p>Carrera: {{ newStudent.careerName }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'AgregarEstudiante',
    setup() {
        const careers = ref([
            { careerId: 1, name: 'Ingeniería en minas' }, 
            { careerId: 2, name: 'Medicina' },
            { careerId: 3, name: 'Periodismo' },
            { careerId: 4, name: 'Derecho' },
        ]);

        const showStudent = ref(false);

        const newStudent = ref({
            name: "",
            surname: "",
            careerName: "",
        });

        const addStudent = () => {
            showStudent.value = true;
        };

        return {
            newStudent,
            careers,
            addStudent,
            showStudent,
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

</style>