const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));


app.post("/submit-form", (req, res) => {
    const {name, email, request} = req.body; 
    console.log('Form submission:', {name, email, request});
    res.send("Form submitted successfully!");
});


app.listen(3000);
