var express = require('express');
const axios = require('axios').default;
var router = express.Router();

/* GET test. */
/*const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
router.use(function (req, res, next) {
  req.requestTime = new Date().toLocaleDateString("en-US", options)
  next()
});*/
router.get('/', function (req, res) {
    var responseText;
    axios.get('http://34.93.158.237:5000/route/v1/driving/-6.259345,53.351471;-6.250504,53.342658', {
      params: {
        steps: true
      }
    })
    .then(function (response) {
      //console.log('call success ' + JSON.stringify(response.data))
      responseText = response.data;
    })
    .catch(function (error) {
      console.log('call error')
      responseText = error;
    })
  //http://34.93.158.237:5000/route/v1/driving/-6.259345,53.351471;-6.250504,53.342658?steps=true
  res.send(responseText)
})

module.exports = router;
