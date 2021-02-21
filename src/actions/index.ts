import { Dispatch } from 'redux'
import youtube from '../api/youtube'

export const fetchVideo = function (term: string) {
  return async (dispatch: Dispatch) => {
    const {
      data: { items },
    } = await youtube.get('/search', {
      params: {
        q: term,
      },
    })

    dispatch({ type: 'FETCH_VIDEO', payload: items })
  }
}
