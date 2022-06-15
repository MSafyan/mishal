import bodyParser from "body-parser";
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
const app =express();
import Register from './routes/Register.js'
import Checkout from './routes/Checkout.js'
import Products from './routes/Products.js'
import cookieParser from "cookie-parser";
import path from 'path'

const url ="mongodb+srv://mishal:123@fa18.ahozu.mongodb.net/test";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("Connected to database"));






app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/Register", Register );
app.use("/Checkout", Checkout);
app.use("/Shop", Products);
app.use("/user",Checkout);
const __dirname = path.resolve(); 


app.use(express.static(path.join(__dirname, 'Frontend/build')));

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'Frontend/build/index.html'))
);

const port = process.env.PORT || 5000;

app.listen(port);