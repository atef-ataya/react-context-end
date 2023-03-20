import React from 'react';
import './theme.css';
import Message from './Message';
import { Consumer } from './themeContext';

function Content() {
  return (
    <Consumer>
      {(context) => (
        <div className={`theme-${context.theme}`}>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            lobortis eros, quis consequat ipsum. Praesent elementum enim vitae
            augue commodo, sit amet tincidunt eros varius. Nunc euismod ipsum
            nec ligula accumsan aliquet. Praesent pulvinar consequat est, vel
            hendrerit nunc eleifend at.
          </p>
          <Message theme={context.theme} />
        </div>
      )}
    </Consumer>
  );
}

export default Content;
