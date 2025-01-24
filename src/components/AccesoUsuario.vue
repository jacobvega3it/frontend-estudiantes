<template>
    <div class="login-container">
        <h2>Bienvenido</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">Nombre de usuario: </label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Contraseña: </label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Ingresar</button>
            <div v-if="errorMessage" class="error-message">
                <p v-html="errorMessage"></p>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    name: 'AccesoUsuario',
    setup() {
        const router = useRouter();
        const username = ref('');
        const password = ref('');
        const errorMessage = ref('');

        const handleLogin = async () => {
            try {
                const response = await axios.post('/auth/login', {
                    username: username.value,
                    password: password.value,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    withCredentials: true,
                });
                console.log("Token recibido:", response.data.token);
                localStorage.setItem('jwt', response.data.token);
                router.push("/home");
            } catch (error) {
                console.error("Error capturado:", error);

                if (error.response && error.response.data && error.response.data.message) {
                    errorMessage.value = error.response.data.message;
                }
                else{
                    errorMessage.value = 'Usuario o contraseña incorrectos.<br>Por favor, inténtelo de nuevo.';
                }
            }
        };

        return {
            username,
            password,
            errorMessage,
            handleLogin,
        };
    },
};

</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
}

form div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>