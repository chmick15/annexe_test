import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero, Button } from "react-daisyui";

const Main = () => {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate("/page1")
    }
    return (
        <Hero>
            <Hero.Overlay className="bg-opacity-60 h-screen" />
            <Hero.Content className="text-center">
                <div className="max-w-md">
                    <p className="text-5xl font-bold">Hello World</p>
                    <p className="pt-6">
                        You want to write an email, a letter to someone and you don't know if it's a
                        <span className="text-blue-500 hover:font-bold"> male </span>
                        or
                        <span className="text-pink-500 hover:font-bold"> female </span>
                        ?
                    </p>
                    <p className="pt-6 pb-6">
                        Click on the Get Started button and ask the
                        <a href="https://genderize.io/" target='_blank' rel="noreferrer" className="text-white font-bold hover:text-slate-300 hover:italic"> API </a>
                        the probability of the name to be a
                        <span className="text-blue-500 hover:font-bold"> male </span>
                        or
                        <span className="text-pink-500 hover:font-bold"> female </span>
                        one.
                    </p>

                    <Button color="primary" onClick={handleNextPage}>Get Started</Button>

                </div>
            </Hero.Content>
        </Hero>
    )
};

export default Main;