import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleDivClick = (e) => {e.target.innerHTML = 'DONT TOUCH ME!!'}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleDivClick} />
  </div>,
  document.getElementById('root')
);