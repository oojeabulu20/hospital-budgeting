import { Button, Modal,Stack } from "react-bootstrap"
import { useBudgets } from "../contexts/BudgetContext"
import { currencyFormatter } from "../utils"

export default function AddExpenseModal({ budgetId, handleClose }) {

    const {getBudgetExpenses, budgets, deleteBudget, deleteExpense} = useBudgets() //references the hook made earlier

    const budget = budgets.find(b => b.id === budgetId)

    const expenses = getBudgetExpenses(budgetId)

  return (
      <Modal show={budgetId != null} onHide={handleClose}>
              <Modal.Header closeButton>
              <Modal.Title>
                  {/**Here is where we can view and delete our budgets */}
                  <Stack direction="horizontal" gap="2">
                      <div>Expenses -{budget?.name}</div>
                      <Button onClick={() => {
                          deleteBudget(budget)
                          handleClose()
                      }} variant="outline-danger">Delete</Button>
                  </Stack>
                  </Modal.Title>
              </Modal.Header>
          <Modal.Body> {/**Looping through each expense for a particular budget*/}
              <Stack>
                  {expenses.map(expense => (
                      <Stack direction="horizontal" gap="2" key={expense.id}>
                          <div className="me-auto fs-4">{expense.description}</div>
                          <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                          <Button onClick={() => deleteExpense(expense)} size="sm" variant="outline-danger">&times;</Button>
                          </Stack>
                  ))}
              </Stack>
              </Modal.Body>
    </Modal>
  )
}
