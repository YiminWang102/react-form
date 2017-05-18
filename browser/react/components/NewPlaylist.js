import React from 'react';

const NewPlaylist = function (props) {
  var typed = props.typed
  var disable = props.disabled(props.inputValue)
  return (
    <div className="well">
      <form className="form-horizontal" onChange={props.handleChange} onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" value={props.inputValue}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={disable}>Create Playlist</button>
            </div>
          </div>
          {
            typed && disable ?
            <div className="alert alert-warning">Please enter a valid name</div>
            : null
          }
        </fieldset>
      </form>
    </div>
)}

export default NewPlaylist;
