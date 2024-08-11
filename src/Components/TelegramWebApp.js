import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk'
// const tele = window.Telegram.WebApp


const TelegramWebApp = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {

        WebApp.ready();


        const user = WebApp.initDataUnsafe.user;
        if (user) {
            setUsername(user.username || 'No username availablev1');
        } else {
            setUsername('No user information availablev1');
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
