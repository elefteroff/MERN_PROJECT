import React from 'react';
import {Link} from 'react-router-dom';

const styling = {
    backgroundColor: "rgb(19,128,198)"
}

function Success() {
    return(
        <div style={styling}>
            <br />
            <br />
            <h3>Your Information was Successfully Submitted!</h3>
            <br />
            <Link to={`/`}>Home</Link>
            <br />
            <br />
            <br />
        </div>
    )}

export default Success;
