import React, { Component } from 'react'
type VideosItemsProps = {
  video: {
    id: { videoId: string }
    snippet: {
      description: string
      title: string
      thumbnails: { medium: { url: string } }
    }
  }
}
class VideosItems extends Component<VideosItemsProps, Object> {
  render() {
    const { snippet } = this.props.video
    return (
      <div className="item video-item">
        <img
          className="ui image"
          src={snippet.thumbnails.medium.url}
          alt={snippet.description}
        />
        <div className="content">
          <div className="header">{snippet.title}</div>
        </div>
      </div>
    )
  }
}

export default VideosItems
