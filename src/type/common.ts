export type Video = {
  id: { videoId: string }
  snippet: {
    description: string
    title: string
    thumbnails: { medium: { url: string } }
  }
}
