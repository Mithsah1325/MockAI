import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { type: 'user', message: input };
    const newHistory = [...history, newMessage];
    setHistory(newHistory);
    setInput('');

    try {
      const response = await axios.post('http://localhost:4000/chatbot', { history: newHistory });
      const botMessage = { type: 'bot', message: response.data.text };
      setHistory([...newHistory, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col h-screen max-w-2xl mx-auto border p-4 rounded shadow-lg">
        <div className="flex-grow overflow-y-auto mb-4">
          {history.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded max-w-xs ${
                msg.type === 'user'
                  ? 'bg-green-200 self-end'
                  : 'bg-gray-200 self-start'
              }`}
            >
              {msg.message}
            </div>
          ))}
        </div>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
