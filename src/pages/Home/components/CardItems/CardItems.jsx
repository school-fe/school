import React, { Component } from 'react';
import { Icon } from '@icedesign/base';

export default class CardItems extends Component {
  static displayName = 'CardItems';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.hyThirdPartyWrapper}>
        <div style={styles.hyThirdParty}>
          <h3 style={styles.hyThirdPartyTitle}>
            现场直击
            <a style={styles.thirdPartyMore} href="#">
              更多
              <Icon
                type="arrow-double-right"
                size="xs"
                style={{ marginLeft: '8px' }}
              />
            </a>
          </h3>

          <div style={styles.thirdPartyDetails}>
            <div style={styles.thirdPartyDetail}>
              <div
                style={{
                  ...styles.thirdPartyDetailItem,
                  ...styles.thirdPartyDetailItemFirst,
                }}
              >
                <img
                  style={styles.thirdPartyDetailImg}
                  src={require('./images/party1.jpg')}
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>发现，改变就在身边</h5>
                <p style={styles.thirdPartyDesc}>
                  8月25日至26日，北京市中关村中学知春分校隆重举行
                  “2018年教育教学年会”...
                </p>
                <p style={styles.thirdPartyTime}>2018-09-05</p>
              </div>

              <div style={styles.thirdPartyDetailItem}>
                <img
                  style={styles.thirdPartyDetailImg}
                  src={require('./images/party2.jpg')}
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>初一国防教育综合实践活动</h5>
                <p style={styles.thirdPartyDesc}>
                  少年强则国强，中国强则中国少年更强”。知春分校的少年们，用五天，
                  向自己证明了他们远比自己想象的要坚强，向家长证明了他们不再是依
                  恋温柔乡的稚子，同时也向学校证明了他们终没有辜负学校所望，圆满
                  完成成长蜕变，成为了知春分校新一届的骄傲！
                </p>
                <p style={styles.thirdPartyTime}>2018-09-22</p>
              </div>

              <div style={styles.thirdPartyDetailItem}>
                <img
                  style={styles.thirdPartyDetailImg}
                  src={require('./images/party3.jpg')}
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>初二国防教育综合实践活动</h5>
                <p style={styles.thirdPartyDesc}>
                  中关村中学知春分校初二年级的国防教育实践，于秋高气爽的8月27日上午开始了，
                  开营仪式上，校领导对我们寄予厚望，为了增强班级的凝聚力，增进同学之间的合作，
                  初二年级还组织了丰富多彩的团建活动。
                </p>
                <p style={styles.thirdPartyTime}>2018-09-22</p>
              </div>

              <div
                style={{
                  ...styles.thirdPartyDetailItem,
                  ...styles.thirdPartyDetailItemLast,
                }}
              >
                <img
                  style={styles.thirdPartyDetailImg}
                  src={require('./images/party4.jpg')}
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>塑一代师表，育满园芬芳</h5>
                <p style={styles.thirdPartyDesc}>
                  2018年9月10日，知春分校大门口，一个别致的气球门。
                  五彩的气球在晨曦中摇曳，犹如老师们殷殷的叮咛。
                  学生手捧鲜花为老师送上节日的问候与深情的拥抱。
                  祁建欣校长带领校领导盛装亮相，站成一排，迎接
                  9月10日的阳光和老师们。
                </p>
                <p style={styles.thirdPartyTime}>2018-09-10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  hyThirdPartyWrapper: {
    background: 'rgba(255, 255, 255, 0.18)',
    padding: '0',
    margin: 'auto',
  },
  hyThirdParty: {
    paddingTop: '47px',
    paddingBottom: '40px',
    textAlign: 'center',
    margin: '0 auto',
  },
  hyThirdPartyTitle: {
    position: 'relative',
    fontFamily: 'Microsoft YaHei',
    fontSize: '26px',
    fontWeight: 'bold',
    lineHeight: '40px',
    color: '#999',
    verticalAlign: 'middle',
    marginBottom: '40px',
  },
  thirdPartyMore: {
    position: 'absolute',
    paddingRight: '90px',
    right: '0',
    top: '12px',
    color: '#108ee9',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    textDecoration: 'none',
  },
  thirdPartyDetails: {
    position: 'relative',
    height: '500px',
    margin: '0',
    padding: '0',
  },
  thirdPartyDetail: {
    zIndex: '0',
    fontSize: '0',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    display: 'block',
    WebkitTransition: 'opacity .3s linear',
    transition: 'opacity .3s linear',
  },
  thirdPartyDetailItem: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '285px',
    height: '480px',
    borderRadius: '2px 2px 0 0',
    margin: '0 10px',
    border: '1px solid #eaeaea',
    boxSizing: 'border-box',
    WebkitTransition: '-webkit-transform .2s linear',
    transition: 'transform .2s linear,\n-webkit-transform .2s linear',
  },
  thirdPartyDetailItemFirst: {
    marginLeft: '0',
  },
  thirdPartyDetailItemLast: {
    marginRight: '0',
  },
  thirdPartyDetailImg: {
    width: '285px',
    height: '250px',
    borderRadius: '2px 2px 0 0',
    position: 'relative',
    left: '-1px',
    border: '0',
  },
  thirdPartyName: {
    marginTop: '20px',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#333',
    fontWeight: '600',
  },
  thirdPartyTime: {
    fontSize: '12px',
    color: 'rgba(153,153,153,1)',
  },
  thirdPartySold: {
    fontSize: '14px',
    color: '#333',
    lineHeight: '20px',
  },
  thirdPartySoldNumber: {
    color: '#108ee9',
    fontWeight: '500',
  },
  thirdPartyDesc: {
    margin: '14px 15px 0',
    color: '#333',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '20px',
    height: '120px',
  },
  thirdPartyLink: {
    marginTop: '15px',
    display: 'inline-block',
    padding: '5px 37px',
    fontSize: '14px',
    color: '#108ee9',
    border: '1px solid #108ee9',
    borderRadius: '4px',
    WebkitTransition: 'all .2s linear',
    transition: 'all .2s linear',
  },
};
