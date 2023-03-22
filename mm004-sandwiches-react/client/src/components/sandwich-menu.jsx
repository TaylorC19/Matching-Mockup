import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function  SandwichMenu() {
  const [sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    getSandwiches();
  }, [])

  async function getSandwiches() {
    const fetchedSandwiches = await axios.get('/sandwiches')
    setSandwiches(fetchedSandwiches.data);
  }

  return (
    <div className="main-content">
      {
        sandwiches.map((sandwich) => {
          return (
            <div className='card'>
              <img className='menu-img' src={sandwich.img_url} alt="" />
              <div className="card-contents">
                <h2>{sandwich.name}</h2>
                <p className='likes'>{sandwich.likes} people liked this sandwich</p>
                <p>{sandwich.desc}</p>
                <div className="row-info">
                  <span className='cook-time'>♦️ {sandwich.prep_time} mins</span>
                  <span>♦️ {sandwich.default_serving} serving(s)</span>
                  <span>♦️ {sandwich.calories} calories</span>
                </div>

              </div>
                <footer>
                  <div className='row-button'>
                    <button>👍 Like</button>
                    <button>Delete</button>
                  </div>
                </footer>
            </div>
          )
        })
      }
    </div>
  );
}

export default SandwichMenu;
