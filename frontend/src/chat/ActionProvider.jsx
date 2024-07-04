import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, state, children }) => {
  const getResponse = async (botMessage) => {
    const url = 'http://localhost:4000/chatbot';
    const data = {
      history: state.messages,
      message: botMessage,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const generatedMessage = result.text;
      const botMessage = createChatBotMessage(generatedMessage);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            getResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
