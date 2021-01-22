import React, { useState } from 'react';

export const ErrorContext = React.createContext();

const withErrorWrapper = (Component) => (props) => {
  const [error, setError] = useState('');
  return (
    <ErrorContext.Provider value={setError}>
      {error}
      <Component {...props} />
    </ErrorContext.Provider>
  );
};

export default withErrorWrapper;
