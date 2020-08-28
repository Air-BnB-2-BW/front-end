import React from 'react';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            welcomemessage: "Hello!! Welcome to the AirBnB app!!",
            message: "If you already a member Log-In else Sign-Up!!"
        };
    }
    render() {
        return <div className = "homediv">
            {this.state.welcomemessage} 
            <br/>
            {this.state.message}
        </div>;
    }
}

export default Home;