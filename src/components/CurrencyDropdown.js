import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const CurrencyDropdown = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  return (
    <Dropdown style={{ marginLeft: '15px' }}> {/* Adjust the marginLeft for spacing */}
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleCurrencyChange({ name: 'Dollar', symbol: '$' })}>
          $ Dollar
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCurrencyChange({ name: 'Pound', symbol: '£' })}>
          £ Pound
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCurrencyChange({ name: 'Euro', symbol: '€' })}>
          € Euro
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCurrencyChange({ name: 'Ruppee', symbol: '₹' })}>
          ₹ Ruppee
        </Dropdown.Item>
      </Dropdown.Menu>
      <span style={{ marginLeft: '10px' }}>{currency.symbol}</span> {/* Display the chosen symbol */}
    </Dropdown>
  );
};

export default CurrencyDropdown;
