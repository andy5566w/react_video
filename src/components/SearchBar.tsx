import React, { ChangeEvent, Component, FormEvent } from 'react'

type SearchBarState = {
  term: string
}

type SearchBarProps = {
  handleTermSubmit: Function
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props)
    this.state = {
      term: 'react',
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.currentTarget.value })
  }

  handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    this.props.handleTermSubmit(this.state.term)
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
