import React, { Component } from 'react';
import { render } from 'react-dom';

const class Hello extends Component {
    render () {
        return <div>Hello, Fluent people</div>
    }
};

render(<Hello/>, document.body);
