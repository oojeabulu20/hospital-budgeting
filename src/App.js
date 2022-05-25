import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import {useState} from "react"
import { useBudgets } from "./contexts/BudgetContext";

function App() {
  
  //controlling the state of the showing of the add budget modal
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const {budgets,getBudgetExpenses} = useBudgets()
  return (
    //the header for our page
    <>
    
    <Container className="my-4"> 
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Hospital Budgets</h1> {/*Keeps the page response when the page is expanded and reduced*/}
        <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button> 
        <Button variant="outline-danger">Add Expense</Button>
      </Stack>
        {/** This is where we style each budget card component and the display of each buddget card*/}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1rem",
          alignItems:"flex-start",
      }}></div>
        {/** Importing the budget card component into our application*/}
        {budgets.map(budget => { //Looping through budgets stored in the hook 
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount,0)//getting all expenses and adding them up 
          return (
            <BudgetCard key={budget.id} name={budget.name} amount={amount} max={budget.max}></BudgetCard>
          )
        })}
      </Container>
      {/** Where our add budget modal will be placed */}
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    </>
  );
}

export default App;
