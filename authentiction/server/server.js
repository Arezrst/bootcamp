const express=require("express")
const app = express()
const cors=require("cors")
const PORT=3000
app.use(cors())
app.use(express.json())
const authRoutes=require('./routes/auth.route')
const bookRoutes=require('./routes/book.route')

app.use('/api/auth',authRoutes)
app.use('/api/book',bookRoutes)


app.listen(PORT,()=>{
  console.log("listening on port");
})
