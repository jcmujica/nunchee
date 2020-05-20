import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPlaylistAction } from '../reducers/reducer';

function Playlist() {
  const playlist = useSelector((state) => state.playlistData);
  const removeFromPlaylist = useDispatch((id) => removeFromPlaylistAction(id));

  const deleteHandler = (id) => {
    removeFromPlaylist({
      type: 'REMOVE_LIST',
      payload: id
    })
  }

  return (
    <div className="playlist">
      <ul>
        {playlist.map((element) => (
          <li key={element.id}>
            <img src={element.image} alt="" />
            <div>
              <h3>{element.title}</h3>
              <p>{element.desc}</p>
            </div>
            <span className="playlist__delete" onClick={() => deleteHandler(element.id)}>x</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist;
