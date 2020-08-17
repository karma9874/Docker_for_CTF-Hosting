const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

const flag = "darkCTF{345y_p345y_JWTs}"

app.use(express.json())
app.use(cookieParser());

const jwt_secret = "v3rymuchs3cur3dp455@123"

app.get('/robots.txt', (req, res) => {
  res.send("Disallow : /flag")
});

app.post('/robots.txt', (req, res) => {
  res.send("Disallow : /flag")
});

app.get('/login', (req, res) => {
  res.send('<h3>Nope, send json payload by post request.</h3>Example payload :- {"user":"karma","pass":"karma"}')
});

app.get('/', (req, res) => {
  res.send("<h3>Welcome to the main page</h3>To login use <b>/login</b> and btw I love post req only :p<br> ps: set header for specifying json")
});

app.post('/flag', (req, res) => {
  var data = req.body.token;
  if(data){
  	var decoded = jwt.decode(data);
  	if(decoded['user'] == 'admin'){
    res.send(flag);
  }else{
    res.send("Not the admin, no flag for you ");
  }
  }else{
  	res.send("gimme token and i will give you the flag")
  }
  
});

app.post('/login',(req, res) => {
	var data = req.body;
  	console.log(data);
	if(data['user'] && data['pass']){
    var jwt = require('jsonwebtoken');
    var token = jwt.sign({'user':'guest'},jwt_secret,{noTimestamp:true});
    res.json({"token":token});
	}else{
		res.send("Invalid post data");
	}
});

app.listen(9999, () => console.log('Server started on port 9999'));