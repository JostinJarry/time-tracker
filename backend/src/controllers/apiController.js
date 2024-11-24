const getData=(req,res)=>{
    const data ={
        message:'hello from the backend api'
    }
    res.json(data);
}

module.exports={getData}