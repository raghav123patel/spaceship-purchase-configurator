import React, { useState } from "react";
import "../styles/ShipComponent.css";

const basePrice = 1000;

const colors = [
  { label: "Snow", value: "white", price: 0 },
  { label: "Volcano", value: "orange", price: 100 },
  { label: "Sky", value: "skyblue", price: 100 },
];

const powers = [
  { label: "100 MW", value: 100, price: 0 },
  { label: "150 MW", value: 150, price: 200 },
  { label: "200 MW", value: 200, price: 500 },
];

const warpDrives = [
  { label: "NO", value: false, price: 0 },
  { label: "YES", value: true, price: 1000 },
];

const optionPackages = [
  {
    label: "Basic",
    price: 0,
    features: ["Air conditioning", "Cloth seats", "FM radio"],
  },
  {
    label: "Sport",
    price: 100,
    features: [
      "Air conditioning",
      "Cloth seats",
      "FM radio",
      "Personal tech support",
    ],
  },
  {
    label: "Lux",
    price: 500,
    features: [
      "Air conditioning",
      "Luxury seats",
      "FM radio",
      "Chrome wheels",
      "Window tint",
      "Subwoofer",
    ],
  },
];

export default function Configurator() {
  const [color, setColor] = useState(colors[0]);
  const [power, setPower] = useState(powers[1]);
  const [warp, setWarp] = useState(warpDrives[0]);
  const [option, setOption] = useState(optionPackages[0]);

  const total =
    basePrice + color.price + power.price + warp.price + option.price;

  return (
    <div className="page-wrapper">
      <div className="configurator-container">
        <h2 className="title">Spaceship Configurator</h2>

        <div className="configurator-body">
          <div className="config-options">
            <div className="section">
              <h3>Select Color:</h3>
              <div className="options">
                {colors.map((c) => (
                  <div
                    key={c.label}
                    className={`option ${
                      color.label === c.label ? "selected" : ""
                    }`}
                    onClick={() => setColor(c)}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "20px",
                        margin: "auto",
                        backgroundColor: c.value,
                        border: "1px solid #ccc",
                      }}
                    ></div>
                    <div className="price">+{c.price}€</div>
                    <div className="label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Select Power:</h3>
              <div className="options">
                {powers.map((p) => (
                  <div
                    key={p.label}
                    className={`option ${
                      power.label === p.label ? "selected" : ""
                    }`}
                    onClick={() => setPower(p)}
                  >
                    <div className="label">{p.label}</div>
                    <div className="price">+{p.price}€</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Warp Drive:</h3>
              <div className="options">
                {warpDrives.map((w) => (
                  <div
                    key={w.label}
                    className={`option ${
                      warp.label === w.label ? "selected" : ""
                    }`}
                    onClick={() => setWarp(w)}
                  >
                    <div className="label">{w.label}</div>
                    <div className="price">+{w.price}€</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Option Package:</h3>
              <div className="options">
                {optionPackages.map((pkg) => (
                  <div
                    key={pkg.label}
                    className={`option ${
                      option.label === pkg.label ? "selected" : ""
                    }`}
                    onClick={() => setOption(pkg)}
                  >
                    <div className="label">{pkg.label}</div>
                    <div className="price">+{pkg.price}€</div>
                    <ul>
                      {pkg.features.map((f, i) => (
                        <li key={i} className="feature">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="summary">
            <div>Base price: {basePrice}€</div>
            <div>Color: +{color.price}€</div>
            <div>Power: +{power.price}€</div>
            <div>Warp drive: +{warp.price}€</div>
            <div>Option package: +{option.price}€</div>
            <div className="total">Total: {total}€</div>
          </div>
        </div>
      </div>
    </div>
  );
}
