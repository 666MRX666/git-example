
$.getJSON("http://ip-api.com/json/", function (data) {
    // let ips = $(".ip").text(data.ip); 
    
    console.log(data.query)
  });