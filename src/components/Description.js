import React from "react";

const Description = (props) => {

    const { explanation } = props;

    return (<div>
        <p>{explanation}</p>
    </div>
);    
};

export default Description;