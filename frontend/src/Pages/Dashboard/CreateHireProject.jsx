import React, { useState } from 'react'

const CreateHireProject = () => {
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

    return (
        <div>
            <div className="main-w3layouts wrapper">
                <br />
                <br />
                <h1><b>ORGANIZATION PROFILE</b></h1>
                <br />
                <h1>POST A PROJECT:</h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form>


                            <input className="form-control" type="text" name="Organization Name" placeholder="Project Name" required="" /><br />

                            <input className="form-control" type="text" name="Orgname" placeholder="Assigning Organization's Name" required="" /><br />

                            <input className="form-control" type="text" name="Projdesc" placeholder="Project Description" required="" /> <br />

                            <input className="form-control" type="text" name="ProjDur" placeholder="Project Duration / Deadline " required="" /><br />

                            <input className="form-control" type="text" name="ProjPay" placeholder="What the Job Pays? " required="" /><br />

                            <br />
                            <div className='row my-3'>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <p className='h5 my-2'>Required Skills:</p>
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
                            </div>
                            <input type="submit" className='btn btn-dark' value="POST" />
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
};

export default CreateHireProject;
