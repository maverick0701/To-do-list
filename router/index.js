const express=require('express');
const router=express.Router();
const toDolist=require('../controller/toDolist_controller');


//list of different routes controller
router.get('/',toDolist.home);
router.post('/addlist',toDolist.homePost);
router.get('/eventdelete',toDolist.deleteIt);
module.exports=router;