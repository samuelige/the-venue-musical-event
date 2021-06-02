import React from 'react'
import Layout from './components/Layout';
import HightLight from './sections/HightLight';
import Venue from './sections/venue';

const App = () => {
  return (
    <Layout>
      <Venue/>
      <HightLight/>
    </Layout>
  )
}

export default App;
