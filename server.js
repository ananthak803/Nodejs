const express =require('express');
const app = express();

const {connectMongo} =require('./connection.js');
const urlRoute = require('./routes/index.js');
const staticRoute = require('./routes/staticRoute.js');
const userRoute = require('./routes/users.js');
const cookieParser = require('cookie-parser');
const {restrictToLoginUserOnly,checkAuth} = require('./middlewares/auth.js')

connectMongo('mongodb://127.0.0.1:27017/urlShortner').then(()=>{console.log("connnected to mongodb")}).catch((err)=>{console.log(err)});

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/url',restrictToLoginUserOnly,urlRoute);
app.use('/',checkAuth,staticRoute);
app.use('/user',userRoute);

const port = 3001;

app.listen(port,()=>{console.log(`server running at port ${port}`)});

