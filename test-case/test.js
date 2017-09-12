var gm = require('../');

gm('test.png')
.resize(800, 600)
.autoOrient()
.fill('#FF00FF')
.font("Gothic821CondensedBT-Regular.otf",50)
.drawText(100,100,"Hello Word")
.drawRotatedText(50, 250,-10,"rotated Hello Word")
.write("out.png", function (err) {
  if( err ) throw err;
  console.log(' hooray! ');

});
