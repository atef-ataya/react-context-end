import React from 'react';
import './theme.css';
import { Consumer } from './themeContext';

function Header() {
  return (
    <Consumer>
      {(context) => (
        <header className="header">
          <h1>My App</h1>
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        </header>
      )}
    </Consumer>
  );
}

export default Header;
