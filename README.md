# React training materials

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

* [Session 1](#session-1)
* [Session 2](#session-2)

## Session 1

* To get started: `npx create-react-app`
* ECMAScript
  * ES5
  * ES6 (const, let, =>)
  * ESNext (Stage 1, 2, 3 -> ESn)
* Tooling
  * Babel: Transpile ES6 -> ES5
  * Webpack: Bundle files together (foo.js, bar.js -> bundle.js)
* Nodejs
  * JavaScript Runtime environment
  * Package managers: NPM, YARN

* React
  * React (user interface library)
  * React Virtual DOM
  * One-Way Data Flow vs Two-Way Data Flow
    * Action -> Store -> View
    * View <> State
  * React JS vs JSX
  * Rendering components
  * Props

## Session 2

* Component state
* State management: Redux, MobX
  * Redux: Immutable, functional
  * MobX: Mutable, object-oriented, reactive
* Controlled vs Uncontrolled component

### Redux

* `npm install redux redux-react`
* Redux: Store, Actions, Dispatchers

### Application structure

* Container component (Smart component, View component)
  * "How things work"
  * Writter as ES6 Classes
  * Stateful (`this.state`)
  * Connected to State Management (Redux, MobX)
  * Provide data and behavior to Presentational component
* Presentational component (Dumb component)
  * "How things look"
  * Written as (pure) Functional components
  * Reveive data via Props

* Folder structure

  * Group by file type

  ```sh
  app/
    js/
      Header.js
      Footer.js
    css/
      Header.css
      Footer.css
    assets/
      Header.png
      Footer.png
    tests/
      Header.test.js
      Footer.test.js
  ```

  * Group by relation

  ```sh
  app/
    Header/
      Header.js
      Header.css
      Header.png
      Header.test.js
    Footer/
      Footer.js
      Footer.css
      Footer.png
      Footer.test.js
  ```
