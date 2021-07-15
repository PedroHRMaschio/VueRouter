<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/cadastro">Cadastro</router-link> |
    <router-link :to="{name: 'Parametro',params: {dado: 'Pedro Henrique'}}">Rota dinâmica</router-link>
  </div>
  <h3>Início da Rota</h3><hr>
  <router-view/>
  <hr><h3>Fim da Rota</h3>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
