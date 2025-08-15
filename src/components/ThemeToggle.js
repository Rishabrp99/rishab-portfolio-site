import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ onThemeChange }) => {
  const [isDay, setIsDay] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'day') {
      setIsDay(true);
      onThemeChange('day');
    }
  }, [onThemeChange]);

  const handleToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = !isDay;
    setIsDay(newTheme);
    
    // Save preference
    localStorage.setItem('portfolio-theme', newTheme ? 'day' : 'night');
    
    // Notify parent component
    onThemeChange(newTheme ? 'day' : 'night');
    
    // Reset animation state
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="theme-toggle-container">
      <button
        className={`theme-toggle ${isDay ? 'day' : 'night'} ${isAnimating ? 'animating' : ''}`}
        onClick={handleToggle}
        aria-label={`Switch to ${isDay ? 'night' : 'day'} theme`}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            {isDay ? (
              <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle; 