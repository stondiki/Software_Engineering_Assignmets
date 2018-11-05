var http = require('http');
var url = require('url');
var os = require('os');
var nums = [], avg, ip;

var networkInterfaces = os.networkInterfaces();
for (let devname in networkInterfaces){
    iface = networkInterfaces[devname];
    if(devname == "Wi-Fi"){
        iface = networkInterfaces[devname];
        alias = iface[1];
        ip = alias.address;
    }
    else if(devname == "wlan0"){
        iface = networkInterfaces[devname];
        alias = iface[0];
        ip = alias.address;
    }
}

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    var query = url.parse(request.url, true).query;
    if(!isNaN(query.num) && query.num != ""){
        nums.push({
            num : query.num,
            ip : request.connection.remoteAddress.slice(7)
        });
    }
    response.end(magic());
}).listen(9000);
console.log('Server running at http://'+ip+':9000');

function magic(){
    let sum = 0;
    let tbl = "<tr></tr>";
    let css = "<style>body, tr{text-align:center; font-family: verdana;} table{width: 400px; margin-left:calc(50% - 200px); border:solid black 1px;} tr:nth-child(even){background-color:#eee} tr:nth-child(odd){background-color:#fff} th{color:white; background-color:black;} td, th{padding: 5px;} input, button{width: 400px; height: 35px; margin: 10px; padding: 5px; text-align: center; font-size: 20px;}</style>";
    let form = "<form action=\"http://"+ip+":9000\" method=\"GET\"><input type=\"text\" name=\"num\" placeholder=\"Enter a number\" autocomplete=\"off\"/ autofocus><br><button>Submit</button></form>";
    for(let i = 0; i < nums.length; i++){
        sum = sum + parseInt(nums[i].num);
        tbl += "<tr><td>"+(i+1)+"</td><td>"+nums[i].num+"</td><td>"+nums[i].ip+"</td></tr>";
    }
    avg = eval(sum/nums.length);
    let html = "<html>"+css+"<h3>Average = "+avg+"<br>"+form+"<div id=\"tb\"></h3><table><th>Index</th><th>Value</th><th>IP Address</th>"+tbl+"</table></div></html>";
    return html;
}