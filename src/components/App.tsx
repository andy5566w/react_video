import React, { Component } from 'react'
import '../scss/main.scss'
import youtube from '../api/youtube'

import VideoList from './video/VideoList'
import SearchBar from './SearchBar'
import { Video } from '../type/common'

type AppState = {
  videos: Array<object>
  selectedVideo: Video
}

class App extends Component<Object, AppState> {
  state = {
    videos: [],
    selectedVideo: {
      id: { videoId: '' },
      snippet: {
        description: '',
        title: '',
        thumbnails: { medium: { url: '' } },
      },
    },
  }

  handleVideoSelect = (video: Video) => {
    console.log('video', video)
    this.setState({ selectedVideo: video })
  }

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
        <VideoList
          videos={this.state.videos}
          handleVideoSelect={this.handleVideoSelect}
        />
      </div>
    )
  }
}

export default App
