import React from 'react'
import Zoom from 'react-reveal/Zoom';
import SectionHeader from '../components/SectionHeader'

const Location = () => {
    return (
        <div className="space-y-10 pt-10">
            <div className="text-center">
                <SectionHeader>Location</SectionHeader>
            </div>
            <Zoom delay={1000} doration={1000}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070403.128758719!2d4.1765547325062276!3d9.00647027918255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1622664267173!5m2!1sen!2sng" 
                    height="450" 
                    className="w-full"
                    allowfullscreen="" 
                    loading="lazy"
                />
            </Zoom>
            
        </div>

       
    )
}

export default Location
