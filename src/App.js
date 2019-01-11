import React, { Component } from 'react'; 
import './App.css';

class App extends Component { 
  constructor (props) {
    super(props);

    this.state = {
      name: "You name",
      pwd: "",
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleSubmit(e) { 
     e.preventDefault();
     if ((this.state.name === "admin") || this.state.pwd === "password") {
       alert ('OK');
     } else {
        this.state.error = '<span className="error">Incorrect name or password</span>';
        console.log(this.state.error);
     }
} 

handleChange(ev) { 
    this.setState({
      [ev.target.id]: ev.target.value
    }); 
}

  render() {
    return (
      <div className="login-form">
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <label>Name <input name="name" id="name" value={this.state.name} type="text" onChange={this.handleChange} required /></label>
              <label>Password <input name="pwd" id="pwd" value={this.state.pwd} type="password" onChange={this.handleChange} required/></label>
            </fieldset>
            <fieldset>
              <div className="form-links">
                <a href="#">Forgot Password</a>
                <a href="#">Create an account</a>
              </div>
            </fieldset>
            <fieldset>
              {this.state.error}
            </fieldset>
            <button type="submith">Submith</button>
        </form>
      </div>
    );
  }
}

export default App;
