import React from 'react'
import { Form } from 'react-bootstrap';
// import 


function ProdPgColor({ handleColorChange, selectedColor, colors }) {
  return (
    <Form>
      {colors.map((color) => (
        <div key={color} className="form-check form-check-inline">
          <input
            className={`form-check-input circle color-${color}`}
            type="radio"
            name="color"
            id={`color-${color}`}
            value={color}
            checked={selectedColor === color}
            onChange={handleColorChange}
          />
          <label
            className="form-check-label"
            htmlFor={`color-${color}`}
            style={{ backgroundColor: color }}
          >
            <span className="visually-hidden">{color}</span>
          </label>
        </div>
      ))}
    </Form>
  );
}

export default ProdPgColor