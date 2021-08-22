const request=require('request')
const news=function(callback){
    const url='https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=466bb055709a4e679eeea2a242ad4ca3'
    request({url,json:true},(error,response)=>{
    
           if(error){
                callback("Unable To connect To Server" , undefined)
                return error
             }
             var data=response.body
             data.articles.forEach(element => {
                 var x = element.description;
                 var y=element.title
                 var z=element.urlToImage
                 var dataObject={
                     description:x,
                     tirle:y,
                     urlToImage:z
                 }
            // console.log( dataObject)
            callback(undefined,dataObject)
        });
        
    })
    }
    module.exports=news