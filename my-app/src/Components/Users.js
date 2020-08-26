import React from 'react';

const Users = props =>{
    return(
        <div className="users-list">
        {props.props.map((signupusers, i) =>(
            <div className="user" key={i}>
                <h2>{signupusers.name}</h2> 
                <p>{signupusers.email}</p>
                </div>
        ))}
    </div>
    )

}
export default Users