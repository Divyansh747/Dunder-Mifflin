import React from 'react'
import Navbar from '../../Components/Shared/Navbar';
import LoginPage from '../../Components/Home/LoginPage';
import SignupPage from '../../Components/Home/SignupPage';


const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col">
                    <Navbar />
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <LoginPage/>
                </div>
                <div className="col">
                    <SignupPage/>
                </div>
            </div>
        </div>
    )
}

export default Home ;