<template>
    <div class="counter-app" >
      <p class="count">{{ count }}</p>
      <input class="counter-input" type="number" v-model="value" />
     
      <button class="counter-button button-1" @click="set(value)">setValue</button>
      <div class="button-container">
          <button class="counter-button buttton-2"  @click="increment">Increment</button>
          <button class="counter-button button-4" @click="reset">Reset</button>
   <button class="counter-button button-3" @click="decrement">Decrement</button>

     </div>
    
    </div>
  </template>

  <script>
  import useCounter from '@/composable/useCounter'
  
  export default {
    setup() {
      const { count, increment, decrement, reset, set } = useCounter()
  
      return {
        count,
        increment,
        decrement,
        reset,
        set,
      }
    }
  }


  </script>

  <style scoped>
  .counter-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.count{
  font-size: 80px;
}

.counter-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.counter-buttons button {
  margin: 0 5px;
}

.counter-button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.counter-input {
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  border: 1px solid #0077ff;
  margin-bottom: 10px;
}

.counter-input::-webkit-outer-spin-button,
.counter-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}



.counter-button:hover {
  background-color: #005fcc;
}

.counter-button:active {
  background-color: #004499;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button-1 {
  margin: 20px;
}

.button-2{
  margin-right: 10px;
  
}
.button-3{
  margin-left: 5px;
}
.button-4{
  margin-left: 5px;
}
@media screen and (max-width: 480px) {
  .button-container {
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
}
</style>

