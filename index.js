const express = require('express');
const app = express();

//JSON
//objects(key : Value)
app.use(express.json())

// req {
//     "a": 3,
//     "b": 4
// }

// res {
//     "sum": 7
// }

function addNums(req, res){
 const a = req.body.a;
 const b = req.body.b;
 const sum = a + b;
 res.send({"sum": sum});
}

//GET, POST, PUT, DELETE
app.get('/addTwoNums', addNums)

const Port = 3001
const ip = "localhost";

app.listen(port, ip, function);
{
    console.log("I am listening");
}
