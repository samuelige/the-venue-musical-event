import React from 'react'

const CustomLinks = ({...rest, path, label}) => {
    return (
        <a {...rest} href={path}>
            {children || label}
        </a>
    )
}

export default CustomLinks
