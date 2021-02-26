import React, { useState } from "react";
import {Card,Button} from 'react-bootstrap';
import {deleteMovie} from '../action/action';
import { useDispatch, useSelector} from "react-redux";
import EditMovie from "./EditMovie";

const MovieCard = ({movie}) => {
  const dispatch = useDispatch()
  const listMovie = useSelector(state => state.movieReducer.listMovie)
  const [id, setId] = useState()
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {setShow(true);setId(id)}
  
  return (
    <div className="movieCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="imgMovie"/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
        {movie.description}
          </Card.Text>
          <Card.Text>
        {''.padStart(movie.rate, '⭐')}
          </Card.Text>
          <div className="d-flex justify-content-around">
          <Button variant="primary" onClick={()=>handleShow(movie.id)}>Edit Movie</Button>
          <Button variant="danger" onClick={() => dispatch(deleteMovie(movie.id))}>Delete Movie</Button>
          </div>
        </Card.Body>
      </Card>
      <EditMovie show={show} handleClose={handleClose} id={id} movie={listMovie.find(movie=>movie.id===id)} />
    </div>
  );
};

export default MovieCard;
