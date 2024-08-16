const { fetchuser,creates, changepwd,gets, getsById, updates, deletesById ,forgotpwd} = require("./auth.services");
const { genSaltSync, hashSync} = require("bcrypt");
const { get } = require("express/lib/response");
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

module.exports = {
    login:(req,res) =>{
        const body = req.body;
       
        fetchuser(body, (err, results) => {
            if(err){
                // console.log(err);
                return res.status(500).json( {
                    success:0,
                    status:500,
                    error:err           
                }); 
            }
            else{
                return res.status(200).json({
                    success:1,
                    data:{
                        userToken:results.token,
                        user_type:results.user_type,
                        user_email:results.user_email,
                        user_name:results.user_name,
                        id:results.id,
                        id2:results.id2
                    },
                    status:200
                });
            }            
        });
    },
     
     create:(req,res) => {
        const bodyData = req.body;
        creates(bodyData, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    data:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     changePassword:(req,res) => {
        const bodyData = req.body;

        changepwd(bodyData,(err,results) => {
            if(err){
                return res.status(500).json( {
                    success:0,
                    status:500,
                    error:err
                });
            }else if(results){
                return res.status(200).json( {
                    success:1,
                    status:200,
                    message:results
                });
            }
        });
      
        
    },
     getById:(req,res) => {
        const id = req.params.id;
        getsById(id, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    data:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     get:(req,res) => {        
        gets((err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    data:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     update:(req,res) => {
        const body = req.body;
        const id = req.params.id;
        updates(body, id, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    message:results
                });
            }
        });
     },
     deleteById:(req,res) => {
        const id = req.params.id;
        deletesById(id, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    error:err,
                    status:500
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     verifyToken:(req, res, next) => {
        //get the auth header value
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== "undefined"){
            const bearer = bearerHeader.split(":");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            jwt.verify(req.token, 'secretkey', (err, authData) => {
                if(err){
                    res.status(403).json({
                        success:0,
                        status:500,
                        error:err
                    });
                }
                else{   
                    req.authData = authData;                
                    next();
                    // res.status(403).json({
                    //     authData,
                    //     status:200
                    // });
                }
            });

            
           
        }else{
            res.status(403).json({
                error:"unauthenticated",
                status:403
            });
        }
    },
    forgotPassword:(req,res)=>{
        const body=req.body;
        forgotpwd(body,(errromessge,results)=>{ 
            if(errromessge){
                return res.status(500).json({
                    success:0,
                    status:500,
                    err:errromessge
                });
            }else if(results){
                var mailReq = {
                    to:body.user_email,
                    subject:"You recently requested reset your password",
                    html:'Dear '+body.user_email+'<br> You recently requested reset your password<br> Password : '+results.user_password+'<br><br> Thank you<br>Team'+'testcompany'
                };
        
                mail(mailReq,res);


                // return res.status(200).json({
                //     success:1,
                //     status:200,
                //     message:results

                // })
            }

        });
    },

    
};
const mail = (mailReq,res) => { 

    var transporter = nodemailer.createTransport({
            service: 'gmail',       
            PORT:465,
            auth: {
                user: process.env.EMAILID,
                pass: process.env.PASSWORD
            },
            logger:true,
            debug:true
    });

    var infos = "information";
    var err = "error";

    transporter.sendMail(mailReq, function(error, info){
        if (error) {
            console.log(error);
            //mailReq.err = error;            
        } else {

        console.log('Email sent: ' + info.response);        
            return res.json({
                success:1,
                subject:mailReq.subject,
                data:"message sent"
            });             

        }
    }); 
    
};

