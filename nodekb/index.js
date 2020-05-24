var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

const sqlite3 = require('sqlite3').verbose();
const DB_PATH = './NodejsSQL/sqlite.db';

//starting database
const DB = new sqlite3.Database(DB_PATH, function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + DB_PATH + ' database.')

    //enable foreign key
    DB.exec('PRAGMA foreign_keys = ON;', function(error)  {
        if (error){
            console.error("Pragma statement didn't work.")
        } else {
            console.log("Foreign Key Enforcement is on.")
        }
    });
});


dbSchema = `CREATE TABLE IF NOT EXISTS Pouzivatelia (
        id integer NOT NULL PRIMARY KEY,
        name text NOT NULL,
        age integer NOT NULL,
        sex text NOT NULL,
        test text NOT NULL,
        score integer NOT NULL
    );`

DB.exec(dbSchema, function(err){
    if (err) {
        console.log(err);
    }
});

//ulozenie udajov o uzivatelovi do databazy
function registerUser(name, age, sex, test, score) {
    var sql= "INSERT INTO Pouzivatelia (name, age, sex, test, score) "
    sql += "VALUES (?, ?, ?, ?, ?) "

    DB.run(sql, [name, age, sex, test, score], function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("Last ID: " + this.lastID)
            console.log("# of Row Changes: " + this.changes)
        }
    });
};



//vypisanie databazy na konzolu

/*function readUser(){

    DB.all("SELECT * FROM Pouzivatelia", function(err, rows) {

        rows.forEach(function (row) {
          console.log(row);    // and other columns, if desired

        })

    });

}*/

/*function getUsers() {
    var sql = 'SELECT * '
    sql += 'FROM Pouzivatelia '

    DB.all(sql, [], function(error, rows) {
        if (error) {
            console.log(error)
            return
        }

        listUserEmails(rows)
    });
}*/

//getUserEmails()
//DB.close();


app.get('/', function(req, res){
  res.sendFile('C:/Users/Lukáš Hudák/Desktop/serverova appka 23.5.2020/nodekb/views/index.html');
   //res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));



app.post('/', function (req, res){

  registerUser(req.body.meno, req.body.vek, req.body.pohlavie, req.body.testy, req.body.skore);


  DB.all('SELECT * FROM Pouzivatelia', function(error, rows, fields){
    if (error) console.log(error);

    else {
      //console.log(rows);
      res.send(rows);
    }
  });

});

/*app.post('/', function(req, res){
      //req.body obsahuje prenasane udaje
       /*console.log(req.body.meno);
       console.log(req.body.vek);
       console.log(req.body.pohlavie);
       console.log(req.body.testy);
       console.log(req.body.skore);


    //readUser();

    res.send("Udaje boli ulozene");
       /*var insert = function (req)
       {
           db.run('INSERT INTO Pouzivatelia (name, age, sex, test, score) VALUES ("'+req.body.meno+'","'+req.body.vek+'", "'+req.body.pohlavie+'", "'+req.body.testy+'", "'+req.body.skore+'")');
       }


});*/




app.listen(3000);
