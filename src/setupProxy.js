const proxy = require('proxy-middleware');
const process = require('process');

module.exports = app => {
  app.use("/randomNames", proxy(process.env.REACT_BASEURL_API_RANDOM_NAMES));

  app.use("/randomNames", (req,res,next) => {
    req.headers = { 
       ...req.headers,
       "my-header":"my header value"
    }
    console.log(res)
    return proxy(process.env.REACT_BASEURL_API_RANDOM_NAMES)(req,res,next);
 });
 
};