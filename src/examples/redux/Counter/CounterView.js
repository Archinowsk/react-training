import React from 'react'
import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from './CounterActions'

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
  const { value, onIncreaseClick, onDecreaseClick } = props
  return (
    <div>
      <p>Counter value: {value}</p>
      <button onClick={onDecreaseClick}>Increase</button>
      <button onClick={onIncreaseClick}>Increase</button>
    </div>
  )
}

// Map Redux state to component props
// Subscribe React Component to Redux store updates
// When Redux Store is updated mapStateToProps() will be called
const mapStateToProps = state => {
  return {
    value: state.count,
  }
}

// Map Redux Actions to Component props
const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
  }
}

// connect() wires Redux to React Component
// connect() is Higher Order Component (HOC)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
