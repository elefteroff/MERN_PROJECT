import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import water from './Videos/water.mp4'

const styling = {
    backgroundColor: "rgb(19,128,198)"
}

function Landing() {
    return(
        <div style={styling}>
            <br />
            <h1>Consultants LLC</h1>
            <h3>The technology landscape changes like the surface of an ocean.</h3>
            <video src={water} width="750" height="400" autoPlay={true} muted={true} loop={true} type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <br />
            <h3>If you find that your technology strategy is "lost-at-sea" then isn't it time to find a trusted guide to help you navigate through to safer waters?</h3>  
            <h5>At Consultants LLC we offer best-in-class consultanting services for your every technical business need.</h5> 
            <p></p>
            <h5>Click below to find out more:</h5>
            <Link to={`/consultants/`}>For Clients</Link>
            <p></p>
            <Link to={`/consultants/new`}>For Consultants</Link>
            <br />
            <br />
            <br />
        </div>
    )}

export default Landing;