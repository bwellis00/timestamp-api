var express = require('express');
var moment = require('moment');

var app = express();

var port = process.env.PORT || 8080;

app.get('/:date', function(req, res){

  var date = req.params.date;
  
  if(isNaN(date))
  {
    date = moment(date, "MMMM D, YYYY");    
  }
  else
  {
    date = moment(date, "X");  
  }
  
  if(date.isValid())
  {
      
    res.json(
        {
        unix: moment(date).format("X"),   
        natural: moment(date).format("MMMM D, YYYY")    
        }
        
        )
      
  }
  
  else
  {
      
    res.json(
        {
        unix: null, 
        natural: null
        }
        );
      
  }
  

    

  
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});