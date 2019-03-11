//接口
const domainHost = 'http://www.noahzhou.com/'//网站域名
const host = 'http://api.noahzhou.com/'//资源域名
const homeList = '/api/home/homeList'//首页帖子列表
const userInfo = '/api/base/userInfo'//个人信息 网站配置 友情链接 广告
const labels = '/api/article/labels'//标签
const books = '/api/article/books'//书籍
const articleDetails = '/api/article/details'//文章详情接口
const autho = '/api/autho/autho'//第三方登录授权接口地址
const memberInfo = '/api/user/memberInfo'//第三方登录授权接口地址
const discussList = '/api/discuss/discuss'//获取文章评论的接口
const discussPresent = '/api/discuss/discussPresent'//评论接口地址
const courseList = '/api/course/courseList'//所有教程接口列表
const courseArticeList = '/api/course/courseArticeList'//获取初始化教程下面的目录列表

export default {
  domainHost,
  host,
  homeList,
  userInfo,
  labels,
  books,
  articleDetails,
  autho,
  memberInfo,
  discussList,
  discussPresent,
  courseList,
  courseArticeList
}
