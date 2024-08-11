import React, { useEffect, useState } from 'react';

const tele = window.Telegram.WebApp


const TelegramWebApp = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        
    
            const user = tele.initDataUnsafe.user;
            if (user) {
                setUsername(user.username || 'No username available');
            } else {
                setUsername('No user information available');
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
