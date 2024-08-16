import React, { useState, useEffect } from 'react';

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; 
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; 

    document.body.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 5000); 
  }

  setInterval(createSnowflake, 300); 

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode(prevMode => !prevMode)}>
      Dark mode
    </button>
  );
};

