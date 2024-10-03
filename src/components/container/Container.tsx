import React, {HTMLAttributes} from 'react';
import cont from './container.module.css'

type ContainerPropsType = HTMLAttributes<HTMLDivElement>;

export const Container = ({children, ...props}: ContainerPropsType) => {
    return (
        <div {...props} className={cont.container}>
            {children}
        </div>
    );
};