var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){            
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
                var template = `
                <!DOCTYPE html>
            <html>
            <head>
            <title>${queryData.id}</title>
            <meta charset="utf-8">
            </head>
        
            <body>
             <h1><a href="index.html">The learning</a></h1>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ol>
            ${description}
            <p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D1PvIWdJ8xo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
            <h2>why Nodejs is so difficult? 어렵다...</h2>
            I think <u>Nodejs</u> is too difficult for me 
            <strong>most student dont think so too?</strong>
        
            <img src="iu.jpg" width="10%">
            <h2>First Student dont learn html</h2>
            <h3>So i have to find it and learn it while listening lecture</h3>
            <h4>But it is good experience learning that</h4>
        
            <a href="http://ecampus.smu.ac.kr/mod/webexactivity/view.php?id=554870" target="_blank" title="so good lecture">
                egoing teacher's lecture was wonderful</a> and im very inspired of that
            <br>thanks to my professor im learning in lifecoding site and seeing youtube too  
            <br>its very good video i've never seen this before
            <br>when i learn code or smt else if i blocked up with some codes i blocked too
            <br>but this video shows me all of code feature and i love it
        
        
        
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
                
            })
       
     

    }else{
        response.writeHead(404);
        response.end('Not found No site in here');
    }
 
   

 
});
app.listen(80);
