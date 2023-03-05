import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>Go to turtle town!</button>
        </div>
    );
};

export default Card;