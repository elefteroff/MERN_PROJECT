import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const styling = {
    backgroundColor: "rgb(19,128,198)"
}

const Dashboard = (props) => {
    const [consultants, setConsultants] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/consultants')
            .then(res=>{
                console.log(res.data);
                setConsultants(res.data);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div style={styling}>
            <h1>Consultants</h1>
            <table>
                <thead>
                    <tr>
                        <th>Consultant</th>
                        <th>Specialty</th>
                        <th>Time Zone</th>
                        <th>Available for Hire</th>
                    </tr>
                </thead>
                {consultants.map( (aConsultant, i) => {
                    return(
                        <tbody key={i}>
                            <tr>
                                <td>
                                <Link to={`/consultants/${aConsultant._id}`}>{aConsultant.consultantName}</Link></td>
                                <td>{aConsultant.specialty}</td>
                                <td>{aConsultant.timeZone}</td>
                                <td>{aConsultant.availForHire}</td>
                                <td>{aConsultant.availForHire ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>)})}
            </table>
            <br />
            <br />
        </div>
    )
}

export default Dashboard;