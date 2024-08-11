import React, { useEffect, useState } from 'react';

const tele = window.Telegram.WebApp;


const TelegramWebApp = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {

        tele.ready();


        const user = tele.initDataUnsafe?.user;

        setUsername(user.username);


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
