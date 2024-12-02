import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/echo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });
            const data = await res.json();
            setResponse(data.echo);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Client-Server App</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSend}>Send</button>
            <p>Server Response: {response}</p>
        </div>
    );
}

export default App;
