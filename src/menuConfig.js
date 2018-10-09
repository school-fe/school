// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
/**
 * 【首页】
【学校概况】：学校简介、发展历史、规章制度、校长致辞
【教学科研】：、教学研究、教育改革
【教师团队】：名师风采、团队建设
【党建园地】：团旗飘飘、党建工作
【学生社区】：艺术天地、体育健康
【招生招聘】: 学生招生、教师招聘
 */

const headerMenuConfig = [
  {
    name: '首页',
    path: '#',
  },
  {
    name: '学习概况',
    path: '#1',
    children: [
      { name: '学校简介', path: '/list' },
      { name: '发展历史', path: '/create' },
      { name: '规章制度', path: '/create' },
      { name: '校长致辞', path: '/create' },
      { name: '常见问题', path: '/create' },
    ],
  },
  {
    name: '教育园地',
    path: '#2',
  },

  {
    name: '教学科研',
    path: '#3',
    children: [
      { name: '教学研究', path: '/list' },
      { name: '教育改革', path: '/create' },
    ],
  },
  {
    name: '教师团队',
    path: '#4',
    children: [
      { name: '名师风采', path: '/list' },
      { name: '团队建设', path: '/create' },
    ],
  },
  {
    name: '党建工作',
    path: '#5',
    children: [
      { name: '名师风采', path: '/list' },
      { name: '团队建设', path: '/create' },
    ],
  },
  {
    name: '学生社区',
    path: '#6',
    children: [
      { name: '名师风采', path: '/list' },
      { name: '团队建设', path: '/create' },
    ],
  },
];

const asideMenuConfig = [];

export { headerMenuConfig, asideMenuConfig };
