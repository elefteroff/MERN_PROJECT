import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const styling = {
    backgroundColor: "rgb(19,128,198)"
}

const Viewconsult = (props) => {
    const [consultant, setConsultant] = useState({})
    const { id } = useParams();  //Grabbing the id (which is the variable name) from the url via useParams

    useEffect(() => {
        axios.get('http://localhost:8000/api/consultants/' + id)
            .then(res => {
                console.log(res.data)
                setConsultant(res.data)})
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={styling}>
            <h2>{consultant.consultantName}</h2>
            <p>Specialty: {consultant.specialty}</p>
            <p>Sub-Specialty: {consultant.subSpecialty}</p>
            <p>Time Zone: {consultant.timeZone}</p>
            <p>Hourly Billing Rate: {consultant.billingRate}</p>
            <p>Currently Available for Hire: {consultant.availForHire ? "Yes" : "No"}</p>
            <p>Bio: {consultant.bio}</p>
            <Link to={"/consultants/new/client"}><button type="button"><p>Hire This Consultant</p></button></Link>
            <br />
            <br />
            <br />
            <Link to={`/consultants/`}>Return to Consultant Dashboard</Link>
            <br />
            <br />
        </div>
    )
}

export default Viewconsult;