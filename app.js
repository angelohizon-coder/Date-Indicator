const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

// allows us to use external CSS files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  // since there is no method that allows to determine whether its monday or tuesday or any day of the week then place them in an array and use var n to get the numereical value
  // 0 for sunday 1 for monday and the rest increments by 1
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var d = new Date();
  var n = d.getDay();

  // if the JSON file is stored locally then it didn't went through the stream which means we dont need to parse it
  var json = require('./comments.json');
  var comment = dateSorter(json, days[n]);

  // EJS allows us to send multiple variables to the date.ejs
  res.render("date", {
    day: days[n], comment: comment
  });
});

app.listen(6900, function() {
  console.log("Server is running on port number 6900, nice.");
})

function dateSorter(json, date) {
  var temp;

  switch (date) {
    case "Sunday":
      temp = json.Sunday;
      break;
    case "Monday":
      temp = json.Monday;
      break;
    case "Tuesday":
      temp = json.Tuesday;
      break;
    case "Wednesday":
      temp = json.Wednesday;
      break;
    case "Thursday":
      temp = json.Thursday;
      break;
    case "Friday":
      temp = json.Friday;
      break;
    case "Saturday":
    temp = json.Saturday;
      break;
    default:
      // code block
  }

  return temp;
};
