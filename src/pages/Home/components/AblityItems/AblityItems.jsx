import React, { Component } from 'react';
import { Icon, Grid } from '@icedesign/base';
import IceTitle from '@icedesign/title';

import './index.scss';

const { Row, Col } = Grid;

let timer = null;

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
    };
  }

  newsSource = [
    {
      id: 1,
      time: '22/09',
      content:
        '明德尚行，矢志报国；磨砺青春，升华自我——记初一新生国防教育综合实践活动 ',
      subContent:
        ' 9月1日上午，全体初一新生在学校操场举行开营仪式。祁建欣校长、李梅副校长、刘伟力主任、王磊副主任、年级组长张晓鸥老师、各班班主任、全体教官和同学们出席了本次仪式。仪式上，刘伟力主任代表学校致辞，强调了国防教育实践活动的重要意义，给同学们提出了三项要求，对同学们这五天的军训寄予了厚望。军训教官队长、学生代表也发表了讲话，表达了对本次教育实践活动的期待和信心。',
    },
    {
      id: 2,
      time: '21/09',
      content: '校园展军姿 国强我自强——记初二年级国防教育实践活动 ',
      subContent:
        '中关村中学知春分校初二年级的国防教育实践，于秋高气爽的8月27日上午开始了，开营仪式上，校领导对我们寄予厚望，初二六班王昱泽同学代表所有同学表示：在四天的军训生活中，我们一定坚持不懈，努力克服困难，虚心向教官学习，认真训练，在训练中绝不消极懈怠。在这四天的国防教育实践活动中，同学们表现非常棒，带病坚持的、因为动作不标准而自己加练的、向教官虚心请教的……校园处处可见孩子们积极训练的身影。',
    },
    {
      id: 3,
      time: '09/09',
      content: '凝心聚力，再出发 ——知春分校开展全体教职工团建活动 ',
      subContent:
        '暑散凉生，辞夏迎秋，新学期如约而至。8月30日上午，知春分校携手中科启智培训团队举行了主题为“凝心聚力，再出发”的团队建设活动。3个小时的体验式培训，老师们入情入境，或开怀大笑，或潜心思索，收获良多。。',
    },
    {
      id: 4,
      time: '10/09',
      content: '塑一代师表，育满园芬芳 ',
      subContent:
        '2018年9月10日，知春分校大门口，一个别致的气球门。五彩的气球在晨曦中摇曳，犹如老师们殷殷的叮咛。学生手捧鲜花为老师送上节日的问候与深情的拥抱。祁建欣校长带领校领导盛装亮相，站成一排，迎接9月10日的阳光和老师们。爱上一所学校，可能因为某位老师。恋上一个单位，可能因为浓浓的人情味与共同的价值追求。“使命共同体”让学生、老师、领导一起为知春分校的明天，努力。',
    },
    {
      id: 5,
      time: '09/09',
      content: '知春分校四少年勇夺全国机器人竞赛一等奖 ',
      subContent:
        '经过一年的区、市级比赛和最后的选拔赛，知春分校机器人代表队的孩子们获得了今年在贵阳贵州大学举办的第十八届中国青少年机器人竞赛FLL机器人工程挑战赛初中组的入场券。今年的比赛主题是“细水长流”，知春分校机器人代表队的四名队员：田三甲、谢孟晗、孙晟、杜嘉，都是当时新初一的孩子，他们充满对研究的热情和对机器人的喜爱，在社团老师的带领下，四名队员先一起针对主题定下了项目研究的方向，然后分析场地任务、搭建车体、设计测略物，孩子们享受着思想的碰撞和智慧的交流的过程。',
    },
    {
      id: 6,
      time: '09/09',
      content: '凝心聚力，再出发 ——知春分校开展全体教职工团建活动 ',
      subContent:
        '暑散凉生，辞夏迎秋，新学期如约而至。8月30日上午，知春分校携手中科启智培训团队举行了主题为“凝心聚力，再出发”的团队建设活动。3个小时的体验式培训，老师们入情入境，或开怀大笑，或潜心思索，收获良多',
    },
  ];

  researchSource = [
    {
      id: 11,
      time: '20/09',
      imageUrl: require('./images/study1.jpg'),
      content:
        '明德尚行，矢志报国；磨砺青春，升华自我——记初一新生国防教育综合实践活动 ',
      subContent:
        '9月1日上午，全体初一新生在学校操场举行开营仪式。祁建欣校长、李梅副校长、刘伟力主任、王磊副主任、年级组长张晓鸥老师、各班班主任、全体教官和同学们出席了本次仪式。仪式上，刘伟力主任代表学校致辞，强调了国防教育实践活动的重要意义，给同学们提出了三项要求，对同学们这五天的军训寄予了厚望。军训教官队长、学生代表也发表了讲话，表达了对本次教育实践活动的期待和信心。',
    },
    {
      id: 12,
      time: '10/09',
      imageUrl: require('./images/study2.jpg'),
      content: '塑一代师表，育满园芬芳 ',
      subContent:
        '2018年9月10日，知春分校大门口，一个别致的气球门。五彩的气球在晨曦中摇曳，犹如老师们殷殷的叮咛。学生手捧鲜花为老师送上节日的问候与深情的拥抱。祁建欣校长带领校领导盛装亮相，站成一排，迎接9月10日的阳光和老师们。爱上一所学校，可能因为某位老师。恋上一个单位，可能因为浓浓的人情味与共同的价值追求。“使命共同体”让学生、老师、领导一起为知春分校的明天，努力。',
    },
    {
      id: 13,
      time: '09/09',
      imageUrl: require('./images/study3.jpg'),
      content: '凝心聚力，再出发 ——知春分校开展全体教职工团建活动 ',
      subContent:
        '暑散凉生，辞夏迎秋，新学期如约而至。8月30日上午，知春分校携手中科启智培训团队举行了主题为“凝心聚力，再出发”的团队建设活动。3个小时的体验式培训，老师们入情入境，或开怀大笑，或潜心思索，收获良多',
    },
    {
      id: 14,
      time: '05/09',
      imageUrl: require('./images/study4.jpg'),
      content: '发现，改变就在身边 ',
      subContent:
        '8月25日至26日，北京市中关村中学知春分校隆重举行“2018年教育教学年会”，本届教育教学年会内容丰厚、形式多样；理论引领、实操展现。有专家的唤醒，有老师们自身的觉醒；有优秀者的榜样示范，有求知者的暗中颔首；有个体的声入心通，有集体的合作共情。大会由科研培训中心刘燕主任主持，苏纾校长、祈建欣校长列席会议。',
    },
    {
      id: 15,
      time: '19/07',
      imageUrl: require('./images/study5.jpg'),
      content: '教育：追求更亮丽的风景 ',
      subContent:
        '2018年7月11-12日， 在学校报告厅召开高中教学研讨会，中关村中学（含知春分校）全体高中干部教师参加。会议主题是“教育：追求更亮丽的风景”，旨在总结一年的高中教学工作，引领大家在教育变革背景下，深入研究，不断创新。',
    },
    {
      id: 16,
      time: '11/07',
      imageUrl: require('./images/study6.jpg'),
      content: '开卷酣忆 寄言拨志——记2018届初三毕业典礼 ',
      subContent:
        '夏来蝉嘹人。2017年7月5日，知春校园内的阶梯教室情意蒸腾，“煌煌少年志 殷殷桃李情”——2018届初三毕业典礼，在同学们一声声“你还记得吗”的前奏中，拉开了帷幕。执行校长祁建欣带着领导干部和所有初三教师参加了毕业典礼，热情的学生家长们也冒着暑热来到了学校。',
    },
  ];

  onMouseEnter = event => {
    const { index } = event.currentTarget.dataset;
    timer = setTimeout(() => {
      const selectedIndex = parseInt(index, 10);
      if (!isNaN(selectedIndex)) {
        this.setState({
          selectedIndex,
        });
      }
    }, 300);
  };

  onMouseLeave = () => {
    clearTimeout(timer);
    this.setState({
      selectedIndex: null,
    });
  };

  subtitleNode = (
    <a href="#">
      更多
      <Icon type="arrow-double-right" size="xs" style={{ marginLeft: '8px' }} />
    </a>
  );

  render() {
    const { selectedIndex } = this.state;
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <Row className="demo-row" align="top">
          <Col span="11">
            <IceTitle
              text="通知公告     NEWS"
              subtitle={this.subtitleNode}
              link="#"
              decoration
            />
            <div>
              {this.newsSource.map((item, index) => {
                return (
                  <div
                    className="list-item"
                    key={index}
                    style={style.listItem}
                    data-index={item.id}
                  >
                    <div>{item.time}</div>
                    <div className="item-content">
                      <div className="item-content-title">{item.content}</div>
                      <div className="item-suncontent">{item.subContent}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col span="1" />
          <Col span="12">
            <IceTitle
              text="教学科研     teaching research"
              subtitle={this.subtitleNode}
              link="#"
              decoration
            />
            <div>
              {this.researchSource.map((item, index) => {
                return (
                  <div
                    className="list-item"
                    key={index}
                    style={style.listItemColumn}
                    data-index={item.id}
                  >
                    <div className="content-second">
                      <div className="content-second-title">{item.content}</div>
                      <div className="content-second-time">{item.time}</div>
                    </div>
                    <div className="item-content-img">
                      <img alt="" className="content-img" src={item.imageUrl} />
                      <div className="item-info">
                        <div className="content-title">{item.content}</div>
                        <div className="content-desc">{item.subContent}</div>
                        <div className="info-time">{item.time}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    background: '#fff',
    padding: '20px 90px 50px',
  },
  listItem: {
    display: 'flex',
  },
  listItemColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
};
