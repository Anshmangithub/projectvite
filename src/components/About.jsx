import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const HomeHandler = () => {
        // backend api call
        // save database
        navigate("/");
    };
    return (
        <div className="w-75">
            <h1>About Company</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                vitae laudantium itaque, corporis consequuntur ipsum libero
                inventore nemo in? Natus enim nostrum incidunt voluptas quos,
                voluptates quam atque exercitationem vel tempora, recusandae
                numquam perferendis ad iusto fuga explicabo architecto delectus
                inventore? At tenetur magnam, animi sunt laudantium esse iusto
                placeat aperiam, architecto, alias sequi? Esse sit tempore
                dolorum ratione corrupti ad aut consequuntur libero? Quo nisi
                soluta beatae deleniti esse adipisci, cum repellat expedita! Vel
                molestias reprehenderit animi quidem fugit hic ab non officiis.
                Illum placeat adipisci odit ratione aliquam deleniti pariatur
                ducimus, officiis accusamus consectetur quae voluptatibus rem
                quasi.
            </p>
            <button onClick={HomeHandler} className="btn btn-danger">
                Home
            </button>
        </div>
    );
};

export default About;