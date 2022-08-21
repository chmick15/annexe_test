import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Resume = () => {
    const user = useSelector((state) => state.user);

    let navigate = useNavigate();

    const handlePreviousPage = () => {
        navigate("/page2");
    };

    const handleHome = () => {
        navigate("/");
    };

    const handleNewSearch = () => {
        navigate("/page1");
    };

    return (
        <div>
            <div className="p-10">
                <p className="text-5xl font-bold hover:underline">Summary:</p>
            </div>
            <div className="text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">
                <p>You searched the name: <span className="text-white font-bold hover:text-slate-300 hover:italic md:text-2xl lg:text-4xl">{user.firstName} {user.lastName}</span></p>
            </div>

            {
                user.firstName.toLowerCase() === 'corentin' ?
                    <div>
                        <div className="text-center md:text-2xl md:px-5 lg:text-4xl">
                            <p>There is a 50% chance that you are this Corentin (thanks LinkedIn for the picture)</p>
                        </div>
                        <div className="flex justify-center py-4">
                            <img src="./corentin.jpeg" alt="Corentin" className="rounded-full" />
                        </div>
                        {
                            user.gender === 'male' ?
                                <p className="text-blue-500 text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">There is a {user.probability}% probability that {user.firstName} is a {user.gender}</p> :
                                <p className="text-pink-500 text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">There is a {user.probability}% probability that {user.firstName} is a {user.gender}</p>

                        }
                        <div className="text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">
                            <p>Age: {user.age} years old</p>
                        </div>
                        <div className="text-center py-5 md:flex md:justify-between md:px-5">
                            <button className="btn btn-primary mx-2" onClick={handlePreviousPage}>Previous step</button>
                            <button className="btn btn-primary" onClick={handleNewSearch}>Search a new name !</button>
                        </div>
                        <div className='text-center'>
                            <ul className="steps steps-vertical md:steps-horizontal">
                                <li className="step step-primary">Enter the name</li>
                                <li className="step step-primary">Add age</li>
                                <li className="step step-primary">Resume</li>
                            </ul>
                        </div>
                        <div className="text-center py-4">
                            <button className="btn btn-secondary mx-2" onClick={handleHome}>Home</button>
                        </div>
                    </div> :
                    <div>
                        {
                            user.gender === 'male' ?
                                <p className="text-blue-500 text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">There is a {user.probability}% probability that {user.firstName} is a {user.gender}</p> :
                                <p className="text-pink-500 text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">There is a {user.probability}% probability that {user.firstName} is a {user.gender}</p>

                        }
                        <div className="text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">
                            <p>Age: {user.age} years old</p>
                        </div>
                        <div className="text-center py-5 md:flex md:justify-between md:px-5">
                            <button className="btn btn-primary mx-2" onClick={handlePreviousPage}>Previous step</button>
                            <button className="btn btn-primary" onClick={handleNewSearch}>Search a new name !</button>
                        </div>
                        <div className='text-center'>
                            <ul className="steps steps-vertical md:steps-horizontal">
                                <li className="step step-primary">Enter the name</li>
                                <li className="step step-primary">Add age</li>
                                <li className="step step-primary">Resume</li>
                            </ul>
                        </div>
                        <div className="text-center py-6">
                            <button className="btn btn-secondary mx-2" onClick={handleHome}>Home</button>
                        </div>
                    </div>
            }
        </div>

    );
};

export default Resume;
