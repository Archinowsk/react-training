import React from 'react'

class ReactState extends React.Component {
  state = {
    counter: 0,
    controlledName: '',
    uncontrolledName: '',
  }

  increaseCounter = () => {
    let { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  decreaseCounter = () => {
    let { counter } = this.state
    this.setState({ counter: counter - 1 })
  }

  updateName = event => {
    this.setState({ controlledName: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ uncontrolledName: this.input.value })
  }

  render() {
    let { controlledName, uncontrolledName } = this.state

    return (
      <div>
        <p>Counter value: {this.state.counter}</p>
        <button onClick={this.decreaseCounter}>Decrease</button>
        <button onClick={this.increaseCounter}>Increase</button>

        <p>Controlled Name: {controlledName}</p>
        <input
          type="text"
          value={controlledName}
          onChange={event => this.updateName(event)}
        />

        <p>Uncontrolled Name: {uncontrolledName}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={input => (this.input = input)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ReactState
