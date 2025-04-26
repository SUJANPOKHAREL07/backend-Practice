import http from 'http'
import fs from 'fs'

const server =http.createServer((req,res)=>{
  console.log("server is conncted",req.url)
  
  if(req.url==="/product"){
    console.log("product form is opened")
    res.write(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Me</title>
</head>
<body>
  <h1>Contact Me</h1>
  <form action="http://localhost:4000/submit-form" method="POST">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" required></textarea><br><br>

    <button type="submit">Send</button>
  </form>
</body>
</html>
      `);
    res.end();
    return;
  }
if(req.url==="submit-form"){
    console.log("form submitted")
}
        
})