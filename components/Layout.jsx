import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Topbar from './Topbar';


const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>ASD Renewables - Top Solar Company In Abjua Nigeria</title>
      </Head>
      <header>
        <Topbar />
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}


export default Layout
