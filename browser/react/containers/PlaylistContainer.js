import React from 'react';
import {hashHistory} from 'react-router';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class PlaylistContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      inputValue: '',
      typed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <NewPlaylist typed={this.state.typed} disabled={this.disabled} inputValue={this.state.inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value,
      typed: true
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue);
    // this.setState({
    //   inputValue: '',
    //   typed: false
    // })
  }

  disabled(name){
    return (name.length < 1 || name.length > 16)
  }



}

export default PlaylistContainer
