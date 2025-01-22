import React from 'react';
import './Home.css';


const Home = () => {
  
  return (
    <div className='Body1'>
      <div className="body">
        <h1 className="title">
          studybuddy<span className="red">*</span>
        </h1>
      </div>
      <div className="home">
        <div className="wave-container">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none">
            <path d="M0,30 C150,100 350,0 500,30 L500,0 L0,0 Z" fill="#000000" />
          </svg>
          <h1 className="summary">
            StudyBuddy is a dynamic platform designed to help students connect with study partners based on shared interests, availability, and study goals. Whether you're looking for someone to review notes, discuss concepts, or collaborate on assignments, StudyBuddy makes it easy to find a partner who fits your schedule and subject preferences. Our platform ensures a safe and supportive learning environment, offering tools to help you stay focused, stay organized, and achieve your academic goals together. Study smarter, not harder, with StudyBuddy!
          </h1>
        </div>
      </div>
      </div>
  );
};

export default Home;
