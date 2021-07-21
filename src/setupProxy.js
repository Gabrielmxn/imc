const proxy = require('proxy-middleware');
//const process = require('process');

module.exports = app => {
  app.use("/randomNames", proxy('https://randomuser.me/api/'));

  app.use("/randomNames", (req,res,next) => {
    req.headers = { 
       ...req.headers,
       "my-header":"my header value"
    }
    console.log(res)
    return proxy("https://randomuser.me/api/")(req,res,next);
 });
 
};