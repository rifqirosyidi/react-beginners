import React from 'react';
import '../App.css';

function Tweet({name, message}) {
    return (
        <div className="tweet">
            <h4>{ name }</h4>
            <p>{ message }</p>
            <small>Number of likes: </small>            
        </div>
    );
}

export default Tweet;