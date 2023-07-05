import React from 'react';
import Head from 'next/head';
import Chatbot from '../components/Chatbot';
import '../styles/globals.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Chatbot App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Chatbot />
      </main>
    </div>
  );
};

export default Home;