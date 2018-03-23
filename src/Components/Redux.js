import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from '../examples/redux/Counter'

const Redux = () => {
  // Reducer
  function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
      case 'increase':
        return { count: count + 1 }
      default:
        return state
    }
  }

  // Store
  const store = createStore(counter)
  return (
    <div className="Redux">
      <p>Redux</p>

      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  )
}

export default Redux
