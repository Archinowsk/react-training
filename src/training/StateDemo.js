import React from 'react'

class StateDemo extends React.Component {
  state = {
    counter: 0,
    name: '',
  }

  updateCounter = () => {
    let { counter } = this.state
    this.setState({ counter: counter++ })
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default StateDemo
