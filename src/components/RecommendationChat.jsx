import React, { useState } from 'react';
import axios from 'axios';

const RecommendationChat = () => {
  const [message, setMessage] = useState(''); // State to hold the user message
  const [response, setResponse] = useState(''); // State to hold the bot response
  const [loading, setLoading] = useState(false); // State to manage loading

  // Function to handle sending the message to the backend API
  const handleSendMessage = async () => {
    if (!message) {
      alert('Please enter a message');
      return;
    }

    setLoading(true);
    try {
      // Send POST request to Express server
      const result = await axios.post('http://localhost:5000/api/getRecommendation', {
        message,
        userId: 'user-123', // Replace with actual userId
      });

      // Store bot response
      setResponse(result.data.text);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Error fetching recommendation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with Bot</h2>
      
      <textarea
        className="w-full p-2 mb-4 border rounded"
        rows="4"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className={`w-full py-2 px-4 bg-blue-600 text-white rounded ${loading ? 'opacity-50' : ''}`}
        onClick={handleSendMessage}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">Bot Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default RecommendationChat;
