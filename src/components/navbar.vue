<template>
  <nav>
    <Container>
      <div class="navbar-content">
        <router-link to="/" class="ssms-logo">SSMS</router-link>
        <div v-if="!isLoggedIn">
          <router-link to="/auth/login">Login</router-link>
          <router-link to="/auth/register">Register</router-link>
        </div>
        <div v-else>
          <button @click="logout">Logout</button>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script>
import Container from './container'
export default {
  components: { Container },
  computed: {
    isLoggedIn: function () {
      return this.$store.state.auth.isLoggedIn
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('auth/setLogin', { status: false })
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  color: white;
  height: var(--navbar-height);
  background-color: var(--oxford-blue);
  border-bottom: 2px solid var(--gold-web-golden);
}

div.navbar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-application a {
  color: white;
  font-size: 20px;
  transition: 0.2s;
  min-width: 100px;
  margin-left: 15px;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
}

.v-application a:hover {
  color: var(--mikado-yellow);
}

button {
  color: white;
  font-size: 20px;
  transition: 0.2s;
  min-width: 100px;
  margin-left: 15px;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
}

button:hover {
  color: var(--mikado-yellow);
}

.ssms-logo {
  margin-left: 0 !important;
  text-align: left !important;
}
</style>
