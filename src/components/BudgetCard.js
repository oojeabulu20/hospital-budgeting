import { Card } from "react-bootstrap"
import { currencyFormatter } from "../utils"

export default function BudgetCard({ name, amount, max }) {
    //this is where we will store all the details about each particular budget 
    //we pass in the name of the budget, the amount and the max amount in that budget
  return (
      <Card>
          <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                  <div>{name}</div>
                  <div>{currencyFormatter.format(amount)}/{currencyFormatter.format(max)}</div>
              </Card.Title>
          </Card.Body>
    </Card>
  )
}
