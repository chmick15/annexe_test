import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    let navigate = useNavigate();

    const clickHome = () => {
        navigate("/");
    };
    return (
        <div className="h-screen grid content-center">
            <div className="text-center">
                <p className="text-5xl font-bold py-6">Sorry, this page does not exist !</p>
                <button className="btn btn-primary" onClick={clickHome}>Home Page</button>

            </div>
        </div>

    );
};

export default Page404;
