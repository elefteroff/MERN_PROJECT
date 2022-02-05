import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

const styling = {
    backgroundColor: "rgb(19,128,198)"
}

export default () => {
    //keep track of what is being typed via useState hook
    const [consultantName, setConsultantName] = useState("");
    const [specialty, setSpecialty] = useState();
    const [subSpecialty, setSubSpecialty] = useState();
    const [timeZone, setTimeZone] = useState ();
    const [billingRate, setBillingRate] = useState ();
    const [availForHire, setAvailForHire] = useState (false);
    const [bio, setBio] = useState ("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit(browser)
        e.preventDefault();
        //make a post request to the database to create a new consultant
        axios.post('http://localhost:8000/api/consultants/new', {
            consultantName,
            specialty,
            subSpecialty,
            timeZone,
            billingRate,
            availForHire,
            bio
        }) //Passes an object as created here.
            .then(res =>{
                console.log(res.data)
                history.push("/consultants/success")
            })  //.then and .catch are promise resolutions.
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                // console.log(errorResponse.name)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);}) //Object is the actual JS Object class.
    }

    //onChange to set name.
    return (
        <div style={styling}>
            <h1>New Consultant Information</h1>
            <br />
            <form>
                <h5>Enter your information below in order to become a consultant with us today:</h5>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange={(e)=>setConsultantName(e.target.value)} value={consultantName}/>
                </p>
                <p>Choose a Specialty:</p>
                    <select onChange={(e) => setSpecialty(e.target.value)} value={specialty}>
                        <option>-Please Select-</option>
                        <option value={"AI and Data"}>AI and Data</option>
                        <option value={"Cyber Security"}>Cyber Security</option>
                        <option value={"Design"}>Design / UX</option>
                        <option value={"Product/Program/Project Management"}>Product/Program/Project Management</option>
                        <option value={"Software Engineering/Development"}>Software Engineering/Development</option>
                    </select>
                    {specialty == "AI and Data" ? 
                    <div>
                        <p>Choose a SubSpecialty:</p>
                        <select onChange={(e) => setSubSpecialty(e.target.value)} value={subSpecialty}>
                            <option>-Please Select-</option>
                            <option>Data Analytics</option>
                            <option>Machine Learning</option>
                            <option>AI Engineer</option>
                            <option>Business Intelligence</option>
                            <option>Research Scientist</option>
                            <option>Data Engineer/Scientist</option>
                            <option>Big Data</option>
                            <option>Robotics</option>
                        </select>
                    </div>: specialty == "Cyber Security" ?
                    <div>
                        <p>Choose a SubSpecialty:</p>
                        <select onChange={(e) => setSubSpecialty(e.target.value)} value={subSpecialty}>
                            <option>-Please Select-</option>
                            <option>Application Security</option>
                            <option>Data Loss Prevention</option>
                            <option>Forensics</option>
                            <option>Incident Response</option>
                            <option>Network Security</option>
                            <option>Security Architecture</option>
                            <option>Threat Intelligence</option>
                            <option>Vulnerability Management</option>
                        </select>
                    </div> : specialty == "Design" ?
                    <div>
                        <p>Choose a SubSpecialty:</p>
                        <select onChange={(e) => setSubSpecialty(e.target.value)} value={subSpecialty}>
                            <option>-Please Select-</option>
                            <option>Information Architecture</option>
                            <option>User Flows and Wireframes</option>
                            <option>UX Strategy</option>
                            <option>Prototyping</option>
                            <option>User Testing</option>
                            <option>UX Research</option>
                            <option>UX / UI Design</option>
                        </select>
                    </div> : specialty == "Product/Program/Project Management" ?
                    <div>
                        <p>Choose a SubSpecialty:</p>
                        <select onChange={(e) => setSubSpecialty(e.target.value)} value={subSpecialty}>
                            <option>-Please Select-</option>
                            <option>Product Mangement</option>
                            <option>Program Management</option>
                            <option>Project Management</option>
                        </select>
                    </div> : specialty == "Software Engineering/Development" ?
                    <div>
                    <p>Choose a SubSpecialty:</p>
                    <select onChange={(e) => setSubSpecialty(e.target.value)} value={subSpecialty}>
                        <option>-Please Select-</option>
                        <option>Quality Assurance</option> 
                        <option>Front-End</option>
                        <option>Back-End</option>
                        <option>Full-Stack</option>
                        <option>DevOps</option>
                    </select><br/>
                    </div>: ""}
                    <p>Select your Time Zone:</p>
                    <select onChange={(e) => setTimeZone(e.target.value)} value={timeZone}>
                        <option>-Please Select-</option>
                        <option>EST</option> 
                        <option>CST</option>
                        <option>MST</option>
                        <option>PST</option>
                    </select><br/>
                    <p>Select your Hourly Billing Rate:</p>
                    <select onChange={(e) => setBillingRate(e.target.value)} value={billingRate}>
                        <option>-Please Select-</option>
                        <option>$100.00</option>
                        <option>$125.00</option> 
                        <option>$150.00</option>
                        <option>$175.00</option>
                        <option>$200.00</option>
                        <option>$225.00</option> 
                        <option>$250.00</option>
                        <option>$275.00</option>
                        <option>$300.00</option>
                        <option>$325.00</option> 
                        <option>$350.00</option>
                        <option>$375.00</option>
                        <option>$400.00</option>
                        <option>$425.00</option> 
                        <option>$450.00</option>
                        <option>$475.00</option>
                        <option>$500.00</option>
                    </select><br/>
                <div>
                    <p>Are you Currently Available for Hire?</p>
                    <input type="checkbox" checked={availForHire} onChange={(e) => setAvailForHire(e.target.checked)}/>
                </div>
                <p>
                    <label>Bio:</label><br/>
                    <textarea cols="40" rows="5" onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
                </p><br/>
                <button onClick={onSubmitHandler}>Submit</button>
            </form><br/>
            <br/>
            <br/>
        </div>
    )
}