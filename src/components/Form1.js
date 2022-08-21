import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addName } from "../redux";
import { Input } from "react-daisyui";

const Form1 = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [firstname, setFirstname] = useState(user.firstName);
    const [lastname, setLastname] = useState(user.lastName);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addName({ firstName: firstname, lastName: lastname }));
        navigate("/page2");
    };

    return (
        <div>
            <div className="p-10">
                <p className="text-5xl font-bold hover:underline">First step:</p>
            </div>

            <div className='text-center md:text-left md:text-2xl md:px-5 lg:text-4xl'>
                <p>Write a name to know the probability that it is a <span className="text-blue-500 hover:font-bold">male</span> or a <span className="text-pink-500 hover:font-bold">female</span>:</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex w-full p-4 items-center justify-center gap-2 font-sans">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter a firstname:</span>
                        </label>
                        <Input
                            type="text"
                            placeholder="Firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value.trimStart())}
                            className="input-accent"
                            required />
                    </div>
                </div>
                <div className="flex w-full p-4 items-center justify-center gap-2 font-sans">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter a lastname (optional):</span>
                        </label>
                        <Input
                            type="text"
                            placeholder="Lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="input-accent" />
                    </div>
                </div>

                <div className="text-center md:text-right md:px-5">
                    <button type="submit" className="btn btn-primary">Next step</button>
                </div>
            </form>

            <div className='text-center'>
                <ul className="steps steps-vertical md:steps-horizontal">
                    <li className="step step-primary">Enter the name</li>
                    <li className="step">Add age</li>
                    <li className="step">Resume</li>
                </ul>
            </div>

        </div >
    );
}

export default Form1;