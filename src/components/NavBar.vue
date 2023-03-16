<template>
    <nav class="navbar">
        <div class="navbar-links">
           <router-link to="/" class="navbar-link">Home</router-link>
      <router-link to="/counter" class="navbar-link">CounterApp</router-link>
      <router-link to="/(.*)" class="navbar-link">Products</router-link>
    
    </div>
    </nav>
  </template>

  <script>
import { mapGetters } from 'vuex'


export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['theme'])
  }
}
</script>

<style>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
}

.navbar-links {
  display: flex;
  flex-direction: column;
}

.navbar-link {
  color: #fff;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.navbar-link:hover {
  background-color: #555;
}

@media screen and (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
  }

  .navbar-links {
    flex-direction: row;
  }

  .navbar-link {
    padding: 0.5rem 1rem;
  }

  .navbar-link:hover {
    background-color: #555;
    border-radius: 5px;
  }
}
</style>