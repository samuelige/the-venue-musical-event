import React, { useState } from 'react'
import Sticky from 'react-stickynode';
import Banner from '../sections/banner';
import Header from './header/Header';

const Layout = ({children}) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status) => {
      if (status.status === Sticky.STATUS_FIXED) {
        setIsSticky(true);
      } else if (status.status === Sticky.STATUS_ORIGINAL) {
        setIsSticky(false);
      }
    };

    return (
        
        <React.Fragment>
            <header className="box-content h-customHeight2 md:h-customHeight lg:h-screen ">
              <div className="absolute w-full">
                <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
                    <Header className={`${isSticky ? 'sticky bg-red-700 text-white' : 'unSticky'}`} />
                </Sticky>
              </div>
              <div className="relative w-full">
                <Banner/>
              </div>
            </header>

            <main className="" id="content" >
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout
