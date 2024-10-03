import React, {InputHTMLAttributes} from 'react';


type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({...props}: InputPropsType) => {
    return (
        <input {...props} type="number"/>
    );
};