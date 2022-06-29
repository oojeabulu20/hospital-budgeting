import { Card, ProgressBar, Stack,Button } from "react-bootstrap"
import { currencyFormatter } from "../utils"

export default function BudgetCard({ name, amount, max, gray, onAddExpenseClick,hideButtons,onViewExpensesClick }) {

    //setting each budget card to gray and then if the expense goes over the budget then make the card red
    const classnames = []
    if (amount > max) {
        classnames.push("bg-danger","bg-opacity-10")
    } else if (gray) {
        classnames.push("bg-light")
    }
    //this is where we will store all the details about each particular budget 
    //we pass in the name of the budget, the amount and the max amount in that budget
  return (
      <Card data-testid="budget" className={classnames.join(" ")}>
          <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                  <div className="me-2">{name}</div>
                  <div className="d-flex align-items-baseline">
                      {currencyFormatter.format(amount)}
                      <span className="text-muted fs-6 ms-1">
                          /{currencyFormatter.format(max)}
                      </span>
                  </div>
              </Card.Title>
              {/** this is where we will display the bar for our expense using the Progress Bar in bootstrap */}
              <ProgressBar className="rounded-pill" variant={getProgressBarVariant(amount, max)} min={0} max={max} now={amount} />
              {/* Function to determine colour of progress bar */}
              {!hideButtons && (<Stack direction="horizontal" gap="2" className="mt-4">
                  {/** Buttons to add and view expenses */}
                  <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
                  <Button onClick={onViewExpensesClick} variant="outline-secondary">View Expenses</Button>
              </Stack>)}
          </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) return "success" //if the expense is 50% of the budget return the success colour(green)
    if (ratio < 0.75) return "warning" //if the expense is 75% of the budget return the warning colour(orange)
    return "danger" //otherwise return the danger colour(red)
}
