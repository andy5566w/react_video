import React, { Component } from 'react'
import SearchBar from './SearchBar'
import '../scss/main.scss'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    )
  }
}

export default App
