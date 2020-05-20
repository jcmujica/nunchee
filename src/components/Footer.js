import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
  const playlist = useSelector((state) => state.playlistData);
  return (
    <footer className="footer">
      <Link to={`/playlist`}><p><strong>Playlist: {playlist.length}</strong> </p></Link>
    </footer>
  )
}

export default Footer;
