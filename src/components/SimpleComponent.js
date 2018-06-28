// The specs for our `SimpleComponent` are as follows:
// 1. In the `components/SimpleComponent.js` file, create a `SimpleComponent` component.
// 2. The component should be declared as a class (instance of `Component`) so that it can carry state.
// 3. The component should have a state property called `mood` that has a default value of `happy`.
// 4. The component should simply render its current `mood` state to the page in a div.
// 5. The component should implement a `handleClick` function that can serve as a callback to the `<div>`'s click event. When clicked, the component's mood should toggle between `happy` and `sad` states.

import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = e => {
        const value = e.target.innerHTML;
        this.setState({
            mood: value === 'sad' ? 'happy' : 'sad'
        })
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
    
};

export default SimpleComponent;