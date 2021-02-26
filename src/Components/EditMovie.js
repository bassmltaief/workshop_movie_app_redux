import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { editMovie } from "../action/action";
import { useDispatch } from "react-redux";

const EditMovie = ({ show, handleClose, id, movie }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  useEffect(() => {
    setTitle(movie && movie.title);
    setPosterUrl(movie && movie.posterUrl);
    setDescription(movie && movie.description);
    setRate(movie && movie.rate);
  }, [movie]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Enter a posterUrl "
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Form.Control
            type="number"
            placeholder="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editMovie({ title, posterUrl, description, rate, id }));
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditMovie;
