import React from 'react'
import CustomLinks from './links'

const Logo = ({src, ...rest}) => {
    return (
        <CustomLinks path='/' {...rest}>
            <img className='h-6' src={src}/>
        </CustomLinks>
    )
}

export default Logo
