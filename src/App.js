import React from 'react';
import Header from './Header';
import Content from './Content';
import Main from './Main';
import './theme.css';
import { Consumer } from './themeContext';

function App() {
  return (
    <Consumer>
      {(context) => (
        <div className={`app ${context.theme}`}>
          <Header />
          <Main />
          <Content />
        </div>
      )}
    </Consumer>
  );
}

export default App;
