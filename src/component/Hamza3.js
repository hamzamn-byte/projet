import React from "react";

class Hamza3 extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    
    { 
        const tab=['Fiat','Audi','Tesla'];

        return(
            tab.map(i=> <li>{i}</li>)
        
        );
       
    }
    
}
export default Hamza3;