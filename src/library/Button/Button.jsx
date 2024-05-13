import React from 'react';
import PropTypes from "prop-types";

function Button({ type, text, className, onClick, loading, disabled }) {
  return (
    <button className={`${type === "inverted" ? " bg-[#fff]  text-[#F29254] rounded-full " : "bg-[#F29254] text-[#ffffff]  rounded-full "} ${className} w-full  flex align-center justify-center py-4 cursor-pointer text-lg font-bold floating-button ${loading  || disabled ? "opacity-25" : ""}`} onClick={onClick}>
      {loading ? "Loading..." : text}
    </button>
  )
}

export default Button


Button.propTypes = {
  type: PropTypes?.string,
  text: PropTypes?.string?.isRequired,
  className: PropTypes?.string,
  loading: PropTypes?.bool,
  disabled: PropTypes?.bool,
  onClick: PropTypes?.func
};