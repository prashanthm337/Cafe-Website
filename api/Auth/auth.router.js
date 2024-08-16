const { login, create,changePassword,getById , get, update, deleteById,forgotPassword} = require("./auth.controller");
const router = require("express").Router();


router.post("/login", login)
        .post("/add", create)
        .post("/changePassword",changePassword)
        .get("/:id", getById) 
        .get("/", get)
        .post("/:id/update", update)
        .post("/forgotPassword",forgotPassword)
        .delete("/:id/delete", deleteById);

module.exports = router;