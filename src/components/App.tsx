import React, { Component } from 'react'
import '../scss/main.scss'
import youtube from '../api/youtube'

import VideoList from './video/VideoList'
import SearchBar from './SearchBar'
import { Video } from '../type/common'
import VideoDetail from './video/VideoDetail'

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
    this.setState({
      videos: items,
      selectedVideo: {
        id: { videoId: '' },
        snippet: {
          description: '',
          title: '',
          thumbnails: { medium: { url: '' } },
        },
      },
    })
  }

  componentDidMount() {
    this.handleTermSubmit('reactjs')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleTermSubmit={this.handleTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
