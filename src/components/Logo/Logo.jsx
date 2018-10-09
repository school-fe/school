import React, { Component } from 'react';

const LIGHT = require('./images/logo.jpeg');
const DARK = require('./images/logo.jpeg');

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo"
        style={{
          height: 50,
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="322" height="50" alt="logo" />
        </a>
      </div>
    );
  }
}
