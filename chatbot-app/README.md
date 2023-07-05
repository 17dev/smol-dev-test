# Chatbot Application

This is a chatbot application built with Next.js.

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The application uses the following environment variables:

- `API_URL`: The URL of the chatbot API.
- `BOT_TOKEN`: The token for the chatbot.

These variables are stored in the `.env.local` file.

## Components

The application includes the following components:

- `Chatbot`: The main chatbot component.
- `ChatMessage`: A component for displaying chat messages.
- `ChatInput`: A component for the chat input field.

## Styles

The styles for the components are in the `styles` directory. The CSS modules include classes like `.chatbot`, `.chatMessage`, and `.chatInput`.

## API

The chatbot API is in the `pages/api/chatbot.js` file.

## Dependencies

The application uses the following dependencies:

- `next`
- `react`
- `react-dom`
- `axios`
- `socket.io-client`

These dependencies are listed in the `package.json` file.

## Configuration

The configuration for the Next.js application is in the `next.config.js` file.

## Ignored Files

The `.gitignore` file lists the files and directories that should not be tracked by Git. This includes directories like `node_modules` and files like `.env.local`.