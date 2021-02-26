import React, { useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {addMovie} from '../action/action';
import { useDispatch} from "react-redux";




const AddMovie = ({show,handleClose}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [posterUrl, setPosterUrl] = useState('')
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0)
  
      return (
          <div>
               <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Control type="text" placeholder="Enter a title" onChange={(e) =>setTitle(e.target.value)} /> 
          <br/>
          <Form.Control type="text" placeholder="Enter a posterUrl " onChange={(e) =>setPosterUrl(e.target.value)}/>
          <br/>
          <Form.Control type="text" placeholder="Enter a description" onChange={(e) =>setDescription(e.target.value)} />
          <br/>
          <Form.Control type="number" placeholder="rate" onChange={(e) =>setRate(e.target.value)}/>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {dispatch(addMovie({title,posterUrl,description,rate,id:Math.random()})); handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
      )
}

export default AddMovie
