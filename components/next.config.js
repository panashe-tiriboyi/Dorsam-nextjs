// next.config.js

const withCss = require("@zeit/next-sass");
module.exports = withCss({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
  cssModules: true,
});
