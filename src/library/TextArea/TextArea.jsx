import React from 'react';

const TextArea = ({ value, onChange, onBlur }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event.target.value);
    }
  };

  return (
    <div className="border border-orange-500 rounded-2xl p-3 w-full mt-4">
      <textarea
        className="w-full outline-none"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter text here..."
        rows={6}
      ></textarea>
    </div>
  );
};

export default TextArea;
