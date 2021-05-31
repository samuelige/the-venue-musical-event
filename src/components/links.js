import React from 'react'

const CustomLinks = ({path, label, children, ...rest}) => {
    return (
        <a {...rest} href={path}>
            {children || label}
        </a>
    )
}

export default CustomLinks
