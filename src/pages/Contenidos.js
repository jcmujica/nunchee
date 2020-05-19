import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contenidos() {
  const [content, setContent] = useState([]);
  const [displayContent, setDisplayContent] = useState([]);
  const [current, setCurrent] = useState(0);

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
        <div key={el._id} className="content__main">
          <h1>{el.title.original}</h1>
          <img src={`/assets/images/view/${el.images[0]._id}?type=backdrop&scale=25&placeholder=true`} alt="" />
          <p>{el.description.plain.original}</p>
          <Link to={`/contenidos/detalle/${el._id}`}><button className="content__button-more">Ver Detalle</button></Link>
        </div>
      ))}
      <button className="content__button" onClick={() => handleChange('next')}>{`>`}</button>
    </>
  )
}

export default Contenidos;