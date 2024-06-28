import config from '../chat/config';
import MessageParser from '../chat/MessageParser';
import ActionProvider from '../chat/ActionProvider';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const Chat = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default Chat;