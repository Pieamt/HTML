import React from "react";

export default class CounterDisplay extends React.Component {
    render() {
       return <h1>This is my Counter: {this.props.count}</h1>
    }
}