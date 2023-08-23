import React from "react";
import Balance from "./components/Balance";
import Form from "./components/Form";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";

function App() {
  return (
    <div className="container">
      <h3 className="title">Expense Tracker</h3>
      <Balance />
      <IncomeExpense />
      <History />
      <Form />
    </div>
  );
}

export default App;
