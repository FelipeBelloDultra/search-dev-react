import React from 'react';

import './style.css';

const ErrorInfo = (props) => {
  return (
    <div>
      <h3 className="error">{props.error}</h3>
    </div>
  );
};

export default ErrorInfo;
