import React from 'react';


const ActionProvider = ({ createChatBotMessage, setState, state, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const getResponse = async (botMessage) => {
      const url = 'http://localhost:4000/chatbot';
      const data = {
          history: state.messages,
          message: botMessage,
      }
  
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const responseData = await response.json();
          console.log(responseData); // Handle the response data
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
