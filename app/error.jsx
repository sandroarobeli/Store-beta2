"use client";

export default function Error({ error, reset }) {
  console.log(error.message); // test
  return (
    <div className="mx-auto max-w-screen-md mt-[25vh] text-center">
      <h2>Top Level Error Page</h2>
      <h3 className="text-gray-900 text-lg md:text-2xl font-orbitron">
        {error.message}
      </h3>
      <button
        className="error-button mt-6 font-orbitron"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}
