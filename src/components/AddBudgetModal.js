import { Button, Form, Modal } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetContext"
export default function AddBudgetModal({ show, handleClose }) {

    //useRef creates reference to data entered in the form once submitted
    const nameRef = useRef()
    const maxRef = useRef()

    const {addBudget} = useBudgets() //references the hook made earlier

    function handleSubmit(e) {
        e.preventDefault()
        addBudget(
            {
                name: nameRef.current.value,
                max: parseFloat(maxRef.current.value)
            }
        )
        handleClose()
    }

  return (
      <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                  <Modal.Title>New Budget</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {/** Name for the budget */}
                  <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control ref={nameRef}type="text" required/>
                  </Form.Group>
                  {/** Input for the budget amount */}
                  <Form.Group className="mb-3" controlId="amount">
                      <Form.Label>Max. Amount</Form.Label>
                      <Form.Control ref={maxRef} type="number" required min={0} step={100}/>
                  </Form.Group>
                  {/** Button to Submit our form */}
                  <div className="d-flex justify-content-end">
                      <Button variant="primary" type="submit">
                          Submit
                    </Button>
                  </div>
              </Modal.Body>
          </Form>
    </Modal>
  )
}
