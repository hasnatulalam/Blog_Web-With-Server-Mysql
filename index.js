import express from 'express';
import cookieParser from 'cookie-parser';
import postsRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js'
import multer from 'multer';

const app =express()

app.use(express.json())
app.use(cookieParser())
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, '../client/public/upload')
   },
   filename: function (req, file, cb) {
  
     cb(null, Date.now()+file.originalname)
   }
 })
 const upload = multer({ storage })


app.post('/api/upload', upload.single('file'), function (req, res) {
   const file =req.file
   res.status(200).json(file.filename)
  
 })

app.use('/api/posts',postsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',usersRoutes)

app.listen(5000,(req,res)=>{
   console.log("app listening port 5000");
})