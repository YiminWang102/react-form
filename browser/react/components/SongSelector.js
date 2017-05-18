import React from 'react';
import Songs from './Songs'
import axios from 'axios';

class SongSelector extends React.Component {

  constructor () {
    super ()

    this.state = {
      value:'2'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.value);
    const playlistId = this.props.playlistId
    axios.post(`/api/playlists/${playlistId}/songs`,{
      id: this.state.value
    })
    this.setState({
      value:'2'
    })
  }

  render(){
    const songs = this.props.songs
    return (
      <div className="well">
        <form onSubmit={this.handleSubmit}  className="form-horizontal" noValidate name="songSelect">
          <fieldset>
            <legend>Add to Playlist</legend>
            <div className="form-group">
              <label htmlFor="song" className="col-xs-2 control-label">Song</label>
              <div className="col-xs-10">
                <select onChange={this.handleChange} value={this.state.value} className="form-control" name="song">
                  {
                    songs.map( song => {
                      return (
                        <option key={song.id} value={song.id}>{song.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Add Song</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default SongSelector;
