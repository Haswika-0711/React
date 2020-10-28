import React from 'react';

class Assignment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: ".."
        }

        this.handleClick=this.handleClick.bind(this)

    }

    handleClick(){
        var name=document.getElementById("uname").value;
      this.setState({name});
      
    }

    componentDidMount(){
        console.log("mounted" );
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component updated from ",+prevState.name+" to "+this.state.name);
    }

    render(){
        return(   
            <div>
           <input type="text" id="uname"></input>
           <button onClick={this.handleClick}>Click</button>
           </div>
        )
    }

}

export default Assignment;

