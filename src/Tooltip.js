import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    const position = this.props.position;
    
    return (
      <div className={`tooltip ${position}`}>
          Hey I am tooltip!
      </div>
    )
  }
}
