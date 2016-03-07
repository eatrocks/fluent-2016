
// es5 version of root.js
var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
    render: function() {
        return <div>Hello, Fluent people</div>
    }
})

ReactDom.render(<Hello/>, document.body);

// es6
import React from 'react';
import {render} from 'react-dom';

const Hello = React.createClass({
    render () {
        return <div>Hello, Fluent peoples</div>
    }
});

render(<Hello/>, document.body);


//es 6 with classes - Henrik doesn't like it
import React, { Component } from 'react';
import { render } from 'react-dom';

const class Hello extends Component {
    render () {
        return <div>Hello, Fluent people</div>
    }
};

render(<Hello/>, document.body);
