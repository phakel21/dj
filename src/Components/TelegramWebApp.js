import React, { useEffect, useState } from 'react';

const tele = window.Telegram.WebApp;


const TelegramWebApp = () => {
    const [id, setId] = useState('');
    const [isBot, setIsBot] = useState('');
    const [username, setUsername] = useState('');
    const [version, setVersion] = useState('');
   


    useEffect(() => {
        if (tele) {
            tele.ready();
            setVersion(tele.version);

            
    
            const user = tele.initDataUnsafe?.user;
    
            if (user) {
                setId(user.id);
                setUsername(user.username || 'No username available');
                
            } else {
                setUsername('No user information available');
            }


            tele.BackButton.show();

        } else {
            setUsername('Telegram WebApp is not available');
        }
    }, []);
    

    return (
        <div>
            <h1>Telegram User Info</h1>
            <p>
                <strong>Id:</strong> {id}
            </p>
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
