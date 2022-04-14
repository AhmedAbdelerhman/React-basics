import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleOnChangehandler(event) {
    setTitle(event.target.value);
  }
  function amountOnChangehandler(event) {
    setAmount(event.target.value);
  }
  function dateOnChangehandler(event) {
    setDate(event.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

      props.onSave(newExpense)

    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleOnChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountOnChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateOnChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
