import React, { Component } from 'react';
import { Slider } from '@icedesign/base';

import './index.scss';

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  slides = [
    {
      url: require('./images/slider1.png'),
      text: '1',
    },
    {
      url: require('./images/slider2.png'),
      text: '2',
    },
  ];

  render() {
    return (
      <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
        <Slider>
          {this.slides.map((item, index) => (
            <div key={index} className="slider-img-wrapper">
              <img src={item.url} alt={item.text} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '478px',
    overflow: 'hidden',
  },
};
