import React from 'react';
import './Cards.css';

function App() {
  return (
    <div className="App">
      <div className="card" id='c1'>
        <h3>Explore Report Generation Tool 🧑</h3>
        <p>Checkout to our report generation tool ...</p>
        <button className="btn">📊 Report Generation</button>
      </div>
      <div className="card" id='c2'>
        <h3>Explore Manage Campaign Feature 🙂</h3>
        <p>Checkout to our manage campaign feature ...</p>
        <button className="btn">📋 Manage Campaign</button>
      </div>
      <div className="card" id='c3'>
        <h3>Post a Community Campaign 😉</h3>
        <p>Checkout to our post campaign feature ...</p>
        <button className="btn">🚀 Hire Influencer</button>
      </div>
      <div className="card" id='c4'>
        <h3>Explore Influencer Base Feature ✌️</h3>
        <p>Checkout to our myinfluencer feature ...</p>
        <button className="btn">📚 Influencers Base</button>
      </div>
      <div className="card" id='c5'>
        <h3>Explore SaveList Feature 🙃</h3>
        <p>Checkout to our save list feature ...</p>
        <button className="btn">📁 Save List</button>
      </div>
      <div className='end'>
        <h4 id='e1'>© 2024, Made with❤️ </h4>
        <h4 id='e2'>Socialveins</h4>
        <h4 id='e3' >Support</h4>

        
      </div>

     
    </div>
    
  );
}

export default App;