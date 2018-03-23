import React from 'react'
import { connect } from 'react-redux'

// React component

/*
class Counter extends React.Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}
*/

const Counter = props => {
  const { value, onIncreaseClick } = props
  return (
    <div>
      <p>Counter value: {value}</p>
      <button onClick={onIncreaseClick}>Increase</button>
    </div>
  )
}

// Redux Action
const increaseAction = { type: 'increase' }

// Map Redux state to component props
const mapStateToProps = state => {
  return {
    value: state.count,
  }
}

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  }
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
