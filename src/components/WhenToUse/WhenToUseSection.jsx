import React from 'react';
import './when.scss'; 
import hero from '../../assets/hero.jpg';

const WhenToUseSection = () => {
  return (
    <div className="when-to-use-section">
      <div className="image-container">
        <img src={hero} alt="When to use" className="section-image" />
      </div>
      <div className="text-container">
        <h2>When Should You Use MyMmmood?</h2>
        <p>
          This app is designed to support you during challenging moments in life.
          You can use it when you're feeling stressed, anxious, or simply need someone
          to talk to. It provides guided exercises, mood tracking, and professional
          resources to help you feel better.
        </p>
      </div>
    </div>
  );
};

export default WhenToUseSection;
