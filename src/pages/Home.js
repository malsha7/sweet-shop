import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/sweet.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
  
   <div className="headerContainer" >
<h1> Delight Sweets Shop</h1>
<p>
  ALWAYS BEST SWEETS
</p>
<Link to="/menu">
<button>
  ORDER NOW
</button>
</Link>
   </div>
    </div>
  )
}

export default Home;
