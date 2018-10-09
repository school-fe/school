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

  onMouseEnter = (event) => {
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
      <div className="hy-friends-list">
        <a
          href=""
          className={`hy-friends-item ${selectedIndex === 0 ? 'selected' : ''}`}
          data-index="0"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            alt=""
            className="hy-friends-img"
            src={require('./images/slide1.jpg')}
          />
          <h4>明德尚行，矢志报国；磨砺青春，升华自我——记初一新生国防教育综合实践活动 </h4>
          <span>25/09</span>
          <p>
            9月1日上午，全体初一新生在学校操场举行开营仪式。祁建欣校长、李梅副校长、刘伟力主任、王磊副主任、年级组长张晓鸥老师、各班班主任、全体教官和同学们出席了本次仪式。仪式上，刘伟力主任代表学校致辞，强调了国防教育实践活动的重要意义，给同学们提出了三项要求，对同学们这五天的军训寄予了厚望。军训教官队长、学生代表也发表了讲话，表达了对本次教育实践活动的期待和信心。
          </p>
          <img
            alt=""
            className="hy-friends-qr"
            src={require('./images/MhShJeukuJNkenGytSiq.svg')}
          />
        </a>

        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 1 ? 'selected' : ''}`}
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
          <p>
            中关村中学知春分校初二年级的国防教育实践，于秋高气爽的8月27日上午开始了，开营仪式上，校领导对我们寄予厚望，初二六班王昱泽同学代表所有同学表示：在四天的军训生活中，我们一定坚持不懈，努力克服困难，虚心向教官学习，认真训练，在训练中绝不消极懈怠。
          </p>
          <img
            alt=""
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
          />
        </a>

        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 2 ? 'selected' : ''}`}
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
          <p>
            暑散凉生，辞夏迎秋，新学期如约而至。8月30日上午，知春分校携手中科启智培训团队举行了主题为“凝心聚力，再出发”的团队建设活动。3个小时的体验式培训，老师们入情入境，或开怀大笑，或潜心思索，收获良多。。
          </p>
          <img
            alt=""
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
          />
        </a>

        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 3 ? 'selected' : ''}`}
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
          <p>
            2018年9月10日，知春分校大门口，一个别致的气球门。五彩的气球在晨曦中摇曳，犹如老师们殷殷的叮咛。学生手捧鲜花为老师送上节日的问候与深情的拥抱。祁建欣校长带领校领导盛装亮相，站成一排，迎接9月10日的阳光和老师们。爱上一所学校，可能因为某位老师。
          </p>
          <img
            alt=""
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
          />
        </a>
      </div>
    );
  }
}
