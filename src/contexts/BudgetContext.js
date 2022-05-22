import React, {useContext, useState} from "react"

const BudgetsContext = React.createContext()

export function useBudget() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {

    const budgets = useState([])
    const expenses = useState([])

    function getBudgetExpenses() {
        
    }
    function addExpense() {
        
    }

    function addBudget() {
        
    }

    function deleteBudget() {
        
    }

    function deleteExpense() {
        
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