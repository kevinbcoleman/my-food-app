import React, { useContext } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import '../../App.css';

const Recipe = ({ recipe }) => {

  const recipeContext = useContext(RecipeContext)
  const { deleteRecipe, setCurrent, clearCurrent } = recipeContext
  const { _id, label, cuisineType, ingredients = [] } = recipe
  const [modalShow, setModalShow] = React.useState(false);



  const onDelete = () => {
    deleteRecipe(_id)
    clearCurrent()
  }

  const DeleteModal = (props) => {
    return (
      < Modal
        {...props}
        className="Modal"
        size="lg"
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
        <div>
          <h3 className="card-header">{label}</h3>
        </div>
        <Card.Body>
          <p>Cuisine Type: {cuisineType}</p>
          <h4>Ingredients</h4>

          <table>
            <tr>
              <th>Amount</th>
              <th>Name</th>
            </tr>
            {ingredients.map((i, index) => (
              <tr>
                <td className="text-end">{i.amount}</td>
                <td>{i.ing_name}</td>
              </tr>
            ))}
          </table>
          <Button
            className="card-btn mr-4"
            onClick={() => setCurrent(recipe)}>
            Edit
          </Button>
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

export default Recipe


