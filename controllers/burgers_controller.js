const express = require("express")
const burger = require("../models/burger")
const router = express.Router();

router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/", function (req, res){
    //express callback response by calling 
    burger.all(function(data){
        // const hbsObject = {
        //     burgers: data
        // };
        // console.log(hbsObject);
        res.render("index", {burgers: data});
    });
});

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res){
  burger.update(req.params.id, function(result) {
      console.log(result);
      res.sendStatus(200);
  });
});


module.exports = router;