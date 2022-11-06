import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const selectYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.items.filter(e => {
        return e.date.getFullYear().toString() === selectedYear;
    });

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => { return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> });
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={selectedYear} onSelectYear={selectYearHandler} />
            {expensesContent}
        </Card>
    );
}

export default Expenses;