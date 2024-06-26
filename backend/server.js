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

//delete fav reason

//


app.listen(4000, ()=>{
    console.log("I'm listening");
})