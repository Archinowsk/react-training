import React, { Component } from 'react'
import Intro from './Components/Intro'
import Sctructure from './Components/Sctructure'
import Start from './Components/Start'
import State from './Components/State'
import logo from './assets/logo.svg'
import './styles/App.css'

class App extends Component {
  state = {
    page: 'start',
  }

  render() {
    const { page } = this.state

    const Selector = (
      <div>
        <button
          onClick={() => {
            this.setState({ page: 'start' })
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            this.setState({ page: 'intro' })
          }}
        >
          Intro
        </button>
        <button
          onClick={() => {
            this.setState({ page: 'state' })
          }}
        >
          State
        </button>
        <button
          onClick={() => {
            this.setState({ page: 'structure' })
          }}
        >
          Structure
        </button>
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {Selector}

        {page === 'start' && <Start />}

        {page === 'intro' && <Intro />}

        {page === 'state' && <State />}

        {page === 'structure' && <Sctructure />}
      </div>
    )
  }
}

export default App
