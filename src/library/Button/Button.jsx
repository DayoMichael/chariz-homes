import React from 'react';
import PropTypes from "prop-types";

function Button({ type, text, className, onClick, loading, disabled }) {
  return (
    <button className={`${type === "inverted" ? " bg-[#fff]  text-[#000] text-green rounded-lg " : "bg-[#000000] text-[#ffffff]  rounded-lg "} ${className} w-full  flex align-center justify-center py-4 cursor-pointer text-lg font-bold ${loading  || disabled ? "opacity-25" : ""}`} onClick={onClick}>
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