const htpp = require('http')
const data = require('./urls.json');
const URL = require('url')
const fs = require('fs');
const path = require('path');

const { stringify } = require('querystring');

htpp.createServer((req, res)=>{
    res.write(200, {
        'Access-Control-Allow-Origin':'*'
    })

// res.end(JSON.stringify(data))
const {name, url, del} = URL.parse(req.url, true).query;


//ALL RESOURCES
if(!name || !url)
    return res.end(JSON.stringify(data))


if(del){
    return data.urls = data.urls.filter(item =>String(item.url) !== String(url));
    fs.writeFile(path.join(__dirname, 'urls.json'), stringify(data, null, 4),
    err=>{
        if (err) throw err;

        res.end(JSON.stringify({message:"ok"}))
    })


}

data.urls.push({name, url})
return fs.writeFile(message => res.end(message))


}).listen(3000, ()=> console.log("API in 3000"));