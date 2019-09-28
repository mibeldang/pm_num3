import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <center>
                <div>
                    <div> Welcome To React Midterm Number3</div>
                    <br></br>
                    <div> Hello,  {this.props.name}</div>
                </div>
            </center>


        )
    }
}
export default Dashboard;