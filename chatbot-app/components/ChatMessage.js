import React from 'react';
import styles from '../styles/ChatMessage.module.css';

const ChatMessage = ({ message }) => {
  return (
    <div className={styles.chatMessage}>
      <p className={styles.sender}>{message.sender}</p>
      <p className={styles.content}>{message.content}</p>
      <p className={styles.timestamp}>{new Date(message.timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default ChatMessage;