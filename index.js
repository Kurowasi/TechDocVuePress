let app = require('express')()
let http = require('http').Server(app)
let bodyParser = require('body-parser')
let fs = require('fs')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/login', (req, res) => {
  res.contentType('application/json')
  res.end(JSON.stringify({
    loginInfo: {
      success: true
    }
  }))
})

app.post('/register', function (req, res) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);



  // res.setHeader('Content-Type', 'text/plain');
  fs.mkdirSync('./docs/' + req.body.title)
  fs.writeFileSync('./docs/' + req.body.title + '/README.md', req.body.description)
  res.end('success')
})

// /registerでディレクトリの検査をすれば消せる
app.post('/register-re', (req, res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);


  console.log(req.body)
  fs.writeFileSync('./docs/' + req.body.title + '/README.md', req.body.description)
  res.end('success')
})

app.post('/delete', (req, res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);


  console.log(req.body)
  fs.unlinkSync('./docs/' + req.body.title + '/README.md', req.body.description)
  fs.rmdirSync('./docs/' + req.body.title)
  res.end('success')
})

app.get('/dirLists', (req, res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);



  let dirpath = "./docs"
  let dirs = fs.readdirSync(dirpath).filter((f) => {
    return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
  })
  
  let sidebarItems = ((dirs) => {
    let items = []
    dirs.forEach((d, index) => {
      if (d !== '.vuepress' && d !== 'admin') {
        items.push(d)
      }
    })
    return items
  })(dirs)
  console.log(sidebarItems)
  res.end(JSON.stringify({
    dirLists: sidebarItems
  }))
})

app.post('/getDocument', (req, res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);



  let content = fs.readFileSync('./docs/' + req.body.dirName + '/README.md', 'utf8')
  res.end(content)
})

// app.listen(3000)
http.listen(3000, () => {
  console.log('listening on *:3000')
})