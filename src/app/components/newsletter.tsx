// components/Newsletter.js
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-blue-900 p-10 rounded-md shadow-md flex flex-col items-center text-white gap-5">
      <h2 className="text-3xl font-bold ">Sign Up for Our Newsletter</h2>
      <h4 className="text-sm font-semibold mb-4"> Be the first to know about our new Updates and features</h4>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded-md focus:outline-none focus:ring focus:border-white bg-blue-900 border-white border-2"
        />
        <button
          type="submit"
          className="w-full mt-4 font-bold p-2 bg-white text-blue-900 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
