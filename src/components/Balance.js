import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const balanceState = useSelector((state) => state.balance.balance);

  return (
    <div className="balance">
      <label className="balance-label" htmlFor="balance-item">
        Your Balance
      </label>
      <span className="balance-amount">{balanceState}</span>
    </div>
  );
}

export default Balance;
