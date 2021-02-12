
import React from "react";
import Description from "./Description";


const Container = (props) => {
    const { data } = props;

    return(
        <div>
           <img src={props.photo.url}></img>
           <h1>{props.photo.title}</h1>
           <p>{props.photo.date}</p>
           <Description explanation={props.photo.explanation} />
        </div>
    );
};

export default Container;