import React from 'react';

function Error({ error }) {
  return (
    <div className="error">
      <h2>Error</h2>
      <p>{error}</p>
    </div>
  );
}

export default Error;