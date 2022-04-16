import React, { useState } from 'react';
import './ExpenseForm.css';
 
const ExpenseForm = () => {
 
    const [enteredTitle, SetEnetredTitle] = useState('');
    const [enteredAmount, SetEnetredAmount] = useState('');
    const [enteredDate, SetEnetredDate] = useState('');
 
    const titleChangeHandler = (event) => {
        //console.log('title changed !!');
        // console.log(event.target.value);
        SetEnetredTitle(event.target.value);  //la valeur de saisie par lutilisateur
    
    }
    const amountChangeHandler = (event) => {
        //console.log('title changed !!');
        // console.log(event.target.value);
        SetEnetredAmount(event.target.value);    //la valeur de saisie par lutilisateur

    }
 
    const submitHandler = (event) => {
        event.preventDefault(); // pour prevenir le comportement par defaut  pour n'actualisée pas la page

 
        const expensedata = { title: enteredTitle, amount: enteredAmount };
         console.log('data',expensedata);
       // props.onSaveExpenseData(expensedata);
        SetEnetredTitle(''); // pour modifer la valeur de state dans function component // vider le contenue de champ
        SetEnetredAmount('');
    };
 
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" />
            </div>
            <div className='new-expense__actions'>
                <button type="submit"> Add Expense</button>
            </div>
        </div>
    </form>
 
}
export default ExpenseForm;