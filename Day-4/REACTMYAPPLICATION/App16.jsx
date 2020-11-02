import React from 'react'

class App16 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            saying:''
        }
    }

    update(e){
        this.setState({saying:this.refs.anything.value})
    }


  render(){
      return(
      <div>
        Eshan Says <input type="text" ref="anything" onChange={this.update.bind(this)}></input>
        <h1> {this.state.saying}</h1>


      </div>)
  }
}

export default App16