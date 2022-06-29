import { Button, Form, Modal } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets} from "../contexts/BudgetContext"

export default function AddExpenseModal({ show, handleClose, defaultBudgetId}) {

    //useRef creates reference to data entered in the form once submitted
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()

    const {addExpense,budgets} = useBudgets() //references the hook made earlier

    function handleSubmit(e) {
        e.preventDefault()
        addExpense(
            {
                description: descriptionRef.current.value,
                amount: parseFloat(amountRef.current.value),
                budgetId:budgetIdRef.current.value
            }
        )
        handleClose()
    }

  return (
      <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                  <Modal.Title>New Expense</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {/** Name for the budget */}
                  <Form.Group className="mb-3" controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control ref={descriptionRef} type="text" required/>
                  </Form.Group>
                  {/** Input for the budget amount */}
                  <Form.Group className="mb-3" controlId="amount">
                      <Form.Label>Max. Amount</Form.Label>
                      <Form.Control ref={amountRef} type="number" required min={0} step={100}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="budgetId">
                      <Form.Label>Budget</Form.Label>
                      <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                          {budgets.map(budget => (
                              <option key={budget.id} value={budget.id}>{budget.name}</option>
                          ))}
                      </Form.Select>
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
