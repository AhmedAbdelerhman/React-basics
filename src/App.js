import "./components/Expenses/Expense.css";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const [formData, SetFormDate] = useState("")

  const onFormSubmitHandler = (FormData) => {
    console.log("in app.js");
    SetFormDate(FormData)

  };
  return (
    <Card className="expenses">
      <NewExpense  onFormSubmit={onFormSubmitHandler}/>
      <Expenses  getFormDate={formData} />
    </Card>
  );
}

export default App;
