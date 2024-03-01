
import { Form } from 'react-bootstrap';
import './colors.css'

const colors = [
    { name: 'white', value: '#ffffff' },
    { name: 'red', value: '#ff0000' },
    { name: 'yellow', value: '#ffff00' },
    { name: 'green', value: '#008000' },
    { name: 'blue', value: '#0000ff' },
    { name: 'black', value: '#000000' },
  ];

function ColorRadioButtons({ handleColorChange, selectedColor }) {


  return (
    <Form>
      {colors.map((color) => (
        <div key={color.value} className="form-check form-check-inline">
          <input
            className={`form-check-input circle color-${color.name}`}
            type="radio"
            name="color"
            id={`color-${color.name}`}
            value={color.name}
            checked={selectedColor === color.name}
            onChange={handleColorChange}
          />
          <label
            className="form-check-label"
            htmlFor={`color-${color.name}`}
            style={{ backgroundColor: color.value }}
          >
            <span className="visually-hidden">{color.name}</span>
          </label>
        </div>
      ))}
    </Form>
  );
}

export default ColorRadioButtons;