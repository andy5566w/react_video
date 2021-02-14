import React, { Component } from 'react'

import VideosItems from './VideosItems'

type VideosListProps = {
  videos: Array<Video>
}

type Video = {
  id: { videoId: string }
  snippet: {
    description: string
    title: string
    thumbnails: { medium: { url: string } }
  }
}

class VideoList extends Component<VideosListProps, Object> {
  render() {
    const { videos } = this.props
    const renderedLists = videos.map((video: Video) => (
      <VideosItems key={video.id.videoId} video={video} />
    ))
    return <div className="ui relaxed divided list">{renderedLists}</div>
  }
}

export default VideoList
