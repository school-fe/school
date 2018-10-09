import React, { Component } from 'react';
import './index.scss';

export default class SlideBanner extends Component {
  static displayName = 'SlideBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  isSelected = selected => (selected ? ' selected' : '');

  onMouseEnter = event => {
    const { index } = event.currentTarget.dataset;
    const selectedIndex = parseInt(index, 10);
    if (!isNaN(selectedIndex)) {
      this.setState({
        selectedIndex,
      });
    }
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <div>
        <div className="hy-friends-title">学涯轨迹</div>
        <div className="hy-friends-list">
          <a
            href=""
            className={`hy-friends-item ${
              selectedIndex === 0 ? 'selected' : ''
            }`}
            data-index="0"
            onMouseEnter={this.onMouseEnter}
          >
            <img
              alt=""
              className="hy-friends-img"
              src={require('./images/slide1.jpg')}
            />
            <h4>
              明德尚行，矢志报国；磨砺青春，升华自我——记初一新生国防教育综合实践活动{' '}
            </h4>
            <span>25/09</span>
            <p />
            <img
              alt=""
              className="hy-friends-qr"
              src={require('./images/MhShJeukuJNkenGytSiq.svg')}
            />
          </a>

          <a
            href="#"
            className={`hy-friends-item ${
              selectedIndex === 1 ? 'selected' : ''
            }`}
            data-index="1"
            onMouseEnter={this.onMouseEnter}
          >
            <img
              alt=""
              className="hy-friends-img"
              src={require('./images/slide2.jpg')}
            />
            <h4>校园展军姿 国强我自强——记初二年级国防教育实践活动</h4>
            <span>25/09</span>
            <img
              alt=""
              className="hy-friends-qr"
              src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            />
          </a>
          <a
            href="#"
            className={`hy-friends-item ${
              selectedIndex === 2 ? 'selected' : ''
            }`}
            data-index="2"
            onMouseEnter={this.onMouseEnter}
          >
            <img
              alt=""
              className="hy-friends-img"
              src={require('./images/slide3.jpg')}
            />
            <h4>凝心聚力，再出发 ——知春分校开展全体教职工团建活动</h4>
            <span>25/09</span>
            <img
              alt=""
              className="hy-friends-qr"
              src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            />
          </a>

          <a
            href="#"
            className={`hy-friends-item ${
              selectedIndex === 3 ? 'selected' : ''
            }`}
            data-index="3"
            onMouseEnter={this.onMouseEnter}
          >
            <img
              alt=""
              className="hy-friends-img"
              src={require('./images/slide4.jpg')}
            />
            <h4>塑一代师表，育满园芬芳</h4>
            <span>25/09</span>
            <img
              alt=""
              className="hy-friends-qr"
              src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            />
          </a>
        </div>
      </div>
    );
  }
}
