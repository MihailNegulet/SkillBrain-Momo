import React, { useState, useEffect } from "react";

import "./Checkbox.css";

const Checkbox = (props) => {
  const { checked: propChecked, onChange} = props;
  const [checked, setChecked] = useState(!!props.checked);


  useEffect(() => {
    console.log("Checkbox updated:", checked);
    if (onChange) {
      onChange(checked);
    }
  }, [checked, onChange]);

  
  useEffect(() => {
    console.log("Checkbox propChecked changed:", propChecked);
    setChecked(!!propChecked);
  }, [propChecked]);
  


  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="round">
      <input
        value={checked}
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;
