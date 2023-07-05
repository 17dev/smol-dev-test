import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import styles from '../styles/Chatbot.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (content) => {
    const message = { content, sender: 'user' };
    setMessages([...messages, message]);

    const response = await axios.post('/api/chatbot', { content });
    const botMessage = { content: response.data, sender: 'bot' };
    setMessages([...messages, message, botMessage]);
  };

  useEffect(() => {
    const greeting = { content: 'Hello! How can I assist you today?', sender: 'bot' };
    setMessages([greeting]);
  }, []);

  return (
    <div className={styles.chatbot}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default Chatbot;