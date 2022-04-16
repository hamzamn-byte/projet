import React from "react";

class classComponentex8 extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            brand: "ford",

            model: "2015",

            color: "red"

        };

    }
    logMe(){
    console.console.log("je n'ai q'un paramétre");
    }

    componentDidMount(){
        this.logMe();
    }

    render(){

        return(

        <div className="mb-5">

            

            <button type="button" class="btn btn-primary" onClick={this.changeColor}>Change color</button>

            <button type="button" class="btn btn-primary" onClick={this.changeValue}>Change Model</button>

        </div>

        )

    }

}

export default (classComponentex8)