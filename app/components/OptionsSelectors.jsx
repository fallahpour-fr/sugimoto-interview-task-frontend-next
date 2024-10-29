'use client'
import React, { useState } from 'react';
const OptionsSelector = ({ sizes, colors }) => {

    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleSizeChange = (size) => setSelectedSize(size);
    const handleColorChange = (color) => setSelectedColor(color);
  
    return (
      <div className="options_selector_container">
        <div className="product_details">
          <p>Selected Size: {selectedSize}</p>
          <p>Selected Color: {selectedColor}</p>
        </div>
  
        {/* Size Selector */}
        <div className="option_section">
          <label>Size:</label>
          <div className="option_buttons">
            {sizes.map((size) => (
              <button
                key={size}
                className={`option_button ${size === selectedSize ? 'selected' : ''}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
  
        {/* Color Selector */}
        <div className="option_section">
          <label>Color:</label>
          <div className="option_buttons">
            {colors.map((color) => (
              <button
                key={color}
                className={`option_button ${color === selectedColor ? 'selected' : ''}`}
                onClick={() => handleColorChange(color)}
                style={{ backgroundColor: color }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
}

export default OptionsSelector;