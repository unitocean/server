const Koa = require('koa');
const Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
// const bodyParser = require('koa-bodyparser');


const server = new Koa();
const router = new Router();

router.get('/get' , async (ctx)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Content-Type', 'application/json');
    ctx.response.body='{test:true}';
});


router.post('/post' , async (ctx1)=>{
    ctx1.set('Access-Control-Allow-Origin', '*');
    ctx1.set('Access-Control-Allow-Methods', 'POST');
    ctx1.set('Content-Type', 'application/json');
    ctx1.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    console.log(ctx1.request);
    console.log(ctx1.request.body);
    ctx1.response.body='{test: loveurself}';
    console.log(ctx1.response.body);

});

// server.use(async (ctx, next)=> {
//     ctx.set('Access-Control-Allow-Origin', '*');
//     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     // if (ctx.method == 'OPTIONS') {
//     //   ctx.body = 200; 
//     // } else {
//       await next();
//     // }
//   });params


server.use(bodyParser());
server.use(router.routes());

server.listen(3000,()=>{console.log('start now')});