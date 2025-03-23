import React from "react";
import "../styles/Menu.css";
import menuData from "../data/menuData";

function Menu() {
  return (
    <section className="menu">
      <h1>Ruokalista</h1>
      {menuData.map((category, index) => (
        <div key={index} className="menu-category">
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx} className="menu-item">
                {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
                <div className="menu-info">
                  <span className="menu-name">{item.name}</span>
                  <span className="menu-price">{item.price}</span>
                  {item.diet && <span className="menu-diet"> ({item.diet})</span>}
                  {item.seasonal && <span className="menu-seasonal"> 🌟 Sesongin erikoisuus!</span>}
                </div>
                {item.allergens && (
                  <p className="menu-allergens">Allergeenit: {item.allergens}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Menu;
