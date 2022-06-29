import { render, screen, cleanup } from "@testing-library/react";
import BudgetCard from "../BudgetCard"
import "@testing-library/jest-dom";

test("Should render component", () => {
    render(<BudgetCard />);

    var budgetElement = screen.getByTestId("budget");
    expect(budgetElement).toBeInTheDocument();
})
