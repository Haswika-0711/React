import React from "react"
class App4 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Eshan",
            id:"202",
            salary:"10000"
        }
    }
    render(){
        return(
            <div>
                <h1> {this.state.id}{this.state.name} {this.state.salary}</h1>
            </div>
        );
    }
}

export default App4;