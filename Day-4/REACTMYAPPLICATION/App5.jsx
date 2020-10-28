import React from "react"
class App5 extends React.Component{
  constructor(props){
      super(props)
      this.state={
          text:"please click me",
         clickCount:0
      }
  }
  updateCount(){
      this.setState((prevState,props)=>{
          return{
              clickCount:prevState.clickCount+1,
              text:"Clicked"
          }
      }
      );
  }


    render(){
        return(
        <div><button onClick={()=>this.updateCount()}>
            {this.state.text}: {this.state.clickCount}
        </button>
            
           
            </div>
        );
    }
}

export default App5;