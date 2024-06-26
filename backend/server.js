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
        const { pkgname, reason} = req.body;
        const newfav = await pool.query("INSERT INTO favlist (pkgname,reason) VALUES($1,$2) RETURNING *", [pkgname,reason]);
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
        await pool.query("UPDATE favlist SET reason=$1 WHERE pkgname=$2",[data.reason,data.pkgname])
        res.json("reason edited sucessfully");
    } catch (err) {
        console.error(err);
    }
})

//delete fav reason

//


app.listen(4000, ()=>{
    console.log("I'm listening");
})