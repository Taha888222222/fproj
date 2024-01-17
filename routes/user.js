const express = require("express") ;
const { register, login,   getOneUser, updateInfos, updatePassword } = require("../controllers/user");

const { validation, registerValidator, loginValidator,  } = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");


const router = express.Router();

// register 

router.post('/register' , registerValidator(),validation, register)

//login

router.post('/login' , validation , loginValidator(), login)

router.get ("/current" , isAuth , (req,res) =>{
    res.send(req.user)
})

router.put('/:_id' , validation, updateInfos) 
router.put('/password/:_id',updatePassword) 

router.get('/:_id',getOneUser)

module.exports=router;