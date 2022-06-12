import React from "react";

const Select = ({options, defaultValue, value, onChange}) => {
    return (
            <select
            value={value}
            onChange={event => onChange(event.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map(item => 
                    <option key={item.value} value={item.value}>
                        {item.title}
                        </option>
                )}
            </select>
    );
}

export default Select;
