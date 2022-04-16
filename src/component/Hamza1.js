import './ExpenseItem.css';
function Hamza1(props)
{
    const clickhandler = () =>{
        console.log('click handler');
    }
    return(
        <>
        <button onClick={clickhandler}>click</button>
        <h2 className='expense-item__price'> hello world</h2>
        <div className='expense-item__price'>{props.nom}</div>
        <div className='expense-item__price'>{props.prenom}</div>
        <div className='expense-item__price'>{props.age}</div>
        <div style={{color:"red",backgroundColor:"lightblue"}}>hamza manai exercice 1</div>
        
        </>
    );
}



export default Hamza1;