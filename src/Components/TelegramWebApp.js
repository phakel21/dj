import React, { useEffect, useState } from 'react';

const TelegramWebApp = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Access the WebApp object from the global window object
        const tele = window.Telegram.WebApp;

        // Check if the Telegram WebApp SDK is available
        if (tele) {
            // Ensure the Web App is ready
            tele.ready();

            // Access user information
            const user = tele.initDataUnsafe?.user;
            if (user) {
                setUsername(user.username || user.first_name || 'No username available');
            } else {
                setUsername('No user information available');
            }
        } else {
            setUsername('Telegram WebApp is not available');
        }
    }, []);

    return (
        <div>
            <h1>Telegram User Info</h1>
            <p>
                <strong>Username:</strong> {username}
            </p>
        </div>
    );
};

export default TelegramWebApp;
