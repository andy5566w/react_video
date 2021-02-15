import React, { Component } from 'react'
import { Video } from '../../type/common'

type VideoDetailProps = {
  video: Video
}

class VideoDetail extends Component<VideoDetailProps, Object> {
  render() {
    const { video } = this.props
    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Video Title"
            allowFullScreen
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoDetail
