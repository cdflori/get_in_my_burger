const express = require("express")
const burger = require("../models/burger")
const router = express.Router();

router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res){
    //express callback response by calling 
    burger.all(function(burgerData){
        // const hbsObject = {
        //     burgers: data
        // };
        // console.log(hbsObject);
        res.render("index", {burger_data: burgerData});
    });
});

router.post("/burgers/create", function(req, res){
    burger.create("burger_name", [req.body.burger_name], function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res){
  burger.update(req.body, "id = " + req.params.id, function(result) {
      console.log(result);
      res.sendStatus(200);
  });
});


module.exports = router;