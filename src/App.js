import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    //the header for our page
    <Container className="my-4"> 
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Hospital Budgets</h1> {/*Keeps the page response when the page is expanded and reduced*/}
        <Button variant="primary">Add Budget</Button> 
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
      <BudgetCard name="Covid Tests" amount={900000} max={1000000}></BudgetCard>
    </Container>
  );
}

export default App;
