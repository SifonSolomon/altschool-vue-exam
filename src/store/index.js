import {createStore} from 'vuex'




export default createStore ({
    state() {
        return {
          count: 0,
        };
        
      },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        reset(state) {
            state.count = 0;
        },
        set(state, value) {
            state.count = value;
          },
         
    },
    getters: {
        count: state => state.count
      },  
      

})

