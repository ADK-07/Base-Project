import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputItems, setInputItems] = useState({
    name: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputItems.name.trim() === "" || inputItems.quantity === "") return;
    setItems([...items, inputItems]);
    setInputItems({ name: "", quantity: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputItems({
      ...inputItems,
      [name]: name === "quantity" ? parseInt(value) : value,
    });
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
        Shopping List
      </h1>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          value={inputItems.name}
          name="name"
          placeholder="Item Name"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded text-white"
        />
        <input
          type="text"
          value={inputItems.quantity}
          name="quantity"
          onChange={handleChange}
          placeholder="Quantity"
          className="p-2 border border-gray-300 rounded  text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2  text-white rounded"
        >
          Add Items
        </button>
      </form>

      <div className="w-full max-w-sm bg-gray-300 p-4 rounded-lg shadow">
        {items.length === 0 ? (
          <p> No items in the shopping list</p>
        ) : (
          <ul>
            {items.map((item, i) => (
              <li key={i} className="flex justify-between items-center mb-2 ">
                {" "}
                Name: {item.name} Quantity: {item.quantity}
                <button
                  onClick={() => handleRemove(i)}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
