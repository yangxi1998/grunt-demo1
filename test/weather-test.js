const expect=require('chai').expect;
describe('天气预报接口测试套件',function(){
  it('石家庄的天气',function(){
    //3A  准备 行动 断言
    const http=require('http'),
          url=require('url');

      var city = process.argv[2] || '石家庄';
      var addr = 'http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260'/*自己申请的key值*/;

      http.get(url.parse(global.encodeURI(addr)), (res) => {
         var result = '';

        res.on('data', (data) => {
        result += data.toString('utf8');
                                
                        
        });

        res.on('end', () => {
            expect(result);//对字符串进行判断
            var weather=JSON.parse(result);
            expect(weather.resultcode).to.be.equal(200); //输出结果判断
           });


      });

  })
})
