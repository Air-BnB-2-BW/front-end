import React from 'react';
import List from './ListPage'
import ListingForm from './ListingForm';

const noOp = (listing) => {}
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
            <ListingForm/>
            <List setEditing={noOp} />
        </div>;
    }
}

export default Home;

//update and delete. 