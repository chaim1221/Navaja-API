var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var port = process.env.PORT || 8080;

router.get('/', function(request, response) {
    response.json({ message: 'successful GET on port ' + port });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);
