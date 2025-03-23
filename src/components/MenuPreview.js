import React from "react";
import menuData from "../data/menuData";
import { Link } from "react-router-dom";
import "../styles/MenuPreview.css"; 

const MenuPreview = () => {
  const previewItems = menuData.flatMap(section => section.items).slice(0, 3);

  return (
    <section className="menu-preview">
      <h2>Suosituimmat annokset</h2>
      <ul>
        {previewItems.map((item, index) => (
          <li key={index} className="preview-item">
            <span className="preview-name">{item.name}</span>
            <span className="preview-price">{item.price}</span>
          </li>
        ))}
      </ul>
      <Link to="/menu" className="menu-button">Katso koko menu</Link>
    </section>
  );
};

export default MenuPreview;
