import React from "react";

class Hamza2 extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    { 
        return(
            <div className="hh">
                <h2>titre 2</h2>
                <Hamza22/>  
            </div>
        );  
    }  
}
class Hamza22 extends React.Component
{
    constructor(props)

    {   super(props)  }

    render()
    {
        return (<h3>titre 3</h3>);
    }
}
export default Hamza2;