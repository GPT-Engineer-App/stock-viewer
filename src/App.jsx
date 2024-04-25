import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 150.1 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 120.55 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 250.7 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 105.3 },
    { symbol: "FB", name: "Meta Platforms Inc.", price: 195.45 },
  ];

  const filteredStocks = stocks.filter((stock) => stock.name.toLowerCase().includes(searchTerm.toLowerCase()) || stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center bg-gray-100 p-2 rounded">
        <FaSearch className="text-gray-400 mr-2" />
        <input type="text" placeholder="Search stocks..." className="bg-transparent outline-none w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="mt-4">
        {filteredStocks.length > 0 ? (
          <ul className="list-none">
            {filteredStocks.map((stock) => (
              <li key={stock.symbol} className="p-2 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="font-bold">{stock.symbol}</span>
                  <span>{stock.name}</span>
                  <span className="font-semibold">${stock.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No stocks found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
