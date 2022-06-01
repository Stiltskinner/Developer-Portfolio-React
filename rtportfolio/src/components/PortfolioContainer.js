// TODO: Replace imports for Portfolio with portfolio and blog with resume. Most like replace navtabs with header

import React, { useState } from 'react';
import Header from './Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

// General TODO List
// Set up custom CSS to work.
// Import existing CSS from my last portfolio
// Update existing CSS to use a white background/new color palette
// Create a Project component to reuse for portfolio

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // TODO Set About to be default, replace Home with portfolio
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    // TODO Replace blog with Resume
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

// TODO Create a consistent header and put navigation inside of it. Most likely replace navtabs with header

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  )};