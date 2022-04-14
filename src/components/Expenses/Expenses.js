import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  console.log(props.getFormDate, "expenses");
  const [selected, setSelect] = useState("2022");

  let expenseItemArry = [];

  const expenses = [
    // {
    //   id: "e1",
    //   title: "Toilet Paper",
    //   amount: 94.12,
    //   date: new Date(2020, 7, 14),
    // },
    // { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    // {
    //   id: "e3",
    //   title: "Car Insurance",
    //   amount: 294.67,
    //   date: new Date(2021, 2, 28),
    // },
    // {
    //   id: "e4",
    //   title: "New Desk (Wooden)",
    //   amount: 450,
    //   date: new Date(2021, 5, 12),
    // },
  ];
  if (props.getFormDate) expenses.unshift(props.getFormDate);

  const filteredByYear = expenses.filter((expense) => {
      
    return expense.date.getFullYear().toString() === selected;
  });
  const onSelectHandler = (value) => {
    setSelect(value);
  };
  for (let i = 0; i < filteredByYear.length; i++) {
    expenseItemArry.push(
      <ExpenseItem
        key={expenses[i].id}
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
      />
    );
  }
  if(filteredByYear.length ===0)
  expenseItemArry.push(<p key= "1">No Expenses yet</p>)

  return (
    <div>
      <ExpenseFilter selectedValue={selected} onSelect={onSelectHandler} />
      {expenseItemArry}
    </div>
  );
};
export default Expenses;
