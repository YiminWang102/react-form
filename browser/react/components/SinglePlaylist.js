import React from 'react';
import Songs from './Songs';
import SongSelector from './SongSelector'

class SinglePlaylist extends React.Component {
  constructor(){
    super()

  }

  render(){
    const playlist = this.props.selectedPlaylist
    return(
      <div>
        <h3>{ playlist.name }</h3>
        <Songs currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne} songs={playlist.songs}/>
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
        <SongSelector playlistId={playlist.id} songs={this.props.songs} />
      </div>
    )
  }

  componentDidMount () {
    this.props.selectPlaylist(this.props.routeParams.playlistId);
  }

  componentWillReceiveProps (nextProps) {
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const currentPlaylistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId)
      selectPlaylist(nextPlaylistId);
  }

}

export default SinglePlaylist
