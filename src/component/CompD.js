import './ExpenseItem.css';
function CompD(props)
{
    
    return(
        <>
        <h2 className='expense-item__price'> hello world</h2>
        <div className='expense-item__price'>{props.titre}</div>
        <div className='expense-item__price'>{props.contenu}</div>
       
        
        </>
    );
}



export default CompD;