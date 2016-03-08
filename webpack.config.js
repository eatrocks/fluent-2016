var getConfig = require('hjs-webpack')

// hjs-webpack is configuring webpack for us.
module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)'
})
