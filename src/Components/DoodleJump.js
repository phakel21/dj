import React, { useEffect } from 'react';

const DoodleJump = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/doodlejump.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="doodle-jump-container">
      <canvas id="board"></canvas>
    </div>
  );
}

export default DoodleJump;
