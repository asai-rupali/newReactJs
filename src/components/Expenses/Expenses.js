import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  let expenseData = [];
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
    // alert("(Expenses)Selected Year: " + selectedYear);
  };

  // const filteredExpenses = props.items.filter(expense => {
  //   return expense.date.getFullYear().toString()=== year;
  // });

  if (year === "all") {
    expenseData = props.items;
  } else {
    expenseData = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  }
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={expenseData}/>
        <ExpensesList items={expenseData}/>
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}props.items.
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
