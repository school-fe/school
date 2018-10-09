import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

import './index.scss';

const { Row, Col } = Grid;

export default class FooterLinks extends Component {
  static displayName = 'FooterLinks';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.footerBox}>
        <Row align="center" className="footer-box">
          <Col span="11" className="footer-part">
            <div className="part-info">
              北京市中关村中学知春分校 版权所有©2009-2010{' '}
            </div>
            <a className="part-info" href="http://www.hdzgczx.bjedu.cn/">
              网址：http://www.hdzgczx.bjedu.cn/{' '}
            </a>
            <div className="part-info">
              校址：北京市海淀区科学院南路甲14号 电话：010-62563097
            </div>
            <div className="part-link">
              友情链接：
              <span>海淀区教委</span>
              <span>教育集团</span>
              <span>中关村中学分校</span>
              <span>兄弟院校</span>
            </div>
          </Col>
          <Col span="1" className="part-center" />
          <Col span="11" className="part-right">
            <div className="right-box">
              <img
                className="part-img"
                src={require('./images/code.png')}
                alt=""
              />
              <p>中关村中学知春分校微信公众账号 </p>
            </div>
            <div className="right-box">
              <img
                className="part-img"
                src={require('./images/code.png')}
                alt=""
              />
              <p>APP</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  footerBox: {
    backgroundColor: 'rgba(5, 78, 172, 0.8)',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: 'Tahoma,arial,Hiragino Sans GB,Microsoft Yahei',
    lineHeight: '1.6',
    boxSizing: 'border-box',
    paddingLeft: '50px 90px',
    height: '250px',
  },
};
