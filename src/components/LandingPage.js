import React from 'react';
import AbaFooter from './AbaFooter';
import AbaHeader from './AbaHeader';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <AbaHeader></AbaHeader>
      <div className="top-images flex-display">
        <div className="spacing-image">
          <img className="image-fluid" src="/images/up-47.jpg"></img>
        </div>
        <div className="spacing-image">
          <img className="image-fluid" src="/images/up-47.jpg"></img>
        </div>
      </div>
      <AbaFooter></AbaFooter>
    </div>
  );
};

export default LandingPage;
