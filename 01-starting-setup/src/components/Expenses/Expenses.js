import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const selectYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.items.filter(e => {
        return e.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={selectedYear} onSelectYear={selectYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;