import React from "react";

const Choice = ({ text, onClick, value }) => {
  return (
    <div className="flex items-center pl-4 border border-red-500 rounded dark:border-red-700 bg-red-200 h-32 max-w-full relative px-20 py-10">
      <input
        type="checkbox"
        onChange={onClick}
        value={value}
        className="absolute top-2 left-3 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label className="absolute bottom-2 text-sm">{text}</label>
    </div>
  );
};

export default Choice;
