import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
    const [users, setusers] = useState([]);

    const GetUsers = async () => {
        try {
            const data = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const d = await data.json();
            setusers(d);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetUsers();
    }, []);

    return (
        <div>
            <Outlet />
            <hr />
            <h2>User Profiles</h2>
            {users.length > 0
                ? users.map((u) => (
                      <div className="alert alert-light mb-3" key={u.id}>
                          <h4>{u.name}</h4>
                          <p>{u.email}</p>
                          <Link to={`/profile/${u.id}`}>Details</Link>
                      </div>
                  ))
                : "loading..."}
        </div>
    );
};

export default Profile;