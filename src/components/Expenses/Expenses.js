import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
const[filteryear,setfilteryear]=useState('2020');
const filterchangehandler=(selectedyear)=>{
  setfilteryear(selectedyear);
}



  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteryear} onChangeFilter={filterchangehandler}/>
      {props.items.map((expense)=>(
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>))}
    
     
    </Card>
  );
}

export default Expenses;