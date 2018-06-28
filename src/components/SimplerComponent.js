// 1. In the `components/SimplerComponent.js` file, create a `SimplerComponent` component.
// 2. The component should be a "stateless functional" component.
// 3. It should render a `<div>` to the page that contains the text: "I am just happy".
// 4. It should receive one property called `handleClick` that performs some sort of action in response to a click — your choice!
import React from 'react';

const SimplerComponent = (props) => <div onClick={props.handleClick}>'I am just happy'</div>;

export default SimplerComponent;