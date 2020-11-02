import React from 'react'
class Signup extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.password = React.createRef();
      this.phnno=React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit(event) {
      const username = this.username.current.value;
      const password = this.password.current.value;
      const phnno=this.phnno.current.value;
      const errors = this.handleValidation(username, password,phnno);
  
      if (errors.length >= 0) {
        this.setState({ errors });
        return;
      }
      
    };
  
    handleValidation  (username, password,phnno)  {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      }

      if(phnno.length < 10 || phnno.length > 10){
          errors.push("Phone number should be 10 digits");
      }
      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          <h1>React Ref Example</h1>
            {errors.map(error => <p key={error}>{error}</p>)}
            <div>
              <label>Username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" ref={this.password} />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" ref={this.phnno} />
            </div>
            <div>
              <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
          
        </div>
      );
    }
  }

  export default Signup;