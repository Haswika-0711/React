import React from 'react';

class App8 extends React.Component{
    constructor(props){
        super(props)
        this.hdClk=this.handleClick.bind(this)
    }

    handleClick(){
        console.log("Im executed")
    }

    render(){
        return(<div>
            
            <button onClick={()=>this.handleClick()}>CLICK ME </button>
            <button onClick={this.hdClk}>CLICK ME </button>
            <button onClick={this.handleClick.bind(this)}>CLICK ME </button>

        </div>)
    }

}

export default App8;






// import React from 'react';
// class App8 extends React.Component {
//    constructor(props) {
//       super(props);
// 	  this.state = {
//          data: 0
//       }
//       this.newNum = this.setNewNumber.bind(this)
//    };

//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }

//    render() {
//       return (
//          <div>
//             <button onClick = {this.newNum}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }

// class Content extends React.Component {

//    componentWillMount() {
//       console.log('Component WILL MOUNT!')
//    }

//    componentDidMount() {
//       console.log('Component DID MOUNT!')
//    }

//    componentWillReceiveProps(newProps) {    
//       console.log('Component WILL RECIEVE PROPS!')
//    }

//    shouldComponentUpdate(newProps, newState) {
//       return true;
//    }

//    componentWillUpdate(nextProps, nextState) {
//       console.log('Component WILL UPDATE!');
//    }

//    componentDidUpdate(prevProps, prevState) {
//       console.log('Component DID UPDATE!')
//    }

//    componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//    }
	
//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }

// export default App8;