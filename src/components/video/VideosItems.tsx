import React, { Component } from 'react'
import { Video } from '../../type/common'

type VideosItemsProps = {
  video: Video
  handleVideoSelect: Function
}
class VideosItems extends Component<VideosItemsProps, Object> {
  render() {
    const { snippet } = this.props.video
    const { handleVideoSelect } = this.props
    return (
      <div
        className="item video-item"
        onClick={() => handleVideoSelect(this.props.video)}
      >
        <img
          className="ui image"
          src={snippet.thumbnails.medium.url}
          alt={snippet.description}
          draggable={'false'}
        />
        <div className="content">
          <div className="header">{snippet.title}</div>
        </div>
      </div>
    )
  }
}

export default VideosItems
