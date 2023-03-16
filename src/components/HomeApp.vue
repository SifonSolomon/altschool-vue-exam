<template>
    <div class="my-day">
      <h1>A Counter App</h1>
      <button class="github-btn" @click="goToGithub">
      <span>Github</span>
    </button>
    </div>
  </template>
  
  <script>
  export default {
  name: 'HomeApp',
  methods: {
    goToGithub() {
      window.open('https://github.com/SifonSolomon', '_blank');
    }
  }
};
  </script>
  
  <style>
  .my-day {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  height: 100vh; 
}


.github-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #24292e;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;

}

.github-btn span {
  display: inline-block;
  position: relative;
}

.github-btn:hover {
  background-color: #0366d6;
}

  </style>
  