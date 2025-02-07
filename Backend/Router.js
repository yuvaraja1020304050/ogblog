const express=require('express');
const router=express.Router();
const {createuser,getalluser,getsingleuser,updateuser,deleteuser}=require('./Contoller')
router.post('/create',createuser)
router.get('/Read',getalluser)
router.get('/Read/:id',getsingleuser)
router.put('/update/:id',updateuser)
router.delete('/delete/:id',deleteuser)
module.exports=router;