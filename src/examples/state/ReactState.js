import React from 'react'

class ReactState extends React.Component {
  state = {
    counter: 0,
    name: '',
  }

  updateCounter = () => {
    let { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
    return (
      <div>
        <p>Counter value: {this.state.counter}</p>
        <button onClick={this.updateCounter}>Increase</button>
      </div>
    )
  }
}

export default ReactState
