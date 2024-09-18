import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, waitFor, screen } from '@testing-library/react'
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Chatbox from './components/Chatbox';

// Mock the fetch API call
global.fetch = jest.fn();
window.HTMLElement.prototype.scrollIntoView = jest.fn();
const container = document.createElement('div');  // Create a div testing-container for
const root = createRoot(container);

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
    localStorage.setItem('authToken', 'mocked-token-value');
  });


test('renders without crashing', async () => {              // Use createRoot() from react-dom/client
  await act(async () => {
    root.render(<BrowserRouter><App /></BrowserRouter>);
  });                  // Render the app into the test container
});

test('renders Chatbox without crashing', async () => {              // Use createRoot() from react-dom/client
  await act(async () => {
    root.render(<BrowserRouter>
      <App>
        <Chatbox />
      </App>
      </BrowserRouter>);
  });                  // Render the app into the test container
});

test('handles 404 error from fetch', async () => {
  // Simulate a 404 error response from the fetch API
  global.fetch.mockResolvedValueOnce({
    ok: false,
    status: 404,
    json: async () => ({ message: 'Not Found' }),
  });
})

test('handles 500 error when sending a message', async () => {
  // Simulate a 500 error response from the fetch API when sending a message
  global.fetch.mockResolvedValueOnce({
    ok: false,
    status: 500,
    json: async () => ({ message: 'Internal Server Error' }),
  });

  await act(async () => {
    root.render(<BrowserRouter>
      <Chatbox />
    </BrowserRouter>);
  });

  // Find the input and submit button by data-testid
  const messageInput = document.getElementById("messages-container"); // Using data-testid
  console.log(messageInput)
  const sendButton = screen.getByTestId('message-submit');

  // Simulate typing a message and clicking the send button
  fireEvent.change(messageInput, { target: { value: 'Hello' } });
  fireEvent.click(sendButton);

  // Check if fetch was called when the message was sent
  expect(fetch).toHaveBeenCalledTimes(1);

  // Check for error handling in the UI (e.g., error message display)
  await waitFor(() =>
    expect(screen.getByText(/internal server error/i)).toBeInTheDocument()
  );
});
