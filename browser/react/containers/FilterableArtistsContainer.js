import React from 'react';

import FilterInput from '../components/FilterInput'
import Artists from '../components/Artists'

class FilterableArtistsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));

    return(
      <div>
        <FilterInput handleChange={this.handleChange}/>
        <Artists artists={filteredArtists} />
      </div>
    )
  }
}

export default FilterableArtistsContainer;
