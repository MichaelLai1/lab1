import React from 'react';
import './App.css';
import Variety from './component/variety';
import coffeeShops from './component/data';

function App() {
  return (
    <>
      <h1 className="title">BEST COFFEE SHOPS IN NYC</h1>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    padding: "40px",
  }}
>
  {coffeeShops.map((shop, index) => (
    <Variety
      key={index}
      name={shop.name}
      imgSrc={shop.imgSrc}
      url={shop.url}
      description={shop.description}
    />
  ))}
</div>
    </>
  );
}

export default App;
