import React from 'react';
import './YourMood.scss'; 
import hero from '../assets/hero2.jpg'; 
import hero1 from '../assets/hero1.jpg'; 
import hero2 from '../assets/hero3.jpg'; 
import hero3 from '../assets/hero4.jpg'; 

const YourMood = () => {
  
  return (
    <div className="your-mood-container">
      <h1>How are you feeling right now?</h1>
      <div className="cards-container">
        <div className="mood-card" style={{ backgroundImage: `url(${hero})` }}>
          <div className="mood-text">Depressed</div>
        </div>
        <div className="mood-card" style={{ backgroundImage: `url(${hero1})` }}>
          <div className="mood-text">Anxious</div>
        </div>
        <div className="mood-card" style={{ backgroundImage:  `url(${hero2})` }}>
          <div className="mood-text">Happy</div>
        </div>
        <div className="mood-card" style={{ backgroundImage:  `url(${hero3})` }}>
          <div className="mood-text">Stressed</div>
        </div>
      </div>

      {/* Did you know section */}
      <div className="did-you-know-section">
        <h2>Did you know?</h2>
        <p>Many famous people have experienced depression and have used their experiences to inspire others. Some of them include:</p>
        <ul>
          <li><strong>Robin Williams</strong> – A beloved actor who brought joy to millions, but also struggled with depression.</li>
          <li><strong>Lady Gaga</strong> – A world-renowned artist who has been open about her battles with mental health.</li>
          <li><strong>Kurt Cobain</strong> – The Nirvana frontman, whose struggles with depression and addiction led to his tragic death.</li>
          <li><strong>Chrissy Teigen</strong> – A model and TV personality who has shared her struggles with postpartum depression.</li>
          <li><strong>Dwayne "The Rock" Johnson</strong> – The actor and former wrestler has been open about his battles with depression.</li>
        </ul>
        <p>It's important to remember that mental health issues can affect anyone, no matter their status or success.</p>
      </div>
    </div>
  );
};

export default YourMood;
