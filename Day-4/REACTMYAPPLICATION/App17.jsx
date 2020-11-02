import React from 'react'


class App17 extends React.Component{
    constructor(props){
        super(props)
        this.textInput=React.createRef();
        this.state={
            value:''
        }
    }

    handleSubmit(e){
        // e.preventDefault();
        this.setState({value:this.textInput.current.value})
    }

  render(){
      return(
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={this.textInput}></input>
        <button>Submit</button>
        </form>
        <h1> {this.state.value}</h1>
      </div>)
  }
}

export default App17