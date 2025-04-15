import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGU1YWUxZjA1YWNhOTEzN2E0NzY0MDZkZThhN2RlYiIsIm5iZiI6MTc0MDIxMzYxOC4zNDcwMDAxLCJzdWIiOiI2N2I5OGQ3MmEyMzkyOWFjMjhiZTllYzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r0WGnyFgvi8CdU5jDT8z1qvrSuhQG4sxf0jCBnnsqGY'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);  
  },[category]);

  return (
    <div className="title-cards">
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
