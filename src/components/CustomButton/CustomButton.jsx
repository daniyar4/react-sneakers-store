import React from "react";

import "./CustomButton.css";

const CustomButton = ({style, active, onClick, children}) => {
    return (
        <div
            style={{...style}}
            className={`custom-bn-block ${
                active ? "custom-bn-active" : ""
            }`}
            onClick={onClick}
        >
            <span>{children}</span>
        </div>
    );
};

export default CustomButton;
