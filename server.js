var express = require('express');
var bodyParser = require('body-parser');
var EmployerProfile = require('./domain/employer/profile.js');

var port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
router.use(function(request, response, next) {
    console.log('Something is happening.');
    next();
});
router.get('/', function(request, response) {
    response.json({ message: 'test successful (200)' });
});

router.route('/employer')
    .post(function(request, response) {
        var employerProfile = new EmployerProfile(request.body);
        // not writing to database right now just writing output:
        console.log(employerProfile);
        response.json(employerProfile);
    })
    .get(function(request, response) {
        var data = {
            id: 0,
            returnCustomer: true,
            receiveUpdates: true,
            name: "Fake Employer",
            password: "plaintext",
            active: true
        }
        var employerProfile = new EmployerProfile(data);
        // not writing to database right now just writing output:
        console.log(employerProfile);
        response.json(employerProfile);
    });

app.use('/api', router);
app.listen(port);
console.log('Listening on port ' + port);
