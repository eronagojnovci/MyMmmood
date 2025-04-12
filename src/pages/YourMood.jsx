import React from 'react';
import './YourMood.scss';
import hero from '../assets/hero2.jpg';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero3.jpg';
import hero3 from '../assets/hero4.jpg';

import robin from '../assets/robin.jpg';
import ladygaga from '../assets/ladygaga.jpg';
import kurt from '../assets/kurt.jpg';
import chrissy from '../assets/chrissy.jpg';
import rock from '../assets/rock.jpg';

const celebs = [
  {
    name: 'Robin Williams',
    image: robin,
    description: 'A beloved actor who brought joy to millions, but also struggled with depression.',
  },
  {
    name: 'Lady Gaga',
    image: ladygaga,
    description: 'A world-renowned artist who has been open about her battles with mental health.',
  },
  {
    name: 'Kurt Cobain',
    image: kurt,
    description: 'The Nirvana frontman, whose struggles with depression and addiction led to his tragic death.',
  },
  {
    name: 'Chrissy Teigen',
    image: chrissy,
    description: 'A model and TV personality who has shared her struggles with postpartum depression.',
  },
  {
    name: 'Dwayne "The Rock" Johnson',
    image: rock,
    description: 'The actor and former wrestler has been open about his battles with depression.',
  },
];

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
        <div className="mood-card" style={{ backgroundImage: `url(${hero2})` }}>
          <div className="mood-text">Happy</div>
        </div>
        <div className="mood-card" style={{ backgroundImage: `url(${hero3})` }}>
          <div className="mood-text">Stressed</div>
        </div>
      </div>

      {/* Dynamic Did You Know Section */}
      <div className="did-you-know-section">
        <h2>Did you know?</h2>
        <p className="intro-text">
          Many famous people have experienced depression and have used their experiences to inspire others:
        </p>
        <div className="celebs-grid">
          {celebs.map((celeb, index) => (
            <div className="celeb-card" key={index}>
              <img src={celeb.image} alt={celeb.name} className="celeb-img" />
              <div className="celeb-info">
                <h3>{celeb.name}</h3>
                <p>{celeb.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="closing-text">
          It's important to remember that mental health issues can affect anyone, no matter their status or success.
        </p>
      </div>
    </div>
  );
};

export default YourMood;
