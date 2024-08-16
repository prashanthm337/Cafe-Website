
const pool = require("../../config/dbconfig");

module.exports  = {
     createData:(data, callBack) => {
        
                var date=new Date();
                var status="active";
                
                    pool.query(
                        `INSERT INTO category(category_name,category_date,category_status) VALUES (?,?,?)`,
                         [
                            data.category_name,
                            date,
                            status
                         ],
                         (err,results) =>{
                             if(err){
                                return callBack(err);   
                             }
                             else{
                                 return callBack(null, results);
                             }
                         }
                     );
               
                  
     },
     
     getData:(callBack) => {
         pool.query(
            `select * from category`,
            (err,results) => {
                if(err){
                    return callBack(err);
                }else if(results == ""){
                    err = "Data Not Found";
                    return callBack(err);
                }else{
                    return callBack(null, results);
                }

            }
         );
     },
     
    
     
};
