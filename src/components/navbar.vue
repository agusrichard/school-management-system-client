<template>
  <nav>
    <Container>
      <div class="navbar-content">
        <router-link to="/" class="ssms-logo">SSMS</router-link>
        <div>
          <router-link to="/auth/register">Register</router-link>
          <router-link to="/auth/login">Login</router-link>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script>
import Container from './container'
export default {
  components: { Container }
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

.ssms-logo {
  margin-left: 0 !important;
  text-align: left !important;
}
</style>
