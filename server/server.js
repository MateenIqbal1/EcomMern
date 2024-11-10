//mongo username=mateeniqbal840,
//mongo password=YWpTTUm5kXNQAvYt
const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRouter=require('./routes/auth/auth-routes')
const app=express()
const adminProductsRouter = require('./routes/admin/product-routes')
const shopProductsRouter=require('./routes/shop/productShopRoutes')
const shopCartRouter=require('./routes/shop/cartRoutes')

//create a database connection 
mongoose.connect('mongodb+srv://mateeniqbal840:YWpTTUm5kXNQAvYt@cluster0.hqbek.mongodb.net/')
    .then(() => console.log('Mongodb connected'))
    .catch(error => console.log(error));

app.use(
    cors({
        origin:'http://localhost:5173',
        methods:['GET','POST','DELETE','PUT'],
        allowHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
)
const PORT=process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/api/admin/products',adminProductsRouter)
app.use('/api/shop/products',shopProductsRouter)
app.use('/api/shop/cart',shopCartRouter)


app.listen(PORT,()=>console.log(`server is now running on the PORT ${PORT}`))
