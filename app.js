#!usr/bin/node
const http=require('http');
const url=require('url'),
      qs=require('querystring');
http.createServer((req,res)=>{
  console.log(`${req.method}${req.url}Http/${req.httpVersion}`)
  console.log(req.headers);
  var addr=url.parse(req.url).query;
  var rect=qs.parse(addr);
  var result={
    'area':Number(rect.width)*Number(rect.height),
    'perimeter':2*(Number(rect.width)+Number(rect.height))
  }
  //console.log(rect.width,rect,height);
  res.end('{"code":200,"reason":"请求成功","result":{"area"}}');
  res.end(JSON.stringify(result));
}).listen(8080);
