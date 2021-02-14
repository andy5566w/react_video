import React, { Component } from 'react'

import VideosItems from './VideosItems'
import { Video } from '../../type/common'

type VideosListProps = {
  videos: Array<Video>
  handleVideoSelect: Function
}

class VideoList extends Component<VideosListProps, Object> {
  render() {
    const { videos, handleVideoSelect } = this.props
    const renderedLists = videos.map((video: Video) => (
      <VideosItems
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    ))
    return <div className="ui relaxed divided list">{renderedLists}</div>
  }
}

export default VideoList
