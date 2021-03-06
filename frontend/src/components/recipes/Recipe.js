import React, { useContext } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import '../../App.css';

const Recipe = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext)
  const { deleteRecipe, setCurrent, clearCurrent } = recipeContext
  const { _id, label, cuisineType, ingredients = [] } = recipe
  const [modalShow, setModalShow] = React.useState(false)

  const onDelete = () => {
    deleteRecipe(_id)
    clearCurrent()
  }

  const DeleteModal = (props) => {
    return (
      < Modal
        {...props}
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
          <Button className="edit-btn" onClick={props.onHide}>Cancel</Button>
          <Button className="delete-btn" onClick={onDelete}>Delete</Button>
        </Modal.Footer>
      </Modal >
    )
  }

  return (
    <>
      <Card className="ProfRecipeCard col-10 col-sm-8 col-lg-3 px-0">
        <div>
          <h3 className="card-header text-center">{label}</h3>
        </div>
        <Card.Body>
          <p className="text-center"><span className="text-dark">Cuisine Type:</span>{cuisineType}</p>
          <h4 className="text-center">Ingredients</h4>

          <table>
            <tbody>
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
            </tbody>
          </table>

          <div className="d-flex flex-row justify-content-center">
            <Button
              className="edit-btn mr-4"
              onClick={() => setCurrent(recipe)}>
              Edit
          </Button>
            <Button className="delete-btn"
              onClick={() =>
                setModalShow(true)}>
              Delete
          </Button>
          </div>

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


