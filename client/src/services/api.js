const API_URL = 'http://localhost:4000/api';

export const sendMessage = async (message) => {
    const response = await fetch(`${API_URL}/echo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    return response.json();
};
