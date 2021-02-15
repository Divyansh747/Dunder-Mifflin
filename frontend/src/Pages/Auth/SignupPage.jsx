import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SignupPage = () => {
    const [user, setUser] = useState("STUDENT");
    const [userDetails, setUserDetails] = useState({});
    const [orgDetails, setOrgDetails] = useState({});
    const [isFreelancer, setIsFreelancer] = useState(true);
    const [skills, setSkills] = useState({
        frontEnd: false,
        backEnd: false,
        ml: false,
        android: false,
        iOS: false,
        automation: false,
        blockChain: false
    });


    const changeSkills = (e) => {
        setSkills({ ...skills, [e.target.name]: e.target.checked });
    }

    const handleChangeOrg = (e) => {
        setOrgDetails({ ...orgDetails, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (isFreelancer) {
            if (userDetails.password != userDetails.cnfpassword) {
                return toast.error("Password doesn't match..!!!");
            }
        } else {
            if (orgDetails.password != orgDetails.cnfpassword) {
                return toast.error("Password doesn't match..!!!");
            }
        }
        console.log("We are clicking on submit form ");
        //We need to implement api logic over here
    }

    const handleChangeStudent = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className="main-w3layouts wrapper">
                <div className='row'>
                    <div className="col d-flex justify-content-between">
                        <button type="button" class="btn btn-dark" onClick={() => { setUser("STUDENT"); setIsFreelancer(true) }}>Student</button>
                        <button type="button" class="btn btn-dark" onClick={() => { setUser("ORGANIZATION"); setIsFreelancer(false) }}>Organization</button>
                    </div>
                </div>
                <hr />
                <h3 className='text-muted mb-2'>{user} SIGNUP FORM</h3>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form className='d-flex flex-column align-items-center'>
                            {
                                isFreelancer ? (
                                    <>
                                        <input className="text form-control" type="text" name="firstName" onChange={handleChangeStudent} placeholder="First Name" required="" /> <br />
                                        <input className="text form-control" type="text" name="lastName" onChange={handleChangeStudent} placeholder="Last Name" required="" />
                                    </>
                                ) : <input className="text form-control" type="text" name="orgName" onChange={handleChangeOrg} placeholder="Organization Name" required="" />
                            }
                            <br />
                            {
                                isFreelancer ?
                                    <input className="text email form-control" type="email" name="email" onChange={handleChangeStudent} placeholder="Email" required="" /> :
                                    <input className="text email form-control" type="email" name="orgEmail " onChange={handleChangeOrg} placeholder="Organization Email" required="" />

                            }
                            <br />
                            {
                                isFreelancer ? <>
                                    <input className="text email form-control" type="text" name="githubURL" onChange={handleChangeStudent} placeholder="Github URL" required="" /><br />
                                </> : null
                            }

                            {
                                isFreelancer ?
                                    <input className="text form-control" type="text" name="contact" onChange={handleChangeStudent} placeholder="Contact" required="" /> :
                                    <input className="text form-control" type="text" name="orgContact " onChange={handleChangeOrg} placeholder="Organization Contact" required="" />
                            }
                            <br />
                            {
                                isFreelancer ? <>
                                    <input className="text form-control" type="text" name="university" onChange={handleChangeStudent} placeholder="University Name" required="" /><br />
                                </> : null
                            }

                            <input className="text form-control" type="password" name="password " onChange={(e) => {
                                if (isFreelancer) {
                                    handleChangeStudent(e);
                                } else {
                                    handleChangeOrg(e);
                                }
                            }} placeholder="Password" required="" /> <br />
                            <input className="text form-control" type="password" name="cnfpassword" onChange={(e) => {
                                if (isFreelancer) {
                                    handleChangeStudent(e);
                                } else {
                                    handleChangeOrg(e);
                                }
                            }} placeholder="Confirm Password" required="" /> <br />
                            {
                                isFreelancer ?
                                    <div className='row my-3'>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <p className='h5 my-2'>Some Skills:</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="choose_skills ">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="frontEnd" onChange={changeSkills} id="frontEnd" />
                                                            <label class="form-check-label" for="inlineCheckbox1">Front-End</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="backEnd" onChange={changeSkills} id="backEnd" />
                                                            <label class="form-check-label" for="inlineCheckbox2">Back-End</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="ml" onChange={changeSkills} id="ml" />
                                                            <label class="form-check-label" for="inlineCheckbox1">Machine-Learning</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="android" onChange={changeSkills} id="android" />
                                                            <label class="form-check-label" for="inlineCheckbox2">Android</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="iOS" onChange={changeSkills} id="iOS" />
                                                            <label class="form-check-label" for="inlineCheckbox1">iOS</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="automation" onChange={changeSkills} id="automation" />
                                                            <label class="form-check-label" for="inlineCheckbox2">Automation</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" name="blockChain" onChange={changeSkills} id="blockChain" />
                                                            <label class="form-check-label" for="inlineCheckbox1">Blockchain</label>
                                                        </div>
                                                        <br />

                                                        <div className="clear"> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            <input type="submit" className="btn btn-dark" onClick={onSubmit} value="SIGNUP" />
                        </form>
                        <p>Have an account <a href="#"> Login Now!</a></p>
                    </div>
                </div>
                <div className="colorlibcopy-agile">
                    <p>© 2021 Dunder Mifflin. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;