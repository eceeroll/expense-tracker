import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { balanceActions } from "../store/balance-slice";

function Form() {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      text: enteredText,
      amount: enteredAmount,
    };

    dispatch(balanceActions.addToHistoryList(transaction));

    const { amount } = transaction;

    if (amount >= 0) {
      dispatch(balanceActions.addIncome(amount));
    } else {
      dispatch(balanceActions.addExpense(amount));
    }
  };

  const handleTextChange = (e) => {
    setEnteredText(e.target.value);
  };

  const handleAmountChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
    setEnteredAmount(newAmount);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Add New Transaction</h3>
        <div className="form-group">
          <label htmlFor="text-input">Text</label>
          <input
            value={enteredText}
            onChange={handleTextChange}
            type="text"
            name="text-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Amount</label>
          <small>(negative - expense, positive - income)</small>
          <input
            onChange={handleAmountChange}
            type="text"
            name="amount-input"
            // value={enteredAmount}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;
