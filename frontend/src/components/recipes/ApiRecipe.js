import React, { useContext } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import BrowserContext from '../../context/browser/browserContext'
import '../../App.css';

const ApiRecipe = ({ apiRecipe }) => {

  const browserContext = useContext(BrowserContext)
  const { deleteApiRecipe } = browserContext
  const { _id, label, cuisineType, ingredients = [] } = apiRecipe
  const [modalShow, setModalShow] = React.useState(false);


  const onDelete = () => {
    deleteApiRecipe(_id)
  }

  const DeleteModal = (props) => {
    return (
      < Modal
        {...props}
        className="Modal"
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Please confirm
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure?</h4>
          <p>
            This action cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="card-btn" onClick={props.onHide}>Cancel</Button>
          <Button className="card-btn delete-btn" onClick={onDelete}>Delete</Button>
        </Modal.Footer>
      </Modal >
    )
  }

  return (
    <>
      <Card className="RecipeCard">
        <h3 className="card-header">{label}</h3>
        <Card.Body>
          <p>Cuisine Type: {cuisineType}</p>
          <h4>Ingredients</h4>
          <ul className="text-start">
            {ingredients.map((i, index) => (
              <div key={index}>
                <li>{i.ing_name}</li>
              </div>
            ))}
          </ul>
          <Button className="card-btn delete-btn"
            onClick={() =>
              setModalShow(true)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default ApiRecipe
