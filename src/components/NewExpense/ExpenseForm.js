import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
         const [enteredTitle,setEnteredTitle]=useState('');
         const [enteredAmount,setEnteredAmount]=useState('');
         const [enteredDate,setEnteredDate]=useState('');
        //const [userInput,setUserInput] =useState({
       // enteredTitle:'',
       // enteredAmount:'',
       // enteredDate:''
      // })

    const titlechangeHandler =(event)=>{
           setEnteredTitle(event.target.value);
          //setUserInput({
          //  ...userInput,
          //  enteredTitle: event.target.value
             //     })
    }
    const amountchangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
        //setUserInput({
         //   ...userInput,
          //  enteredAmount:event.target.value
        //})

    }
    const datechangeHandler=(event)=>{
        setEnteredDate(event.target.value)
       // setUserInput({
       //     ...userInput,
       //     enteredDate:event.target.value
        //})

    }
      const submitHandler=(event)=>{
        event.preventDefault();

        const expenseDate={
            title:enteredTitle,
            Amount:enteredAmount,
            Date:new Date(enteredDate)
        }
        console.log(expenseDate)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

      }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
             <label>Title</label>
             <input type="text" value={enteredTitle} onChange={titlechangeHandler}/>
         </div>
         <div className="new-expense__control">
             <label>Amount</label>
             <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountchangeHandler}/>
         </div>
         <div className="new-expense__control">
             <label>Date</label>
             <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={datechangeHandler}/>
         </div>



        </div>
        <div className='new-expense__actions'>
            <button type="submit" >Add Expense</button>

        </div>
    </form>

}
export default ExpenseForm