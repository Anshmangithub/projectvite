import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
     const navigate = useNavigate();
    const HomeHandler = () => {
        // backend api call
        // save database
        navigate("/");
    };
  return (
    <div>
        <div>About</div>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem praesentium maiores eos accusamus quam eaque voluptate nemo pariatur quo iure labore voluptates autem laudantium similique provident, eveniet iusto perferendis quia minus sit corrupti veniam explicabo amet obcaecati. Magnam mollitia consectetur ipsa quasi quisquam necessitatibus? Qui possimus nam sit quaerat aspernatur ipsum dolorem id ab, voluptates expedita saepe dicta alias. Facere delectus maiores beatae, eaque rem earum accusamus id dignissimos nemo nostrum praesentium eum expedita, quibusdam culpa minima provident aliquid placeat labore vitae dicta tempore ab ex. Porro sapiente nisi commodi magni minima voluptates, aliquam magnam, provident id ab quidem aut?</p>
    <button onClick={HomeHandler} className="btn btn-danger">
                Home
            </button>
    </div>
  )
}

export default About