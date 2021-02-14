import React, { Component } from 'react'
import '../scss/main.scss'
import youtube from '../api/youtube'

import VideoList from './video/VideoList'
import SearchBar from './SearchBar'

type AppState = { videos: Array<object> }

class App extends Component<Object, AppState> {
  state = { videos: [] }
  handleTermSubmit = async (term: string) => {
    const {
      data: { items },
    } = await youtube.get('/search', {
      params: {
        q: term,
      },
    })
    this.setState({ videos: items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleTermSubmit={this.handleTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
