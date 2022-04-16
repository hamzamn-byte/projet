import React from "react";

class CompC extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    
    { 
        const tab=['banane','orange','fraise',];

        return(
            tab.map(i=> <li>{i}</li>)
        
        );
       
    }
    
}
export default CompC;