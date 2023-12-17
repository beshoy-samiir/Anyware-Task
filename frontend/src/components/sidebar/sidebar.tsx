import React from 'react';
import "./sidebar.css";
import { Link, useNavigate } from 'react-router-dom';
import Announcement from '../Announcements/announcement';
import Exam from '../Exam/exam';


const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    };

    return (
        <div className="m-0 p-0 w-64 fixed h-full bg-cyan-700 text-white sidebar max-h-screen overflow-hidden">
        <div className='containerDashboard'>
            <nav className="navbar navbar-expand-lg fixed-top d-md-flex">
                <div className="container-fluid">
                    <h1 className='text-light w-full py-8 text-5xl tracking-wider'>Coligo </h1>
                    <nav className="flex justify-between p-8 bg-white w-full flex-wrap gap-4">
                        <div className="flex flex-row-reverse gap-x-6 flex-wrap">
                            <form className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="searchButton"/>
                                <button className="btn btn-secondary " type="button" id="searchButton">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className="ml-auto d-flex align-items-center">
                        <Link to="#" className=""><i className="fa-solid fa-bell text-light"></i></Link>
                        <Link to="#" className=""><i className="fa-solid fa-envelope text-light"></i></Link>
                        <button className='btn btn-info' onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>
            <div className={`col-3 leftSide`}>
                <div className="">
                    <Link to="/dashboard" className={`nav-link icons d-flex align-items-center mb-2`}>
                        <i className="fa-solid fa-house"></i>
                        <p className='ms-2 mb-0'>Dashboard</p>
                    </Link>
                    <Link to="/schedule" className={`nav-link icons d-flex align-items-center mb-2`}>
                        <i className="fa-solid fa-calendar-days"></i>
                        <p className='ms-2 mb-0'>Schedule</p>
                    </Link>
                    <Link to="/courses" className={`nav-link icons d-flex align-items-center mb-2`}>
                        <i className="fa-solid fa-book"></i>
                        <p className='ms-2 mb-0'>Courses</p>
                    </Link>
                    <Link to="/gradebook" className={`nav-link icons d-flex align-items-center mb-2`}>
                        <i className="fa-solid fa-graduation-cap"></i>
                        <p className='ms-2 mb-0'>Gradebook</p>
                    </Link>
                    <Link to="/performance" className={`nav-link icons d-flex align-items-center mb-2`}>
                        <i className="fa-solid fa-chart-line"></i>
                        <p className='ms-2 mb-0'>Performance</p>
                    </Link>
                    <Link to="/announcement" className={`nav-link icons d-flex align-items-center mb-2`}>
                        <i className="fa-solid fa-bullhorn"></i>
                        <p className='ms-2 mb-0'>Announcement</p>
                    </Link>
                </div>
            </div>
            <div className={`topRightSide col-9`} style={{ marginTop: "56px" }}>
                <h1 className="text">Welcome,</h1>
                <Exam />
            </div>
            <div className={`topRightSide col-9`} style={{ marginTop: "56px" }}>
                <Announcement />
            </div>
        </div>
    </div>

)};

export default Sidebar;


