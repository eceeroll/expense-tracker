import React from "react";
import { useSelector } from "react-redux";

function History() {
  const historyListState = useSelector((state) => state.balance.historyList);

  return (
    <div className="history-container">
      <ul className="history-list">
        {historyListState.map((item, index) => (
          <li key={index} className="history-item">
            <p className="history-item-text">{item.text}</p>
            <span className="history-item-amount">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
