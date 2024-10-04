import React, {HTMLAttributes} from 'react';


type CountParagraphPropsType = HTMLAttributes<HTMLParagraphElement>

export const CountParagraph = ({children, ...props}: CountParagraphPropsType) => {
    return (
<p {...props} >{children}</p>
    );
};