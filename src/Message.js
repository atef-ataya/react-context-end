import React from 'react';
import './theme.css';
import { Consumer } from './themeContext';

function Message() {
  return (
    <Consumer>
      {(context) => (
        <div className={`theme-${context.theme}`}>
          <h1>Message</h1>
          <h2>User is: {context.username}</h2>
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

export default Message;
