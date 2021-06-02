import React from 'react'
import Layout from './components/Layout';
import HightLight from './sections/HightLight';
import Pricing from './sections/Pricing';
import Venue from './sections/venue';

const App = () => {
  return (
    <Layout>
      <Venue/>
      <HightLight/>
      <Pricing/>
    </Layout>
  )
}

export default App;
