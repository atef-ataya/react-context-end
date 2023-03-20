import React from 'react';
import './theme.css';
import { Consumer } from './themeContext';

function Main() {
  return (
    <Consumer>
      {(context) => (
        <div className={`theme-${context.theme}`}>
          <h1>Main</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            lobortis eros, quis consequat ipsum. Praesent elementum enim vitae
            augue commodo, sit amet tincidunt eros varius. Nunc euismod ipsum
            nec ligula accumsan aliquet. Praesent pulvinar consequat est, vel
            hendrerit nunc eleifend at.
          </p>
        </div>
      )}
    </Consumer>
  );
}

export default Main;
