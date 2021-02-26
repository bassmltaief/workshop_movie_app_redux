import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../action/action";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import MovieCard from "./MovieCard";

const ListMovie = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const starTab = useSelector((state) => state.starReducer.starTab);
  const listMovie = useSelector((state) => state.movieReducer.listMovie);
  return (
    <div>
      <h1 style={{ textAlign: "center",color:"white"}}>Movie App</h1>
      <div className="header">
        <input type="text" placeholder="search..." className="inp" />
        <div className="sta">
          {starTab.map((star) => (
            <span
              className={star.isColored ? "gold" : "star"}
              onClick={() => dispatch(changeColor(star.id))}
              key={star.id}
            >
              {star.icon}
            </span>
          ))}
        </div>
        <Button variant="primary" onClick={handleShow} className="butAdd">
          Add Movie
        </Button>
      </div>
      <div className="movie">
        {listMovie.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
      <AddMovie show={show} handleClose={handleClose} />
    </div>
  );
};

export default ListMovie;
