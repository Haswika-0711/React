import React from 'react';

class Person extends React.Component {
   constructor(props) {
     super(props);
     this.state = { mode: undefined };
   }
  
   componentWillMount() {
     var modeValue;
     if (this.props.age > 70) {
       modeValue = "old";
     } else if (this.props.age < 18) {
       modeValue = "young";
     } else {
       modeValue = "middle";
     }
     console.log(modeValue)
     this.setState({ mode: modeValue });

     
   }
  
   render() {
     return (
       <div className={"person person-" + this.state.mode}>
         {this.props.name} (age: {this.props.age})
       </div>
     );
   }
 }
  
 Person.defaultProps = { age: "unknown" };

 export default Person;


