import React, { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';

const TelegramWebApp = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Ensure the Web App is ready
        WebApp.ready();

        // Access user information
        const user = WebApp.initDataUnsafe?.user;
        if (user) {
            setUsername(user.username || user.first_name || 'No username availablev2');
        } else {
            setUsername('No user information availablev2');
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
