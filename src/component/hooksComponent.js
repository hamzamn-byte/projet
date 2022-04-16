import React, { useState } from "react";

const CarHooks = ()=>{
    const [state, setState] = useState({
        brand: "Ford",
        year: 2020,
        model: "model1",
        adresse: "mourouj 5",
        mail: "m@gmail.com"
    });

    



    const bb =() =>{
        setState((state)=>({ ...state, brand:'marcedes' ,year: 2022,model: 'CLASS A'}));
    }

    const cc =() =>{
        setState((state)=>({ ...state, adresse:'mourouj 6',mail:'h@gmail.com'})) 
    }

return (

    <div>

        <h1>My {state.brand} car</h1>
        <h2>is from { state.year }</h2>
        <h2>is from { state.model }</h2>
        <h2>is from { state.adresse }</h2>
        <h2>is from { state.mail }</h2>

        <button onClick={bb} class="btn btn-primary" >changer donnée car</button>
        <button onClick={cc} class="btn btn-primary" >changer donnée car</button>
        <div class="alert alert-primary" role="alert">
        This is a primary alert with <a href="https//www.facebook.com" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
    </div>
)
}
export default CarHooks