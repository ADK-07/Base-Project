import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      console.log(err);
      setInput("Error");
    }
  };

  const backSpace = () => {
    if (input.length > 0) {
      setInput(input.slice(0, -1));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-80 ">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            placeholder="0"
            className="w-full h-50 bg-white text-black text-right text-2xl p-4 rounded-t-3xl border-t-6 border-l-6 border-r-6 border-black mb-4  focus:outline-none "
          />
        </div>
        <div className=" px-6 mb-4 grid grid-cols-4 gap-4">
          <button
            onClick={() => setInput("")}
            className="bg-orange-500 px-4 py-2 rounded-md font-semibold text-white"
          >
            C
          </button>
          <button
            onClick={() => handleClick("%")}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold"
          >
            %
          </button>
          <button
            onClick={() => handleClick("()")}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold"
          >
            ()
          </button>
          <button
            onClick={() => handleClick("/")}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold"
          >
            /
          </button>

          {["7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-700 text-white px-4 py-2 rounded-xl font-semibold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("*")}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold"
          >
            *
          </button>

          {["4", "5", "6"].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-700 text-white px-4 py-2 rounded-xl font-semibold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("-")}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold"
          >
            -
          </button>

          {["1", "2", "3"].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-700 text-white px-4 py-2 rounded-xl font-semibold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("+")}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold"
          >
            +
          </button>

          <button
            onClick={() => handleClick("0")}
            className="bg-gray-700 text-white px-4 py-2 rounded-xl font-semibold"
          >
            0
          </button>
          <button
            onClick={() => handleClick("00")}
            className="bg-gray-700 text-white col-span-2 px-4 py-2 rounded-xl font-semibold"
          >
            00
          </button>
          <button
            onClick={() => handleClick(".")}
            className="bg-gray-700 text-white col- px-4 py-2 rounded-xl font-semibold"
          >
            .
          </button>

          <button
            onClick={handleCalculate}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold col-span-3"
          >
            =
          </button>

          <button
            onClick={backSpace}
            className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold "
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
