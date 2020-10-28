import React from "react"
import PropsTypes from 'prop-types'
function App3(){
    return <Greeting occupation="teacher"/>
}


function Greeting(props){
    return(
        <p>
            Hello I'm {props.name}, a{props.age} years old {props.occupation}
        </p>
    )
}

Greeting.defaultProps={
    name:"Tanish",
    age: "20",
    occupation:"student"
}

Greeting.prototype={
    name: PropsTypes.string.isRequired,
    age:PropsTypes.number.isRequired,
    occupation:PropsTypes.string.isRequired
}



 export default App3;



// class App3 extends React.Component{
//     render(){
//         return(
//             <div> 
//                This is props example
//                <h1>{this.props.empID}</h1>
//                <h1>{this.props.ename}</h1>
//             </div>
//         );
//     }
// }

// export default App3;