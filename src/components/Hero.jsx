import React from 'react';

const inputStyles = "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2";

const Hero = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg w-4/6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Assign Work</h2>
      <form>
        <div className="mb-4">
          <label className={labelStyles}>Plant ID</label>
          <input
            type="text"
            placeholder="Enter Plant ID"
            className={inputStyles}
          />
        </div>
        <div className="mb-4">
          <label className={labelStyles}>Work Date</label>
          <input
            type="datetime-local"
            className={inputStyles}
          />
        </div>
        <div className="mb-6">
          <label className={labelStyles}>Work to be assigned</label>
          <textarea
            placeholder="Give work details"
            className={inputStyles}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Assign Work
        </button>
        </form>
        </div>
)
};

export default Hero;