const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
const port = 9000;


app.get('/', (req, res) => {
    res.send("Hello from my second node server . I am learning node.To learn ");
})

const users=[
    { id:0,
    name:"shabana",
    email:"Shabana2342yahoo.com"
    },
    { id:1,
    name:"Shabnur",
    email:"Shabnur2342yahoo.com"
    },
    { id:2,
    name:"Popi",
    email:"Popi2342yahoo.com"
    },
    { id:3,
    name:"Bobita",
    email:"Bobita2342yahoo.com"
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter.
    if(search){
        const serachResult  = users.filter(user=>user.name.toLocaleLowerCase().includes(search ));
        res.send(serachResult);
    }
    else{
        res.send(users)
    }
})

//app.METHOD
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mangoes','banana','apple'])
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Yummy Yummy tok marka fazili')
})

app.listen(port, () => {
    console.log('Listening to port ', port)
})