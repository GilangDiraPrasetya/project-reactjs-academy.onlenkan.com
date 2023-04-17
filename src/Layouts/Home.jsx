import React from 'react';
import Navbar from '.././Components/Home/Navbar';
import Footer from '.././Components/Home/Footer';

export default function Home({ children }) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}
