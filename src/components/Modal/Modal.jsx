import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
    return (
        <div
            className={active ? "modal_main modal_active" : "modal_main"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal_content modal_active" : "modal_content"}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
