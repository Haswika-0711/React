import React from 'react';

class Assignment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: ".."
        }

        this.handleClick=this.handleClick.bind(this)

    }

    handleClick(e){
       // var tname=document.getElementById("uname").value;
        console.log("b4 modify"+this.state.name);
      this.setState({name:this.ref.name.value});
      console.log("after modify"+this.state.name);
      
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
           <input type="text" value="this.state.name" ref="name"></input>
           <button onClick={this.handleClick}>Click</button>
           </div>
        )
    }

}

export default Assignment;

