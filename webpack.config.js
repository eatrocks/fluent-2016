var getConfig = require('hjs-webpack')

// hjs-webpack is configuring for us.
module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)'
})
