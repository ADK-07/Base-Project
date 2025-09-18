import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increament = () => setCount((count) => count + 1);
  const reset = () => setCount(0);
  const decreament = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex flex-col justify-center bg-gray-800/50 min-w-[400px] backdrop-blur-md border border-white/20 px-8 py-8 rounded-lg items-center gap-5 text-white">
        <h1 className="text-5xl font-bold">Counter</h1>
        <p className="text-xl text-gray-200">Count: {count}</p>
        <div className="flex gap-3">
          <button
            onClick={decreament}
            className="bg-red-500 px-4 py-1 rounded-lg text-2xl"
          >
            -
          </button>
          <button
            onClick={reset}
            className="bg-green-500 px-4 py-1 rounded-lg text-2xl "
          >
            reset
          </button>
          <button
            onClick={increament}
            className="bg-blue-500 px-4 py-1 rounded-lg text-2xl "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
