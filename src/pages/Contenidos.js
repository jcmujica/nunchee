import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToPlaylistAction } from '../reducers/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contenidos() {
  const [content, setContent] = useState([]);
  const [displayContent, setDisplayContent] = useState([]);
  const [current, setCurrent] = useState(0);
  const addtoPlaylist = useDispatch((content) => addToPlaylistAction(content));

  const handleChange = (action) => {
    let index = current;
    if (action === 'back') {
      index = index === 0 ? content.length - 1 : current - 1;
    } else if (action === 'next') {
      index = current === content.length - 1 ? 0 : current + 1;
    };
    setCurrent(index);
    setDisplayContent(content.filter((el, i) => i === index));
  };

  const addToPlaylistHandler = (content) => {
    addtoPlaylist({
      type: 'ADD_LIST',
      payload: {
        id: content._id,
        title: content.title.original,
        desc: content.description.plain.original,
        image: `/assets/images/view/${content.images[0]._id}?type=backdrop&scale=100&placeholder=true}`
      }
    })
  };

  useEffect(() => {
    axios.get(`/generic/playlists/details/5b845b8346cc29000e4f186a?`)
      .then(res => {
        let items = res.data.data.items;
        setContent(items);
        let currentItem = [...items.filter((el, i) => i === 0)];
        setDisplayContent(currentItem);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <button className="content__button" onClick={() => handleChange('back')}>{`<`}</button>
      {displayContent.map((el) => (
        <div key={el._id} className="content__main" style={{ backgroundImage: `url(/assets/images/view/${el.images[0]._id}?type=backdrop&scale=100&placeholder=true})` }}>
          <h1>{el.title.original}</h1>
          {/* <img src={`/assets/images/view/${el.images[0]._id}?type=backdrop&scale=100&placeholder=true`} alt="" /> */}
          <p>{el.description.plain.original}</p>
          <div>
            <Link to={`/contenidos/detalle/${el._id}`}><button className="content__button-more">Ver Detalle</button></Link>
            <button className="content__button-more" onClick={() => addToPlaylistHandler(el)}>Agregar al Playlist</button>
          </div>
          <p></p>
        </div>
      ))}
      <button className="content__button" onClick={() => handleChange('next')}>{`>`}</button>
    </>
  )
}

export default Contenidos;