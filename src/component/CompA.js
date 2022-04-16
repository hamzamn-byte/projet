import React from "react";
import './ExpenseItem.css';
class CompA extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    { 
        return(
            <div style={{color:"blue"}}>
                <h2>CompA</h2>
                <CompB/>  
            </div>
        );  
    }  
}
class CompB extends React.Component
{
    constructor(props)

    {   super(props)  }

    render()
    {
        return (<h3>CompB</h3>);
    }
}
export default CompA;