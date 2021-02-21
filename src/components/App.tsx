import React, { Component } from 'react'
import '../scss/main.scss'

import VideoList from './video/VideoList'
import SearchBar from './SearchBar'
import { Video } from '../type/common'
import VideoDetail from './video/VideoDetail'
import { connect } from 'react-redux'
import { fetchVideo } from '../actions'

type AppState = {
  videos: Array<object>
  selectedVideo: Video
}
type AppProps = {
  fetchVideo: Function
}

class App extends Component<AppProps, AppState> {
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
    // const {
    //   data: { items },
    // } = await youtube.get('/search', {
    //   params: {
    //     q: term,
    //   },
    // })
    // this.setState({
    //   videos: items,
    //   selectedVideo: {
    //     id: { videoId: '' },
    //     snippet: {
    //       description: '',
    //       title: '',
    //       thumbnails: { medium: { url: '' } },
    //     },
    //   },
    // })
  }

  async componentDidMount() {
    await this.handleTermSubmit('reactjs')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleTermSubmit={this.props.fetchVideo} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven container__detail column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five container__lists column">
              <VideoList handleVideoSelect={this.handleVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ video }: any) => {
  return {
    video,
  }
}

export default connect(mapStateToProps, { fetchVideo })(App)
