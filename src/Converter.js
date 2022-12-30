import React, { useState } from "react";
import Select from "react-dropdown-select";
import Calculate from "./Calculate";
import "./converter.css";

function Converter() {
  const [inputData, setInputData] = useState({
    degree: "",
    value: "",
    result: "",
    isConverted: false,
  });

  function handleChange(event) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const options = [
    {
      value: 1,
      label: "Fahrenheit",
    },
    {
      value: 2,
      label: "Kelvin",
    },
  ];

  function setValues(values) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        value: values,
      };
    });
  }

  function handleConvert() {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        isConverted: true,
      };
    });
  }

  return (
    <div className="converter">
      <div className="converter__container">
        <div className="container">
          <div className="item--space">
            <p>Degrees</p>
            <input
              type="text"
              placeholder="Enter degree"
              name="degree"
              value={inputData.degree}
              onChange={handleChange}
            />
          </div>
          <div className="item--space">
            <p>Type</p>
            <Select options={options} onChange={setValues} />
          </div>
          <div className="button" onClick={handleConvert}>
            Convert
          </div>
        </div>
        <div className="result">
          <p>RESULT</p>
          {inputData.isConverted ? <Calculate data={inputData} /> : <p></p>}
        </div>
      </div>
    </div>
  );
}

export default Converter;
