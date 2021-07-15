<template>
    <div>
        <h1>Bem vindo a tela de dado</h1><br>
        <p>O deu dado é {{parametroDaRota}}</p>
    </div>
</template>

<script>
export default {
    created(){
        this.parametroDaRota = this.$route.params.dado;
    },
    data(){
        return {
            parametroDaRota: String
        }
    }
}
</script>
