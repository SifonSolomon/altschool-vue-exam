import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()

  const count = computed(() => store.state.count)

  const increment = () => {
    store.commit('increment')
  }

  const decrement = () => {
    store.commit('decrement')
  }

  const reset = () => {
    store.commit('reset')
  }

  const set = (value) => {
    store.commit('set', value)
  }

//   const incrementAsync = () => {
//     store.dispatch('incrementAsync')
//   }

  return {
    count,
    increment,
    decrement,
    reset,
    set,
    // incrementAsync
  }
}