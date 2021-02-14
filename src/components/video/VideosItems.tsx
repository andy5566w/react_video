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
      <div>
        <h1>{snippet.title}</h1>
        <img src={snippet.thumbnails.medium.url} alt={snippet.description} />
      </div>
    )
  }
}

export default VideosItems
