import React from "react";
import { useSelector } from "react-redux";

function IncomeExpense() {
  const totalExpenseState = useSelector((state) => state.balance.totalExpense);
  const totalIncomeState = useSelector((state) => state.balance.totalIncome);

  return (
    <div className="income-expense">
      <div className="income-container">
        <label className="income-label" htmlFor="income">
          INCOME
        </label>
        <span className="income-amount">{totalIncomeState}</span>
      </div>
      <div className="expense-container">
        <label className="expense-label" htmlFor="income">
          EXPENSE
        </label>
        <span className="expense-amount">{totalExpenseState}</span>
      </div>
    </div>
  );
}

export default IncomeExpense;
