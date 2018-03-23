import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CounterView from '../examples/redux/Counter/CounterView'
import CounterReducer from '../examples/redux/Counter/CounterReducer'

const Redux = () => {
  // Store
  const store = createStore(
    CounterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return (
    <div className="Redux">
      <p>Redux</p>

      {/* <Provider> makes the Redux store available to the connect() calls in the component hierarchy below */}
      <Provider store={store}>
        <CounterView />
      </Provider>
    </div>
  )
}

export default Redux
