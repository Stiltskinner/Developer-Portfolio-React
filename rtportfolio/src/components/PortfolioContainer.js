// TODO: Replace imports for home with portfolio and blog with resume. Most like replace navtabs with header

import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// General TODO List
// Set up custom CSS to work.
// Import existing CSS from my last portfolio
// Update existing CSS to use a white background/new color palette
// Create a Project component to reuse for portfolio

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // TODO Set About to be default, replace home with portfolio
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    // TODO Replace blog with Resume
    if (currentPage === 'Blog') {
      return <Blog />;
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
    </div>
  );
}

// TODO return a footer component that includes github, linkedin, and twitter profiles.