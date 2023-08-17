import React from 'react';
import Header from '../components/Header';

const Arr = [
  { date: "JUL16", add: "DETROIT, MI", dec: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", add: "TORONTO,ON", dec: "BUDWEISER STAGE" },
  { date: "JUL 22", add: " BRISTOW, VA", dec: "JIGGY LUBE LIVE" },
  { date: "JUL 29", add: "PHOENIX, AZ", dec: " AK-CHIN PAVILION" },
  { date: "AUG 2", add: "LAS VEGAS, NV", dec: "T-MOBILE ARENA" },
  { date: "AUG 7", add: "CONCORD, CA", dec: " CONCORD PAVILION" },
]

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 style={{ marginTop: "100px", textAlign: "center" }}>TOURS</h1>
        <div style={{ marginInline: "250px", marginTop: "50px" }}>
          {Arr.map((item) => (
            <div>
              <div className='d-flex justify-content-between'>
                <h5>{item.date}</h5>
                <h5 className='text-secondary'>{item.add}</h5>
                <h5 className='text-secondary'>{item.dec}</h5>
                <button type="button" className="btn btn-info" style={{ color: "white", width: "210px", }}>BUY TICKETS</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;