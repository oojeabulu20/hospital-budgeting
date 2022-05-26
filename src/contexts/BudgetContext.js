import React, { useContext, useState } from "react"
import {v4 as uuidV4} from "uuid"
import { useLocalStorage } from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()


export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {

    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpense] = useLocalStorage("expenses",[])

    //this returns all the expenses we want from the budgetid that we pass in
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    //the same thing for adding a budget we do for the expenses
    function addExpense({description, amount, budgetId}) {
         setExpense(prevExpenses => {
            return [...prevExpenses,{id: uuidV4(),description, amount, budgetId}]
        })
    }

    //here we add budget by taking our previously stored budgets and then creating a new one with an id, name and max value
    function addBudget({name, max}) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets
            }
            return [...prevBudgets,{id: uuidV4(),name, max}]
        })
    }
    
    //deleting the budget id that we pass in
    function deleteBudget({ id }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    //
    function deleteExpense({id}) {
        setExpense(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }



    //all the children inside of the context is accessible by the app
    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetsContext.Provider>
    )
}