import React from 'react'
import Layout from './components/Layout';
import Footer from './sections/Footer';
import HightLight from './sections/HightLight';
import Location from './sections/Location';
import Pricing from './sections/Pricing';
import Venue from './sections/venue';

const App = () => {
  return (
    <Layout>
      <Venue/>
      <HightLight/>
      <Pricing/>
      <Location/>
      <Footer/>
    </Layout>
  )
}

export default App;
