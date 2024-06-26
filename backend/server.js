const express= require("express");
const app = express();
const cors= require("cors");


const pool = require("./db");

//midleware
app.use(cors());
app.use(express.json());

//routes

//show fav list
app.get('/displayfavs', async (req, res) => {
    try {
        const displayallfavs = await pool.query("SELECT (pkgname,reason) FROM favlist");
        res.json(displayallfavs);
    } catch (err) {
        console.error(err);
    }
})

//addfav
app.post('/addfav',async (req,res)=>{
    try {
        const { name, reason} = req.body;
        const newfav = await pool.query("INSERT INTO favlist (pkgname,reason) VALUES($1,$2)", [name,reason]);
        console.log(req.body);
        res.json(newfav);
    } catch (err) {
        console.error(err);
    }
})

//edit fav reason
app.put('/editfav',async (req,res)=>{
    try {
        const data=req.body;
        await pool.query("UPDATE favlist SET reason=$1 WHERE pkgname=$2",[data.reason,data.name])
        res.json("reason edited sucessfully");
    } catch (err) {
        console.error(err);
    }
})

//delete fav
app.delete('/deletefav', async (req, res) => {
    try {
        const {name} = req.body;
        await pool.query("DELETE FROM favlist WHERE pkgname=$1", [name])
        res.json("Package deleted sucessfully");
    } catch (err) {
        console.error(err);
    }
})

//get reason
app.get('/getreason',async (req,res)=>{
    try {
        const {name} = req.body;
        const reason = await pool.query("SELECT (reason) FROM favlist WHERE pkgname=$1",[name]);
        res.send(reason);
    } catch (err) {
        console.error(err);
    }
})


app.listen(4000, ()=>{
    console.log("I'm listening");
})