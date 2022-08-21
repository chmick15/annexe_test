import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAge, addGender, addProbability } from "../redux";
import axios from "axios";
import { RadialProgress, Input } from "react-daisyui";
import { ClipLoader } from "react-spinners";


const Form2 = () => {
    const user = useSelector((state) => state.user);
    const [data, setData] = useState([]);
    const [age, setAge] = useState(user.age);
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const probability = (data.probability * 100).toFixed()

    const handlePreviousPage = () => {
        navigate("/page1");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addAge(age));
        dispatch(addGender(data.gender));
        dispatch(addProbability(probability))

        navigate("/resume");
    };

    useEffect(() => {
        const fetchName = async () => {
            axios
                .get(
                    `https://api.genderize.io?name=${user.firstName}`
                )
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                });
        };
        fetchName();
    }, [user]);


    return (
        <div>
            <div className="p-10">
                <p className="text-5xl font-bold hover:underline">Second step:</p>
            </div>
            {
                probability === '0' ?
                    <div>
                        <div className="text-center md:text-2xl md:px-5 lg:text-4xl">
                            <p>It seems that this name does not exist, please try another one.</p>
                        </div>
                        <div className="text-center py-5">
                            <button className="btn btn-primary" onClick={handlePreviousPage}>Try another name</button>
                        </div>
                    </div> :
                    <div>
                        <div className='text-center md:text-left md:text-2xl md:px-5 lg:text-4xl'>
                            <p>You are checking the gender of the name: {user.firstName}</p>
                        </div>

                        {
                            loading ?
                                <div className="text-center">
                                    <ClipLoader color={'#50E3C2'} loading={loading} size={150} />
                                </div> :
                                <div className='text-center md:text-left md:text-2xl md:px-5 lg:text-4xl'>
                                    <p>The probability that <span className="text-white font-bold hover:text-slate-300 hover:italic md:text-2xl lg:text-4xl">{user.firstName}</span> is a <span className="text-white font-bold hover:text-slate-300 hover:italic md:text-2xl lg:text-4xl">{data.gender}</span> name is about:</p>
                                    <div className="text-center py-4">
                                        <RadialProgress value={probability} size="12rem" thickness="1rem" className="text-accent text-3xl">{probability} %</RadialProgress>
                                    </div>
                                </div>
                        }

                        <form onSubmit={handleSubmit}>
                            <div className="flex w-full p-4 items-center justify-center gap-2 font-sans">
                                <label className="label text-center md:text-left md:text-2xl md:px-5 lg:text-4xl">
                                    <span className="">Enter an age for <span className="text-white font-bold hover:text-slate-300 hover:italic md:text-2xl lg:text-4xl">{user.firstName}</span>:</span>
                                </label>
                                <Input
                                    type="number"
                                    placeholder="Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="input-accent"
                                />
                            </div>
                            <div className="text-center md:flex md:justify-between md:px-5">
                                <button className="btn btn-primary mx-2" onClick={handlePreviousPage}>Previous step</button>
                                <button className="btn btn-primary mx-2" type="submit">Next step</button>
                            </div>
                        </form>

                        <div className='text-center'>
                            <ul className="steps steps-vertical md:steps-horizontal">
                                <li className="step step-primary">Enter the name</li>
                                <li className="step step-primary">Add age</li>
                                <li className="step">Resume</li>
                            </ul>
                        </div>
                    </div>
            }
        </div >
    );
};

export default Form2;
