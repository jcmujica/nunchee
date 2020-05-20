import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContenidoDetalle(props) {
  const [contentDetail, setContentDetail] = useState({});
  const { match } = props;

  useEffect(() => {
    axios.get(`/ott/contents/details/${match.params.id}`)
      .then(res => {
        console.log(res.data.data);
        setContentDetail(res.data.data);
      })
      .catch(err => console.log(err))
  }, [match.params.id]);

  return (
    <div className="detail">
      {contentDetail._id ?
        <div>
          <div className="detail__top">
            <div className="detail__top-left">
              <h1>Título: {contentDetail.title.original}</h1>
              <h2>Descripción:</h2>
              <p dangerouslySetInnerHTML={{ __html: contentDetail.description.html.original }}></p>
            </div>
            <div className="detail__top-right">
              {contentDetail.gif && <img src={contentDetail.gif.link} alt="" />}
            </div>
          </div>
          {contentDetail.staff && <h2>Staff:</h2>}
          {contentDetail.staff && contentDetail.staff.map((personaje) => (
            <ul>
              <li key={personaje.id}><strong>Nombre:</strong> {personaje.name.first} {personaje.name.last}</li>
            </ul>
          ))}
          {contentDetail.images && <h2>Imágenes</h2>}
          {contentDetail.images && contentDetail.images.map((image) => (
            <img className="detail__image" src={`/assets/images/view/${image._id}?type=${image.type}&scale=25&placeholder=true`} alt="" />
          ))}
        </div>
        : null
      }
    </div >
  )
}

export default ContenidoDetalle
