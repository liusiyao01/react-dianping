var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
    this.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
    // 参数
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    this.body = homeListData;
});

// 选择城市页面 —— 城市列表
var cityList = require('./city/city');
router.get('/api/citylist', function *(next) {
    this.body = cityList;
});

var searchResult = require('./search/search');
// 搜索结果页 —— 三个参数的情况
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    const params = this.params;
    const page = params.page;
    const city = params.city;
    const category = params.category;
    const keyword = params.keyword;

    console.log('当前页数：' + page);
    console.log('当前城市：' + city);
    console.log('当前种类：' + category);
    console.log('当前关键字：' + keyword);

    this.body = searchResult;
});
// 搜索结果页 —— 两个个参数的情况
router.get('/api/search/:page/:city/:category', function *(next) {
    const params = this.params;
    const page = params.page;
    const city = params.city;
    const category = params.category;

    console.log('当前页数：' + page);
    console.log('当前城市：' + city);
    console.log('当前种类：' + category);

    this.body = searchResult;

});

// 详情页 —— 商户详情
var detailInfo = require('./detail/info');
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 商户信息');

    const params = this.params;
    const id = params.id;

    console.log('商户id: ' + id);

    this.body = detailInfo;
});

// 详情页 —— 用户评论
var detailComments = require('./detail/comments');
router.get('/api/detail/comments/:page/:id', function *(next) {
    console.log('详情页 - 用户点评');

    const params = this.params;
    const page = params.page;
    const id = params.id;

    console.log('商户id: ' + id);
    console.log('当前页数: ' + page);

    this.body = detailComments;
});


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
