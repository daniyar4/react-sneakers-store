import React from "react";

import "./CustomButton.css";

const CustomButton = (props) => {
    return (
        <div
            style={{...props.style}}
            className={`custom-bn-block ${
                props.active ? "custom-bn-active" : ""
            }`}
            onClick={props.onClick}
        >
            <span>{props.title}</span>
        </div>
    );
};

export default CustomButton;
