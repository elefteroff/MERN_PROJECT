import React, { useState } from 'react';
// import axios from 'axios';
// import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

const styling = {
    backgroundColor: "rgb(19,128,198)"
}

export default () => {
    //keep track of what is being typed via useState hook
    const [consultantName, setConsultantName] = useState("");
    const [specialty, setSpecialty] = useState();
    const [subSpecialty, setSubSpecialty] = useState();
    // const [errors, setErrors] = useState([]);
    // const history = useHistory();

    //handler when the form is submitted
    // const onSubmitHandler = e => {
    //     //prevent default behavior of the submit(browser)
    //     e.preventDefault();
    //     //make a post request to the database to create a new client
    //     axios.post('http://localhost:8000/api/consultants/new', {
    //         consultantName,
    //         specialty,
    //         subSpecialty,
    //     }) //Passes an object as created here.
    //         .then(res =>{
    //             console.log(res.data)
    //             history.push("/consultants")
    //         })  //.then and .catch are promise resolutions.
    //         .catch(err => {
    //             const errorResponse = err.response.data.errors;
    //             console.log(errorResponse)
    //             // console.log(errorResponse.name)
    //             const errorArr = [];
    //             for (const key of Object.keys(errorResponse)) {
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             setErrors(errorArr);}) //Object is the actual JS Object class.
    // }

    //onChange to set name.
    return (
        <div style={styling}>
            <br />
            <h1>Consultant Hiring Page for "Consultant's Name"</h1>
            <br />
            <h4>Enter your information below in order to hire this consultant and get started with us today:</h4>
            <form>
                {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                <p>
                    <label>Client Name:</label><br/>
                    {/* <input type="text" onChange={(e)=>setClient(e.target.value)} value={clientName}/> */}
                </p>
                <p>
                    <label>Phone:</label><br/>
                    {/* <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/> */}
                </p>
                <p>
                    <label>Email:</label><br/>
                    {/* <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/> */}
                </p>
                <h4>What are you hiring "Consultant's Name" to do?</h4>
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
                <p>
                    <label>Project Description:</label><br/>
                    <textarea cols="40" rows="5"></textarea>
                </p><br/>
                <Link to={`/consultants/success`}><button type="button"><p>Submit</p></button></Link>
            </form><br/>
            <br/>
            <br/>
        </div>
    )
}