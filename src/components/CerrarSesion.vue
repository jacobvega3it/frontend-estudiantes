<template>
    <div>
        <h1>Cerrar Sesión</h1>
    </div>
</template>

<script>
export default {
    name: 'CerrarSesion',
    mounted() {
        localStorage.removeItem('jwt');
        console.log("Sesión cerrada");
        this.$router.push('/');
    }
}
</script>