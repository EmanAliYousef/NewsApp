const express=require('express')
const app=express()
const port=3000
///////////////function /////
// const request=require('request')
const news=require('./tools/news')
// news((error,Data)=>{
//     console.log("Error ", error )
//     console.log("Data",Data)
// })
//////////////
const path=require('path')
const publicDirectory=path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.set('view engine','hbs')
const viewsPath=path.join(__dirname,'../templates/views')
app.set('views',viewsPath)
const hbs=require('hbs')  //to use register partials this step is needed
//to use header
const pathPartials=path.join(__dirname,'../templates/partials')
hbs.registerPartials(pathPartials)


app.get('/news',(req,res)=>{
    // if(!req.query.address){
    //     return res.send({error:"error in address "})
    // }
    news((error,data)=>{
     if(error){
         return res.send({error})
     }
     res.send({data})
     res.render('index',{
        description:data.description,
        title:data.title,
        urlToImage:data.urlToImage
    
    })
    })

})


app.listen(port,()=>{
console.log("server is running ...................")
})


