
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
// class methods are not automatically bound to the this - so people do that manually
import React, { Component } from 'react';
import { render } from 'react-dom';

const class Hello extends Component {
    render () {
        return <div>Hello, Fluent people</div>
    }
};
render(<Hello/>, document.body);

 // stateless functional components - kills hot loading but still his favorite
import React, { Component } from 'react'
import { render } from 'react-dom'
// props come in however you name them
// parens around function do an implied return.
// change to curlies to add logic (and return statement)
const Hello = ({name}) =>  (
    <div>Hello, Fluent {name}</div>
)
render(<Hello name='fluent'/>, document.body)
