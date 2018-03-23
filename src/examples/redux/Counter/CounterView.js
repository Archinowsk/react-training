import React from 'react'
import { connect } from 'react-redux'
import {
  increaseAction,
  decreaseAction,
  updateNameAction,
} from './CounterActions'

// React component

/*
class Counter extends React.Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <p>Counter value: {value}</p>
        <button onClick={onDecreaseClick}>Increase</button>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}
*/

const Counter = props => {
  const { value, name, onIncreaseClick, onDecreaseClick, onUpdateName } = props

  return (
    <div>
      <p>Counter value: {value}</p>

      <button onClick={() => onDecreaseClick(value - 1)}>Decrease</button>
      <button onClick={() => onIncreaseClick(value + 1)}>Increase</button>

      <p>Name: {name}</p>

      <input type="text" value={name} onChange={event => onUpdateName(event)} />
    </div>
  )
}

// Map Redux state to component props
// Subscribe React Component to Redux store updates
// When Redux Store is updated mapStateToProps() will be called
const mapStateToProps = state => {
  return {
    value: state.count,
    name: state.name,
  }
}

// Map Redux Actions to Component props
const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: value => dispatch(increaseAction(value)),
    onDecreaseClick: value => dispatch(decreaseAction(value)),
    onUpdateName: event => dispatch(updateNameAction(event.target.value)),
  }
}

// connect() subscrives React Component to Redux Store
// connect() is Higher Order Component (HOC)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
