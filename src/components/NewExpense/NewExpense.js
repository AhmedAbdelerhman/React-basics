import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const  NewExpense =(props) =>{
 
    const onNewExpense = (formData)=>{
        formData.id = Math.random().toString()

        props.onFormSubmit(formData)
    }
return  ( <div className='new-expense'>  <ExpenseForm onSave={onNewExpense}/> </div> );
 
 }
 export default NewExpense