import React, { Component } from 'react'
import Dashboard from './Dashboard';

var user;
class Pm_num3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: false,
            name: "Mibel",
            password: "Mibel@2019",
            invalid: " Invalid credentials",
            inputName: "",
            inputPass: "",
        }
    }

    usernameHandler(event) {
        event.preventDefault();
        this.setState({ inputName: (event.target.value) });
    }

    passwordHandler(event) {
        event.preventDefault();
        this.setState({ inputPass: (event.target.value) });
    }
    loginHandler(e) {
        e.preventDefault();
        var input = this.state.inputName;
        var pass = this.state.inputPass;
        user = (this.state.name === input && this.state.password === pass)
        notuser = (!this.state.name === input && !this.state.password === pass)
        if (user) {
            this.setState({ confirmed: true });
        }
        else{
            alert("Invalid credentials")
        }
    }

    render() {
      
        if (!user) {
            return (
                <center>
                    <div>
                        <h1> {this.state.inputName}</h1>
                        <form>
                            <input type="text" placeholder="username" onChange={(e) => this.usernameHandler(e)}></input>
                            <br></br>
                            <br></br>
                            <input type="password" placeholder="password" onChange={(e) => this.passwordHandler(e)}></input>
                        </form>
                        <br></br>
                        <div>
                            <button onClick={(e) => this.loginHandler(e)}>Login</button>
                        </div>
                        <div>


                        </div>
                    </div>
                </center>

            );

        }
        if (user) {
            return (
                <Dashboard name={this.state.name}/>
            );
           
        }
    }
}
export default Pm_num3; 