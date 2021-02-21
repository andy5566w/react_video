import React, { Component } from 'react'

import VideosItems from './VideosItems'
import { Video } from '../../type/common'
import { connect } from 'react-redux'

type VideosListProps = {
  video: Array<Video>
  handleVideoSelect: Function
}

class VideoList extends Component<VideosListProps, Object> {
  render() {
    const { video, handleVideoSelect } = this.props
    console.log('video', video)
    const renderedLists = video.map((video: Video) => (
      <VideosItems
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    ))
    return <div className="ui relaxed divided list">{renderedLists}</div>
  }
}

const mapStateToProps = ({ video }: any) => {
  return { video }
}

export default connect(mapStateToProps)(VideoList)
