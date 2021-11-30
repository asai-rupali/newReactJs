import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isCancel,setIsCancel] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsCancel(false);
  };

  const startCancelingHandler = () =>{
    setIsCancel(true);
  }

  const stopCancelingHandler = () =>{
    setIsCancel(false);
  }

  return (
    <div className='new-expense'>
      {!isCancel && <button onClick={startCancelingHandler}>Add New Expense</button>}
      {isCancel && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopCancelingHandler} />}
    </div>
  );
};

export default NewExpense;
