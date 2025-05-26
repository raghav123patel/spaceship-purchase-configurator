import React, { useState } from "react";

export default function Configurator() {
  const basePrice = 1000;

  const [colorPrice, setColorPrice] = useState(0);
  const [powerPrice, setPowerPrice] = useState(200);
  const [warpPrice, setWarpPrice] = useState(0);
  const [packagePrice, setPackagePrice] = useState(0);

  const total = basePrice + colorPrice + powerPrice + warpPrice + packagePrice;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Spaceship Configurator</h2>

      <div>
        <h3> Select Color</h3>
        <button onClick={() => setColorPrice(0)}>Snow (0€)</button>
        <button onClick={() => setColorPrice(100)}>Volcano (+100€)</button>
        <button onClick={() => setColorPrice(100)}>Sky (+100€)</button>
      </div>

      <div>
        <h3> Select Power</h3>
        <button onClick={() => setPowerPrice(0)}>100 MW (0€)</button>
        <button onClick={() => setPowerPrice(200)}>150 MW (+200€)</button>
        <button onClick={() => setPowerPrice(500)}>200 MW (+500€)</button>
      </div>

      <div>
        <h3> Warp Drive</h3>
        <button onClick={() => setWarpPrice(0)}>No (0€)</button>
        <button onClick={() => setWarpPrice(1000)}>Yes (+1000€)</button>
      </div>

      <div>
        <h3> Package</h3>
        <button onClick={() => setPackagePrice(0)}>Basic (0€)</button>
        <button onClick={() => setPackagePrice(100)}>Sport (+100€)</button>
        <button onClick={() => setPackagePrice(500)}>Lux (+500€)</button>
      </div>

      <hr />

      <h3> Summary</h3>
      <p>Base Price: {basePrice}€</p>
      <p>Color: +{colorPrice}€</p>
      <p>Power: +{powerPrice}€</p>
      <p>Warp Drive: +{warpPrice}€</p>
      <p>Package: +{packagePrice}€</p>
      <h2>Total: {total}€</h2>
    </div>
  );
}
