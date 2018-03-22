import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'

class App extends Component {
  state = {
    page: 'start',
  }

  render() {
    const { page } = this.state

    const selector = (
      <div>
        <button
          onClick={() => {
            this.setState({ page: 'start' })
          }}
        >
          App
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
        {selector}
        {page === 'start' && (
          <div className="start">
            <p className="App-intro">Welcome to React Training</p>
          </div>
        )}

        {page === 'intro' && (
          <div>
            <p>ES5 (ECMAScript)</p>
            <p>ES6 (const, let, =>)</p>
            <p>ESNext (Stage 1, 2, 3 -> ESn)</p>
            <p>Babel</p>
            <p>Webpack</p>
            <p>Nodejs (runtime environment, ~framework), NPM, YARN</p>
            <p>React (user interface library)</p>
            <p>React Virtual DOM</p>
            <p>React JS vs JSX</p>
            <p>Rendering Components</p>
            <p>Props</p>
          </div>
        )}

        {page === 'state' && (
          <div>
            <p>Component State</p>
            <p>Redux</p>
          </div>
        )}

        {page === 'structure' && (
          <div>
            <p>Project structure</p>
            <p>Folder structure</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
