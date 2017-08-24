var fs = require('fs'),
    express = require('express'),
    exphbs  = require('express-handlebars'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    root = __dirname + '/css',
    app = express(),
    server = http.Server(app),
    helpers = require(__dirname + '/helpers.js');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
    res.render('home', {
      title: process.env.TITLE,
      description: process.env.DESCRIPTION,
      project_name: process.env.PROJECT_DOMAIN
    });
});

app.get('/image', function (req, res) {
  var r = request.get(`https://screenshot.glitch.me/?url=https://${process.env.PROJECT_DOMAIN}.glitch.me`, function(err, resp, body){
    if (err){
      console.log('users.admin.setInactive ERROR', err);
    }
    else{
      var body_json = JSON.parse(body)

    var img = new Buffer(body_json.screenshot.data, 'base64');

     res.writeHead(200, {
       'Content-Type': 'image/png',
       'Content-Length': img.length
     });
     res.end(img); 
    }
  });
});

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3011);
app.set('ip', '127.0.0.1');

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is running on port ' + listener.address().port);
  // console.log(helpers.random_from_array([1,2,3]));  
});
