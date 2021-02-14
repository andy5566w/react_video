import React, { ChangeEvent, Component, FormEvent } from 'react'

type SearchBarState = {
  term: string
}

type SearchBarProps = {}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props)
    this.state = {
      term: '',
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.currentTarget.value })
    console.log(process.env.API_YOUTUBE_KEY)
  }

  handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="ui segment search-bar search-bar">
        <form action="" className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
