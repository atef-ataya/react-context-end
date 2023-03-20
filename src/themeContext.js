import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');
  const [username] = useState('ataya');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <Provider value={{ theme: theme, username, toggleTheme: toggleTheme }}>
      {props.children}
    </Provider>
  );
}

export { ThemeContextProvider, Consumer };
