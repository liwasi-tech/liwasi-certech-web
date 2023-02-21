import React from "react";

interface FormInputProps {
    name: string;
    label: string;
  }

function FormInput({name, label}: FormInputProps) {
    return(
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} />
        </React.Fragment>
    );
}

export {FormInput};