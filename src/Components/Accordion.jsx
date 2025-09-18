import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsAcitve] = useState(false);
  return (
    <div className="max-w-lg w-full mb-2">
      <div
        onClick={() => setIsAcitve(!isActive)}
        className="flex justify-between items-center p-4 bg-gray-700 "
      >
        <div className="w-lg ">{title}</div>
        <p className=" font-bold ">{isActive ? "-" : "+"}</p>
      </div>

      {isActive && <p className="w-lg text-white p-4 bg-gray-700">{content}</p>}
    </div>
  );
};

export default Accordion;
