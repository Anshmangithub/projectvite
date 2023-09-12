import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setuser] = useState([]);

    const GetUser = async () => {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const d = await data.json();
            setuser(d);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetUser();
    }, []);
    return (
        <div>
            <h3>User Details</h3>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate("/home")}>home</button>
        </div>
    );
};

export default Details;