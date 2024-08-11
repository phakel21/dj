import React, { useEffect, useState } from 'react';

const tele = window.Telegram.WebApp;


const TelegramWebApp = () => {
    const [username, setUsername] = useState('');
    const [version, setVersion] = useState('');

    useEffect(() => {
        if (tele) {
            tele.ready();
            setVersion(tele.version);
    
            console.log("initDataUnsafe:", tele.initDataUnsafe); // Add this line to inspect the initDataUnsafe
    
            const user = tele.initDataUnsafe?.user;
            console.log("User Info:", user); // Add this line to inspect the user object
    
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
                <strong>Version:</strong> {version}
            </p>
            <p>
                <strong>Username:</strong> {username}
            </p>
        </div>
    );
};

export default TelegramWebApp;
