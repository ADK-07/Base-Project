import Accordion from "./Components/Accordion";
import { accordionData } from "./utility/content";
import Counter from "./Components/Counter";
import Todo from './Components/Todo';
import Calculator from './Components/Calculator'
import ShoppingList from './Components/ShoppingList'
import Testimonials from './Components/Testimonials'
import { useState } from "react";

const tab = [
  {
    id: 0,
    label: "Counter",
  },
  {
    id: 1,
    label: "Todo",
  },
  {
    id: 2,
    label: "Accordion",
  },
  {
    id: 3,
    label: "Testimonials",
  },
  {
    id: 4,
    label: "ShoppingList",
  },
  {
    id: 5,
    label: "Calculator",
  },
];
const App = () => {
  const [isActive, setIsAcitve] = useState(0);
  return (
    <div>
      <div className="w-full flex justify-between items-center px-6 py-2 bg-gray-700/80 backdrop:blur-2xl">
        {tab.map((t) => (
          <button key={t.id} onClick={() => setIsAcitve(t.id)} className="px-4 py-2 bg-cyan-500 rounded-full">
            {t.label}
          </button>
        ))}
      </div>
      {isActive === 0 && <Counter />}
      {isActive === 1 && <Todo />}
      {isActive === 2 && 
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 to-gray-400">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      }
      {isActive === 3 && <Testimonials />}
      {isActive === 4 && <ShoppingList />}
      {isActive === 5 && <Calculator />}
    </div>
  );
};

export default App;
